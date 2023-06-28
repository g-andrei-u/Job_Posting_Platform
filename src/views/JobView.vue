<script setup lang="ts">

const props = defineProps({
  picture: {
    type: String,
    required: true
  },

  company: {
    type: String,
    required: true
  },

  position: {
    type: String,
    required: true
  },

  skills: {
    type: Array,
    required: true
  },

  salary: {
    type: Number,
    required: true
  },

  level: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="job-page">
    <div class="job-stats">
      <div style="display: flex; align-items: center;">
        <img :src="props.picture">
        <h3>{{ props.company }}</h3>
      </div>
      <h1 style="margin: 10px 0 25px 0;">{{ props.position }}</h1>
      <p style="display: flex;">Location:<h4 style="padding: 0 5px;"> Remote anywhere 🌎 </h4></p>
      <p style="display: flex; padding: 2px 0;">Experiance:<h4 style="padding: 0 5px;"> {{ level }}</h4></p>
      <p style="display: inline;">salary: </p><h4 style="color: rgb(0, 134, 89); display: inline;">${{ props.salary }}k</h4>
      <br><br>
      <h3 style="display: inline; color: rgb(0, 134, 89);" v-for="skill in skills">[{{ skill }}] </h3>
    </div>

    <div class="job-desc">
      <h1>DESCRIPTION</h1><br>
      <p><h3>About us</h3>
        Prospa is building the operating system for 40m Nigerian entrepreneurs. With our mobile app business owners can open a business bank account in 5 minutes and get powerful tools to run a business (Invoicing, CRM, Inventory, e-commerce +More).
        Prospa is backed by Y Combinator, Global Founders Capital, Liquid 2 Ventures.<br><br>
        <h3>You’ll be expected to:</h3>
        Explore, define and develop new technologies and architecture,
        Re-evaluate existing technologies to constantly improve our platform,
        Improve upon and build new business-critical features and infrastructure<br><br>
        <h3>What you’ll be doing</h3>
        Design, develop, test, refactor and scale backend implementations of new and existing consumer product features,
        Work with smart algorithm processes to scale software from thousands to millions of transactions,
        Tackle software bugs and technical troubleshooting<br><br>
        <h3>Who are we looking for?</h3>
        Strong experience working on the backend of a technology product,
        Impact and mission driven,
        Champion mentality; result and goal orientated,
        Great team player with humility,
        Ability to communicate clearly and concisely<br><br>
        <h3>You have:</h3>
        A deep understanding of Python,
        Very good understanding of APIs and Django Rest framework,
        Very good understanding of Celery, RabbitMQ,
        Very good understanding of socket programming,
        Must have built awesome software before that had live active users</p>
    </div>
  </div>
</template>
  
<style scoped>
.job-page {
  box-sizing: border-box;
  height: 100vh;
  padding: 100px 20px 50px 20px;
  display: grid;
  grid-template-columns: 30% 70%;
}

.job-stats {
  grid-column: 1/2;
  border-right: 1px solid rgb(152, 152, 152);
  margin: 0 0 10px 25px;
}

.job-stats img {
  border-radius: 50%;
  width: 45px;
  margin: 0 10px 0 0;
}

.job-desc {
  grid-column: 2/3;
  margin: 0 0 10px 25px;
}

@media screen and (max-width: 600px) {

  .job-page {
    padding: 80px 20px 50px 10px;
    grid-template-rows: 40% 70%;
    grid-template-columns: 1fr;
  }

  .job-stats {
    grid-row: 1/2;
    grid-column: 1/2;
    border-right: 0px;
    margin: 0 0 0 25px;
  }

  .job-stats img {
  border-radius: 50%;
  width: 75px;
  margin: 0 10px 0 0;
  }

  .job-desc {
    grid-row: 2/3;
    grid-column: 1/2;
  margin: 0 0 10px 25px;
  }
  
}
</style>
  
  