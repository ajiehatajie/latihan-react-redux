import * as C from '../constants/index'
import axios from 'axios'

class Api {

        async fetchuser() {
            try {
                let res = await axios.get(C.API_URL + 'users')
                //console.log(res)
                return res.data
            }catch(e){
                console.log(e)
            }
        }

         getData() {
        
            const request = new Request(`${C.API_URL}users`, {
              method: 'GET'
            });
        
            return fetch(request).then(response => {
              return response.json()
            }).catch(error => {
              return error
            })

          }


}


export default ( 
    new Api()
)