import Axios from "../../helpers/axiosConfig.js";

export const FETCHING_USER_HISTORY = "FETCHING_USER_HISTORY";
export const SUCCESS_USER_HISTORY = "SUCCESS_USER_HISTORY";
export const FAILURE_USER_HISTORY = "FAILURE_USER_HISTORY";

export const FETCHING_USER_NOTES = "FETCHING_USER_NOTES";
export const SUCCESS_USER_NOTES = "SUCCESS_USER_NOTES";
export const FAILURE_USER_NOTES = "FAILURE_USER_NOTES";

export const UPDATING_USER_NOTE = "UPDATING_USER_NOTE";
export const UPDATED_USER_NOTE = "UPDATED_USER_NOTE";
export const FAILURE_UPDATING_USER_NOTE = "FAILURE_UPDATING_USER_NOTE";

export const FETCHING_USER_NOTE = "FETCHING_USER_NOTE";
export const SUCCESS_USER_NOTE = "SUCCESS_USER_NOTE"; 
export const FAILURE_USER_NOTE = "FAILURE_USER_NOTE";

export const DELETED_USER_HISTORY = "DELETED_USER_HISTORY";
export const FAILURE_DELETING_USER_HISTORY = "FAILURE_DELETING_USER_HISTORY";

export const getUserSearchHistory = (dispatch, limit, signOut) => {
  dispatch({ type: FETCHING_USER_HISTORY });
  Axios()
    .get(`/history?limit=${limit}`)
    .then(res => dispatch({ type: SUCCESS_USER_HISTORY, payload: res.data }))
    .catch(err => {
      //if token has expired logout the user
      dispatch({ type: FAILURE_USER_HISTORY });
      if(err.response.status === 401){
        alert(err.response.data.message);
        signOut();
      }
      console.log(err.response)
    });
};

export const getUserNote = (note_id, dispatch, signOut) => {
  dispatch({ type: FETCHING_USER_NOTE });
  return(
    Axios()
    .get(`/history/${note_id}`)
    .then(res => {
      dispatch({ type: SUCCESS_USER_NOTE, payload: res.data })
      return res.data;
    })
    .catch(err => {
      dispatch({ type: FAILURE_USER_NOTE });
      if(err.response.status === 401){
        signOut();
        alert(err.response.data.message);
      }
      console.log(err.response)
    })
  )
};

export const getUserNotes = (dispatch, signOut) => {
  dispatch({ type: FETCHING_USER_NOTES });
  Axios()
    .get("/history/notes")
    .then(res => dispatch({ type: SUCCESS_USER_NOTES, payload: res.data }))
    .catch(err => {
      //if token has expired logout the user
      dispatch({ type: FAILURE_USER_NOTES });
      if(err.response.status === 401){
        alert(err.response.data.message);
        signOut();
      }
      console.log(err.response)
    });
};

export const updateUserNote = (dispatch, id, newNote, signOut) => {
  console.log("update user note: ", newNote)
  Axios()
    .put(`/history/update-note/${id}`, newNote)
    .then(res => {
      dispatch({ type: UPDATED_USER_NOTE, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FAILURE_UPDATING_USER_NOTE });
      if(err.response.status === 401){
        alert(err.response.data.message);
        signOut();
      }
      console.log(err.response)
    })
};

export const deleteUserHistory = (dispatch, id, signOut) => {
  Axios()
    .delete(`/history/${id}`)
    .then(res => {
      dispatch({ type: DELETED_USER_HISTORY, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAILURE_DELETING_USER_HISTORY });
      if(err.response.status === 401){
        alert(err.response.data.message);
        signOut();
      }
      console.log(err.response)
    })
}
