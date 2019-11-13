import { 
  FETCHING_USER_HISTORY,
  SUCCESS_USER_HISTORY,
  FAILURE_USER_HISTORY,
  FETCHING_USER_NOTE,
  SUCCESS_USER_NOTE,
  FAILURE_USER_NOTE,
  FETCHING_USER_NOTES,
  SUCCESS_USER_NOTES,
  FAILURE_USER_NOTES,
  UPDATING_USER_NOTE,
  UPDATED_USER_NOTE,
  FAILURE_UPDATING_USER_NOTE,
} from '../actions/index.js';

export const userHistoryState = {
  userHistory:[],
  notes:[],
  currentNote:{},
  fetchingData: false
};

export const userHistoryReducer = (state, action) => {

  switch(action.type){
    case FETCHING_USER_HISTORY:
      return {
        ...state,
        fetchingData: true
      };
    
    case SUCCESS_USER_HISTORY:
      return {
        ...state,
        fetchingData: false,
        userHistory: action.payload
      };

    case FAILURE_USER_HISTORY:
      return {
        ...state,
        fetchingData: false
      };
    
    case FETCHING_USER_NOTE:
      return {
        ...state,
        fetchingData: true
      };
    
    case SUCCESS_USER_NOTE:
      return {
        ...state,
        currentNote: action.payload,
        fetchingData: false
      };
    
    case FAILURE_USER_NOTE:
      return {
        ...state,
        fetchingData: false
      };
    
    case FETCHING_USER_NOTES:
        return {
          ...state,
          fetchingData: true
        };
  
    case SUCCESS_USER_NOTES:
      return {
        ...state,
        notes: action.payload,
        fetchingData: false
      };
    
    case FAILURE_USER_NOTES:
      return {
        ...state,
        fetchingData: false
      };
    
    case UPDATING_USER_NOTE: 
      return {
        ...state,
        currentNote: action.payload
      };
    
    case UPDATED_USER_NOTE:
      return {
        ...state,
        currentNote: action.payload,
        userHistory: state.userHistory.map( history => history.id === action.payload.id ? action.payload : history)
      };
      
    default:
      return state;
  }
};