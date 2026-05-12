/** @type {import('next').NextConfig} */
const securityHeaders = [
	{ key: 'X-Content-Type-Options', value: 'nosniff' },
	// Kept alongside CSP frame-ancestors for backward compatibility with older browsers
	{ key: 'X-Frame-Options', value: 'DENY' },
	{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), bluetooth=()',
	},
	{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
	// Isolates the browsing context to prevent cross-origin window access (Spectre mitigation)
	{ key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
	// Prevents other origins from embedding this site's resources
	{ key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
	// Requires all sub-resources to opt in to cross-origin sharing; credentialless is safer than require-corp for third-party content
	{ key: 'Cross-Origin-Embedder-Policy', value: 'credentialless' },
];

const nextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},
};

module.exports = nextConfig;
