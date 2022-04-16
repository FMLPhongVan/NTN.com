<template>
    <div id="main">
        <div id="container">
            <form @submit.prevent>
                <h1>Chào mừng đến với NTN</h1>
                <h2>Đăng nhập</h2>
                <div class="field-container" id="user-field">
                    <h3>Tài khoản</h3>
                    <label>
                        <UserIcon class="user-icon"/>
                        <input type="text"
                               placeholder="Nhập username của bạn"
                               required
                               class="login-input"
                               v-model.lazy="account.username">
                    </label>
                    <span class="login-err">Wrong username</span>
                </div>

                <div class="field-container" id="pwd-field">
                    <h3>Mật khẩu</h3>
                    <label>
                        <LockClosedIcon class="pwd-icon"/>
                        <input type="password"
                               placeholder="Nhập mật khẩu của bạn"
                               required
                               class="login-input"
                               v-model.lazy="account.password">
                    </label>
                    <span class="login-err">Wrong password</span>
                </div>

                <div id="login-options">
                    <label class="checkbox-container">
                        <input type="checkbox">Duy trì đăng nhập
                        <span class="checkbox-checkmark"></span>
                    </label>
                    <span id="forgot">Quên mật khấu ?</span>
                </div>

                <button class="login-btn button-68"
                        title="CLick to login"
                        @click="submit">
                    ĐĂNG NHẬP
                </button>
            </form>

            <h4>Bạn chưa có tài khoản ?</h4>
            <router-link to="/registration" class="login-btn button-69">TẠO TÀI KHOẢN MỚI</router-link>

            <footer><a href="">NTN.com</a></footer>
        </div>
    </div>
</template>

<script>

// heroicons import
import { UserIcon, LockClosedIcon } from '@heroicons/vue/outline';

// css import
import '@/assets/style/login/login.css';

export default {
    components: {
        UserIcon,
        LockClosedIcon,
    },

    data() {
        return {
            account: {
                username: '',
                password: '',
            },
        }
    },

    methods: {
        submit() {
            if (this.account.username !== '' && this.account.password !== '') {
                console.log(this.account.username);
            }

            // this.account.username = '';
            // this.account.password = '';
        }
    }
}
</script>

<style lang="css" scoped>
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
    /*margin: auto;*/
    position: relative;
    width: 30rem;
    background-color: white;
    border-radius: 15px;
    padding: 30px 50px;
}

form {
    position: relative;
    width: 100%;
}

div#login-options {
    width: 100%;
    display: flex;
    margin-bottom: 1rem;
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

.field-container {
    width: 100%;
    margin: 1.5rem 0px 1rem;
    position: relative;
    top: 0px;
    display: block;
}

h1, h2, h4 {
    text-align: center;
    margin: 1rem 0px;
}

h3 {
    text-align: left;
    margin: 0.5rem 0px;
}

.login-input {
    width: 100%;
    height: 36px;
    padding-left: 32px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 2px solid #ccc;
    font-size: 1rem;
}

input.login-input:focus-visible {
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

.router-link-active {
    text-decoration: none;
}
</style>