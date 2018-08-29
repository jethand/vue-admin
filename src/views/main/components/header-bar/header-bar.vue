<template>
  <div class="header-bar">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="header-title">Template</div>
      <MenuItem name="xx"/>
      <div class="custom-content-con">
        <slot></slot>
      </div>
    </Menu>
  </div>
</template>
<script>
import './header-bar.less';
export default {
  name: 'HeaderBar',
  components: {
  },
  props: {
    collapsed: Boolean
  },
  computed: {
  },
  methods: {
  }
};
</script>
