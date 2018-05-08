import * as C from '../constants/index'


const  userReducer  = (state = [],action ) => {
    console.log(action)


    switch (action.type) {
        case C.FETCH_USERS:
              return action.payload
              break;
        case C.LOAD_USERS_SUCCESS:
              return action.payload
              break;
        default:
            return state;

    }
}


export default userReducer