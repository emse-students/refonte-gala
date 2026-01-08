<script lang="ts">
	import { pushState } from '$app/navigation';
	import { asset, resolve } from '$app/paths';
	import { page } from '$app/state';
	import { onMount, tick } from 'svelte';

	let navOpen = $state(false);
	let navUl: HTMLUListElement;
	let underlineStyle = $state('');

	function openNav() {
		if (!navOpen) {
			navOpen = true;
			pushState('', { navMenu: true });
		}
	}

	function closeNav() {
		navOpen = false;
	}

	function toggleNav() {
		if (navOpen) {
			closeNav();
			// If the last history entry was for nav menu, go back
			if (page.state.navMenu) {
				history.back();
			}
		} else {
			openNav();
		}
	}
</script>

<header class:menu-open={navOpen}>
	<div class="header-left">
		<a href="/">
			<img src={asset('/logo-gala-sans-fond.png')} alt="logo gala" class="logo-gala" />
		</a>
	</div>
	<nav class="nav-menu" class:open={navOpen}>
		<ul bind:this={navUl}>
			<li aria-current={page.url.pathname === resolve('/') ? 'page' : undefined}>
				<a href={resolve('/')} onclick={closeNav}>Accueil</a>
			</li>
			<li
				aria-current={page.url.pathname.startsWith(resolve('/qui-sommes-nous'))
					? 'page'
					: undefined}
			>
				<a href={resolve('/qui-sommes-nous')} onclick={closeNav}>Qui sommes nous?</a>
			</li>
			<li aria-current={page.url.pathname.startsWith(resolve('/billetterie')) ? 'page' : undefined}>
				<a href={resolve('/billetterie')} onclick={closeNav}>Billetterie</a>
			</li>
			<li aria-current={page.url.pathname.startsWith(resolve('/partenaires')) ? 'page' : undefined}>
				<a href={resolve('/partenaires')} onclick={closeNav}>Partenaires</a>
			</li>
			<div class="nav-underline" style={underlineStyle}></div>
		</ul>
		{#if navOpen}
			<div class="nav-overlay" role="presentation" onclick={toggleNav}></div>
		{/if}
	</nav>
</header>

<style>
	header {
		background-color: var(--color-primary);
		padding: 10px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
	}

	.header-left {
		z-index: 10;
	}

	.logo-gala {
		height: 120px;
		width: auto;
		object-fit: contain;
		display: block;
	}

	.nav-menu {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: auto;
	}

	ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 2rem;
		align-items: center;
		position: relative;
	}

	li a {
		color: white;
		text-decoration: none;
		font-family: var(--font-heading);
		font-size: 1.1rem;
		font-weight: bold;
		text-transform: uppercase;
		transition: color 0.2s;
	}

	li a:hover {
		color: var(--color-accent);
	}

	/* Masquer la barre de soulignement pour l'instant si elle n'est pas gérée */
	.nav-underline {
		display: none;
	}
</style>
