<template>
  <div>
    <table border='1'>
      <thead>
        <tr>
          <th>이름</th><th>전화번호</th><th>주소</th><th>사진</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='contact in contactlist'>
          <td>{{ contact.name }}</td>
          <td>{{ contact.tel }}</td>
          <td>{{ contact.address }}</td>
          <td><img class="thumbnail" v-bind:src="contact.photo" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default { 
  props : ['contactlist']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
