<template>
  <v-main class="login-bg">
    <v-container class="login-ctn">
      <v-form>
        <h1 class="text-center my-2">Chào mừng đến với NTN</h1>
        <h2 class="text-center my-2">Đăng nhập</h2>
        <v-row class="mt-2">
          <v-text-field
            label="Tài khoản"
            placeholder="Nhập username của bạn"
            prepend-inner-icon="mdi-account-outline"
            counter="64"
            maxlength="64"
            clearable
            variant="underlined"
            color="green-darken-2"
            v-model.lazy="account.username"
            :rules="loginRules.username"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            label="Mật khẩu"
            placeholder="Nhập mật khẩu của bạn"
            prepend-inner-icon="mdi-lock-outline"
            :append-inner-icon="
              loginRules.showPassword ? 'mdi-eye' : 'mdi-eye-off'
            "
            counter="64"
            maxlength="64"
            clearable
            variant="underlined"
            color="green-darken-2"
            v-model="account.password"
            :rules="loginRules.password"
            :type="loginRules.showPassword ? 'text' : 'password'"
            @click:append-inner="
              loginRules.showPassword = !loginRules.showPassword
            "
          ></v-text-field>
        </v-row>
        <v-row class="mt-n10 justify-space-between">
          <v-col cols="6" class="ml-n5">
            <v-checkbox
              label="Duy trì đăng nhập"
              class="align-center text-black"
              color="green"
            ></v-checkbox>
          </v-col>
          <v-col cols="6" class="pt-7 text-right">
            <!-- <v-btn>Quên mật khẩu ?</v-btn>-->
            Quên mật khẩu ?
          </v-col>
        </v-row>
        <v-row>
          <router-link to="/home" class="button-68 login-btn" @click="submit">
            Đăng nhập
          </router-link>
        </v-row>
        <v-row>
          <h4 class="ml-auto mr-auto mt-8 mb-4">Bạn chưa có tài khoản ?</h4>
          <br />
          <router-link to="/registration" class="button-69 login-btn">
            Tạo tài khoản mới
          </router-link>
        </v-row>
        <v-footer class="mt-10 mb-2">
          <v-row justify="center">
            {{ new Date().getFullYear() }} @<strong> NTN.com</strong>
          </v-row>
        </v-footer>
      </v-form>
    </v-container>
  </v-main>
</template>

<script lang="ts">
// heroicons import
//
import "@/assets/style/style.scss";

import { loginRules } from "@/utils/FormValidate";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {},
  props: {},

  setup() {
    type Account = {
      username: string;
      password: string;
    };

    const account = ref<Account>({
      username: "",
      password: "",
    });

    function submit(): void {
      if (account.value.username !== "" && account.value.password !== "") {
        console.log(account.value);
      }
    }

    return { account, submit };
  },
});
</script>

<style lang="scss">
.login-bg {
  background-image: url("../assets/imgs/bg-01.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.login-ctn {
  width: 32rem;
  margin: 0 auto;
  border-radius: 15px;
  padding: 3rem;
  box-sizing: border-box;
  background-color: white;
}

.v-field--variant-filled .v-field__overlay {
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

.v-btn.v-btn--density-default {
  height: fit-content;
}

.router-link-active {
  text-decoration: none;
}

.login-btn {
  width: 100%;
  height: 50px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 15px;
  text-transform: uppercase;
}
</style>
