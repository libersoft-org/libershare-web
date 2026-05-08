<script lang="ts">
	import { currentLanguage, languages, setLanguage, getFlagURL, t } from '../scripts/language.ts';

	function selectLanguage(id: string): void {
		setLanguage(id);
	}

	function handleClick(e: MouseEvent): void {
		const target = e.currentTarget as HTMLElement;
		const id = target.dataset.lang;
		if (id) selectLanguage(id);
	}

	function handleKey(e: KeyboardEvent): void {
		if (e.key !== 'Enter' && e.key !== ' ') return;
		e.preventDefault();
		const target = e.currentTarget as HTMLElement;
		const id = target.dataset.lang;
		if (id) selectLanguage(id);
	}
</script>

<style>
	.switcher {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	.flag {
		display: inline-flex;
		width: 28px;
		height: 20px;
		border-radius: 3px;
		overflow: hidden;
		cursor: pointer;
		opacity: 0.55;
		transition:
			opacity 0.2s,
			transform 0.2s,
			box-shadow 0.2s;
		border: 1px solid var(--border, transparent);
		background: var(--background-light, transparent);
	}

	.flag:hover {
		opacity: 1;
		transform: translateY(-1px);
	}

	.flag.active {
		opacity: 1;
		box-shadow: 0 0 0 2px var(--foreground);
	}

	.flag img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
		pointer-events: none;
	}
</style>

<div class="switcher" role="group" aria-label={$t('menu.selectLanguage')}>
	{#each languages as lang}
		<div class="flag" class:active={$currentLanguage === lang.id} role="button" tabindex="0" data-lang={lang.id} aria-label={lang.nativeLabel} aria-pressed={$currentLanguage === lang.id} title={lang.nativeLabel} onclick={handleClick} onkeydown={handleKey}>
			<img src={getFlagURL(lang.id)} alt={lang.nativeLabel} draggable="false" />
		</div>
	{/each}
</div>
