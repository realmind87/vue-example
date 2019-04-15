<template>
  <div id="container">
    <ContactList v-bind:contactlist='contactlist'></ContactList>
  </div>
</template>

<script>
import CONF from './Config'
import ContactList from './components/ContactList';

export default {
  components : { ContactList },
  data(){
    return { 
      contactlist : {
        pageno:1,
        pagesize:CONF.PAGESIZE,
        totalcount:0,
        contacts:[]
      }
     } 
  },
  mounted () {
    console.log( 'coasldkfkasld;f' );
    this.fetchContacts();
  },
  methods: {
    fetchContacts(){
      
      this.$axios.get( '/api/contacts' , {
        params : {
          pageno : this.contactlist.pageno,
          pagesize : this.contactlist.pagesize
        }
      })
      .then((res)=>{
        this.contactlist = res.data;
      })
      .catch((e)=>{
        console.log('fetchContacts failed', e);
        this.contactlist.contacts = [];
      })
    }
  }
}
</script>

<style scoped>
@import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
</style>
