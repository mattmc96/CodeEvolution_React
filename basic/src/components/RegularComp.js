import React, { Component } from 'react'

class RegularComp extends Component {
    render() {
        console.log('regular render')

        return (
            <div>
                RegularComp {this.props.name}                
            </div>
        )
    }
}

export default RegularComp
