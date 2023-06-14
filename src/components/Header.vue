<script setup lang="ts">

</script>

<template>
    <div class="header">
        <div>
            <h1 style="font-weight: 400;">Jobs{}</h1>
            <h3></h3>
        </div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
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
    padding: 5px 15px;
}

nav a {
    color: rgb(0, 134, 89);
    padding: 5px;
    border: 2px solid rgb(0, 134, 89);
    margin: 0 10px;
}
</style>