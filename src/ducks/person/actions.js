import { createAction } from 'typesafe-actions';

export const resetState = createAction('person/RESET_STATE', resolve => {
    return () => resolve();
});

export const setPersonConfig = createAction('person/SET_PERSON_CONFIG', resolve => {
    return (personConfig) => resolve (personConfig);
});

export const setPeople = createAction('person/SET_PEOPLE', resolve => {
    return (people) => resolve (people);
});
