import {combineReducers} from 'redux';
 
import FilterReducer from './Filter/FilterReducer';
import TodoReducer from './todos/todoReducer';

const rootreducer = combineReducers({
    todo: TodoReducer,
    filter : FilterReducer
})


export default rootreducer;