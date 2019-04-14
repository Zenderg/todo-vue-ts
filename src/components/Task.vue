<template>
  <div class="task">
    <v-text-field
      :value="task.text"
      @change="UpdateTask"
      solo
    ></v-text-field>
      <v-btn @click="removeTask" color="error">remove</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

type TaskInterface = {
  id: number,
  text: string
}

  @Component({
    props: {
      task: {
        type: Object as () => TaskInterface,
      },
    },
  })
export default class Task extends Vue {
  removeTask() {
    this.$store.dispatch('REMOVE_TASK', this.$props.task.id);
  }

  UpdateTask(newText: string) {
    const taskInfo = {
      id: this.$props.task.id,
      text: newText,
    };
    this.$store.dispatch('UPDATE_TASK', taskInfo);
  }
}
</script>

<style lang="scss" scoped>
.task{
  display: flex;
}
</style>
