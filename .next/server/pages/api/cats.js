"use strict";
(() => {
var exports = {};
exports.id = 218;
exports.ids = [218];
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

/***/ 2442:
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
;// CONCATENATED MODULE: ./db/models/cat.js

const catSchema = new (external_mongoose_default()).Schema({
    name: {
        type: String,
        required: true
    },
    breed: String,
    gender: String,
    color: String,
    dateOfBirth: Date,
    identityNumber: String,
    transponderCode: String,
    active: Boolean
});
const Cat = (external_mongoose_default()).models.Cat || external_mongoose_default().model("Cat", catSchema);
/* harmony default export */ const models_cat = (Cat);

;// CONCATENATED MODULE: ./pages/api/cats/index.js


async function handler(request, response) {
    await (0,connect/* default */.Z)();
    const { method } = request;
    switch(method){
        case "GET":
            try {
                const cats = await models_cat.find({});
                response.status(200).json({
                    success: true,
                    data: cats
                });
            } catch (error) {
                response.status(500).json({
                    success: false,
                    message: error.message
                });
            }
            break;
        case "POST":
            try {
                const cat = await models_cat.create(request.body);
                response.status(201).json({
                    success: true,
                    data: cat
                });
            } catch (error) {
                response.status(400).json({
                    success: false,
                    message: error.message
                });
            }
            break;
        case "PUT":
            try {
                const { id } = request.query;
                const cat = await models_cat.findByIdAndUpdate(id, request.body, {
                    new: true,
                    runValidators: true
                });
                if (!cat) {
                    return response.status(400).json({
                        success: false,
                        message: `No cat with id ${id}`
                    });
                }
                response.status(200).json({
                    success: true,
                    data: cat
                });
            } catch (error) {
                response.status(400).json({
                    success: false,
                    message: error.message
                });
            }
            break;
        case "DELETE":
            try {
                const { id } = request.query;
                const deletedCat = await models_cat.findByIdAndDelete(id);
                if (!deletedCat) {
                    return response.status(400).json({
                        success: false,
                        message: `No cat with id ${id}`
                    });
                }
                response.status(200).json({
                    success: true,
                    data: {}
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
                "GET",
                "POST",
                "PUT",
                "DELETE"
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
var __webpack_exports__ = (__webpack_exec__(2442));
module.exports = __webpack_exports__;

})();