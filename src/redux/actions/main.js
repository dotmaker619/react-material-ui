

import ActionTypes from './actionTypes';

export function MiniActive(active) {
  return dispatch => dispatch({type: ActionTypes.miniActive, payload: active})
}

export function AddUser(user) {
  return dispatch => dispatch({type: ActionTypes.addUser, payload: user})
}

export function DeleteUser(login) {
  console.log(login, '88888');
  return dispatch => dispatch({type: ActionTypes.deleteUser, payload: login})
}

export function ShowSetting(show) {
  return dispatch => dispatch({type: ActionTypes.showSetting, payload: show})
}

export function RegisterDetail(expanded) {
  return dispatch => dispatch({type: ActionTypes.registerDetail, payload: expanded})
}
