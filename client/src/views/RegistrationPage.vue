<template>
  <div id="main">
    <div id="container">
      <form method="post" @submit.prevent>
        <h1>Chào mừng bạn đến với NTN</h1>
        <h2>Đăng ký</h2>
        <div class="flex-container flex-row">
          <div class="col-3">
            <label for="lastname">Họ</label>
            <input
              type="text"
              placeholder="Đoàn"
              id="lastname"
              maxlength="32"
              v-model.lazy.trim="newAccount.firstName"
              @blur="checkFirstName"
            />
            <span class="login-err" v-if="errorMessages.firstNameErr !== ''">{{
              errorMessages.firstNameErr
            }}</span>
          </div>
          <div class="col-3">
            <label for="middlename">Đệm</label>
            <input
              type="text"
              placeholder="Duy"
              id="middlename"
              maxlength="32"
              v-model.lazy.trim="newAccount.middleName"
              @blur="checkMiddleName"
            />
            <span class="login-err" v-if="errorMessages.middleNameErr !== ''">{{
              errorMessages.middleNameErr
            }}</span>
          </div>
          <div class="col-3">
            <label for="firstname">Tên</label>
            <input
              type="text"
              placeholder="Tùng"
              id="firstname"
              required
              maxlength="32"
              v-model.lazy.trim="newAccount.lastName"
              @blur="checkLastName"
            />
            <span class="login-err" v-if="errorMessages.lastNameErr">{{
              errorMessages.lastNameErr
            }}</span>
          </div>
        </div>
        <div class="flex-container flex-row">
          <div class="col-2">
            <label for="dob">Ngày sinh</label>
            <input
              type="date"
              id="dob"
              required
              v-model="newAccount.dob"
              @blur="checkDob"
            />
            <span class="login-err" v-if="errorMessages.dobErr !== ''">{{
              errorMessages.dobErr
            }}</span>
          </div>
          <div class="col-2">
            <label>Giới tính</label>
            <div class="flex-container">
              <label for="male" class="radio-box col-3">
                <input type="radio" name="sex" id="male" checked="checked" />Nam
                <span class="radio-checkmark"></span>
              </label>
              <label for="female" class="radio-box col-3">
                <input type="radio" name="sex" id="female" />Nữ
                <span class="radio-checkmark"></span>
              </label>
              <label for="other" class="radio-box col-3">
                <input type="radio" name="sex" id="other" />Khác
                <span class="radio-checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="flex-container">
          <div class="">
            <div class="flex-container mr-1">
              <div class="col-2">
                <label for="username">Tài khoản</label>
                <input
                  type="text"
                  placeholder="tung.doan.3"
                  id="username"
                  minlength="8"
                  maxlength="64"
                  required
                  v-model.lazy.trim="newAccount.username"
                  @blur="checkUsername"
                />
                <span class="login-err">{{ errorMessages.usernameErr }}</span>
              </div>
            </div>
            <div class="flex-container mr-1">
              <div class="col-2">
                <label for="password">Mật khẩu</label>
                <input
                  type="password"
                  id="password"
                  minlength="8"
                  maxlength="64"
                  required
                  v-model.lazy="newAccount.password"
                />
                <span class="login-err">{{ errorMessages.passwordErr }}</span>
              </div>
            </div>
            <div class="flex-container mr-1">
              <div class="col-2">
                <label for="re-password">Nhập lại mật khẩu</label>
                <input
                  type="password"
                  id="re-password"
                  required
                  v-model.lazy="repassword"
                />
                <span
                  class="login-err"
                  v-if="repassword !== newAccount.password && repassword !== ''"
                >
                  Mật khẩu nhập lại không giống
                </span>
              </div>
            </div>
          </div>
          <div class="col-2">
            <!--                        <img src="../assets/imgs/photo-1535713875002-d1d0cf377fde.jpeg" alt="" class="user-img">-->
            <div class="user-img"></div>
            <div>
              <label class="button-69 img-label" for="img-file"
                >Chọn ảnh đại diện</label
              >
              <input type="file" id="img-file" hidden @change="checkAvatar" />
            </div>
          </div>
        </div>
        <br />
        <button
          class="login-btn button-68"
          title="CLick to login"
          @click="submit"
        >
          Đăng ký
        </button>
      </form>

      <h4>Bạn đã có tài khoản ?</h4>
      <router-link to="/login" class="login-btn button-69"
        >Đăng nhập</router-link
      >

      <footer><a href="">NTN.com</a></footer>
    </div>
  </div>
