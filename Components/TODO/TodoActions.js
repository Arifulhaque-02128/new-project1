export const updateTODO = async (id, data) => {
    const updatedTodo = { id, fields: data } 
    try {
        const res = await fetch('/api/updateTodo', {
            method: 'PUT',
            body: JSON.stringify(updatedTodo),
            headers: { "Content-Type": "application/json" }
        });
        const result = await res.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export const deleteTodo = async (id) => {
    try {
        const res = await fetch('/api/deleteTodo', {
            method: 'Delete',
            body: JSON.stringify({ id }),
            headers: { "Content-Type": "application/json" }
        });
        const result = await res.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
