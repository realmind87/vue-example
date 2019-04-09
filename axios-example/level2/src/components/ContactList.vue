<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>내용</th>
          <th>등록일</th>
          <th>수정일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(key, index) in contactlist" :key='index'>
          <td>{{ index }}</td>
          <td><a :href="'/'+key.restBbsIdx">{{ key.title }}</a></td>
          <td>{{ key.contents }}</td>
          <td>{{ key.crtDtm }}</td>
          <td>{{ key.updDtm }}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  data () {
    return {
      nametest : 'namevalue', 
      contactlist : []
    }
  },
  created(){
    
    this.$axios.get('/api')
      .then((res)=>{
        this.contactlist = res.data.response;
      })
      .catch((e)=>{
        console.log(e);
      });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

