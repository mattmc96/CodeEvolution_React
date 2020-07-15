import React, { Component } from 'react'

export class Counter extends Component {

    state = {count: 0}

    // increment() {
    //     // the below console will only called when state got updated for count
    //     this.setState({count: this.state.count+1}, ()=> {console.log(this.state.count)});
    //    // console.log(this.state.count);
    // }

    increment() {
        this.setState(prevState => ({
        count: prevState.count +1       
        }))
    }

    incrementFIve() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }


    render() {
        return (
            <div>
                Count {this.state.count}
                {/* <button onClick={() => {this.increment()}}>Increment</button> */}
                <button onClick={() => {this.incrementFIve()}}>Increment</button>
            </div>
        )
    }
}

export default Counter;