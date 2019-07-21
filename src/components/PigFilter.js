import React, { Component } from 'react';

class PigFilter extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handleClickGrease}
                >{this.props.greaseFilter ? 'Greased' : 'All'}</button>
                <br></br>
            </div>
        );
    }
}

export default PigFilter;
