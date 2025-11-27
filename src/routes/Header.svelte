<script lang="ts">
	import {asset} from "$app/paths";

	let navOpen = $state(false);
</script>

<title>Gala 2026 - Mines Saint-Etienne</title>

<header class:menu-open={navOpen}>
	<div class="header-left">
		<a href="/">
			<img src="{asset('/logo-gala.jpg')}" alt="logo gala" class="logo-gala" />
		</a>
	</div>
</header>

<style>
	header {
		background-color: blueviolet;
		padding: 20px;
		text-align: center;
	}
</style>
