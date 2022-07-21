function getUrlParams(url) {
  let reg = /([^?&=]+)=([^?&=]+)/g;
  console.log(1);
  console.log(url);
  let obj = {};
  url.replace(reg, function () {
    console.log(arguments);
    // console.log(arguments[1]);
    obj[arguments[1]] = arguments[2]
  });
  // 或者
  // const search = window.location.search
  // search.replace(/([^&=?]+)=([^&]+)/g, (m, $1, $2)=>{obj[$1] = decodeURIComponent($2)})

  return obj;
}
let url = 'https://www.junjin.cn?a=1&b=2'
console.log(getUrlParams(url)) // { a: 1, b: 2 }

getUrlParams(url);

// 参数解析
// function getUrlParams(url){
//     let reg = /([^?&=]+)=([^?&=]+)/g
//     let obj = { }
//     url.replace(reg, function(){
//         obj[arguments[1]] = arguments[2]
//     })
//     // 或者
//     // const search = window.location.search
//     // search.replace(/([^&=?]+)=([^&]+)/g, (m, $1, $2)=>{obj[$1] = decodeURIComponent($2)})

//     return obj
//   }
//     let url1 = 'https://www.junjin.cn?a=1&b=2'
//     console.log(getUrlParams(url1)) // { a: 1, b: 2 }

function func(a) {
  ;   // 更新了 arguments[0] 同样更新了 a
  console.log(arguments);
}
func("12222223asd"); // 99


console.log(url.replace(/([^?&=]+)=([^?&=]+)/g, 11));

//获取url方法
// 创建一个URLSearchParams实例
const urlSearchParams = new URLSearchParams(window.location.search);
// 把键值对列表转换为一个对象
const params = Object.fromEntries(urlSearchParams.entries());

function getParams(url) {
  const res = {}
  if (url.includes('?')) {
    const str = url.split('?')[1]
    const arr = str.split('&')
    arr.forEach(item => {
      const key = item.split('=')[0]
      const val = item.split('=')[1]
      res[key] = decodeURIComponent(val) // 解码
    })
  }
  return res
}

// 测试
const user = getParams('http://www.baidu.com?user=%E9%98%BF%E9%A3%9E&age=16')
console.log(user) // { user: '阿飞', age: '16' }