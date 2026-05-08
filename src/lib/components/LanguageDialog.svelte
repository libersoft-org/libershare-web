<script lang="ts">
	import { currentLanguage, languages, setLanguage, getFlagURL, languageDialogOpen, closeLanguageDialog, t } from '../scripts/language.ts';

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

	function handleBackdropClick(e: MouseEvent): void {
		if (e.target === e.currentTarget) closeLanguageDialog();
	}

	function handleBackdropKey(e: KeyboardEvent): void {
		if (e.key === 'Escape') {
			e.preventDefault();
			closeLanguageDialog();
		}
	}
</script>

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 1rem;
	}

	.dialog {
		background: var(--background);
		border: 1px solid var(--border-hover);
		border-radius: 12px;
		box-shadow: var(--shadow);
		max-width: 420px;
		width: 100%;
		max-height: 80vh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.dialog-header {
		padding: 1rem 1.25rem;
		border-bottom: 1px solid var(--border);
		font-weight: bold;
		color: var(--foreground);
		font-size: 1.1rem;
	}

	.list {
		overflow-y: auto;
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

{#if $languageDialogOpen}
	<div class="backdrop" role="button" tabindex="-1" aria-label={$t('menu.selectLanguage')} onclick={handleBackdropClick} onkeydown={handleBackdropKey}>
		<div class="dialog" role="dialog" aria-modal="true" aria-label={$t('menu.selectLanguage')}>
			<div class="dialog-header">{$t('menu.selectLanguage')}</div>
			<div class="list">
				{#each languages as lang}
					<div class="item" class:active={$currentLanguage === lang.id} role="button" tabindex="0" data-lang={lang.id} aria-pressed={$currentLanguage === lang.id} onclick={handleItemClick} onkeydown={handleItemKey}>
						<span class="flag"><img src={getFlagURL(lang.id)} alt={lang.nativeLabel} draggable="false" /></span>
						<span class="name">{lang.nativeLabel}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
