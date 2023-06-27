<template>
    <div class="addTodo">
        <input type="text" placeholder="Add a ToDo" v-model="newTodo" />
        <button @click="addTodo">Add</button>
    </div>
</template>
<script>
export default {
    name: "AddToDoItem",
    data() {
        return {
            newTodo: ""
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim().length === 0) {
                return;
            }
            //call addTodo func in store actions
            this.$store.dispatch("addTodo", this.newTodo);
            this.newTodo = "";
        }
    },
    computed: {
        todos() {
            return this.$store.getters.filteredTodos;
        }
    }
}
</script>
<style scoped>
.addTodo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
}
.addTodo input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    margin-right: 10px;
}
.addTodo button {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #41b883;
    color: #fff;
    cursor: pointer;
}
    
</style>