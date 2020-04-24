import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjaList: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let newNinjalist = [ninja, ...this.state.ninjaList];
    this.setState({
      ninjaList: newNinjalist
    });
  }
  deleteNinja = (id) => {
    console.log(id)
    let newNinjalist = this.state.ninjaList.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjaList: newNinjalist
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjaList} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
