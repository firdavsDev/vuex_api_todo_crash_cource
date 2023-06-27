import { createStore } from 'vuex'
import axios from 'axios';
import ToDoService from '../service/todo.js';



export default createStore({
  state: {
    filter: 'all',
    todos: [],
    isLoading: false,
    filter_limit: 5

  },
  getters: {
    filteredTodos(state) {
      switch (state.filter) {
        case 'all':
          return state.todos;
        case 'active':
          return state.todos.filter(todo => !todo.completed);
        case 'completed':
          return state.todos.filter(todo => todo.completed);
        default:
          return state.todos;
      }
    }
  },
  mutations: {
    setFilter(state, filter) {
      state.filter = filter;
    },
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodoMutation(state, todo) {
      state.todos = [...state.todos, todo];
    },
    removeTodoMutation(state, todoId) {
      // get index of todo to remove
      const index = state.todos.findIndex(todo => todo.id === todoId);
      // remove todo from todos
      state.todos.splice(index, 1);
    },
    updateTodoMutation(state, todoId) {
      // get index of todo to update
      const index = state.todos.findIndex(todo => todo.id === todoId);
      // update todo
      state.todos[index].completed = !state.todos[index].completed;
    },

    setLoading(state, val) {
      state.isLoading = val;
    },

  },
  actions: {
    // get todos from api via axios and set todos  
    async getTodos({ commit }) {
      const val = this.state.filter_limit;

      const response = await ToDoService.getTodos(
        val
      );
      commit('setTodos', response.data);
      // return new Promise((resolve, reject) => {
      //   ToDoService.getTodos()
      //     .then(response => {
      //       commit('setTodos', response.data);
      //       resolve(response.data);
      //     })
      //     .catch(error => {
      //       reject(error);
      //     });
      // });
    },
    // add todo to api via axios and set todos
    async addTodo({ commit }, title) {
      // const response = await axios.post("https://jsonplaceholder.typicode.com/todos", { title, completed: false });
      // commit('addTodoMutation', response.data);
      const response = await ToDoService.addTodo({
        title,
        completed: false
      });
      commit('addTodoMutation', response.data);

    },
    // remove todo from api via axios and set todos
    async removeTodo({ commit }, todo_id) {
      // await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo_id}`);
      // commit('removeTodoMutation', todo_id);
      await ToDoService.removeTodo(
        todo_id
      );
      commit('removeTodoMutation', todo_id);
    },
    // update todo in api via axios and set todos
    async updateTodo({ commit }, todo_id) {
      const todo = this.state.todos.find(todo => todo.id === todo_id);
      const response = await ToDoService.updateTodo(
        todo_id, todo
      );
      if (response.status === 200) {
        commit('updateTodoMutation', todo_id);
      } else {
        this.state.todos = [...this.state.todos];
      }

    },

  },
  modules: {
    // modules are used to split the store into multiple stores
  }
})
 