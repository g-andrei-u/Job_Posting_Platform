import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import JobViewVue from '../views/JobView.vue';
import AboutViewVue from '../views/AboutView.vue';
import { jobs } from '@/assets/Data';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },

    {
      path: `/job/:id`,
      name: 'job',
      component: JobViewVue,
      props: (route) => {
        const routeID = Number(route.params.id);
        const job = jobs.find((job) => job.id === routeID);
        return {
          picture: job ? job.picture : '',
          company: job ? job.company : '',
          position: job ? job.position : '',
          salary: job ? job.salary : 0,
          skills: job ? job.skills : []
        }
      }
    }
  ]
})

export default router
