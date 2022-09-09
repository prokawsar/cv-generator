<script>
	import { user } from '../../utils/store';
	import { supabase } from '$lib/supabaseClient';
	import Auth from '$lib/login/Auth.svelte';
	import Profile from '$lib/login/Profile.svelte';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

<div class="container" style="padding: 50px 0 100px 0;">
	{#if $user}
		<Profile />
	{:else}
		<Auth />
	{/if}
</div>
