<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Card from '$lib/components/Card.svelte';
	import Cards from '$lib/components/Cards.svelte';
	interface ContactLink {
		label: string;
		href: string;
		icon: string;
	}

	const contactLinks: ContactLink[] = [
		{ label: 'info@libersoft.org', href: 'mailto:info@libersoft.org', icon: '/icons/email.svg' },
		{ label: 'GitHub', href: 'https://github.com/libersoft-org', icon: '/icons/github.svg' },
		{ label: 'Telegram Chat Group', href: 'https://t.me/libersoft', icon: '/icons/telegram.svg' },
		{ label: 'Telegram Announcements', href: 'https://t.me/libersoft_ann', icon: '/icons/telegram.svg' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/libersoft-org/', icon: '/icons/linkedin.svg' },
		{ label: 'Facebook Group', href: 'https://www.facebook.com/groups/libersoft', icon: '/icons/facebook.svg' },
	];
</script>

<style>
	h3 {
		font-size: 1.3rem;
		color: var(--foreground);
		margin-bottom: 1.25rem;
	}

	.address p {
		color: var(--text);
		line-height: 1.8;
		font-size: 0.95rem;
	}

	.org-id {
		margin-top: 0.75rem;
		font-family: 'Ubuntu Mono', monospace;
		color: var(--text-muted) !important;
		font-size: 0.85rem !important;
	}

	.contact-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.contact-link {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 0.75rem;
		border-radius: 8px;
		color: var(--text);
		font-size: 0.95rem;
		transition: background 0.2s;
	}

	.contact-link:hover {
		background: var(--hover-bg);
		opacity: 1;
	}

	.contact-icon {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
</style>

<Section id="contact" title="Contact">
	<Cards gap="2rem" maxWidth="800px">
		<Card>
			<h3>LiberSoft</h3>
			<div class="address">
				<p>Liberty Street 1</p>
				<p>Liberty City</p>
				<p>LL-00001 Liberland</p>
				<p class="org-id">Organization ID: LLC230002</p>
			</div>
		</Card>

		<Card>
			<h3>Get in Touch</h3>
			<ul class="contact-list">
				{#each contactLinks as link}
					<li>
						<a href={link.href} target="_blank" rel="noopener noreferrer" class="contact-link">
							<img class="contact-icon" src={link.icon} alt={link.label} />
							<span>{link.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</Card>
	</Cards>
</Section>
