
const SlackLogin = props => {
  if(props.location.search && !localStorage.getItem('AuthToken')){
    const str = props.location.search.substring(1);
    localStorage.setItem('AuthToken', str);
  }
  props.history.push('/');

  return null;
};

export default SlackLogin;