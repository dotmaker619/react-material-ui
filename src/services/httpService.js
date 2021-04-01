import axios from 'axios';
import config from '../config/config';
import * as storageService from './storageService';
export const httpService = {
    get,
    post,
    put,
    deleteDetail
};
function get(apiEndpoint, token){
    token = storageService.getStorage('token');
    return axios.get(config.baseUrl+apiEndpoint, {headers:{
      'authorization': token
    }}).then((response)=>{
       return response;
    }).catch((err)=>{
      return err.response;
      //  console.log(err);
    })
}

function post(apiEndpoint, payload, token){
  console.log(payload);
  token = storageService.getStorage('token');
    return axios.post(config.baseUrl+apiEndpoint, payload, {headers:{
      'authorization': token
    }}).then((response)=>{
        return response;
    }).catch((err)=>{
        return err.response;
        // console.log(err);
    })
}
function put(apiEndpoint, payload, token){
  token = storageService.getStorage('token');
    return axios.put(config.baseUrl+apiEndpoint, payload, {headers:{
      'authorization': token
    }}).then((response)=>{
        return response;
    }).catch((err)=>{
      return err.response;
      // console.log(err);
    })
}
function deleteDetail(apiEndpoint, token){
  token = storageService.getStorage('token');
    return axios.delete(config.baseUrl+apiEndpoint, {headers:{
      'authorization': token
    }}).then((response)=>{
        return response;
    }).catch((err)=>{
      return err.response;
        // console.log(err);
    })
}