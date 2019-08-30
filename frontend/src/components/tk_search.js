import React from 'react';

class Tk_Search extends React.Component {
  state = {
    question: ''
  };

  inputHandler = e => {
    this.setState({ question: e.target.value })
  };

  render(){
    return(
      <form onSubmit={e => this.props.sendQuestion(e, this.state.question)}>
        <input 
          type='text' 
          name='search'
          value={this.state.question}
          onChange={this.inputHandler}
          placeholder='Ask me a question'
        />
      </form>
    );
  };
};

export default Tk_Search;