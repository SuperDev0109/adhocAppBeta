import api from '../utils/api';
import { AUTH_ERROR } from './types';
import axios from 'axios';

//set Auth token
export const getAuthToken = () => async dispatch => {
    try {


        var config = {
            mode: 'no-cors',
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': '*',
              "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
              }
            }
            
          
          let data = {
            apiLogin: "b23027da-b22"
           }

            // const rawResponse = await fetch('https://api-eu.iiko.services/api/1/access_token', {
            //   method: 'POST',
            //   mode: 'no-cors', // no-cors, *cors, same-origin
            //   headers: {
            //     'Content-Type': 'application/json'
            //   },
            //   body: {
            //     "apiLogin": "b23027da-b22"
            //     }
            // });
            // const content = await rawResponse.json();
          
            // console.log(content);

        //    fetch('https://api-eu.iiko.services/api/1/access_token', {
        //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //     mode: 'no-cors', // no-cors, *cors, same-origin
        //     // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: 'same-origin', // include, *same-origin, omit
        //     headers: {
        //         // 'Accept': 'application/json',
        //         'Content-Type': 'sdf'
        //     },
        //     // redirect: 'follow', // manual, *follow, error
        //     // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //     body: data // body data type must match "Content-Type" header
        //   })
        //     .then(response => response.json())
        //     .then(data => console.log(data));                                     
          
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


        const res = axios({
            method: 'post',
            mode: 'no-cors',
            url: 'https://api-eu.iiko.services/api/1/access_token',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
              },
            // withCredentials: false,
            data: data
          })
          .then(function(response) {
            // console.log("response", JSON.stringify(response.data))
          })
          .catch(function(error) {
            // console.log("error", error)
          })
        
    } catch (err) {
        console.log(err);
    }
}