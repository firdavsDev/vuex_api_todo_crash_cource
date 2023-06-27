<template>
  <div class="todo" :class="{ 'is-complete': todo.completed }">
    <p>{{ todo.title }}</p>
    <div class="actions">
      <button @click="$store.dispatch('updateTodo', todo.id)">
        <i class="fas fa-check"></i>
        {{ todo.completed ? "Mark Incomplete" : "Mark Complete" }}
      </button>
      <button @click="$store.dispatch('removeTodo', todo.id)">
        <i class="fas fa-trash"></i>
        Delete</button>
    </div>
</div>
</template>
<script>
export default {
  name: "ToDoItem",
  props: {
    todo: {
      type: Object,
      required: false,
    },
  },
};
</script>
<style>
.todo {
  border: 1px solid #ccc;
  background-color: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.todo * {
  background-color: #41b883;
}
.todo.is-complete {
  background-color: #35495e;
}
.todo.is-complete * {
  background-color: #35495e;
}

.todo p {
  margin: 100px;
  color: #fff;
}

.todo .actions {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.todo .actions button {
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
</style>