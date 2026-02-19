<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<style>
	.hero {
		text-align: center;
		padding: 6rem 2rem 4rem;
		max-width: 800px;
		margin: 0 auto;
	}

	.hero-title {
		font-size: 4rem;
		font-weight: 700;
		letter-spacing: 2px;
		margin-bottom: 0.5rem;
	}

	.hero-subtitle {
		font-size: 1.4rem;
		color: var(--text);
		margin-bottom: 1rem;
		font-weight: 300;
	}

	.hero-desc {
		font-size: 1.05rem;
		color: var(--text-muted);
		max-width: 600px;
		margin: 0 auto 2rem;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>

<div class="hero">
	<h1 class="hero-title">LiberShare</h1>
	<p class="hero-subtitle">Next generation peer-to-peer file sharing</p>
	<p class="hero-desc">Built on modern decentralized technologies. No central servers. No single point of failure.</p>
	<div class="hero-actions">
		<Button href="#download">Download</Button>
	</div>
</div>
