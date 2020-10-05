"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blogActions = void 0;

var types = _interopRequireWildcard(require("redux/constants/blog.constants"));

var _api = _interopRequireDefault(require("../reducers/api"));

var _reactToastify = require("react-toastify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// const blogsRequest=(pageNum=1,limit)=>async(dispatch)=>{
//     dispatch({type:types.GET_BLOGS_REQUEST,payload:null})
//     try{
//         const res=api.get(`/blogs?page=${pageNum}&limit=${limit}`)
//         dispatch({type:types.GET_BLOGS_SUCCESS,payload:res.data.data})
//     }catch(error){
//         dispatch({type:types.GET_BLOGS_FAILURE,payload:error});
//     }
// }
// export const blogActions={
//     blogsRequest,
// };
var blogsRequest = function blogsRequest() {
  var pageNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return function _callee(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: types.GET_BLOGS_REQUEST,
              payload: null
            });
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_api["default"].get("/blogs?page=".concat(pageNum, "&limit=").concat(limit)));

          case 4:
            res = _context.sent;
            dispatch({
              type: types.GET_BLOGS_SUCCESS,
              payload: res.data.data
            });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            dispatch({
              type: types.GET_BLOGS_FAILURE,
              payload: _context.t0
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

var getSingleBlog = function getSingleBlog(blogId) {
  return function _callee2(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch({
              type: types.GET_SINGLE_BLOG_REQUEST,
              payload: null
            });
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_api["default"].get("/blogs/".concat(blogId)));

          case 4:
            res = _context2.sent;
            dispatch({
              type: types.GET_SINGLE_BLOG_REQUEST_SUCCESS,
              payload: res.data.data
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            dispatch({
              type: types.GET_SINGLE_BLOG_REQUEST_FAILURE,
              payload: _context2.t0
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

var blogActions = {
  blogsRequest: blogsRequest,
  getSingleBlog: getSingleBlog
};
exports.blogActions = blogActions;