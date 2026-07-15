'use client';

import React from 'react';
import { Calendar, Globe } from 'lucide-react';
import { siInstagram, siWhatsapp } from 'simple-icons';
import { chapters } from '@/content/chapters';
import { useI18n } from '@/lib/i18n';
import { cardTile } from '@/components/ui';

/** Bandeiras flat dos estados em /public/images/flags/{uf}.svg */
const stateFlagSrc = (state: string) => `/images/flags/${state.toLowerCase()}.svg`;

type BrandIconProps = {
	iconPath: string;
};

const BrandIcon: React.FC<BrandIconProps> = ({ iconPath }) => {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
			<path d={iconPath} fill="currentColor" />
		</svg>
	);
};

type ChapterLinkProps = {
	href: string;
	ariaLabel: string;
	children: React.ReactNode;
};

const ChapterLink: React.FC<ChapterLinkProps> = ({ href, ariaLabel, children }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={ariaLabel}
			className="flex items-center gap-1.5 rounded border border-cursor-border px-2.5 py-1.5 text-xs text-cursor-text-muted hover:text-cursor-text hover:border-cursor-border-emphasis transition-colors"
		>
			{children}
		</a>
	);
};

const ChaptersSection: React.FC = () => {
	const { t } = useI18n();

	if (chapters.length === 0) {
		return null;
	}

	return (
		<section id="chapters" className="mb-20 scroll-mt-20">
			<p className="cursor-eyebrow mb-2">{t('chapters.eyebrow', { count: String(chapters.length) })}</p>
			<h2 className="cursor-section-title mb-8 text-cursor-text">{t('chapters.heading')}</h2>

			<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
				{chapters.map((chapter) => (
					<article key={chapter.slug} className={`${cardTile} relative p-5 group flex flex-col gap-4`}>
						{chapter.state ? (
							<img
								src={stateFlagSrc(chapter.state)}
								alt=""
								aria-hidden="true"
								width={28}
								height={19}
								className="absolute top-3.5 right-3.5 w-7 h-auto rounded-[1px] opacity-90 ring-1 ring-cursor-border pointer-events-none"
							/>
						) : null}
						<header className="pr-9">
							<h3 className="text-cursor-text font-medium">{chapter.city}</h3>
							{chapter.state ? (
								<p className="text-cursor-text-muted text-xs uppercase tracking-wide">{chapter.state}</p>
							) : null}
						</header>

						<div>
							{chapter.organizers.length > 0 ? <p className="cursor-eyebrow mb-1">{t('chapters.organizers')}</p> : null}
							<ul className="text-sm text-cursor-text-secondary">
								{[...chapter.organizers]
									.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
									.map((organizer) => (
										<li key={organizer.name}>
											{organizer.url ? (
												<a
													href={organizer.url}
													target="_blank"
													rel="noopener noreferrer"
													className="hover:text-cursor-text transition-colors"
												>
													{organizer.name}
												</a>
											) : (
												organizer.name
											)}
										</li>
									))}
							</ul>
						</div>

						<div className="flex flex-wrap items-center gap-2 mt-auto pt-1">
							<ChapterLink href={chapter.lumaUrl} ariaLabel={t('aria.chapterLuma', { city: chapter.city })}>
								<Calendar className="w-4 h-4" aria-hidden="true" />
								Luma
							</ChapterLink>
							{chapter.website ? (
								<ChapterLink href={chapter.website} ariaLabel={t('aria.chapterWebsite', { city: chapter.city })}>
									<Globe className="w-4 h-4" aria-hidden="true" />
									Site
								</ChapterLink>
							) : null}
							{chapter.whatsapp ? (
								<ChapterLink href={chapter.whatsapp} ariaLabel={t('aria.chapterWhatsapp', { city: chapter.city })}>
									<BrandIcon iconPath={siWhatsapp.path} />
									WhatsApp
								</ChapterLink>
							) : null}
							{chapter.instagram ? (
								<ChapterLink href={chapter.instagram} ariaLabel={t('aria.chapterInstagram', { city: chapter.city })}>
									<BrandIcon iconPath={siInstagram.path} />
									Instagram
								</ChapterLink>
							) : null}
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default ChaptersSection;
