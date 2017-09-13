import React from 'react'
import Footer from './footer'
import AddTodo from './addTodoContainer'
import VisibleTodoList from './todoContainer'

class TodoList extends React.Component{
	render(){
		return(
			<div>
			    <AddTodo />
			    <VisibleTodoList />
			    <Footer />
			</div>
		)
	}
}

export default TodoList