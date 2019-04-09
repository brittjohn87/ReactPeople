import React from 'react';

const PersonListItem = ({ name, age, city }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{city}</td>
        </tr>
    )
}

export default PersonListItem;