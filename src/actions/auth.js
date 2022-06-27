import api from '../utils/api';
import { AUTH_ERROR } from './types';
import axios from 'axios';

//set Auth token
export const getAuthToken = () => async dispatch => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "apiLogin": "b23027da-b22"
        });
        
        var requestOptions = {
          method: 'POST',
          mode: 'no-cors',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://api-eu.iiko.services/api/1/access_token", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
               
            
            

          
        //    fetch('https://api-eu.iiko.services/api/1/access_token', data, config)
        //      .then((res) => {
        //         console.log(res)
        //        })
        //       .catch((err) => {
        //         console.log(err)
        //      });

        // const headers = {
        //     'Content-Type': 'application/json',
        //     "Access-Control-Allow-Headers": "*",
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "*",
        //     'Authorization': 'JWT fefege...'
        //   }

        //   const data = {
        //     "apiLogin": "b23027da-b22"
        //   }
          
        //   api.post('/1/access_token', data, {
        //       headers: headers
        //     })
        //     .then((response) => {
        //     //   dispatch({
        //     //     type: FOUND_USER,
        //     //     data: response.data[0]
        //     //   })
        //     })
        //     .catch((error) => {
        //     //   dispatch({
        //     //     type: ERROR_FINDING_USER
        //     //   })
        //     })

        // const res = await api.post('/1/access_token', {apiLogin: "b23027da-b22"});
        // axios.post('https://api-eu.iiko.services/api/1/access_token', {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        //   })


        // const res = axios({
        //     method: 'post',
        //     mode: 'no-cors',
        //     url: 'https://api-eu.iiko.services/api/1/access_token',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         "Access-Control-Allow-Origin": "*"
        //       },
        //     // withCredentials: false,
        //     data: data
        //   })
        //   .then(function(response) {
        //     // console.log("response", JSON.stringify(response.data))
        //   })
        //   .catch(function(error) {
        //     // console.log("error", error)
        //   })
        
    } catch (err) {
        console.log(err);
    }
}