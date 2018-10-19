import React from 'react';
import Person from "./Person/Person";

// props: array of persons
const Persons = (props) => (
    props.persons.map((person, index) => {
        // return JSX here
        return <Person name={person.name}
                       age={person.age}
                       key={person.id}
                       changed={(event) => props.changed(event, person.id)}
                       click={() => props.clicked(index)}/>
    })
);

export default Persons;
