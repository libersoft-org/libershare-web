<script lang="ts">
	interface NavItem {
		label: string;
		href: string;
		id: string;
	}

	interface Props {
		navItems: NavItem[];
		activeSection: string;
		open: boolean;
		onClose: () => void;
	}

	let { navItems, activeSection, open, onClose }: Props = $props();
</script>

<style>
	nav {
		display: flex;
		gap: 2rem;
	}

	.nav-link {
		color: var(--text);
		font-weight: 500;
		font-size: 1.1rem;
		text-transform: none;
		letter-spacing: 0.5px;
		transition: color 0.2s;
	}

	.nav-link:hover {
		color: var(--foreground);
		opacity: 1;
	}

	.nav-link.active {
		color: var(--foreground);
	}

	@media (max-width: 768px) {
		nav {
			position: fixed;
			top: 65px;
			right: 0;
			width: 250px;
			height: calc(100vh - 65px);
			background: var(--background);
			border-left: 1px solid var(--border);
			box-shadow: var(--shadow);
			flex-direction: column;
			padding: 0;
			gap: 0;
			transform: translateX(100%);
			transition: transform 0.3s ease;
			z-index: 100;
		}

		nav.open {
			transform: translateX(0);
		}

		.nav-link {
			padding: 1rem 2rem;
			font-size: 1.1rem;
			border-bottom: 1px solid var(--border);
		}
	}
</style>

<nav class:open>
	{#each navItems as item}
		<a href={item.href} class="nav-link" class:active={activeSection === item.id} onclick={onClose}>{item.label}</a>
	{/each}
</nav>
