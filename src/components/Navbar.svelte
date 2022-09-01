<script>
	import { userInfo } from '../utils/store';
	import { page } from '$app/stores';
</script>

<nav class="bg-gray-100 fixed inset-x-0">
	<div class="max-w-7xl mx-auto px-4">
		<div class="flex justify-between">
			<div class="flex space-x-4">
				<!-- logo -->
				<div>
					<a href="/" class="flex items-center py-5 px-2 text-gray-500 hover:text-gray-900">
						<i class="bx bxl-medium-old mr-1 text-xl mb-1 text-blue-400" />
						<span class="font-bold">CV Generator</span>
					</a>
				</div>
				<!-- primary nav -->
				<div class="hidden md:flex items-center space-x-1">
					<!-- <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a>
					<a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Contact</a>
					<a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Pricing</a>
					<a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Features</a> -->
				</div>
			</div>
			<!-- secondary nav -->
			<div class="hidden md:flex items-center space-x-1">
				{#if $userInfo.name && $page.url.pathname == '/templates'}
					<span>
						<span class="">Hey ! Hello, </span>
						<span class="round">{$userInfo.name}</span>
					</span>
				{/if}
			</div>
			<!-- mobile button goes here -->
			<div class="md:hidden flex items-center">
				<button class="mobile-menu-button focus:outline-none">
					<i class="bx bx-menu text-3xl mt-1" />
				</button>
			</div>
		</div>
	</div>
	<!-- mobile menu -->
	<div class="mobile-menu hidden md:hidden">
		<!-- <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
		<a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
		<a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
		<a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a> -->
	</div>
</nav>

<style>
	.round {
		border: 1px solid rgb(114, 162, 79);
		border-radius: 3px;
	}
</style>
