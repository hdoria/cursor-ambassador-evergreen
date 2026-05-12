import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Analytics } from '@vercel/analytics/react';
import { I18nProvider } from '@/lib/i18n';
import { siteConfig } from '@/content/site.config';
import './globals.css';

export const metadata: Metadata = {
	title: `${siteConfig.communityName} | Cursor Ambassador Site`,
	description: 'Reusable Cursor Ambassador website template for local communities.',
	openGraph: {
		title: siteConfig.communityName,
		description: 'Reusable Cursor Ambassador website template for local communities.',
		type: 'website',
	},
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const headersList = await headers();
	const nonce = headersList.get('x-nonce') ?? '';

	return (
		<html lang={siteConfig.defaultLocale}>
			<body className="antialiased">
				<I18nProvider>{children}</I18nProvider>
				<Analytics nonce={nonce} />
			</body>
		</html>
	);
}
