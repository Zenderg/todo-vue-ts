<template>
  <div class="add-task">
      <v-text-field
        @keypress.enter="addTask"
        label="Task"
        v-model="textTask"
        type="text"
      ></v-text-field>
    <v-btn color="success" @click="addTask">Add new task</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

  @Component
export default class AddTask extends Vue {
    textTask: string = '';

    addTask() {
      if (this.textTask !== '') this.$store.dispatch('ADD_TASK', this.textTask);
      this.textTask = '';
    }
}
</script>

<style lang="scss" scoped>
.add-task{
  display: flex;
  width: 100%;
}
</style>
