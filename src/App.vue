<template>
  <div id="app">
    <h1>To-Do App</h1>
    <hr />
    <AddTodo />
    <hr />
    <TodoList />
  </div>
</template>

<script setup>
import TodoList from "./components/TodoList.vue";
import AddTodo from "./components/AddTodo.vue";

</script>