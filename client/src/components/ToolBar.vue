<template>
  <header class="header">
    <router-link to="/home" class="logo"></router-link>
    <v-row-auto id="search-wrapper">
      <v-col id="search-list" :class="{ 'full-search': suggestsShow }">
        <v-text-field
          label="Tìm kiếm"
          placeholder="Tìm kiếm"
          variant="contained"
          maxlength="64"
          single-line
          clearable
          hide-details
          @click:clear="suggestsShow = false"
          @click:control="suggestsShow = true"
          @update:model-value="suggestsShow = true"
          @keyup.enter="search"
          :disabled="isSearching"
          v-click-outside="() => (suggestsShow = false)"
          prepend-inner-icon="mdi-magnify"
          v-model="searchContent"
        >
        </v-text-field>
        <v-fade-transition>
          <v-card class="mt-2" v-if="suggestsShow">
            <v-list>
              <v-list-subheader v-if="searchContent == ''"
                >Tìm kiếm gần đây</v-list-subheader
              >
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
    </v-row-auto>
    <nav>
      <v-row id="nav-wrapper">
        <router-link to="/home" active-class="tab-in-use" class="page-tab">
          <v-icon size="large" class="nav-icon" :icon="homeIcon"></v-icon>
          <v-tooltip activator="parent" anchor="bottom">Trang chủ</v-tooltip>
        </router-link>
        <router-link to="/friends" active-class="tab-in-use" class="page-tab">
          <v-icon size="large" class="nav-icon" :icon="friendsIcon"></v-icon>
          <v-tooltip activator="parent" anchor="bottom">Bạn bè</v-tooltip>
        </router-link>
        <router-link to="/messages" active-class="tab-in-use" class="page-tab">
          <v-icon
            size="large"
            class="nav-icon"
            :icon="'mdi-chat-processing-outline'"
          ></v-icon>
          <v-tooltip activator="parent" anchor="bottom">Tin nhắn</v-tooltip>
        </router-link>
        <div
          type="button"
          class="page-tab"
          :class="{ 'tab-in-use': notiShow }"
          @click="notiShow = !notiShow"
          v-click-outside="hideNoti"
        >
          <v-icon class="nav-icon" :icon="notiIcon"></v-icon>
          <v-tooltip activator="parent" anchor="bottom">Thông báo</v-tooltip>
        </div>
      </v-row>
    </nav>
    <v-col-auto id="prof-wrapper">
      <v-card class="profile">
        <router-link to="/profile">
          <div class="user-profile">
            <v-avatar class="avatar" size="large"></v-avatar>
            <div class="user-name">
              {{ $store.state.userDisplayName }}
            </div>
          </div>
        </router-link>
      </v-card>
    </v-col-auto>
    <v-col-auto id="opts-wrapper">
      <v-card
        id="opts"
        :color="optionsShow ? '#23ae60' : undefined"
        @click="optionsShow = !optionsShow"
        :class="{ 'opts-show': optionsShow }"
        v-click-outside="hideOpts"
      >
        <v-icon icon="mdi-chevron-down" size="40px"></v-icon>
        <v-fade-transition>
          <v-card id="opts-list" v-show="optionsShow">
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
        </v-fade-transition>
      </v-card>
      <v-tooltip activator="parent" anchor="bottom">Thêm...</v-tooltip>
    </v-col-auto>
  </header>
</template>

