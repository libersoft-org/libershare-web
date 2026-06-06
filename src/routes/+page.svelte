<script lang="ts">
	import { t } from '$lib/scripts/language.ts';
	import { PROJECT_NAME, PROJECT_URL } from '$lib/scripts/project.ts';
	import { structuredDataScript } from '$lib/scripts/structuredData.ts';
	import Hero from '$lib/sections/Hero.svelte';
	import About from '$lib/sections/About.svelte';
	import Screenshots from '$lib/sections/Screenshots.svelte';
	import Comparison from '$lib/sections/Comparison.svelte';
	import Download from '$lib/sections/Download.svelte';
	import Contact from '$lib/sections/Contact.svelte';
</script>

<svelte:head>
	<title>{$t('site.title', { project: PROJECT_NAME })}</title>
	<meta name="description" content={$t('site.description', { project: PROJECT_NAME })} />
	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={$t('site.ogTitle', { project: PROJECT_NAME })} />
	<meta property="og:description" content={$t('site.ogDescription')} />
	<meta property="og:image" content="{PROJECT_URL}/favicon.svg" />
	<meta property="og:url" content={PROJECT_URL} />
	<meta property="og:site_name" content={PROJECT_NAME} />
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={$t('site.ogTitle', { project: PROJECT_NAME })} />
	<meta name="twitter:description" content={$t('site.ogDescription')} />
	<meta name="twitter:image" content="{PROJECT_URL}/favicon.svg" />
	<!-- Structured data (schema.org JSON-LD) -->
	{@html structuredDataScript}
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
<Screenshots />
<Comparison />
<Contact />
