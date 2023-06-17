<script setup lang="ts">

</script>

<template>
    <div class="header">
        <div>
            <h1 style="font-weight: 400; font-size: 40px;">Jobs{}</h1>
            <h3></h3>
        </div>
        <nav>
            <RouterLink class="find-jobs-button" to="/">Find Jobs</RouterLink>
            <RouterLink class="about-button" to="/about">About Us</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
.header {
    box-sizing: border-box;
    height: 100%;
    background-color: white;
    color: rgb(0, 134, 89);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px 5px 20px;
}

.about-button {
    background-color: rgb(0, 134, 89);
    color: white;
    font-size: 17px;
    padding: 5px;
    border: 2px solid rgb(0, 134, 89);
    border-radius: 7px;
    margin: 0 10px;
}

.about-button:hover {
    background-color: white;
    color: rgb(0, 134, 89);
}

.find-jobs-button {
    color: rgb(0, 134, 89);
    font-size: 17px;
    padding: 5px;
    border: 2px solid rgb(0, 134, 89);
    border-radius: 7px;
    margin: 0 10px;
}

.find-jobs-button:hover {
    background: rgb(0, 134, 89);
    color: white;
}

</style>