import {httpService} from './httpService';


export const supportQuestion = ({message}) => {
  return httpService.post('support/question', {message});

}