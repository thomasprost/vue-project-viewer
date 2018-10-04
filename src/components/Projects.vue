<template>
  <div>
    Current projects: 
      <input type="text" placeholder="Valrhona" v-model="projectName" @keypress.enter="addProject" />
      {{ projectName }}
      <ul>
        <li 
          v-for="(project, index) in projects" 
          :key="index">
          {{project.name}}  
        </li>
      </ul>
  </div>
</template>



<script>
import Vue from 'vue'
import store from '../store'
import Vuex from 'vuex'

export default {
  store: store,
  data() {
    return {
      projectName: ""
    }
  },
  computed: {
    ...Vuex.mapGetters([
      'projects'
    ])
  },
  methods: {
    ...Vuex.mapActions({
      addProjectStore: 'addProject'
    }),
    addProject() {
      this.addProjectStore(this.projectName),
      this.projectName = ''
    }
    
  }
}
</script>
