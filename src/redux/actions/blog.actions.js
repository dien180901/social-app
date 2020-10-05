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
import * as types from "redux/constants/blog.constants";
import api from "../reducers/api";
import { toast } from "react-toastify";
import { connect } from "react-redux";

const blogsRequest = (pageNum = 1, limit = 10) => async (dispatch) => {
  dispatch({ type: types.GET_BLOGS_REQUEST, payload: null });
  try {
    const res = await api.get(`/blogs?page=${pageNum}&limit=${limit}`);
    dispatch({ type: types.GET_BLOGS_SUCCESS, payload: res.data.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.GET_BLOGS_FAILURE, payload: error });
  }
};

const getSingleBlog = (blogId) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_BLOG_REQUEST, payload: null });
  try {
    const res = await api.get(`/blogs/${blogId}`);
    dispatch({
      type: types.GET_SINGLE_BLOG_REQUEST_SUCCESS,
      payload: res.data.data
    });
  } catch (error) {
    dispatch({ type: types.GET_SINGLE_BLOG_REQUEST_FAILURE, payload: error });
  }
};

const createReview = (blogId, content) => async (dispatch) => {
  dispatch({ type: types.POST_REVIEW_REQUEST, payload: null });
  try {
    const res = await api.post(`reviews/blogs/${blogId}`, { content: content });
    dispatch({
      type: types.POST_REVIEW_SUCCESS,
      payload: res.data.data
    });
  } catch (err) {
    console.log(err.messages);
    dispatch({ type: types.POST_REVIEW_FAILURE, payload: err });
  }
};
const sendReaction = (targetType, targetId, emoji) => async (dispatch) => {
  dispatch({ type: types.REACTION_REQUEST, payload: null });
  try {
    const res = await api.post(`/reactions`, { targetType, targetId, emoji });
    if (targetType === "Blog") {
      dispatch({
        type: types.BLOG_REACTION_SUCCESS,
        payload: res.data.data
      });
    } else if (targetType === "Review") {
      dispatch({
        type: types.REVIEW_REACTION_SUCCESS,
        payload: res.data.data
      });
      console.log("Reaction-data", res.data);
    }
  } catch (err) {
    console.log("err", err);
    dispatch({ type: types.REACTION_FAILURE, payload: err });
  }
};

export const blogActions = {
  blogsRequest,
  getSingleBlog,
  createReview,
  sendReaction
};
