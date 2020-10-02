import * as types from "redux/constants/auth.constants"

const initialState={
    user:{},
    isAuthenticated:false,
    loading:false

}
const authReducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        default:
            return state;
    }
}
export default authReducer;