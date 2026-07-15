import { WorldEventPhoto } from '@/lib/types';

// Fotos reais de encontros pelo Brasil (src, location, date, alt). A secao
// "Cursor pelo Brasil" so aparece quando este array tem fotos.
export const worldEventPhotos: WorldEventPhoto[] = [
	{
		src: '/images/events/aracaju-world-01.jpg',
		location: 'Aracaju',
		date: 'Julho de 2026',
		alt: 'Participantes do encontro da comunidade Cursor em Aracaju',
	},
	{
		src: '/images/events/canela-world-01.jpg',
		location: 'Canela',
		date: 'Julho de 2026',
		alt: 'Palestrante no workshop da comunidade Cursor em Canela',
	},
	{
		src: '/images/events/sp-world-01.jpg',
		location: 'São Paulo',
		date: 'Maio de 2026',
		alt: 'Participantes conversando no Cursor Meetup São Paulo',
	},
	{
		src: '/images/events/floripa-world-01.jpg',
		location: 'Florianópolis',
		date: 'Janeiro de 2026',
		alt: 'Participantes programando juntos no Cafe Cursor em Florianópolis',
	},
];
