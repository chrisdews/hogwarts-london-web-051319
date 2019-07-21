import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigsContainer from './PigsContainer'
import PigFilter from './PigFilter'

console.log(hogs)
class App extends Component {
  
  // add hogs to state of App
  state = {
    hogs: hogs,
    greasefilter: true
  }

  handleClickGrease = () => {
    this.setState({greasefilter: !this.state.greasefilter})

  }
  
  
  render() {
    return (
      <div className="App">
          <Nav />
          <PigFilter handleClickGrease={this.handleClickGrease} greaseFilter={this.state.greasefilter}/>
          <br></br>
          <PigsContainer hogs={hogs} greasedStatus={this.state.greasefilter}/> 

      </div>
    )
  }
}

export default App;
