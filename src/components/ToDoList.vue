<template>
  <AddToDoItem />
  <div class="filter form-control">
    <b>Filter ToDos:</b>
    <select v-model="$store.state.filter" @change="fetchTodos" class="form-select">
      <option value="all">All</option>
      <option value="active">Pending</option>
      <option value="completed">Completed</option>
    </select>
    <select v-model="$store.state.filter_limit" @change="fetchTodos" class="form-select">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="5">5</option>
    </select>
  </div>

  <h1>ToDos</h1>
  <div class="todos">
    <div v-for="todo in $store.getters.filteredTodos" :key="todo.id">
      <ToDoItem :todo="todo" />
    </div>
  </div>
</template>
<script>
import ToDoItem from "./ToDoItem.vue";
import AddToDoItem from "./AddToDoItem.vue";

export default {
  name: "ToDoList",
  methods: {
    fetchTodos() {
      this.$store.dispatch("getTodos");
    },

  },
  created() {
    this.fetchTodos();
  },
  components: {
    ToDoItem,
    AddToDoItem,
  },
};
</script>
<style>

.form-control {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 20%;
  margin-right: 10px;
}

.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>
