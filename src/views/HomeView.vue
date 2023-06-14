<script setup lang="ts">
import { createApp, ref, computed } from 'vue';
import { jobs } from '../assets/Data';

const text = ref('');

const filteredJobs = computed(() => {
  return jobs.filter(job => job.position.toLowerCase().includes(text.value.toLowerCase())) && jobs.filter(job => job.company.toLowerCase().includes(text.value.toLowerCase()))
})

createApp({
  data() {
    return {
      text,
      filteredJobs
    }
  }
}).mount('#main')

</script>

<template>
  <main id="main">
    <div>
      <section class="second-header">
        <button>Filters</button>
        <div class="search-bar">
          <input type="text" v-model="text" placeholder="Search...">
        </div>
      </section>

      <section class="jobs">
        <div v-for="job in filteredJobs" :key="job.id" class="job">
          <img :src="job.picture" />
          <div>
            <h4 style="font-weight: 500;">{{ job.company }}</h4>
            <h2 style="font-weight: 600;">{{ job.position }}</h2>
            <div style="display: flex; align-items: center;">
              <p style="color: rgb(0, 134, 89); background-color: #f9f9f9; padding: 2px 10px; border-radius: 15px; margin: 5px; font-weight: 500;">{{ job.salary }}</p>
              <p v-for="skill in job.skills" style="background-color: #f9f9f9; padding: 2px 10px; border-radius: 15px; margin: 5px; font-weight: 500;">{{ skill }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
#main {
  width: 100vw;
  height: 75px;
  padding-top: 55px;
}

.second-header {
  background-color: white;
  position: fixed;
  top: 65px;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 40px;
}

.second-header button {
  background-color: white;
  font-size: 18px;
  font-weight: 600;
  color: rgb(122, 122, 122);
  padding: 8px 25px;
  border: 1px solid rgb(137, 137, 137);
  border-radius: 20px;
  margin: 0 10px;
}

.search-bar {
  margin: 0 80px;
}

.search-bar input {
  font-size: 18px;
  padding: 0 20px;
  height: 40px;
  border: 1px solid rgb(137, 137, 137);
  border-radius: 8px;
}

.jobs {
  background-color: #f9f9f9;
  width: 55%;
  padding: 10px 25px;
  border-radius: 7px;
  margin: 100px 0px 0px 45px;
}

.job {
  background-color: white;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border-radius: 7px;
  margin: 25px 0;
}

.job:hover {
  cursor: pointer;
  box-shadow: 0 0 8px 1px #c9c9c993;
}

.job img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 10px;
}
</style>
