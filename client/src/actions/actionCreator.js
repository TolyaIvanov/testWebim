import {
	SHOW_FRIENDS,
	LOGIN_VK
} from "../constants/defaultConstants";

export const login = (data) => ({
	type: LOGIN_VK,
	data
});

export const friends = (list) => ({
	type: SHOW_FRIENDS,
	list
});
