globalThis.global = globalThis;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component6) {
  current_component = component6;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function validate_component(component6, name) {
  if (!component6 || !component6.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
  }
  return component6;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/index2.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var subscriber_queue;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    init_chunks();
    subscriber_queue = [];
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize3;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode;
      var index6 = 0;
      while (index6 < str.length) {
        var eqIdx = str.indexOf("=", index6);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index6);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index6 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index6, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index6 = endIdx + 1;
      }
      return obj;
    }
    function serialize3(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key2) {
          return key2.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options.silent) {
          console.warn(
            "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
          );
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/hooks.js
var hooks_exports = {};
var init_hooks = __esm({
  ".svelte-kit/output/server/chunks/hooks.js"() {
  }
});

// .svelte-kit/output/server/chunks/store.js
var userInfo, user;
var init_store = __esm({
  ".svelte-kit/output/server/chunks/store.js"() {
    init_index2();
    userInfo = writable({ name: "" });
    user = writable(false);
  }
});

// .svelte-kit/output/server/chunks/stores.js
var getStores, page;
var init_stores = __esm({
  ".svelte-kit/output/server/chunks/stores.js"() {
    init_chunks();
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
    };
    page = {
      /** @param {(value: any) => void} fn */
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Navbar, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_chunks();
    init_store();
    init_stores();
    Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $userInfo, $$unsubscribe_userInfo;
      let $page, $$unsubscribe_page;
      $$unsubscribe_userInfo = subscribe(userInfo, (value) => $userInfo = value);
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_userInfo();
      $$unsubscribe_page();
      return `<div class="bg-gray-100 inset-x-0"><div class="max-w-7xl mx-auto px-4"><div class="flex justify-between"><div class="flex space-x-4">
				<div><a href="/" class="flex items-center py-5 px-2 text-gray-500 hover:text-gray-900"><i class="bx bxl-medium-old mr-1 text-xl mb-1 text-blue-400"></i>
						<span class="font-bold">CV Generator</span></a></div>
				
				<div class="hidden md:flex items-center space-x-1"></div></div>
			
			<div class="hidden md:flex items-center space-x-1"><a href="/login" class="py-5 px-3 text-gray-700 hover:text-gray-900">Login</a>

				${$userInfo.name && $page.url.pathname == "/templates" ? `<span><span class="bg-indigo-600 outline outline-blue-500 rounded text-white p-1">Hey ! Hello
						</span>
						<span class="rounded outline outline-blue-500/50 p-1">${escape($userInfo.name)}</span></span>` : ``}</div>
			
			<div class="md:hidden flex items-center"><button class="mobile-menu-button focus:outline-none"><i class="bx bx-menu text-3xl mt-1"></i></button></div></div></div>
	
	<div class="mobile-menu hidden md:hidden"></div>
</div>`;
    });
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="flex flex-col gap-3">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

	<div class="md:container mx-auto">${slots.default ? slots.default({}) : ``}</div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component, file, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/pages/_layout.svelte-38da52b0.js";
    imports = ["_app/immutable/components/pages/_layout.svelte-38da52b0.js", "_app/immutable/chunks/index-c2872cc9.js", "_app/immutable/chunks/store-38e9ee59.js", "_app/immutable/chunks/index-3e679e32.js", "_app/immutable/chunks/stores-e36d7600.js", "_app/immutable/chunks/singletons-db910752.js"];
    stylesheets = ["_app/immutable/assets/_layout-3a139c6b.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/entries/pages/_error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2
});
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_error.svelte.js"() {
    init_chunks();
    init_stores();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      {
        console.log($page);
      }
      $$unsubscribe_page();
      return `<div class="container mx-auto"><p class="text-3xl text-red-600 font-semibold">500 | ${escape($page.error?.message)}</p></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/components/pages/_error.svelte-89bfecef.js";
    imports2 = ["_app/immutable/components/pages/_error.svelte-89bfecef.js", "_app/immutable/chunks/index-c2872cc9.js", "_app/immutable/chunks/stores-e36d7600.js", "_app/immutable/chunks/singletons-db910752.js", "_app/immutable/chunks/index-3e679e32.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// node_modules/@supabase/supabase-js/dist/module/lib/version.js
var version;
var init_version = __esm({
  "node_modules/@supabase/supabase-js/dist/module/lib/version.js"() {
    version = "1.35.7";
  }
});

// node_modules/@supabase/supabase-js/dist/module/lib/constants.js
var DEFAULT_HEADERS, STORAGE_KEY;
var init_constants = __esm({
  "node_modules/@supabase/supabase-js/dist/module/lib/constants.js"() {
    init_version();
    DEFAULT_HEADERS = { "X-Client-Info": `supabase-js/${version}` };
    STORAGE_KEY = "supabase.auth.token";
  }
});

// node_modules/@supabase/supabase-js/dist/module/lib/helpers.js
function stripTrailingSlash(url) {
  return url.replace(/\/$/, "");
}
var isBrowser;
var init_helpers = __esm({
  "node_modules/@supabase/supabase-js/dist/module/lib/helpers.js"() {
    isBrowser = () => typeof window !== "undefined";
  }
});

// node_modules/@supabase/gotrue-js/dist/module/lib/version.js
var version2;
var init_version2 = __esm({
  "node_modules/@supabase/gotrue-js/dist/module/lib/version.js"() {
    version2 = "1.24.0";
  }
});

// node_modules/@supabase/gotrue-js/dist/module/lib/constants.js
var GOTRUE_URL, DEFAULT_HEADERS2, EXPIRY_MARGIN, NETWORK_FAILURE, STORAGE_KEY2, COOKIE_OPTIONS;
var init_constants2 = __esm({
  "node_modules/@supabase/gotrue-js/dist/module/lib/constants.js"() {
    init_version2();
    GOTRUE_URL = "http://localhost:9999";
    DEFAULT_HEADERS2 = { "X-Client-Info": `gotrue-js/${version2}` };
    EXPIRY_MARGIN = 10;
    NETWORK_FAILURE = {
      ERROR_MESSAGE: "Request Failed",
      MAX_RETRIES: 10,
      RETRY_INTERVAL: 2
      // in deciseconds
    };
    STORAGE_KEY2 = "supabase.auth.token";
    COOKIE_OPTIONS = {
      name: "sb",
      lifetime: 60 * 60 * 8,
      domain: "",
      path: "/",
      sameSite: "lax"
    };
  }
});

// node_modules/@supabase/gotrue-js/dist/module/lib/fetch.js
function _handleRequest(fetcher, method, url, options, body) {
  return __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
      fetcher(url, _getRequestParams(method, options, body)).then((result) => {
        if (!result.ok)
          throw result;
        if (options === null || options === void 0 ? void 0 : options.noResolveJson)
          return resolve;
        return result.json();
      }).then((data) => resolve(data)).catch((error2) => handleError(error2, reject));
    });
  });
}
function get(fetcher, url, options) {
  return __awaiter(this, void 0, void 0, function* () {
    return _handleRequest(fetcher, "GET", url, options);
  });
}
function post(fetcher, url, body, options) {
  return __awaiter(this, void 0, void 0, function* () {
    return _handleRequest(fetcher, "POST", url, options, body);
  });
}
function put(fetcher, url, body, options) {
  return __awaiter(this, void 0, void 0, function* () {
    return _handleRequest(fetcher, "PUT", url, options, body);
  });
}
function remove(fetcher, url, body, options) {
  return __awaiter(this, void 0, void 0, function* () {
    return _handleRequest(fetcher, "DELETE", url, options, body);
  });
}
var __awaiter, _getErrorMessage, handleError, _getRequestParams;
var init_fetch = __esm({
  "node_modules/@supabase/gotrue-js/dist/module/lib/fetch.js"() {
    init_constants2();
    __awaiter = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    _getErrorMessage = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
    handleError = (error2, reject) => {
      if (!(error2 === null || error2 === void 0 ? void 0 : error2.status)) {
        return reject({ message: NETWORK_FAILURE.ERROR_MESSAGE });
      }
      if (typeof error2.json !== "function") {
        return reject(error2);
      }
      error2.json().then((err) => {
        return reject({
          message: _getErrorMessage(err),
          status: (error2 === null || error2 === void 0 ? void 0 : error2.status) || 500
        });
      });
    };
    _getRequestParams = (method, options, body) => {
      const params = { method, headers: (options === null || options === void 0 ? void 0 : options.headers) || {} };
      if (method === "GET") {
        return params;
      }
      params.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, options === null || options === void 0 ? void 0 : options.headers);
      params.body = JSON.stringify(body);
      return params;
    };
  }
});

// node_modules/@supabase/gotrue-js/dist/module/lib/cookies.js
function serialize2(name, val, options) {
  const opt = options || {};
  const enc = encodeURIComponent;
  const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + value;
  if (null != opt.maxAge) {
    const maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function isSecureEnvironment(req) {
  if (!req || !req.headers || !req.headers.host) {
    throw new Error('The "host" request header is not available');
  }
  const host = req.headers.host.indexOf(":") > -1 && req.headers.host.split(":")[0] || req.headers.host;
  if (["localhost", "127.0.0.1"].indexOf(host) > -1 || host.endsWith(".local")) {
    return false;
  }
  return true;
}
function serializeCookie(cookie, secure) {
  var _a, _b, _c;
  return serialize2(cookie.name, cookie.value, {
    maxAge: cookie.maxAge,
    expires: new Date(Date.now() + cookie.maxAge * 1e3),
    httpOnly: true,
    secure,
    path: (_a = cookie.path) !== null && _a !== void 0 ? _a : "/",
    domain: (_b = cookie.domain) !== null && _b !== void 0 ? _b : "",
    sameSite: (_c = cookie.sameSite) !== null && _c !== void 0 ? _c : "lax"
  });
}
function getCookieString(req, res, cookies) {
  const strCookies = cookies.map((c) => serializeCookie(c, isSecureEnvironment(req)));
  const previousCookies = res.getHeader("Set-Cookie");
  if (previousCookies) {
    if (previousCookies instanceof Array) {
      Array.prototype.push.apply(strCookies, previousCookies);
    } else if (typeof previousCookies === "string") {
      strCookies.push(previousCookies);
    }
  }
  return strCookies;
}
function setCookies(req, res, cookies) {
  res.setHeader("Set-Cookie", getCookieString(req, res, cookies));
}
var init_cookies = __esm({
  "node_modules/@supabase/gotrue-js/dist/module/lib/cookies.js"() {
  }
});

// node_modules/cross-fetch/dist/browser-ponyfill.js
var require_browser_ponyfill = __commonJS({
  "node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
    var global = typeof self !== "undefined" ? self : exports;
    var __self__ = function() {
      function F() {
        this.fetch = false;
        this.DOMException = global.DOMException;
      }
      F.prototype = global;
      return new F();
    }();
    (function(self2) {
      var irrelevant = function(exports2) {
        var support = {
          searchParams: "URLSearchParams" in self2,
          iterable: "Symbol" in self2 && "iterator" in Symbol,
          blob: "FileReader" in self2 && "Blob" in self2 && function() {
            try {
              new Blob();
              return true;
            } catch (e) {
              return false;
            }
          }(),
          formData: "FormData" in self2,
          arrayBuffer: "ArrayBuffer" in self2
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name) {
          if (typeof name !== "string") {
            name = String(name);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
            throw new TypeError("Invalid character in header field name");
          }
          return name.toLowerCase();
        }
        function normalizeValue(value) {
          if (typeof value !== "string") {
            value = String(value);
          }
          return value;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift();
              return { done: value === void 0, value };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers2(headers) {
          this.map = {};
          if (headers instanceof Headers2) {
            headers.forEach(function(value, name) {
              this.append(name, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name) {
              this.append(name, headers[name]);
            }, this);
          }
        }
        Headers2.prototype.append = function(name, value) {
          name = normalizeName(name);
          value = normalizeValue(value);
          var oldValue = this.map[name];
          this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers2.prototype["delete"] = function(name) {
          delete this.map[normalizeName(name)];
        };
        Headers2.prototype.get = function(name) {
          name = normalizeName(name);
          return this.has(name) ? this.map[name] : null;
        };
        Headers2.prototype.has = function(name) {
          return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers2.prototype.set = function(name, value) {
          this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers2.prototype.forEach = function(callback, thisArg) {
          for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
              callback.call(thisArg, this.map[name], name, this);
            }
          }
        };
        Headers2.prototype.keys = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push(name);
          });
          return iteratorFor(items);
        };
        Headers2.prototype.values = function() {
          var items = [];
          this.forEach(function(value) {
            items.push(value);
          });
          return iteratorFor(items);
        };
        Headers2.prototype.entries = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push([name, value]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers2.prototype[Symbol.iterator] = Headers2.prototype.entries;
        }
        function consumed(body) {
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsText(blob);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars3 = new Array(view.length);
          for (var i = 0; i < view.length; i++) {
            chars3[i] = String.fromCharCode(view[i]);
          }
          return chars3.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this._bodyInit = body;
            if (!body) {
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
            this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) {
                return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
              } else {
                return this.blob().then(readBlobAsArrayBuffer);
              }
            };
          }
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request2(input, options) {
          options = options || {};
          var body = options.body;
          if (input instanceof Request2) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers2(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers2(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal;
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
        }
        Request2.prototype.clone = function() {
          return new Request2(this, { body: this._bodyInit });
        };
        function decode(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes) {
            if (bytes) {
              var split = bytes.split("=");
              var name = split.shift().replace(/\+/g, " ");
              var value = split.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers2();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
            var parts = line.split(":");
            var key2 = parts.shift().trim();
            if (key2) {
              var value = parts.join(":").trim();
              headers.append(key2, value);
            }
          });
          return headers;
        }
        Body.call(Request2.prototype);
        function Response2(bodyInit, options) {
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = "statusText" in options ? options.statusText : "OK";
          this.headers = new Headers2(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response2.prototype);
        Response2.prototype.clone = function() {
          return new Response2(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers2(this.headers),
            url: this.url
          });
        };
        Response2.error = function() {
          var response = new Response2(null, { status: 0, statusText: "" });
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response2.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response2(null, { status, headers: { location: url } });
        };
        exports2.DOMException = self2.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name) {
            this.message = message;
            this.name = name;
            var error2 = Error(message);
            this.stack = error2.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch2(input, init2) {
          return new Promise(function(resolve, reject) {
            var request = new Request2(input, init2);
            if (request.signal && request.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              resolve(new Response2(body, options));
            };
            xhr.onerror = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.ontimeout = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.onabort = function() {
              reject(new exports2.DOMException("Aborted", "AbortError"));
            };
            xhr.open(request.method, request.url, true);
            if (request.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr && support.blob) {
              xhr.responseType = "blob";
            }
            request.headers.forEach(function(value, name) {
              xhr.setRequestHeader(name, value);
            });
            if (request.signal) {
              request.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
          });
        }
        fetch2.polyfill = true;
        if (!self2.fetch) {
          self2.fetch = fetch2;
          self2.Headers = Headers2;
          self2.Request = Request2;
          self2.Response = Response2;
        }
        exports2.Headers = Headers2;
        exports2.Request = Request2;
        exports2.Response = Response2;
        exports2.fetch = fetch2;
        Object.defineProperty(exports2, "__esModule", { value: true });
        return exports2;
      }({});
    })(__self__);
    __self__.fetch.ponyfill = true;
    delete __self__.fetch.polyfill;
    var ctx = __self__;
    exports = ctx.fetch;
    exports.default = ctx.fetch;
    exports.fetch = ctx.fetch;
    exports.Headers = ctx.Headers;
    exports.Request = ctx.Request;
    exports.Response = ctx.Response;
    module.exports = exports;
  }
});

// node_modules/@supabase/gotrue-js/dist/module/lib/helpers.js
function expiresAt(expiresIn) {
  const timeNow = Math.round(Date.now() / 1e3);
  return timeNow + expiresIn;
}
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
function getParameterByName(name, url) {
  var _a;
  if (!url)
    url = ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.href) || "";
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
  if (!results)
    return null;
  if (!results[2])
    return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var __awaiter2, isBrowser2, resolveFetch, setItemAsync, getItemAsync, getItemSynchronously, removeItemAsync;
var init_helpers2 = __esm({
  "node_modules/@supabase/gotrue-js/dist/module/lib/helpers.js"() {
    __awaiter2 = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    isBrowser2 = () => typeof window !== "undefined";
    resolveFetch = (customFetch) => {
      let _fetch;
      if (customFetch) {
        _fetch = customFetch;
      } else if (typeof fetch === "undefined") {
        _fetch = (...args) => __awaiter2(void 0, void 0, void 0, function* () {
          return yield (yield Promise.resolve().then(() => __toESM(require_browser_ponyfill()))).fetch(...args);
        });
      } else {
        _fetch = fetch;
      }
      return (...args) => _fetch(...args);
    };
    setItemAsync = (storage, key2, data) => __awaiter2(void 0, void 0, void 0, function* () {
      isBrowser2() && (yield storage === null || storage === void 0 ? void 0 : storage.setItem(key2, JSON.stringify(data)));
    });
    getItemAsync = (storage, key2) => __awaiter2(void 0, void 0, void 0, function* () {
      const value = isBrowser2() && (yield storage === null || storage === void 0 ? void 0 : storage.getItem(key2));
      if (!value)
        return null;
      try {
        return JSON.parse(value);
      } catch (_a) {
        return value;
      }
    });
    getItemSynchronously = (storage, key2) => {
      const value = isBrowser2() && (storage === null || storage === void 0 ? void 0 : storage.getItem(key2));
      if (!value || typeof value !== "string") {
        return null;
      }
      try {
        return JSON.parse(value);
      } catch (_a) {
        return value;
      }
    };
    removeItemAsync = (storage, key2) => __awaiter2(void 0, void 0, void 0, function* () {
      isBrowser2() && (yield storage === null || storage === void 0 ? void 0 : storage.removeItem(key2));
    });
  }
});

// node_modules/@supabase/gotrue-js/dist/module/GoTrueApi.js
var __awaiter3, GoTrueApi;
var init_GoTrueApi = __esm({
  "node_modules/@supabase/gotrue-js/dist/module/GoTrueApi.js"() {
    init_fetch();
    init_constants2();
    init_cookies();
    init_helpers2();
    __awaiter3 = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    GoTrueApi = class {
      constructor({ url = "", headers = {}, cookieOptions, fetch: fetch2 }) {
        this.url = url;
        this.headers = headers;
        this.cookieOptions = Object.assign(Object.assign({}, COOKIE_OPTIONS), cookieOptions);
        this.fetch = resolveFetch(fetch2);
      }
      /**
       * Create a temporary object with all configured headers and
       * adds the Authorization token to be used on request methods
       * @param jwt A valid, logged-in JWT.
       */
      _createRequestHeaders(jwt) {
        const headers = Object.assign({}, this.headers);
        headers["Authorization"] = `Bearer ${jwt}`;
        return headers;
      }
      cookieName() {
        var _a;
        return (_a = this.cookieOptions.name) !== null && _a !== void 0 ? _a : "";
      }
      /**
       * Generates the relevant login URL for a third-party provider.
       * @param provider One of the providers supported by GoTrue.
       * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
       * @param scopes A space-separated list of scopes granted to the OAuth application.
       */
      getUrlForProvider(provider, options) {
        const urlParams = [`provider=${encodeURIComponent(provider)}`];
        if (options === null || options === void 0 ? void 0 : options.redirectTo) {
          urlParams.push(`redirect_to=${encodeURIComponent(options.redirectTo)}`);
        }
        if (options === null || options === void 0 ? void 0 : options.scopes) {
          urlParams.push(`scopes=${encodeURIComponent(options.scopes)}`);
        }
        if (options === null || options === void 0 ? void 0 : options.queryParams) {
          const query = new URLSearchParams(options.queryParams);
          urlParams.push(`${query}`);
        }
        return `${this.url}/authorize?${urlParams.join("&")}`;
      }
      /**
       * Creates a new user using their email address.
       * @param email The email address of the user.
       * @param password The password of the user.
       * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
       * @param data Optional user metadata.
       * @param captchaToken Verification token received when the user completes the captcha on your site.
       *
       * @returns A logged-in session if the server has "autoconfirm" ON
       * @returns A user if the server has "autoconfirm" OFF
       */
      signUpWithEmail(email, password, options = {}) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            let queryString = "";
            if (options.redirectTo) {
              queryString = "?redirect_to=" + encodeURIComponent(options.redirectTo);
            }
            const data = yield post(this.fetch, `${this.url}/signup${queryString}`, {
              email,
              password,
              data: options.data,
              gotrue_meta_security: { captcha_token: options.captchaToken }
            }, { headers });
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = expiresAt(data.expires_in);
            return { data: session, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      /**
       * Logs in an existing user using their email address.
       * @param email The email address of the user.
       * @param password The password of the user.
       * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
       * @param captchaToken Verification token received when the user completes the captcha on your site.
       */
      signInWithEmail(email, password, options = {}) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            let queryString = "?grant_type=password";
            if (options.redirectTo) {
              queryString += "&redirect_to=" + encodeURIComponent(options.redirectTo);
            }
            const data = yield post(this.fetch, `${this.url}/token${queryString}`, { email, password, gotrue_meta_security: { captcha_token: options.captchaToken } }, { headers });
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = expiresAt(data.expires_in);
            return { data: session, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      /**
       * Signs up a new user using their phone number and a password.
       * @param phone The phone number of the user.
       * @param password The password of the user.
       * @param data Optional user metadata.
       * @param captchaToken Verification token received when the user completes the captcha on your site.
       */
      signUpWithPhone(phone, password, options = {}) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            const data = yield post(this.fetch, `${this.url}/signup`, {
              phone,
              password,
              data: options.data,
              gotrue_meta_security: { captcha_token: options.captchaToken }
            }, { headers });
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = expiresAt(data.expires_in);
            return { data: session, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      /**
       * Logs in an existing user using their phone number and password.
       * @param phone The phone number of the user.
       * @param password The password of the user.
       * @param captchaToken Verification token received when the user completes the captcha on your site.
       */
      signInWithPhone(phone, password, options = {}) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            const queryString = "?grant_type=password";
            const data = yield post(this.fetch, `${this.url}/token${queryString}`, { phone, password, gotrue_meta_security: { captcha_token: options.captchaToken } }, { headers });
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = expiresAt(data.expires_in);
            return { data: session, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      /**
       * Logs in an OpenID Connect user using their id_token.
       * @param id_token The IDToken of the user.
       * @param nonce The nonce of the user. The nonce is a random value generated by the developer (= yourself) before the initial grant is started. You should check the OpenID Connect specification for details. https://openid.net/developers/specs/
       * @param provider The provider of the user.
       * @param client_id The clientID of the user.
       * @param issuer The issuer of the user.
       */
      signInWithOpenIDConnect({ id_token, nonce, client_id, issuer, provider }) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            const queryString = "?grant_type=id_token";
            const data = yield post(this.fetch, `${this.url}/token${queryString}`, { id_token, nonce, client_id, issuer, provider }, { headers });
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = expiresAt(data.expires_in);
            return { data: session, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      /**
       * Sends a magic login link to an email address.
       * @param email The email address of the user.
       * @param shouldCreateUser A boolean flag to indicate whether to automatically create a user on magiclink / otp sign-ins if the user doesn't exist. Defaults to true.
       * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
       * @param captchaToken Verification token received when the user completes the captcha on your site.
       */
      sendMagicLinkEmail(email, options = {}) {
        var _a;
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            let queryString = "";
            if (options.redirectTo) {
              queryString += "?redirect_to=" + encodeURIComponent(options.redirectTo);
            }
            const shouldCreateUser = (_a = options.shouldCreateUser) !== null && _a !== void 0 ? _a : true;
            const data = yield post(this.fetch, `${this.url}/otp${queryString}`, {
              email,
              create_user: shouldCreateUser,
              gotrue_meta_security: { captcha_token: options.captchaToken }
            }, { headers });
            return { data, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      /**
       * Sends a mobile OTP via SMS. Will register the account if it doesn't already exist
       * @param phone The user's phone number WITH international prefix
       * @param shouldCreateUser A boolean flag to indicate whether to automatically create a user on magiclink / otp sign-ins if the user doesn't exist. Defaults to true.
       * @param captchaToken Verification token received when the user completes the captcha on your site.
       */
      sendMobileOTP(phone, options = {}) {
        var _a;
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const shouldCreateUser = (_a = options.shouldCreateUser) !== null && _a !== void 0 ? _a : true;
            const headers = Object.assign({}, this.headers);
            const data = yield post(this.fetch, `${this.url}/otp`, {
              phone,
              create_user: shouldCreateUser,
              gotrue_meta_security: { captcha_token: options.captchaToken }
            }, { headers });
            return { data, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      /**
       * Removes a logged-in session.
       * @param jwt A valid, logged-in JWT.
       */
      signOut(jwt) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            yield post(this.fetch, `${this.url}/logout`, {}, { headers: this._createRequestHeaders(jwt), noResolveJson: true });
            return { error: null };
          } catch (e) {
            return { error: e };
          }
        });
      }
      /**
       * @deprecated Use `verifyOTP` instead!
       * @param phone The user's phone number WITH international prefix
       * @param token token that user was sent to their mobile phone
       * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
       */
      verifyMobileOTP(phone, token, options = {}) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            const data = yield post(this.fetch, `${this.url}/verify`, { phone, token, type: "sms", redirect_to: options.redirectTo }, { headers });
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = expiresAt(data.expires_in);
            return { data: session, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      /**
       * Send User supplied Email / Mobile OTP to be verified
       * @param email The user's email address
       * @param phone The user's phone number WITH international prefix
       * @param token token that user was sent to their mobile phone
       * @param type verification type that the otp is generated for
       * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
       */
      verifyOTP({ email, phone, token, type = "sms" }, options = {}) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            const data = yield post(this.fetch, `${this.url}/verify`, { email, phone, token, type, redirect_to: options.redirectTo }, { headers });
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = expiresAt(data.expires_in);
            return { data: session, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      /**
       * Sends an invite link to an email address.
       * @param email The email address of the user.
       * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
       * @param data Optional user metadata
       */
      inviteUserByEmail(email, options = {}) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            let queryString = "";
            if (options.redirectTo) {
              queryString += "?redirect_to=" + encodeURIComponent(options.redirectTo);
            }
            const data = yield post(this.fetch, `${this.url}/invite${queryString}`, { email, data: options.data }, { headers });
            return { data, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      /**
       * Sends a reset request to an email address.
       * @param email The email address of the user.
       * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
       * @param captchaToken Verification token received when the user completes the captcha on your site.
       */
      resetPasswordForEmail(email, options = {}) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            let queryString = "";
            if (options.redirectTo) {
              queryString += "?redirect_to=" + encodeURIComponent(options.redirectTo);
            }
            const data = yield post(this.fetch, `${this.url}/recover${queryString}`, { email, gotrue_meta_security: { captcha_token: options.captchaToken } }, { headers });
            return { data, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      /**
       * Generates a new JWT.
       * @param refreshToken A valid refresh token that was returned on login.
       */
      refreshAccessToken(refreshToken) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const data = yield post(this.fetch, `${this.url}/token?grant_type=refresh_token`, { refresh_token: refreshToken }, { headers: this.headers });
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = expiresAt(data.expires_in);
            return { data: session, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      /**
       * Set/delete the auth cookie based on the AuthChangeEvent.
       * Works for Next.js & Express (requires cookie-parser middleware).
       * @param req The request object.
       * @param res The response object.
       */
      setAuthCookie(req, res) {
        if (req.method !== "POST") {
          res.setHeader("Allow", "POST");
          res.status(405).end("Method Not Allowed");
        }
        const { event, session } = req.body;
        if (!event)
          throw new Error("Auth event missing!");
        if (event === "SIGNED_IN") {
          if (!session)
            throw new Error("Auth session missing!");
          setCookies(req, res, [
            { key: "access-token", value: session.access_token },
            { key: "refresh-token", value: session.refresh_token }
          ].map((token) => {
            var _a;
            return {
              name: `${this.cookieName()}-${token.key}`,
              value: token.value,
              domain: this.cookieOptions.domain,
              maxAge: (_a = this.cookieOptions.lifetime) !== null && _a !== void 0 ? _a : 0,
              path: this.cookieOptions.path,
              sameSite: this.cookieOptions.sameSite
            };
          }));
        }
        if (event === "SIGNED_OUT") {
          setCookies(req, res, ["access-token", "refresh-token"].map((key2) => ({
            name: `${this.cookieName()}-${key2}`,
            value: "",
            maxAge: -1
          })));
        }
        res.status(200).json({});
      }
      /**
       * Deletes the Auth Cookies and redirects to the
       * @param req The request object.
       * @param res The response object.
       * @param options Optionally specify a `redirectTo` URL in the options.
       */
      deleteAuthCookie(req, res, { redirectTo = "/" }) {
        setCookies(req, res, ["access-token", "refresh-token"].map((key2) => ({
          name: `${this.cookieName()}-${key2}`,
          value: "",
          maxAge: -1
        })));
        return res.redirect(307, redirectTo);
      }
      /**
       * Helper method to generate the Auth Cookie string for you in case you can't use `setAuthCookie`.
       * @param req The request object.
       * @param res The response object.
       * @returns The Cookie string that needs to be set as the value for the `Set-Cookie` header.
       */
      getAuthCookieString(req, res) {
        if (req.method !== "POST") {
          res.setHeader("Allow", "POST");
          res.status(405).end("Method Not Allowed");
        }
        const { event, session } = req.body;
        if (!event)
          throw new Error("Auth event missing!");
        if (event === "SIGNED_IN") {
          if (!session)
            throw new Error("Auth session missing!");
          return getCookieString(req, res, [
            { key: "access-token", value: session.access_token },
            { key: "refresh-token", value: session.refresh_token }
          ].map((token) => {
            var _a;
            return {
              name: `${this.cookieName()}-${token.key}`,
              value: token.value,
              domain: this.cookieOptions.domain,
              maxAge: (_a = this.cookieOptions.lifetime) !== null && _a !== void 0 ? _a : 0,
              path: this.cookieOptions.path,
              sameSite: this.cookieOptions.sameSite
            };
          }));
        }
        if (event === "SIGNED_OUT") {
          return getCookieString(req, res, ["access-token", "refresh-token"].map((key2) => ({
            name: `${this.cookieName()}-${key2}`,
            value: "",
            maxAge: -1
          })));
        }
        return res.getHeader("Set-Cookie");
      }
      /**
       * Generates links to be sent via email or other.
       * @param type The link type ("signup" or "magiclink" or "recovery" or "invite").
       * @param email The user's email.
       * @param password User password. For signup only.
       * @param data Optional user metadata. For signup only.
       * @param redirectTo The link type ("signup" or "magiclink" or "recovery" or "invite").
       */
      generateLink(type, email, options = {}) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const data = yield post(this.fetch, `${this.url}/admin/generate_link`, {
              type,
              email,
              password: options.password,
              data: options.data,
              redirect_to: options.redirectTo
            }, { headers: this.headers });
            return { data, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      // User Admin API
      /**
       * Creates a new user.
       *
       * This function should only be called on a server. Never expose your `service_role` key in the browser.
       *
       * @param attributes The data you want to create the user with.
       */
      createUser(attributes) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const data = yield post(this.fetch, `${this.url}/admin/users`, attributes, {
              headers: this.headers
            });
            return { user: data, data, error: null };
          } catch (e) {
            return { user: null, data: null, error: e };
          }
        });
      }
      /**
       * Get a list of users.
       *
       * This function should only be called on a server. Never expose your `service_role` key in the browser.
       */
      listUsers() {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const data = yield get(this.fetch, `${this.url}/admin/users`, {
              headers: this.headers
            });
            return { data: data.users, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      /**
       * Get user by id.
       *
       * @param uid The user's unique identifier
       *
       * This function should only be called on a server. Never expose your `service_role` key in the browser.
       */
      getUserById(uid) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const data = yield get(this.fetch, `${this.url}/admin/users/${uid}`, {
              headers: this.headers
            });
            return { data, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      /**
       * Get user by reading the cookie from the request.
       * Works for Next.js & Express (requires cookie-parser middleware).
       */
      getUserByCookie(req, res) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            if (!req.cookies) {
              throw new Error("Not able to parse cookies! When using Express make sure the cookie-parser middleware is in use!");
            }
            const access_token = req.cookies[`${this.cookieName()}-access-token`];
            const refresh_token = req.cookies[`${this.cookieName()}-refresh-token`];
            if (!access_token) {
              throw new Error("No cookie found!");
            }
            const { user: user2, error: getUserError } = yield this.getUser(access_token);
            if (getUserError) {
              if (!refresh_token)
                throw new Error("No refresh_token cookie found!");
              if (!res)
                throw new Error("You need to pass the res object to automatically refresh the session!");
              const { data, error: error2 } = yield this.refreshAccessToken(refresh_token);
              if (error2) {
                throw error2;
              } else if (data) {
                setCookies(req, res, [
                  { key: "access-token", value: data.access_token },
                  { key: "refresh-token", value: data.refresh_token }
                ].map((token) => {
                  var _a;
                  return {
                    name: `${this.cookieName()}-${token.key}`,
                    value: token.value,
                    domain: this.cookieOptions.domain,
                    maxAge: (_a = this.cookieOptions.lifetime) !== null && _a !== void 0 ? _a : 0,
                    path: this.cookieOptions.path,
                    sameSite: this.cookieOptions.sameSite
                  };
                }));
                return { token: data.access_token, user: data.user, data: data.user, error: null };
              }
            }
            return { token: access_token, user: user2, data: user2, error: null };
          } catch (e) {
            return { token: null, user: null, data: null, error: e };
          }
        });
      }
      /**
       * Updates the user data.
       *
       * @param attributes The data you want to update.
       *
       * This function should only be called on a server. Never expose your `service_role` key in the browser.
       */
      updateUserById(uid, attributes) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            this;
            const data = yield put(this.fetch, `${this.url}/admin/users/${uid}`, attributes, {
              headers: this.headers
            });
            return { user: data, data, error: null };
          } catch (e) {
            return { user: null, data: null, error: e };
          }
        });
      }
      /**
       * Delete a user. Requires a `service_role` key.
       *
       * This function should only be called on a server. Never expose your `service_role` key in the browser.
       *
       * @param uid The user uid you want to remove.
       */
      deleteUser(uid) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const data = yield remove(this.fetch, `${this.url}/admin/users/${uid}`, {}, {
              headers: this.headers
            });
            return { user: data, data, error: null };
          } catch (e) {
            return { user: null, data: null, error: e };
          }
        });
      }
      /**
       * Gets the current user details.
       *
       * This method is called by the GoTrueClient `update` where
       * the jwt is set to this.currentSession.access_token
       * and therefore, acts like getting the currently authenticated user
       *
       * @param jwt A valid, logged-in JWT. Typically, the access_token for the currentSession
       */
      getUser(jwt) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const data = yield get(this.fetch, `${this.url}/user`, {
              headers: this._createRequestHeaders(jwt)
            });
            return { user: data, data, error: null };
          } catch (e) {
            return { user: null, data: null, error: e };
          }
        });
      }
      /**
       * Updates the user data.
       * @param jwt A valid, logged-in JWT.
       * @param attributes The data you want to update.
       */
      updateUser(jwt, attributes) {
        return __awaiter3(this, void 0, void 0, function* () {
          try {
            const data = yield put(this.fetch, `${this.url}/user`, attributes, {
              headers: this._createRequestHeaders(jwt)
            });
            return { user: data, data, error: null };
          } catch (e) {
            return { user: null, data: null, error: e };
          }
        });
      }
    };
  }
});

// node_modules/@supabase/gotrue-js/dist/module/lib/polyfills.js
function polyfillGlobalThis() {
  if (typeof globalThis === "object")
    return;
  try {
    Object.defineProperty(Object.prototype, "__magic__", {
      get: function() {
        return this;
      },
      configurable: true
    });
    __magic__.globalThis = __magic__;
    delete Object.prototype.__magic__;
  } catch (e) {
    if (typeof self !== "undefined") {
      self.globalThis = self;
    }
  }
}
var init_polyfills = __esm({
  "node_modules/@supabase/gotrue-js/dist/module/lib/polyfills.js"() {
  }
});

// node_modules/@supabase/gotrue-js/dist/module/GoTrueClient.js
var __awaiter4, DEFAULT_OPTIONS, decodeBase64URL, GoTrueClient;
var init_GoTrueClient = __esm({
  "node_modules/@supabase/gotrue-js/dist/module/GoTrueClient.js"() {
    init_GoTrueApi();
    init_helpers2();
    init_constants2();
    init_polyfills();
    __awaiter4 = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    polyfillGlobalThis();
    DEFAULT_OPTIONS = {
      url: GOTRUE_URL,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      multiTab: true,
      headers: DEFAULT_HEADERS2
    };
    decodeBase64URL = (value) => {
      try {
        return atob(value.replace(/[-]/g, "+").replace(/[_]/g, "/"));
      } catch (e) {
        if (e instanceof ReferenceError) {
          return Buffer.from(value, "base64").toString("utf-8");
        } else {
          throw e;
        }
      }
    };
    GoTrueClient = class {
      /**
       * Create a new client for use in the browser.
       * @param options.url The URL of the GoTrue server.
       * @param options.headers Any additional headers to send to the GoTrue server.
       * @param options.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
       * @param options.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
       * @param options.persistSession Set to "true" if you want to automatically save the user session into local storage.
       * @param options.localStorage Provide your own local storage implementation to use instead of the browser's local storage.
       * @param options.multiTab Set to "false" if you want to disable multi-tab/window events.
       * @param options.cookieOptions
       * @param options.fetch A custom fetch implementation.
       */
      constructor(options) {
        this.stateChangeEmitters = /* @__PURE__ */ new Map();
        this.networkRetries = 0;
        const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
        this.currentUser = null;
        this.currentSession = null;
        this.autoRefreshToken = settings.autoRefreshToken;
        this.persistSession = settings.persistSession;
        this.multiTab = settings.multiTab;
        this.localStorage = settings.localStorage || globalThis.localStorage;
        this.api = new GoTrueApi({
          url: settings.url,
          headers: settings.headers,
          cookieOptions: settings.cookieOptions,
          fetch: settings.fetch
        });
        this._recoverSession();
        this._recoverAndRefresh();
        this._listenForMultiTabEvents();
        this._handleVisibilityChange();
        if (settings.detectSessionInUrl && isBrowser2() && !!getParameterByName("access_token")) {
          this.getSessionFromUrl({ storeSession: true }).then(({ error: error2 }) => {
            if (error2) {
              throw new Error("Error getting session from URL.");
            }
          });
        }
      }
      /**
       * Creates a new user.
       * @type UserCredentials
       * @param email The user's email address.
       * @param password The user's password.
       * @param phone The user's phone number.
       * @param redirectTo The redirect URL attached to the signup confirmation link. Does not redirect the user if it's a mobile signup.
       * @param data Optional user metadata.
       */
      signUp({ email, password, phone }, options = {}) {
        return __awaiter4(this, void 0, void 0, function* () {
          try {
            this._removeSession();
            const { data, error: error2 } = phone && password ? yield this.api.signUpWithPhone(phone, password, {
              data: options.data,
              captchaToken: options.captchaToken
            }) : yield this.api.signUpWithEmail(email, password, {
              redirectTo: options.redirectTo,
              data: options.data,
              captchaToken: options.captchaToken
            });
            if (error2) {
              throw error2;
            }
            if (!data) {
              throw "An error occurred on sign up.";
            }
            let session = null;
            let user2 = null;
            if (data.access_token) {
              session = data;
              user2 = session.user;
              this._saveSession(session);
              this._notifyAllSubscribers("SIGNED_IN");
            }
            if (data.id) {
              user2 = data;
            }
            return { user: user2, session, error: null };
          } catch (e) {
            return { user: null, session: null, error: e };
          }
        });
      }
      /**
       * Log in an existing user, or login via a third-party provider.
       * @type UserCredentials
       * @param email The user's email address.
       * @param phone The user's phone number.
       * @param password The user's password.
       * @param refreshToken A valid refresh token that was returned on login.
       * @param provider One of the providers supported by GoTrue.
       * @param redirectTo A URL to send the user to after they are confirmed (OAuth logins only).
       * @param shouldCreateUser A boolean flag to indicate whether to automatically create a user on magiclink / otp sign-ins if the user doesn't exist. Defaults to true.
       * @param scopes A space-separated list of scopes granted to the OAuth application.
       */
      signIn({ email, phone, password, refreshToken, provider, oidc }, options = {}) {
        return __awaiter4(this, void 0, void 0, function* () {
          try {
            this._removeSession();
            if (email && !password) {
              const { error: error2 } = yield this.api.sendMagicLinkEmail(email, {
                redirectTo: options.redirectTo,
                shouldCreateUser: options.shouldCreateUser,
                captchaToken: options.captchaToken
              });
              return { user: null, session: null, error: error2 };
            }
            if (email && password) {
              return this._handleEmailSignIn(email, password, {
                redirectTo: options.redirectTo,
                captchaToken: options.captchaToken
              });
            }
            if (phone && !password) {
              const { error: error2 } = yield this.api.sendMobileOTP(phone, {
                shouldCreateUser: options.shouldCreateUser,
                captchaToken: options.captchaToken
              });
              return { user: null, session: null, error: error2 };
            }
            if (phone && password) {
              return this._handlePhoneSignIn(phone, password);
            }
            if (refreshToken) {
              const { error: error2 } = yield this._callRefreshToken(refreshToken);
              if (error2)
                throw error2;
              return {
                user: this.currentUser,
                session: this.currentSession,
                error: null
              };
            }
            if (provider) {
              return this._handleProviderSignIn(provider, {
                redirectTo: options.redirectTo,
                scopes: options.scopes,
                queryParams: options.queryParams
              });
            }
            if (oidc) {
              return this._handleOpenIDConnectSignIn(oidc);
            }
            throw new Error(`You must provide either an email, phone number, a third-party provider or OpenID Connect.`);
          } catch (e) {
            return { user: null, session: null, error: e };
          }
        });
      }
      /**
       * Log in a user given a User supplied OTP received via mobile.
       * @param email The user's email address.
       * @param phone The user's phone number.
       * @param token The user's password.
       * @param type The user's verification type.
       * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
       */
      verifyOTP(params, options = {}) {
        return __awaiter4(this, void 0, void 0, function* () {
          try {
            this._removeSession();
            const { data, error: error2 } = yield this.api.verifyOTP(params, options);
            if (error2) {
              throw error2;
            }
            if (!data) {
              throw "An error occurred on token verification.";
            }
            let session = null;
            let user2 = null;
            if (data.access_token) {
              session = data;
              user2 = session.user;
              this._saveSession(session);
              this._notifyAllSubscribers("SIGNED_IN");
            }
            if (data.id) {
              user2 = data;
            }
            return { user: user2, session, error: null };
          } catch (e) {
            return { user: null, session: null, error: e };
          }
        });
      }
      /**
       * Inside a browser context, `user()` will return the user data, if there is a logged in user.
       *
       * For server-side management, you can get a user through `auth.api.getUserByCookie()`
       */
      user() {
        return this.currentUser;
      }
      /**
       * Returns the session data, if there is an active session.
       */
      session() {
        return this.currentSession;
      }
      /**
       * Force refreshes the session including the user data in case it was updated in a different session.
       */
      refreshSession() {
        var _a;
        return __awaiter4(this, void 0, void 0, function* () {
          try {
            if (!((_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token))
              throw new Error("Not logged in.");
            const { error: error2 } = yield this._callRefreshToken();
            if (error2)
              throw error2;
            return { data: this.currentSession, user: this.currentUser, error: null };
          } catch (e) {
            return { data: null, user: null, error: e };
          }
        });
      }
      /**
       * Updates user data, if there is a logged in user.
       */
      update(attributes) {
        var _a;
        return __awaiter4(this, void 0, void 0, function* () {
          try {
            if (!((_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token))
              throw new Error("Not logged in.");
            const { user: user2, error: error2 } = yield this.api.updateUser(this.currentSession.access_token, attributes);
            if (error2)
              throw error2;
            if (!user2)
              throw Error("Invalid user data.");
            const session = Object.assign(Object.assign({}, this.currentSession), { user: user2 });
            this._saveSession(session);
            this._notifyAllSubscribers("USER_UPDATED");
            return { data: user2, user: user2, error: null };
          } catch (e) {
            return { data: null, user: null, error: e };
          }
        });
      }
      setSession(arg0) {
        return __awaiter4(this, void 0, void 0, function* () {
          let session;
          if (typeof arg0 === "string") {
            const refresh_token = arg0;
            const { data, error: error2 } = yield this.api.refreshAccessToken(refresh_token);
            if (error2) {
              return { session: null, error: error2 };
            }
            session = data;
          } else {
            const timeNow = Math.round(Date.now() / 1e3);
            let { refresh_token, access_token } = arg0;
            let expires_at = 0;
            let expires_in = 0;
            const tokenParts = access_token.split(".");
            if (tokenParts.length !== 3)
              throw new Error("access_token is not a proper JWT");
            const bodyJSON = decodeBase64URL(tokenParts[1]);
            let parsed = void 0;
            try {
              parsed = JSON.parse(bodyJSON);
            } catch (e) {
              throw new Error("access_token is not a proper JWT, invalid JSON in body");
            }
            if (typeof parsed === "object" && parsed && typeof parsed.exp === "number") {
              expires_at = parsed.exp;
              expires_in = timeNow - parsed.exp;
            } else {
              throw new Error("access_token is not a proper JWT, missing exp claim");
            }
            if (timeNow > expires_at) {
              const { data, error: error2 } = yield this.api.refreshAccessToken(refresh_token);
              if (error2) {
                return { session: null, error: error2 };
              }
              session = data;
            } else {
              const { user: user2, error: error2 } = yield this.api.getUser(access_token);
              if (error2)
                throw error2;
              session = {
                access_token,
                expires_in,
                expires_at,
                refresh_token,
                token_type: "bearer",
                user: user2
              };
            }
          }
          try {
            this._saveSession(session);
            this._notifyAllSubscribers("SIGNED_IN");
            return { session, error: null };
          } catch (e) {
            return { error: e, session: null };
          }
        });
      }
      /**
       * Overrides the JWT on the current client. The JWT will then be sent in all subsequent network requests.
       * @param access_token a jwt access token
       */
      setAuth(access_token) {
        this.currentSession = Object.assign(Object.assign({}, this.currentSession), { access_token, token_type: "bearer", user: this.user() });
        this._notifyAllSubscribers("TOKEN_REFRESHED");
        return this.currentSession;
      }
      /**
       * Gets the session data from a URL string
       * @param options.storeSession Optionally store the session in the browser
       */
      getSessionFromUrl(options) {
        return __awaiter4(this, void 0, void 0, function* () {
          try {
            if (!isBrowser2())
              throw new Error("No browser detected.");
            const error_description = getParameterByName("error_description");
            if (error_description)
              throw new Error(error_description);
            const provider_token = getParameterByName("provider_token");
            const provider_refresh_token = getParameterByName("provider_refresh_token");
            const access_token = getParameterByName("access_token");
            if (!access_token)
              throw new Error("No access_token detected.");
            const expires_in = getParameterByName("expires_in");
            if (!expires_in)
              throw new Error("No expires_in detected.");
            const refresh_token = getParameterByName("refresh_token");
            if (!refresh_token)
              throw new Error("No refresh_token detected.");
            const token_type = getParameterByName("token_type");
            if (!token_type)
              throw new Error("No token_type detected.");
            const timeNow = Math.round(Date.now() / 1e3);
            const expires_at = timeNow + parseInt(expires_in);
            const { user: user2, error: error2 } = yield this.api.getUser(access_token);
            if (error2)
              throw error2;
            const session = {
              provider_token,
              provider_refresh_token,
              access_token,
              expires_in: parseInt(expires_in),
              expires_at,
              refresh_token,
              token_type,
              user: user2
            };
            if (options === null || options === void 0 ? void 0 : options.storeSession) {
              this._saveSession(session);
              const recoveryMode = getParameterByName("type");
              this._notifyAllSubscribers("SIGNED_IN");
              if (recoveryMode === "recovery") {
                this._notifyAllSubscribers("PASSWORD_RECOVERY");
              }
            }
            window.location.hash = "";
            return { data: session, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      /**
       * Inside a browser context, `signOut()` will remove the logged in user from the browser session
       * and log them out - removing all items from localstorage and then trigger a "SIGNED_OUT" event.
       *
       * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`. There is no way to revoke a user's session JWT before it automatically expires
       */
      signOut() {
        var _a;
        return __awaiter4(this, void 0, void 0, function* () {
          const accessToken = (_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token;
          this._removeSession();
          this._notifyAllSubscribers("SIGNED_OUT");
          if (accessToken) {
            const { error: error2 } = yield this.api.signOut(accessToken);
            if (error2)
              return { error: error2 };
          }
          return { error: null };
        });
      }
      /**
       * Receive a notification every time an auth event happens.
       * @returns {Subscription} A subscription object which can be used to unsubscribe itself.
       */
      onAuthStateChange(callback) {
        try {
          const id = uuid();
          const subscription = {
            id,
            callback,
            unsubscribe: () => {
              this.stateChangeEmitters.delete(id);
            }
          };
          this.stateChangeEmitters.set(id, subscription);
          return { data: subscription, error: null };
        } catch (e) {
          return { data: null, error: e };
        }
      }
      _handleEmailSignIn(email, password, options = {}) {
        var _a, _b;
        return __awaiter4(this, void 0, void 0, function* () {
          try {
            const { data, error: error2 } = yield this.api.signInWithEmail(email, password, {
              redirectTo: options.redirectTo,
              captchaToken: options.captchaToken
            });
            if (error2 || !data)
              return { data: null, user: null, session: null, error: error2 };
            if (((_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.confirmed_at) || ((_b = data === null || data === void 0 ? void 0 : data.user) === null || _b === void 0 ? void 0 : _b.email_confirmed_at)) {
              this._saveSession(data);
              this._notifyAllSubscribers("SIGNED_IN");
            }
            return { data, user: data.user, session: data, error: null };
          } catch (e) {
            return { data: null, user: null, session: null, error: e };
          }
        });
      }
      _handlePhoneSignIn(phone, password, options = {}) {
        var _a;
        return __awaiter4(this, void 0, void 0, function* () {
          try {
            const { data, error: error2 } = yield this.api.signInWithPhone(phone, password, options);
            if (error2 || !data)
              return { data: null, user: null, session: null, error: error2 };
            if ((_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.phone_confirmed_at) {
              this._saveSession(data);
              this._notifyAllSubscribers("SIGNED_IN");
            }
            return { data, user: data.user, session: data, error: null };
          } catch (e) {
            return { data: null, user: null, session: null, error: e };
          }
        });
      }
      _handleProviderSignIn(provider, options = {}) {
        const url = this.api.getUrlForProvider(provider, {
          redirectTo: options.redirectTo,
          scopes: options.scopes,
          queryParams: options.queryParams
        });
        try {
          if (isBrowser2()) {
            window.location.href = url;
          }
          return { provider, url, data: null, session: null, user: null, error: null };
        } catch (e) {
          if (url)
            return { provider, url, data: null, session: null, user: null, error: null };
          return { data: null, user: null, session: null, error: e };
        }
      }
      _handleOpenIDConnectSignIn({ id_token, nonce, client_id, issuer, provider }) {
        return __awaiter4(this, void 0, void 0, function* () {
          if (id_token && nonce && (client_id && issuer || provider)) {
            try {
              const { data, error: error2 } = yield this.api.signInWithOpenIDConnect({
                id_token,
                nonce,
                client_id,
                issuer,
                provider
              });
              if (error2 || !data)
                return { user: null, session: null, error: error2 };
              this._saveSession(data);
              this._notifyAllSubscribers("SIGNED_IN");
              return { user: data.user, session: data, error: null };
            } catch (e) {
              return { user: null, session: null, error: e };
            }
          }
          throw new Error(`You must provide a OpenID Connect provider with your id token and nonce.`);
        });
      }
      /**
       * Attempts to get the session from LocalStorage
       * Note: this should never be async (even for React Native), as we need it to return immediately in the constructor.
       */
      _recoverSession() {
        try {
          const data = getItemSynchronously(this.localStorage, STORAGE_KEY2);
          if (!data)
            return null;
          const { currentSession, expiresAt: expiresAt2 } = data;
          const timeNow = Math.round(Date.now() / 1e3);
          if (expiresAt2 >= timeNow + EXPIRY_MARGIN && (currentSession === null || currentSession === void 0 ? void 0 : currentSession.user)) {
            this._saveSession(currentSession);
            this._notifyAllSubscribers("SIGNED_IN");
          }
        } catch (error2) {
          console.log("error", error2);
        }
      }
      /**
       * Recovers the session from LocalStorage and refreshes
       * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
       */
      _recoverAndRefresh() {
        return __awaiter4(this, void 0, void 0, function* () {
          try {
            const data = yield getItemAsync(this.localStorage, STORAGE_KEY2);
            if (!data)
              return null;
            const { currentSession, expiresAt: expiresAt2 } = data;
            const timeNow = Math.round(Date.now() / 1e3);
            if (expiresAt2 < timeNow + EXPIRY_MARGIN) {
              if (this.autoRefreshToken && currentSession.refresh_token) {
                this.networkRetries++;
                const { error: error2 } = yield this._callRefreshToken(currentSession.refresh_token);
                if (error2) {
                  console.log(error2.message);
                  if (error2.message === NETWORK_FAILURE.ERROR_MESSAGE && this.networkRetries < NETWORK_FAILURE.MAX_RETRIES) {
                    if (this.refreshTokenTimer)
                      clearTimeout(this.refreshTokenTimer);
                    this.refreshTokenTimer = setTimeout(
                      () => this._recoverAndRefresh(),
                      Math.pow(NETWORK_FAILURE.RETRY_INTERVAL, this.networkRetries) * 100
                      // exponential backoff
                    );
                    return;
                  }
                  yield this._removeSession();
                }
                this.networkRetries = 0;
              } else {
                this._removeSession();
              }
            } else if (!currentSession) {
              console.log("Current session is missing data.");
              this._removeSession();
            } else {
              this._saveSession(currentSession);
              this._notifyAllSubscribers("SIGNED_IN");
            }
          } catch (err) {
            console.error(err);
            return null;
          }
        });
      }
      _callRefreshToken(refresh_token) {
        var _a;
        if (refresh_token === void 0) {
          refresh_token = (_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.refresh_token;
        }
        return __awaiter4(this, void 0, void 0, function* () {
          try {
            if (!refresh_token) {
              throw new Error("No current session.");
            }
            const { data, error: error2 } = yield this.api.refreshAccessToken(refresh_token);
            if (error2)
              throw error2;
            if (!data)
              throw Error("Invalid session data.");
            this._saveSession(data);
            this._notifyAllSubscribers("TOKEN_REFRESHED");
            this._notifyAllSubscribers("SIGNED_IN");
            return { data, error: null };
          } catch (e) {
            return { data: null, error: e };
          }
        });
      }
      _notifyAllSubscribers(event) {
        this.stateChangeEmitters.forEach((x) => x.callback(event, this.currentSession));
      }
      /**
       * set currentSession and currentUser
       * process to _startAutoRefreshToken if possible
       */
      _saveSession(session) {
        this.currentSession = session;
        this.currentUser = session.user;
        const expiresAt2 = session.expires_at;
        if (expiresAt2) {
          const timeNow = Math.round(Date.now() / 1e3);
          const expiresIn = expiresAt2 - timeNow;
          const refreshDurationBeforeExpires = expiresIn > EXPIRY_MARGIN ? EXPIRY_MARGIN : 0.5;
          this._startAutoRefreshToken((expiresIn - refreshDurationBeforeExpires) * 1e3);
        }
        if (this.persistSession && session.expires_at) {
          this._persistSession(this.currentSession);
        }
      }
      _persistSession(currentSession) {
        const data = { currentSession, expiresAt: currentSession.expires_at };
        setItemAsync(this.localStorage, STORAGE_KEY2, data);
      }
      _removeSession() {
        return __awaiter4(this, void 0, void 0, function* () {
          this.currentSession = null;
          this.currentUser = null;
          if (this.refreshTokenTimer)
            clearTimeout(this.refreshTokenTimer);
          removeItemAsync(this.localStorage, STORAGE_KEY2);
        });
      }
      /**
       * Clear and re-create refresh token timer
       * @param value time intervals in milliseconds
       */
      _startAutoRefreshToken(value) {
        if (this.refreshTokenTimer)
          clearTimeout(this.refreshTokenTimer);
        if (value <= 0 || !this.autoRefreshToken)
          return;
        this.refreshTokenTimer = setTimeout(() => __awaiter4(this, void 0, void 0, function* () {
          this.networkRetries++;
          const { error: error2 } = yield this._callRefreshToken();
          if (!error2)
            this.networkRetries = 0;
          if ((error2 === null || error2 === void 0 ? void 0 : error2.message) === NETWORK_FAILURE.ERROR_MESSAGE && this.networkRetries < NETWORK_FAILURE.MAX_RETRIES)
            this._startAutoRefreshToken(Math.pow(NETWORK_FAILURE.RETRY_INTERVAL, this.networkRetries) * 100);
        }), value);
        if (typeof this.refreshTokenTimer.unref === "function")
          this.refreshTokenTimer.unref();
      }
      /**
       * Listens for changes to LocalStorage and updates the current session.
       */
      _listenForMultiTabEvents() {
        if (!this.multiTab || !isBrowser2() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) {
          return false;
        }
        try {
          window === null || window === void 0 ? void 0 : window.addEventListener("storage", (e) => {
            var _a;
            if (e.key === STORAGE_KEY2) {
              const newSession = JSON.parse(String(e.newValue));
              if ((_a = newSession === null || newSession === void 0 ? void 0 : newSession.currentSession) === null || _a === void 0 ? void 0 : _a.access_token) {
                this._saveSession(newSession.currentSession);
                this._notifyAllSubscribers("SIGNED_IN");
              } else {
                this._removeSession();
                this._notifyAllSubscribers("SIGNED_OUT");
              }
            }
          });
        } catch (error2) {
          console.error("_listenForMultiTabEvents", error2);
        }
      }
      _handleVisibilityChange() {
        if (!this.multiTab || !isBrowser2() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) {
          return false;
        }
        try {
          window === null || window === void 0 ? void 0 : window.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "visible") {
              this._recoverAndRefresh();
            }
          });
        } catch (error2) {
          console.error("_handleVisibilityChange", error2);
        }
      }
    };
  }
});

