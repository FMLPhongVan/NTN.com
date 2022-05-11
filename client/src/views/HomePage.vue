<template>
  <tool-bar></tool-bar>
  <user-post></user-post>
</template>

<script>
import UserPost from "@/components/UserPost";
import ToolBar from "@/components/ToolBar";

export default {
  components: {
    "user-post": UserPost,
    "tool-bar": ToolBar,
  },
};
</script>
