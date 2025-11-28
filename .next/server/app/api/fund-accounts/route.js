/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/fund-accounts/route";
exports.ids = ["app/api/fund-accounts/route"];
exports.modules = {

/***/ "(ssr)/./node_modules/@supabase/realtime-js/dist/main sync recursive":
/*!************************************************************!*\
  !*** ./node_modules/@supabase/realtime-js/dist/main/ sync ***!
  \************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "(ssr)/./node_modules/@supabase/realtime-js/dist/main sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffund-accounts%2Froute&page=%2Fapi%2Ffund-accounts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffund-accounts%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffund-accounts%2Froute&page=%2Fapi%2Ffund-accounts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffund-accounts%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _home_project_app_api_fund_accounts_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/fund-accounts/route.ts */ \"(rsc)/./app/api/fund-accounts/route.ts\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/fund-accounts/route\",\n        pathname: \"/api/fund-accounts\",\n        filename: \"route\",\n        bundlePath: \"app/api/fund-accounts/route\"\n    },\n    resolvedPagePath: \"/home/project/app/api/fund-accounts/route.ts\",\n    nextConfigOutput,\n    userland: _home_project_app_api_fund_accounts_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/fund-accounts/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZmdW5kLWFjY291bnRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZmdW5kLWFjY291bnRzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZnVuZC1hY2NvdW50cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGcHJvamVjdCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnByb2plY3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDMEY7QUFDM0I7QUFDL0Q7QUFDeUU7QUFDekUsNEJBQTRCLGdIQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvPzMzYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmV4dC9kaXN0L3NlcnZlci9ub2RlLXBvbHlmaWxsLWhlYWRlcnNcIjtcbi8vIEB0cy1pZ25vcmUgdGhpcyBuZWVkIHRvIGJlIGltcG9ydGVkIGZyb20gbmV4dC9kaXN0IHRvIGJlIGV4dGVybmFsXG5pbXBvcnQgKiBhcyBtb2R1bGUgZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbi8vIEB0cy1leHBlY3QtZXJyb3IgLSByZXBsYWNlZCBieSB3ZWJwYWNrL3R1cmJvcGFjayBsb2FkZXJcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9wcm9qZWN0L2FwcC9hcGkvZnVuZC1hY2NvdW50cy9yb3V0ZS50c1wiO1xuY29uc3QgQXBwUm91dGVSb3V0ZU1vZHVsZSA9IG1vZHVsZS5BcHBSb3V0ZVJvdXRlTW9kdWxlO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZnVuZC1hY2NvdW50cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2Z1bmQtYWNjb3VudHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2Z1bmQtYWNjb3VudHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9wcm9qZWN0L2FwcC9hcGkvZnVuZC1hY2NvdW50cy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9mdW5kLWFjY291bnRzL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffund-accounts%2Froute&page=%2Fapi%2Ffund-accounts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffund-accounts%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/fund-accounts/route.ts":
/*!****************************************!*\
  !*** ./app/api/fund-accounts/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_supabase_multi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabase-multi */ \"(rsc)/./lib/supabase-multi.ts\");\n\n\nconst dynamic = \"force-dynamic\";\nasync function GET(request) {\n    try {\n        const searchParams = request.nextUrl.searchParams;\n        const userId = searchParams.get(\"user_id\");\n        const bankKey = searchParams.get(\"bank_key\");\n        if (!userId || !bankKey) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Missing user_id or bank_key\"\n            }, {\n                status: 400\n            });\n        }\n        const supabase = (0,_lib_supabase_multi__WEBPACK_IMPORTED_MODULE_1__.getBankClient)(bankKey);\n        const { data: fundAccounts, error } = await supabase.from(\"fund_accounts\").select(\"*\").eq(\"user_id\", userId).order(\"created_at\", {\n            ascending: false\n        });\n        if (error) {\n            console.error(\"Fetch fund accounts error:\", error);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: error.message\n            }, {\n                status: 500\n            });\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(fundAccounts || []);\n    } catch (error) {\n        console.error(\"Fetch fund accounts exception:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error instanceof Error ? error.message : \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Z1bmQtYWNjb3VudHMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3RDtBQUNIO0FBRTlDLE1BQU1FLFVBQVUsZ0JBQWdCO0FBRWhDLGVBQWVDLElBQUlDLE9BQW9CO0lBQzVDLElBQUk7UUFDRixNQUFNQyxlQUFlRCxRQUFRRSxPQUFPLENBQUNELFlBQVk7UUFDakQsTUFBTUUsU0FBU0YsYUFBYUcsR0FBRyxDQUFDO1FBQ2hDLE1BQU1DLFVBQVVKLGFBQWFHLEdBQUcsQ0FBQztRQUVqQyxJQUFJLENBQUNELFVBQVUsQ0FBQ0UsU0FBUztZQUN2QixPQUFPVCxrRkFBWUEsQ0FBQ1UsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQThCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNuRjtRQUVBLE1BQU1DLFdBQVdaLGtFQUFhQSxDQUFDUTtRQUUvQixNQUFNLEVBQUVLLE1BQU1DLFlBQVksRUFBRUosS0FBSyxFQUFFLEdBQUcsTUFBTUUsU0FDekNHLElBQUksQ0FBQyxpQkFDTEMsTUFBTSxDQUFDLEtBQ1BDLEVBQUUsQ0FBQyxXQUFXWCxRQUNkWSxLQUFLLENBQUMsY0FBYztZQUFFQyxXQUFXO1FBQU07UUFFMUMsSUFBSVQsT0FBTztZQUNUVSxRQUFRVixLQUFLLENBQUMsOEJBQThCQTtZQUM1QyxPQUFPWCxrRkFBWUEsQ0FBQ1UsSUFBSSxDQUFDO2dCQUFFQyxPQUFPQSxNQUFNVyxPQUFPO1lBQUMsR0FBRztnQkFBRVYsUUFBUTtZQUFJO1FBQ25FO1FBRUEsT0FBT1osa0ZBQVlBLENBQUNVLElBQUksQ0FBQ0ssZ0JBQWdCLEVBQUU7SUFDN0MsRUFBRSxPQUFPSixPQUFPO1FBQ2RVLFFBQVFWLEtBQUssQ0FBQyxrQ0FBa0NBO1FBQ2hELE9BQU9YLGtGQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFDdkJDLE9BQU9BLGlCQUFpQlksUUFBUVosTUFBTVcsT0FBTyxHQUFHO1FBQ2xELEdBQUc7WUFBRVYsUUFBUTtRQUFJO0lBQ25CO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9hcHAvYXBpL2Z1bmQtYWNjb3VudHMvcm91dGUudHM/MjA0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgZ2V0QmFua0NsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlLW11bHRpJztcblxuZXhwb3J0IGNvbnN0IGR5bmFtaWMgPSAnZm9yY2UtZHluYW1pYyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSByZXF1ZXN0Lm5leHRVcmwuc2VhcmNoUGFyYW1zO1xuICAgIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ3VzZXJfaWQnKTtcbiAgICBjb25zdCBiYW5rS2V5ID0gc2VhcmNoUGFyYW1zLmdldCgnYmFua19rZXknKTtcblxuICAgIGlmICghdXNlcklkIHx8ICFiYW5rS2V5KSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ01pc3NpbmcgdXNlcl9pZCBvciBiYW5rX2tleScgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzdXBhYmFzZSA9IGdldEJhbmtDbGllbnQoYmFua0tleSk7XG5cbiAgICBjb25zdCB7IGRhdGE6IGZ1bmRBY2NvdW50cywgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAuZnJvbSgnZnVuZF9hY2NvdW50cycpXG4gICAgICAuc2VsZWN0KCcqJylcbiAgICAgIC5lcSgndXNlcl9pZCcsIHVzZXJJZClcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmV0Y2ggZnVuZCBhY2NvdW50cyBlcnJvcjonLCBlcnJvcik7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihmdW5kQWNjb3VudHMgfHwgW10pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZldGNoIGZ1bmQgYWNjb3VudHMgZXhjZXB0aW9uOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ludGVybmFsIHNlcnZlciBlcnJvcidcbiAgICB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0QmFua0NsaWVudCIsImR5bmFtaWMiLCJHRVQiLCJyZXF1ZXN0Iiwic2VhcmNoUGFyYW1zIiwibmV4dFVybCIsInVzZXJJZCIsImdldCIsImJhbmtLZXkiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJzdXBhYmFzZSIsImRhdGEiLCJmdW5kQWNjb3VudHMiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJvcmRlciIsImFzY2VuZGluZyIsImNvbnNvbGUiLCJtZXNzYWdlIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/fund-accounts/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/bank-config.ts":
/*!****************************!*\
  !*** ./lib/bank-config.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BANKS: () => (/* binding */ BANKS),\n/* harmony export */   BANK_LIST: () => (/* binding */ BANK_LIST)\n/* harmony export */ });\nconst BANKS = {\n    \"cayman\": {\n        name: \"Cayman Bank\",\n        url: \"https://rswfgdklidaljidagkxp.supabase.co\",\n        anonKey: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzd2ZnZGtsaWRhbGppZGFna3hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NTkwNzcsImV4cCI6MjA3NzIzNTA3N30.HJGELtx7mAdR4BPmYAqtpVb-pzpF1fNHVrN0j2go870\",\n        serviceRoleKey: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzd2ZnZGtsaWRhbGppZGFna3hwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTY1OTA3NywiZXhwIjoyMDc3MjM1MDc3fQ.vXTlkRhmsqSO2pDJ9b_Yyth6urRNHJI7yhXMS7kGn4k\"\n    },\n    \"lithuanian\": {\n        name: \"Lithuanian Bank\",\n        url: \"https://asvvmnifwvnyrxvxewvv.supabase.co\",\n        anonKey: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzdnZtbmlmd3ZueXJ4dnhld3Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NjM2NjEsImV4cCI6MjA3NzEzOTY2MX0.im3MdzSeeNBDg3gSm8AIhYYZRHM2grfEfnyb3OzjOgY\",\n        serviceRoleKey: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzdnZtbmlmd3ZueXJ4dnhld3Z2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTU2MzY2MSwiZXhwIjoyMDc3MTM5NjYxfQ.ugTFp4rRITjnAOB4IBOHv7siXRaVkkz4kurxuW2g7W4\"\n    },\n    \"digitalchain\": {\n        name: \"Digital Chain Bank\",\n        url: \"https://bzemaxsqlhydefzjehup.supabase.co\",\n        anonKey: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6ZW1heHNxbGh5ZGVmemplaHVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NDI2ODYsImV4cCI6MjA2NzAxODY4Nn0.4Eb9jPeOF4o3QHUfHXf2QG4J1S0F3GTj1pfGXzDNW6Q\",\n        serviceRoleKey: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6ZW1heHNxbGh5ZGVmemplaHVwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTQ0MjY4NiwiZXhwIjoyMDY3MDE4Njg2fQ.9EfkiHUecc3dUEYsIGk8R6RnsywTgs4urUv_Ts2Otcw\"\n    }\n};\nconst BANK_LIST = Object.keys(BANKS);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYmFuay1jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPTyxNQUFNQSxRQUFvQztJQUMvQyxVQUFVO1FBQ1JDLE1BQU07UUFDTkMsS0FBSztRQUNMQyxTQUFTO1FBQ1RDLGdCQUFnQjtJQUNsQjtJQUNBLGNBQWM7UUFDWkgsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLFNBQVM7UUFDVEMsZ0JBQWdCO0lBQ2xCO0lBQ0EsZ0JBQWdCO1FBQ2RILE1BQU07UUFDTkMsS0FBSztRQUNMQyxTQUFTO1FBQ1RDLGdCQUFnQjtJQUNsQjtBQUNGLEVBQUU7QUFFSyxNQUFNQyxZQUFZQyxPQUFPQyxJQUFJLENBQUNQLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9saWIvYmFuay1jb25maWcudHM/OGJkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEJhbmtDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBhbm9uS2V5OiBzdHJpbmc7XG4gIHNlcnZpY2VSb2xlS2V5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBCQU5LUzogUmVjb3JkPHN0cmluZywgQmFua0NvbmZpZz4gPSB7XG4gICdjYXltYW4nOiB7XG4gICAgbmFtZTogJ0NheW1hbiBCYW5rJyxcbiAgICB1cmw6ICdodHRwczovL3Jzd2ZnZGtsaWRhbGppZGFna3hwLnN1cGFiYXNlLmNvJyxcbiAgICBhbm9uS2V5OiAnZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKemRYQmhZbUZ6WlNJc0luSmxaaUk2SW5KemQyWm5aR3RzYVdSaGJHcHBaR0ZuYTNod0lpd2ljbTlzWlNJNkltRnViMjRpTENKcFlYUWlPakUzTmpFMk5Ua3dOemNzSW1WNGNDSTZNakEzTnpJek5UQTNOMzAuSEpHRUx0eDdtQWRSNEJQbVlBcXRwVmItcHpwRjFmTkhWck4wajJnbzg3MCcsXG4gICAgc2VydmljZVJvbGVLZXk6ICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUp6ZFhCaFltRnpaU0lzSW5KbFppSTZJbkp6ZDJablpHdHNhV1JoYkdwcFpHRm5hM2h3SWl3aWNtOXNaU0k2SW5ObGNuWnBZMlZmY205c1pTSXNJbWxoZENJNk1UYzJNVFkxT1RBM055d2laWGh3SWpveU1EYzNNak0xTURjM2ZRLnZYVGxrUmhtc3FTTzJwREo5Yl9ZeXRoNnVyUk5ISkk3eWhYTVM3a0duNGsnXG4gIH0sXG4gICdsaXRodWFuaWFuJzoge1xuICAgIG5hbWU6ICdMaXRodWFuaWFuIEJhbmsnLFxuICAgIHVybDogJ2h0dHBzOi8vYXN2dm1uaWZ3dm55cnh2eGV3dnYuc3VwYWJhc2UuY28nLFxuICAgIGFub25LZXk6ICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUp6ZFhCaFltRnpaU0lzSW5KbFppSTZJbUZ6ZG5adGJtbG1kM1p1ZVhKNGRuaGxkM1oySWl3aWNtOXNaU0k2SW1GdWIyNGlMQ0pwWVhRaU9qRTNOakUxTmpNMk5qRXNJbVY0Y0NJNk1qQTNOekV6T1RZMk1YMC5pbTNNZHpTZWVOQkRnM2dTbThBSWhZWVpSSE0yZ3JmRWZueWIzT3pqT2dZJyxcbiAgICBzZXJ2aWNlUm9sZUtleTogJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwYzNNaU9pSnpkWEJoWW1GelpTSXNJbkpsWmlJNkltRnpkblp0Ym1sbWQzWnVlWEo0ZG5obGQzWjJJaXdpY205c1pTSTZJbk5sY25acFkyVmZjbTlzWlNJc0ltbGhkQ0k2TVRjMk1UVTJNelkyTVN3aVpYaHdJam95TURjM01UTTVOall4ZlEudWdURnA0clJJVGpuQU9CNElCT0h2N3NpWFJhVmtrejRrdXJ4dVcyZzdXNCdcbiAgfSxcbiAgJ2RpZ2l0YWxjaGFpbic6IHtcbiAgICBuYW1lOiAnRGlnaXRhbCBDaGFpbiBCYW5rJyxcbiAgICB1cmw6ICdodHRwczovL2J6ZW1heHNxbGh5ZGVmemplaHVwLnN1cGFiYXNlLmNvJyxcbiAgICBhbm9uS2V5OiAnZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKemRYQmhZbUZ6WlNJc0luSmxaaUk2SW1KNlpXMWhlSE54YkdoNVpHVm1lbXBsYUhWd0lpd2ljbTlzWlNJNkltRnViMjRpTENKcFlYUWlPakUzTlRFME5ESTJPRFlzSW1WNGNDSTZNakEyTnpBeE9EWTRObjAuNEViOWpQZU9GNG8zUUhVZkhYZjJRRzRKMVMwRjNHVGoxcGZHWHpETlc2UScsXG4gICAgc2VydmljZVJvbGVLZXk6ICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUp6ZFhCaFltRnpaU0lzSW5KbFppSTZJbUo2WlcxaGVITnhiR2g1WkdWbWVtcGxhSFZ3SWl3aWNtOXNaU0k2SW5ObGNuWnBZMlZmY205c1pTSXNJbWxoZENJNk1UYzFNVFEwTWpZNE5pd2laWGh3SWpveU1EWTNNREU0TmpnMmZRLjlFZmtpSFVlY2MzZFVFWXNJR2s4UjZSbnN5d1RnczR1clV2X1RzMk90Y3cnXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBCQU5LX0xJU1QgPSBPYmplY3Qua2V5cyhCQU5LUyk7XG4iXSwibmFtZXMiOlsiQkFOS1MiLCJuYW1lIiwidXJsIiwiYW5vbktleSIsInNlcnZpY2VSb2xlS2V5IiwiQkFOS19MSVNUIiwiT2JqZWN0Iiwia2V5cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/bank-config.ts\n");