// node_modules/@supabase/gotrue-js/dist/module/lib/types.js
var init_types = __esm({
  "node_modules/@supabase/gotrue-js/dist/module/lib/types.js"() {
  }
});

// node_modules/@supabase/gotrue-js/dist/module/index.js
var init_module = __esm({
  "node_modules/@supabase/gotrue-js/dist/module/index.js"() {
    init_GoTrueApi();
    init_GoTrueClient();
    init_types();
  }
});

// node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js
var SupabaseAuthClient;
var init_SupabaseAuthClient = __esm({
  "node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js"() {
    init_module();
    SupabaseAuthClient = class extends GoTrueClient {
      constructor(options) {
        super(options);
      }
    };
  }
});

// node_modules/@supabase/postgrest-js/dist/module/lib/types.js
var __awaiter5, PostgrestBuilder;
var init_types2 = __esm({
  "node_modules/@supabase/postgrest-js/dist/module/lib/types.js"() {
    __awaiter5 = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    PostgrestBuilder = class {
      constructor(builder) {
        Object.assign(this, builder);
        let _fetch;
        if (builder.fetch) {
          _fetch = builder.fetch;
        } else if (typeof fetch === "undefined") {
          _fetch = (...args) => __awaiter5(this, void 0, void 0, function* () {
            return yield (yield Promise.resolve().then(() => __toESM(require_browser_ponyfill()))).fetch(...args);
          });
        } else {
          _fetch = fetch;
        }
        this.fetch = (...args) => _fetch(...args);
        this.shouldThrowOnError = builder.shouldThrowOnError || false;
        this.allowEmpty = builder.allowEmpty || false;
      }
      /**
       * If there's an error with the query, throwOnError will reject the promise by
       * throwing the error instead of returning it as part of a successful response.
       *
       * {@link https://github.com/supabase/supabase-js/issues/92}
       */
      throwOnError(throwOnError) {
        if (throwOnError === null || throwOnError === void 0) {
          throwOnError = true;
        }
        this.shouldThrowOnError = throwOnError;
        return this;
      }
      then(onfulfilled, onrejected) {
        if (typeof this.schema === "undefined") {
        } else if (["GET", "HEAD"].includes(this.method)) {
          this.headers["Accept-Profile"] = this.schema;
        } else {
          this.headers["Content-Profile"] = this.schema;
        }
        if (this.method !== "GET" && this.method !== "HEAD") {
          this.headers["Content-Type"] = "application/json";
        }
        let res = this.fetch(this.url.toString(), {
          method: this.method,
          headers: this.headers,
          body: JSON.stringify(this.body),
          signal: this.signal
        }).then((res2) => __awaiter5(this, void 0, void 0, function* () {
          var _a, _b, _c, _d;
          let error2 = null;
          let data = null;
          let count = null;
          let status = res2.status;
          let statusText = res2.statusText;
          if (res2.ok) {
            const isReturnMinimal = (_a = this.headers["Prefer"]) === null || _a === void 0 ? void 0 : _a.split(",").includes("return=minimal");
            if (this.method !== "HEAD" && !isReturnMinimal) {
              const text = yield res2.text();
              if (!text) {
              } else if (this.headers["Accept"] === "text/csv") {
                data = text;
              } else {
                data = JSON.parse(text);
              }
            }
            const countHeader = (_b = this.headers["Prefer"]) === null || _b === void 0 ? void 0 : _b.match(/count=(exact|planned|estimated)/);
            const contentRange = (_c = res2.headers.get("content-range")) === null || _c === void 0 ? void 0 : _c.split("/");
            if (countHeader && contentRange && contentRange.length > 1) {
              count = parseInt(contentRange[1]);
            }
          } else {
            const body = yield res2.text();
            try {
              error2 = JSON.parse(body);
            } catch (_e) {
              error2 = {
                message: body
              };
            }
            if (error2 && this.allowEmpty && ((_d = error2 === null || error2 === void 0 ? void 0 : error2.details) === null || _d === void 0 ? void 0 : _d.includes("Results contain 0 rows"))) {
              error2 = null;
              status = 200;
              statusText = "OK";
            }
            if (error2 && this.shouldThrowOnError) {
              throw error2;
            }
          }
          const postgrestResponse = {
            error: error2,
            data,
            count,
            status,
            statusText,
            body: data
          };
          return postgrestResponse;
        }));
        if (!this.shouldThrowOnError) {
          res = res.catch((fetchError) => ({
            error: {
              message: `FetchError: ${fetchError.message}`,
              details: "",
              hint: "",
              code: fetchError.code || ""
            },
            data: null,
            body: null,
            count: null,
            status: 400,
            statusText: "Bad Request"
          }));
        }
        return res.then(onfulfilled, onrejected);
      }
    };
  }
});

