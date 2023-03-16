<script lang="ts">
	import { page } from '$app/stores';
	$: console.log($page);
</script>

<div class="container mx-auto">
	<p class="text-3xl text-red-600 font-semibold">500 | {$page.error?.message}</p>
</div>
