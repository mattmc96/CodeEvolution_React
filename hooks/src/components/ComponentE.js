import React, { useContext } from 'react'
import ComponentF from '../components/ComponentF';
import { UserContext, ChannelContext } from '../App'

function ComponentE() {

   const user =  useContext(UserContext)
    const channel = useContext(ChannelContext)
        return (
            <div>
                {user} {channel}
                    {/* <ComponentF />                 */}
            </div>
        )
    }

export default ComponentE
