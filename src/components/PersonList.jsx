import React from 'react';
import { connect } from 'react-redux';
import PersonListItem from './PersonListItem';
import { getPeople } from '../ducks/person/selectors';


const PersonList = ({ people }) => {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
            {people.map(person => (
                <PersonListItem name={person.name} age={person.age} city={person.city} />
            ))}
        </table>
    )
}

const mapStateToProps = (state) => {
    return {
        people: getPeople(state),
    }
}

export default connect(mapStateToProps)(PersonList);