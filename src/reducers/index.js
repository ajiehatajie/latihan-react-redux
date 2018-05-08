import { combineReducers } from 'redux';


import postReducer from './postReducer';
import userReducer from './userReducer';



const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer
})


export default rootReducer;