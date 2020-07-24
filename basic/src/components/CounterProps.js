import React, { Component } from 'react'

class CounterProps extends Component {

    state = { Count: 0 }

    incrementCount = () => {
        this.setState(prevState => {
           return { Count: prevState.Count + 1 }
        })
    }


    render() {
        return (
            <div>
                    {this.props.render(this.state.Count, this.incrementCount)}
            </div>
        )
    }
}

export default CounterProps
