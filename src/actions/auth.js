import api from '../utils/api';
import { AUTH_ERROR } from './types';

//set Auth token
export const getAuthToken = () => async dispatch => {
    try {
        const res = await api.post('/api/1/access_token', { apiLogin: 'b23027da-b22' });
    } catch (err) {
        console.log(err);
    }
}