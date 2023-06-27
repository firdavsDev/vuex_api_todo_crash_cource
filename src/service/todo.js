import http from "./axios";

const ToDoService = {
    // get todos from api via http and set todos
    getTodos: (limit) => {
        if (limit) {
            return http.get(`todos?_limit=${limit}`);
        }
        return http.get("todos");
    },
    // add todo via http and add todo to state
    addTodo: (todo) => {
        return http.post("todos", todo);
    },
    // remove todo via http and remove todo from state
    removeTodo: (todoId) => {
        return http.delete(`todos/${todoId}`);
    },
    // update todo via http and update todo in state
    updateTodo: (todoId, todo) => {
        return http.put(`todos/${todoId}`, { ...todo, completed: !todo.completed });

    }

};

export default ToDoService;
