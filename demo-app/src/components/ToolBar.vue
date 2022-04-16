<template>
  <header class="header">
    <img class="logo" src="../assets/logo.png" alt="" />
    <input class="search-bar" type="text" placeholder="Search..." />
    <button class="search-button" type="submit">
      <svg class="search-icon" fill="none" stroke="#008e7d" stroke-width="2">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
    <div class="user-info">
      <img class="user-image" src="../assets/logo.png" alt="" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'ToolBar',
};
</script>

<style>
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}

.header {
  width: 100%;
  background-color: #00d678;
  display: flex;
}

.logo {
  width: 40px;
  margin-right: 14px;
  margin-left: 14px;
}

.search-bar {
  float: left;
  width: 280px;
  padding: 0;
  border: 0;
  margin-top: 2px;
  margin-bottom: 2px;
  outline: none;
}

.search-button {
  width: 36px;
  background-color: #efefef;
  border: 0;
  margin-top: 2px;
  margin-bottom: 2px;
}

.search-button:hover {
  background-color: #d2d2d2;
  opacity: 1;
  transform: translateY(0);
  transition-duration: 0.35s;
}

.search-icon {
  position: relative;
  width: 100%;
  height: 24px;
  margin-top: 2px;
}

.user-info {
  height: 40px;
}

.user-image {
  float: left;
  background-color: #d2d2d2;
  max-width: 100%;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: 10px;
  margin-left: 700px;
  box-sizing: border-box;
  position: relative;
}
</style>
