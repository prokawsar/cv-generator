export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-75751d8b.js","imports":["_app/immutable/start-75751d8b.js","_app/immutable/chunks/index-379fe32e.js","_app/immutable/chunks/singletons-ce47e728.js","_app/immutable/chunks/index-e6b6ae2b.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
					id: "",
					pattern: /^\/$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":2},
					endpoint: null
				},
			{
					id: "templates",
					pattern: /^\/templates\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":3},
					endpoint: null
				}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
