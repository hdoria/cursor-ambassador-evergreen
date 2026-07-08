import { notFound } from 'next/navigation';
import SlideLayout from '@/modules/slides/components/SlideLayout';
import SlideContent from '@/modules/slides/components/SlideContent';
import { defaultSlideDeck } from '@/modules/slides/content/index';

interface SlidePageProps {
	params: Promise<{ id: string }>;
}

export function generateStaticParams() {
	return Array.from({ length: defaultSlideDeck.totalSlides }, (_, index) => ({
		id: String(index + 1),
	}));
}

export default async function SlidePage({ params }: SlidePageProps) {
	const { id: idParam } = await params;
	const id = Number(idParam);
	if (!Number.isInteger(id) || id < 1 || id > defaultSlideDeck.totalSlides) {
		notFound();
	}

	const slide = defaultSlideDeck.deck[id - 1];

	return (
		<SlideLayout currentSlide={id} totalSlides={defaultSlideDeck.totalSlides}>
			<div className="space-y-8">
				<header>
					<h1 className="text-2xl md:text-3xl font-bold">{slide.title}</h1>
				</header>
				<SlideContent slide={slide} />
			</div>
		</SlideLayout>
	);
}
