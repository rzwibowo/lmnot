import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Hai from '@/components/Hai'
import Jawab from '@/components/Jawab'
import Hasil from '@/components/Hasil'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hai',
      component: Hai
    },
    {
      path: '/jawab',
      name: 'Jawab',
      component: Jawab
    },
    {
      path: '/hasil',
      name: 'Hasil',
      component: Hasil
    }
  ]
})
