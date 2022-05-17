<template>
  <v-card id="create-post" min-width="500px" elevation="4">
    <template v-slot:title>
      <router-link to="profile">
        <v-avatar class="avatar"></v-avatar>
      </router-link>
      <div id="create-text-post" @click="showTextPost = true">
        {{ $store.state.userDisplayName }} ơi, bạn muốn chia sẻ với mọi người gì
        thế?
        <v-dialog v-model="showTextPost">
          <v-card id="create-text-post-dialog">
            <v-card-title class="title-inside-dialog"
              >Tạo bài viết
              <v-btn
                icon="mdi-window-close"
                variant="plain"
                width="40px"
                height="40px"
                color="grey lighten-1"
                size="x-large"
                class="close-dialog"
                @click="showTextPost = false"
              >
              </v-btn>
            </v-card-title>
            <v-card variant="contained-flat" width="100%">
              <v-card-title
                class="text"
                style="align-items: unset; line-height: 1.5"
              >
                <router-link
                  to="profile"
                  class="rounded"
                  style="height: fit-content"
                >
                  <v-avatar class="avatar"></v-avatar>
                </router-link>
                <div
                  class="ml-2"
                  style="
                    display: flex;
                    flex-direction: column;
                    font-weight: 700;
                  "
                >
                  {{ $store.state.userDisplayName }}
                  <v-select
                    class="privacy-opts"
                    variant="contained-flat"
                    :items="privacyOpts"
                    v-model="chosenPrivacy"
                    hide-details
                  ></v-select>
                </div>
              </v-card-title>
            </v-card>
            <v-textarea
              variant="contained-flat"
              placeholder="Chia sẻ với mọi nguời nào!"
              autofocus
              required
              hide-details
              single-line
              no-resize
              v-model.lazy="textPostContent"
              style="width: 500px"
            >
            </v-textarea>
            <v-card-actions style="width: 100%">
              <v-btn
                variant="contained"
                class="text"
                width="100%"
                height="100%"
                :disabled="textPostContent == ''"
                @click="
                  (showTextPost = false),
                    (postCaption = textPostContent),
                    (textPostContent = '')
                "
              >
                Đăng
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
    <template v-slot:subtitle>
      <div id="other-type-posts">
        <v-btn id="post-video" class="text" height="30px" flat rounded="lg">
          <v-icon
            size="x-large"
            icon="mdi-video-outline"
            color="#F3425F"
          ></v-icon>
          Đăng video
        </v-btn>
        <v-btn id="post-image" class="text" height="30px" flat rounded="lg">
          <v-icon
            size="x-large"
            icon="mdi-file-image-outline"
            color="#45BD62"
          ></v-icon>
          Đăng ảnh
        </v-btn>
        <v-btn id="post-event" class="text" height="30px" flat rounded="lg">
          <v-icon
            size="x-large"
            icon="mdi-flag-variant"
            color="#00b8d4"
          ></v-icon>
          Sự kiện đáng nhớ
        </v-btn>
      </div>
    </template>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      showTextPost: false,
      postCaption: "",
      privacyOpts: ["Công khai", "Bạn bè", "Mình tôi"],
      chosenPrivacy: "Công khai",
      textPostContent: "",
    };
  },
};
</script>

<style lang="scss">
#create-post {
  margin-top: 10px;
  justify-content: center;
  align-content: center;
  align-self: center;
}

#create-text-post {
  background: #f5f5f5;
  color: #65676b;
  padding-left: 14px;
  border-radius: 25px;
  margin: auto;
  font-size: 1.0625rem;
  font-weight: 400;
  height: 40px;
  min-width: 450px;
  align-items: center;
  align-self: center;
  display: flex;
  cursor: pointer;
  transition-duration: 0.35s;
}

#create-text-post:hover {
  background-color: #00000015;
  transition-duration: 0.35s;
}

#create-text-post-dialog {
  height: 428px;
  width: 500px;
  align-items: center;
}

#create-text-post-dialog textarea {
  padding-top: 0;
}

.privacy-opts .v-field__outline {
  border-radius: 6px;
  background-color: #00000015;
}

.privacy-opts .v-select__selection-text,
.privacy-opts .v-field__field,
.privacy-opts .v-field__input,
.privacy-opts .v-field__append-inner,
.privacy-opts .v-field__outline,
.v-select {
  padding: 0;
  height: fit-content !important;
  min-height: 28px;
  max-height: 28px;
  display: flex;
  align-items: center;
}

.privacy-opts {
  .v-field--appended {
    padding-inline-end: 4px;
    padding-inline-start: 10px;
  }
}

.privacy-opts.v-select .v-field .v-field__input > input {
  display: none;
}

.v-textarea .v-field__input {
  line-height: normal;
}

textarea {
  font-size: 22px;
}

.v-card-actions .v-btn:not(.v-btn--disabled) {
  color: white;
  background-color: #1de9b6;
}

#other-type-posts {
  height: 40px;
  min-width: 500px;
  border-top: solid 1px #e4e6eb;
  padding-top: 15px;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

#create-post .v-card-subtitle {
  opacity: 1;
}

.title-inside-dialog {
  width: 100%;
  height: 60px;
  border-bottom: solid 1px #e4e6eb;
  justify-content: center;
  align-items: center;
}

.close-dialog {
  position: absolute;
  right: 10px;
}

.text {
  font-weight: 425;
  letter-spacing: 0.25px;
  font-size: 1rem;
  text-transform: unset !important;
}

#other-type-posts .v-icon {
  margin-right: 8px;
}
</style>
