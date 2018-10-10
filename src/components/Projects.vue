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
      <button type="submit">Add a project</button>

    </form>
    


      <ul id="projects-list">
        <li 
          v-for="(project) in orderedProjects" 
          :key="project.id">
          {{project.name}} 
          <div class="priority-info" :style="{'backgroundColor': project.priority.color}"></div>
        </li>
      </ul>
  </div>
</template>



<script>
import Vue from 'vue'
import store from '../store'
import Vuex from 'vuex'
import {priorities} from '../data.js'

export default {
  store: store,
  data() {
    return {
      projectName: '',
      projectPriority: '',
      priorities
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
      addProjectStore: 'addProject'
    }),
    addProject() {
      if(this.projectName !== ""){
        this.addProjectStore({
          name: this.projectName,
          priority: priorities[this.projectPriority]
        }),
        this.projectName = ''
      }
      
    }
    
  }
}
</script>

<style lang="scss" scoped>
  #projects-list{
    margin-top: 60px;
    padding-left: 10px;
    padding-right: 10px;

    li{
      text-align: left;
      padding: 10px 0;
      margin-bottom: 5px;
      position: relative;
      border-bottom: 1px #3a539b solid;      
    }
    
  }
  .priority-info{
        width: 20px;
        height: 20px;
        position: absolute;
        right: 0;
        top: 10px;
        background-color: black;
  }
  .row {
    .priority-info{
      top: 0;
    }
  }
</style>
