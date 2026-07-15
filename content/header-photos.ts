import { BentoImage } from '@/lib/types';

// Fotos reais dos encontros da comunidade no Brasil. O layout dos slots fica
// em bento-slots.ts; as fotos embaralham diariamente no servidor. Ao receber
// fotos de outras cidades, adicione aqui (rode pnpm validate:bento depois).
export const headerPhotoPool: BentoImage[] = [
	{
		src: '/images/events/aracaju-hero-01.jpg',
		alt: 'Foto de grupo da comunidade Cursor em um encontro em Aracaju',
	},
	{
		src: '/images/events/aracaju-hero-02.jpg',
		alt: 'Participantes trabalhando juntos em um meetup Cursor em Aracaju',
	},
	{
		src: '/images/events/aracaju-hero-03.jpg',
		alt: 'Plateia acompanhando uma sessão no meetup Cursor de Aracaju',
	},
	{
		src: '/images/events/aracaju-hero-04.jpg',
		alt: 'Palestrante falando com a comunidade em um encontro Cursor em Aracaju',
	},
	{
		src: '/images/events/aracaju-hero-05.jpg',
		alt: 'Participante com o copo do Cursor durante um meetup em Aracaju',
	},
	{
		src: '/images/events/aracaju-hero-06.jpg',
		alt: 'Camisetas do Cursor prontas para os participantes de um meetup em Aracaju',
	},
	{
		src: '/images/events/aracaju-hero-08.jpg',
		alt: 'Comunidade Cursor reunida no encontro de julho em Aracaju',
		objectPosition: 'center 30%',
	},
];