</template>

<script>
// module import
import {
  isValidName,
  isValidPassword,
  isValidUserName,
} from "@/utils/FormValidate";

// heroicons import
// import { UserIcon, LockClosedIcon } from '@heroicons/vue/outline';

// css import
import "@/assets/style/login/login.scss";

export default {
  data() {
    return {
      newAccount: {
        firstName: "",
        middleName: "",
        lastName: "",
        dob: new Date().toISOString().slice(0, 10),
        gender: 0,
        username: "",
        password: "",
        avatar: "../assets/imgs/photo-1535713875002-d1d0cf377fde.jpeg",
      },
      repassword: "",
      errorMessages: {
        firstNameErr: "",
        middleNameErr: "",
        lastNameErr: "",
        usernameErr: "",
        passwordErr: "",
        dobErr: "",
      },
    };
  },
  methods: {
    checkAccountName(namePath, errPath) {
      let err = " của bạn không hợp lệ";
      switch (errPath) {
        case "first":
          err = "Họ" + err;
          break;
        case "middle":
          err = "Đệm" + err;
          break;
        case "last":
          err = "Tên" + err;
          break;
      }
      this.errorMessages[`${errPath}NameErr`] = isValidName(namePath)
        ? ""
        : err;
    },
    checkFirstName() {
      this.checkAccountName(this.newAccount.firstName, "first");
    },
    checkMiddleName() {
      this.checkAccountName(this.newAccount.middleName, "middle");
    },
    checkLastName() {
      this.checkAccountName(this.newAccount.lastName, "last");
    },
    checkUsername() {
      this.newAccount.username = this.newAccount.username.toLowerCase();
      if (isValidUserName(this.newAccount.username)) {
        this.errorMessages.usernameErr = "";
      } else {
        this.errorMessages.usernameErr = `Tài khoản của bạn phải có ít nhất 8 kí tự bao gồm: các chữ cái, ít nhất 1 chữ số hoặc 1 kí tự đặc biệt (!, @, #, $, ^, &)`;
      }
      console.log("check user name");
    },
    checkPassword() {
      if (isValidPassword(this.newAccount.password)) {
        this.errorMessages.passwordErr = "";
      } else {
        this.errorMessages.passwordErr = `Mật khẩu của bạn phải có ít nhất 8 kí tự bao gồm: các chữ cái (cả thường, hoa), chữ số, các kí tự đặc biệt !, @, #, $, ^, &.`;
      }
    },
    checkDob() {
      const today = new Date().toISOString().slice(0, 10);
      if (this.newAccount.dob === today) {
        this.errorMessages.dobErr = "Hmm, bạn vừa mới chào đời ư ??? 😲";
      } else if (this.newAccount.dob >= today) {
        this.errorMessages.dobErr =
          "Rất tiếc, NTN chưa hỗ trợ những người đến từ tương lai 😁";
      } else {
        this.errorMessages.dobErr = "";
      }
    },
    checkAvatar() {
      const img = document.getElementById("img-file");
      this.newAccount.avatar = img.value;
      const userImage = document.getElementsByClassName("user-img")[0];
      userImage.style.backgroundImage.url = this.newAccount.avatar;
    },
  },
};
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
  width: 45rem;
  background-color: white;
  border-radius: 15px;
  padding: 24px 40px;
}

div.flex-container {
  margin-top: 0.5rem;
}

div.col-3,
div.col-2 {
  margin: 0.5rem 0.75rem;
  width: 100%;
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

input {
  width: 100%;
  height: 36px;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 1rem;
}

input:focus-visible {
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
  display: block;
  margin-top: 0.5rem;
  color: #ff4141;
  width: 100%;
}

.user-img {
  margin: auto;
  width: 12rem;
  height: 12rem;
  background-image: url("../assets/imgs/photo-1535713875002-d1d0cf377fde.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
}

.img-label {
  max-width: fit-content;
  display: block;
  padding: 2px 5px;
  margin: 0.5rem auto;
  text-align: center;
  overflow-wrap: break-word;
}
</style>
