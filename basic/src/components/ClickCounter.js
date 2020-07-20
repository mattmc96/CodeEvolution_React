import React, { Component } from 'react'

class ClickCounter extends Component {

    state = {Count: 0}

    HandleClick = () => {
        this.setState(prevState => {
            return {Count : prevState.Count+1}
        })
    }

    render() {
        const { Count } = this.state;

        return (
            <div>
                <button onClick={this.HandleClick}>Cliked {Count} Times</button>         
            </div>
        )
    }
}

export default ClickCounter
