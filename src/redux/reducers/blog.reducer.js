import * as types from "redux/constants/blog.constants";

const initialState = {
  blogs: [],
  totalPagenum: 1,
  selectedBlog: {},
  loading: false
};
const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.POST_REVIEW_REQUEST:
      return { ...state, loading: true };
    case types.POST_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedBlog: {
          ...state.selectedBlog,
          reviews: [...state.selectedBlog.reviews, payload]
        }
      };
    case types.POST_REVIEW_FAILURE:
      return { ...state, loading: false };
    case types.GET_SINGLE_BLOG_REQUEST:
      return { ...state, loading: true };
    case types.GET_SINGLE_BLOG_REQUEST_SUCCESS:
      return { ...state, selectedBlog: payload, loading: false };
    case types.GET_SINGLE_BLOG_REQUEST_FAILURE:
      return { ...state, loading: false };
    case types.GET_BLOGS_REQUEST:
      return { ...state, loading: true };
    case types.GET_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: payload.blogs,
        totalPageNum: payload.totalPages,
        loading: false
      };
    case types.GET_BLOGS_FAILURE:
      return { ...state, loading: false };
    case types.REACTION_REQUEST:
      return { ...state, loading: true };
    case types.REACTION_FAILURE:
      return { ...state, loading: false };
    case types.BLOG_REACTION_SUCCESS:
      return {
        ...state,
        selectedBlog: { ...state.selectedBlog, reactions: payload },
        submitLoading: false
      };
    case types.REVIEW_REACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedBlog: {
          ...state.selectedBlog,
          reviews: [
            ...state.selectedBlog.reviews.map((review) => {
              if (review.id !== payload.reviewId) return review;
              return { ...review, reactions: payload.reactions };
            })
          ]
        }
      };

    default:
      return state;
  }
};
export default blogReducer;
