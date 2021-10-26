
const LoggedReducer = (state = false,action)=>{
    if(action.type === "SIGNIN"){
        return !state;
    }
    else{
        return state;
    }
}

export default LoggedReducer;