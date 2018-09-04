<style lang="less">
  @import './index.less';
</style>
<template>
  <div></div>
</template>
<script>
import { fnPack, bindProperty } from '@/lib/utils';
import data from './data';
import Service from './service';
import Actions from './actions';
import Tools from './tools';
export default {
  data () {
    return data.call(this);
  },
  components: {

  },
  methods: {
    errorHandle () {
      // 一些共用的异常处理方案
    }
  },
  computed: {

  },
  beforeMount () {
    bindProperty.call(this, Actions); 
    bindProperty.call(this, Service);
    bindProperty.call(this, Tools);
  },
  mounted () {

  },
  beforeDestroy () {

  }
};
</script>
