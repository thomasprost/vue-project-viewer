import Vue from 'vue'
import Vuex from 'vuex'
import * as data from './data.js'

Vue.use(Vuex)

const state = {
  members: [{
    name: "Sato",
    position: data.positions.Director,
    image: "./assets/images/members/sato.jpg",
  },
  {
    name: "Yoshida",
    position: data.positions.Developer,
    image: "./assets/images/members/yoshida.jpg",
  },{
    name: "Noriko",
    position: data.positions.Director,
    image: "./assets/images/members/noriko.jpg",
  }],
  projects:[{
    name: "Jean Paul Hévin",
    image: "./assets/images/projects/jph.jpg",
    priority: data.priorities.high,

  },
  {
    name: "Graf Lantz",
    image: "./assets/images/projects/graf.jpg",
    priority: data.priorities.medium
  },
  {
    name: "Cmic",
    image: "./assets/images/projects/cmic.jpg",
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
