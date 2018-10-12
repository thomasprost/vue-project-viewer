import Vue from 'vue'
import Vuex from 'vuex'
import * as data from './data.js'
import {getRandomColor, getInitials} from './helpers.js'

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
  currentProjects: state => state.currentProjects
}

const mutations= {
  ADD_MEMBER: (state, member) => {
    if(member.id === 0){
      state.members.push({
        name: member.name,
        position: member.position,
        color: getRandomColor(),
        initials: member.initials,
        id: state.membersIndex++
      })
    }
    else {
      let currentMember = state.members.find((mem) => mem.id === member.id)
      if(currentMember !== undefined){
        currentMember.name = member.name
        currentMember.position = member.position
        currentMember.initials = member.initials
      }
    }
  },
  ADD_MEMBER_INITIALS: (state, initials) => {
    // TODO: replace old initials if the member's name was changed
    state.membersInitials.push(initials)
  },
  DELETE_MEMBER: (state,member) => {
    state.members.splice(state.members.indexOf(member), 1)
  },
  ADD_PROJECT: (state, project) => {
    if(project.id === 0){
      state.projects.push({
        id: state.projectsIndex++,
        name: project.name,
        priority: project.priority
      })
    }
    else{
      let currentProject = state.projects.find((pro) => pro.id === project.id)
      if(currentProject !== undefined){
        currentProject.name = project.name
        currentProject.priority = project.priority
        
      }
    }
    
  },
  DELETE_PROJECT: (state, project) => {
    state.projects.splice(state.projects.indexOf(project), 1)
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
  deleteMember: (store, member) => {
    store.commit('DELETE_MEMBER', member)
  },
  // Projects
  addProject: (store, name) => {
    store.commit('ADD_PROJECT', name)
  },
  deleteProject: (store, project) => {
    store.commit('DELETE_PROJECT', project)
  }
}


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true
})
