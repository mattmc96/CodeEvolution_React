import React, { Component } from 'react'

class HoverCounter extends Component {

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
                <h4 onMouseOver={this.HandleClick}>Hovered { Count } Times</h4>                
            </div>
        )
    }
}

export default HoverCounter
