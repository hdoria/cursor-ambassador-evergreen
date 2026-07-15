'use client';

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/content/site.config';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui';

const NotFound: React.FC = () => {
	const { t } = useI18n();

	return (
		<main className="min-h-screen bg-cursor-bg text-cursor-text flex flex-col items-center justify-center px-6">
			<Image src="/cursor-logo.svg" alt="Cursor" width={120} height={32} className="h-8 w-auto mb-12 opacity-40" />
			<h1 className="text-6xl md:text-8xl font-normal tracking-tight text-cursor-text-faint mb-4">404</h1>
			<p className="text-cursor-text-muted text-lg mb-8">{t('notFound.body')}</p>
			<Button href="/" variant="primary" size="md">
				{t('notFound.back', { name: siteConfig.communityName })}
			</Button>
		</main>
	);
};

export default NotFound;
