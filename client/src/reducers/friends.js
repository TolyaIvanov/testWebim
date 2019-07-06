import {
	SHOW_FRIENDS
} from "../constants/defaultConstants";

const initialState = [];

export const friends = (state = initialState, {type, list}) => {
	switch (type) {
		case SHOW_FRIENDS:
			return list;
		default:
			return state;
	}
};
