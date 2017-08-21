import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './rootReducer';
import logger from 'redux-logger';//logs actions, prev state and next state to the console
import thunk from 'redux-thunk';


const enhancer = compose(
	applyMiddleware(logger(), thunk)
);

const configureStore = (initialState) => 
	createStore(
		reducer,
		initialState,
		enhancer
	);

export default configureStore