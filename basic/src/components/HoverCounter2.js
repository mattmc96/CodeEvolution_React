import React, { Component } from 'react'

class HoverCounter2 extends Component {

       render() {
        return (
            <div>
                <h4 onMouseOver={this.props.incrementCount}> Hovered {this.props.count} times</h4>                
            </div>
        )
    }
}

export default HoverCounter2
