<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Card from '$lib/components/Card.svelte';
	import Cards from '$lib/components/Cards.svelte';

	interface DownloadItem {
		label: string;
		filename?: string;
		href?: string;
	}

	interface Architecture {
		arch: string;
		label: string;
		items: DownloadItem[];
	}

	interface PlatformGroup {
		platform: string;
		icon: string;
		architectures: Architecture[];
	}

	import { onMount } from 'svelte';

	let downloads: PlatformGroup[] = $state([]);

	onMount(async () => {
		const res = await fetch('/downloads.json');
		downloads = await res.json();
	});
</script>

<style>
	.section-desc {
		text-align: center;
		color: var(--text-muted);
		margin-bottom: 3rem;
		font-size: 1.05rem;
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

	.platform-icon {
		width: 28px;
		height: 28px;
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
		/*border-bottom: 1px solid var(--border-hover);*/
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

	.dl-arrow {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
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
</style>

<Section id="download" title="Download">
	<div class="section-desc">Get LiberShare for your platform. All downloads are free and open source.</div>
	<div class="cards-block">
		<Cards minWidth="300px">
			{#each downloads as group}
				<Card noPadding>
					<div class="platform-header">
						<img class="platform-icon" src={group.icon} alt={group.platform} />
						<h3>{group.platform}</h3>
					</div>
					<div class="archs">
						{#each group.architectures as arch}
							<div class="arch">
								{#if arch.label}<div class="header">{arch.label}</div>{/if}
								<ul class="downloads">
									{#each arch.items as item}
										<li>
											<a href={item.href ?? `/${item.filename}`} class="download-link" target="_blank" rel="noopener noreferrer">
												<span class="dl-label">{item.label}</span>
												<img class="dl-arrow" src="/icons/download.svg" alt="Download" />
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
					<div class="label">Important note for macOS users:</div>
					<div>macOS Gatekeeper blocks unsigned / non-notarized apps downloaded from the internet with a <span class="bold">"is damaged and can't be opened"</span> error.</div>
					<div>After downloading the DMG or ZIP, run this command in Terminal before opening the app:</div>
					<div class="code">xattr -cr /path/to/LiberShare.app</div>
					<div>For example, after installing from DMG:</div>
					<div class="code">xattr -cr /Applications/LiberShare.app</div>
					<div>Or after extracting the ZIP:</div>
					<div class="code">xattr -cr ~/Downloads/LiberShare.app</div>
					<div>This removes the quarantine attribute and allows the app to run.</div>
				</div>
			</Card>
		</Cards>
	</div>
</Section>
