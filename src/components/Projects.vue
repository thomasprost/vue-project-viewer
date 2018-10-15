<template>
  <div>
      <form action="post" @submit.prevent="addProject">
      <div class="row">
        <label for="projectName">Name </label>
        <input type="text" name="projectName" v-model="projectName" placeholder="WarpJapan" />
      </div>
      <div class="row">
        <label for="projectPriority">Priority</label>
        <div class="priority-info" :style="{'backgroundColor': priorities[this.projectPriority] ? priorities[this.projectPriority].color : 'transparent'}"></div>
        <select v-model="projectPriority">
          
          <option 
            v-for="(priority) in priorities"  
            :key="priority.id"
            
            >{{priority.code}}</option>
        </select>
        
      </div>
      <button type="submit">{{buttonText}}</button>

    </form>
    


      <ul id="projects-list">
        <li 
          v-for="(project) in orderedProjects" 
          :key="project.id">
          <div class="project-wrapper">
            {{project.name}} 
            <div class="priority-info" :style="{'backgroundColor': project.priority.color}"></div>
          </div>
          <div class="icons edit-icon">
            <img 
              :id="'editp-'+project.id" 
              src="../assets/icons/pencil.png" 
              alt="edit"
              @click="setProjectForm"
            >
          </div>
          <div class="icons close-icon">
            <img 
              :id="'delp-'+project.id" 
              src="../assets/icons/X.png" 
              alt="del"
              @click="deleteProject"
            >
          </div>
          <div class="icons week-icon">
            <img 
              :id="'weekp-'+project.id" 
              src="../assets/icons/calendar.png" 
              alt="add"
              @click="addToWeek"
            >
          </div>
        </li>
      </ul>
  </div>
</template>



<script>
import Vue from 'vue'
import store from '../store/store'
import Vuex from 'vuex'
import {priorities} from '../data.js'

export default {
  store: store,
  data() {
    return {
      projectName: '',
      projectPriority: '',
      projectId: 0,
      priorities,
      buttonText: "Add a project"
    }
  },
  computed: {
    ...Vuex.mapGetters([
      'projects',
      'orderedProjects'
    ])
  },
  methods: {
    ...Vuex.mapActions({
      addProjectStore: 'addProject',
      deleteProjectStore: 'deleteProject'
    }),
    addProject() {
      if(this.projectName !== ""){
        this.addProjectStore({
          name: this.projectName,
          priority: priorities[this.projectPriority],
          id: this.projectId
        }),
        this.projectName = ''
        this.projectPriority = ''
        this.projectId = 0
        this.buttonText = "Add a project"
      }
    },
    setProjectForm (event) {
      const targetId = event.target.id.split('-')[1]
      
      const id = parseInt(targetId) || 0
      
      // look for the project with the Id clicked
      const currentProject = this.projects.find((pro) => pro.id === id)
      
      // If we find id, set the data variables in the form
      if(currentProject){
        this.projectName = currentProject.name
        this.projectPriority = currentProject.priority.code
        this.projectId = id
        this.buttonText = `Edit ${this.projectName}`
      }
      
    },
    deleteProject (event) {
      const targetId = event.target.id.split('-')[1]
      
      const id = parseInt(targetId) || 0
      
      // look for the project with the Id clicked
      const currentProject = this.projects.find((pro) => pro.id === id)
      
      if(currentProject){
        this.deleteProjectStore(currentProject)
      }
    }
    
  }
}
</script>

<style lang="scss" scoped src="../scss/projects.scss"></style>
