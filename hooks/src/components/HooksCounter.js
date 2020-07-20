import React, { useState, useEffect } from 'react'

export default function HooksCounter() {
    
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You Cliked ${count} Times !` 
    })

    return (
        <div>
            <button onClick={()=> setCount(count+1)}>Count {count}</button>            
        </div>
    )
}
