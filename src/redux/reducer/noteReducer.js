import * as Types from "../types/Types";
const init = {
  notes: [],
  notesCount:null,
  singleNote:{}
 
  
};

const noteReducer = (state = init, action) => {
    switch (action.type) {
      case Types.GET_NOTES: {
        return {
         ...state,
         notes:action.payload.notes.notes,
         notesCount:action.payload.notes.count
        };
      }
      case Types.GET_NOTE_DETAILS: {
        return {
         ...state,
         singleNote:action.payload.notes
        };
      }
      case Types.EDIT_NOTES: {
        return {
         ...state,
         singleNote:action.payload.notes
        };
      }
      case Types.CLEAR_NOTES: {
        return {
         ...state,
         notes:[],
         singleNote:{},
         notesCount:null,
        };
      }
     
     
      default:
        return state;
    }
  };
  
  
  export default noteReducer;