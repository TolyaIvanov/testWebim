import {
	login,
} from "./actionCreator";

import {
	fetchFriends
} from "./friends";

const VK = window.VK;

export const loginUser = () => dispatch => {
	VK.Auth.login(function (response) {
		if (response.status === 'connected') {
			dispatch(login(response.session));
			localStorage.setItem('token', response.session.mid);   // put mid to localStorage token

			dispatch(fetchFriends());
		}
	});
};

export const logout = () => dispatch => {
	VK.Auth.logout();
	dispatch(login({}));
	localStorage.removeItem('token');
};
