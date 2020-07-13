import React from 'react';

// function Greet() {
//     return <h2>Hello Vaibhav</h2>
// }

const Greet = props => {
return (
    <div>
<h3>hello {props.name} a.k.a {props.heroName}</h3> <h7>{props.children}</h7>
</div>
)}


export default Greet;