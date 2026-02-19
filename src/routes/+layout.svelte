<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	interface Props {
		children: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	let menuOpen = $state(false);
	let activeSection = $state('');

	const navItems = [
		{ label: 'About', href: '/#about', id: 'about' },
		{ label: 'Download', href: '/#download', id: 'download' },
		{ label: 'Contact', href: '/#contact', id: 'contact' },
	];

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	onMount(() => {
		const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
		const observer = new IntersectionObserver(
			entries => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				}
			},
			{ rootMargin: '-40% 0px -40% 0px', threshold: 0 }
		);
		for (const section of sections) observer.observe(section);

		// Generate triangles
		const container = document.getElementById('tri-bg')!;
		const directions = ['up', 'down'] as const;
		const points: Record<string, string> = {
			up: '20,5 35,35 5,35',
			down: '20,35 35,5 5,5',
		};

		for (let i = 0; i < 100; i++) {
			const dir = directions[Math.floor(Math.random() * 2)];
			const rot = Math.round(Math.random() * 60 - 30);
			const duration = 16 + Math.random() * 16;
			const delay = -(Math.random() * duration);
			const x = Math.random() * 100;
			const y = Math.random() * 100;
			const size = 20 + Math.random() * 20;

			// fly in vertex direction (up or down) deflected by rotation
			const angleRad = (rot * Math.PI) / 180;
			const dist = 150;
			const tx = (dir === 'up' ? 1 : -1) * Math.sin(angleRad) * dist;
			const ty = (dir === 'up' ? -1 : 1) * Math.cos(angleRad) * dist;

			const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			svg.setAttribute('viewBox', '0 0 40 40');
			svg.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${x}%;top:${y}%;--r:${rot}deg;--tx:${tx.toFixed(1)}vh;--ty:${ty.toFixed(1)}vh;animation:float-tri ${duration}s linear ${delay}s infinite;`;
			svg.classList.add('tri');

			const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
			poly.setAttribute('points', points[dir]);
			svg.appendChild(poly);
			container.appendChild(svg);
		}

		return () => observer.disconnect();
	});
</script>

<style>
	.triangles {
		position: fixed;
		inset: 0;
		z-index: -1;
		pointer-events: none;
		overflow: hidden;
	}

	.triangles :global(.tri) {
		fill: none;
		stroke: rgba(255, 255, 255, 0.12);
		stroke-width: 1.5;
	}

	@keyframes -global-float-tri {
		0% {
			transform: translate(calc(var(--tx) * -1), calc(var(--ty) * -1)) rotate(var(--r, 0deg));
		}
		100% {
			transform: translate(var(--tx), var(--ty)) rotate(var(--r, 0deg));
		}
	}

	main {
		padding-top: 64px;
	}
</style>

<div id="tri-bg" class="triangles"></div>

<Header {navItems} {activeSection} {menuOpen} onToggleMenu={toggleMenu} onCloseMenu={closeMenu} />

<main>
	{@render children()}
</main>

<Footer />
