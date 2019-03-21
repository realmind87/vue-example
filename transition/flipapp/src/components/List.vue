<template>
  <div id="list">
      <input type="text" v-model:value="val" v-on:keyup.enter='keyEvent' />
        <transition-group appear
            name='list' 
            tag='ul' 
            class="list"
            @before-enter='beforeEnter'
            @enter="enter">
            <li v-for="(list, index) in lists" v-bind:key='index'>
                <span>{{ index }}</span>
                <span>{{ list.name }}</span>
                <a href="#" v-on:click='deleteEvent(index)'>삭제</a>
            </li>
        </transition-group>
  </div>
</template>

<script>

export default {
  name: 'list',
  data : function() {
    return {
      val : '',
      count : 0,
      lists : [
          { id:0 , name:'list01', done:true },
          { id:1 , name:'list02', done:true },
          { id:2 , name:'list03', done:true },
          { id:3 , name:'list04', done:true },
          { id:4 , name:'list05', done:true }
      ]
    }
  },
  methods: {
    keyEvent : function(e){
        this.val = e.target.value;
        this.count = this.lists.length;
        this.lists.push({ id: this.count, name : this.val , done : false })
    },
    deleteEvent : function(index){
        this.lists.splice(index,1);
    },
    beforeEnter : function(){
        console.log( "before enter" );
    },
    enter : function(){
        console.log( 'enter' );
    }

  }
}
</script>

<style scoped>
* {margin:0px;padding:0px;}
  .list {padding:30px;background-color:#efefef;}
  .list li {list-style:none;border-bottom:1px solid #efefef;padding:10px;color:blue}
  
</style>
