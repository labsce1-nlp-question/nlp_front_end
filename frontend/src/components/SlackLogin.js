// This component is used for the Slack Login redirect. This component takes the data sent from the slack redirect and stores it in local storage
// to be used for accessing that user's data in the backend database
const SlackLogin = props => {
  if(props.location.search && !localStorage.getItem('AuthToken')){
    // removes the first 2 characters in the query string
    const str = props.location.search.substring(1);
    localStorage.setItem('AuthToken', str);
  }
  props.history.push('/');

  return null;
};

export default SlackLogin;