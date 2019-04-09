<template>
  <div>
    <button v-on:click="show = !show">toggle</button>
    <transition appear name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>
<script>
export default {
  data : function(){
    return {show : true}
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>