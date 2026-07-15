'use client';

import React from 'react';
import Image from 'next/image';
import { Globe, Linkedin } from 'lucide-react';
import { siGithub, siInstagram, siX } from 'simple-icons';
import { ambassadors } from '@/content/ambassadors';
import { siteConfig } from '@/content/site.config';
import { useI18n } from '@/lib/i18n';
import { cardTile } from '@/components/ui';

type BrandIconProps = {
	iconPath: string;
};

const BrandIcon: React.FC<BrandIconProps> = ({ iconPath }) => {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
			<path d={iconPath} fill="currentColor" />
		</svg>
	);
};

type SocialIconProps = {
	kind: 'x' | 'instagram' | 'linkedin' | 'github' | 'cursor' | 'website';
};

const CursorMarkIcon: React.FC = () => {
	return (
		<svg viewBox="400 395 167 191" aria-hidden="true" className="w-4 h-4">
			<path
				fill="currentColor"
				d="M563.463 439.971L487.344 396.057C484.899 394.646 481.883 394.646 479.439 396.057L403.323 439.971C401.269 441.156 400 443.349 400 445.723V534.276C400 536.647 401.269 538.843 403.323 540.029L479.443 583.943C481.887 585.353 484.903 585.353 487.347 583.943L563.466 540.029C565.521 538.843 566.79 536.651 566.79 534.276V445.723C566.79 443.352 565.521 441.156 563.466 439.971H563.463ZM558.681 449.273L485.199 576.451C484.703 577.308 483.391 576.958 483.391 575.966V492.691C483.391 491.027 482.501 489.488 481.058 488.652L408.887 447.016C408.03 446.52 408.38 445.209 409.373 445.209H556.337C558.424 445.209 559.728 447.47 558.685 449.276H558.681V449.273Z"
			/>
		</svg>
	);
};

const SocialIcon: React.FC<SocialIconProps> = ({ kind }) => {
	if (kind === 'x') return <BrandIcon iconPath={siX.path} />;
	if (kind === 'instagram') return <BrandIcon iconPath={siInstagram.path} />;
	if (kind === 'linkedin') return <Linkedin className="w-4 h-4" />;
	if (kind === 'github') return <BrandIcon iconPath={siGithub.path} />;
	if (kind === 'cursor') return <CursorMarkIcon />;
	return <Globe className="w-4 h-4" />;
};

function initialsOf(name: string): string {
	const parts = name.trim().split(/\s+/);
	const first = parts[0]?.[0] ?? '';
	const last = parts.length > 1 ? (parts[parts.length - 1][0] ?? '') : '';
	return `${first}${last}`.toUpperCase();
}

const AmbassadorSection: React.FC = () => {
	const { t } = useI18n();

	if (ambassadors.length === 0) {
		return null;
	}

	return (
		<section id="community" className="mb-20 scroll-mt-20">
			<p className="cursor-eyebrow mb-2">{t('ambassadors.title', { communityName: siteConfig.communityName })}</p>
			<h2 className="cursor-section-title mb-8 text-cursor-text">{t('ambassadors.heading')}</h2>

			<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
				{[...ambassadors]
					.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
					.map((ambassador) => {
						const links = [
							{ kind: 'x' as const, href: ambassador.links.x },
							{ kind: 'instagram' as const, href: ambassador.links.instagram },
							{ kind: 'linkedin' as const, href: ambassador.links.linkedin },
							{ kind: 'github' as const, href: ambassador.links.github },
							{ kind: 'cursor' as const, href: ambassador.links.cursor },
							{ kind: 'website' as const, href: ambassador.links.website },
						].filter((entry) => Boolean(entry.href));

						return (
							<article key={ambassador.name} className={`${cardTile} p-5 group`}>
								<div className="flex items-center gap-4">
									<div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden border-2 border-cursor-border-emphasis">
										{ambassador.photo ? (
											<Image src={ambassador.photo} alt={ambassador.name} fill className="object-cover" sizes="80px" />
										) : (
											<span
												aria-hidden="true"
												className="flex h-full w-full items-center justify-center bg-cursor-surface text-lg text-cursor-text-muted"
											>
												{initialsOf(ambassador.name)}
											</span>
										)}
									</div>
									<div>
										<p className="text-cursor-text font-medium">{ambassador.name}</p>
										{ambassador.role ? <p className="text-cursor-text-muted text-sm">{ambassador.role}</p> : null}
									</div>
								</div>

								{links.length > 0 ? (
									<div className="flex items-center gap-3 mt-4">
										{links.map((link) => (
											<a
												key={`${ambassador.name}-${link.kind}`}
												href={link.href}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 rounded border border-cursor-border text-cursor-text-muted hover:text-cursor-text hover:border-cursor-border-emphasis transition-colors"
												aria-label={t('aria.socialLink', { name: ambassador.name, kind: link.kind })}
											>
												<SocialIcon kind={link.kind} />
											</a>
										))}
									</div>
								) : null}
							</article>
						);
					})}
			</div>
		</section>
	);
};

export default AmbassadorSection;
