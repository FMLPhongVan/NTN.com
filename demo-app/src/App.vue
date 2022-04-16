<template>
  <div class="wrapper">
    <tool-bar/>
    <ProfilePage>
    </ProfilePage>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

import ProfilePage from "./page/ProfilePage.vue"

export default {  
  name: 'App',
  components: {
    ProfilePage,
    ToolBar,
  }
}
</script>

<style>
.wrapper {
  float: left;
  width: 100%;
  margin-top: -8px;
  margin-left: -50vw;
  left: 50%;
  position: absolute;
}
</style>
