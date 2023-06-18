import { createRouter, createWebHistory } from 'vue-router';
import JobsView from '../views/JobsView.vue';
import JobView from '../views/JobView.vue';
import AboutViewVue from '../views/AboutView.vue';
import { jobs } from '@/assets/Data';
import HomeViewVue from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },

    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },

    {
      path: `/jobs/:id`,
      name: 'job',
      component: JobView,
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
    },

    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    }
  ]
})

export default router
