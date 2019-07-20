// presentational component

import React from 'react'


class PigCard extends React.Component {

    state = {
        showDetails: false
    }

    toggleDetails = () => {
        console.log('button')
        this.state.showDetails === false ? this.setState({showDetails: true}) : this.setState({showDetails: false})
    }

    render(){
        const name = this.props.name
        return (
            <div className="ui eight wide column">
                <div className="image"
                     onClick={this.toggleDetails}
                >
                    <img src={require(`../hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`)}></img>
                </div>
                <h2>{this.props.name}</h2>
                <button
                    onClick={this.toggleDetails}
                >
                    details
                </button>
                <div className="details">
                    <div>
                        {this.state.showDetails === true ? `Specialty: ${(this.props.specialty)}` : null}
                    </div>
                    <div>
                        {this.state.showDetails === true ? `Greased? ${this.props.greased.toString()}` : null}
                    </div>
                    <div>
                        {this.state.showDetails === true ? `Weight: ${this.props.weight}` : null}
                    </div>
                    <div>
                        {this.state.showDetails === true ? `Medal: ${this.props.medal}` : null}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default PigCard