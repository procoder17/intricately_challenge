<template>
  <div class="main">
    <side-menu @change="onTabChange" />
    <company-data v-if="activeTab === 'data'" />
    <company-page v-if="activeTab === 'page'" />
  </div>
</template>

<script>
import CompanyData from './CompanyData.vue';
import CompanyPage from './CompanyPage.vue';
import SideMenu from './SideMenu.vue';
export default {
  components: {
    SideMenu,
    CompanyPage,
    CompanyData,
  },
  data () {
    return {
      activeTab: 'data',
    }
  },
  methods: {
    onTabChange: function (value) {
      if (this.activeTab !== value) {
        this.activeTab = value;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  display: flex;
}
</style>