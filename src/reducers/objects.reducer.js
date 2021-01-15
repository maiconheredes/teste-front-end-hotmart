import {
    UPDATE_OBJECT,
    UPDATE_OBJECT_PROPERTY
} from '../types/actions.type';

const ObjectsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_OBJECT:
            return {
                ...state,
                ...action.payload,
            };
        case UPDATE_OBJECT_PROPERTY:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default ObjectsReducer;
