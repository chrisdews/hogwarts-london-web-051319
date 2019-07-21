import React from 'react'
import PigCard from './PigCard'


class PigsContainer extends React.Component {

  filteredGreasyPigs = () => {
          return this.props.greasedStatus ? this.props.hogs.filter(hog => hog.greased === true) : this.props.hogs
  }  

  render(){

    const filteredHogs = this.filteredGreasyPigs()

    return (
        <div className="ui grid container">
            {filteredHogs.map(hog => <PigCard name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog.medal} />)}
        </div>
    ) 
  }
}

export default PigsContainer