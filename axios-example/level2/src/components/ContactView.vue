<template>
  <div>
    <strong>{{ contactView.title }}</strong>
    <div>
        {{ contactView.contents }}
    </div>
    <a href='/' >목록으로 가기</a>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  data () {
    return {
        contactView : []
    }
  },
  props:['num'],
  created(){
      this.$axios.get('/api/'+this.num)
      .then((res)=>{
          this.contactView = res.data.response;
      })
      .catch((e)=>{
          console.log(e);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

