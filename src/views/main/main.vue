<style lang="less">
    @import './main.less';
</style>

<template>
  <Layout style="height: 100%" class="main">
    <Header class="header-con">
      <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange">
        <user :user-avator="userAvator"/>
        <fullscreen v-model="isFullscreen" style="margin-right: 10px;"/>
      </header-bar>
    </Header>
      <Content>
        <Layout>
          <Content>
            <keep-alive :include="cacheList">
              <router-view/>
            </keep-alive>
          </Content>
        </Layout>
      </Content>
  </Layout>
</template>
<script>
import HeaderBar from './components/header-bar';
import User from './components/user';
import Fullscreen from './components/fullscreen';
export default {
  data () {
    return {
      cacheList: [],
      collapsed: false,
      userAvator: '',
      isFullscreen: false
    };
  },
  methods: {
    handleCollapsedChange () {

    }
  },
  components: {
    HeaderBar,
    Fullscreen,
    User
  }
};
</script>
