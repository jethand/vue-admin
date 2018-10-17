import { promisePack, fnPack } from '@/lib/utils';
import testApi from '_s/testApi';
export default class {
  async getDataList () {
    const queryOption = {
      pageNow: this.pageOption.pageNow,
      pageSize: this.pageOption.pageSize,
      query: this.pageOption.query
    };
    const res = await promisePack(fnPack(_S.test.getDataList, {}, queryOption), this.errorHandle);  
    if (res) {
      //可处理，亦可包装返回
    }
  }
  async test () {
    testApi.getTestDataList({
      testId: 101,
      testName: 'zhangsan'
    }).then(res => {});
  }
};
