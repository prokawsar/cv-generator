export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-9d3af1ef.js","imports":["_app/immutable/start-9d3af1ef.js","_app/immutable/chunks/index-2dedaa34.js","_app/immutable/chunks/singletons-12e4046c.js"],"stylesheets":[]},
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
