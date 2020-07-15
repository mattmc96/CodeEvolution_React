import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const {name , heroName} = this.props
        return (
        <div>Hello class {name}</div>
        );
    }

}


export default Welcome;