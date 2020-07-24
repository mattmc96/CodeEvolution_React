import React from 'react'
import ReactDom from 'react-dom';


function PortalDemo() {
    return ReactDom.createPortal( 
    <h3>
        Portals Demo            
    </h3>,
    document.getElementById('portal-root')
    )
}

export default PortalDemo
