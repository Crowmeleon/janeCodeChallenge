import { FETCH_NOTES, POST_NOTES, DELETE_NOTE } from './types';
import axios from 'axios';

export const fetchNotes = () =>
    async dispatch => {
        const res = await axios.get('/api/notes');
        dispatch({type: FETCH_NOTES, payload: res.data});
    };

export const postNote = (note, redirect) =>
    async dispatch => {
        const res = await axios.post('/api/add/note', note);
        dispatch({type: POST_NOTES, payload: res.data});
        redirect();
    };

    export const deleteNote = (id) => 
        async dispatch => {
            const res = await axios.delete(`/api/delete/note/${id}`);
            dispatch({type: DELETE_NOTE, payload: res.data.id});
        }