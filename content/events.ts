import { CursorEvent } from '@/lib/types';

// Eventos futuros chegam automaticamente dos calendarios Luma dos capitulos
// (lib/events-source.ts). Este arquivo serve para:
// 1. Curar um evento futuro (entrada manual com a mesma lumaUrl vence o feed).
// 2. Registrar eventos passados com recap (status: 'past' + recapPath).
export const events: CursorEvent[] = [];

export const upcomingEvents = events.filter((event) => event.status === 'upcoming');
export const pastEvents = events.filter((event) => event.status === 'past');
