<script setup lang="ts">
import { createApp, ref, computed } from 'vue';
import { jobs } from '../assets/Data';
import nopicture from '../assets/Images/no-logo.png';

const text = ref('');
const inputCompany = ref('');
const inputJobPosition = ref('');
const inputSalary = ref(0);
const inputSkills = ref('')
const popup = ref(false);

const filteredJobs = computed(() => {
  return jobs.filter(job => job.position.toLowerCase().includes(text.value.toLowerCase())) &&  jobs.filter(job => job.company.toLowerCase().includes(text.value.toLowerCase()))
})

const addingJob = () => {
  if ( inputJobPosition.value && inputCompany.value ) {
    jobs.push(
      {
        id: jobs.length + 1,
        picture: nopicture,
        company: inputCompany.value,
        position: inputJobPosition.value,
        salary: inputSalary.value,
        skills: inputSkills.value.split(',').map(skill => skill.trim())
      }
    );
    popup.value = false;
    text.value = inputCompany.value
    inputCompany.value = '';
    inputJobPosition.value = '';
    inputSalary.value = 0;
    inputSkills.value = ''; 
  } else {
    alert("Please fill in all the required fields.");
 }
}

const setPopup = () => {popup.value = !popup.value}

createApp({
  data() {
    return {
      text,
      filteredJobs,
      popup,
    }
  },
  methods: {
    setPopup,
    addingJob
  }
}).mount('#main')

</script>

<template>
  <main :style="{overflowY: popup ? 'hidden' : 'visible'}" id="main">
    <div>
      <section class="second-header">
        <button>Filters</button>
        <div class="search-bar">
          <input type="text" v-model="text" placeholder="Search...">
        </div>
      </section>

      <section class="jobs">
        <RouterLink :to="`/jobs/${job.id}`" v-for="job in filteredJobs" :key="job.id" class="job">
          <img :src="job.picture" />
          <div>
            <h4 style="font-weight: 500;">{{ job.company }}</h4>
            <h2 style="font-weight: 600;">{{ job.position }}</h2>
            <div style="display: flex; align-items: center;">
              <p style="color: rgb(0, 134, 89); background-color: #f9f9f9; padding: 2px 10px; border-radius: 15px; margin: 5px; font-weight: 500;">${{ job.salary }}k</p>
              <p v-for="skill in job.skills" style="background-color: #f9f9f9; padding: 2px 10px; border-radius: 15px; margin: 5px; font-weight: 500;">{{ skill }}</p>
            </div>
          </div>
        </RouterLink>
      </section>

      <section class="post-job">
        <div>
          <h1 style="margin-bottom: 8px;">Unlimited Job Posting</h1>
          <p>💼 Placement in Arc job fairs</p>
          <p>💬 Unlimited candidate messaging</p>
          <p>📋 Company profile & branding</p>
          <button class="button" @click="setPopup">Post Jobs</button>
        </div>
      </section>
    </div>

    <div v-if="popup" class="form-popup">
      <div class="form-job">
        <div style="grid-column: 1/3; grid-row: 1/2; display: flex; justify-content: flex-end; align-items: center;">
          <button @click="setPopup" style="background-color: white; font-size: 25px; border: 0px; cursor: pointer;">X</button>
        </div>

        <div class="form-description">
          <h1>Effortlessly hire top remote developers</h1>
          <br><br>
          <h4 style="color: rgb(0, 134, 89);">🔥️ Hire in 72 hours (freelance) and 14 days (permanent).</h4>
          <br>
          <h4 style="color: rgb(0, 134, 89);">👍 Only 2.3% pass our technical & behavioral assessments.</h4>
          <br><br><br><br><br>
          <p style="font-size: 12px; color: rgb(90, 90, 90);">By creating an account, I agree to receive Jobs{} communications via email, and agree with the Arc Terms of Service, Privacy Policy, and Cookie Policy. I understand that I can unsubscribe at any time.</p>
        </div>

         <form class="form-form">
          <label style="font-size: 20px;">Job Details</label>
          <input v-model="inputCompany" class="input-text" type="text" placeholder="Company...">
          <input v-model="inputJobPosition"  class="input-text" type="text" placeholder="Position...">
          <input v-model="inputSalary"  class="input-text" type="number" placeholder="Salary...">
          <input v-model="inputSkills" class="input-text" type="text" placeholder="Skills..." >
          <br>
          <label style="font-size: 20px;">Experiance level</label>
          <div>
            <input type="radio" id="Junior" name="experiance" value="Junior">
            <label for="Junior">Junior</label>
          </div>
          <div>
            <input type="radio" id="Mid" name="experiance"  value="Mid">
            <label for="Mid">Mid</label>
          </div>
          <div>
            <input type="radio" id="Senior" name="experiance"  value="Senior">
            <label for="Senior">Senior</label>
          </div>
          <br>
          <button class="button" @click="addingJob">Submit Job Post</button>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
#main {
  width: 95vw;
  height: 75px;
  padding-top: 55px;
}

/* SECOND HEADER */

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
  margin: 0 70px;
}

.search-bar input {
  font-size: 18px;
  padding: 0 20px;
  height: 42px;
  width: 300px;
  border: 1px solid rgb(137, 137, 137);
  border-radius: 8px;
}

/* JOBS */

.jobs {
  background-color: #f9f9f9;
  width: 55%;
  padding: 10px 25px;
  border-radius: 7px;
  margin: 100px 0px 0px 45px;
}

.job {
  background-color: white;
  color: black;
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

/* POST JOB */

.post-job {
  box-sizing: border-box;
  position: fixed;
  top: 160px;
  right: 70px;
  background-color: white;
  width: 20%;
  height: 30vh;
  text-align: center;
  padding: 20px 0 0 0;
  border: 1px solid rgb(150, 150, 150);
  border-radius: 7px;
}

/* FORM */

.form-popup {
  position: fixed;
  top: 10%;
  left: 25%;
  background-color: white;
  width: 50%;
  height: 80%;
  border-radius: 7px;
  box-shadow: 0 0 0 10000px rgba(0, 0, 0, 0.797);
}

.form-job {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10% 1fr;
  padding: 15px;
}

.form-description {
  grid-column: 1/2;
  grid-row: 2/3;
  width: 100%;
  height: 100%;
  padding-right: 20px;
  border-right: 1px solid rgb(129, 129, 129);
}

.form-form {
  grid-column: 2/3;
  grid-row: 2/3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;

}

.input-text {
  width: 75%;
  height: 34px;
  padding: 0 5px;
  margin: 5px 0;
  border: 1px solid rgb(137, 137, 137);
  border-radius: 7px;
}

</style>
