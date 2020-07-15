import React from 'react'
import Person from './Person'

function NameList() {

    const names = ['Bruce', 'Clark', 'Diana']

    const persons = [
        {
            id: 1,
            name: 'Vaibhav',
            age: 27,
            skill: 'Core'
        },
        {
            id: 2,
            name: 'Ram',
            age: 23,
            skill: 'Angular'
        },

        {
            id: 3,
            name: 'Raju',
            age: 67,
            skill: 'Vue'
        }
    ]
   
// const personList =  persons.map(person => <Person key={person.id} person={person} />)
//     return <div>{personList}</div>

    const nameList =  names.map((name,index) => <h4 key={index}>{name}</h4>)
    return <div>{nameList}</div>
}

export default NameList
