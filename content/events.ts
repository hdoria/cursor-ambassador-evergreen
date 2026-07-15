import { CursorEvent } from '@/lib/types';

// Eventos futuros chegam automaticamente dos calendarios Luma dos capitulos
// (lib/events-source.ts). Este arquivo serve para:
// 1. Curar um evento (entrada manual com a mesma lumaUrl vence o feed).
// 2. Dar fotos reais e recap a eventos passados (thumbnail + galleryImages
//    com 2 fotos viram colagem no card; recapPath linka a pagina de recap).
export const events: CursorEvent[] = [
	{
		id: 'cursor-aracaju-2026-07-11',
		title: 'Cursor Aracaju',
		date: '2026-07-11',
		displayDate: '11 de julho de 2026',
		location: 'Aracaju, SE',
		lumaUrl: 'https://luma.com/cursor-kviw',
		thumbnail: '/images/events/aracaju-2026-07-01.jpg',
		galleryImages: ['/images/events/aracaju-2026-07-02.jpg', '/images/events/aracaju-2026-07-03.jpg'],
		host: { name: 'Cursor Aracaju', logo: '/cursor-logo.svg', url: 'https://luma.com/cursor-aracaju-brazil' },
		status: 'past',
	},
];

export const upcomingEvents = events.filter((event) => event.status === 'upcoming');
export const pastEvents = events.filter((event) => event.status === 'past');
