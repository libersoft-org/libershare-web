<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { t } from '$lib/scripts/language.ts';

	type Cell = boolean | string;

	interface Props {
		value: Cell;
	}

	let { value }: Props = $props();

	function isText(v: Cell): v is string {
		return typeof v === 'string';
	}

	function markSrc(v: boolean): string {
		return v ? '/icons/check.svg' : '/icons/close.svg';
	}

	function markColor(v: boolean): string {
		return v ? '--success' : '--danger';
	}

	function markAlt(v: boolean): string {
		return v ? $t('comparison.yes') : $t('comparison.no');
	}
</script>

{#if isText(value)}
	{value}
{:else}
	<Icon img={markSrc(value)} alt={markAlt(value)} colorVariable={markColor(value)} />
{/if}
