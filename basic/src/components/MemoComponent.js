import React from 'react'

function MemoComponent({name}) {
    
    console.log('render memo')

    return (
        <div>
                {name}    
        </div>
    )
}

export default React.memo(MemoComponent)
