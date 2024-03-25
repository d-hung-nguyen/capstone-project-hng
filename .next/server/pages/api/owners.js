"use strict";
(() => {
var exports = {};
exports.id = 729;
exports.ids = [729];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error("no .env.loal");
}
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);


/***/ }),

/***/ 4947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./db/connect.js
var connect = __webpack_require__(6064);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./db/models/owner.js

const ownerSchema = new (external_mongoose_default()).Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    address: String,
    city: String,
    telephone: String,
    active: Boolean
});
const Owner = (external_mongoose_default()).models.Owner || external_mongoose_default().model("Owner", ownerSchema);
/* harmony default export */ const models_owner = (Owner);

;// CONCATENATED MODULE: ./pages/api/owners/index.js


async function handler(request, response) {
    await (0,connect/* default */.Z)();
    const { method } = request;
    switch(method){
        case "POST":
            try {
                const owner = new models_owner(request.body);
                await owner.save();
                response.status(201).json({
                    success: true,
                    data: owner
                });
            } catch (error) {
                response.status(400).json({
                    success: false,
                    message: error.message
                });
            }
            break;
        default:
            response.setHeader("Allow", [
                "POST"
            ]);
            response.status(405).end(`Method ${method} Not Allowed`);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4947));
module.exports = __webpack_exports__;

})();