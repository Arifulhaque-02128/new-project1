export const FETCH_TODO_DATA = 'FETCH_TODO_DATA';
export const HANDLE_DATE_CHANGE = 'HANDLE_DATE_CHANGE';

export const fetchTodoData = (data) => (
    { type: FETCH_TODO_DATA, payload: data }
)

export const fetchDate = (date) => (
    { type: HANDLE_DATE_CHANGE, payload: date }
)