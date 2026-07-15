// Cursor Brasil: site nacional da comunidade Cursor no Brasil.
export const siteConfig = {
	communityName: 'Cursor Brasil',
	communityNameLocal: 'Brasil',
	city: 'Brasil',
	country: 'Brasil',
	// Nao existe calendario Luma nacional. O CTA principal cai na secao de
	// capitulos; cada capitulo tem seu proprio calendario em content/chapters.ts.
	lumaUrl: '/#chapters',
	lumaCalendarEmbedUrl: '',
	cursorCommunityUrl: 'https://cursor.com/community',
	defaultLocale: 'pt-BR',
	locales: ['pt-BR', 'en'],
	footerTagline: 'Feito com Cursor por embaixadores em 11 cidades do Brasil',
	/** Short site description for <meta>, Open Graph, and Twitter cards. Keep it concrete. */
	description: 'Meetups, workshops e recaps da comunidade Cursor no Brasil. 11 capítulos, de Aracaju a Porto Alegre.',
	/** Path under /public for the default 1200×630 share image. */
	ogImage: '/og.jpg',
	sections: {
		matchmaking: false,
		photoDisclaimer: false,
		lumaCalendar: false,
		communityTweets: false,
	},
};

export type SiteConfig = typeof siteConfig;
