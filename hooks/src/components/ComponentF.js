import React, { Component } from 'react'
import { UserContext, ChannelContext } from '../App'

class ComponentF extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {
                    (value) => {
                    return (
                        
                            <div>Hello { value } </div>
                            )
                    }
                }
            </UserContext.Consumer>

        )
    }
}

export default ComponentF
