<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app">
	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		box-sizing: border-box;
	}

	main {
		flex: 1 0 auto;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 100%;
		margin: 0;
		box-sizing: border-box;
		overflow-x: hidden;
	}
</style>
