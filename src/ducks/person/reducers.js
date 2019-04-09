import { getType } from 'typesafe-actions';
import { setPersonConfig, resetState, setPeople } from './actions';

const initialState = {
    person: {
        name: '',
        age: '',
        city: ''
    },
    people: []
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case getType(resetState):
            return {
                ...state,
                ...initialState
            };
        case getType(setPersonConfig):
            return {
                ...state,
                person: {...state.person, ...action.payload}
            };
        case getType(setPeople):
            return {
                ...state,
                people: [...state.people, action.payload]
            };
        default:
        return state;
    }
}