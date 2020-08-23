import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    // const { state1, state2 } = this.state;
    return (
      <div>
        Hello {heroName} class {name}
      </div>
    );
  }
}

export default Welcome;
