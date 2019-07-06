import {combineReducers} from 'redux';

import {
	login
} from "./login";

import {
	friends
} from "./friends";

export default combineReducers({
	login,
	friends,
})
