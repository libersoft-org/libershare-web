<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import Cards from '$lib/components/Cards.svelte';

	const features = [
		{
			icon: '/icons/decentralized.svg',
			title: 'Fully decentralized network',
			description: 'No central servers, no single point of failure. Each network maintains its own decentralized database of shared content. Users automatically update and store the latest version and replicate it among themselves. Browse and discover content within your network without relying on centralized indexers or trackers.',
		},
		{
			icon: '/icons/access-control.svg',
			title: 'Fine-grained access control',
			description: 'Everyone is free to start their own network with its own rules. Define user roles within each network: owners, admins, publishers, moderators and downloaders. Control exactly who can publish, moderate and download content.',
		},
		{
			icon: '/icons/ui.svg',
			title: 'Top-notch user interface',
			description: 'A stunning media center user interface designed for desktop, TV and mobile platforms. Navigate seamlessly with keyboard, mouse, gamepad, or remote control. Power users can leverage a command line interface for running the software as a headless file server.',
		},
		{
			icon: '/icons/data-format.svg',
			title: 'Human-readable data format',
			description: 'The LISH data format is based on JSON, making it easy to create, read and understand. Share your content with clear, transparent metadata that anyone can easily inspect.',
		},
		{
			icon: '/icons/security.svg',
			title: 'Privacy & security',
			description: 'All peer-to-peer communication is encrypted, ensuring your data remains private during transfer. Users can hide behind a VPN for an additional layer of anonymity. LiberShare respects your privacy by design.',
		},
		{
			icon: '/icons/cross-platform.svg',
			title: 'Cross-platform',
			description: 'Available for Windows, Linux and macOS. Use it on any device you prefer.',
		},
	];
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

<Section id="about" title="About">
	<div class="about-intro">LiberShare is a next-generation peer-to-peer file sharing platform built on modern decentralized technologies. It combines an intuitive user interface with a fully decentralized architecture, providing a secure and reliable solution for data sharing independent of any central authority. The project is open source and distributed under the <a href="https://github.com/libersoft-org/libershare/blob/main/LICENSE" target="_blank">Unlicense</a>.</div>
	<Cards>
		{#each features as feature}
			<FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
		{/each}
	</Cards>
</Section>
