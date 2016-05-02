import React from 'react';

export default class Counter extends React.Component {
  render() {
    const {value, onDecrement, onIncrement} = this.props;
    
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    );
  }
}