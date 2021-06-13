import * as Types from "../types/Types";
const init = {
  allShareNotes: [],
  
  uniqueSharedNotes:[],
  sharedCounts:null,
  
  singleShareNote:{},
  sharedUserCount:null,
   sharedUsers:[]
  
};

const shareReducer = (state = init, action) => {
    switch (action.type) {
      case Types.SHARE_NOTE: {
        return {
         ...state,
        singleShareNote:action.payload.shareNote
        };
      }
      case Types.GET_SHARED_NOTES: {
        return {
         ...state,
        allShareNotes:action.payload.sharedNotes.models,
        sharedCounts:action.payload.sharedNotes.count
        };
      }
      case Types.UNIQUE_SHARED_NOTES: {
        return {
         ...state,
         uniqueSharedNotes:action.payload.uniqueSharedNotes
        
        };
      }
      case Types.GET_SHARED_USERS: {
        return {
         ...state,
        allShareUsers:action.payload.sharedUser.models,
        sharedUserCounts:action.payload.sharedUser.count
        };
      }
      case Types.CLEAR_SHARE: {
        return {
        
         allShareNotes: [],
  
         sharedCounts:null,
         
         singleShareNote:{},
         sharedUserCount:null,
          sharedUsers:[]
        };
      }
      default:
        return state;
    }
  };
  
  
  export default shareReducer;