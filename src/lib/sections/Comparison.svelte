<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import Thead from '$lib/components/Table/Thead.svelte';
	import Tbody from '$lib/components/Table/Tbody.svelte';
	import Tr from '$lib/components/Table/Tr.svelte';
	import Th from '$lib/components/Table/Th.svelte';
	import Td from '$lib/components/Table/Td.svelte';
	interface Row {
		feature: string;
		torrent: boolean;
		dc: boolean;
		libershare: boolean;
	}
	const rows: Row[] = [
		{ feature: 'Decentralized network', torrent: true, dc: false, libershare: true },
		{ feature: 'Online library', torrent: false, dc: false, libershare: true },
		{ feature: 'Built-in content search', torrent: false, dc: true, libershare: true },
		{ feature: 'Decentralized content search', torrent: false, dc: false, libershare: true },
		{ feature: 'Multi-source parallel downloads', torrent: true, dc: false, libershare: true },
		{ feature: 'Media center interface', torrent: false, dc: false, libershare: true },
		{ feature: 'Gamepad support', torrent: false, dc: false, libershare: true },
		{ feature: 'Open source', torrent: true, dc: true, libershare: true },
	];

	function markSrc(value: boolean): string {
		return value ? '/icons/check.svg' : '/icons/close.svg';
	}

	function markColor(value: boolean): string {
		return value ? '--success' : '--danger';
	}

	function markAlt(value: boolean): string {
		return value ? 'yes' : 'no';
	}
</script>

<Section id="comparison" title="Comparison">
	<Table>
		<Thead>
			<Tr>
				<Th align="left">Feature</Th>
				<Th>BitTorrent</Th>
				<Th>DC++</Th>
				<Th highlight>LiberShare</Th>
			</Tr>
		</Thead>
		<Tbody>
			{#each rows as row}
				<Tr>
					<Td bold>{row.feature}</Td>
					<Td align="center"><Icon img={markSrc(row.torrent)} alt={markAlt(row.torrent)} colorVariable={markColor(row.torrent)} /></Td>
					<Td align="center"><Icon img={markSrc(row.dc)} alt={markAlt(row.dc)} colorVariable={markColor(row.dc)} /></Td>
					<Td align="center" highlight><Icon img={markSrc(row.libershare)} alt={markAlt(row.libershare)} colorVariable={markColor(row.libershare)} /></Td>
				</Tr>
			{/each}
		</Tbody>
	</Table>
</Section>
