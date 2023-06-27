<script setup lang="ts">

</script>

<template>
    <div class="home-page">
        <div class="home-desc">
            <h1 style="font-size: 55px;">Remote Programming Jobs</h1>
            <p style="font-size: 20px;">Find the best remote programming jobs around the world here on the Arc Developer Job Board. Search 100% WFH software developer jobs matching your time zone and skills at top companies and apply today!</p>
            <br>
            <RouterLink to="/jobs"><button style="font-size: 25px; width: 300px; height: 50px;" class="button">Post Job</button></RouterLink>
        </div>
        <img src="../assets/Images/hero.png">
    </div>
</template>

<style scoped>

.home-page {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 100vw;
    padding: 100px 45px;
}

.home-page img {
    width: 500px;
}

.home-desc {
    display: flex;
    flex-direction: column;
    width: 50%;
}

@media screen and (max-width: 750px) {

    .home-page {
      flex-direction: column-reverse;
      padding: 200px 15px;
    }

    .home-page img {
      width: 400px;
    }

    .home-desc {
      width: 85%;
    } 
}

</style>