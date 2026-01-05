<script lang="ts">
	import { asset } from '$app/paths';
</script>

<svelte:head>
	<title>Accueil - Gala Mines Saint-Étienne</title>
</svelte:head>

<div class="page-content">
	<h1>GALA</h1>
	<h2>MINES SAINT-ÉTIENNE 2026</h2>
	<img
		src={asset('/accueil/facadeENSMSE.jpg')}
		alt="Façade de l'école des Mines de Saint-Étienne"
		class="facade-img"
	/>
	<p>Bienvenue sur le site officiel du Gala Mines Saint-Étienne 2026 !</p>
</div>

<style>
	.facade-img {
		max-width: 80%;
		height: auto;
		margin: 20px auto;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	}

	.page-content {
		text-align: center;
		background: var(--gradient-bg);
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.page-content h1 {
		font-family: var(--font-heading);
		color: var(--color-accent);
		font-size: 4em;
		font-weight: bold;
		text-shadow: 2px 2px 4px var(--color-text-shadow);
		padding-right: 0.2em; /* Optical centering */
	}

	.page-content h2 {
		font-family: var(--font-heading);
		color: var(--color-accent);
		font-size: 2.5em;
		font-weight: bold;
		text-shadow: 2px 2px 4px var(--color-text-shadow);
	}
	.page-content p {
		font-family: var(--font-body);
		color: var(--color-accent);
		font-size: 1.5em;
		font-weight: normal;
	}
</style>
