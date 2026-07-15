import { Ambassador } from '@/lib/types';

// Embaixadores com foto e links entram aqui conforme enviarem o material.
// Sem foto, o card mostra as iniciais. Organizadores de cada cidade ficam em
// content/chapters.ts.
export const ambassadors: Ambassador[] = [
	{
		name: 'Hugo Dória',
		role: 'Embaixador Cursor · Aracaju',
		photo: '/images/ambassadors/hugo-doria.jpg',
		links: {
			instagram: 'https://instagram.com/hdoria',
			linkedin: 'https://linkedin.com/in/hdoria',
			website: 'https://hdoria.me',
		},
	},
	{
		name: 'Marlon Vidal',
		role: 'Embaixador Cursor · Belo Horizonte e Porto Alegre',
		photo: '/images/ambassadors/marlon-vidal.jpg',
		links: {
			instagram: 'https://instagram.com/marlonvidalf',
			linkedin: 'https://linkedin.com/in/marlonvidal',
		},
	},
	{
		name: 'Benjamin Bauer',
		role: 'Embaixador Cursor · Salvador',
		links: {
			instagram: 'https://instagram.com/benibauer',
			linkedin: 'https://www.linkedin.com/in/benjamin-bauer2/',
		},
	},
	{
		name: 'Marcelo Barella',
		role: 'Embaixador Cursor · Passo Fundo',
		links: {
			instagram: 'https://instagram.com/_mbarella',
			linkedin: 'https://www.linkedin.com/in/marcelo-barella-29ba63234/',
		},
	},
	{
		name: 'Rodrigo Silva',
		role: 'Embaixador Cursor · Rio de Janeiro e São Paulo',
		links: {
			instagram: 'https://instagram.com/rodrigosilvacio',
			linkedin: 'https://linkedin.com/in/rodrigosilvacio',
		},
	},
];
