import React from "react";

// function Greet() {
//     return <h2>Hello Vaibhav</h2>
// }

// below shows destruturing in functional components

const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

// const Greet = props => {
//     const {name, heroName} = props
//     return (
//     <h3>hello {name} a.k.a {heroName}</h3>
//     )}

// export default Greet;
