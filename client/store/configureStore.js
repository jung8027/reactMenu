import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './rootReducer';
import {createLogger} from 'redux-logger';//logs actions, prev state and next state to the console
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';//this middleware ensures immutability of the redux store
import thunk from 'redux-thunk';


const enhancer = compose(
	applyMiddleware(createLogger(), thunk, reduxImmutableStateInvariant())
);

const configureStore = (initialState) => 
	createStore(
		reducer,
		initialState,
		enhancer
	);

export default configureStore
