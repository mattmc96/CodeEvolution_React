import React, { Component } from 'react'

class RefsDemo extends Component {
    
    inputRef = React.createRef()
    cbRef = null
    setcbRef= element => {
        this.cbRef = element
    }

    componentDidMount() {
        // if(this.cbRef) {
        //     this.cbRef.focus()
        // }

        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    ClickHandler = () => {
        alert(this.inputRef.current.value)

    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                {/* <input type="text" ref={this.setcbRef} /> */}
                <button onClick={this.ClickHandler}>Click!</button>
            </div>
        )
    }
}

export default RefsDemo
