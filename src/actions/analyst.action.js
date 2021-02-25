import { UPDATE_ANALYST } from '../types/actions.type';


export const updateAnalyst = (analyst) => {
    return {
        type: UPDATE_ANALYST,
        payload: analyst,
    };
};
