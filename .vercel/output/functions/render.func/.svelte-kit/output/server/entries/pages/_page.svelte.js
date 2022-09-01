import { c as create_ssr_component, b as subscribe, d as add_attribute } from "../../chunks/index.js";
import { u as userInfo } from "../../chunks/store.js";
import "../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userInfo, $$unsubscribe_userInfo;
  $$unsubscribe_userInfo = subscribe(userInfo, (value) => $userInfo = value);
  $$unsubscribe_userInfo();
  return `

<div class="${"overflow-hidden shadow sm:rounded-md"}"><div class="${"bg-gray-50 px-4 py-5 sm:p-6"}"><div class="${"grid grid-cols-6 gap-6"}"><div class="${"col-span-6 sm:col-span-3"}"><input type="${"text"}" name="${"first-name"}" placeholder="${"Your name"}" class="${"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"}"${add_attribute("value", $userInfo.name, 0)}></div>

			<div class="${"col-span-6 text-right sm:col-span-3"}"><button type="${"submit"}" class="${"inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}">Build CV</button></div></div></div>
	</div>`;
});
export {
  Page as default
};
