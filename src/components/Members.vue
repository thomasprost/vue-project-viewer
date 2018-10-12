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
      <button type="submit">{{buttonText}}</button>

    </form>

    <ul id="members-list">
      <li 
        v-for="(member) in members" 
        v-bind:key="member.id" 
        :style="{backgroundColor:member.color}"
        >
        <div class="member-wrapper">
          {{member.name}} - {{member.position.code}} - {{member.initials}}
        </div>
        <div class="icons edit-icon">
          <img 
            :id="'editm-'+member.id" 
            src="../assets/icons/pencil.png" 
            alt="edit"
            @click="setMemberForm"
          >
        </div>
        <div class="icons close-icon">
          <img 
            :id="'delm-'+member.id" 
            src="../assets/icons/X.png" 
            alt="del"
            @click="deleteMember"
          >
        </div>
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
      memberId: 0,
      buttonText: "Add a Member",
      positions
    }
  },
  computed: {
    ...Vuex.mapGetters(['members', 'membersInitials'])
  },
  methods: {
    ...Vuex.mapActions({
      addMemberStore: 'addMember',
      addMemberInitialsStore: 'addMemberInitials',
      deleteMemberStore: 'deleteMember'
    }),
    addMember () {
      // Adds a new member and updates the initials array with the new one created
      // If a memberId is set (different to 0), the member will be updated in the mutation function
      if(this.memberName !== ""){
        // Get the member initials, even on update the name might have changed
        const initials = getInitials(this.memberName, this.membersInitials)
        
        this.addMemberStore({
          name: this.memberName, 
          position: positions[this.memberPosition],
          id: this.memberId,
          initials
        })
        this.addMemberInitialsStore(initials)
        // Resetting data variables
        this.memberName = ''
        this.memberPosition = ''
        this.memberId = 0
        this.buttonText = "Add a Member"
      }
      
    },
    setMemberForm (event) {
      const targetId = event.target.id.split('-')[1]
      
      const id = parseInt(targetId) || 0
      
      // look for the member with the Id clicked
      const currentMember = this.members.find((mem) => mem.id === id)
      
      // If we find id, set the data variables in the form
      if(currentMember){
        this.memberName = currentMember.name
        this.memberPosition = currentMember.position.code
        this.memberId = id
        this.buttonText = `Edit ${this.memberName}`
      }
      
    },
    deleteMember (event){
      const targetId = event.target.id.split('-')[1]
      
      const id = parseInt(targetId) || 0
      
      // look for the member with the Id clicked
      const currentMember = this.members.find((mem) => mem.id === id)
      
      if(currentMember){
        this.deleteMemberStore(currentMember)
      }
      
    }
  }
}
</script>

<style lang="scss" scoped src="../scss/members.scss"></style>
