"use strict";
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
exports.id = "pages/api/owners";
exports.ids = ["pages/api/owners"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./db/connect.js":
/*!***********************!*\
  !*** ./db/connect.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"no .env.loal\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9jb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFDM0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFBTTtBQUNsQjtBQUNBLElBQUlDLFNBQVNDLE9BQU9OLFFBQVE7QUFDNUIsSUFBSSxDQUFDSyxRQUFRO0lBQ1hBLFNBQVNDLE9BQU9OLFFBQVEsR0FBRztRQUFFTyxNQUFNO1FBQU1DLFNBQVM7SUFBSztBQUN6RDtBQUNBLGVBQWVDO0lBQ2IsSUFBSUosT0FBT0UsSUFBSSxFQUFFO1FBQ2YsT0FBT0YsT0FBT0UsSUFBSTtJQUNwQjtJQUNBLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CLE1BQU1FLE9BQU87WUFDWEMsaUJBQWlCO1lBQ2pCQyxvQkFBb0I7UUFDdEI7UUFDQVAsT0FBT0csT0FBTyxHQUFHUix1REFBZ0IsQ0FBQ0MsYUFBYVMsTUFBTUksSUFBSSxDQUFDLENBQUNkO1lBQ3pELE9BQU9BO1FBQ1Q7SUFDRjtJQUNBSyxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNsQyxPQUFPSCxPQUFPRSxJQUFJO0FBQ3BCO0FBQ0EsaUVBQWVFLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LWhuZy8uL2RiL2Nvbm5lY3QuanM/Yzc0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ25vIC5lbnYubG9hbCcpO1xufVxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcbmlmICghY2FjaGVkKSB7XG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xufVxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgfTtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XG4gICAgICByZXR1cm4gbW9uZ29vc2U7XG4gICAgfSk7XG4gIH1cbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdCIsInRoZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/connect.js\n");

/***/ }),

/***/ "(api)/./db/models/owner.js":
/*!****************************!*\
  !*** ./db/models/owner.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ownerSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: String,\n    address: String,\n    city: String,\n    telephone: String,\n    active: Boolean\n});\nconst Owner = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Owner || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Owner\", ownerSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Owner);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvb3duZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWMsSUFBSUQsd0RBQWUsQ0FBQztJQUN0Q0csTUFBTTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDckNDLE9BQU9GO0lBQ1BHLFNBQVNIO0lBQ1RJLE1BQU1KO0lBQ05LLFdBQVdMO0lBQ1hNLFFBQVFDO0FBQ1Y7QUFFQSxNQUFNQyxRQUFRYix3REFBZSxDQUFDYSxLQUFLLElBQUliLHFEQUFjLENBQUMsU0FBU0M7QUFFL0QsaUVBQWVZLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LWhuZy8uL2RiL21vZGVscy9vd25lci5qcz8xODVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IG93bmVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBlbWFpbDogU3RyaW5nLFxuICBhZGRyZXNzOiBTdHJpbmcsXG4gIGNpdHk6IFN0cmluZyxcbiAgdGVsZXBob25lOiBTdHJpbmcsXG4gIGFjdGl2ZTogQm9vbGVhbixcbn0pO1xuXG5jb25zdCBPd25lciA9IG1vbmdvb3NlLm1vZGVscy5Pd25lciB8fCBtb25nb29zZS5tb2RlbCgnT3duZXInLCBvd25lclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IE93bmVyOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm93bmVyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwiYWRkcmVzcyIsImNpdHkiLCJ0ZWxlcGhvbmUiLCJhY3RpdmUiLCJCb29sZWFuIiwiT3duZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/models/owner.js\n");

/***/ }),

/***/ "(api)/./pages/api/owners/index.js":
/*!***********************************!*\
  !*** ./pages/api/owners/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../db/connect */ \"(api)/./db/connect.js\");\n/* harmony import */ var _db_models_owner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../db/models/owner */ \"(api)/./db/models/owner.js\");\n\n\nasync function handler(request, response) {\n    await (0,_db_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const { method } = request;\n    switch(method){\n        case \"POST\":\n            try {\n                const owner = new _db_models_owner__WEBPACK_IMPORTED_MODULE_1__[\"default\"](request.body);\n                await owner.save();\n                response.status(201).json({\n                    success: true,\n                    data: owner\n                });\n            } catch (error) {\n                response.status(400).json({\n                    success: false,\n                    message: error.message\n                });\n            }\n            break;\n        default:\n            response.setHeader(\"Allow\", [\n                \"POST\"\n            ]);\n            response.status(405).end(`Method ${method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3duZXJzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUNDO0FBRTlCLGVBQWVFLFFBQVFDLE9BQU8sRUFBRUMsUUFBUTtJQUNyRCxNQUFNSix1REFBU0E7SUFDZixNQUFNLEVBQUVLLE1BQU0sRUFBRSxHQUFHRjtJQUNuQixPQUFRRTtRQUNOLEtBQUs7WUFDSCxJQUFJO2dCQUNGLE1BQU1DLFFBQVEsSUFBSUwsd0RBQUtBLENBQUNFLFFBQVFJLElBQUk7Z0JBQ3BDLE1BQU1ELE1BQU1FLElBQUk7Z0JBQ2hCSixTQUFTSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTO29CQUFNQyxNQUFNTjtnQkFBTTtZQUN6RCxFQUFFLE9BQU9PLE9BQU87Z0JBQ2RULFNBQVNLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFNBQVM7b0JBQU9HLFNBQVNELE1BQU1DLE9BQU87Z0JBQUM7WUFDckU7WUFDQTtRQUVGO1lBQ0VWLFNBQVNXLFNBQVMsQ0FBQyxTQUFTO2dCQUFDO2FBQU87WUFDcENYLFNBQVNLLE1BQU0sQ0FBQyxLQUFLTyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVYLE9BQU8sWUFBWSxDQUFDO0lBQzNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LWhuZy8uL3BhZ2VzL2FwaS9vd25lcnMvaW5kZXguanM/OTgwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uLy4uL2RiL2Nvbm5lY3QnO1xuaW1wb3J0IE93bmVyIGZyb20gJy4uLy4uLy4uL2RiL21vZGVscy9vd25lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgYXdhaXQgZGJDb25uZWN0KCk7XG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXF1ZXN0O1xuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgJ1BPU1QnOlxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb3duZXIgPSBuZXcgT3duZXIocmVxdWVzdC5ib2R5KTtcbiAgICAgICAgYXdhaXQgb3duZXIuc2F2ZSgpO1xuICAgICAgICByZXNwb25zZS5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogb3duZXIgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXNwb25zZS5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXNwb25zZS5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJ10pO1xuICAgICAgcmVzcG9uc2Uuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYCk7XG4gIH1cbn0iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiT3duZXIiLCJoYW5kbGVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwibWV0aG9kIiwib3duZXIiLCJib2R5Iiwic2F2ZSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsImVycm9yIiwibWVzc2FnZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/owners/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/owners/index.js"));
module.exports = __webpack_exports__;

})();