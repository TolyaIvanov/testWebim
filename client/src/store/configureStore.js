import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer'

function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk),
	);
}

const store = configureStore({});

export default store