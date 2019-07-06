import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import Button from './../components/Button'

import {
	loginUser,
	logout
} from "../actions/login";

class ButtonContainer extends Component {
	render() {
		return (
			<Button
				onClick={localStorage.token ? this.props.logoutAction : this.props.loginAction}
			>
				{localStorage.token ? (<p>logout</p>) : (<p>login with vk</p>)}
			</Button>
		);
	}
}

ButtonContainer.propTypes = {
	loginState: PropTypes.object,
	friendsState: PropTypes.object,
	loginAction: PropTypes.func,
	logoutAction: PropTypes.func,
};

const mapStateToProps = (state) => ({
	loginState: state.login,
	friendsState: state.friends,
});

const mapDispatchToProps = dispatch => ({
	loginAction: () => dispatch(loginUser()),
	logoutAction: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer);
