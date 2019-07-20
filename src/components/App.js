import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigsContainer from './PigsContainer'

console.log(hogs)
class App extends Component {
  
  // add hogs to state of App
  state = {
    hogs: hogs
  }
  
  
  render() {
    return (
      <div className="App">
          < Nav />
          < PigsContainer hogs={hogs}/> 

      </div>
    )
  }
}

export default App;
