<script>
	import TemplateSelector from '../../components/TemplateSelector.svelte';
</script>

<div class="flex flex-column">
	<label class="" for="">Select template</label>
	<TemplateSelector />
	<div class="grid grid-cols-1">
		<div class="col-8">
			<div class="block">
				<label for="" class="">Designation</label>
				<input
					type="text"
					placeholder="Designation"
					class="form-input mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				/>
			</div>
			<div class="block">
				<label for="" class="form-label">About you</label>
				<textarea class="textarea" id="" />
			</div>

			<div class="block">
				<button
					class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>Have a look</button
				>
			</div>
		</div>
		<div class="col-4">
			<div class="flex justify-content-center align-items-center p-2" style="height: 300px;">
				<span class="fs-4 text-muted text-uppercase"
					>/* Reactive view of selected template will be here */</span
				>
			</div>
		</div>
	</div>
</div>
