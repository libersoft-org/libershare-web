<script lang="ts">
	import Hero from '$lib/sections/Hero.svelte';
	import About from '$lib/sections/About.svelte';
	import Download from '$lib/sections/Download.svelte';
	import Contact from '$lib/sections/Contact.svelte';
</script>

<svelte:head>
	<title>LiberShare — Decentralized File Sharing</title>
	<meta name="description" content="LiberShare is a peer-to-peer file sharing software built on modern decentralized technologies." />
	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="LiberShare — Decentralized file sharing software" />
	<meta property="og:description" content="Peer-to-peer file sharing built on modern decentralized technologies. No central servers. No single point of failure." />
	<meta property="og:image" content="https://libershare.org/favicon.svg" />
	<meta property="og:url" content="https://libershare.org" />
	<meta property="og:site_name" content="LiberShare" />
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="LiberShare — decentralized file sharing sofware" />
	<meta name="twitter:description" content="Peer-to-peer file sharing built on modern decentralized technologies. No central servers. No single point of failure." />
	<meta name="twitter:image" content="https://libershare.org/favicon.svg" />
</svelte:head>
<!-- Toplist -->
<a href="https://www.toplist.cz/stat/1841253/" id="toplistcz1841253" title="TOPlist">
	<noscript>
		<img src="https://toplist.cz/dot.asp?id=1841253&njs=1" border="0" alt="TOPlist" width="1" height="1" />
	</noscript>
	<script language="JavaScript">
		(function (d, e, s) {
			d.getElementById('toplistcz1841253').innerHTML = '<img src="https://toplist.cz/dot.asp?id=1841253&http=' + e(d.referrer) + '&t=' + e(d.title) + '&l=' + e(d.URL) + '&wi=' + e(s.width) + '&he=' + e(s.height) + '&cd=' + e(s.colorDepth) + '" width="1" height="1" border="0" alt="TOPlist" />';
		})(document, encodeURIComponent, window.screen);
	</script>
</a>

<Hero />
<About />
<Download />
<Contact />
