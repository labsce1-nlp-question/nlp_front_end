import { useState, useEffect } from 'react';
import Axios from '../axiosConfig.js';

export const useFetchData = (url, singOut, limit) => { 
  const [ data, setData ] = useState([]);
  const [ fetching, setFetching ] = useState(false);

  const URL = limit ? `${url}?limit=${limit}` : url;
  
  useEffect(() => {
    setFetching(true);
    console.log("Running useEffect custom hook");
    Axios()
      .get(`${URL}`)
      .then(res => {
        setData(res.data);
        setFetching(false);
      })
      .catch(err => {
        //if token has expired logout the user
        setFetching(false);
        if(err.response.status === 401){
          alert(err.response.data.message);
          singOut();
        }
        console.log(err.response)
      });
  }, [URL, singOut]);

  return [ data, fetching ];
};