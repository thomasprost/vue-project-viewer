import {getRandomColor, getInitials} from '../../helpers.js'

export const mutations= {
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
  },
  ADD_PROJECT_TO_WEEK: (state, project) => {
    state.currentProject.push(project)
  }

}