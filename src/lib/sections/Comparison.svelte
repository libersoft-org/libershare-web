<script lang="ts">
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
		feature: string;
		torrent: Cell;
		dc: Cell;
		libershare: Cell;
	}

	const rows: Row[] = [
		{ feature: 'Decentralized network', torrent: 'Partial (DHT)', dc: false, libershare: true },
		{ feature: 'Online library', torrent: false, dc: false, libershare: true },
		{ feature: 'Built-in content search', torrent: false, dc: true, libershare: true },
		{ feature: 'Decentralized content search', torrent: false, dc: false, libershare: true },
		{ feature: 'Multi-source parallel downloads', torrent: true, dc: true, libershare: true },
		{ feature: 'Media center interface', torrent: false, dc: false, libershare: true },
		{ feature: 'Gamepad support', torrent: false, dc: false, libershare: true },
		{ feature: 'Open source', torrent: true, dc: true, libershare: true },
	];
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

	/* Allow native height auto animation on details. */
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
		transition: height 0.3s ease, content-visibility 0.3s allow-discrete;
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

<Section id="comparison" title="Comparison">
	<div class="desktop">
		<Table>
			<Thead>
				<Tr>
					<Th align="left">Feature</Th>
					<Th highlight>LiberShare</Th>
					<Th>BitTorrent</Th>
					<Th>DC++</Th>
				</Tr>
			</Thead>
			<Tbody>
				{#each rows as row}
					<Tr>
						<Td bold>{row.feature}</Td>
						<Td align="center" highlight><ComparisonCell value={row.libershare} /></Td>
						<Td align="center"><ComparisonCell value={row.torrent} /></Td>
						<Td align="center"><ComparisonCell value={row.dc} /></Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</div>

	<div class="mobile">
		{#each rows as row}
			<details>
				<summary>
					<span>{row.feature}</span>
					<span class="chevron">
						<Icon img="/icons/chevron-right.svg" alt="" size="20px" colorVariable="--text-muted" />
					</span>
				</summary>
				<div class="detail-list">
					<div class="detail-row highlight">
						<span class="detail-label">LiberShare</span>
						<ComparisonCell value={row.libershare} />
					</div>
					<div class="detail-row">
						<span class="detail-label">BitTorrent</span>
						<ComparisonCell value={row.torrent} />
					</div>
					<div class="detail-row">
						<span class="detail-label">DC++</span>
						<ComparisonCell value={row.dc} />
					</div>
				</div>
			</details>
		{/each}
	</div>
</Section>
