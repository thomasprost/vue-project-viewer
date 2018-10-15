<template>
  <div id="current-wrapper">
    <h2>This week' projects</h2>
    <div id="projects-container">
      <div 
        v-for="project in currentProjects" 
        :key="project.id"
        class="proj-item"
      >
      {{project.name}}


      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import store from '../store/store'
import Vuex from 'vuex'
export default {
  store: store,
  computed: {
    ...Vuex.mapGetters([
      'currentProjects',
    ])
  },
}
</script>

<style lang="scss" scoped>
  #projects-container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr)
  }

  .proj-item{
    border: 1px solid rgba(74, 74, 74, 0.075);
    transition: all .2s;
    min-height: 300px;

    &:hover {
      border: 3px solid rgba(129, 196, 131, 0.5);
    }
  }
</style>

