<script lang="ts">
</script>

<footer>
	<a href="mailto: gala@emse.fr" aria-label="Contactez-nous par mail">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="icon"
			><rect width="20" height="16" x="2" y="4" rx="2" /><path
				d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
			/></svg
		>
	</a>
	<a
		href="https://www.facebook.com/galaminessaintetienne?locale=fr_FR"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Visitez notre page Facebook"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="icon"
			><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg
		>
	</a>
	<a
		href="https://www.instagram.com/galaillumines/"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Visitez notre page Instagram"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="icon"
			><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path
				d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
			/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg
		>
	</a>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 20px;
		background-color: var(--color-secondary);
	}

	.icon {
		color: white;
		transition: color 0.2s;
	}

	a:hover .icon {
		color: var(--color-accent);
	}
</style>
