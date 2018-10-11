<template>
  <div id="app">
    <header>
      <ul>
        <li>Projects</li>
        <li><img alt="Warp logo" src="./assets/logo.png"></li>
        <li>Members</li>
      </ul>
    </header>
    <div class="panel left-panel">
      <Projects />
    </div>
    <div class="panel right-panel">
      <Members />
    </div>
    <div id="content">
      <CurrentProjects />
    </div>
    
    
  </div>
</template>

<script>

import Members from './components/Members.vue'
import Projects from './components/Projects.vue'
import CurrentProjects from './components/CurrentProjects.vue'

export default {
  name: 'app',
  components: {
    Members,
    Projects,
    CurrentProjects
  }
}
</script>

<style lang="scss" src="./scss/app.scss">

</style>
