import { FETCH_TODO_DATA } from "../Actions/Actions";

const initialState = [];

const rootReducer = (state=initialState, action) => {
    const {payload, type} = action;
    switch (type) {
        case FETCH_TODO_DATA:
            return payload;
        default:
            return state
    }
}

export default rootReducer;