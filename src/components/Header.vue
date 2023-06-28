<script setup lang="ts">

</script>

<template>
    <div class="header">
        <div>
            <h1 style="font-weight: 400">Jobs{}</h1>
            <h3></h3>
        </div>
        <nav>
            <RouterLink class="home-button" to="/">Home</RouterLink>
            <RouterLink class="find-jobs-button" to="/jobs">Find Jobs</RouterLink>
            <RouterLink class="about-button" to="/about">About Us</RouterLink>
        </nav>
    </div>
</template>

<style scoped>

h1 {
    font-size: 40px;
}

.header {
    box-sizing: border-box;
    height: 100%;
    background-color: white;
    color: rgb(0, 134, 89);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 30px 5px 30px;
}

.about-button {
    background-color: rgb(0, 134, 89);
    color: white;
    font-size: 17px;
    font-weight: 500;
    padding: 5px;
    border: 2px solid rgb(0, 134, 89);
    border-radius: 7px;
    margin: 0 10px;
}

.about-button:hover {
    cursor: pointer;
    background-color: white;
    color: rgb(0, 134, 89);
}

.find-jobs-button {
    color: rgb(0, 134, 89);
    font-size: 17px;
    font-weight: 500;
    padding: 5px;
    border: 2px solid rgb(0, 134, 89);
    border-radius: 7px;
    margin: 0 10px;
}

.find-jobs-button:hover {
    cursor: pointer;
    background: rgb(0, 134, 89);
    color: white;
}

.home-button {
    color: rgb(215, 162, 0);
    font-size: 17px;
    font-weight: 500;
    padding: 7px;
    border-radius: 7px;
    margin: 0 10px;
}

.home-button:hover {
    cursor: pointer;
    background-color: rgba(215, 161, 0, 0.3);
}


@media screen and (max-width: 750px) {
    .header {
      padding: 5px 10px 5px 10px;
    }

    .about-button {
      font-size: 17px;
      padding: 5px;
      margin: 0 5px;
    }

    .find-jobs-button {
      font-size: 17px;
      padding: 5px;
      margin: 0 5px;
    }

    .home-button {
      font-size: 17px;
      padding: 7px;
      margin: 0 5px;
    }
}

@media screen and (max-width: 400px) {
    .header {
      padding: 5px 3px 5px 8px;
    }

    .header h1 {
      font-size: 30px;
    }

    .about-button {
      font-size: 16px;
      padding: 5px;
      margin: 0 4px;
    }

    .find-jobs-button {
      font-size: 16px;
      padding: 5px;
      margin: 0 4px;
    }

    .home-button {
      font-size: 16px;
      padding: 7px;
      margin: 0 4px;
    }
}


</style>