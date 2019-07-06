import React from 'react';
import {Provider} from 'react-redux';
import store from './../store/configureStore'

import ButtonContainer from './../containers/ButtonContainer';
import FriendsContainer from './../containers/FriendsContainer';

// localStorage.removeItem('token');


class Main extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div className={'container'}>
					<ButtonContainer/>
					<FriendsContainer/>
				</div>
			</Provider>
		);
	}
}

export default Main;