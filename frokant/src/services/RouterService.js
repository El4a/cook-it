import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/cards/main'
import AddNew from '@/components/new/form-add-new'
// import Faq from '@/components/FAQ'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recipes',
      component: Main,
    },
    {
      path: '/recipes',
      name: 'recipes', //also doesnt seem necessary BUT is saved on the $this.route object so useful for routing "hacks" (see swipecommands for navigation on mobile)
      component: Main,
      props: true
    },
    {
      path: '/recipes/public',
      name: 'publicRecipes',
      component: Main,
      props: true
    },
    {
      path: '/recipes/mine',
      name: 'myRecipes',
      component: Main,
      props: true
    },
    {
      path: '/recipes/favorites',
      name: 'favoriteRecipes',
      component: Main,
      props: true
    },
    {
      path: "/new",
      name: 'new',
      component: AddNew
    },
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
