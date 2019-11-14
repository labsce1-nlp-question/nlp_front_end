import React, { useEffect } from "react";

import Note from "../components/Note.js";
import QuestionResults from "../components/QuestionResults";
import { getUserNote, updateUserNote } from '../store/actions/index.js';
import { useInput } from "../helpers/hooks/useInput.js";

// class Noteview extends React.Component {
//   state = {
//     question: "",
//     results: [],
//     notes: ""
//   };
  
//   inputHandler = e => {
//     this.setState({ [e.target.name]: e.target.value }, () => {
//       this.updateUserNote();
//     });
//   }

//   // Send user note to be added to database
//   updateUserNote = () => {
//     const id = this.props.match.params.id;
//     const notes = { notes: this.state.notes };

//     Axios() 
//       .put(`/history/update-note/${id}`, notes)
//       .then(res => console.log(res.data))
//       .catch(err => console.log(err.response));
//   }

//   componentDidMount(){
//     // check if state was passed via React Router Link component otherwise fetch data from Database
//     if(!this.props.location.state){
//       Axios()
//         .get(`/history/${this.props.match.params.id}`)
//         .then(res => 
//           this.setState({
//             question: res.data.question,
//             results: res.data.bot_response.match,
//             notes: res.data.notes ? res.data.notes : ""
//           })
//         )
//         .catch(err => {
//           if(err.response.status === 401){
//             this.props.signOut();
//             alert(err.response.data.message);
//           }
//           console.log(err.response)
//         });
//     } else {
//       this.setState({ 
//         question: this.props.location.state.note.question,
//         results: this.props.location.state.note.bot_response.match,
//         notes: this.props.location.state.note.notes ? this.props.location.state.note.notes : ""
//       });
//     }
//   };

//   render(){
//     return(
//       <div className="note-view-wrapper">
//         <h1>
//           Question:
//           <br/>
//           {this.state.question}
//         </h1>
//         <div className="note-wrapper">
//           <div className="results">
//             <h3>Question Results:</h3>
//             <QuestionResults results={this.state.results}/>
//           </div>
//           <Note notes={this.state.notes} inputHandler={this.inputHandler}/>
//         </div>
//       </div>
//     );
//   };
// };

const NotePageView = ({ state, dispatch, signOut, match }) => {
  const { currentNote, fetchingData } = state;
  const [note, handleNote, setNote] = useInput("");

  const updateNote = e => {
    const newNote = { title: currentNote.title, notes: e.target.value };

    handleNote(e.target.value);
    updateUserNote(dispatch, currentNote.id, newNote, signOut);
  };

  useEffect(() => {
    console.log("running useEffect user note page")
    if(currentNote.notes){
      console.log("Getting data from store")
      setNote(currentNote.notes);
    } else {
      console.log("fetching data")
      getUserNote(match.params.id, dispatch, signOut);
    }
  },[signOut, dispatch, match.params.id, currentNote.notes, setNote]);

  return(
    <div className="note-view-wrapper">
      {fetchingData ? <div className="loading-spinner">Loading...</div> : null}
      <h1>
        Question:
        <br/>
        {currentNote.question}
      </h1>
      <div className="note-wrapper">
        <div className="results">
          <h3>Question Results:</h3>
          {currentNote.bot_response ? <QuestionResults results={currentNote.bot_response.match}/> : null}
        </div>
        <Note note={note} updateNote={updateNote}/>
      </div>
    </div>
  );
};

export default NotePageView;