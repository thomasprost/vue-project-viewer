import Vue from 'vue'
import Vuex from 'vuex'
import * as data from '../data.js'
import {mutations} from './modules/mutations.js'
import {actions} from './modules/actions.js'


Vue.use(Vuex)

const state = {
  members: data.membersSample,
  membersInitials: data.membersSampleInitials,
  membersIndex: data.membersIndex,
  projects: data.projectsSample,
  projectsIndex: data.projectsIndex,
  currentProjects: []
}

const getters = {
  members: state => state.members,
  membersInitials: state => state.membersInitials,
  membersIndex: state => state.membersIndex,
  projects: state => state.projects,
  projectsIndex: state => state.projectsIndex,
  orderedProjects: state => [...state.projects].sort((a,b) => {
    return a.priority.id > b.priority.id
  }),
  weekProjects: state => state.weekProjects
}



export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: true
})
