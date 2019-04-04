<template>
  <div id="container">
      <div class='page-header'>
          <h1 class="text-center">연락처 관리 어플리케이션</h1>
          <p>( Dynamic Component + EventBus + Axios )</p>
      </div>
      <component :is="currentView" :contact='contact'></component>
      <contactList :contactlist="contactlist"></contactList>
      <paginate ref="pagebuttons"
        :page-count='totalpage'
        :page-range='7'
        :margin-pages='3'
        :click-handler='pageChanged'
        :prev-text="'이전'"
        :next-text="'다음'"
        :container-class="'pagination'"
        :page-class="'page-item'">
      </paginate>

  </div>
</template>

<script>
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import UpdateContact from './components/UpdateContact';
import UpdatePhoto from './components/UpdatePhoto';

import CONF from './Config.js'
import eventBus from './EventBus.js'
import Paginate from 'vuejs-paginate'

export default {
  name: 'App',
  components: { ContactList, AddContact, UpdateContact, UpdatePhoto, Paginate },
  data(){
    return {
      currentView : null,
      contact : {
        no : 0,
        name : '',
        tel : '',
        address : '',
        photo : ''
      },
      contactlist : {
        pageno : 1,
        pagesize : CONF.PAGESIZE,
        totalcount : 0,
        contacts: []
      }
    }
  },
  mounted(){

  },
  computed : {

  },
  methods : {

  },
  watch : {

  }
}
</script>

<style scoped>
@import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
#container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
