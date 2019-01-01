import Vue from 'vue'
import Router from 'vue-router'
// import Drinks from '@/components/DrinksList'
// import Orders from '@/components/PendingOrderList'
// import Faq from '@/components/FAQ'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/drinks'
    // },
    // {
    //   path: '/drinks',
    //   name: 'drinks', //also doesnt seem necessary BUT is saved on the $this.route object so useful for routing "hacks" (see swipecommands for navigation on mobile)
    //   component: Drinks,
    // },
    // {
    //   path: "/orders",
    //   name: 'orders',
    //   component: Orders
    // },
    // {
    //   path: "/FAQ",
    //   name: "faq",
    //   component: Faq
    // },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
