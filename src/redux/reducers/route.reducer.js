import * as types from "redux/constants/routes.constants"

const initialState={
  redirectTo:null

}
const routeReducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        default:
            return state;
    }
}
export default routeReducer;