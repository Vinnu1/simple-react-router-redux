import { combineReducers } from 'redux'
import { FETCH } from '../actions'

function postReducer(state = { items: ['no items'] }, action) {
    switch (action.type) {
        case FETCH:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}

export default combineReducers({
    posts: postReducer
})