/***/ }),

/***/ "(rsc)/./lib/supabase-multi.ts":
/*!*******************************!*\
  !*** ./lib/supabase-multi.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllBankClients: () => (/* binding */ getAllBankClients),\n/* harmony export */   getBankClient: () => (/* binding */ getBankClient)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/main/index.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _bank_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-config */ \"(rsc)/./lib/bank-config.ts\");\n\n\nfunction getBankClient(bankKey) {\n    const config = _bank_config__WEBPACK_IMPORTED_MODULE_0__.BANKS[bankKey];\n    if (!config) {\n        throw new Error(`Bank ${bankKey} not found`);\n    }\n    return (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(config.url, config.serviceRoleKey, {\n        auth: {\n            autoRefreshToken: false,\n            persistSession: false\n        }\n    });\n}\nasync function getAllBankClients() {\n    return Object.keys(_bank_config__WEBPACK_IMPORTED_MODULE_0__.BANKS).map((key)=>({\n            key,\n            name: _bank_config__WEBPACK_IMPORTED_MODULE_0__.BANKS[key].name,\n            client: getBankClient(key)\n        }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2UtbXVsdGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUU7QUFDL0I7QUFFL0IsU0FBU0UsY0FBY0MsT0FBZTtJQUMzQyxNQUFNQyxTQUFTSCwrQ0FBSyxDQUFDRSxRQUFRO0lBQzdCLElBQUksQ0FBQ0MsUUFBUTtRQUNYLE1BQU0sSUFBSUMsTUFBTSxDQUFDLEtBQUssRUFBRUYsUUFBUSxVQUFVLENBQUM7SUFDN0M7SUFFQSxPQUFPSCxtRUFBWUEsQ0FBQ0ksT0FBT0UsR0FBRyxFQUFFRixPQUFPRyxjQUFjLEVBQUU7UUFDckRDLE1BQU07WUFDSkMsa0JBQWtCO1lBQ2xCQyxnQkFBZ0I7UUFDbEI7SUFDRjtBQUNGO0FBRU8sZUFBZUM7SUFDcEIsT0FBT0MsT0FBT0MsSUFBSSxDQUFDWiwrQ0FBS0EsRUFBRWEsR0FBRyxDQUFDQyxDQUFBQSxNQUFRO1lBQ3BDQTtZQUNBQyxNQUFNZiwrQ0FBSyxDQUFDYyxJQUFJLENBQUNDLElBQUk7WUFDckJDLFFBQVFmLGNBQWNhO1FBQ3hCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9saWIvc3VwYWJhc2UtbXVsdGkudHM/YWEwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQsIFN1cGFiYXNlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcbmltcG9ydCB7IEJBTktTIH0gZnJvbSAnLi9iYW5rLWNvbmZpZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYW5rQ2xpZW50KGJhbmtLZXk6IHN0cmluZyk6IFN1cGFiYXNlQ2xpZW50IHtcbiAgY29uc3QgY29uZmlnID0gQkFOS1NbYmFua0tleV07XG4gIGlmICghY29uZmlnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBCYW5rICR7YmFua0tleX0gbm90IGZvdW5kYCk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlQ2xpZW50KGNvbmZpZy51cmwsIGNvbmZpZy5zZXJ2aWNlUm9sZUtleSwge1xuICAgIGF1dGg6IHtcbiAgICAgIGF1dG9SZWZyZXNoVG9rZW46IGZhbHNlLFxuICAgICAgcGVyc2lzdFNlc3Npb246IGZhbHNlXG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEJhbmtDbGllbnRzKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoQkFOS1MpLm1hcChrZXkgPT4gKHtcbiAgICBrZXksXG4gICAgbmFtZTogQkFOS1Nba2V5XS5uYW1lLFxuICAgIGNsaWVudDogZ2V0QmFua0NsaWVudChrZXkpXG4gIH0pKTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJCQU5LUyIsImdldEJhbmtDbGllbnQiLCJiYW5rS2V5IiwiY29uZmlnIiwiRXJyb3IiLCJ1cmwiLCJzZXJ2aWNlUm9sZUtleSIsImF1dGgiLCJhdXRvUmVmcmVzaFRva2VuIiwicGVyc2lzdFNlc3Npb24iLCJnZXRBbGxCYW5rQ2xpZW50cyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJuYW1lIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabase-multi.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffund-accounts%2Froute&page=%2Fapi%2Ffund-accounts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffund-accounts%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();