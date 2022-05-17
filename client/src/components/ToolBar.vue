<template>
  <header class="header">
    <div class="logo"></div>
    <v-row id="search-wrapper">
      <v-col id="search-list" :class="{ 'full-search': suggestsShow }">
        <v-text-field
          label="Tìm kiếm"
          placeholder="Tìm kiếm"
          variant="contained"
          counter="64"
          maxlength="64"
          single-line
          clearable
          hide-details
          @click:clear="suggestsShow = false"
          @click="suggestsShow = true"
          @update:model-value="suggestsShow = true"
          @keyup.enter="search"
          :disabled="isSearching"
          v-click-outside="() => (suggestsShow = false)"
          prepend-inner-icon="mdi-magnify"
          v-model="searchContent"
        >
        </v-text-field>
        <v-fade-transition>
          <v-card class="mt-2" v-show="suggestsShow">
            <v-list>
              <v-list-subheader>Tìm kiếm gần đây</v-list-subheader>
              <v-list-item
                v-for="(suggestion, i) in suggestions"
                :key="i"
                :value="suggestion"
                @click="
                  searchContent = suggestion;
                  isSearching = true;
                "
              >
                <v-list-item-title v-text="suggestion"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-fade-transition>
      </v-col>
      <v-progress-circular
        v-if="isSearching"
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
        v-click-outside="hideNoti"
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
    <v-col>
      <v-card
        id="opts"
        :color="optionsShow ? '#23ae60' : undefined"
        @click="optionsShow = !optionsShow"
        :class="{ 'opts-show': optionsShow }"
        v-click-outside="hideOpts"
      >
        <options-icon></options-icon>
        <v-card id="opts-list" v-if="optionsShow">
          <v-list>
            <v-list-item
              v-for="(option, i) in options"
              :key="i"
              :value="option"
            >
              <v-list-item-avatar start>
                <v-icon :icon="option.icon"></v-icon>
              </v-list-item-avatar>
              <v-list-item-title v-text="option.text"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-card>
    </v-col>
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
      isSearching: false,
      suggestions: ["111111111111111111111111111111", "2", "3"],
      displayName: "Tunggggggggg",
      suggestsShow: false,
      notiShow: false,
      options: [
        { text: "Cài đặt", icon: "mdi-cog" },
        { text: "Đăng xuất", icon: "mdi-logout" },
      ],
      optionsShow: false,
    };
  },

  methods: {
    search() {
      this.isSearching = true;
      this.suggestsShow = false;
    },
    hideNoti() {
      this.notiShow = false;
    },
    hideOpts() {
      this.optionsShow = false;
    },
  },

  watch: {
    isSearching(val) {
      if (!val) return;
      setTimeout(() => (this.isSearching = false), 2500);
    },
  },
};
</script>

<style lang="scss" scoped>
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

#search-wrapper {
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  padding-bottom: 10px;
  flex: none;
}

.v-icon {
  opacity: 1 !important;
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
  color: #0dd05e;
  opacity: 1;
}

.full-search {
  width: 330px !important;
  background-color: white;
  transform: translateX(-80px);
  transition-duration: 0.3s;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-bottom-right-radius: 10px;
}

#search-list {
  padding: 10px;
  width: 250px;
  transition-duration: 0.5s;
}

.v-card--variant-contained {
  box-shadow: none;
}

.v-list-subheader {
  font-size: 18px;
  color: #00c150;
}

.v-list-subheader__text {
  opacity: 1;
}

.v-list {
  color: #27ae60 !important;
  padding: 0 !important;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 330px;
}

.v-list-item__overlay {
  border-radius: 10px;
}

.v-progress-circular {
  align-self: baseline;
  margin-left: 8px;
  margin-top: 18px;
}

nav {
  position: absolute;
  text-align: center;
  margin: auto;
  margin-right: auto;
}

.page-tab {
  color: black;
  border-radius: 12px;
  top: 200px;
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
  border-bottom: 2px solid #27ae60;
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
  text-overflow: ellipsis;
  text-decoration: none;
  max-width: 100px;
}

#opts {
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

#opts-list {
  float: right;
  width: 260px;
  margin-top: 1.45px;
  box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.2),
    0 6px 20px -2px rgba(0, 0, 0, 0.19);
}
</style>
