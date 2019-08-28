
const SlackLogin = props => {
  if(props.location.search && !localStorage.getItem('id')){
    const str = props.location.search.substring(1);
    localStorage.setItem('id', str);
    console.log(props);
  }
  props.history.push('/');

  return null;
};

export default SlackLogin;