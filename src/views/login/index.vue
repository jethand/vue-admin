<style lang="less">
  @import './index.less';
</style>

<template>
  <div class="login" @keydown.enter="handleLogin">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
          <div class="form-con">
            <login-form @on-success-valid="handleSubmit"></login-form>
            <p class="login-tip">输入任意用户名和密码即可</p>
          </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from './login-form.vue';
export default {
  components: {
    LoginForm
  },
  methods: {
    handleSubmit () {

    }
  }
};
</script>

<style>

</style>
