import { combineReducers } from 'redux';
import ReverseReducer from './reverse_reducer.js';

const rootReducer = combineReducers({

	newStr: ReverseReducer
  
});

export default rootReducer;