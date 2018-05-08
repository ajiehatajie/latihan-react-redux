import * as C from '../constants/index'


const postReducer = (state = [],action ) => {
    
    switch (action.type) {
        case C.FETCH_POSTS:
              return action.payload
              break;
        default:
            return state;

    }
}


export default postReducer