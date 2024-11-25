<template>
  <div class="container">
    <h2 class="">Add Todo</h2>
    <div class="card">
      <div class="d-flex">
        <input class="form-control" placeholder="Add new todo" v-model="newTodo"/>
          <button type="button" class="btn btn-primary" @click="addNewTodo">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore()
const newTodo = ref('');

function addNewTodo() {
  store.dispatch('addTodo', {
    newTodo: newTodo.value
  });
  newTodo.value = '';
}
</script>
