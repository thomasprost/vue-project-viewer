export const actions = {
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
  },
  addProjectToWeek: (store, project) => {
    store.commit('ADD_PROJECT_TO_WEEK', project)
  }
}