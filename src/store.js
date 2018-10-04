import Vue from 'vue'
import Vuex from 'vuex'
import * as data from './data.js'

Vue.use(Vuex)

const state = {
  members: [{
    name: "Sato",
    position: data.positions.Director,
    
  },
  {
    name: "Thomas",
    position: data.positions.Developer,
    
  },{
    name: "Noriko",
    position: data.positions.Director,
    
  }],
  projects:[{
    name: "Jean Paul Hévin",
    priority: data.priorities.high,
  },
  {
    name: "Graf Lantz",
    priority: data.priorities.medium
  },
  {
    name: "Cmic",
    priority: data.priorities.low
  }]
}

const getters = {
  members: state => state.members,
  projects: state => state.projects
}

const mutations= {
  ADD_MEMBER: (state, member) => {
    state.members.push({
      name: member.name,
      position: member.position,
      image: "empty"
    })
  },
  ADD_PROJECT: (state, name) => {
    state.projects.push({
      name,
      image: "./assets/images/projects/default.png",
      priority: priorities.low
    })
  }
}



const actions = {
  // Members
  addMember: (store, name) => {
    store.commit('ADD_MEMBER', name)
  },
  // Projects
  addProject: ({commit}, name) => {
    commit('ADD_PROJECT', name)
  }
}


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true
})
