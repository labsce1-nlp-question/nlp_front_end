import React from 'react';
import QuestionResults from '../components/QuestionResults';

class Notesview extends React.Component {
  state = {
    question: this.props.location.state.history.question,
    results: this.props.location.state.history.bot_response,
    notes: this.props.location.state.history.notes
  };
  componentDidMount(){
    console.log(this.props.location.state.history)
    if(!this.props.location.state.history){
      this.props.history.goBack();
    }
  }
  render(){
    return(
      <div className="notes-view-wrapper">
        <h1>{this.state.question}</h1>
        <textarea name="notes" row="30" col="30" value={this.state.notes} spellCheck="true"/>
        <QuestionResults results={this.state.results} />
      </div>
    );
  };
};

export default Notesview;