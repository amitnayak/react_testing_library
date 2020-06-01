import React from 'react';
import './App.css';

import ImmerExample from './components/ImmerExample';
import AntdExample from './components/AntdExample';

import {StoreProvider, createStore } from 'easy-peasy';
import storeModel from './model';

const store = createStore(storeModel);

function App() {
  return (
    <div className="App">
      <!--header className="App-header">

      </header>
      <ImmerExample />
      <AntdExample /-->

	    <StoreProvider store={store}>
	      <TodoList />
	    </StoreProvider>
    </div>
  );
}

export default App;
