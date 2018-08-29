<style lang="less">
  @import './test';
</style>
<template>
  <div>
    <Button type="primary" @click="onClick">测试按钮</Button>
  </div>
</template>
<script>
import { promiseCurry, fnPack, bindProperty } from '@/lib/utils';
import data from './data';
import Service from './service';
import Actions from './actions';
import Tools from './tools';
export default {
  data () {
    return data.call(this);
  },
  methods: {
    errorHandle () {
      // 一些共用的异常处理方案
    }
  },
  beforeMount () {
    // 绑定外部action和service和tool
    bindProperty.call(this, Actions); 
    bindProperty.call(this, Service);
    bindProperty.call(this, Tools);
    // 示例
    this.getDataList();
  }
};
</script>
