<script>
	import '../css/app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="flex flex-col gap-3">
	<Navbar />

	<div class="md:container mx-auto">
		<slot />
	</div>
</div>
