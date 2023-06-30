<script setup lang="ts">
import { createApp, ref } from 'vue';

const email = ref('');
const password = ref('');
const border = ref('2px solid black');

const changeBorder = () => {
    border.value = '2px solid red';
}

const props = defineProps({
    logIn: {
        type: Function
    }

})

const onLogIn = () => {
    if (email.value.includes('@') && email.value.includes('.') && password.value) {
        if (props.logIn) {
            props.logIn()
        }
    } else {
        changeBorder()
    }
}

createApp({
    data() {
        email;
        border
    },

    methods: {

    }
}).mount('.loin-page');

</script>

<template>
    <div class="login-page">
        <div class="login-description">
            <div class="login-desc">
            <h1 style="font-weight: 400">Jobs{}</h1>
            <p>Find the best remote programming jobs around the world here on the Jobs Developer Job Board.</p>
            </div>
            <img src="../assets/Images/find-a-job-cartoon.png" />
        </div>
        <div class="login-form"> 
            <form>
                <label style="font-size: 18px;">Log In</label>
                <br>
                <input v-model="email" :style="{border: border}" type="email" placeholder="Email..."/>
                <input v-model="password" :style="{border: border}" type="password" placeholder="Password..."/>
                <button @click="onLogIn" type="button" class="button">Submit</button>
                <p style="font-size: 12px;">copy and paste:</p>
                <h4>name@email.com</h4>
                <h4>1234</h4>
            </form>
        </div>
    </div>
</template>

<style scoped>

h1 {
    color: rgb(0, 134, 89);
    font-size: 65px;
} 

img {
    width: 450px;
    margin-top: 25px;
    margin-left: 250px;
}

.login-page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100vh;
    width: 100vw;
    padding: 90px 45px;
}

.login-description {
    box-sizing: border-box;
    width: 100%;
    grid-column: 1/2;
    grid-row: 1/3;
}

.login-desc {
    display: flex;
    flex-direction: column;
    width: 75%;
}

.login-desc p {
    font-size: 20px;
} 

.login-form {
    grid-column: 2/3;
    grid-row: 1/3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.login-form form {
    background-color: rgb(250, 250, 250);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 58%;
    width: 45%;
    padding: 5px;
    border: 1px solid rgb(139, 139, 139);
    border-radius: 7px;
}

.login-form form input {
    font-size: 16px;
    margin: 5px 0;
    padding: 3px 5px;
    border-radius: 4px;
}


@media screen and (max-width: 750px) {

    img {
      width: 200px;
      margin-top: 25px;
      margin-left: 50px;
    }

    .login-page {
      padding: 20px 15px;
    }

    .login-description {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        grid-column: 1/3;
        grid-row: 1/2;
        padding-bottom: 100px;
    }

    .login-desc {
      width: 90%;
    }

    .login-form {
      grid-column: 1/3;
      grid-row: 2/3;
    } 

    .login-form form {
      height: 98%;
      width: 50%;
      padding: 5px;
    }
}

@media screen and (max-width: 460px) {

    h1 {
    font-size: 40px;
    } 

    img {
      display: none;
    }

    .login-page {
      padding: 10px 15px 190px 15px;
    }

    .login-desc {
      width: 97%;
    } 

    .login-desc p {
    font-size: 17px;
    } 

    .login-form form {
      height: 98%;
      width: 85%;
      padding: 5px;
    } 

    .login-form form input {
      padding: 7px 10px;
    }
}

</style>