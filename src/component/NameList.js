import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'sachin',
            age: 30
        },
        {
            id: 2,
            name: 'Rahul',
            age: 20
        },
        {
            id: 3,
            name: 'Rahul1',
            age: 45
        },
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} />)

    const names = ['sachin', 'vijay', 'piyush']
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div> { nameList }</div>
    )
}

export default NameList 