<script>
export default {
  components: {},
  name: "ToolBar",

  data() {
    return {
      searchContent: "",
      homeIcon: "mdi-home-outline",
      friendsIcon: "mdi-account-supervisor-outline",
      messIcon: "mdi-chat-processing-outline",
      notiIcon: "mdi-tooltip-text-outline",
      isSearching: false,
      searchHistory: ["1", "2", "3"],
      suggestions: [],
      suggestsShow: false,
      notiShow: false,
      options: [
        { text: "Cài đặt", icon: "mdi-cog" },
        { text: "Đăng xuất", icon: "mdi-logout" },
      ],
      optionsShow: false,
    };
  },

  created() {
    if (window.location.pathname == "/home") {
      this.homeIcon = "mdi-home";
    } else {
      this.homeIcon = "mdi-home-outline";
    }

    if (window.location.pathname == "/friends") {
      this.friendsIcon = "mdi-account-supervisor";
    } else {
      this.friendsIcon = "mdi-account-supervisor-outline";
    }

    if (window.location.pathname == "/messages") {
      this.messIcon = "mdi-chat-processing";
    } else {
      this.messIcon = "mdi-chat-processing-outline";
    }
    this.suggestions = this.searchHistory.slice();
  },

  computed: {},

  methods: {
    search() {
      this.isSearching = true;
      this.suggestsShow = false;
      this.searchHistory.unshift(this.searchContent);
      this.searchContent = "";
      this.resetSuggestions();
      console.log(this.searchHistory);
    },

    resetSuggestions() {
      this.suggestions = this.searchHistory.slice();
    },

    hideNoti() {
      this.notiShow = false;
    },

    hideOpts() {
      this.optionsShow = false;
    },
  },

  watch: {
    notiShow(val) {
      if (val == false) {
        this.notiIcon = "mdi-tooltip-text-outline";
      } else {
        this.notiIcon = "mdi-tooltip-text";
      }
    },

    isSearching(val) {
      if (!val) return;
      setTimeout(() => (this.isSearching = false), 2500);
    },

    searchContent(val) {
      if (val == "") {
        this.resetSuggestions();
        return;
      }
      this.suggestions = [];
      this.suggestions.shift();
      this.suggestions.unshift(this.searchContent);
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

header {
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
}

header a {
  text-decoration: none;
}

.v-icon {
  opacity: 1 !important;
}

.logo {
  background-image: url("../assets/NTNlogo.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 60px;
  margin-right: 150px;
  margin-left: 10px;
}

#search-wrapper {
  position: absolute;
  left: 80px;
  z-index: 100;
  display: flex;
  margin-top: auto;
  margin-right: initial;
  margin-bottom: auto;
  padding-bottom: 10px;
  flex: none;
}

header .v-label.v-field-label {
  align-self: center;
  color: black;
}

header .v-input--density-default .v-field--variant-contained {
  --v-input-control-height: 40px;
  border-radius: 25px;
  background: #f5f5f5;
}

header .v-field__input {
  align-self: center;
  color: black !important;
  opacity: 1;
}

header .v-field__field,
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
  position: relative;
  transition-duration: 0.35s;
  transition-timing-function: ease;
}

header .v-card--variant-contained {
  box-shadow: none;
}

header .v-list-subheader {
  font-size: 18px;
}

header .v-list-subheader__text {
  opacity: 1;
}

header .v-list {
  padding: 0 !important;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 330px;
}

header .v-list-item__overlay {
  border-radius: 10px;
}

header .v-progress-circular {
  align-self: baseline;
  margin-left: 8px;
  margin-top: 18px;
}

#nav-wrapper {
  max-height: 60px;
  overflow: hidden;
}

nav {
  text-align: center;
  margin: auto;
}

nav .page-tab {
  float: left;
  border-radius: 8px;
  top: 200px;
  margin-left: 6px;
  margin-right: 6px;
  align-self: center;
}

nav .page-tab:hover:not(.tab-in-use) {
  background-color: #f2f3f5bb;
  transition-duration: 0.35s;
}

nav .tab-in-use {
  border-bottom: 3px solid #0dd05e;
  border-radius: 0px;
  margin-top: 3px;
  transition-duration: 0.35s;
}

nav .tab-in-use .nav-icon {
  color: #27ae60;
}

nav .nav-icon {
  color: #65676b;
  width: 30px;
  height: 30px;
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 3vw;
  margin-right: 3vw;
  align-self: center;
}

#prof-wrapper {
  float: right;
  align-self: center;
}

.profile {
  float: right;
  display: block;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 25px;
}

.user-profile {
  display: flex;
  color: #27ae60;
  text-decoration: none;
  align-items: center;
  font-size: 100%;
  padding-right: 5px;
  border-radius: 25px;
}

.user-profile:hover {
  background-color: #f2f3f5bb;
  transition-duration: 0.4s;
}

.user-profile:active {
  transform: translateX(5px) scale(1.05);
}

.avatar {
  background-image: url("../assets/imgs/photo-1535713875002-d1d0cf377fde.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
}

.user-name {
  margin-left: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  max-width: 100px;
}

#opts-wrapper {
  align-self: center;
}

#opts {
  color: #27ae60;
  align-self: center;
  width: 40px;
  height: 40px;
  float: right;
  display: block;
  margin-left: auto;
  margin-right: 1rem;
  border-radius: 25px;
}

.opts-show {
  color: white !important;
  transition-duration: 0.35s;
}

#opts-list {
  z-index: 100;
  float: right;
  width: 260px;
  margin-top: 10px;
  box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.2),
    0 6px 20px -2px rgba(0, 0, 0, 0.19);
  transition-duration: 0.35s;
}

#opts-list .v-list {
  border-radius: 15px;
}
</style>
