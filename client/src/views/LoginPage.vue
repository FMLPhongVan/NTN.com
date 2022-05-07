<template>
  <v-main>
    <v-container>
      <v-form>
        <h1>Chào mừng đến với NTN</h1>
        <h2>Đăng nhập</h2>
        <div>
          <v-text-field
            label="Tài khoản"
            placeholder="Nhập username của bạn"
            prepend-inner-icon="mdi-account-outline"
            counter="64"
            maxlength="64"
            clearable
            color="green-darken-2"
            v-model="account.username"
            :rules="loginRules.username"
          ></v-text-field>
        </div>
        <div>
          <v-text-field
            label="Mật khẩu"
            placeholder="Nhập mật khẩu của bạn"
            prepend-inner-icon="mdi-lock-outline"
            counter="64"
            maxlength="64"
            clearable
            color="green-darken-2"
            v-model="account.password"
          ></v-text-field>
        </div>
      </v-form>
    </v-container>
  </v-main>
  <div id="main">
    <div id="container">
      <form @submit.prevent>
        <div id="login-options">
          <label class="checkbox-container">
            <input type="checkbox" />Duy trì đăng nhập
            <span class="checkbox-checkmark"></span>
          </label>
          <span id="forgot">Quên mật khấu ?</span>
        </div>

        <button
          class="login-btn button-68"
          title="CLick to login"
          @click="submit"
        >
          ĐĂNG NHẬP
        </button>
      </form>

      <h4>Bạn chưa có tài khoản ?</h4>
      <router-link to="/registration" class="login-btn button-69"
        >TẠO TÀI KHOẢN MỚI</router-link
      >

      <footer><a href="">NTN.com</a></footer>
    </div>
  </div>
</template>

<script>
// heroicons import
//
import { loginRules } from "@/utils/FormValidate.js";

export default {
  components: {},

  data() {
    return {
      account: {
        username: "",
        password: "",
      },
      loginRules,
    };
  },

  methods: {
    submit() {
      if (this.account.username !== "" && this.account.password !== "") {
        console.log(this.account.username);
      }

      // this.account.username = '';
      // this.account.password = '';
    },
  },
};
</script>

<style lang="scss">
.v-field__overlay {
  background-color: white !important;
}

.v-label.v-field-label--floating {
  --v-field-label-scale: 1.1rem;
  font-size: 1.1rem;
  font-weight: bold;
  top: -0.25rem !important;
}

.v-field--error {
  &:not(.v-field--disabled) {
    .v-label.v-field-label {
      color: red;
    }
    .v-field__prepend-inner {
      > .v-icon {
        color: red;
      }
    }
  }
}

.v-input--error {
  &:not(.v-input--disabled) {
    .v-input__details {
      .v-messages {
        color: red;
      }
    }
  }
}

//.v-field--error:not(.v-field--disabled) .v-label.v-field-label,
//.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,
//.v-field--error:not(.v-field--disabled) .v-field__prepend-inner > .v-icon {
//  color: red;
//}

div#main {
  position: relative;
  overflow: auto;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
}

div#container {
  /*margin: auto;*/
  position: relative;
  height: auto;
  width: 30rem;
  background-color: white;
  border-radius: 15px;
  padding: 24px 40px;
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

h1,
h2,
h4 {
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
  border-bottom: 2px solid #27ae60;
  transition: 0.75s ease;
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

.user-icon,
.pwd-icon {
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  color: grey;
}

.router-link-active {
  text-decoration: none;
}
</style>
