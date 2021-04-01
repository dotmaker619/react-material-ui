import authReducer from './auth';
import mainReducer from './main';
import {combineReducers} from 'redux';

export default combineReducers({
    auth: authReducer,
    main: mainReducer
});

