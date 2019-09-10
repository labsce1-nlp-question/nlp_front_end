import React from 'react';
import Axios from '../helpers/axiosConfig.js'
import QuestionResults from '../components/QuestionResults';

class Notesview extends React.Component {
  state = {
    question: '',
    results: [],
    notes: ''
  };

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
        .catch(err => console.log(err.response));
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
        <h1>{this.state.question}</h1>
        <textarea name="notes" row="30" col="30" value={this.state.notes} spellCheck="true"/>
        <QuestionResults results={this.state.results} />
      </div>
    );
  };
};

export default Notesview;