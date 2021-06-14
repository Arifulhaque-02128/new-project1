import { FETCH_TODO_DATA, HANDLE_DATE_CHANGE } from "../Actions/Actions";

const initialState = {
    date: new Date()
}

const rootReducer = (state=initialState, action) => {
    const {payload, type} = action;
    switch (type) {
        case FETCH_TODO_DATA:
            return payload;
        case HANDLE_DATE_CHANGE:
            return {...state, date : payload } 
        default:
            return state
    }
}

export default rootReducer;