import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../chunks/index.js";
import { u as userInfo } from "../../chunks/store.js";
import { p as page } from "../../chunks/stores.js";
import "../../chunks/index2.js";
const app = "";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userInfo, $$unsubscribe_userInfo;
  let $page, $$unsubscribe_page;
  $$unsubscribe_userInfo = subscribe(userInfo, (value) => $userInfo = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_userInfo();
  $$unsubscribe_page();
  return `<nav class="${"bg-gray-100 fixed inset-x-0"}"><div class="${"max-w-7xl mx-auto px-4"}"><div class="${"flex justify-between"}"><div class="${"flex space-x-4"}">
				<div><a href="${"/"}" class="${"flex items-center py-5 px-2 text-gray-500 hover:text-gray-900"}"><i class="${"bx bxl-medium-old mr-1 text-xl mb-1 text-blue-400"}"></i>
						<span class="${"font-bold"}">CV Generator</span></a></div>
				
				<div class="${"hidden md:flex items-center space-x-1"}"></div></div>
			
			<div class="${"hidden md:flex items-center space-x-1"}">${$userInfo.name && $page.url.pathname == "/templates" ? `<span><span class="${"bg-indigo-600 outline outline-blue-500 rounded text-white p-1"}">Hey ! Hello
						</span>
						<span class="${"rounded outline outline-blue-500/50 p-1"}">${escape($userInfo.name)}</span></span>` : ``}</div>
			
			<div class="${"md:hidden flex items-center"}"><button class="${"mobile-menu-button focus:outline-none"}"><i class="${"bx bx-menu text-3xl mt-1"}"></i></button></div></div></div>
	
	<div class="${"mobile-menu hidden md:hidden"}"></div>
</nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"md:container p-32"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
