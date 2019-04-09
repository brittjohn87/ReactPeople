import { createSelector } from 'reselect';

const getStoreState = ({ person = {} } = {}) => person;

export const getPersonConfig = createSelector(
    getStoreState,
    ({person}) => person
);

export const getPeople = createSelector(
    getStoreState,
    ({ people }) => people
);