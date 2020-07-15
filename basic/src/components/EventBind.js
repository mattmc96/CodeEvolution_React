import React, { Component } from 'react'

class EventBind extends Component {

    state = { Message: 'Hello' }

    ChangeState() {
        this.setState({Message: 'Thanks for subscribing!'})
    }

    render() {
        return (
            <div>
                <div>{this.state.Message}</div>
                <button onClick={() => {this.ChangeState()}}>Click!</button>
            </div>
        )
    }
}

export default EventBind
