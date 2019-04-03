<template>
  <div id="wrap">
    <div class='container'>
      
      <!-- 연락처 조회 -->
      <div class="form-group">
        <button @click='fetchContacts'>연락처조회</button>
      </div>

      <!-- 연락처 1건 추가 -->
      <div class="form-group">
        <input type='text' v-model='name' placeholder="이름을 입력합니다" />
        <input type='text' v-model='tel' placeholder="전화번호를 입력합니다" />
        <input type='text' v-model='address' placeholder="주소를 입력합니다" />
        <button @click='addContact'>연락처 1건 추가</button>
      </div>

      <!-- 연락처 1건 조회 -->
      <div class="form-group">
        <input type='text' v-model="no" class="no" />
        <button @click='fetchContactsOne'>연락처 1건 조회</button>
      </div>

      <!-- 연락처 수정 -->
      <div class="form-group">
        <input type='text' v-model='no' class="no" />
        <input type='text' v-model='name' placeholder="이름을 입력합니다" />
        <input type='text' v-model='tel' placeholder="전화번호를 입력합니다" />
        <input type='text' v-model='address' placeholder="주소를 입력합니다" />
        <button @click='updateContact'>수정</button>
      </div>

      <!-- 연락처 삭제 -->
      <div class="form-group">
        <input type='text' v-model='no' class="no" />
        <button @click='deleteContact'>삭제</button>
      </div>

      <!-- 파일변경 -->
      <div class="form-group">
        <input type='text' v-model='no' class="no" />
        <input type='file' ref='photofile' name='photo' />
        <button @click="changePhoto">파일 변경</button>
      </div>
    </div>

    <span>JSON 출력</span>
      <div id="result" class="container">
          <xmp>{{result}}</xmp>
      </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  data () {
    return { no:0, name:'', tel:'', address:'', result:null }
  },
  methods : {
    
    /* 연락처 조회 */
    fetchContacts(){

      console.log( '연락처 조회' );
      
      /* 저수준 메소드 */
      // axios({
      //   method : 'GET',
      //   url : '/api/contacts',
      //   params : { pageno : 1, pagesize : 5 }
      // })
      // .then( ( response ) => {
      //   console.log( response );
      //   this.result = response;
      // })
      // .catch( ( ex ) => {
      //   console.log( 'ERROR!!!! : ', ex );
      // })

      /* 별칭 메소드 */
      axios.get('/api/contacts', {
        params : { pageno : 1, pagesize : 5 }
      })
      .then( (response) => {
        console.log( response );
        this.result = response.data;
      })
      .catch( (ex)=>{
        console.log( 'ERROR!!!! : ', ex );
      })
    },

    /* 연락처 1건 추가 */
    addContact(){

      console.log( '연락처 1건 추가' ); 

      axios.post('/api/contacts', {
        name : this.name,
        tel : this.tel,
        address : this.address
      })
      .then( (response)=>{
        console.log(response);
        this.result = response.data;
        this.no = response.data.no;
      })
      .catch( (ex)=>{
        console.log( 'ERROR!!!! : ', ex );
      })

    },

    /* 연락처 1건 조회 */
    fetchContactsOne(){
      console.log( '연락처 1건 조회' );

      axios.get('/api/contacts/'+this.no)
        .then( ( response ) => {
          console.log(response);
          this.result = response.data;
        })
        .catch((ex)=>{
          console.log( 'ERROR!!!! : ', ex );
        })

    },
    
    /* 연락처 수정 */
    updateContact(){
      console.log( '연락처 수정' );

      axios.put('/api/contacts/'+this.no, {
        name : this.name,
        tel : this.tel,
        address : this.address
      })
      .then( (response)=>{
        console.log( response );
        this.name = '';
        this.tel = '';
        this.address = '';
        this.result = response.data
      })
      .catch( (ex)=>{
        console.log( 'ERROR!!!! : ', ex );
      })
    },

    /* 연락처 삭제 */
    deleteContact(){
      console.log( '연락처 삭제' )

      axios.delete('/api/contacts/'+this.no)
        .then((response)=>{
          console.log(response);
          this.no = 0;
          this.result = response.data
        })
        .catch((ex)=>{
          console.log( 'ERROR!!!! : ', ex );
        })
    },

    /* 파일변경 */
    changePhoto(){
      console.log( '파일변경' );

      var data = new FormData();
      var file = this.$refs.photofile.files[0];
      data.append('photo', file);

      axios.post('/api/contacts/'+this.no+'/photo', data)
        .then((response)=>{
          this.result = response.data; 
        })
        .catch((ex)=>{
         console.log('updatePhoto failed', ex);
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
  #wrap {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .container { border:solid 1px gray; padding:10px; margin-bottom:10px; text-align:left; }
  #result { text-align: left ; padding:20px; border:solid 1px black; }
  .form-group { border:dashed 1px gray; padding:5px 5px 5px 20px; }
  .no {width:80px;}
</style>
