<script lang="ts">
	import { currentLanguage, languages, setLanguage, getFlagURL, languageDialogOpen, closeLanguageDialog, t } from '../scripts/language.ts';
	import Dialog from './Dialog.svelte';

	function selectLanguage(id: string): void {
		setLanguage(id);
		closeLanguageDialog();
	}

	function handleItemClick(e: MouseEvent): void {
		const target = e.currentTarget as HTMLElement;
		const id = target.dataset.lang;
		if (id) selectLanguage(id);
	}

	function handleItemKey(e: KeyboardEvent): void {
		if (e.key !== 'Enter' && e.key !== ' ') return;
		e.preventDefault();
		const target = e.currentTarget as HTMLElement;
		const id = target.dataset.lang;
		if (id) selectLanguage(id);
	}
</script>

<style>
	.list {
		padding: 0.5rem;
	}

	.item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.6rem 0.75rem;
		border-radius: 8px;
		cursor: pointer;
		transition: background 0.15s;
	}

	.item:hover,
	.item:focus-visible {
		background: var(--hover-bg);
		outline: none;
	}

	.item.active {
		background: var(--hover-bg);
		box-shadow: inset 0 0 0 2px var(--foreground);
	}

	.flag {
		width: 32px;
		height: 22px;
		border-radius: 3px;
		overflow: hidden;
		flex: none;
	}

	.flag img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		pointer-events: none;
	}

	.name {
		color: var(--text);
		font-size: 1rem;
	}
</style>

<Dialog open={$languageDialogOpen} title={$t('menu.selectLanguage')} closeLabel={$t('menu.close')} onClose={closeLanguageDialog}>
	{#snippet body()}
		<div class="list">
			{#each languages as lang}
				<div class="item" class:active={$currentLanguage === lang.id} role="button" tabindex="0" data-lang={lang.id} aria-pressed={$currentLanguage === lang.id} onclick={handleItemClick} onkeydown={handleItemKey}>
					<span class="flag"><img src={getFlagURL(lang.id)} alt={lang.nativeLabel} draggable="false" /></span>
					<span class="name">{lang.label} ({lang.nativeLabel})</span>
				</div>
			{/each}
		</div>
	{/snippet}
</Dialog>
