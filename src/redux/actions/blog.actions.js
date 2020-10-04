import * as types from "redux/constants/blog.constants"
import api from "../reducers/api"
import {toast} from "react-toastify"

const blogsRequest=(pageNum=1,limit)=>async(dispatch)=>{
    dispatch({type:types.GET_BLOGS_REQUEST,payload:null})
    try{
        const res=api.get(`/blogs?page=${pageNum}&limit=${limit}`)
        dispatch({type:types.GET_BLOGS_SUCCESS,payload:res.data.data})
    
    
    
    }catch(error){
        dispatch({type:types.GET_BLOGS_FAILURE,payload:error});

    }
}

const getSingleBlog = (blogId) => async (dispatch) => {
    dispatch({ type: types.GET_SINGLE_BLOG_REQUEST, payload: null });
    try {
      const res = await api.get(`/blogs/${blogId}`);
      dispatch({
        type: types.GET_SINGLE_BLOG_REQUEST_SUCCESS,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({ type: types.GET_SINGLE_BLOG_REQUEST_FAILURE, payload: error });
    }
  };
  
  export const blogActions = {
    blogsRequest,
    getSingleBlog,
  };
