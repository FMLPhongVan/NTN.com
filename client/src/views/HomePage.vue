<template>
  <tool-bar></tool-bar>
  <create-post-bar></create-post-bar>
  <user-post></user-post>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import CreatePostBar from "@/components/CreatePostBar";
import UserPost from "@/components/UserPost";

export default {
  components: {
    "tool-bar": ToolBar,
    "create-post-bar": CreatePostBar,
    "user-post": UserPost,
  },
};
</script>
