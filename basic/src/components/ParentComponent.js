import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    
    constructor(props) {
        super(props)
        this.greetParent = this.greetParent.bind(this);
    }

    state = {parentName: 'Parent'}

    greetParent(chlidName) {
        alert(`Hello ${this.state.parentName} from ${chlidName}`)
    }

    render() {
        return (
            <div>
                   <ChildComponent greetHandler = {this.greetParent}/>     
            </div>
        )
    }
}

export default ParentComponent