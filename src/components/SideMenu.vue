<template>
  <div class="menu">
    <div class="item" :class="{ 'active': activeTab === 'data' }" @click="onTabChange('data')">Company Data</div>
    <div class="item" :class="{ 'active': activeTab === 'page' }" @click="onTabChange('page')">Company Page</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'data',
    }
  },
  methods: {
    onTabChange: function (value) {
      if (this.activeTab !== value) {
        this.activeTab = value;
        this.$emit('change', value);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.menu {
  width: 300px;
  min-width: 300px;
  height: 100vh;
  background-color:steelblue;
}
.item {
  width: 100%;
  height: 50px;
  padding: 0 10px;
  font-size: 20px;
  line-height: 50px;
  color:skyblue;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    opacity: 0.5;
  }
  &.active {
    background-color:slateblue;
  }
}
</style>