<script>
	import '../css/app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />

<div class="container py-32 p-3">
	<slot />
</div>
