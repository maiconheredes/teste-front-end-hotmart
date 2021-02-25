import { combineReducers } from 'redux';

import ServicesReducer from './services.reducer';
import AnalystReducer from './analyst.reducer';


const Reducers = combineReducers({
    ServicesReducer,
    AnalystReducer,
});

export default Reducers;
