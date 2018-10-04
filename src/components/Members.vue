<template>
  <div>
    {{memberName}}
    

    <form action="post" @submit.prevent="addMember">
      <div class="row">
        <label for="memberName">Name </label>
        <input type="text" name="memberName" v-model="memberName" placeholder="Draymond" />
      </div>
      <div class="row">
        <label for="memberPosition">Position</label>
        <select v-model="memberPosition">
          
          <option v-for="(pos, index) in positions" :key="index">{{pos.code}}</option>
        </select>
        
      </div>
      <button type="submit">Add Member</button>

    </form>
    <br>
    <br>
    <br>
    <ul>
      <li 
        v-for="(member, index) in members" 
        v-bind:key="index" 
        
        >
        {{member.name}}

      </li>
    </ul>
  </div>
</template>


<script>
import Vue from 'vue'
import store from '../store'
import Vuex from 'vuex'
import {positions} from '../data.js'

export default {
  store: store,
  data() {
    return {
      memberName: '',
      memberPosition: '',
      positions
    }
  },
  computed: {
    ...Vuex.mapGetters(['members'])
  },
  methods: {
    ...Vuex.mapActions({
      addMemberStore: 'addMember'
    }),
    addMember () {
      this.addMemberStore({name: this.memberName, position: this.memberPosition})
      this.memberName = ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
