<template>
  <header class="header">
    <div class="logo">
      <img src="/assets/logo.png" />
    </div>
    <v-row id="search-wrapper">
      <v-text-field
        label="Tìm kiếm"
        placeholder="Tìm kiếm"
        variant="contained"
        counter="64"
        maxlength="64"
        single-line
        clearable
        hide-details
        prepend-inner-icon="mdi-magnify"
        v-model.lazy="searchContent"
      ></v-text-field>
    </v-row>
    <nav>
      <router-link to="/home" :class="homeInUse" class="page-tab">
        <home-icon class="nav-icon"></home-icon>
      </router-link>
      <router-link to="/friends" :class="friendsInUse" class="page-tab">
        <friends-icon class="nav-icon"></friends-icon>
      </router-link>
      <div
        id="notifications"
        type="button"
        @click="notiShow = !notiShow"
        :class="{ 'in-use': notiShow }"
        class="page-tab"
      >
        <notifications-icon class="nav-icon"></notifications-icon>
      </div>
      <router-link to="/messages" :class="messagesInUse" class="page-tab">
        <messages-icon class="nav-icon"></messages-icon>
      </router-link>
    </nav>
    <router-link to="/profile" class="profile">
      <div class="user-profile">
        <div class="user-avatar"></div>
        <div class="user-name">
          {{ displayName }}
        </div>
      </div>
    </router-link>
    <div
      id="options"
      type="button"
      @click="optionsShow = !optionsShow"
      :class="{ 'opts-show': optionsShow }"
    >
      <options-icon></options-icon>
    </div>
  </header>
</template>

<script>
import {
  HomeIcon,
  UsersIcon,
  ChatIcon,
  AnnotationIcon,
  ChevronDownIcon,
} from "@heroicons/vue/solid";

export default {
  name: "ToolBar",

  components: {
    "home-icon": HomeIcon,
    "friends-icon": UsersIcon,
    "notifications-icon": AnnotationIcon,
    "messages-icon": ChatIcon,
    "options-icon": ChevronDownIcon,
  },

  data() {
    return {
      searchContent: "",
      displayName: "Tunggggggggg",
      notiShow: false,
      optionsShow: false,
    };
  },
};
</script>

<style lang="scss">
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}

.header {
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.2),
    0 6px 20px -2px rgba(0, 0, 0, 0.19);
  justify-content: center;
  display: flex;
}

.header a {
  text-decoration: none;
}

.logo {
  margin-top: 8px;
  margin-bottom: 8px;
  width: 44px;
  height: 44px;
  margin-right: 14px;
  margin-left: 14px;
}

img {
  width: 100%;
}

#search-wrapper {
  display: flex;
  align-self: center;
  margin-top: 2px;
  margin-bottom: 2px;
  width: 250px !important;
  flex: none;
}

.v-text-field {
  background-color: #f0f0f0 !important;
  border-radius: 100px;
}

.v-label.v-field-label {
  align-self: center;
  margin: 0;
  color: black;
}

.v-input--density-default .v-field--variant-contained {
  --v-input-control-height: 40px;
  border-radius: 100px;
  background: #f5f5f5;
}

.v-field__input,
.v-field__field,
.v-field__clearable,
.v-field__prepend-inner {
  padding: 0;
  align-self: center;
  color: #07ab4b;
}

nav {
  display: flex;
  position: absolute;
  text-align: center;
  margin: auto;
  margin-right: auto;
}

.page-tab {
  color: black;
  border-radius: 12px;
  margin-top: 4px;
  margin-left: 6px;
  margin-right: 6px;
  align-self: center;
  display: inline-block;
}

.page-tab:hover {
  background-color: #90f58a;
  color: #79f58a;
  transition-duration: 0.35s;
}

.page-tab:hover .nav-icon {
  color: white;
  transition-duration: 0.35s;
}

.page-tab:active {
  transform: translateY(1.5px) scale(1.05);
  transition-duration: 0.3s;
}

.in-use {
  border-bottom: 4px solid #27ae60;
  border-radius: 0px;
  transition-duration: 0.35s;
}

.nav-icon {
  color: #27ae60;
  width: 28px;
  height: 40px;
  margin-top: 8px;
  margin-left: 3.25vw;
  margin-right: 3.25vw;
}

.profile {
  float: right;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: auto;
  display: block;
  position: absolute;
  left: 80vw;
  border-radius: 50px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.user-profile {
  display: flex;
  color: #27ae60;
  text-decoration: none;
  align-items: center;
  font-size: 125%;
  padding-right: 5px;
  border-radius: 50px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.user-profile:hover {
  background-color: #f0f0f0;
  transition-duration: 0.4s;
}

.user-profile:active {
  transform: translateX(5px) scale(1.05);
}

.user-avatar {
  width: 52px;
  height: 52px;
  padding: 1.5px;
  border-radius: 100px;
  box-sizing: border-box;
}

.user-name {
  margin-left: 5px;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  max-width: 100px;
}

#options {
  color: #27ae60;
  align-self: center;
  width: 40px;
  height: 40px;
  float: right;
  margin-left: auto;
  margin-right: 1rem;
  display: block;
  border-radius: 50px;
}

.opts-show {
  background-color: #f0f0f0;
}
</style>
