import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter.js';

// The Render function
function render() {
  ReactDOM.render(
    // our entire app's store get's passed in as an attribute
    <Counter 
      value={store.getState()}
      onIncrement={() => 
        store.dispatch({ 
          type: 'INCREMENT'
        })
      }
      onDecrement={() => 
        store.dispatch({ 
          type: 'DECREMENT'
        })
      }
    />, 
    document.getElementById('app'));
}

// The Reducer function
function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': 
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// The store
const store = createStore(reducer);
// Calls the render function every time the store is updated
store.subscribe(render);
// call the render function once to initialize the view
render();
