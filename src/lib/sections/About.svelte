<script lang="ts">
	import { t } from '$lib/scripts/language.ts';
	import Section from '$lib/components/Section.svelte';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import Cards from '$lib/components/Cards.svelte';

	interface Feature {
		icon: string;
		titleKey: string;
		descriptionKey: string;
	}

	const features: Feature[] = [
		{ icon: '/icons/decentralized.svg', titleKey: 'about.features.decentralized.title', descriptionKey: 'about.features.decentralized.description' },
		{ icon: '/icons/access-control.svg', titleKey: 'about.features.accessControl.title', descriptionKey: 'about.features.accessControl.description' },
		{ icon: '/icons/ui.svg', titleKey: 'about.features.ui.title', descriptionKey: 'about.features.ui.description' },
		{ icon: '/icons/data-format.svg', titleKey: 'about.features.dataFormat.title', descriptionKey: 'about.features.dataFormat.description' },
		{ icon: '/icons/security.svg', titleKey: 'about.features.security.title', descriptionKey: 'about.features.security.description' },
		{ icon: '/icons/cross-platform.svg', titleKey: 'about.features.crossPlatform.title', descriptionKey: 'about.features.crossPlatform.description' },
	];

	let intro = $derived($t('about.intro'));
	let licenseLabel = $derived($t('about.license'));
	// Split intro around the {license} placeholder so we can render the link tag inline.
	let introParts = $derived.by(() => {
		const parts = intro.split('{license}');
		return { before: parts[0] ?? '', after: parts[1] ?? '' };
	});
</script>

<style>
	.about-intro {
		font-size: 1.1rem;
		text-align: center;
		margin: 0 auto 3rem;
		max-width: 800px;
		line-height: 1.8;
		color: var(--text);
	}
</style>

<Section id="about" title={$t('about.title')}>
	<div class="about-intro">{introParts.before}<a href="https://github.com/libersoft-org/libershare/blob/main/LICENSE" target="_blank">{licenseLabel}</a>{introParts.after}</div>
	<Cards>
		{#each features as feature}
			<FeatureCard icon={feature.icon} title={$t(feature.titleKey)} description={$t(feature.descriptionKey)} />
		{/each}
	</Cards>
</Section>
