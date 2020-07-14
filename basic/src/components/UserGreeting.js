import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
    
    // if else 
    
    // if(this.state.isLoggedIn) {
    //         return(
    //             <div>Welcome Vaibhav</div>
    //     )
    // }
    //     return <div>Welcome Guest</div>
    
    // element variables

        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Vaibhav</div>
        // }
        // message = guest

        // return <div>message</div>

        // ternary

        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Vaibhav</div> :
        //     <div>Welcome Guest</div>
        // )


        // short- circuit 
    
        return this.state.isLoggedIn && <div>Welcome Vaibhav</div>

    }
}

export default UserGreeting
