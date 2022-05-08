<template>
  <header class="header">
    <div class="logo"></div>
    <v-row id="search-wrapper">
      <v-autocomplete
        label="Tìm kiếm"
        placeholder="Tìm kiếm"
        variant="contained"
        counter="64"
        maxlength="64"
        single-line
        clearable
        hide-details
        hide-selected
        flat
        :items="suggestion"
        @keyup.enter="searching = true"
        prepend-inner-icon="mdi-magnify"
        v-model.lazy="searchContent"
      >
        <template v-slot:no-data>
          <v-list-item>
            <v-list-item-title>
              Tìm kiếm
              <strong>{{ searchContent }}</strong>
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-autocomplete>
      <v-progress-circular
        v-if="searching"
        size="24"
        color="#27ae60"
        indeterminate
      ></v-progress-circular>
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
        <div class="user-avatar avatar"></div>
        <div class="user-name">
          {{ displayName }}
        </div>
      </div>
    </router-link>
    <v-card
      id="options"
      :color="optionsShow ? '#23ae60' : undefined"
      @click="optionsShow = !optionsShow"
      :class="{ 'opts-show': optionsShow }"
    >
      <options-icon></options-icon>
    </v-card>
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
      searching: false,
      suggestion: [1, 2, 3],
      displayName: "Tunggggggggg",
      notiShow: false,
      optionsShow: false,
    };
  },

  watch: {
    searching(val) {
      if (!val) return;
      setTimeout(() => (this.searching = false), 2500);
    },
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
  background-image: url("../assets/NTNlogo.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 60px;
  margin-right: 20px;
  margin-left: 10px;
}

img {
  width: 100%;
}

#search-wrapper {
  display: flex;
  align-items: center;
  margin-top: 2px;
  margin-bottom: 2px;
  flex: none;
}

.v-text-field {
  background-color: #f0f0f0 !important;
  border-radius: 100px;
}

.v-autocomplete__selection {
  display: none;
}

.v-autocomplete--single.v-text-field input {
  align-self: center;
  position: relative;
}

.v-label.v-field-label {
  align-self: center;
  margin: 0;
  color: black;
}

.v-input--density-default .v-field--variant-contained {
  --v-input-control-height: 40px;
  width: 250px;
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

.v-field__append-inner > .v-icon {
  display: none;
}

.v-progress-circular {
  margin-left: 6px;
}

.v-list {
  color: #27ae60;
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
  font-size: 100%;
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

.avatar {
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
  color: white !important;
  transition-duration: 0.35s;
}
</style>
