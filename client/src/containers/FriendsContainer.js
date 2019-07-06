import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import Friends from './../components/Friends';

import {
	fetchFriends
} from "../actions/friends";

class FriendsContainer extends Component {
	componentDidMount() {
		if (localStorage.token) {
			this.props.fetchFriends();
		}
	}

	render() {
		return localStorage.token ? (
			<Friends>
				{this.renderFriends()}
			</Friends>
		) : null;
	}

	renderFriends = () => {
		let list = this.props.friendsState;

		return list.map(listItem => {
			return (
				<li
					key={listItem.id}
					className={'friend-list-item'}
				>
					<a
						className={'link'}
						href={`https://vk.com/${listItem.domain}`}
						target={'_blank'}
					>
						<p className={'name'}>{listItem.first_name} {listItem.last_name}</p>
						<img src={listItem.photo_100} alt="ava"/>
					</a>
				</li>
			)
		})
	};
}

FriendsContainer.propTypes = {
	friendsState: PropTypes.array,
	loginState: PropTypes.object,
};

const mapStateToProps = (state) => ({
	loginState: state.login,
	friendsState: state.friends,
});

const mapDispatchToProps = dispatch => ({
	fetchFriends: () => dispatch(fetchFriends())
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
