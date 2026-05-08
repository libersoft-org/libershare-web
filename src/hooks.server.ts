import type { Handle } from '@sveltejs/kit';
import { PROJECT_NAME } from '$lib/scripts/project.ts';

export const handle: Handle = async ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace(/%project\.name%/g, PROJECT_NAME),
	});
};
