import React from 'react';

// function Greet() {
//     return <h2>Hello Vaibhav</h2>
// }

// below shows destruturing in functional components

// const Greet = ({name, heroName}) => {
// return (
//     <div>
// <h3>hello {name} a.k.a {heroName}</h3>
// </div>
// )}


const Greet = props => {
    const {name, heroName} = props
    return (
    <h3>hello {name} a.k.a {heroName}</h3>
    )}


export default Greet;