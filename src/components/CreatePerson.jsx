import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose'
import { bindActionCreators } from 'redux';
import PersonList from './PersonList';
import { setPersonConfig, setPeople } from '../ducks/person/actions';
import { getPersonConfig } from '../ducks/person/selectors';

const CreatePerson = ({
    setPersonConfig,
    personConfig,
    setPeople

}) => {

    const onChangeName = event => {
        const name = event.target.value.toUpperCase();
        setPersonConfig({ name });
    }

    const onChangeAge = event => {
        const age = event.target.value;
        setPersonConfig({ age });
    }

    const onChangeCity = event => {
        const city = event.target.value;
        setPersonConfig({ city });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setPeople(personConfig)
        setPersonConfig({ age: '', name: '', city: '' })
    }



    return (
        <>
            <h1>Test Entry</h1>
            <input type="text" value={personConfig.name} onChange={onChangeName} placeholder="type here" /> <br />
            <input type="number" value={personConfig.age} onChange={onChangeAge} placeholder="22" /> <br />
            <input type="text" value={personConfig.city} onChange={onChangeCity} placeholder="Detroit" /> <br />
            <button onClick={onSubmit}>Submit</button>
            <br />
            <PersonList />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        personConfig: getPersonConfig(state),
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setPersonConfig,
    setPeople,
}, dispatch);

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(CreatePerson);