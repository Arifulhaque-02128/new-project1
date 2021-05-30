export const FETCH_TODO_DATA = 'FETCH_TODO_DATA';

export const fetchTodoData = (data) => (
    { type: FETCH_TODO_DATA, payload: data }
)