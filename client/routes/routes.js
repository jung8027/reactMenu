import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from '../src/home.js';
import About from '../src/about.js';
import Topics from '../src/topics.js';
import User from '../src/user.js';
import TodoList from '../src/todoList/todoList.js';

const AppRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/todo">TodoList</Link></li>
      </ul>

      <hr/>

      {/* NOTE welcome exact paths! https://reacttraining.com/react-router/web/api/Route/exact-bool */}
      {/* NOTE No IndexRoute needed! */}
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/user" component={User}/>
      <Route path="/todo" component={TodoList}/>
    </div>
  </Router>
)

export default AppRouter