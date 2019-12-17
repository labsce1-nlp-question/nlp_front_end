import React, { useEffect } from "react";

import MarkdownEditor from "../components/MarkdownEditor/MarkdownEditor.js";
import Modal from "../components/Modal.js";
import QuestionResults from "../components/QuestionResults.js";
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
//             <h2>Question Results:</h2>
//             <QuestionResults results={this.state.results}/>
//           </div>
//           <Note notes={this.state.notes} inputHandler={this.inputHandler}/>
//         </div>
//       </div>
//     );
//   };
// };

const NotePageView = ({ state, dispatch, signOut, match, toggleModal }) => {
  const { currentNote, fetchingData } = state;
  const [note, handleNote, setNote] = useInput({
    notes: "",
    title: "",
    isShowResults: false
  });
  const updateNote = value => {
    const newNote = {...note, notes: value };

    handleNote(newNote);
    updateUserNote(dispatch, currentNote.id, newNote, signOut);
  };

  const updateTitle = value => {
    handleNote({...note, title: value});
    updateUserNote(dispatch, currentNote.id, note, signOut);
  }

  useEffect(() => {
    console.log("running useEffect user note page")
    if(currentNote.notes){
      const notes = currentNote.notes, 
        title = currentNote.title ? currentNote.title : "No Title";

      setNote({notes, title});
    } else {
      getUserNote(match.params.id, dispatch, signOut);
    }
  },[signOut, dispatch, match.params.id, currentNote.notes, currentNote.title, setNote]);
  return(
    <div className="note-view-wrapper">
      {fetchingData ? <div className="loading-spinner">Loading...</div> : null}
      <h1 className="note-view-header">Question: {currentNote.question}</h1>
      <div className="note-wrapper">
        <label className="title-input">
          Title
          <input type="text" value={note.title} onChange={e => updateTitle(e.target.value)}/>
        </label>
        <button className="show-results-btn" onClick={() => setNote({...note, isShowResults: true})}>Question Results</button>
        <label className="note-input">Note</label>
        <MarkdownEditor initalValue={note.notes} onChange={updateNote} initalPreview={true}/>
        <Modal showModal={note.isShowResults} toggleModal={() => setNote({...note, isShowResults: false})} headerVal="Results">
          {currentNote.bot_response ? <QuestionResults data={{results: currentNote.bot_response.match}}/> : null}
        </Modal>
      </div>
    </div>
  );
};

export default NotePageView;