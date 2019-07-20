import React from 'react'
import PigCard from './PigCard'

const PigsContainer = ({ hogs }) => {
    return (
        <div className="ui grid container">
            {hogs.map(hog => <PigCard name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog.medal} />)}

        </div>
    )    
}

export default PigsContainer