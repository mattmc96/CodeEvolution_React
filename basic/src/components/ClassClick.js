import React, { Component } from 'react'

export class ClassClick extends Component {

    myClick() {
        console.log("class clicked");    
    }
    render() {
        return (
            <div>
              <button onClick={this.myClick}>Click Me!</button>
            </div>
        )
    }
}

export default ClassClick
