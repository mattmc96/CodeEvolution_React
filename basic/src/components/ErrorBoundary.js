import React, { Component } from 'react'

class ErrorBoundary extends Component {
    
    state = {hasError: false}

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error,info) {
        console.log(error)
        console.log(info)
    }

    render() {

        if(this.state.hasError)
            return <div>Something wend wrong!</div>
        
        return this.props.children
    }
}

export default ErrorBoundary
