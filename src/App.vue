<template>
  <div id="app">
    <v-app class="main">
      <h1 class="title">Task List</h1>
      <AddTask></AddTask>
      <TaskList></TaskList>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddTask from '@/components/AddTask.vue';
import TaskList from '@/components/TaskList.vue';

  @Component({
    components: { AddTask, TaskList },
  })
export default class App extends Vue {}
</script>

<style lang="scss">
  html{
    overflow: auto;
  }

#app{
  display: flex;
  .main{
    margin: 100px auto 0 auto;
    width: 900px;
    .application--wrap{
      min-height: auto;
      .title{
        text-align: center;
      }
    }
  }
}
</style>
