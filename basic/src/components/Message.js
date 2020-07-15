import React, { Component } from 'react';

class Message extends Component {

    state = { Message: 'Welcome Visitor' }

    buttonCall() {

        this.setState({Message: "Thanks For Subscribing!!"});

    }

    render() {
        return (
        <div>
            <h1>
                    {this.state.Message}
            </h1>
            <button className="btn btn-primary" onClick={()=>this.buttonCall()}>Subscribe!</button>
        </div>
        );
    }

}


export default Message;