<template>
  <div id="app">
    <list />
  </div>
</template>

<script>
import List from '@/components/list'

export default {
    name : 'app',
    components : { List }
}
</script>

<style>
  * {margin:0;padding:0;}
  li {list-style: none;}
  table {width:100%;border-collapse:collapse; border-spacing:0;}
</style>
