<template>
    <div id="main">
        <div id="container">
            <form method="post" @submit.prevent>
                <h1>Welcome to NTN</h1>
                <h2>Registration</h2>
                <div class="flex-container flex-row">
                    <div class="col-3">
                        <label for="firstname">First Name</label>
                        <input type="text" placeholder="Tùng" id="firstname" required>
                    </div>
                    <div class="col-3">
                        <label for="middlename">Middle Name</label>
                        <input type="text" placeholder="Duy" id="middlename">
                    </div>
                    <div class="col-3">
                        <label for="lastname">Last Name</label>
                        <input type="text" placeholder="Đoàn" id="lastname">
                    </div>
                </div>
                <div class="flex-container flex-row">
                    <div class="col-2">
                        <label for="dob">Birthday</label>
                        <input type="date" id="dob" required>
                    </div>
                    <div class="col-2">
                        <label>Gender</label>
                        <div class="flex-container">
                            <label for="male" class="radio-box col-3">
                                <input type="radio" name="sex" id="male" checked="checked">Male
                                <span class="radio-checkmark"></span>
                            </label>
                            <label for="female" class="radio-box col-3">
                                <input type="radio" name="sex" id="female">Female
                                <span class="radio-checkmark"></span>
                            </label>
                            <label for="other" class="radio-box col-3">
                                <input type="radio" name="sex" id="other">Other
                                <span class="radio-checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="flex-container">
                    <div class="col-2">
                        <label for="username">Username</label>
                        <input type="text" placeholder="tung.doan.3" id="username" required>
                        <span class="login-err"></span>
                    </div>
                </div>
                <div class="flex-container">
                    <div class="col-2">
                        <label for="password">Password</label>
                        <input type="password" id="password" required>
                        <span class="login-err"></span>
                    </div>
                </div>
                <div class="flex-container">
                    <div class="col-2">
                        <label for="re-password">Retype Password</label>
                        <input type="password" id="re-password" required>
                        <span class="login-err"></span>
                    </div>
                </div>
                <br><br>
                <button class="login-btn button-68"
                        title="CLick to login"
                        @click="submit">
                    SIGN UP
                </button>
            </form>

            <h4>Already have an account ?</h4>
            <router-link to="/login" class="login-btn button-69">LOGIN</router-link>


            <footer><a href="">NTN.com</a></footer>
        </div>
    </div>
</template>

<script>


// heroicons import
// import { UserIcon, LockClosedIcon } from '@heroicons/vue/outline';

// css import
import '@/assets/style/login/login.css';

export default {

}

</script>

<style scoped>
div#main {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
}

div#container {
    position: relative;
    width: 50rem;
    background-color: white;
    border-radius: 15px;
    padding: 30px 50px;
}

div.col-3,
div.col-2 {
    margin: 0.5rem 1rem;
}

form {
    position: relative;
    width: 100%;
}

div#login-options > label {
    flex: 1;
}

div#login-options > span#forgot {
    text-align: right;
    flex: 1;
}

footer {
    text-align: center;
    margin-top: 1.5rem;
}

footer a {
    text-decoration: none;
    color: darkgrey;
}

h1, h2, h4 {
    text-align: center;
    margin: 1rem 0px;
}

h3 {
    text-align: left;
    margin: 0.5rem 0px;
}

input {
    width: 100%;
    height: 36px;
    border: none;
    border-bottom: 2px solid #ccc;
    font-size: 1rem;
}

input:focus-visible {
    border-bottom: 2px solid #27aE60;
    transition: .75s ease;
}

.login-btn {
    width: 100%;
    height: 50px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 15px;
}

span.login-err {
    display: none;
    margin: 10px 0px;
    color: red;
}

.user-icon, .pwd-icon {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    color: grey;
}
</style>