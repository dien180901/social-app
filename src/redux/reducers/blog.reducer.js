import * as types from "redux/constants/blog.constants";

const initialState = {
  blogs: [],
  totalPagenum: 1,
  selectedBlog: null,
  loading: false,
};
const blogReducer = (state = initialState, action) => {
  const { types, payload } = action;
  switch (types) {
    case types.GET_BLOGS_REQUEST:
      return { ...state, loading: true };
    case types.GET_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: payload.blogs,
        totalPageNum: payload.totalPages,
        isLoading: false,
      };
    case types.GET_SINGLE_BLOG_REQUEST:
      return { ...state, loading: true };
    case types.GET_SINGLE_BLOG_REQUEST_SUCCESS:
      return { ...state, selectedBlog: payload, loading: false };
    case types.GET_SINGLE_BLOG_REQUEST_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};
export default blogReducer;
