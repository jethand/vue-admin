import Service from '../service';
class TestApi extends Service {
  constructor () {
    super();
    this.time = 5000;
  }
  getTestDataList (params, data) {
    return this.$request({
      url: 'test.testdemo.datalist',
      params,
      data
    });
  }
}
export default new TestApi();
