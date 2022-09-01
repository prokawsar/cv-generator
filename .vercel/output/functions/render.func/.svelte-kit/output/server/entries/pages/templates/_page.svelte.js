import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const TemplateSelector_svelte_svelte_type_style_lang = "";
const css = {
  code: ".template.svelte-16nptlg{height:200px;width:300px;border-radius:1rem;border:1px solid black}",
  map: null
};
const TemplateSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"flex flex-row"}"><div class="${"basis-1/4 template m-1 svelte-16nptlg"}"><div class="${""}">Template one</div></div>
	<div class="${"basis-1/4 template m-1 svelte-16nptlg"}"><div class="${""}">Template two</div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-column"}"><label class="${""}" for="${""}">Select template</label>
	${validate_component(TemplateSelector, "TemplateSelector").$$render($$result, {}, {}, {})}
	<div class="${"grid grid-cols-1"}"><div class="${"col-8"}"><div class="${"block"}"><label for="${""}" class="${""}">Designation</label>
				<input type="${"text"}" placeholder="${"Designation"}" class="${"form-input mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"}"></div>
			<div class="${"block"}"><label for="${""}" class="${"form-label"}">About you</label>
				<textarea class="${"textarea"}" id="${""}"></textarea></div>

			<div class="${"block"}"><button class="${"inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}">Have a look</button></div></div>
		<div class="${"col-4"}"><div class="${"flex justify-content-center align-items-center p-2"}" style="${"height: 300px;"}"><span class="${"fs-4 text-muted text-uppercase"}">/* Reactive view of selected template will be here */</span></div></div></div></div>`;
});
export {
  Page as default
};
