import { PROJECT_NAME, PROJECT_URL, PROJECT_REPO_URL } from './project.ts';
// Version is read from the same manifest the download section uses, so the
// structured data never drifts from the actual release.
import downloads from '../../../static/downloads.json';

// JSON-LD (schema.org) for the LiberShare landing page. It is emitted into the
// prerendered <head> so crawlers can build rich results for the software, the
// site, and the publisher. Strings are kept in English — the default crawl
// language — and derived from project constants wherever possible.

const ORG_ID = `${PROJECT_URL}/#organization`;
const SCREENSHOT_COUNT = 9;

const screenshots = Array.from({ length: SCREENSHOT_COUNT }, (_, i) => `${PROJECT_URL}/screenshots/${String(i + 1).padStart(2, '0')}.webp`);

/** schema.org graph: Organization (publisher) + WebSite + SoftwareApplication. */
export const structuredData = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Organization',
			'@id': ORG_ID,
			name: 'Libersoft',
			url: 'https://github.com/libersoft-org',
			logo: `${PROJECT_URL}/favicon.svg`,
		},
		{
			'@type': 'WebSite',
			'@id': `${PROJECT_URL}/#website`,
			name: PROJECT_NAME,
			url: PROJECT_URL,
			description: 'Peer-to-peer file sharing built on modern decentralized technologies. No central servers. No single point of failure.',
			inLanguage: 'en',
			publisher: { '@id': ORG_ID },
		},
		{
			'@type': 'SoftwareApplication',
			'@id': `${PROJECT_URL}/#app`,
			name: PROJECT_NAME,
			description: 'LiberShare is a peer-to-peer file sharing application built on libp2p with a fully decentralized architecture — no central servers and no single point of failure.',
			applicationCategory: 'UtilitiesApplication',
			operatingSystem: 'Windows, Linux, macOS',
			url: PROJECT_URL,
			downloadUrl: `${PROJECT_REPO_URL}/releases`,
			softwareVersion: downloads.version,
			screenshot: screenshots,
			offers: {
				'@type': 'Offer',
				price: '0',
				priceCurrency: 'USD',
			},
			isAccessibleForFree: true,
			license: 'https://unlicense.org/',
			author: { '@id': ORG_ID },
			publisher: { '@id': ORG_ID },
			sameAs: PROJECT_REPO_URL,
		},
	],
};

/** Serialized <script> tag, with '<' escaped so the JSON can't break out of the tag. */
export const structuredDataScript = `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`;
