import React from 'react';
import Axios from '../helpers/axiosConfig.js'
import QuestionResults from '../components/QuestionResults';

class Notesview extends React.Component {
  state = {
    question: '',
    results: [],
    notes: '',
    isDisplayNotes: false
  };
  
  inputHandler = () => {

  }

  // Send user note to be added to database
  updateUserNote = () => {

  }

  componentDidMount(){
    // check if state was passed via React Router Link component otherwise fetch data from Database
    if(!this.props.location.state){
      Axios()
        .get(`/history/${this.props.match.params.id}`)
        .then(res => 
          this.setState({
            question: res.data.question,
            results: res.data.bot_response,
            notes: res.data.notes
          })
        )
        .catch(err => {
          if(err.response.status === 401){
            this.props.signOut();
            alert(err.response.data.message);
          }
          console.log(err.response)
        });
    } else {
      this.setState({ 
        question: this.props.location.state.history.question,
        results: this.props.location.state.history.bot_response,
        notes: this.props.location.state.history.notes 
      });
    }
  };

  render(){
    return(
      <div className="notes-view-wrapper">
        <h1>
          Question:
          <br/>
          {this.state.question}
        </h1>
        <div className="notes-wrapper">
          <div className="results">
            <h3>Question Results:</h3>
            <QuestionResults results={this.state.results}/>
          </div>
          <div className="notes">
            <h3>Notes</h3>
            <textarea name="notes" row="30" col="50" value={this.state.notes} spellCheck="true"/>
          </div>
        </div>
      </div>
    );
  };
};

export default Notesview;