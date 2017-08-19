import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './rootReducer';
import thunk from 'redux-thunk';


const enhancer = compose(
	applyMiddleware(thunk)
);

const configureStore = (initialState) => 
	createStore(
		reducer,
		initialState,
		enhancer
	);

export default configureStore