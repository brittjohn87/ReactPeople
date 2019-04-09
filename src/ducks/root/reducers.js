import personReducer from '../person/reducers';
import { combineReducers } from 'redux';

export const rootReducer = () => combineReducers({
    person: personReducer
});

export default rootReducer;