import {FETCH_NOTES, POST_NOTES, DELETE_NOTE} from '../actions/types';
import _ from 'lodash';

export default function(state = [], action){
    let { payload } = action;
    
    switch(action.type){
        case FETCH_NOTES:
            return payload;
        case POST_NOTES:
            let newState = state;
            newState.push(payload);
            return newState;
        case DELETE_NOTE: 
        console.log(payload);
        console.log(payload);
            return state.filter(note => note._id !== payload);
        default: 
            return state;
    }
}