/**
 * Capitalize the first letter of string.
 * And set to lowercase other part of string
 * @method toCapital
 * @return {string}
 */
String.prototype.toCapital = function() {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};
const timeCalculate = function (time) {
  if (time <= 1) return '1 secs';
    var k = 60,
      sizes = ['secs', 'min', 'h'],
      i = Math.floor(Math.log(time) / Math.log(k));
  return (time / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i];
};
// timeCalculate(60) => 1 min
const bytesToSize = bytes => {
  if (bytes < 1024) return (bytes || 0) + 'B';
  let k = 1024,
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i];
};
const numToSize = number => {
  number = Number(number);
  if (Number.parseInt(number).toString().length < 5) {
    return Number.isInteger(number) ? number : number.toFixed(2)
  };
  let k = number.length > 8 ? 10000 * 10000 : 10000;
    sizes = ['万', '亿'],
    i = Math.floor(Math.log(number) / Math.log(k));
  let val = number / Math.pow(k, i);
  return (Number.isInteger(val) ? val : val.toFixed(2)) + ' ' + sizes[i-1];
};
const firstUpperCase = (str) => {
  return str.replace(/^\S/, (s) => s.toUpperCase());
};
const excludeNumber = (serviceName) => {
  return serviceName.replace(/\d+/g, '');
};
const findStringPos = (parentStr, targetStr, n) => {
  let pos = parentStr.indexOf(targetStr);
  for (let i = 0; i< n; i++) {
    pos = parentStr.indexOf(targetStr, pos + 1);
  }
  return pos;
};
