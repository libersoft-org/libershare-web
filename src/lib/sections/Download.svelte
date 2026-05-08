<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '$lib/scripts/language.ts';
	import Section from '$lib/components/Section.svelte';
	import Card from '$lib/components/Card.svelte';
	import Cards from '$lib/components/Cards.svelte';
	import Icon from '$lib/components/Icon.svelte';

	interface DownloadItem {
		labelKey: string;
		labelVars?: Record<string, string>;
		filename?: string;
		href?: string;
	}

	interface Architecture {
		arch: string;
		labelKey: string;
		items: DownloadItem[];
	}

	interface PlatformGroup {
		name?: string;
		nameKey?: string;
		icon: string;
		architectures: Architecture[];
	}

	interface DownloadsData {
		version: string;
		platforms: PlatformGroup[];
	}

	function platformLabel(group: PlatformGroup): string {
		return group.name ?? (group.nameKey ? $t(group.nameKey) : '');
	}

	function resolveFilename(filename: string | undefined, version: string): string {
		if (!filename) return '';
		return filename.replace(/\{version\}/g, version);
	}

	let version: string = $state('');
	let downloads: PlatformGroup[] = $state([]);

	onMount(async () => {
		const res = await fetch('/downloads.json');
		const data: DownloadsData = await res.json();
		version = data.version;
		downloads = data.platforms;
	});

	let macosIntroParts = $derived.by(() => {
		const parts = $t('download.macos.intro').split('{error}');
		return { before: parts[0] ?? '', after: parts[1] ?? '' };
	});

	let versionParts = $derived.by(() => {
		const parts = $t('download.version').split('{version}');
		return { before: parts[0] ?? '', after: parts[1] ?? '' };
	});
</script>

<style>
	.section-desc {
		text-align: center;
		color: var(--text-muted);
		margin-bottom: 3rem;
		font-size: 1.05rem;
	}

	.version {
		text-align: center;
		font-weight: bold;
		margin-bottom: 1rem;
		font-size: 2rem;
	}

	.version-value {
		color: var(--foreground);
	}

	.cards-block {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.platform-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1.25rem 1.5rem;
		border-bottom: 1px solid var(--border-hover);
	}

	.platform-header h3 {
		font-size: 1.2rem;
		margin: 0;
	}

	.archs {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	.arch .header {
		padding: 5px 10px;
		font-size: 1rem;
		font-weight: bold;
		color: var(--background);
		background: var(--foreground);
	}

	.arch .downloads {
		list-style: none;
		padding: 0;
		background-color: var(--background-light);
	}

	.arch .downloads li {
		border-bottom: 1px solid var(--border-hover);
	}

	.download-link {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.85rem 1.5rem;
		color: var(--text);
		transition: background 0.3s;
	}

	.download-link:hover {
		background: var(--hover-bg);
	}

	.dl-label {
		flex: 1;
		font-weight: 500;
		font-size: 0.95rem;
	}

	.macos {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		text-align: center;
	}

	.macos .label {
		font-size: 20px;
		font-weight: bold;
		color: var(--foreground);
	}

	.macos .code {
		font-family: 'Ubuntu Mono', monospace;
		background: var(--background-light);
		padding: 5px;
		border-radius: 10px;
		font-size: 1.2rem;
		color: var(--foreground);
	}

	.bold {
		font-weight: bold;
	}
</style>

<Section id="download" title={$t('download.title')}>
	{#if version}<div class="version">{versionParts.before}<span class="version-value">{version}</span>{versionParts.after}</div>{/if}
	<div class="section-desc">{$t('download.description')}</div>
	<div class="cards-block">
		<Cards minWidth="300px">
			{#each downloads as group}
				<Card noPadding>
					<div class="platform-header">
						<Icon img={group.icon} alt={platformLabel(group)} size="28px" colorVariable="--foreground" />
						<h3>{platformLabel(group)}</h3>
					</div>
					<div class="archs">
						{#each group.architectures as arch}
							<div class="arch">
								{#if arch.labelKey}<div class="header">{$t(arch.labelKey)}</div>{/if}
								<ul class="downloads">
									{#each arch.items as item}
										<li>
											<a href={item.href ?? `/${resolveFilename(item.filename, version)}`} class="download-link" target="_blank" rel="noopener noreferrer">
												<span class="dl-label">{$t(item.labelKey, item.labelVars)}</span>
												<Icon img="/icons/download.svg" alt={$t('download.linkAlt')} size="20px" colorVariable="--text" />
											</a>
										</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</Card>
			{/each}
		</Cards>
		<Cards>
			<Card>
				<div class="macos">
					<div class="label">{$t('download.macos.title')}</div>
					<div>{macosIntroParts.before}<span class="bold">{$t('download.macos.error')}</span>{macosIntroParts.after}</div>
					<div>{$t('download.macos.runCommand')}</div>
					<div class="code">xattr -cr /path/to/LiberShare.app</div>
					<div>{$t('download.macos.exampleDmg')}</div>
					<div class="code">xattr -cr /Applications/LiberShare.app</div>
					<div>{$t('download.macos.exampleZip')}</div>
					<div class="code">xattr -cr ~/Downloads/LiberShare.app</div>
					<div>{$t('download.macos.explanation')}</div>
				</div>
			</Card>
		</Cards>
	</div>
</Section>
