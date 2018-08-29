<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      <Avatar :src="userAvator"/>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <Dropdown-menu slot="list">
        <DropdownItem name="logout">退出登录</DropdownItem>
      </Dropdown-menu>
    </Dropdown>
  </div>
</template>

<script>
import './user.less';
export default {
  name: 'User',
  props: {
    userAvator: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleLogOut () {

    },
    handleClick (name) {
      switch (name) {
        case 'logout':
          this.handleLogOut();
          break;
      }
    }
  }
};
</script>
