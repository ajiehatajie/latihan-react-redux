import * as C from '../constants/index'
import Api from '../utils/Api'



export function loadUserSuccess(payload) {
    return {type: C.LOAD_USERS_SUCCESS, payload};
  }

 export function fetchUser() {

    return function(dispatch) {
        return  Api.getData().then(data => {
               dispatch(loadUserSuccess(data))
        }).catch(error => {
          throw(error);
        })

      }
   
}


export default fetchUser