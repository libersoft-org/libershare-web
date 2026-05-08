<script lang="ts">
	import { t } from '$lib/scripts/language.ts';
	import { PROJECT_NAME } from '$lib/scripts/project.ts';
	import Section from '$lib/components/Section.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import Thead from '$lib/components/Table/Thead.svelte';
	import Tbody from '$lib/components/Table/Tbody.svelte';
	import Tr from '$lib/components/Table/Tr.svelte';
	import Th from '$lib/components/Table/Th.svelte';
	import Td from '$lib/components/Table/Td.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import ComparisonCell from './ComparisonCell.svelte';
	type Cell = boolean | string;
	interface Row {
		featureKey: string;
		torrent: Cell;
		dc: Cell;
		project: Cell;
	}
	// Cell values that are translatable strings: encoded as keys prefixed with '@:'.
	const PARTIAL_DHT = '@:comparison.partialDht';
	const rows: Row[] = [
		{ featureKey: 'comparison.rows.decentralized', torrent: PARTIAL_DHT, dc: false, project: true },
		{ featureKey: 'comparison.rows.onlineLibrary', torrent: false, dc: false, project: true },
		{ featureKey: 'comparison.rows.builtInSearch', torrent: false, dc: true, project: true },
		{ featureKey: 'comparison.rows.decentralizedSearch', torrent: false, dc: false, project: true },
		{ featureKey: 'comparison.rows.parallelDownloads', torrent: true, dc: true, project: true },
		{ featureKey: 'comparison.rows.mediaCenter', torrent: false, dc: false, project: true },
		{ featureKey: 'comparison.rows.gamepad', torrent: false, dc: false, project: true },
		{ featureKey: 'comparison.rows.openSource', torrent: true, dc: true, project: true },
	];

	function resolveCell(cell: Cell, translate: (key: string) => string): Cell {
		if (typeof cell === 'string' && cell.startsWith('@:')) return translate(cell.slice(2));
		return cell;
	}
</script>

<style>
	/* Desktop view: full table. Hidden on mobile. */
	.desktop {
		display: block;
	}

	/* Mobile view: accordion list. Hidden on desktop. */
	.mobile {
		display: none;
		flex-direction: column;
		border-radius: 12px;
		overflow: hidden;
		background: var(--background);
		box-shadow: var(--shadow);
	}

	@supports (interpolate-size: allow-keywords) {
		:root {
			interpolate-size: allow-keywords;
		}
	}

	details {
		border-bottom: 1px solid var(--separator);
	}

	details:last-child {
		border-bottom: none;
	}

	summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 1.25rem;
		cursor: pointer;
		font-weight: 500;
		list-style: none;
		user-select: none;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	summary:hover {
		background: var(--hover-bg);
	}

	.chevron {
		transition: transform 0.25s ease;
	}

	details[open] > summary .chevron {
		transform: rotate(90deg);
	}

	::details-content {
		height: 0;
		overflow: clip;
		transition:
			height 0.3s ease,
			content-visibility 0.3s allow-discrete;
	}

	details[open]::details-content {
		height: auto;
	}

	.detail-list {
		display: flex;
		flex-direction: column;
		padding: 0 1.25rem 1rem;
		gap: 0.5rem;
	}

	.detail-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 0.75rem;
		border-radius: 8px;
		background: var(--background-light);
	}

	.detail-row.highlight {
		background: rgba(255, 209, 0, 0.1);
	}

	.detail-label {
		font-weight: 500;
	}

	@media (--mobile) {
		.desktop {
			display: none;
		}

		.mobile {
			display: flex;
		}
	}
</style>

<Section id="comparison" title={$t('comparison.title')}>
	<div class="desktop">
		<Table>
			<Thead>
				<Tr>
					<Th align="left">{$t('comparison.feature')}</Th>
					<Th highlight>{PROJECT_NAME}</Th>
					<Th>{$t('comparison.bittorrent')}</Th>
					<Th>{$t('comparison.dc')}</Th>
				</Tr>
			</Thead>
			<Tbody>
				{#each rows as row}
					<Tr>
						<Td bold>{$t(row.featureKey)}</Td>
						<Td align="center" highlight><ComparisonCell value={resolveCell(row.project, $t)} /></Td>
						<Td align="center"><ComparisonCell value={resolveCell(row.torrent, $t)} /></Td>
						<Td align="center"><ComparisonCell value={resolveCell(row.dc, $t)} /></Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</div>
	<div class="mobile">
		{#each rows as row}
			<details>
				<summary>
					<span>{$t(row.featureKey)}</span>
					<span class="chevron">
						<Icon img="/icons/chevron-right.svg" alt="" size="20px" colorVariable="--text-muted" />
					</span>
				</summary>
				<div class="detail-list">
					<div class="detail-row highlight">
						<span class="detail-label">{PROJECT_NAME}</span>
						<ComparisonCell value={resolveCell(row.project, $t)} />
					</div>
					<div class="detail-row">
						<span class="detail-label">{$t('comparison.bittorrent')}</span>
						<ComparisonCell value={resolveCell(row.torrent, $t)} />
					</div>
					<div class="detail-row">
						<span class="detail-label">{$t('comparison.dc')}</span>
						<ComparisonCell value={resolveCell(row.dc, $t)} />
					</div>
				</div>
			</details>
		{/each}
	</div>
</Section>
