import {
	LOGIN_VK
} from "../constants/defaultConstants";

const initialState = {
	expire: 0,
	mid: '',
	secret: '',
	sid: '',
	sig: '',
	user: {
		domain: '',
		first_name: '',
		href: '',
		id: '',
		last_name: '',
		nickname: ''
	}
};

export const login = (state = initialState, {type, data}) => {
	switch (type) {
		case LOGIN_VK:
			return {
				...state,
				...data
			};
		default:
			return state;
	}
};
