<template>
  <div>
    Current projects: 
      <input type="text" placeholder="Valrhona" v-model="projectName" @keypress.enter="addProject" />
      {{ projectName }}
      <ul id="projects-list">
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

<style lang="scss" scoped>
  #projects-list{
    margin-top: 60px;
    padding-left: 10px;

    li{
      text-align: left;
      padding: 10px 0;
      margin-bottom: 5px;
    }
  }
</style>
