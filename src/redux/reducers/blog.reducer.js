// import * as types from "redux/constants/blog.constants"

// const initialState={
//    blogs:[],
//    totalPagenum:1,
//    selectedBlog:null,
//    loading:false

// }
// const blogReducer=(state=initialState,action)=>{
//     const {types,payload}=action;
//     switch(types){
//         case types.GET_BLOGS_REQUEST:
//             return {...state,loading:true};
//         case types.GET_BLOGS_SUCCESS:
//             return {...state,blogs:payload.blogs,
//             totalPageNum:payload.totalPages,
//                 isLoading:false,
//         }

//         default:
//             return state;
//     }
// }
// export default blogReducer;