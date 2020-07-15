import React, { Component } from 'react'

class Form extends Component {
    
    state = {username: '', topic: 'react'}

    handleChange = (event) => {
        this.setState({username: event.target.value})
    }

    topicChange = (event) => {

        this.setState({topic: event.target.value})
    }

    handleSubmit = (event) => {
        alert(`${this.state.username}, ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username:{this.state.username}</label>
                    <br/>
                    <input type="text" value={this.state.username} onChange={this.handleChange}/>
                </div>

                <div>
                        <label>{this.state.topic}</label>
                    <br/>
                    <select value={this.state.topic} onChange={this.topicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
    