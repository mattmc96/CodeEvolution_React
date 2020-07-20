import React from 'react'

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {

        state = { Count: 0 }

        incrementCount = () => {
            this.setState({ Count: this.state.Count + 1 })
            // this.setState(prevState => {
            //     return  {Count : prevState.Count +1 }
            // })
        }


        render() {
            return <OriginalComponent count={this.state.Count}
            incrementCount = {this.incrementCount}
            {... this.props}
            />
        }
    }
    return NewComponent
}

export default UpdatedComponent
