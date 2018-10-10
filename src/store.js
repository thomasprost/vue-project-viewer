import Vue from 'vue'
import Vuex from 'vuex'
import * as data from './data.js'
import {getRandomColor, getInitials} from './helpers.js'

Vue.use(Vuex)

const state = {
  members: data.membersSample,
  membersInitials: data.membersSampleInitials,
  projects: data.projectsSample
}

const getters = {
  members: state => state.members,
  membersInitials: state => state.membersInitials,
  projects: state => state.projects,
  orderedProjects: state => [...state.projects].sort((a,b) => {
    return a.priority.id > b.priority.id
  })
}

const mutations= {
  ADD_MEMBER: (state, member) => {
    state.members.push({
      name: member.name,
      position: member.position,
      color: getRandomColor(),
      initials: member.initials
    })
  },
  ADD_MEMBER_INITIALS: (state, initials) => {
    state.membersInitials.push(initials)
  },
  ADD_PROJECT: (state, project) => {
    state.projects.push({
      name: project.name,
      priority: project.priority
    })
  }
}



const actions = {
  // Members
  addMember: (store, member) => {
    store.commit('ADD_MEMBER', member)
  },
  addMemberInitials: (store, initials) => {
    store.commit('ADD_MEMBER_INITIALS', initials)
  },
  // Projects
  addProject: (store, name) => {
    store.commit('ADD_PROJECT', name)
  }
}


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true
})
