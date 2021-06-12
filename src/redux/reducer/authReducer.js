import * as Types from "../types/Types";
const init = {
  user: {},
 
  isAuthenticated: false,
  tasks:[]
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case Types.SET_USER: {
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: Object.keys(action.payload.user).length !== 0,
        userType: action.payload.user.userType,
      };
    }
    case Types.LOGOUT: {
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: Object.keys(action.payload.user).length !== 0,
     
      };
    }
   
    default:
      return state;
  }
};

export default authReducer;
