// import * as type from "redux/constants/auth.constants"
// import api from "redux/api"
// import {toast} from "react-toastify"

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