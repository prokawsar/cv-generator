<script>
	import TemplateSelector from '../../components/TemplateSelector.svelte';
</script>

<div>
	<div class="md:grid md:grid-cols-3">
		<div class="md:col-span-1">
			<div class="px-4 sm:px-0">
				<h3 class="text-lg font-medium leading-6 text-gray-900">Select template</h3>
			</div>
		</div>

		<div class="md:col-span-2 flex flex-row">
			<TemplateSelector />
		</div>
	</div>

	<div class="flex flex-row">
		<div class="md:grid md:grid-cols-3 md:gap-6">
			<div class="md:col-span-1">
				<div class="px-4 sm:px-0">
					<h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
					<p class="mt-1 text-sm text-gray-600">
						This information will be displayed publicly so be careful what you share.
					</p>
				</div>
			</div>
			<div class="mt-5 md:col-span-2 md:mt-0">
				<div class="shadow sm:overflow-hidden sm:rounded-md">
					<div class="space-y-6 bg-white px-4 py-5 sm:p-6">
						<div class="grid grid-cols-3 gap-6">
							<div class="col-span-3 sm:col-span-2">
								<label for="company-website" class="block text-sm font-medium text-gray-700"
									>Website</label
								>
								<div class="mt-1 flex rounded-md shadow-sm">
									<span
										class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
										>http://</span
									>
									<input
										type="text"
										name="company-website"
										id="company-website"
										class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										placeholder="www.example.com"
									/>
								</div>
							</div>
						</div>

						<div>
							<label for="about" class="block text-sm font-medium text-gray-700">About</label>
							<div class="mt-1">
								<textarea
									id="about"
									name="about"
									rows="3"
									class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									placeholder="Its about your some basic information of education and skills or can be projects"
								/>
							</div>
							<p class="mt-2 text-sm text-gray-500">
								Brief description for your profile. URLs are hyperlinked.
							</p>
						</div>

						<div>
							<label class="block text-sm font-medium text-gray-700">Photo</label>
							<div class="mt-1 flex items-center">
								<span class="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
									<svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
								</span>
								<button
									type="button"
									class="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>Change</button
								>
							</div>
						</div>
					</div>
					<div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
						<button
							type="submit"
							class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>Save</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
