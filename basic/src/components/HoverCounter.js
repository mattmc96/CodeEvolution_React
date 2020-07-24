import React, { Component } from 'react'
import UpdatedComponent from './WithCounter';

class HoverCounter extends Component {


    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h4 onMouseOver={incrementCount}>Hovered {count} Times</h4>                
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)
