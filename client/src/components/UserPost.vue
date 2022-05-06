<template>
  <main>
    <div class="top-bar">
      <div class="user-detail flex-container">
        <div class="user-avatar"></div>
        <div class="name-date">
          <h4>Đoàn Duy Tùng</h4>
          <span>3 phút trước</span>
        </div>
        <div class="post-options">
          <DotsVerticalIcon class="po-opt-icon" />
          <div class="po-otp-container">
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// heroicons import
import { DotsVerticalIcon } from "@heroicons/vue/outline";

export default {
  components: {
    DotsVerticalIcon,
  },
};
</script>

<style>
.user-avatar {
  width: 4rem;
  height: 4rem;
  background-image: url("../assets/imgs/photo-1535713875002-d1d0cf377fde.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
}

.po-opt-icon {
  width: 1rem;
  height: 1rem;
  color: grey;
}
</style>
