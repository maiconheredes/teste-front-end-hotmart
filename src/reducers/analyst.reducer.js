import AnalystState from '../states/analyst.state';
import { UPDATE_ANALYST } from '../types/actions.type';


const AnalystReducer = (state = AnalystState, action) => {
    switch (action.type) {
        case UPDATE_ANALYST:
            return action.payload;
        default:
            return state;
    }
};

export default AnalystReducer;
