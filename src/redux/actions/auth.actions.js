import { routeActions } from "redux/actions/route.actions";
import * as types from "redux/constants/auth.constants";
import api from "../reducers/api";
import { toast } from "react-toastify";
const register = (name, email, password, avatarUrl) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post("/users", { name, email, password, avatarUrl });
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
    dispatch(routeActions.redirect("/login"));
    toast.success(`Thank you for your registration, ${name}!`);
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};
const loginRequest = (email, password) => async (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST, payload: null });
    try {
      const res = await api.post("/auth/login", { email, password });
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
      const name = res.data.data.user.name;
      toast.success(`Welcome ${name}`);
    } catch (error) {
      console.log(error);
      dispatch({ type: types.LOGIN_FAILURE, payload: error });
    }
  };
  const logout = () => (dispatch) => {
    delete api.defaults.headers.common["authorization"];
    localStorage.setItem("accessToken", "");
    dispatch({ type: types.LOGOUT, payload: null });
  };
  
export const authActions = {
  register,
  loginRequest,
  logout,
};