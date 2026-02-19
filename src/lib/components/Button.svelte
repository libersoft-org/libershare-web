<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		children: Snippet;
	}

	let { href, children }: Props = $props();
</script>

<style>
	.btn {
		display: inline-block;
		padding: 0.75rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.8rem;
		letter-spacing: 0.5px;
		transition: all 0.2s;
		text-decoration: none;
		border: 2px solid var(--foreground);
		color: var(--foreground);
	}

	.btn:hover {
		background: var(--foreground);
		color: var(--background);
	}
</style>

<a {href} class="btn">
	{@render children()}
</a>
