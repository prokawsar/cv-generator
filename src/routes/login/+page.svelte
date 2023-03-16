<script>
	import { user } from '../../utils/store';
	import { supabase } from '$lib/supabaseClient';
	import Auth from '$lib/login/Auth.svelte';
	import Profile from '$lib/login/Profile.svelte';

	user.set(supabase.auth.user() != null || supabase.auth.user() != undefined);

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user != null || session.user != undefined);
	});
</script>

<div class="flex justify-center">
	{#if $user}
		<Profile />
	{:else}
		<Auth />
	{/if}
</div>
