import React, { useState } from 'react';
import Axios from '../helpers/axiosConfig.js';

import TkSearch from '../components/TkSearch.js';
import QuestionResults from '../components/QuestionResults.js';
import { useInput } from '../helpers/hooks/useInput.js';

// ------class component------
// class SearchPage extends React.Component {
//   state = {
//     results: [],
//     error: ''
//   };

//   sendQuestion = (e, q) => {
//     e.preventDefault();
//     const question = { question: q };

//     Axios()
//       .post('question', question)
//       .then(res => {
//         if(!res.data.message){
//           this.setState({ results: res.data, error: '' });
//         } else {
//           this.setState({ error: res.data.message });
//         }
//       })
//       .catch(err => {
//         alert(err.response.data.message);
//         if(err.response.data.message.includes("expired")){ 
//           this.props.signOut();
//         }
//       });
//   };

//   render(){
//       return (
//         <div className="main-page-wrapper">
//           <div className="search-wrapper">
//             <TkSearch sendQuestion={this.sendQuestion}/>
//             {this.state.error ? <p>{this.state.error}</p> : <QuestionResults results={this.state.results}/>}
//           </div>
//         </div>
//       );
//     }
// };

// ------functional component with hooks------

const SearchPageView = ({ signOut }) => {
  const [question, handleQuestion] = useInput("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const sendQuestion = () => {
    const q = { question };

    Axios()
      .post('question', q)
      .then(res => {
        if(!res.data.message){
          setResults(res.data);
          setError("");
        } else {
          setError(res.data.message);
        }
      })
      .catch(err => {
        alert(err.response.data.message);
        if(err.response.data.message.includes("expired")){ 
          signOut();
        }
      });
  }

  return (
    <div className="main-page-wrapper">
      <div className="search-wrapper">
        <TkSearch question={question} handleQuestion={handleQuestion} sendQuestion={sendQuestion}/>
        {error != "" ? <p>{error}</p> : <QuestionResults results={results}/>}
      </div>
    </div>
  );
}


export default SearchPageView;