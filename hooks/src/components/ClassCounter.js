import React, { Component } from 'react'

class ClassCounter extends Component {
    
    state = {count:0}

    incrementCount=()=>{
        this.setState({count: this.state.count+1})
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>Clicked {this.state.count} Times</button>                
            </div>
        )
    }
}

export default ClassCounter
