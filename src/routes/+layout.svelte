<script>
	import '../css/app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />

<div class="md:container p-32">
	<slot />
</div>
