import React from 'react';
import './App.css';

import ImmerExample from './components/ImmerExample';
import AntdExample from './components/AntdExample';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

import {StoreProvider, createStore } from 'easy-peasy';
import model from './model/model';



const store = createStore(model);

function App() {
  return (
    <div className="App">
	    <StoreProvider store={store}>
	      <TodoList />
	      <AddTodo />
	    </StoreProvider>
    </div>
  );
}

export default App;
