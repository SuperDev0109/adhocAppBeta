import api from '../utils/api';
import { AUTH_ERROR } from './types';
import axios from 'axios';

//set Auth token
export const getAuthToken = () => async dispatch => {
    try {
        const res = await api.post('/api/1/access_token', {apiLogin: "b23027da-b22"});
        // axios.post('https://api-eu.iiko.services/api/1/access_token', {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        //   })


        // const res = axios({
        //     method: 'post',
        //     url: 'https://api-eu.iiko.services/api/1/access_token',
        //     headers: {
        //         'Content-Type': 'application/json',
        //       },
        //   })
        //   .then(function(response) {
        //     console.log("response", JSON.stringify(response.data))
        //   })
        //   .catch(function(error) {
        //     console.log("error", error)
        //   })
        
    } catch (err) {
        console.log(err);
    }
}