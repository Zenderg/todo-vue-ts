<template>
  <div>
    <Task v-for="task in stateTasks" :task="task" :key="task.id"></Task>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Task from '@/components/Task.vue';

@Component({
  components: { Task },
})
export default class TaskList extends Vue {
  get stateTasks() {
    return this.$store.state.tasks;
  }

  removeTask() {
    this.$store.dispatch('REMOVE_TASK');
  }
}
</script>

<style lang="scss">

</style>