// node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestTransformBuilder.js
var PostgrestTransformBuilder;
var init_PostgrestTransformBuilder = __esm({
  "node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestTransformBuilder.js"() {
    init_types2();
    PostgrestTransformBuilder = class extends PostgrestBuilder {
      /**
       * Performs vertical filtering with SELECT.
       *
       * @param columns  The columns to retrieve, separated by commas.
       */
      select(columns = "*") {
        let quoted2 = false;
        const cleanedColumns = columns.split("").map((c) => {
          if (/\s/.test(c) && !quoted2) {
            return "";
          }
          if (c === '"') {
            quoted2 = !quoted2;
          }
          return c;
        }).join("");
        this.url.searchParams.set("select", cleanedColumns);
        return this;
      }
      /**
       * Orders the result with the specified `column`.
       *
       * @param column  The column to order on.
       * @param ascending  If `true`, the result will be in ascending order.
       * @param nullsFirst  If `true`, `null`s appear first.
       * @param foreignTable  The foreign table to use (if `column` is a foreign column).
       */
      order(column, { ascending = true, nullsFirst = false, foreignTable } = {}) {
        const key2 = typeof foreignTable === "undefined" ? "order" : `${foreignTable}.order`;
        const existingOrder = this.url.searchParams.get(key2);
        this.url.searchParams.set(key2, `${existingOrder ? `${existingOrder},` : ""}${column}.${ascending ? "asc" : "desc"}.${nullsFirst ? "nullsfirst" : "nullslast"}`);
        return this;
      }
      /**
       * Limits the result with the specified `count`.
       *
       * @param count  The maximum no. of rows to limit to.
       * @param foreignTable  The foreign table to use (for foreign columns).
       */
      limit(count, { foreignTable } = {}) {
        const key2 = typeof foreignTable === "undefined" ? "limit" : `${foreignTable}.limit`;
        this.url.searchParams.set(key2, `${count}`);
        return this;
      }
      /**
       * Limits the result to rows within the specified range, inclusive.
       *
       * @param from  The starting index from which to limit the result, inclusive.
       * @param to  The last index to which to limit the result, inclusive.
       * @param foreignTable  The foreign table to use (for foreign columns).
       */
      range(from, to, { foreignTable } = {}) {
        const keyOffset = typeof foreignTable === "undefined" ? "offset" : `${foreignTable}.offset`;
        const keyLimit = typeof foreignTable === "undefined" ? "limit" : `${foreignTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
      }
      /**
       * Sets the AbortSignal for the fetch request.
       */
      abortSignal(signal) {
        this.signal = signal;
        return this;
      }
      /**
       * Retrieves only one row from the result. Result must be one row (e.g. using
       * `limit`), otherwise this will result in an error.
       */
      single() {
        this.headers["Accept"] = "application/vnd.pgrst.object+json";
        return this;
      }
      /**
       * Retrieves at most one row from the result. Result must be at most one row
       * (e.g. using `eq` on a UNIQUE column), otherwise this will result in an
       * error.
       */
      maybeSingle() {
        this.headers["Accept"] = "application/vnd.pgrst.object+json";
        this.allowEmpty = true;
        return this;
      }
      /**
       * Set the response type to CSV.
       */
      csv() {
        this.headers["Accept"] = "text/csv";
        return this;
      }
    };
  }
});

// node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestFilterBuilder.js
var PostgrestFilterBuilder;
var init_PostgrestFilterBuilder = __esm({
  "node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestFilterBuilder.js"() {
    init_PostgrestTransformBuilder();
    PostgrestFilterBuilder = class extends PostgrestTransformBuilder {
      constructor() {
        super(...arguments);
        this.cs = this.contains;
        this.cd = this.containedBy;
        this.sl = this.rangeLt;
        this.sr = this.rangeGt;
        this.nxl = this.rangeGte;
        this.nxr = this.rangeLte;
        this.adj = this.rangeAdjacent;
        this.ov = this.overlaps;
      }
      /**
       * Finds all rows which doesn't satisfy the filter.
       *
       * @param column  The column to filter on.
       * @param operator  The operator to filter with.
       * @param value  The value to filter with.
       */
      not(column, operator, value) {
        this.url.searchParams.append(`${column}`, `not.${operator}.${value}`);
        return this;
      }
      /**
       * Finds all rows satisfying at least one of the filters.
       *
       * @param filters  The filters to use, separated by commas.
       * @param foreignTable  The foreign table to use (if `column` is a foreign column).
       */
      or(filters, { foreignTable } = {}) {
        const key2 = typeof foreignTable === "undefined" ? "or" : `${foreignTable}.or`;
        this.url.searchParams.append(key2, `(${filters})`);
        return this;
      }
      /**
       * Finds all rows whose value on the stated `column` exactly matches the
       * specified `value`.
       *
       * @param column  The column to filter on.
       * @param value  The value to filter with.
       */
      eq(column, value) {
        this.url.searchParams.append(`${column}`, `eq.${value}`);
        return this;
      }
      /**
       * Finds all rows whose value on the stated `column` doesn't match the
       * specified `value`.
       *
       * @param column  The column to filter on.
       * @param value  The value to filter with.
       */
      neq(column, value) {
        this.url.searchParams.append(`${column}`, `neq.${value}`);
        return this;
      }
      /**
       * Finds all rows whose value on the stated `column` is greater than the
       * specified `value`.
       *
       * @param column  The column to filter on.
       * @param value  The value to filter with.
       */
      gt(column, value) {
        this.url.searchParams.append(`${column}`, `gt.${value}`);
        return this;
      }
      /**
       * Finds all rows whose value on the stated `column` is greater than or
       * equal to the specified `value`.
       *
       * @param column  The column to filter on.
       * @param value  The value to filter with.
       */
      gte(column, value) {
        this.url.searchParams.append(`${column}`, `gte.${value}`);
        return this;
      }
      /**
       * Finds all rows whose value on the stated `column` is less than the
       * specified `value`.
       *
       * @param column  The column to filter on.
       * @param value  The value to filter with.
       */
      lt(column, value) {
        this.url.searchParams.append(`${column}`, `lt.${value}`);
        return this;
      }
      /**
       * Finds all rows whose value on the stated `column` is less than or equal
       * to the specified `value`.
       *
       * @param column  The column to filter on.
       * @param value  The value to filter with.
       */
      lte(column, value) {
        this.url.searchParams.append(`${column}`, `lte.${value}`);
        return this;
      }
      /**
       * Finds all rows whose value in the stated `column` matches the supplied
       * `pattern` (case sensitive).
       *
       * @param column  The column to filter on.
       * @param pattern  The pattern to filter with.
       */
      like(column, pattern2) {
        this.url.searchParams.append(`${column}`, `like.${pattern2}`);
        return this;
      }
      /**
       * Finds all rows whose value in the stated `column` matches the supplied
       * `pattern` (case insensitive).
       *
       * @param column  The column to filter on.
       * @param pattern  The pattern to filter with.
       */
      ilike(column, pattern2) {
        this.url.searchParams.append(`${column}`, `ilike.${pattern2}`);
        return this;
      }
      /**
       * A check for exact equality (null, true, false), finds all rows whose
       * value on the stated `column` exactly match the specified `value`.
       *
       * @param column  The column to filter on.
       * @param value  The value to filter with.
       */
      is(column, value) {
        this.url.searchParams.append(`${column}`, `is.${value}`);
        return this;
      }
      /**
       * Finds all rows whose value on the stated `column` is found on the
       * specified `values`.
       *
       * @param column  The column to filter on.
       * @param values  The values to filter with.
       */
      in(column, values) {
        const cleanedValues = values.map((s2) => {
          if (typeof s2 === "string" && new RegExp("[,()]").test(s2))
            return `"${s2}"`;
          else
            return `${s2}`;
        }).join(",");
        this.url.searchParams.append(`${column}`, `in.(${cleanedValues})`);
        return this;
      }
      /**
       * Finds all rows whose json, array, or range value on the stated `column`
       * contains the values specified in `value`.
       *
       * @param column  The column to filter on.
       * @param value  The value to filter with.
       */
      contains(column, value) {
        if (typeof value === "string") {
          this.url.searchParams.append(`${column}`, `cs.${value}`);
        } else if (Array.isArray(value)) {
          this.url.searchParams.append(`${column}`, `cs.{${value.join(",")}}`);
        } else {
          this.url.searchParams.append(`${column}`, `cs.${JSON.stringify(value)}`);
        }
        return this;
      }
      /**
       * Finds all rows whose json, array, or range value on the stated `column` is
       * contained by the specified `value`.
       *
       * @param column  The column to filter on.
       * @param value  The value to filter with.
       */
      containedBy(column, value) {
        if (typeof value === "string") {
          this.url.searchParams.append(`${column}`, `cd.${value}`);
        } else if (Array.isArray(value)) {
          this.url.searchParams.append(`${column}`, `cd.{${value.join(",")}}`);
        } else {
          this.url.searchParams.append(`${column}`, `cd.${JSON.stringify(value)}`);
        }
        return this;
      }
      /**
       * Finds all rows whose range value on the stated `column` is strictly to the
       * left of the specified `range`.
       *
       * @param column  The column to filter on.
       * @param range  The range to filter with.
       */
      rangeLt(column, range) {
        this.url.searchParams.append(`${column}`, `sl.${range}`);
        return this;
      }
      /**
       * Finds all rows whose range value on the stated `column` is strictly to
       * the right of the specified `range`.
       *
       * @param column  The column to filter on.
       * @param range  The range to filter with.
       */
      rangeGt(column, range) {
        this.url.searchParams.append(`${column}`, `sr.${range}`);
        return this;
      }
      /**
       * Finds all rows whose range value on the stated `column` does not extend
       * to the left of the specified `range`.
       *
       * @param column  The column to filter on.
       * @param range  The range to filter with.
       */
      rangeGte(column, range) {
        this.url.searchParams.append(`${column}`, `nxl.${range}`);
        return this;
      }
      /**
       * Finds all rows whose range value on the stated `column` does not extend
       * to the right of the specified `range`.
       *
       * @param column  The column to filter on.
       * @param range  The range to filter with.
       */
      rangeLte(column, range) {
        this.url.searchParams.append(`${column}`, `nxr.${range}`);
        return this;
      }
      /**
       * Finds all rows whose range value on the stated `column` is adjacent to
       * the specified `range`.
       *
       * @param column  The column to filter on.
       * @param range  The range to filter with.
       */
      rangeAdjacent(column, range) {
        this.url.searchParams.append(`${column}`, `adj.${range}`);
        return this;
      }
      /**
       * Finds all rows whose array or range value on the stated `column` overlaps
       * (has a value in common) with the specified `value`.
       *
       * @param column  The column to filter on.
       * @param value  The value to filter with.
       */
      overlaps(column, value) {
        if (typeof value === "string") {
          this.url.searchParams.append(`${column}`, `ov.${value}`);
        } else {
          this.url.searchParams.append(`${column}`, `ov.{${value.join(",")}}`);
        }
        return this;
      }
      /**
       * Finds all rows whose text or tsvector value on the stated `column` matches
       * the tsquery in `query`.
       *
       * @param column  The column to filter on.
       * @param query  The Postgres tsquery string to filter with.
       * @param config  The text search configuration to use.
       * @param type  The type of tsquery conversion to use on `query`.
       */
      textSearch(column, query, { config, type = null } = {}) {
        let typePart = "";
        if (type === "plain") {
          typePart = "pl";
        } else if (type === "phrase") {
          typePart = "ph";
        } else if (type === "websearch") {
          typePart = "w";
        }
        const configPart = config === void 0 ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `${typePart}fts${configPart}.${query}`);
        return this;
      }
      /**
       * Finds all rows whose tsvector value on the stated `column` matches
       * to_tsquery(`query`).
       *
       * @param column  The column to filter on.
       * @param query  The Postgres tsquery string to filter with.
       * @param config  The text search configuration to use.
       *
       * @deprecated Use `textSearch()` instead.
       */
      fts(column, query, { config } = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `fts${configPart}.${query}`);
        return this;
      }
      /**
       * Finds all rows whose tsvector value on the stated `column` matches
       * plainto_tsquery(`query`).
       *
       * @param column  The column to filter on.
       * @param query  The Postgres tsquery string to filter with.
       * @param config  The text search configuration to use.
       *
       * @deprecated Use `textSearch()` with `type: 'plain'` instead.
       */
      plfts(column, query, { config } = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `plfts${configPart}.${query}`);
        return this;
      }
      /**
       * Finds all rows whose tsvector value on the stated `column` matches
       * phraseto_tsquery(`query`).
       *
       * @param column  The column to filter on.
       * @param query  The Postgres tsquery string to filter with.
       * @param config  The text search configuration to use.
       *
       * @deprecated Use `textSearch()` with `type: 'phrase'` instead.
       */
      phfts(column, query, { config } = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `phfts${configPart}.${query}`);
        return this;
      }
      /**
       * Finds all rows whose tsvector value on the stated `column` matches
       * websearch_to_tsquery(`query`).
       *
       * @param column  The column to filter on.
       * @param query  The Postgres tsquery string to filter with.
       * @param config  The text search configuration to use.
       *
       * @deprecated Use `textSearch()` with `type: 'websearch'` instead.
       */
      wfts(column, query, { config } = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `wfts${configPart}.${query}`);
        return this;
      }
      /**
       * Finds all rows whose `column` satisfies the filter.
       *
       * @param column  The column to filter on.
       * @param operator  The operator to filter with.
       * @param value  The value to filter with.
       */
      filter(column, operator, value) {
        this.url.searchParams.append(`${column}`, `${operator}.${value}`);
        return this;
      }
      /**
       * Finds all rows whose columns match the specified `query` object.
       *
       * @param query  The object to filter with, with column names as keys mapped
       *               to their filter values.
       */
      match(query) {
        Object.keys(query).forEach((key2) => {
          this.url.searchParams.append(`${key2}`, `eq.${query[key2]}`);
        });
        return this;
      }
    };
  }
});

// node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestQueryBuilder.js
var PostgrestQueryBuilder;
var init_PostgrestQueryBuilder = __esm({
  "node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestQueryBuilder.js"() {
    init_types2();
    init_PostgrestFilterBuilder();
    PostgrestQueryBuilder = class extends PostgrestBuilder {
      constructor(url, { headers = {}, schema, fetch: fetch2, shouldThrowOnError } = {}) {
        super({ fetch: fetch2, shouldThrowOnError });
        this.url = new URL(url);
        this.headers = Object.assign({}, headers);
        this.schema = schema;
      }
      /**
       * Performs vertical filtering with SELECT.
       *
       * @param columns  The columns to retrieve, separated by commas.
       * @param head  When set to true, select will void data.
       * @param count  Count algorithm to use to count rows in a table.
       */
      select(columns = "*", { head = false, count = null } = {}) {
        this.method = "GET";
        let quoted2 = false;
        const cleanedColumns = columns.split("").map((c) => {
          if (/\s/.test(c) && !quoted2) {
            return "";
          }
          if (c === '"') {
            quoted2 = !quoted2;
          }
          return c;
        }).join("");
        this.url.searchParams.set("select", cleanedColumns);
        if (count) {
          this.headers["Prefer"] = `count=${count}`;
        }
        if (head) {
          this.method = "HEAD";
        }
        return new PostgrestFilterBuilder(this);
      }
      insert(values, { upsert = false, onConflict, returning = "representation", count = null } = {}) {
        this.method = "POST";
        const prefersHeaders = [`return=${returning}`];
        if (upsert)
          prefersHeaders.push("resolution=merge-duplicates");
        if (upsert && onConflict !== void 0)
          this.url.searchParams.set("on_conflict", onConflict);
        this.body = values;
        if (count) {
          prefersHeaders.push(`count=${count}`);
        }
        if (this.headers["Prefer"]) {
          prefersHeaders.unshift(this.headers["Prefer"]);
        }
        this.headers["Prefer"] = prefersHeaders.join(",");
        if (Array.isArray(values)) {
          const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
          if (columns.length > 0) {
            const uniqueColumns = [...new Set(columns)].map((column) => `"${column}"`);
            this.url.searchParams.set("columns", uniqueColumns.join(","));
          }
        }
        return new PostgrestFilterBuilder(this);
      }
      /**
       * Performs an UPSERT into the table.
       *
       * @param values  The values to insert.
       * @param onConflict  By specifying the `on_conflict` query parameter, you can make UPSERT work on a column(s) that has a UNIQUE constraint.
       * @param returning  By default the new record is returned. Set this to 'minimal' if you don't need this value.
       * @param count  Count algorithm to use to count rows in a table.
       * @param ignoreDuplicates  Specifies if duplicate rows should be ignored and not inserted.
       */
      upsert(values, { onConflict, returning = "representation", count = null, ignoreDuplicates = false } = {}) {
        this.method = "POST";
        const prefersHeaders = [
          `resolution=${ignoreDuplicates ? "ignore" : "merge"}-duplicates`,
          `return=${returning}`
        ];
        if (onConflict !== void 0)
          this.url.searchParams.set("on_conflict", onConflict);
        this.body = values;
        if (count) {
          prefersHeaders.push(`count=${count}`);
        }
        if (this.headers["Prefer"]) {
          prefersHeaders.unshift(this.headers["Prefer"]);
        }
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new PostgrestFilterBuilder(this);
      }
      /**
       * Performs an UPDATE on the table.
       *
       * @param values  The values to update.
       * @param returning  By default the updated record is returned. Set this to 'minimal' if you don't need this value.
       * @param count  Count algorithm to use to count rows in a table.
       */
      update(values, { returning = "representation", count = null } = {}) {
        this.method = "PATCH";
        const prefersHeaders = [`return=${returning}`];
        this.body = values;
        if (count) {
          prefersHeaders.push(`count=${count}`);
        }
        if (this.headers["Prefer"]) {
          prefersHeaders.unshift(this.headers["Prefer"]);
        }
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new PostgrestFilterBuilder(this);
      }
      /**
       * Performs a DELETE on the table.
       *
       * @param returning  If `true`, return the deleted row(s) in the response.
       * @param count  Count algorithm to use to count rows in a table.
       */
      delete({ returning = "representation", count = null } = {}) {
        this.method = "DELETE";
        const prefersHeaders = [`return=${returning}`];
        if (count) {
          prefersHeaders.push(`count=${count}`);
        }
        if (this.headers["Prefer"]) {
          prefersHeaders.unshift(this.headers["Prefer"]);
        }
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new PostgrestFilterBuilder(this);
      }
    };
  }
});

// node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestRpcBuilder.js
var PostgrestRpcBuilder;
var init_PostgrestRpcBuilder = __esm({
  "node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestRpcBuilder.js"() {
    init_types2();
    init_PostgrestFilterBuilder();
    PostgrestRpcBuilder = class extends PostgrestBuilder {
      constructor(url, { headers = {}, schema, fetch: fetch2, shouldThrowOnError } = {}) {
        super({ fetch: fetch2, shouldThrowOnError });
        this.url = new URL(url);
        this.headers = Object.assign({}, headers);
        this.schema = schema;
      }
      /**
       * Perform a function call.
       */
      rpc(params, { head = false, count = null } = {}) {
        if (head) {
          this.method = "HEAD";
          if (params) {
            Object.entries(params).forEach(([name, value]) => {
              this.url.searchParams.append(name, value);
            });
          }
        } else {
          this.method = "POST";
          this.body = params;
        }
        if (count) {
          if (this.headers["Prefer"] !== void 0)
            this.headers["Prefer"] += `,count=${count}`;
          else
            this.headers["Prefer"] = `count=${count}`;
        }
        return new PostgrestFilterBuilder(this);
      }
    };
  }
});

// node_modules/@supabase/postgrest-js/dist/module/lib/version.js
var version3;
var init_version3 = __esm({
  "node_modules/@supabase/postgrest-js/dist/module/lib/version.js"() {
    version3 = "0.37.4";
  }
});

// node_modules/@supabase/postgrest-js/dist/module/lib/constants.js
var DEFAULT_HEADERS3;
var init_constants3 = __esm({
  "node_modules/@supabase/postgrest-js/dist/module/lib/constants.js"() {
    init_version3();
    DEFAULT_HEADERS3 = { "X-Client-Info": `postgrest-js/${version3}` };
  }
});

// node_modules/@supabase/postgrest-js/dist/module/PostgrestClient.js
var PostgrestClient;
var init_PostgrestClient = __esm({
  "node_modules/@supabase/postgrest-js/dist/module/PostgrestClient.js"() {
    init_PostgrestQueryBuilder();
    init_PostgrestRpcBuilder();
    init_constants3();
    PostgrestClient = class {
      /**
       * Creates a PostgREST client.
       *
       * @param url  URL of the PostgREST endpoint.
       * @param headers  Custom headers.
       * @param schema  Postgres schema to switch to.
       */
      constructor(url, { headers = {}, schema, fetch: fetch2, throwOnError } = {}) {
        this.url = url;
        this.headers = Object.assign(Object.assign({}, DEFAULT_HEADERS3), headers);
        this.schema = schema;
        this.fetch = fetch2;
        this.shouldThrowOnError = throwOnError;
      }
      /**
       * Authenticates the request with JWT.
       *
       * @param token  The JWT token to use.
       */
      auth(token) {
        this.headers["Authorization"] = `Bearer ${token}`;
        return this;
      }
      /**
       * Perform a table operation.
       *
       * @param table  The table name to operate on.
       */
      from(table) {
        const url = `${this.url}/${table}`;
        return new PostgrestQueryBuilder(url, {
          headers: this.headers,
          schema: this.schema,
          fetch: this.fetch,
          shouldThrowOnError: this.shouldThrowOnError
        });
      }
      /**
       * Perform a function call.
       *
       * @param fn  The function name to call.
       * @param params  The parameters to pass to the function call.
       * @param head  When set to true, no data will be returned.
       * @param count  Count algorithm to use to count rows in a table.
       */
      rpc(fn, params, { head = false, count = null } = {}) {
        const url = `${this.url}/rpc/${fn}`;
        return new PostgrestRpcBuilder(url, {
          headers: this.headers,
          schema: this.schema,
          fetch: this.fetch,
          shouldThrowOnError: this.shouldThrowOnError
        }).rpc(params, { head, count });
      }
    };
  }
});

// node_modules/@supabase/postgrest-js/dist/module/index.js
var init_module2 = __esm({
  "node_modules/@supabase/postgrest-js/dist/module/index.js"() {
    init_PostgrestClient();
    init_PostgrestFilterBuilder();
    init_PostgrestQueryBuilder();
    init_types2();
  }
});

// node_modules/@supabase/realtime-js/dist/module/lib/transformers.js
var transformers_exports = {};
__export(transformers_exports, {
  PostgresTypes: () => PostgresTypes,
  convertCell: () => convertCell,
  convertChangeData: () => convertChangeData,
  convertColumn: () => convertColumn,
  toArray: () => toArray,
  toBoolean: () => toBoolean,
  toJson: () => toJson,
  toNumber: () => toNumber,
  toTimestampString: () => toTimestampString
});
var PostgresTypes, convertChangeData, convertColumn, convertCell, noop2, toBoolean, toNumber, toJson, toArray, toTimestampString;
var init_transformers = __esm({
  "node_modules/@supabase/realtime-js/dist/module/lib/transformers.js"() {
    (function(PostgresTypes2) {
      PostgresTypes2["abstime"] = "abstime";
      PostgresTypes2["bool"] = "bool";
      PostgresTypes2["date"] = "date";
      PostgresTypes2["daterange"] = "daterange";
      PostgresTypes2["float4"] = "float4";
      PostgresTypes2["float8"] = "float8";
      PostgresTypes2["int2"] = "int2";
      PostgresTypes2["int4"] = "int4";
      PostgresTypes2["int4range"] = "int4range";
      PostgresTypes2["int8"] = "int8";
      PostgresTypes2["int8range"] = "int8range";
      PostgresTypes2["json"] = "json";
      PostgresTypes2["jsonb"] = "jsonb";
      PostgresTypes2["money"] = "money";
      PostgresTypes2["numeric"] = "numeric";
      PostgresTypes2["oid"] = "oid";
      PostgresTypes2["reltime"] = "reltime";
      PostgresTypes2["text"] = "text";
      PostgresTypes2["time"] = "time";
      PostgresTypes2["timestamp"] = "timestamp";
      PostgresTypes2["timestamptz"] = "timestamptz";
      PostgresTypes2["timetz"] = "timetz";
      PostgresTypes2["tsrange"] = "tsrange";
      PostgresTypes2["tstzrange"] = "tstzrange";
    })(PostgresTypes || (PostgresTypes = {}));
    convertChangeData = (columns, record, options = {}) => {
      var _a;
      const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
      return Object.keys(record).reduce((acc, rec_key) => {
        acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
        return acc;
      }, {});
    };
    convertColumn = (columnName, columns, record, skipTypes) => {
      const column = columns.find((x) => x.name === columnName);
      const colType = column === null || column === void 0 ? void 0 : column.type;
      const value = record[columnName];
      if (colType && !skipTypes.includes(colType)) {
        return convertCell(colType, value);
      }
      return noop2(value);
    };
    convertCell = (type, value) => {
      if (type.charAt(0) === "_") {
        const dataType = type.slice(1, type.length);
        return toArray(value, dataType);
      }
      switch (type) {
        case PostgresTypes.bool:
          return toBoolean(value);
        case PostgresTypes.float4:
        case PostgresTypes.float8:
        case PostgresTypes.int2:
        case PostgresTypes.int4:
        case PostgresTypes.int8:
        case PostgresTypes.numeric:
        case PostgresTypes.oid:
          return toNumber(value);
        case PostgresTypes.json:
        case PostgresTypes.jsonb:
          return toJson(value);
        case PostgresTypes.timestamp:
          return toTimestampString(value);
        case PostgresTypes.abstime:
        case PostgresTypes.date:
        case PostgresTypes.daterange:
        case PostgresTypes.int4range:
        case PostgresTypes.int8range:
        case PostgresTypes.money:
        case PostgresTypes.reltime:
        case PostgresTypes.text:
        case PostgresTypes.time:
        case PostgresTypes.timestamptz:
        case PostgresTypes.timetz:
        case PostgresTypes.tsrange:
        case PostgresTypes.tstzrange:
          return noop2(value);
        default:
          return noop2(value);
      }
    };
    noop2 = (value) => {
      return value;
    };
    toBoolean = (value) => {
      switch (value) {
        case "t":
          return true;
        case "f":
          return false;
        default:
          return value;
      }
    };
    toNumber = (value) => {
      if (typeof value === "string") {
        const parsedValue = parseFloat(value);
        if (!Number.isNaN(parsedValue)) {
          return parsedValue;
        }
      }
      return value;
    };
    toJson = (value) => {
      if (typeof value === "string") {
        try {
          return JSON.parse(value);
        } catch (error2) {
          console.log(`JSON parse error: ${error2}`);
          return value;
        }
      }
      return value;
    };
    toArray = (value, type) => {
      if (typeof value !== "string") {
        return value;
      }
      const lastIdx = value.length - 1;
      const closeBrace = value[lastIdx];
      const openBrace = value[0];
      if (openBrace === "{" && closeBrace === "}") {
        let arr;
        const valTrim = value.slice(1, lastIdx);
        try {
          arr = JSON.parse("[" + valTrim + "]");
        } catch (_) {
          arr = valTrim ? valTrim.split(",") : [];
        }
        return arr.map((val) => convertCell(type, val));
      }
      return value;
    };
    toTimestampString = (value) => {
      if (typeof value === "string") {
        return value.replace(" ", "T");
      }
      return value;
    };
  }
});

// node_modules/es5-ext/global.js
var require_global = __commonJS({
  "node_modules/es5-ext/global.js"(exports, module) {
    var naiveFallback = function() {
      if (typeof self === "object" && self)
        return self;
      if (typeof window === "object" && window)
        return window;
      throw new Error("Unable to resolve global `this`");
    };
    module.exports = function() {
      if (this)
        return this;
      if (typeof globalThis === "object" && globalThis)
        return globalThis;
      try {
        Object.defineProperty(Object.prototype, "__global__", {
          get: function() {
            return this;
          },
          configurable: true
        });
      } catch (error2) {
        return naiveFallback();
      }
      try {
        if (!__global__)
          return naiveFallback();
        return __global__;
      } finally {
        delete Object.prototype.__global__;
      }
    }();
  }
});

// node_modules/websocket/package.json
var require_package = __commonJS({
  "node_modules/websocket/package.json"(exports, module) {
    module.exports = {
      name: "websocket",
      description: "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
      keywords: [
        "websocket",
        "websockets",
        "socket",
        "networking",
        "comet",
        "push",
        "RFC-6455",
        "realtime",
        "server",
        "client"
      ],
      author: "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
      contributors: [
        "I\xF1aki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"
      ],
      version: "1.0.34",
      repository: {
        type: "git",
        url: "https://github.com/theturtle32/WebSocket-Node.git"
      },
      homepage: "https://github.com/theturtle32/WebSocket-Node",
      engines: {
        node: ">=4.0.0"
      },
      dependencies: {
        bufferutil: "^4.0.1",
        debug: "^2.2.0",
        "es5-ext": "^0.10.50",
        "typedarray-to-buffer": "^3.1.5",
        "utf-8-validate": "^5.0.2",
        yaeti: "^0.0.6"
      },
      devDependencies: {
        "buffer-equal": "^1.0.0",
        gulp: "^4.0.2",
        "gulp-jshint": "^2.0.4",
        "jshint-stylish": "^2.2.1",
        jshint: "^2.0.0",
        tape: "^4.9.1"
      },
      config: {
        verbose: false
      },
      scripts: {
        test: "tape test/unit/*.js",
        gulp: "gulp"
      },
      main: "index",
      directories: {
        lib: "./lib"
      },
      browser: "lib/browser.js",
      license: "Apache-2.0"
    };
  }
});

// node_modules/websocket/lib/version.js
var require_version = __commonJS({
  "node_modules/websocket/lib/version.js"(exports, module) {
    module.exports = require_package().version;
  }
});

// node_modules/websocket/lib/browser.js
var require_browser = __commonJS({
  "node_modules/websocket/lib/browser.js"(exports, module) {
    var _globalThis;
    if (typeof globalThis === "object") {
      _globalThis = globalThis;
    } else {
      try {
        _globalThis = require_global();
      } catch (error2) {
      } finally {
        if (!_globalThis && typeof window !== "undefined") {
          _globalThis = window;
        }
        if (!_globalThis) {
          throw new Error("Could not determine global this");
        }
      }
    }
    var NativeWebSocket = _globalThis.WebSocket || _globalThis.MozWebSocket;
    var websocket_version = require_version();
    function W3CWebSocket(uri, protocols) {
      var native_instance;
      if (protocols) {
        native_instance = new NativeWebSocket(uri, protocols);
      } else {
        native_instance = new NativeWebSocket(uri);
      }
      return native_instance;
    }
    if (NativeWebSocket) {
      ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function(prop) {
        Object.defineProperty(W3CWebSocket, prop, {
          get: function() {
            return NativeWebSocket[prop];
          }
        });
      });
    }
    module.exports = {
      "w3cwebsocket": NativeWebSocket ? W3CWebSocket : null,
      "version": websocket_version
    };
  }
});

// node_modules/@supabase/realtime-js/dist/module/lib/version.js
var version4;
var init_version4 = __esm({
  "node_modules/@supabase/realtime-js/dist/module/lib/version.js"() {
    version4 = "1.7.5";
  }
});

// node_modules/@supabase/realtime-js/dist/module/lib/constants.js
var DEFAULT_HEADERS4, VSN, DEFAULT_TIMEOUT, WS_CLOSE_NORMAL, SOCKET_STATES, CHANNEL_STATES, CHANNEL_EVENTS, TRANSPORTS, CONNECTION_STATE;
var init_constants4 = __esm({
  "node_modules/@supabase/realtime-js/dist/module/lib/constants.js"() {
    init_version4();
    DEFAULT_HEADERS4 = { "X-Client-Info": `realtime-js/${version4}` };
    VSN = "1.0.0";
    DEFAULT_TIMEOUT = 1e4;
    WS_CLOSE_NORMAL = 1e3;
    (function(SOCKET_STATES2) {
      SOCKET_STATES2[SOCKET_STATES2["connecting"] = 0] = "connecting";
      SOCKET_STATES2[SOCKET_STATES2["open"] = 1] = "open";
      SOCKET_STATES2[SOCKET_STATES2["closing"] = 2] = "closing";
      SOCKET_STATES2[SOCKET_STATES2["closed"] = 3] = "closed";
    })(SOCKET_STATES || (SOCKET_STATES = {}));
    (function(CHANNEL_STATES2) {
      CHANNEL_STATES2["closed"] = "closed";
      CHANNEL_STATES2["errored"] = "errored";
      CHANNEL_STATES2["joined"] = "joined";
      CHANNEL_STATES2["joining"] = "joining";
      CHANNEL_STATES2["leaving"] = "leaving";
    })(CHANNEL_STATES || (CHANNEL_STATES = {}));
    (function(CHANNEL_EVENTS2) {
      CHANNEL_EVENTS2["close"] = "phx_close";
      CHANNEL_EVENTS2["error"] = "phx_error";
      CHANNEL_EVENTS2["join"] = "phx_join";
      CHANNEL_EVENTS2["reply"] = "phx_reply";
      CHANNEL_EVENTS2["leave"] = "phx_leave";
      CHANNEL_EVENTS2["access_token"] = "access_token";
    })(CHANNEL_EVENTS || (CHANNEL_EVENTS = {}));
    (function(TRANSPORTS2) {
      TRANSPORTS2["websocket"] = "websocket";
    })(TRANSPORTS || (TRANSPORTS = {}));
    (function(CONNECTION_STATE2) {
      CONNECTION_STATE2["Connecting"] = "connecting";
      CONNECTION_STATE2["Open"] = "open";
      CONNECTION_STATE2["Closing"] = "closing";
      CONNECTION_STATE2["Closed"] = "closed";
    })(CONNECTION_STATE || (CONNECTION_STATE = {}));
  }
});

// node_modules/@supabase/realtime-js/dist/module/lib/timer.js
var Timer;
var init_timer = __esm({
  "node_modules/@supabase/realtime-js/dist/module/lib/timer.js"() {
    Timer = class {
      constructor(callback, timerCalc) {
        this.callback = callback;
        this.timerCalc = timerCalc;
        this.timer = void 0;
        this.tries = 0;
        this.callback = callback;
        this.timerCalc = timerCalc;
      }
      reset() {
        this.tries = 0;
        clearTimeout(this.timer);
      }
      // Cancels any previous scheduleTimeout and schedules callback
      scheduleTimeout() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.tries = this.tries + 1;
          this.callback();
        }, this.timerCalc(this.tries + 1));
      }
    };
  }
});

// node_modules/@supabase/realtime-js/dist/module/lib/serializer.js
var Serializer;
var init_serializer = __esm({
  "node_modules/@supabase/realtime-js/dist/module/lib/serializer.js"() {
    Serializer = class {
      constructor() {
        this.HEADER_LENGTH = 1;
      }
      decode(rawPayload, callback) {
        if (rawPayload.constructor === ArrayBuffer) {
          return callback(this._binaryDecode(rawPayload));
        }
        if (typeof rawPayload === "string") {
          return callback(JSON.parse(rawPayload));
        }
        return callback({});
      }
      _binaryDecode(buffer) {
        const view = new DataView(buffer);
        const decoder = new TextDecoder();
        return this._decodeBroadcast(buffer, view, decoder);
      }
      _decodeBroadcast(buffer, view, decoder) {
        const topicSize = view.getUint8(1);
        const eventSize = view.getUint8(2);
        let offset = this.HEADER_LENGTH + 2;
        const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
        offset = offset + topicSize;
        const event = decoder.decode(buffer.slice(offset, offset + eventSize));
        offset = offset + eventSize;
        const data = JSON.parse(decoder.decode(buffer.slice(offset, buffer.byteLength)));
        return { ref: null, topic, event, payload: data };
      }
    };
  }
});

// node_modules/@supabase/realtime-js/dist/module/lib/push.js
var Push;
var init_push = __esm({
  "node_modules/@supabase/realtime-js/dist/module/lib/push.js"() {
    init_constants4();
    Push = class {
      /**
       * Initializes the Push
       *
       * @param channel The Channel
       * @param event The event, for example `"phx_join"`
       * @param payload The payload, for example `{user_id: 123}`
       * @param timeout The push timeout in milliseconds
       */
      constructor(channel, event, payload = {}, timeout = DEFAULT_TIMEOUT) {
        this.channel = channel;
        this.event = event;
        this.payload = payload;
        this.timeout = timeout;
        this.sent = false;
        this.timeoutTimer = void 0;
        this.ref = "";
        this.receivedResp = null;
        this.recHooks = [];
        this.refEvent = null;
      }
      resend(timeout) {
        this.timeout = timeout;
        this._cancelRefEvent();
        this.ref = "";
        this.refEvent = null;
        this.receivedResp = null;
        this.sent = false;
        this.send();
      }
      send() {
        if (this._hasReceived("timeout")) {
          return;
        }
        this.startTimeout();
        this.sent = true;
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload,
          ref: this.ref,
          join_ref: this.channel.joinRef()
        });
      }
      updatePayload(payload) {
        this.payload = Object.assign(Object.assign({}, this.payload), payload);
      }
      receive(status, callback) {
        var _a;
        if (this._hasReceived(status)) {
          callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
        }
        this.recHooks.push({ status, callback });
        return this;
      }
      startTimeout() {
        if (this.timeoutTimer) {
          return;
        }
        this.ref = this.channel.socket.makeRef();
        this.refEvent = this.channel.replyEventName(this.ref);
        const callback = (payload) => {
          this._cancelRefEvent();
          this._cancelTimeout();
          this.receivedResp = payload;
          this._matchReceive(payload);
        };
        this.channel.on(this.refEvent, callback);
        this.timeoutTimer = setTimeout(() => {
          this.trigger("timeout", {});
        }, this.timeout);
      }
      trigger(status, response) {
        if (this.refEvent)
          this.channel.trigger(this.refEvent, { status, response });
      }
      destroy() {
        this._cancelRefEvent();
        this._cancelTimeout();
      }
      _cancelRefEvent() {
        if (!this.refEvent) {
          return;
        }
        this.channel.off(this.refEvent);
      }
      _cancelTimeout() {
        clearTimeout(this.timeoutTimer);
        this.timeoutTimer = void 0;
      }
      _matchReceive({ status, response }) {
        this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
      }
      _hasReceived(status) {
        return this.receivedResp && this.receivedResp.status === status;
      }
    };
  }
});

// node_modules/@supabase/realtime-js/dist/module/RealtimeSubscription.js
var RealtimeSubscription;
var init_RealtimeSubscription = __esm({
  "node_modules/@supabase/realtime-js/dist/module/RealtimeSubscription.js"() {
    init_constants4();
    init_push();
    init_timer();
    RealtimeSubscription = class {
      constructor(topic, params = {}, socket) {
        this.topic = topic;
        this.params = params;
        this.socket = socket;
        this.bindings = [];
        this.state = CHANNEL_STATES.closed;
        this.joinedOnce = false;
        this.pushBuffer = [];
        this.timeout = this.socket.timeout;
        this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
        this.rejoinTimer = new Timer(() => this.rejoinUntilConnected(), this.socket.reconnectAfterMs);
        this.joinPush.receive("ok", () => {
          this.state = CHANNEL_STATES.joined;
          this.rejoinTimer.reset();
          this.pushBuffer.forEach((pushEvent) => pushEvent.send());
          this.pushBuffer = [];
        });
        this.onClose(() => {
          this.rejoinTimer.reset();
          this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
          this.state = CHANNEL_STATES.closed;
          this.socket.remove(this);
        });
        this.onError((reason) => {
          if (this.isLeaving() || this.isClosed()) {
            return;
          }
          this.socket.log("channel", `error ${this.topic}`, reason);
          this.state = CHANNEL_STATES.errored;
          this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive("timeout", () => {
          if (!this.isJoining()) {
            return;
          }
          this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
          this.state = CHANNEL_STATES.errored;
          this.rejoinTimer.scheduleTimeout();
        });
        this.on(CHANNEL_EVENTS.reply, (payload, ref) => {
          this.trigger(this.replyEventName(ref), payload);
        });
      }
      rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout();
        if (this.socket.isConnected()) {
          this.rejoin();
        }
      }
      subscribe(timeout = this.timeout) {
        if (this.joinedOnce) {
          throw `tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance`;
        } else {
          this.joinedOnce = true;
          this.rejoin(timeout);
          return this.joinPush;
        }
      }
      onClose(callback) {
        this.on(CHANNEL_EVENTS.close, callback);
      }
      onError(callback) {
        this.on(CHANNEL_EVENTS.error, (reason) => callback(reason));
      }
      on(event, callback) {
        this.bindings.push({ event, callback });
      }
      off(event) {
        this.bindings = this.bindings.filter((bind) => bind.event !== event);
      }
      canPush() {
        return this.socket.isConnected() && this.isJoined();
      }
      push(event, payload, timeout = this.timeout) {
        if (!this.joinedOnce) {
          throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        }
        let pushEvent = new Push(this, event, payload, timeout);
        if (this.canPush()) {
          pushEvent.send();
        } else {
          pushEvent.startTimeout();
          this.pushBuffer.push(pushEvent);
        }
        return pushEvent;
      }
      updateJoinPayload(payload) {
        this.joinPush.updatePayload(payload);
      }
      /**
       * Leaves the channel
       *
       * Unsubscribes from server events, and instructs channel to terminate on server.
       * Triggers onClose() hooks.
       *
       * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
       * channel.unsubscribe().receive("ok", () => alert("left!") )
       */
      unsubscribe(timeout = this.timeout) {
        this.state = CHANNEL_STATES.leaving;
        let onClose = () => {
          this.socket.log("channel", `leave ${this.topic}`);
          this.trigger(CHANNEL_EVENTS.close, "leave", this.joinRef());
        };
        this.joinPush.destroy();
        let leavePush = new Push(this, CHANNEL_EVENTS.leave, {}, timeout);
        leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
        leavePush.send();
        if (!this.canPush()) {
          leavePush.trigger("ok", {});
        }
        return leavePush;
      }
      /**
       * Overridable message hook
       *
       * Receives all events for specialized message handling before dispatching to the channel callbacks.
       * Must return the payload, modified or unmodified.
       */
      onMessage(event, payload, ref) {
        return payload;
      }
      isMember(topic) {
        return this.topic === topic;
      }
      joinRef() {
        return this.joinPush.ref;
      }
      rejoin(timeout = this.timeout) {
        if (this.isLeaving()) {
          return;
        }
        this.socket.leaveOpenTopic(this.topic);
        this.state = CHANNEL_STATES.joining;
        this.joinPush.resend(timeout);
      }
      trigger(event, payload, ref) {
        let { close, error: error2, leave, join } = CHANNEL_EVENTS;
        let events = [close, error2, leave, join];
        if (ref && events.indexOf(event) >= 0 && ref !== this.joinRef()) {
          return;
        }
        let handledPayload = this.onMessage(event, payload, ref);
        if (payload && !handledPayload) {
          throw "channel onMessage callbacks must return the payload, modified or unmodified";
        }
        this.bindings.filter((bind) => {
          if (bind.event === "*") {
            return event === (payload === null || payload === void 0 ? void 0 : payload.type);
          } else {
            return bind.event === event;
          }
        }).map((bind) => bind.callback(handledPayload, ref));
      }
      replyEventName(ref) {
        return `chan_reply_${ref}`;
      }
      isClosed() {
        return this.state === CHANNEL_STATES.closed;
      }
      isErrored() {
        return this.state === CHANNEL_STATES.errored;
      }
      isJoined() {
        return this.state === CHANNEL_STATES.joined;
      }
      isJoining() {
        return this.state === CHANNEL_STATES.joining;
      }
      isLeaving() {
        return this.state === CHANNEL_STATES.leaving;
      }
    };
  }
});

// node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js
var import_websocket, __awaiter6, noop3, RealtimeClient;
var init_RealtimeClient = __esm({
  "node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js"() {
    import_websocket = __toESM(require_browser());
    init_constants4();
    init_timer();
    init_serializer();
    init_RealtimeSubscription();
    __awaiter6 = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    noop3 = () => {
    };
    RealtimeClient = class {
      /**
       * Initializes the Socket.
       *
       * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
       * @param options.transport The Websocket Transport, for example WebSocket.
       * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
       * @param options.params The optional params to pass when connecting.
       * @param options.headers The optional headers to pass when connecting.
       * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
       * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
       * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
       * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
       * @param options.longpollerTimeout The maximum timeout of a long poll AJAX request. Defaults to 20s (double the server long poll timer).
       * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
       */
      constructor(endPoint, options) {
        this.accessToken = null;
        this.channels = [];
        this.endPoint = "";
        this.headers = DEFAULT_HEADERS4;
        this.params = {};
        this.timeout = DEFAULT_TIMEOUT;
        this.transport = import_websocket.w3cwebsocket;
        this.heartbeatIntervalMs = 3e4;
        this.longpollerTimeout = 2e4;
        this.heartbeatTimer = void 0;
        this.pendingHeartbeatRef = null;
        this.ref = 0;
        this.logger = noop3;
        this.conn = null;
        this.sendBuffer = [];
        this.serializer = new Serializer();
        this.stateChangeCallbacks = {
          open: [],
          close: [],
          error: [],
          message: []
        };
        this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
        if (options === null || options === void 0 ? void 0 : options.params)
          this.params = options.params;
        if (options === null || options === void 0 ? void 0 : options.headers)
          this.headers = Object.assign(Object.assign({}, this.headers), options.headers);
        if (options === null || options === void 0 ? void 0 : options.timeout)
          this.timeout = options.timeout;
        if (options === null || options === void 0 ? void 0 : options.logger)
          this.logger = options.logger;
        if (options === null || options === void 0 ? void 0 : options.transport)
          this.transport = options.transport;
        if (options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs)
          this.heartbeatIntervalMs = options.heartbeatIntervalMs;
        if (options === null || options === void 0 ? void 0 : options.longpollerTimeout)
          this.longpollerTimeout = options.longpollerTimeout;
        this.reconnectAfterMs = (options === null || options === void 0 ? void 0 : options.reconnectAfterMs) ? options.reconnectAfterMs : (tries) => {
          return [1e3, 2e3, 5e3, 1e4][tries - 1] || 1e4;
        };
        this.encode = (options === null || options === void 0 ? void 0 : options.encode) ? options.encode : (payload, callback) => {
          return callback(JSON.stringify(payload));
        };
        this.decode = (options === null || options === void 0 ? void 0 : options.decode) ? options.decode : this.serializer.decode.bind(this.serializer);
        this.reconnectTimer = new Timer(() => __awaiter6(this, void 0, void 0, function* () {
          yield this.disconnect();
          this.connect();
        }), this.reconnectAfterMs);
      }
      /**
       * Connects the socket, unless already connected.
       */
      connect() {
        if (this.conn) {
          return;
        }
        this.conn = new this.transport(this.endPointURL(), [], null, this.headers);
        if (this.conn) {
          this.conn.binaryType = "arraybuffer";
          this.conn.onopen = () => this._onConnOpen();
          this.conn.onerror = (error2) => this._onConnError(error2);
          this.conn.onmessage = (event) => this.onConnMessage(event);
          this.conn.onclose = (event) => this._onConnClose(event);
        }
      }
      /**
       * Disconnects the socket.
       *
       * @param code A numeric status code to send on disconnect.
       * @param reason A custom reason for the disconnect.
       */
      disconnect(code, reason) {
        return new Promise((resolve, _reject) => {
          try {
            if (this.conn) {
              this.conn.onclose = function() {
              };
              if (code) {
                this.conn.close(code, reason || "");
              } else {
                this.conn.close();
              }
              this.conn = null;
              this.heartbeatTimer && clearInterval(this.heartbeatTimer);
              this.reconnectTimer.reset();
            }
            resolve({ error: null, data: true });
          } catch (error2) {
            resolve({ error: error2, data: false });
          }
        });
      }
      /**
       * Logs the message.
       *
       * For customized logging, `this.logger` can be overriden.
       */
      log(kind, msg, data) {
        this.logger(kind, msg, data);
      }
      /**
       * Registers a callback for connection state change event.
       *
       * @param callback A function to be called when the event occurs.
       *
       * @example
       *    socket.onOpen(() => console.log("Socket opened."))
       */
      onOpen(callback) {
        this.stateChangeCallbacks.open.push(callback);
      }
      /**
       * Registers a callback for connection state change events.
       *
       * @param callback A function to be called when the event occurs.
       *
       * @example
       *    socket.onOpen(() => console.log("Socket closed."))
       */
      onClose(callback) {
        this.stateChangeCallbacks.close.push(callback);
      }
      /**
       * Registers a callback for connection state change events.
       *
       * @param callback A function to be called when the event occurs.
       *
       * @example
       *    socket.onOpen((error) => console.log("An error occurred"))
       */
      onError(callback) {
        this.stateChangeCallbacks.error.push(callback);
      }
      /**
       * Calls a function any time a message is received.
       *
       * @param callback A function to be called when the event occurs.
       *
       * @example
       *    socket.onMessage((message) => console.log(message))
       */
      onMessage(callback) {
        this.stateChangeCallbacks.message.push(callback);
      }
      /**
       * Returns the current state of the socket.
       */
      connectionState() {
        switch (this.conn && this.conn.readyState) {
          case SOCKET_STATES.connecting:
            return CONNECTION_STATE.Connecting;
          case SOCKET_STATES.open:
            return CONNECTION_STATE.Open;
          case SOCKET_STATES.closing:
            return CONNECTION_STATE.Closing;
          default:
            return CONNECTION_STATE.Closed;
        }
      }
      /**
       * Retuns `true` is the connection is open.
       */
      isConnected() {
        return this.connectionState() === CONNECTION_STATE.Open;
      }
      /**
       * Removes a subscription from the socket.
       *
       * @param channel An open subscription.
       */
      remove(channel) {
        this.channels = this.channels.filter((c) => c.joinRef() !== channel.joinRef());
      }
      channel(topic, chanParams = {}) {
        const chan = new RealtimeSubscription(topic, chanParams, this);
        this.channels.push(chan);
        return chan;
      }
      /**
       * Push out a message if the socket is connected.
       *
       * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
       */
      push(data) {
        const { topic, event, payload, ref } = data;
        let callback = () => {
          this.encode(data, (result) => {
            var _a;
            (_a = this.conn) === null || _a === void 0 ? void 0 : _a.send(result);
          });
        };
        this.log("push", `${topic} ${event} (${ref})`, payload);
        if (this.isConnected()) {
          callback();
        } else {
          this.sendBuffer.push(callback);
        }
      }
      onConnMessage(rawMessage) {
        this.decode(rawMessage.data, (msg) => {
          let { topic, event, payload, ref } = msg;
          if (ref && ref === this.pendingHeartbeatRef || event === (payload === null || payload === void 0 ? void 0 : payload.type)) {
            this.pendingHeartbeatRef = null;
          }
          this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
          this.channels.filter((channel) => channel.isMember(topic)).forEach((channel) => channel.trigger(event, payload, ref));
          this.stateChangeCallbacks.message.forEach((callback) => callback(msg));
        });
      }
      /**
       * Returns the URL of the websocket.
       */
      endPointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: VSN }));
      }
      /**
       * Return the next message ref, accounting for overflows
       */
      makeRef() {
        let newRef = this.ref + 1;
        if (newRef === this.ref) {
          this.ref = 0;
        } else {
          this.ref = newRef;
        }
        return this.ref.toString();
      }
      /**
       * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
       *
       * @param token A JWT string.
       */
      setAuth(token) {
        this.accessToken = token;
        this.channels.forEach((channel) => {
          token && channel.updateJoinPayload({ user_token: token });
          if (channel.joinedOnce && channel.isJoined()) {
            channel.push(CHANNEL_EVENTS.access_token, { access_token: token });
          }
        });
      }
      /**
       * Unsubscribe from channels with the specified topic.
       */
      leaveOpenTopic(topic) {
        let dupChannel = this.channels.find((c) => c.topic === topic && (c.isJoined() || c.isJoining()));
        if (dupChannel) {
          this.log("transport", `leaving duplicate topic "${topic}"`);
          dupChannel.unsubscribe();
        }
      }
      _onConnOpen() {
        this.log("transport", `connected to ${this.endPointURL()}`);
        this._flushSendBuffer();
        this.reconnectTimer.reset();
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs);
        this.stateChangeCallbacks.open.forEach((callback) => callback());
      }
      _onConnClose(event) {
        this.log("transport", "close", event);
        this._triggerChanError();
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.reconnectTimer.scheduleTimeout();
        this.stateChangeCallbacks.close.forEach((callback) => callback(event));
      }
      _onConnError(error2) {
        this.log("transport", error2.message);
        this._triggerChanError();
        this.stateChangeCallbacks.error.forEach((callback) => callback(error2));
      }
      _triggerChanError() {
        this.channels.forEach((channel) => channel.trigger(CHANNEL_EVENTS.error));
      }
      _appendParams(url, params) {
        if (Object.keys(params).length === 0) {
          return url;
        }
        const prefix = url.match(/\?/) ? "&" : "?";
        const query = new URLSearchParams(params);
        return `${url}${prefix}${query}`;
      }
      _flushSendBuffer() {
        if (this.isConnected() && this.sendBuffer.length > 0) {
          this.sendBuffer.forEach((callback) => callback());
          this.sendBuffer = [];
        }
      }
      _sendHeartbeat() {
        var _a;
        if (!this.isConnected()) {
          return;
        }
        if (this.pendingHeartbeatRef) {
          this.pendingHeartbeatRef = null;
          this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
          (_a = this.conn) === null || _a === void 0 ? void 0 : _a.close(WS_CLOSE_NORMAL, "hearbeat timeout");
          return;
        }
        this.pendingHeartbeatRef = this.makeRef();
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: this.pendingHeartbeatRef
        });
        this.setAuth(this.accessToken);
      }
    };
  }
});

// node_modules/@supabase/realtime-js/dist/module/index.js
var init_module3 = __esm({
  "node_modules/@supabase/realtime-js/dist/module/index.js"() {
    init_transformers();
    init_RealtimeClient();
    init_RealtimeSubscription();
  }
});

// node_modules/@supabase/supabase-js/dist/module/lib/SupabaseRealtimeClient.js
var SupabaseRealtimeClient;
var init_SupabaseRealtimeClient = __esm({
  "node_modules/@supabase/supabase-js/dist/module/lib/SupabaseRealtimeClient.js"() {
    init_module3();
    SupabaseRealtimeClient = class {
      constructor(socket, headers, schema, tableName) {
        const chanParams = {};
        const topic = tableName === "*" ? `realtime:${schema}` : `realtime:${schema}:${tableName}`;
        const userToken = headers["Authorization"].split(" ")[1];
        if (userToken) {
          chanParams["user_token"] = userToken;
        }
        this.subscription = socket.channel(topic, chanParams);
      }
      getPayloadRecords(payload) {
        const records = {
          new: {},
          old: {}
        };
        if (payload.type === "INSERT" || payload.type === "UPDATE") {
          records.new = transformers_exports.convertChangeData(payload.columns, payload.record);
        }
        if (payload.type === "UPDATE" || payload.type === "DELETE") {
          records.old = transformers_exports.convertChangeData(payload.columns, payload.old_record);
        }
        return records;
      }
      /**
       * The event you want to listen to.
       *
       * @param event The event
       * @param callback A callback function that is called whenever the event occurs.
       */
      on(event, callback) {
        this.subscription.on(event, (payload) => {
          let enrichedPayload = {
            schema: payload.schema,
            table: payload.table,
            commit_timestamp: payload.commit_timestamp,
            eventType: payload.type,
            new: {},
            old: {},
            errors: payload.errors
          };
          enrichedPayload = Object.assign(Object.assign({}, enrichedPayload), this.getPayloadRecords(payload));
          callback(enrichedPayload);
        });
        return this;
      }
      /**
       * Enables the subscription.
       */
      subscribe(callback = () => {
      }) {
        this.subscription.onError((e) => callback("SUBSCRIPTION_ERROR", e));
        this.subscription.onClose(() => callback("CLOSED"));
        this.subscription.subscribe().receive("ok", () => callback("SUBSCRIBED")).receive("error", (e) => callback("SUBSCRIPTION_ERROR", e)).receive("timeout", () => callback("RETRYING_AFTER_TIMEOUT"));
        return this.subscription;
      }
    };
  }
});

// node_modules/@supabase/supabase-js/dist/module/lib/SupabaseQueryBuilder.js
var SupabaseQueryBuilder;
var init_SupabaseQueryBuilder = __esm({
  "node_modules/@supabase/supabase-js/dist/module/lib/SupabaseQueryBuilder.js"() {
    init_module2();
    init_SupabaseRealtimeClient();
    SupabaseQueryBuilder = class extends PostgrestQueryBuilder {
      constructor(url, { headers = {}, schema, realtime, table, fetch: fetch2, shouldThrowOnError }) {
        super(url, { headers, schema, fetch: fetch2, shouldThrowOnError });
        this._subscription = null;
        this._realtime = realtime;
        this._headers = headers;
        this._schema = schema;
        this._table = table;
      }
      /**
       * Subscribe to realtime changes in your database.
       * @param event The database event which you would like to receive updates for, or you can use the special wildcard `*` to listen to all changes.
       * @param callback A callback that will handle the payload that is sent whenever your database changes.
       */
      on(event, callback) {
        if (!this._realtime.isConnected()) {
          this._realtime.connect();
        }
        if (!this._subscription) {
          this._subscription = new SupabaseRealtimeClient(this._realtime, this._headers, this._schema, this._table);
        }
        return this._subscription.on(event, callback);
      }
    };
  }
});

// node_modules/@supabase/storage-js/dist/module/lib/version.js
var version5;
var init_version5 = __esm({
  "node_modules/@supabase/storage-js/dist/module/lib/version.js"() {
    version5 = "1.7.3";
  }
});

// node_modules/@supabase/storage-js/dist/module/lib/constants.js
var DEFAULT_HEADERS5;
var init_constants5 = __esm({
  "node_modules/@supabase/storage-js/dist/module/lib/constants.js"() {
    init_version5();
    DEFAULT_HEADERS5 = { "X-Client-Info": `storage-js/${version5}` };
  }
});

// node_modules/@supabase/storage-js/dist/module/lib/fetch.js
function _handleRequest2(fetcher, method, url, options, parameters, body) {
  return __awaiter7(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
      fetcher(url, _getRequestParams2(method, options, parameters, body)).then((result) => {
        if (!result.ok)
          throw result;
        if (options === null || options === void 0 ? void 0 : options.noResolveJson)
          return resolve(result);
        return result.json();
      }).then((data) => resolve(data)).catch((error2) => handleError2(error2, reject));
    });
  });
}
function get2(fetcher, url, options, parameters) {
  return __awaiter7(this, void 0, void 0, function* () {
    return _handleRequest2(fetcher, "GET", url, options, parameters);
  });
}
function post2(fetcher, url, body, options, parameters) {
  return __awaiter7(this, void 0, void 0, function* () {
    return _handleRequest2(fetcher, "POST", url, options, parameters, body);
  });
}
function put2(fetcher, url, body, options, parameters) {
  return __awaiter7(this, void 0, void 0, function* () {
    return _handleRequest2(fetcher, "PUT", url, options, parameters, body);
  });
}
function remove2(fetcher, url, body, options, parameters) {
  return __awaiter7(this, void 0, void 0, function* () {
    return _handleRequest2(fetcher, "DELETE", url, options, parameters, body);
  });
}
var __awaiter7, _getErrorMessage2, handleError2, _getRequestParams2;
var init_fetch2 = __esm({
  "node_modules/@supabase/storage-js/dist/module/lib/fetch.js"() {
    __awaiter7 = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    _getErrorMessage2 = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
    handleError2 = (error2, reject) => {
      if (typeof error2.json !== "function") {
        return reject(error2);
      }
      error2.json().then((err) => {
        return reject({
          message: _getErrorMessage2(err),
          status: (error2 === null || error2 === void 0 ? void 0 : error2.status) || 500
        });
      });
    };
    _getRequestParams2 = (method, options, parameters, body) => {
      const params = { method, headers: (options === null || options === void 0 ? void 0 : options.headers) || {} };
      if (method === "GET") {
        return params;
      }
      params.headers = Object.assign({ "Content-Type": "application/json" }, options === null || options === void 0 ? void 0 : options.headers);
      params.body = JSON.stringify(body);
      return Object.assign(Object.assign({}, params), parameters);
    };
  }
});

// node_modules/@supabase/storage-js/dist/module/lib/helpers.js
var __awaiter8, resolveFetch2;
var init_helpers3 = __esm({
  "node_modules/@supabase/storage-js/dist/module/lib/helpers.js"() {
    __awaiter8 = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    resolveFetch2 = (customFetch) => {
      let _fetch;
      if (customFetch) {
        _fetch = customFetch;
      } else if (typeof fetch === "undefined") {
        _fetch = (...args) => __awaiter8(void 0, void 0, void 0, function* () {
          return yield (yield Promise.resolve().then(() => __toESM(require_browser_ponyfill()))).fetch(...args);
        });
      } else {
        _fetch = fetch;
      }
      return (...args) => _fetch(...args);
    };
  }
});

// node_modules/@supabase/storage-js/dist/module/lib/StorageBucketApi.js
var __awaiter9, StorageBucketApi;
var init_StorageBucketApi = __esm({
  "node_modules/@supabase/storage-js/dist/module/lib/StorageBucketApi.js"() {
    init_constants5();
    init_fetch2();
    init_helpers3();
    __awaiter9 = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    StorageBucketApi = class {
      constructor(url, headers = {}, fetch2) {
        this.url = url;
        this.headers = Object.assign(Object.assign({}, DEFAULT_HEADERS5), headers);
        this.fetch = resolveFetch2(fetch2);
      }
      /**
       * Retrieves the details of all Storage buckets within an existing project.
       */
      listBuckets() {
        return __awaiter9(this, void 0, void 0, function* () {
          try {
            const data = yield get2(this.fetch, `${this.url}/bucket`, { headers: this.headers });
            return { data, error: null };
          } catch (error2) {
            return { data: null, error: error2 };
          }
        });
      }
      /**
       * Retrieves the details of an existing Storage bucket.
       *
       * @param id The unique identifier of the bucket you would like to retrieve.
       */
      getBucket(id) {
        return __awaiter9(this, void 0, void 0, function* () {
          try {
            const data = yield get2(this.fetch, `${this.url}/bucket/${id}`, { headers: this.headers });
            return { data, error: null };
          } catch (error2) {
            return { data: null, error: error2 };
          }
        });
      }
      /**
       * Creates a new Storage bucket
       *
       * @param id A unique identifier for the bucket you are creating.
       * @returns newly created bucket id
       */
      createBucket(id, options = { public: false }) {
        return __awaiter9(this, void 0, void 0, function* () {
          try {
            const data = yield post2(this.fetch, `${this.url}/bucket`, { id, name: id, public: options.public }, { headers: this.headers });
            return { data: data.name, error: null };
          } catch (error2) {
            return { data: null, error: error2 };
          }
        });
      }
      /**
       * Updates a new Storage bucket
       *
       * @param id A unique identifier for the bucket you are updating.
       */
      updateBucket(id, options) {
        return __awaiter9(this, void 0, void 0, function* () {
          try {
            const data = yield put2(this.fetch, `${this.url}/bucket/${id}`, { id, name: id, public: options.public }, { headers: this.headers });
            return { data, error: null };
          } catch (error2) {
            return { data: null, error: error2 };
          }
        });
      }
      /**
       * Removes all objects inside a single bucket.
       *
       * @param id The unique identifier of the bucket you would like to empty.
       */
      emptyBucket(id) {
        return __awaiter9(this, void 0, void 0, function* () {
          try {
            const data = yield post2(this.fetch, `${this.url}/bucket/${id}/empty`, {}, { headers: this.headers });
            return { data, error: null };
          } catch (error2) {
            return { data: null, error: error2 };
          }
        });
      }
      /**
       * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
       * You must first `empty()` the bucket.
       *
       * @param id The unique identifier of the bucket you would like to delete.
       */
      deleteBucket(id) {
        return __awaiter9(this, void 0, void 0, function* () {
          try {
            const data = yield remove2(this.fetch, `${this.url}/bucket/${id}`, {}, { headers: this.headers });
            return { data, error: null };
          } catch (error2) {
            return { data: null, error: error2 };
          }
        });
      }
    };
  }
});

// node_modules/@supabase/storage-js/dist/module/lib/StorageFileApi.js
var __awaiter10, DEFAULT_SEARCH_OPTIONS, DEFAULT_FILE_OPTIONS, StorageFileApi;
var init_StorageFileApi = __esm({
  "node_modules/@supabase/storage-js/dist/module/lib/StorageFileApi.js"() {
    init_fetch2();
    init_helpers3();
    __awaiter10 = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    DEFAULT_SEARCH_OPTIONS = {
      limit: 100,
      offset: 0,
      sortBy: {
        column: "name",
        order: "asc"
      }
    };
    DEFAULT_FILE_OPTIONS = {
      cacheControl: "3600",
      contentType: "text/plain;charset=UTF-8",
      upsert: false
    };
    StorageFileApi = class {
      constructor(url, headers = {}, bucketId, fetch2) {
        this.url = url;
        this.headers = headers;
        this.bucketId = bucketId;
        this.fetch = resolveFetch2(fetch2);
      }
      /**
       * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
       *
       * @param method HTTP method.
       * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
       * @param fileBody The body of the file to be stored in the bucket.
       * @param fileOptions HTTP headers.
       * `cacheControl`: string, the `Cache-Control: max-age=<seconds>` seconds value.
       * `contentType`: string, the `Content-Type` header value. Should be specified if using a `fileBody` that is neither `Blob` nor `File` nor `FormData`, otherwise will default to `text/plain;charset=UTF-8`.
       * `upsert`: boolean, whether to perform an upsert.
       */
      uploadOrUpdate(method, path, fileBody, fileOptions) {
        return __awaiter10(this, void 0, void 0, function* () {
          try {
            let body;
            const options = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
            const headers = Object.assign(Object.assign({}, this.headers), method === "POST" && { "x-upsert": String(options.upsert) });
            if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
              body = new FormData();
              body.append("cacheControl", options.cacheControl);
              body.append("", fileBody);
            } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
              body = fileBody;
              body.append("cacheControl", options.cacheControl);
            } else {
              body = fileBody;
              headers["cache-control"] = `max-age=${options.cacheControl}`;
              headers["content-type"] = options.contentType;
            }
            const cleanPath = this._removeEmptyFolders(path);
            const _path = this._getFinalPath(cleanPath);
            const res = yield this.fetch(`${this.url}/object/${_path}`, {
              method,
              body,
              headers
            });
            if (res.ok) {
              return { data: { Key: _path }, error: null };
            } else {
              const error2 = yield res.json();
              return { data: null, error: error2 };
            }
          } catch (error2) {
            return { data: null, error: error2 };
          }
        });
      }
      /**
       * Uploads a file to an existing bucket.
       *
       * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
       * @param fileBody The body of the file to be stored in the bucket.
       * @param fileOptions HTTP headers.
       * `cacheControl`: string, the `Cache-Control: max-age=<seconds>` seconds value.
       * `contentType`: string, the `Content-Type` header value. Should be specified if using a `fileBody` that is neither `Blob` nor `File` nor `FormData`, otherwise will default to `text/plain;charset=UTF-8`.
       * `upsert`: boolean, whether to perform an upsert.
       */
      upload(path, fileBody, fileOptions) {
        return __awaiter10(this, void 0, void 0, function* () {
          return this.uploadOrUpdate("POST", path, fileBody, fileOptions);
        });
      }
      /**
       * Replaces an existing file at the specified path with a new one.
       *
       * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
       * @param fileBody The body of the file to be stored in the bucket.
       * @param fileOptions HTTP headers.
       * `cacheControl`: string, the `Cache-Control: max-age=<seconds>` seconds value.
       * `contentType`: string, the `Content-Type` header value. Should be specified if using a `fileBody` that is neither `Blob` nor `File` nor `FormData`, otherwise will default to `text/plain;charset=UTF-8`.
       * `upsert`: boolean, whether to perform an upsert.
       */
      update(path, fileBody, fileOptions) {
        return __awaiter10(this, void 0, void 0, function* () {
          return this.uploadOrUpdate("PUT", path, fileBody, fileOptions);
        });
      }
      /**
       * Moves an existing file.
       *
       * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
       * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
       */
      move(fromPath, toPath) {
        return __awaiter10(this, void 0, void 0, function* () {
          try {
            const data = yield post2(this.fetch, `${this.url}/object/move`, { bucketId: this.bucketId, sourceKey: fromPath, destinationKey: toPath }, { headers: this.headers });
            return { data, error: null };
          } catch (error2) {
            return { data: null, error: error2 };
          }
        });
      }
      /**
       * Copies an existing file.
       *
       * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
       * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
       */
      copy(fromPath, toPath) {
        return __awaiter10(this, void 0, void 0, function* () {
          try {
            const data = yield post2(this.fetch, `${this.url}/object/copy`, { bucketId: this.bucketId, sourceKey: fromPath, destinationKey: toPath }, { headers: this.headers });
            return { data, error: null };
          } catch (error2) {
            return { data: null, error: error2 };
          }
        });
      }
      /**
       * Create signed URL to download file without requiring permissions. This URL can be valid for a set number of seconds.
       *
       * @param path The file path to be downloaded, including the current file name. For example `folder/image.png`.
       * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
       */
      createSignedUrl(path, expiresIn) {
        return __awaiter10(this, void 0, void 0, function* () {
          try {
            const _path = this._getFinalPath(path);
            let data = yield post2(this.fetch, `${this.url}/object/sign/${_path}`, { expiresIn }, { headers: this.headers });
            const signedURL = `${this.url}${data.signedURL}`;
            data = { signedURL };
            return { data, error: null, signedURL };
          } catch (error2) {
            return { data: null, error: error2, signedURL: null };
          }
        });
      }
      /**
       * Create signed URLs to download files without requiring permissions. These URLs can be valid for a set number of seconds.
       *
       * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
       * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
       */
      createSignedUrls(paths, expiresIn) {
        return __awaiter10(this, void 0, void 0, function* () {
          try {
            const data = yield post2(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn, paths }, { headers: this.headers });
            return {
              data: data.map((datum) => Object.assign(Object.assign({}, datum), { signedURL: datum.signedURL ? `${this.url}${datum.signedURL}` : null })),
              error: null
            };
          } catch (error2) {
            return { data: null, error: error2 };
          }
        });
      }
      /**
       * Downloads a file.
       *
       * @param path The file path to be downloaded, including the path and file name. For example `folder/image.png`.
       */
      download(path) {
        return __awaiter10(this, void 0, void 0, function* () {
          try {
            const _path = this._getFinalPath(path);
            const res = yield get2(this.fetch, `${this.url}/object/${_path}`, {
              headers: this.headers,
              noResolveJson: true
            });
            const data = yield res.blob();
            return { data, error: null };
          } catch (error2) {
            return { data: null, error: error2 };
          }
        });
      }
      /**
       * Retrieve URLs for assets in public buckets
       *
       * @param path The file path to be downloaded, including the path and file name. For example `folder/image.png`.
       */
      getPublicUrl(path) {
        try {
          const _path = this._getFinalPath(path);
          const publicURL = `${this.url}/object/public/${_path}`;
          const data = { publicURL };
          return { data, error: null, publicURL };
        } catch (error2) {
          return { data: null, error: error2, publicURL: null };
        }
      }
      /**
       * Deletes files within the same bucket
       *
       * @param paths An array of files to be deleted, including the path and file name. For example [`folder/image.png`].
       */
      remove(paths) {
        return __awaiter10(this, void 0, void 0, function* () {
          try {
            const data = yield remove2(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: paths }, { headers: this.headers });
            return { data, error: null };
          } catch (error2) {
            return { data: null, error: error2 };
          }
        });
      }
      /**
       * Get file metadata
       * @param id the file id to retrieve metadata
       */
      // async getMetadata(id: string): Promise<{ data: Metadata | null; error: Error | null }> {
      //   try {
      //     const data = await get(`${this.url}/metadata/${id}`, { headers: this.headers })
      //     return { data, error: null }
      //   } catch (error) {
      //     return { data: null, error }
      //   }
      // }
      /**
       * Update file metadata
       * @param id the file id to update metadata
       * @param meta the new file metadata
       */
      // async updateMetadata(
      //   id: string,
      //   meta: Metadata
      // ): Promise<{ data: Metadata | null; error: Error | null }> {
      //   try {
      //     const data = await post(`${this.url}/metadata/${id}`, { ...meta }, { headers: this.headers })
      //     return { data, error: null }
      //   } catch (error) {
      //     return { data: null, error }
      //   }
      // }
      /**
       * Lists all the files within a bucket.
       * @param path The folder path.
       * @param options Search options, including `limit`, `offset`, `sortBy`, and `search`.
       * @param parameters Fetch parameters, currently only supports `signal`, which is an AbortController's signal
       */
      list(path, options, parameters) {
        return __awaiter10(this, void 0, void 0, function* () {
          try {
            const body = Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options), { prefix: path || "" });
            const data = yield post2(this.fetch, `${this.url}/object/list/${this.bucketId}`, body, { headers: this.headers }, parameters);
            return { data, error: null };
          } catch (error2) {
            return { data: null, error: error2 };
          }
        });
      }
      _getFinalPath(path) {
        return `${this.bucketId}/${path}`;
      }
      _removeEmptyFolders(path) {
        return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
      }
    };
  }
});

// node_modules/@supabase/storage-js/dist/module/lib/types.js
var init_types3 = __esm({
  "node_modules/@supabase/storage-js/dist/module/lib/types.js"() {
  }
});

// node_modules/@supabase/storage-js/dist/module/lib/index.js
var init_lib = __esm({
  "node_modules/@supabase/storage-js/dist/module/lib/index.js"() {
    init_StorageBucketApi();
    init_StorageFileApi();
    init_types3();
    init_constants5();
  }
});

// node_modules/@supabase/storage-js/dist/module/StorageClient.js
var StorageClient;
var init_StorageClient = __esm({
  "node_modules/@supabase/storage-js/dist/module/StorageClient.js"() {
    init_lib();
    StorageClient = class extends StorageBucketApi {
      constructor(url, headers = {}, fetch2) {
        super(url, headers, fetch2);
      }
      /**
       * Perform file operation in a bucket.
       *
       * @param id The bucket id to operate on.
       */
      from(id) {
        return new StorageFileApi(this.url, this.headers, id, this.fetch);
      }
    };
  }
});

// node_modules/@supabase/storage-js/dist/module/index.js
var init_module4 = __esm({
  "node_modules/@supabase/storage-js/dist/module/index.js"() {
    init_StorageClient();
    init_types3();
  }
});

// node_modules/@supabase/functions-js/dist/module/helper.js
var __awaiter11, resolveFetch3;
var init_helper = __esm({
  "node_modules/@supabase/functions-js/dist/module/helper.js"() {
    __awaiter11 = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    resolveFetch3 = (customFetch) => {
      let _fetch;
      if (customFetch) {
        _fetch = customFetch;
      } else if (typeof fetch === "undefined") {
        _fetch = (...args) => __awaiter11(void 0, void 0, void 0, function* () {
          return yield (yield Promise.resolve().then(() => __toESM(require_browser_ponyfill()))).fetch(...args);
        });
      } else {
        _fetch = fetch;
      }
      return (...args) => _fetch(...args);
    };
  }
});

// node_modules/@supabase/functions-js/dist/module/index.js
var __awaiter12, FunctionsClient;
var init_module5 = __esm({
  "node_modules/@supabase/functions-js/dist/module/index.js"() {
    init_helper();
    __awaiter12 = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    FunctionsClient = class {
      constructor(url, { headers = {}, customFetch } = {}) {
        this.url = url;
        this.headers = headers;
        this.fetch = resolveFetch3(customFetch);
      }
      /**
       * Updates the authorization header
       * @params token - the new jwt token sent in the authorisation header
       */
      setAuth(token) {
        this.headers.Authorization = `Bearer ${token}`;
      }
      /**
       * Invokes a function
       * @param functionName - the name of the function to invoke
       * @param invokeOptions - object with the following properties
       * `headers`: object representing the headers to send with the request
       * `body`: the body of the request
       * `responseType`: how the response should be parsed. The default is `json`
       */
      invoke(functionName, invokeOptions) {
        return __awaiter12(this, void 0, void 0, function* () {
          try {
            const { headers, body } = invokeOptions !== null && invokeOptions !== void 0 ? invokeOptions : {};
            const response = yield this.fetch(`${this.url}/${functionName}`, {
              method: "POST",
              headers: Object.assign({}, this.headers, headers),
              body
            });
            const isRelayError = response.headers.get("x-relay-error");
            if (isRelayError && isRelayError === "true") {
              return { data: null, error: new Error(yield response.text()) };
            }
            let data;
            const { responseType } = invokeOptions !== null && invokeOptions !== void 0 ? invokeOptions : {};
            if (!responseType || responseType === "json") {
              data = yield response.json();
            } else if (responseType === "arrayBuffer") {
              data = yield response.arrayBuffer();
            } else if (responseType === "blob") {
              data = yield response.blob();
            } else {
              data = yield response.text();
            }
            return { data, error: null };
          } catch (error2) {
            return { data: null, error: error2 };
          }
        });
      }
    };
  }
});

// node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js
var __awaiter13, DEFAULT_OPTIONS2, SupabaseClient;
var init_SupabaseClient = __esm({
  "node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js"() {
    init_constants();
    init_helpers();
    init_SupabaseAuthClient();
    init_SupabaseQueryBuilder();
    init_module4();
    init_module5();
    init_module2();
    init_module3();
    __awaiter13 = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    DEFAULT_OPTIONS2 = {
      schema: "public",
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      multiTab: true,
      headers: DEFAULT_HEADERS
    };
    SupabaseClient = class {
      /**
       * Create a new client for use in the browser.
       * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
       * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
       * @param options.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
       * @param options.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
       * @param options.persistSession Set to "true" if you want to automatically save the user session into local storage.
       * @param options.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
       * @param options.headers Any additional headers to send with each network request.
       * @param options.realtime Options passed along to realtime-js constructor.
       * @param options.multiTab Set to "false" if you want to disable multi-tab/window events.
       * @param options.fetch A custom fetch implementation.
       */
      constructor(supabaseUrl3, supabaseKey2, options) {
        this.supabaseUrl = supabaseUrl3;
        this.supabaseKey = supabaseKey2;
        if (!supabaseUrl3)
          throw new Error("supabaseUrl is required.");
        if (!supabaseKey2)
          throw new Error("supabaseKey is required.");
        const _supabaseUrl = stripTrailingSlash(supabaseUrl3);
        const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS2), options);
        this.restUrl = `${_supabaseUrl}/rest/v1`;
        this.realtimeUrl = `${_supabaseUrl}/realtime/v1`.replace("http", "ws");
        this.authUrl = `${_supabaseUrl}/auth/v1`;
        this.storageUrl = `${_supabaseUrl}/storage/v1`;
        const isPlatform = _supabaseUrl.match(/(supabase\.co)|(supabase\.in)/);
        if (isPlatform) {
          const urlParts = _supabaseUrl.split(".");
          this.functionsUrl = `${urlParts[0]}.functions.${urlParts[1]}.${urlParts[2]}`;
        } else {
          this.functionsUrl = `${_supabaseUrl}/functions/v1`;
        }
        this.schema = settings.schema;
        this.multiTab = settings.multiTab;
        this.fetch = settings.fetch;
        this.headers = Object.assign(Object.assign({}, DEFAULT_HEADERS), options === null || options === void 0 ? void 0 : options.headers);
        this.shouldThrowOnError = settings.shouldThrowOnError || false;
        this.auth = this._initSupabaseAuthClient(settings);
        this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers }, settings.realtime));
        this._listenForAuthEvents();
        this._listenForMultiTabEvents();
      }
      /**
       * Supabase Functions allows you to deploy and invoke edge functions.
       */
      get functions() {
        return new FunctionsClient(this.functionsUrl, {
          headers: this._getAuthHeaders(),
          customFetch: this.fetch
        });
      }
      /**
       * Supabase Storage allows you to manage user-generated content, such as photos or videos.
       */
      get storage() {
        return new StorageClient(this.storageUrl, this._getAuthHeaders(), this.fetch);
      }
      /**
       * Perform a table operation.
       *
       * @param table The table name to operate on.
       */
      from(table) {
        const url = `${this.restUrl}/${table}`;
        return new SupabaseQueryBuilder(url, {
          headers: this._getAuthHeaders(),
          schema: this.schema,
          realtime: this.realtime,
          table,
          fetch: this.fetch,
          shouldThrowOnError: this.shouldThrowOnError
        });
      }
      /**
       * Perform a function call.
       *
       * @param fn  The function name to call.
       * @param params  The parameters to pass to the function call.
       * @param head   When set to true, no data will be returned.
       * @param count  Count algorithm to use to count rows in a table.
       *
       */
      rpc(fn, params, { head = false, count = null } = {}) {
        const rest = this._initPostgRESTClient();
        return rest.rpc(fn, params, { head, count });
      }
      /**
       * Closes and removes all subscriptions and returns a list of removed
       * subscriptions and their errors.
       */
      removeAllSubscriptions() {
        return __awaiter13(this, void 0, void 0, function* () {
          const allSubs = this.getSubscriptions().slice();
          const allSubPromises = allSubs.map((sub) => this.removeSubscription(sub));
          const allRemovedSubs = yield Promise.all(allSubPromises);
          return allRemovedSubs.map(({ error: error2 }, i) => {
            return {
              data: { subscription: allSubs[i] },
              error: error2
            };
          });
        });
      }
      /**
       * Closes and removes a subscription and returns the number of open subscriptions.
       *
       * @param subscription The subscription you want to close and remove.
       */
      removeSubscription(subscription) {
        return __awaiter13(this, void 0, void 0, function* () {
          const { error: error2 } = yield this._closeSubscription(subscription);
          const allSubs = this.getSubscriptions();
          const openSubCount = allSubs.filter((chan) => chan.isJoined()).length;
          if (allSubs.length === 0)
            yield this.realtime.disconnect();
          return { data: { openSubscriptions: openSubCount }, error: error2 };
        });
      }
      _closeSubscription(subscription) {
        return __awaiter13(this, void 0, void 0, function* () {
          let error2 = null;
          if (!subscription.isClosed()) {
            const { error: unsubError } = yield this._unsubscribeSubscription(subscription);
            error2 = unsubError;
          }
          this.realtime.remove(subscription);
          return { error: error2 };
        });
      }
      _unsubscribeSubscription(subscription) {
        return new Promise((resolve) => {
          subscription.unsubscribe().receive("ok", () => resolve({ error: null })).receive("error", (error2) => resolve({ error: error2 })).receive("timeout", () => resolve({ error: new Error("timed out") }));
        });
      }
      /**
       * Returns an array of all your subscriptions.
       */
      getSubscriptions() {
        return this.realtime.channels;
      }
      _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, localStorage, headers, fetch: fetch2, cookieOptions, multiTab }) {
        const authHeaders = {
          Authorization: `Bearer ${this.supabaseKey}`,
          apikey: `${this.supabaseKey}`
        };
        return new SupabaseAuthClient({
          url: this.authUrl,
          headers: Object.assign(Object.assign({}, headers), authHeaders),
          autoRefreshToken,
          persistSession,
          detectSessionInUrl,
          localStorage,
          fetch: fetch2,
          cookieOptions,
          multiTab
        });
      }
      _initRealtimeClient(options) {
        return new RealtimeClient(this.realtimeUrl, Object.assign(Object.assign({}, options), { params: Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.params), { apikey: this.supabaseKey }) }));
      }
      _initPostgRESTClient() {
        return new PostgrestClient(this.restUrl, {
          headers: this._getAuthHeaders(),
          schema: this.schema,
          fetch: this.fetch,
          throwOnError: this.shouldThrowOnError
        });
      }
      _getAuthHeaders() {
        var _a, _b;
        const headers = Object.assign({}, this.headers);
        const authBearer = (_b = (_a = this.auth.session()) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : this.supabaseKey;
        headers["apikey"] = this.supabaseKey;
        headers["Authorization"] = headers["Authorization"] || `Bearer ${authBearer}`;
        return headers;
      }
      _listenForMultiTabEvents() {
        if (!this.multiTab || !isBrowser() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) {
          return null;
        }
        try {
          return window === null || window === void 0 ? void 0 : window.addEventListener("storage", (e) => {
            var _a, _b, _c;
            if (e.key === STORAGE_KEY) {
              const newSession = JSON.parse(String(e.newValue));
              const accessToken = (_b = (_a = newSession === null || newSession === void 0 ? void 0 : newSession.currentSession) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : void 0;
              const previousAccessToken = (_c = this.auth.session()) === null || _c === void 0 ? void 0 : _c.access_token;
              if (!accessToken) {
                this._handleTokenChanged("SIGNED_OUT", accessToken, "STORAGE");
              } else if (!previousAccessToken && accessToken) {
                this._handleTokenChanged("SIGNED_IN", accessToken, "STORAGE");
              } else if (previousAccessToken !== accessToken) {
                this._handleTokenChanged("TOKEN_REFRESHED", accessToken, "STORAGE");
              }
            }
          });
        } catch (error2) {
          console.error("_listenForMultiTabEvents", error2);
          return null;
        }
      }
      _listenForAuthEvents() {
        let { data } = this.auth.onAuthStateChange((event, session) => {
          this._handleTokenChanged(event, session === null || session === void 0 ? void 0 : session.access_token, "CLIENT");
        });
        return data;
      }
      _handleTokenChanged(event, token, source) {
        if ((event === "TOKEN_REFRESHED" || event === "SIGNED_IN") && this.changedAccessToken !== token) {
          this.realtime.setAuth(token);
          if (source == "STORAGE")
            this.auth.setAuth(token);
          this.changedAccessToken = token;
        } else if (event === "SIGNED_OUT" || event === "USER_DELETED") {
          this.realtime.setAuth(this.supabaseKey);
          if (source == "STORAGE")
            this.auth.signOut();
        }
      }
    };
  }
});

// node_modules/@supabase/supabase-js/dist/module/index.js
var createClient;
var init_module6 = __esm({
  "node_modules/@supabase/supabase-js/dist/module/index.js"() {
    init_SupabaseClient();
    init_module();
    init_module3();
    createClient = (supabaseUrl3, supabaseKey2, options) => {
      return new SupabaseClient(supabaseUrl3, supabaseKey2, options);
    };
  }
});

// .svelte-kit/output/server/chunks/public.js
var PUBLIC_SUPABASE_KEY;
var init_public = __esm({
  ".svelte-kit/output/server/chunks/public.js"() {
    PUBLIC_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4ZHNqZWJiYXhsaWlnaGpjYnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI0NTY4NTgsImV4cCI6MTk3ODAzMjg1OH0.Uy8vlJaoUZNxNSw-m3CixRPvK-LDAkMLJai7SNzZrBA";
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var supabaseUrl, supabaseKey, supabase, Supabase, Users, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
    init_store();
    init_module6();
    init_public();
    supabaseUrl = "https://lxdsjebbaxliighjcbxn.supabase.co";
    supabaseKey = PUBLIC_SUPABASE_KEY;
    supabase = createClient(supabaseUrl, supabaseKey);
    Supabase = class {
      constructor(model) {
        __publicField(this, "_model");
        this._model = model;
      }
      async getAll() {
        let { data: users, error: error2 } = await supabase.from(this._model).select("*");
        return { users, error: error2 };
      }
      async save(value, columns) {
        const { data, error: error2 } = await supabase.from(this._model).insert([{ name: value.name, email: value.email }], { returning: "minimal" });
        return { data, error: error2 };
      }
    };
    Users = class {
      constructor() {
        __publicField(this, "model_name", "users");
      }
    };
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $userInfo, $$unsubscribe_userInfo;
      $$unsubscribe_userInfo = subscribe(userInfo, (value) => $userInfo = value);
      const _User = new Users();
      new Supabase(_User.model_name);
      $$unsubscribe_userInfo();
      return `<div class="overflow-hidden shadow sm:rounded-md"><div class="bg-gray-50 px-4 py-5 sm:p-6"><div class="grid grid-cols-3"><div class="col-span-2 sm:col-span-2"><input type="search" name="first-name" placeholder="Your name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"${add_attribute("value", $userInfo.name, 0)}></div>

			<div class="col-span-1 text-right sm:col-span-1"><button ${!$userInfo.name ? "disabled" : ""} type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-600/50 disabled:hover:cursor-not-allowed">Build CV</button></div></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  file: () => file3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component3, file3, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file3 = "_app/immutable/components/pages/_page.svelte-7c9f4294.js";
    imports3 = ["_app/immutable/components/pages/_page.svelte-7c9f4294.js", "_app/immutable/chunks/index-c2872cc9.js", "_app/immutable/chunks/store-38e9ee59.js", "_app/immutable/chunks/index-3e679e32.js", "_app/immutable/chunks/singletons-db910752.js", "_app/immutable/chunks/public-f65b3fc4.js", "_app/immutable/chunks/preload-helper-41c905a7.js"];
    stylesheets3 = [];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/login/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
var supabaseUrl2, supabaseAnonKey, supabase2, Auth, Profile, Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/login/_page.svelte.js"() {
    init_chunks();
    init_store();
    init_module6();
    init_public();
    supabaseUrl2 = "https://lxdsjebbaxliighjcbxn.supabase.co";
    supabaseAnonKey = PUBLIC_SUPABASE_KEY;
    supabase2 = createClient(supabaseUrl2, supabaseAnonKey);
    Auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let email;
      return `<form class="row flex-center flex"><div class="col-6 form-widget"><h1 class="text-3xl my-2 text-center">Supabase login</h1>
		<p class="">Sign in via magic link with your email below</p>
		<div><input class="my-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="email" placeholder="Your email"${add_attribute("value", email, 0)}></div>
		<div class="flex justify-center"><input type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-600/50 disabled:hover:cursor-not-allowed"${add_attribute("value", "Send magic link", 0)} ${""}></div></div></form>`;
    });
    Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $user, $$unsubscribe_user;
      $$unsubscribe_user = subscribe(user, (value) => $user = value);
      let username = null;
      let website = null;
      $$unsubscribe_user();
      return `<form class="form-widget"><div><label for="email">Email</label>
		<input id="email" type="text"${add_attribute("value", $user.email, 0)} disabled></div>
	<div><label for="username">Name</label>
		<input id="username" type="text"${add_attribute("value", username, 0)}></div>
	<div><label for="website">Website</label>
		<input id="website" type="website"${add_attribute("value", website, 0)}></div>

	<div><input type="submit" class="button block primary"${add_attribute("value", "Loadin...", 0)} ${"disabled"}></div>

	<div><button class="button block" ${"disabled"}>Sign Out </button></div></form>`;
    });
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $user, $$unsubscribe_user;
      $$unsubscribe_user = subscribe(user, (value) => $user = value);
      user.set(supabase2.auth.user() != null || supabase2.auth.user() != void 0);
      supabase2.auth.onAuthStateChange((_, session) => {
        user.set(session.user != null || session.user != void 0);
      });
      $$unsubscribe_user();
      return `<div class="flex justify-center">${$user ? `${validate_component(Profile, "Profile").$$render($$result, {}, {}, {})}` : `${validate_component(Auth, "Auth").$$render($$result, {}, {}, {})}`}</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  file: () => file4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4
});
var index4, component4, file4, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    index4 = 3;
    component4 = async () => (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    file4 = "_app/immutable/components/pages/login/_page.svelte-5d76d7da.js";
    imports4 = ["_app/immutable/components/pages/login/_page.svelte-5d76d7da.js", "_app/immutable/chunks/index-c2872cc9.js", "_app/immutable/chunks/store-38e9ee59.js", "_app/immutable/chunks/index-3e679e32.js", "_app/immutable/chunks/public-f65b3fc4.js", "_app/immutable/chunks/preload-helper-41c905a7.js"];
    stylesheets4 = [];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/entries/pages/templates/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page3
});
var css, TemplateSelector, Page3;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/templates/_page.svelte.js"() {
    init_chunks();
    css = {
      code: ".template.svelte-1e64jrr{height:200px;width:300px;border-radius:1rem}",
      map: null
    };
    TemplateSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css);
      return `<div class="flex flex-row"><div class="basis-1/4 shadow template m-1 hover:scale-125 svelte-1e64jrr"><div class="p-2">Template one</div></div>
	<div class="basis-1/4 shadow template m-1 hover:scale-125 svelte-1e64jrr"><div class="p-2">Template two</div></div>
</div>`;
    });
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div><div class="md:grid md:grid-cols-3"><div class="md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium leading-6 text-gray-900">Select template</h3></div></div>

		<div class="md:col-span-2 flex flex-row">${validate_component(TemplateSelector, "TemplateSelector").$$render($$result, {}, {}, {})}</div></div>

	<div class="flex flex-row"><div class="md:grid md:grid-cols-3 md:gap-6"><div class="md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
					<p class="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.
					</p></div></div>
			<div class="mt-5 md:col-span-2 md:mt-0"><div class="shadow sm:overflow-hidden sm:rounded-md"><div class="space-y-6 bg-white px-4 py-5 sm:p-6"><div class="grid grid-cols-3 gap-6"><div class="col-span-3 sm:col-span-2"><label for="company-website" class="block text-sm font-medium text-gray-700">Website</label>
								<div class="mt-1 flex rounded-md shadow-sm"><span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">http://</span>
									<input type="text" name="company-website" id="company-website" class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="www.example.com"></div></div></div>

						<div><label for="about" class="block text-sm font-medium text-gray-700">About</label>
							<div class="mt-1"><textarea id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Its about your some basic information of education and skills or can be projects"></textarea></div>
							<p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.
							</p></div>

						<div><label class="block text-sm font-medium text-gray-700">Photo</label>
							<div class="mt-1 flex items-center"><span class="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100"><svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></span>
								<button type="button" class="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Change</button></div></div></div>
					<div class="bg-gray-50 px-4 py-3 text-right sm:px-6"><button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button></div></div></div></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  file: () => file5,
  fonts: () => fonts5,
  imports: () => imports5,
  index: () => index5,
  stylesheets: () => stylesheets5
});
var index5, component5, file5, imports5, stylesheets5, fonts5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    index5 = 4;
    component5 = async () => (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    file5 = "_app/immutable/components/pages/templates/_page.svelte-98692986.js";
    imports5 = ["_app/immutable/components/pages/templates/_page.svelte-98692986.js", "_app/immutable/chunks/index-c2872cc9.js"];
    stylesheets5 = ["_app/immutable/assets/_page-0afc4243.css"];
    fonts5 = [];
  }
});

// .svelte-kit/output/server/index.js
init_chunks();

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\u0000",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function stringify_string(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code <= 31) {
      result += `\\u${code.toString(16).toUpperCase().padStart(4, "0")}`;
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i) => i in thing ? stringify2(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key2 in reducers) {
    custom.push({ key: key2, fn: reducers[key2] });
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index7 = p++;
    indexes.set(thing, index7);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index7] = `["${key2}",${flatten(value2)}]`;
        return index7;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0)
              str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index7] = str;
    return index7;
  }
  const index6 = flatten(value);
  if (index6 < 0)
    return `${index6}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
init_index2();
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
function afterUpdate() {
}
var DEV = false;
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, form }, {}, {})}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, form }, {}, {})}`}

${``}`;
});
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type);
}
function is_form_content_type(request) {
  return is_content_type(request, "application/x-www-form-urlencoded", "multipart/form-data");
}
var HttpError = class {
  /**
   * @param {number} status
   * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
   */
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var Redirect = class {
  /**
   * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
   * @param {string} location
   */
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
};
var ActionFailure = class {
  /**
   * @param {number} status
   * @param {T} [data]
   */
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
};
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {Redirect | HttpError | Error} */
    error2
  );
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
var tracked_url_properties = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    let value = tracked[property];
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return value;
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
var DATA_SUFFIX = "/__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  return pathname.slice(0, -DATA_SUFFIX.length);
}
var GENERIC_ERROR = {
  id: "__error"
};
function method_not_allowed(mod, method) {
  return new Response(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method in ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {any} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
function static_error_page(options, status, message) {
  return new Response(options.error_template({ status, message }), {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = await handle_error_and_jsonify(event, options, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (has_data_suffix(new URL(event.request.url).pathname) || type === "application/json") {
    return new Response(JSON.stringify(body), {
      status,
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  return static_error_page(options, status, body.message);
}
function handle_error_and_jsonify(event, options, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return options.handle_error(error2, event);
  }
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function serialize_data_node(node) {
  if (!node)
    return "null";
  if (node.type === "error" || node.type === "skip") {
    return JSON.stringify(node);
  }
  const stringified = stringify(node.data);
  const uses = [];
  if (node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses.parent)
    uses.push(`"parent":1`);
  if (node.uses.route)
    uses.push(`"route":1`);
  if (node.uses.url)
    uses.push(`"url":1`);
  return `{"type":"data","data":${stringified},"uses":{${uses.join(",")}}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
}
async function render_endpoint(event, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method];
  if (!handler && method === "HEAD") {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.initiator) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    const response = await handler(
      /** @type {import('types').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (error2) {
    if (error2 instanceof Redirect) {
      return new Response(void 0, {
        status: error2.status,
        headers: { location: error2.location }
      });
    }
    throw error2;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (method === "PUT" || method === "PATCH" || method === "DELETE") {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
function error(status, message) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  return new HttpError(status, message);
}
function json(data, init2) {
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init2,
    headers
  });
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options, server2) {
  const actions = server2?.actions;
  if (!actions) {
    if (server2) {
      maybe_throw_migration_error(server2);
    }
    const no_actions_error = error(405, "POST method not allowed. No actions exist for this page");
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return action_json({
        type: "redirect",
        status: error2.status,
        location: error2.location
      });
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options, check_incorrect_fail_use(error2))
      },
      {
        status: error2 instanceof HttpError ? error2.status : 500
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error(`Cannot "throw fail()". Use "return fail()"`) : error2;
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event, leaf_node) {
  return leaf_node.server && event.request.method !== "GET" && event.request.method !== "HEAD";
}
async function handle_action_request(event, server2) {
  const actions = server2.actions;
  if (!actions) {
    maybe_throw_migration_error(server2);
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ActionFailure) {
      return { type: "failure", status: data.status, data: data.data };
    } else {
      return {
        type: "success",
        status: 200,
        data: (
          /** @type {Record<string, any> | undefined} */
          data
        )
      };
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return {
        type: "redirect",
        status: error2.status,
        location: error2.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(error2)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      `When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions`
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")}`
    );
  }
  return action(event);
}
function maybe_throw_migration_error(server2) {
  for (const method of ["POST", "PUT", "PATCH", "DELETE"]) {
    if (
      /** @type {any} */
      server2[method]
    ) {
      throw new Error(
        `${method} method no longer allowed in +page.server, use actions instead. See the PR for more info: https://github.com/sveltejs/kit/pull/6469`
      );
    }
  }
}
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify, route_id);
}
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e) {
    const error2 = (
      /** @type {any} */
      e
    );
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "")
        message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
async function unwrap_promises(object) {
  for (const key2 in object) {
    if (typeof object[key2]?.then === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
async function load_server_data({ event, options, state, node, parent }) {
  if (!node?.server)
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    route: {
      get id() {
        uses.route = true;
        return event.route.id;
      }
    },
    url
  });
  const data = result ? await unwrap_promises(result) : null;
  if (options.dev) {
    validate_load_response(
      data,
      /** @type {string} */
      event.route.id
    );
  }
  return {
    type: "data",
    data,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: async (input, init2) => {
      const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
      const response = await event.fetch(input, init2);
      const url = new URL(input instanceof Request ? input.url : input, event.url);
      const same_origin = url.origin === event.url.origin;
      let dependency;
      if (same_origin) {
        if (state.prerendering) {
          dependency = { response, body: null };
          state.prerendering.dependencies.set(url.pathname, dependency);
        }
      } else {
        const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
        if (mode !== "no-cors") {
          const acao = response.headers.get("access-control-allow-origin");
          if (!acao || acao !== event.url.origin && acao !== "*") {
            throw new Error(
              `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
            );
          }
        }
      }
      const proxy = new Proxy(response, {
        get(response2, key2, _receiver) {
          async function text() {
            const body = await response2.text();
            if (!body || typeof body === "string") {
              const status_number = Number(response2.status);
              if (isNaN(status_number)) {
                throw new Error(
                  `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
                );
              }
              fetched.push({
                url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
                method: event.request.method,
                request_body: (
                  /** @type {string | ArrayBufferView | undefined} */
                  input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
                ),
                response_body: body,
                response: response2
              });
            }
            if (dependency) {
              dependency.body = body;
            }
            return body;
          }
          if (key2 === "arrayBuffer") {
            return async () => {
              const buffer = await response2.arrayBuffer();
              if (dependency) {
                dependency.body = new Uint8Array(buffer);
              }
              return buffer;
            };
          }
          if (key2 === "text") {
            return text;
          }
          if (key2 === "json") {
            return async () => {
              return JSON.parse(await text());
            };
          }
          return Reflect.get(response2, key2, response2);
        }
      });
      if (csr) {
        const get3 = response.headers.get;
        response.headers.get = (key2) => {
          const lower = key2.toLowerCase();
          const value = get3.call(response.headers, lower);
          if (value && !lower.startsWith("x-sveltekit-")) {
            const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
            if (!included) {
              throw new Error(
                `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route})`
              );
            }
          }
          return value;
        };
      }
      return proxy;
    },
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  });
  const data = result ? await unwrap_promises(result) : null;
  validate_load_response(
    data,
    /** @type {string} */
    event.route.id
  );
  return data;
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
function validate_load_response(data, routeId) {
  if (data != null && Object.getPrototypeOf(data) !== Object.prototype) {
    throw new Error(
      `a load function related to route '${routeId}' returned ${typeof data !== "object" ? `a ${typeof data}` : data instanceof Response ? "a Response object" : Array.isArray(data) ? "an array" : "a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`
    );
  }
}
function hash(value) {
  let hash2 = 5381;
  if (typeof value === "string") {
    let i = value.length;
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else if (ArrayBuffer.isView(value)) {
    const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
    let i = buffer.length;
    while (i)
      hash2 = hash2 * 33 ^ buffer[--i];
  } else {
    throw new TypeError("value must be a string or TypedArray");
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    if (key2 === "age")
      age = value;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_body) {
    attrs.push(`data-hash=${escape_html_attr(hash(fetched.request_body))}`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   * @param {boolean} dev
   */
  constructor(use_hashes, directives, nonce, dev) {
    /** @type {boolean} */
    __privateAdd(this, _use_hashes, void 0);
    /** @type {boolean} */
    __privateAdd(this, _script_needs_csp, void 0);
    /** @type {boolean} */
    __privateAdd(this, _style_needs_csp, void 0);
    /** @type {import('types').CspDirectives} */
    __privateAdd(this, _directives, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src, void 0);
    /** @type {string} */
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, dev ? { ...directives } : directives);
    const d = __privateGet(this, _directives);
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  /** @param {string} content */
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   * @param {boolean} dev
   */
  constructor(use_hashes, directives, nonce, dev) {
    super(use_hashes, directives, nonce, dev);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /**
   * @param {import('./types').CspConfig} config
   * @param {import('./types').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender, dev }) {
    /** @readonly */
    __publicField(this, "nonce", generate_nonce());
    /** @type {CspProvider} */
    __publicField(this, "csp_provider");
    /** @type {CspReportOnlyProvider} */
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  fetched,
  options,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = options.manifest._;
  const stylesheets6 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const fonts6 = new Set(options.manifest._.entry.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      components: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data = {};
    for (let i = 0; i < branch.length; i += 1) {
      data = { ...data, ...branch[i].data };
      props[`data_${i}`] = data;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data,
      form: form_value
    };
    rendered = options.root.render(props);
    for (const { node } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets6.add(url));
      }
      if (node.fonts) {
        node.fonts.forEach((url) => fonts6.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerendering
  });
  const target = hash(body);
  let assets2;
  if (options.paths.assets) {
    assets2 = options.paths.assets;
  } else if (state.prerendering?.fallback) {
    assets2 = options.paths.base;
  } else {
    const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
    assets2 = segments.length > 0 ? segments.map(() => "..").join("/") : ".";
  }
  const prefixed = (path) => path.startsWith("/") ? path : `${assets2}/${path}`;
  const serialized = { data: "", form: "null" };
  try {
    serialized.data = `[${branch.map(({ server_data }) => {
      if (server_data?.type === "data") {
        const data = uneval(server_data.data);
        const uses = [];
        if (server_data.uses.dependencies.size > 0) {
          uses.push(`dependencies:${s(Array.from(server_data.uses.dependencies))}`);
        }
        if (server_data.uses.params.size > 0) {
          uses.push(`params:${s(Array.from(server_data.uses.params))}`);
        }
        if (server_data.uses.parent)
          uses.push(`parent:1`);
        if (server_data.uses.route)
          uses.push(`route:1`);
        if (server_data.uses.url)
          uses.push(`url:1`);
        return `{type:"data",data:${data},uses:{${uses.join(",")}}${server_data.slash ? `,slash:${s(server_data.slash)}` : ""}}`;
      }
      return s(server_data);
    }).join(",")}]`;
  } catch (e) {
    const error3 = (
      /** @type {any} */
      e
    );
    throw new Error(clarify_devalue_error(event, error3));
  }
  if (form_value) {
    serialized.form = uneval_action_response(
      form_value,
      /** @type {string} */
      event.route.id
    );
  }
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (options.dev)
      attributes.push(" data-sveltekit");
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets6) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "css", path })) {
      const attributes = [];
      if (csp.style_needs_nonce) {
        attributes.push(`nonce="${csp.nonce}"`);
      }
      if (inline_styles.has(dep)) {
        attributes.push("disabled", 'media="(max-width: 0)"');
      } else {
        const preload_atts = ['rel="preload"', 'as="style"'].concat(attributes);
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
      attributes.unshift('rel="stylesheet"');
      head += `
		<link href="${path}" ${attributes.join(" ")}>`;
    }
  }
  for (const dep of fonts6) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  if (page_config.csr) {
    const opts = [
      `env: ${s(options.public_env)}`,
      `paths: ${s(options.paths)}`,
      `target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode`,
      `version: ${s(options.version)}`
    ];
    if (page_config.ssr) {
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        `data: ${serialized.data}`,
        `form: ${serialized.form}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (error2) {
        hydrate.push(`error: ${uneval(error2)}`);
      }
      if (options.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      opts.push(`hydrate: {
					${hydrate.join(",\n					")}
				}`);
    }
    const init_app = `
			import { start } from ${s(prefixed(entry.file))};

			start({
				${opts.join(",\n				")}
			});
		`;
    for (const dep of modulepreloads) {
      const path = prefixed(dep);
      if (resolve_opts.preload({ type: "js", path })) {
        link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
        if (state.prerendering) {
          head += `
		<link rel="modulepreload" href="${path}">`;
        }
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
  }
  if (page_config.ssr && page_config.csr) {
    body += `
	${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n	")}`;
  }
  if (options.service_worker) {
    const opts = options.dev ? `, { type: 'module' }` : "";
    const init_service_worker = `
			if ('serviceWorker' in navigator) {
				addEventListener('load', function () {
					navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
				});
			}
		`;
    csp.add_script(init_service_worker);
    head += `
		<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  head += rendered.head;
  const html = await resolve_opts.transformPageChunk({
    html: options.app_template({ head, body, assets: assets2, nonce: (
      /** @type {string} */
      csp.nonce
    ) }),
    done: true
  }) || "";
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  return new Response(html, {
    status,
    headers
  });
}
async function respond_with_error({ event, options, state, status, error: error2, resolve_opts }) {
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await options.manifest._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.initiator = GENERIC_ERROR;
      const server_data_promise = load_server_data({
        event,
        options,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await options.manifest._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: await handle_error_and_jsonify(event, options, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (error3) {
    if (error3 instanceof Redirect) {
      return redirect_response(error3.status, error3.location);
    }
    return static_error_page(
      options,
      error3 instanceof HttpError ? error3.status : 500,
      (await handle_error_and_jsonify(event, options, error3)).message
    );
  }
}
async function render_page(event, route, page2, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  state.initiator = route;
  if (is_action_json_request(event)) {
    const node = await options.manifest._.nodes[page2.leaf]();
    return handle_action_json_request(event, options, node?.server);
  }
  try {
    const nodes = await Promise.all([
      // we use == here rather than === because [undefined] serializes as "[null]"
      ...page2.layouts.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()),
      options.manifest._.nodes[page2.leaf]()
    ]);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event, leaf_node)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(303, action_result.location);
      }
      if (action_result?.type === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender");
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod && mod.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      if (should_prerender !== false && get_option(nodes, "ssr") === false && !leaf_node.server?.actions) {
        return await render_response({
          branch: [],
          fetched: [],
          page_config: {
            ssr: false,
            csr: get_option(nodes, "csr") ?? true
          },
          status,
          error: null,
          event,
          options,
          state,
          resolve_opts
        });
      }
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            options,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: new Response(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = await handle_error_and_jsonify(event, options, err);
          while (i--) {
            if (page2.errors[i]) {
              const index6 = (
                /** @type {number} */
                page2.errors[i]
              );
              const node2 = await options.manifest._.nodes[index6]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      const body = `{"type":"data","nodes":[${branch.map((node) => serialize_data_node(node?.server_data)).join(",")}]}`;
      state.prerendering.dependencies.set(data_pathname, {
        response: new Response(body),
        body
      });
    }
    return await render_response({
      event,
      options,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (error2) {
    return await respond_with_error({
      event,
      options,
      state,
      status: 500,
      error: error2,
      resolve_opts
    });
  }
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  let buffered = "";
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i];
    if (param.chained && param.rest && buffered) {
      value = value ? buffered + "/" + value : buffered;
    }
    buffered = "";
    if (value === void 0) {
      if (param.rest)
        result[param.name] = "";
    } else {
      if (param.matcher && !matchers[param.matcher](value)) {
        if (param.optional && param.chained) {
          let j = values.indexOf(void 0, i);
          if (j === -1) {
            const next = params[i + 1];
            if (next?.rest && next.chained) {
              buffered = value;
            } else {
              return;
            }
          }
          while (j >= i) {
            values[j] = values[j - 1];
            j -= 1;
          }
          continue;
        }
        return;
      }
      result[param.name] = value;
    }
  }
  if (buffered)
    return;
  return result;
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
async function render_data(event, route, options, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n == void 0 ? n : await options.manifest._.nodes[n]();
          return load_server_data({
            event: new_event,
            options,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data, parent.data);
                }
              }
              return data;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options, error2),
              status: error2 instanceof HttpError ? error2.status : void 0
            }
          );
        })
      )
    );
    try {
      const stubs = nodes.slice(0, length).map(serialize_data_node);
      const json2 = `{"type":"data","nodes":[${stubs.join(",")}]}`;
      return json_response(json2);
    } catch (e) {
      const error2 = (
        /** @type {any} */
        e
      );
      return json_response(JSON.stringify(clarify_devalue_error(event, error2)), 500);
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(JSON.stringify(await handle_error_and_jsonify(event, options, error2)));
    }
  }
}
function json_response(json2, status = 200) {
  return new Response(json2, {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response(
    JSON.stringify({
      type: "redirect",
      location: redirect.location
    })
  );
}
var cookie_paths = {};
function get_cookies(request, url, dev, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const default_path = normalized_url.split("/").slice(0, -1).join("/") || "/";
  if (dev) {
    const initial_decoded_cookies = (0, import_cookie.parse)(header, { decode: decodeURIComponent });
    for (const name of Object.keys(cookie_paths)) {
      cookie_paths[name] = new Set(
        [...cookie_paths[name]].filter(
          (path) => !path_matches(normalized_url, path) || name in initial_decoded_cookies
        )
      );
    }
    for (const name in initial_decoded_cookies) {
      cookie_paths[name] = cookie_paths[name] ?? /* @__PURE__ */ new Set();
      if (![...cookie_paths[name]].some((path) => path_matches(normalized_url, path))) {
        cookie_paths[name].add(default_path);
      }
    }
  }
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('types').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c = new_cookies[name];
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const decoder = opts?.decode || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(header, { decode: decoder });
      const cookie = req_cookies[name];
      if (!dev || cookie) {
        return cookie;
      }
      const paths = /* @__PURE__ */ new Set([...cookie_paths[name] ?? []]);
      if (c) {
        paths.add(c.options.path ?? default_path);
      }
      if (paths.size > 0) {
        console.warn(
          // prettier-ignore
          `Cookie with name '${name}' was not found at path '${url.pathname}', but a cookie with that name exists at these paths: '${[...paths].join("', '")}'. Did you mean to set its 'path' to '/' instead?`
        );
      }
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    set(name, value, opts = {}) {
      let path = opts.path ?? default_path;
      new_cookies[name] = {
        name,
        value,
        options: {
          ...defaults,
          ...opts,
          path
        }
      };
      if (dev) {
        cookie_paths[name] = cookie_paths[name] ?? /* @__PURE__ */ new Set();
        if (!value) {
          if (!cookie_paths[name].has(path) && cookie_paths[name].size > 0) {
            const paths = `'${Array.from(cookie_paths[name]).join("', '")}'`;
            console.warn(
              `Trying to delete cookie '${name}' at path '${path}', but a cookie with that name only exists at these paths: ${paths}.`
            );
          }
          cookie_paths[name].delete(path);
        } else {
          cookie_paths[name].add(path);
        }
      }
    },
    /**
     * @param {string} name
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    delete(name, opts = {}) {
      cookies.set(name, "", {
        ...opts,
        maxAge: 0
      });
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    serialize(name, value, opts) {
      return (0, import_cookie.serialize)(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      const encoder2 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder2(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  return { cookies, new_cookies, get_cookie_header };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options } = new_cookie;
    headers.append("set-cookie", (0, import_cookie.serialize)(name, value, options));
  }
}
function create_fetch({ event, options, state, get_cookie_header }) {
  return async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    const request_body = init2?.body;
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return await options.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie)
              request.headers.set("cookie", cookie);
          }
          let response2 = await fetch(request);
          if (mode === "no-cors") {
            response2 = new Response("", {
              status: response2.status,
              statusText: response2.statusText,
              headers: response2.headers
            });
          }
          return response2;
        }
        let response;
        const prefix = options.paths.assets || options.paths.base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file6 = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(options.read(file6), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (request_body && typeof request_body !== "string" && !ArrayBuffer.isView(request_body)) {
          throw new Error("Request body must be a string or TypedArray");
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        response = await respond(request, options, state);
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options2 } = set_cookie_parser.parseString(str);
            event.cookies.set(
              name,
              value,
              /** @type {import('cookie').CookieSerializeOptions} */
              options2
            );
          }
        }
        return response;
      }
    });
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
function validator(expected) {
  const set = new Set(expected);
  function validate(module, route_id) {
    if (!module)
      return;
    for (const key2 in module) {
      if (key2[0] !== "_" && !set.has(key2)) {
        const valid = expected.join(", ");
        throw new Error(
          `Invalid export '${key2}'${route_id ? ` in ${route_id}` : ""} (valid exports are ${valid}, or anything with a '_' prefix)`
        );
      }
    }
  }
  return validate;
}
var validate_common_exports = validator([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash"
]);
var validate_page_server_exports = validator([
  "load",
  "prerender",
  "csr",
  "ssr",
  "actions",
  "trailingSlash"
]);
var validate_server_exports = validator([
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "prerender",
  "trailingSlash"
]);
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
async function respond(request, options, state) {
  let url = new URL(request.url);
  if (options.csrf.check_origin) {
    const forbidden = request.method === "POST" && request.headers.get("origin") !== url.origin && is_form_content_type(request);
    if (forbidden) {
      const csrf_error = error(403, `Cross-site ${request.method} form submissions are forbidden`);
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return new Response(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let decoded;
  try {
    decoded = decode_pathname(url.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !state.prerendering?.fallback) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) || "/";
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("_").map(Boolean);
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state.prerendering?.fallback) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-vercel"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            `Use \`event.cookies.set(name, value, options)\` instead of \`event.setHeaders\` to set cookies`
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route && !is_data_request) {
      if (route.page) {
        const nodes = await Promise.all([
          // we use == here rather than === because [undefined] serializes as "[null]"
          ...route.page.layouts.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()),
          options.manifest._.nodes[route.page.leaf]()
        ]);
        if (DEV)
          ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV)
          ;
      }
      const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
      if (normalized !== url.pathname && !state.prerendering?.fallback) {
        return new Response(void 0, {
          status: 301,
          headers: {
            "x-sveltekit-normalize": "1",
            location: (
              // ensure paths starting with '//' are not treated as protocol-relative
              (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
            )
          }
        });
      }
    }
    const { cookies, new_cookies, get_cookie_header } = get_cookies(
      request,
      url,
      options.dev,
      trailing_slash ?? "never"
    );
    event.cookies = cookies;
    event.fetch = create_fetch({ event, options, state, get_cookie_header });
    if (state.prerendering && !state.prerendering.fallback)
      disable_search(url);
    const response = await options.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        for (const key2 in headers) {
          const value = headers[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(new_cookies));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (error2) {
    if (error2 instanceof Redirect) {
      if (is_data_request) {
        return redirect_json_response(error2);
      } else {
        return redirect_response(error2.status, error2.location);
      }
    }
    return await handle_fatal_error(event, options, error2);
  }
  async function resolve(event2, opts) {
    try {
      if (opts) {
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          response = await render_page(event2, route, route.page, options, state, resolve_opts);
        } else {
          throw new Error("This should never happen");
        }
        return response;
      }
      if (state.initiator === GENERIC_ERROR) {
        return new Response("Internal Server Error", {
          status: 500
        });
      }
      if (!state.initiator) {
        return await respond_with_error({
          event: event2,
          options,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return new Response("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (error2) {
      return await handle_fatal_error(event2, options, error2);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var app_template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\r\n<html lang="en">\r\n	<head>\r\n		<meta charset="utf-8" />\r\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\r\n		<meta name="viewport" content="width=device-width" />\r\n		' + head + "\r\n		<title>SvelteKit | Tailwind</title>\r\n	</head>\r\n	<body>\r\n		<div>" + body + "</div>\r\n	</body>\r\n</html>\r\n";
var error_template = ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      csrf: {
        check_origin: true
      },
      dev: false,
      embedded: false,
      handle_error: (error2, event) => {
        return this.options.hooks.handleError({ error: error2, event }) ?? {
          message: event.route.id != null ? "Internal Error" : "Not Found"
        };
      },
      hooks: null,
      manifest: manifest2,
      paths: { base, assets },
      public_env: {},
      read,
      root: Root,
      service_worker: false,
      app_template,
      app_template_contains_nonce: false,
      error_template,
      version: "1678961686538"
    };
  }
  /**
   * Take care: Some adapters may have to call `Server.init` per-request to set env vars,
   * so anything that shouldn't be rerun should be wrapped in an `if` block to make sure it hasn't
   * been done already.
   */
  async init({ env }) {
    const entries = Object.entries(env);
    Object.fromEntries(entries.filter(([k]) => !k.startsWith("PUBLIC_")));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith("PUBLIC_")));
    this.options.public_env = pub;
    if (!this.options.hooks) {
      const module = await Promise.resolve().then(() => (init_hooks(), hooks_exports));
      this.options.hooks = {
        handle: module.handle || (({ event, resolve }) => resolve(event)),
        handleError: module.handleError || (({ error: error2 }) => console.error(error2.stack)),
        handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
      };
    }
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/vercel-tmp/render/manifest.js
var manifest = {
  appDir: "_app",
  appPath: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png"]),
  mimeTypes: { ".png": "image/png" },
  _: {
    entry: { "file": "_app/immutable/start-2c537f18.js", "imports": ["_app/immutable/start-2c537f18.js", "_app/immutable/chunks/index-c2872cc9.js", "_app/immutable/chunks/singletons-db910752.js", "_app/immutable/chunks/index-3e679e32.js", "_app/immutable/chunks/preload-helper-41c905a7.js"], "stylesheets": [], "fonts": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5))
    ],
    routes: [
      {
        id: "/",
        pattern: /^\/$/,
        params: [],
        page: { layouts: [0], errors: [1], leaf: 2 },
        endpoint: null
      },
      {
        id: "/login",
        pattern: /^\/login\/?$/,
        params: [],
        page: { layouts: [0], errors: [1], leaf: 3 },
        endpoint: null
      },
      {
        id: "/templates",
        pattern: /^\/templates\/?$/,
        params: [],
        page: { layouts: [0], errors: [1], leaf: 4 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};

// .svelte-kit/vercel-tmp/render/edge.js
var server = new Server(manifest);
var initialized = server.init({
  env: process.env
});
var edge_default = async (request) => {
  await initialized;
  return server.respond(request, {
    getClientAddress() {
      return request.headers.get("x-forwarded-for");
    }
  });
};
export {
  edge_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=index.js.map
