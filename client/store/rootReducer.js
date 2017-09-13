import {combineReducers} from 'redux';
import {todos, visibilityFilter} from '../src/todoList/todoReducers';


const rootReducer = {
	todos,
	visibilityFilter
};

const reducer = combineReducers(rootReducer);

export default reducer;
