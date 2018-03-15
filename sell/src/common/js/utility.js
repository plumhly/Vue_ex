/**
 * 解析URL参数
 * @example ?id=12&a=b
 * @return Object {id:12, a:b}
 */
export function urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;

  // ['?id=12','&a=b"]
  let arr = url.match(reg);
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let value = decodeURIComponent(tempArr[1]);
      obj[key] = value;
    });
  }
  return obj;
}
