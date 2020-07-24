import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComponent from './MemoComponent'

class ParentComp extends Component {

    state = {name: 'vaibhav'}

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'vaibhav'
            })
        }, 2000)

    }

    render() {
        console.log('parent render')
        return (
            <div>
                ParentComp
                <MemoComponent name = {this.state.name}/> 
                {/* <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
