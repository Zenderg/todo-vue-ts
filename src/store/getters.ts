import { GetterTree } from 'vuex';

import State from './state';

type TaskInterface = {
  id: number,
  text: string
}

const getters: GetterTree<State, State> = {
  getIndexTaskById:
    state => (id: number): number => state.tasks.findIndex((task: TaskInterface) => task.id === id),
};

export default getters;
