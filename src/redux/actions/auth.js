import axios from 'axios';

import ActionTypes from './actionTypes';

export function Signin(user) {
  return dispatch => dispatch({ type: ActionTypes.signin, payload: user })
}

export function Signup(user) {
  console.log(user)
}

export function Logout() {
  return dispatch => dispatch({ type: ActionTypes.logout })
}

// export function SignupUser(user){
//     console.log(user)
//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//     .then(function(result){
//         console.log(result)
//         history.push('/login')
//     })
//     .catch(function(error) {
//         console.log(error)
//       });
//     return dispatch => dispatch({type: ActionTypes.SignupUser, payload: user})
// }
