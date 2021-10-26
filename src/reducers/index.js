import { combineReducers } from 'redux';
import CountReducer from './CountReducer';
import LoggedReducer from './LoggedRedicer';


const AllReducer = combineReducers({
    count : CountReducer,
    logged : LoggedReducer
});

export default AllReducer;