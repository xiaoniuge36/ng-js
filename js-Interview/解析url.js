function getUrlParams(url){
    let reg = /([^?&=]+)=([^?&=]+)/g;
    console.log(1);
    console.log(url);
    let obj = { };
    url.replace(reg, function(){
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
