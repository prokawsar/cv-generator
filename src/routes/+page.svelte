<script>
	import { userInfo } from '../utils/store';
	import { goto } from '$app/navigation';
	const gotoTemplate = () => {
		goto('/templates');
	};
</script>

<!-- <h1 class="text-3xl font-bold underline">Hello world!</h1> -->

<div class="overflow-hidden shadow sm:rounded-md">
	<div class="bg-gray-50 px-4 py-5 sm:p-6">
		<div class="grid grid-cols-3">
			<div class="col-span-2 sm:col-span-2">
				<input
					bind:value={$userInfo.name}
					type="text"
					name="first-name"
					placeholder="Your name"
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				/>
			</div>

			<div class="col-span-1 text-right sm:col-span-1">
				<button
					on:click={gotoTemplate}
					disabled={!$userInfo.name}
					type="submit"
					class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-600/50 disabled:hover:cursor-not-allowed"
					>Build CV</button
				>
			</div>
		</div>
	</div>
	<!-- <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
		<button
			type="submit"
			class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>Save</button
		>
	</div> -->
</div>
