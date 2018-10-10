<template>
  <div>
    <form action="post" @submit.prevent="addMember">
      <div class="row">
        <label for="memberName">Name </label>
        <input type="text" name="memberName" v-model="memberName" placeholder="Draymond" />
      </div>
      <div class="row">
        <label for="memberPosition">Position</label>
        <select v-model="memberPosition">
          
          <option 
            v-for="(pos) in positions"  
            :key="pos.id"
            >{{pos.code}}</option>
        </select>
        
      </div>
      <button type="submit">Add a member</button>

    </form>

    <ul id="members-list">
      <li 
        v-for="(member, index) in members" 
        v-bind:key="index" 
        :style="{backgroundColor:member.color}"
        >
        {{member.name}} - {{member.position.code}} - {{member.initials}}

      </li>
    </ul>
  </div>
</template>


<script>
import Vue from 'vue'
import store from '../store'
import Vuex from 'vuex'
import {positions} from '../data.js'
import {getInitials} from '../helpers.js'


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
    ...Vuex.mapGetters(['members', 'membersInitials'])
  },
  methods: {
    ...Vuex.mapActions({
      addMemberStore: 'addMember',
      addMemberInitialsStore: 'addMemberInitials'
    }),
    addMember () {
      // Adds a new member and updates the initials array with the new one created
      if(this.memberName !== ""){
        const initials = getInitials(this.memberName, this.membersInitials)
        this.addMemberStore({
          name: this.memberName, 
          position: positions[this.memberPosition],
          initials
        })
        this.addMemberInitialsStore(initials)
        this.memberName = ''
      }
      
    }
  }
}
</script>

<style lang="scss" scoped>
  

  #members-list{
    margin-top: 60px;

    li{
      text-align: center;
      padding: 10px 0;
      margin-bottom: 5px;
    }
  }
</style>
