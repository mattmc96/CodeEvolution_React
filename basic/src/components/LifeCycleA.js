import React, { Component } from 'react'

class LifeCycleA extends Component {

    constructor(props){
        super(props)
            this.state = {name: 'vaibhav'}
            console.log('Lifecycle A constructor')
    }


    static getDerivedStateFromProps (props,state) {
        console.log('get drive from ignore')
        return null
    }

    componentDidMount() {
        console.log('did mount')
    }

    shouldComponentUpdate() {
        console.log('should')
        return null
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('snapshort')
    }

    componentDidUpdate() {
        console.log('did update')
    }

    changeState = () => {
        this.setState({name:''})
    }

    render() {
        console.log('render')
        return (
            <div>
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}

export default LifeCycleA
