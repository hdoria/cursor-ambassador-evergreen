import HeroHeader from '@/components/HeroHeader';
import { desktopBentoSlots } from '@/content/bento-slots';
import { headerPhotoPool } from '@/content/header-photos';
import { siteConfig } from '@/content/site.config';
import { assignHeroPhotos, dailyBentoSeed } from '@/lib/bento-assign';
import type { HeaderPhoto } from '@/lib/types';

// O primeiro slot (2x2 do topo esquerdo) fica coberto pelo painel de copy do
// HeroHeader; sem foto ali, nada vaza nas bordas arredondadas do painel.
function blankFirstSlot(photos: HeaderPhoto[]): HeaderPhoto[] {
	return photos.map((photo, index) => (index === 0 ? { ...photo, src: '', alt: '' } : photo));
}

export default function HeroHeaderServer() {
	const seed = dailyBentoSeed(siteConfig.communityName);
	const photos = assignHeroPhotos(headerPhotoPool, desktopBentoSlots, seed);

	return (
		<HeroHeader
			photos={{
				desktop: blankFirstSlot(photos.desktop),
				mobile: blankFirstSlot(photos.mobile),
			}}
		/>
	);
}
