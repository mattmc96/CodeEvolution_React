import React, { Component } from 'react'

 class ClassTimer extends Component {
   
    interval

    state = { timer: 0 }

    componentDidMount() {
        this.interval = setInterval(() => {
           this.setState(prevState => ({ timer: prevState.timer + 1}))
        }, 1000);
    }

    componentWillMount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                Class Timer = {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}>Stop Interval</button>
            </div>
        )
    }
}

export default ClassTimer