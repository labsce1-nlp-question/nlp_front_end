import React from 'react';

// ------class component------
// class TkSearch extends React.Component {
//   state = {
//     question: ''
//   };

//   inputHandler = e => {
//     this.setState({ question: e.target.value })
//   };

//   render(){
//     return(
//       <form className="search-form" onSubmit={e => this.props.sendQuestion(e, this.state.question)}>
//         <input 
//           type='text' 
//           name='search'
//           value={this.state.question}
//           onChange={this.inputHandler}
//           placeholder='Ask me a question'
//         />
//       </form>
//     );
//   };
// };

const TkSearch = ({ question, handleQuestion, sendQuestion }) => {
  return(
    <form className="search-form" onSubmit={() => sendQuestion()}>
      <input 
        type='text' 
        name='search'
        value={question}
        onChange={handleQuestion}
        placeholder='Ask me a question'
      />
    </form>
  );
};

export default TkSearch;