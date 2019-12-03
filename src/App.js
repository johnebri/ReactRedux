import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Ryu', age: 10, belt: 'red', id: 1},
      {name: 'Yoshi', age: 22, belt: 'green', id: 2},
      {name: 'Crystal', age: 33, belt: 'black', id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My React App!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
