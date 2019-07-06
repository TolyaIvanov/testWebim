import {
	friends
} from "./actionCreator";

const VK = window.VK;

export const fetchFriends = () => dispatch => {
	VK.Api.call('friends.get', {
		count: 5,
		order: 'random',
		fields: ['nickname', 'photo_100', 'domain'],
		v: "5.73"
	}, (data) => {
		dispatch(friends(data.response.items));
	});
};
