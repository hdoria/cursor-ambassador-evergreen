import type { CursorEvent } from '@/lib/types';
import { chapters } from '@/content/chapters';
import { upcomingEvents as manualUpcomingEvents } from '@/content/events';
import { siteConfig } from '@/content/site.config';
import { fetchCalendarFutureEvents, mapLumaEventToCursor } from '@/lib/luma';

export interface AggregatedUpcomingEvents {
	events: CursorEvent[];
	errors: Array<{ chapterSlug: string; error: string }>;
}

// Entradas manuais em content/events.ts vencem as vindas do Luma, o que
// permite curar titulo, thumbnail ou host de um evento sem perder o feed.
function dedupeByLumaUrl(events: CursorEvent[]): CursorEvent[] {
	const seenUrls = new Set<string>();
	const deduped: CursorEvent[] = [];

	for (const event of events) {
		const key = event.lumaUrl?.replace(/\/+$/, '').toLowerCase();
		if (key) {
			if (seenUrls.has(key)) continue;
			seenUrls.add(key);
		}
		deduped.push(event);
	}

	return deduped;
}

export async function getAggregatedUpcomingEvents(): Promise<AggregatedUpcomingEvents> {
	const settled = await Promise.allSettled(
		chapters.map(async (chapter) => {
			const lumaEvents = await fetchCalendarFutureEvents(chapter.lumaCalendarId);
			return lumaEvents
				.map((lumaEvent) => mapLumaEventToCursor(lumaEvent, chapter, siteConfig.defaultLocale))
				.filter((event): event is CursorEvent => event !== null);
		}),
	);

	const errors: AggregatedUpcomingEvents['errors'] = [];
	const fromLuma: CursorEvent[] = [];
	settled.forEach((result, index) => {
		if (result.status === 'fulfilled') {
			fromLuma.push(...result.value);
		} else {
			errors.push({
				chapterSlug: chapters[index].slug,
				error: result.reason instanceof Error ? result.reason.message : String(result.reason),
			});
		}
	});

	if (errors.length > 0) {
		console.warn('[luma] partial calendar failures:', errors);
	}

	const events = dedupeByLumaUrl([...manualUpcomingEvents, ...fromLuma]).sort((a, b) =>
		(a.date ?? '9999').localeCompare(b.date ?? '9999'),
	);

	return { events, errors };
}
