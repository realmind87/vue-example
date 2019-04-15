<template>
  <div>
    <table border='1'>
      <thead>
          <tr>
            <th>이름</th><th>전화번호</th><th>주소</th><th>사진</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for='contacts in contactlist.contacts'>
            <td>{{ contacts.name }}</td>
            <td>{{ contacts.tel }}</td>
            <td>{{ contacts.address }}</td>
            <td><img arc="" v-bind:src="contacts.photo" /></td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'list',
  props : ['contactlist'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
