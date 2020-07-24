import React, { useState, useEffect } from 'react'

export default function HooksCounter() {
    
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating doc title')
        document.title = `You Cliked ${count} Times !` 
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={()=> setCount(count+1)}>Count {count}</button>            
        </div>
    )
}
