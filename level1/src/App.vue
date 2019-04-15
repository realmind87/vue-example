<template>
  <div id="app">
    <List :contactlist="contactlist"></List>
  </div>
</template>

<script>
import List from './components/list'
export default {
  name: 'App',
  data(){
    return {
      contact : { no:0, name:'', tel:'', address:'', photo:'' },
      contactlist : {
          pageno:1, pagesize: 5, totalcount:0, contacts:[]
      }
    }
  },
  components : { List },
  mounted() {
    this.fecthcontact();
  },
  methods: {
    fecthcontact(){
      this.$axios.get( '/api/contacts/', {
        params : {
          pageno : 1,
          pagesize : 5
        }
      })
      .then((response)=>{
        this.contactlist = response.data;
      })
      .catch((e)=>{
        console.log( e )
      })
    } 
  },
}
</script>

<style>
</style>
