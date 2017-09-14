import React from 'react'
import Footer from './footer'
import AddTodo from './addTodoContainer'
import VisibleTodoList from './todoContainer'

const TodoList = () => 
	<div>
	    <AddTodo />
	    <VisibleTodoList />
	    <Footer />
	</div>

export default TodoList