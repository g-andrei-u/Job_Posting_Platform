<script setup lang="ts">
import { createApp, ref, computed } from 'vue';
import { jobs } from '../assets/Data';
import nopicture from '../assets/Images/no-logo.png';

const text = ref('');
const inputCompany = ref('');
const inputJobPosition = ref('');
const inputSalary = ref(0);
const inputSkills = ref('');
const inputLevel = ref('');
const popupForm = ref(false);
const popupFilters = ref(false);
const filterStyleColor = ref('rgb(122, 122, 122)');

const searchSalary = ref(0);
const searchLevel = ref('');
const activeFilter = ref(false)

const filteredJobs = computed(() => {

  if (!activeFilter.value) {
    return jobs.filter(job => 
    job.position.toLowerCase().includes(text.value.toLowerCase()) ||
    job.company.toLowerCase().includes(text.value.toLowerCase())
    )
  }  else {
    return jobs.filter(job => 
    job.level.toLowerCase().includes(searchLevel.value.toLowerCase()))
  }
});

const filteredAction = () => {
  popupFilters.value = false;
  activeFilter.value = true
};

const cancelFiltered = () => {
  activeFilter.value = false
};

const addingJob = () => {
  if ( inputJobPosition.value && inputCompany.value ) {
    jobs.push(
      {
        id: jobs.length + 1,
        picture: nopicture,
        company: inputCompany.value,
        position: inputJobPosition.value,
        salary: inputSalary.value,
        skills: inputSkills.value.split(',').map(skill => skill.trim()),
        level: inputLevel.value
      }
    );
    popupForm.value = false;
    text.value = inputCompany.value
    inputCompany.value = '';
    inputJobPosition.value = '';
    inputSalary.value = 0;
    inputSkills.value = ''; 
  } else {
    alert("Please fill in all the required fields.");
 }
};

const setPopupForm = () => {
  popupForm.value = !popupForm.value
};

const setPopupFilters = () => {
  popupFilters.value = !popupFilters.value
};

const buttonStyleOver = () => {
  filterStyleColor.value = 'rgb(0, 134, 89)'
};

const buttonStyleNotOver = () => {
  filterStyleColor.value = 'rgb(122, 122, 122)'
};

createApp({
  data() {
    return {
      text,
      filteredJobs,
      popupForm,
    }
  },
  methods: {
    setPopupForm,
    setPopupFilters,
    addingJob,
    buttonStyleOver,
    buttonStyleNotOver,
    filteredAction,
    cancelFiltered
  }
}).mount('#main')

</script>

<template>
  <main :style="{overflowY: popupForm || popupFilters ? 'hidden' : 'visible'}" id="main">
    <div>
      <section class="second-header">
        <div>
          <button 
          :style="{color: filterStyleColor, borderColor: filterStyleColor}" 
          @mouseover="buttonStyleOver" 
          @mouseleave="buttonStyleNotOver"
          @click="setPopupFilters"
          >Filters</button>
          
          <button
          v-if="activeFilter" 
          :style="{color: filterStyleColor, borderColor: filterStyleColor}"
          @click="cancelFiltered"
          >Cancel Filter</button>
        </div>
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
          <button class="button" @click="setPopupForm">Post Jobs</button>
        </div>
      </section>
    </div>

    <div v-if="popupForm" class="form-popup">
      <div class="form-job">
        <div style="grid-column: 1/3; grid-row: 1/2; display: flex; justify-content: flex-end; align-items: center;">
          <button @click="setPopupForm" style="position: relative; top: -15px; right: 10px; background-color: white; font-size: 28px; width: 0px; border: 0px; cursor: pointer;">X</button>
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
            <input v-model="inputLevel" type="radio" id="Junior" name="experiance" value="Junior">
            <label for="Junior">Junior</label>
          </div>
          <div>
            <input v-model="inputLevel" type="radio" id="Mid" name="experiance"  value="Mid">
            <label for="Mid">Mid</label>
          </div>
          <div>
            <input v-model="inputLevel" type="radio" id="Senior" name="experiance"  value="Senior">
            <label for="Senior">Senior</label>
          </div>
          <br>
          <button class="button" @click="addingJob">Submit Job Post</button>
        </form>
      </div>
    </div>

    <div v-if="popupFilters" class="filters-popup">
      <div class="filters">
        <h1>Filters</h1>
        <div style="margin: 8% 0;">
          <label style="font-size: 20px;">Experiance level</label>
          <div>
            <input v-model="searchLevel" type="radio" id="Junior" name="experiance" value="Junior">
            <label for="Junior"> Junior Level</label>
          </div>
          <div>
            <input v-model="searchLevel" type="radio" id="Mid" name="experiance"  value="Mid">
            <label for="Mid"> Mid Level</label>
          </div>
          <div>
            <input v-model="searchLevel" type="radio" id="Senior" name="experiance"  value="Senior">
            <label for="Senior"> Senior Level</label>
          </div>
          <br>
          <label style="font-size: 20px;">Salary Range</label>
          <div>
            <input v-model="searchSalary" type="radio" id="low" name="salary" value="low">
            <label for="low"> 0k - 50k</label>
          </div>
          <div>
            <input v-model="searchSalary" type="radio" id="medium" name="salary"  value="medium">
            <label for="medium"> 50k - 100k</label>
          </div>
          <div>
            <input v-model="searchSalary" type="radio" id="high" name="salary"  value="high">
            <label for="high"> 100k ++</label>
          </div>
        </div>

        <div>
          <button class="apply-button" @click="filteredAction">Apply</button>
          <button class="cancel-button" @click="setPopupFilters">Cancel</button>
        </div>
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
  cursor: pointer;
  background-color: white;
  font-size: 19px;
  font-weight: 600;
  padding: 8px 25px;
  border: 1px solid;
  border-radius: 20px;
  margin: 0 10px;
  transition: 300ms;
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
  top: 7%;
  left: 20%;
  background-color: white;
  width: 60%;
  height: 86%;
  border-radius: 7px;
  box-shadow: 0 0 0 10000px rgba(0, 0, 0, 0.797);
}

.form-job {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10% 1fr;
  padding: 25px;
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


/* FILTERS */

.filters-popup {
  position: fixed;
  top: 15%;
  left: 30%;
  background-color: white;
  width: 40%;
  height: 70%;
  border-radius: 7px;
  box-shadow: 0 0 0 10000px rgba(0, 0, 0, 0.797);
}

.filters {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 25px 35px;
}

.cancel-button {
  background-color: white;
  color: rgb(137, 137, 137);
  font-size: 19px;
  font-weight: 500;
  padding: 5px;
  border: 2px solid rgb(137, 137, 137);
  border-radius: 5px;
  margin: 0 10px;
}

.cancel-button:hover {
  cursor: pointer;
  color: rgb(0, 134, 89);
  border: 2px solid rgb(0, 134, 89);
}

.apply-button {
  background-color: rgb(215, 162, 0);
  color: white;
  font-size: 19px;
  font-weight: 600;
  padding: 5px 10px;
  border: 2px solid rgb(215, 162, 0);
  border-radius: 5px;
  margin: 0 10px;
}

.apply-button:hover {
  cursor: pointer;
  background-color: white;
  color: rgb(215, 162, 0);
  transition: 200ms;
}

</style>
