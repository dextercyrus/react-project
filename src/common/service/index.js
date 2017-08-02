import Rx from 'rxjs';
import api from './api';


let defaultOption = {
    baseUrl:"",
    request:{
        method:"POST",
        headers:{"Content-Type":"application/json","script-charset":"utf-8"}
    },
    response:{
        type:"json"
    }
}

let runMiddles = middle =>{

}