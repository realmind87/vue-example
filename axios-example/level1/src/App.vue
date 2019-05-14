<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 애플리케이션</h1>
      <p>(Dynamic Component + EventBus + Axios) </p>       
    </div>

    <!-- component -->
    <component :is='currentView' :contact="contact"></component>

    <!-- contactList -->
    <contactList :contactlist="contactlist"></contactList>

    <!-- page -->
    <paginate          
      :page-count="totalpage"        
      :page-range="7"         
      :margin-pages="3"         
      :click-handler="pageChanged"         
      :prev-text="'이전'"         
      :next-text="'다음'"         
      :container-class="'pagination'"         
      :page-class="'page-item'">
    </paginate>
  </div>
</template>

<script>
import Vue from 'vue'

import contactList from '@/components/ContactList';
import AddContact from '@/components/AddContact';
import UpdateContact from '@/components/UpdateContact';
import UpdatePhoto from '@/components/UpdatePhoto';

import CONF from './Config';
import eventBus from './EventBus';
import Paginate from 'vuejs-paginate';

export default {
    name : 'app',
    components : { contactList, AddContact, UpdateContact, UpdatePhoto, Paginate },
    data(){
      return {
        currentView : null,
        contact : { no:0, name:'', tel:'', address:'', photo:'' },
        contactlist : {
          pageno:1,
          pagesize : CONF.PAGESIZE,
          totalcount :0,
          contacts: []
        }
      }
    },
    mounted(){

    },
    computed: {
      totalpage(){
        return Math.floor((this.contactlist.totalcount - 1) / this.contactlist.pagesize) + 1;
      }
    },
    methods: {
      pageChanged(){

      }
    },
    watch: {
      ['contactlist.pageno'] : function(){
        this.$refs.pagebuttons.selected = this.contactlist.pageno-1; 
      }
    },
}
</script>

<style>
</style>
