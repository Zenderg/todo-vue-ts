import { MutationTree } from 'vuex';

import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from './mutation-types';
import State from './state';

const mutations: MutationTree<State> = {
  [ADD_TASK](state: State, task: {id: number, text: string}): void {
    state.tasks.push(task);
  },
  [UPDATE_TASK](state: State, { index, text }:{index: number, text: string}): void {
    state.tasks[index].text = text;// eslint-disable-line no-param-reassign
  },
  [REMOVE_TASK](state: State, index:number): void {
    state.tasks.splice(index, 1);
  },
};

export default mutations;
