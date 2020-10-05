"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authActions = void 0;

var _route = require("redux/actions/route.actions");

var types = _interopRequireWildcard(require("redux/constants/auth.constants"));

var _api = _interopRequireDefault(require("../reducers/api"));

var _reactToastify = require("react-toastify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var register = function register(name, email, password, avatarUrl) {
  return function _callee(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: types.REGISTER_REQUEST,
              payload: null
            });
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_api["default"].post("/users", {
              name: name,
              email: email,
              password: password,
              avatarUrl: avatarUrl
            }));

          case 4:
            res = _context.sent;
            dispatch({
              type: types.REGISTER_SUCCESS,
              payload: res.data.data
            });
            dispatch(_route.routeActions.redirect("/login"));

            _reactToastify.toast.success("Thank you for your registration, ".concat(name, "!"));

            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: types.REGISTER_FAILURE,
              payload: _context.t0
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 10]]);
  };
};

var loginRequest = function loginRequest(email, password) {
  return function _callee2(dispatch) {
    var res, name;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch({
              type: types.LOGIN_REQUEST,
              payload: null
            });
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_api["default"].post("/auth/login", {
              email: email,
              password: password
            }));

          case 4:
            res = _context2.sent;
            dispatch({
              type: types.LOGIN_SUCCESS,
              payload: res.data.data
            });
            name = res.data.data.user.name;

            _reactToastify.toast.success("Welcome ".concat(name));

            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            dispatch({
              type: types.LOGIN_FAILURE,
              payload: _context2.t0
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 10]]);
  };
};

var logout = function logout() {
  return function (dispatch) {
    delete _api["default"].defaults.headers.common["authorization"];
    localStorage.setItem("accessToken", "");
    dispatch({
      type: types.LOGOUT,
      payload: null
    });
  };
};

var getCurrentUser = function getCurrentUser(accessToken) {
  return function _callee3(dispatch) {
    var bearerToken, res;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch({
              type: types.GET_CURRENT_USER_REQUEST,
              payload: null
            });

            if (accessToken) {
              bearerToken = "Bearer " + accessToken;
              _api["default"].defaults.headers.common["authorization"] = bearerToken;
            }

            _context3.prev = 2;
            _context3.next = 5;
            return regeneratorRuntime.awrap(_api["default"].get("/users/me"));

          case 5:
            res = _context3.sent;
            dispatch({
              type: types.GET_CURRENT_USER_SUCCESS,
              payload: res.data.data
            });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](2);
            dispatch({
              type: types.GET_CURRENT_USER_FAILURE,
              payload: _context3.t0
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[2, 9]]);
  };
};

var authActions = {
  register: register,
  loginRequest: loginRequest,
  logout: logout,
  getCurrentUser: getCurrentUser
};
exports.authActions = authActions;