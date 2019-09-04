import axios from 'axios';

// assuming localStorage is used to hold our token
export default (token = localStorage.getItem('AuthToken')) => axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/`,
  headers: { Authorization: token }
});