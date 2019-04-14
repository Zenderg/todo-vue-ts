import { ActionContext, ActionTree } from 'vuex';
import { uniqueId } from 'lodash';

import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from './mutation-types';
import State from './state';

const actions: ActionTree<State, State> = {
  [ADD_TASK]({ commit }: ActionContext<State, State>, taskText: string): void {
    commit(ADD_TASK, { id: +uniqueId(), text: taskText });
  },
  [UPDATE_TASK]({ commit, getters }: ActionContext<State, State>, { id, text }:
    { id: number, text: string }): void {
    const index = getters.getIndexTaskById(id);
    console.log(index, text);
    commit(UPDATE_TASK, { index, text });
  },
  [REMOVE_TASK]({ commit, getters }: ActionContext<State, State>, id: number): void {
    const index = getters.getIndexTaskById(id);
    commit(REMOVE_TASK, index);
  },
};

export default actions;
