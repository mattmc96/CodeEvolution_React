import React, { useEffect, useState } from 'react'

function HookMouse() {
    
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        // worked as a didMount method
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        // clean up code below
        return() => {
            console.log('unmounting code here')
        }
    }, [])

    return (
        <div>
            Hooks X - { X } Y- {Y}
        </div>
    )
}

export default HookMouse
