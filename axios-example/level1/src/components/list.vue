<template>
  <div>
    <div class="xmp">
      <xmp>{{ contacts }}</xmp>
    </div>
  </div>
</template>

<script>


export default {
    name : 'list',
    data(){
      return { contacts : [] }
    },
    mounted() {
      this.fetchContacts();
    },
    methods: {
      fetchContacts(){
        this.$http.get('/api/contacts' , {
          params : {pageno:1, pagesize:5}
        })
        .then((response)=>{
          console.log( response.data );
          this.contacts = response.data;
        })
        .catch((ex)=>{
          console.log("ERROR!!!! : ", ex);
        })
      }
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrap {padding:30px;}
  .list {border-top:1px solid #efefef;border-right:1px solid #efefef;border-left:1px solid #efefef;font-size:14px;}
  .list th {border-bottom:1px solid #efefef;padding:5px;}
  .list td {border-bottom:1px solid #efefef;text-align:center;padding:5px;}
</style>
