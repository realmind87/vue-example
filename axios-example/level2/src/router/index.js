import Vue from 'vue'
import Router from 'vue-router'
import ContactList from '@/components/ContactList'
import ContactView from '@/components/ContactView'
import axios from 'axios'

Vue.prototype.$axios = axios;
Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'contactlist',
      component: ContactList
    },
    {
      path: '/:num',
      name : 'contactview',
      component : ContactView,
      props :true
    }
  ]
})
