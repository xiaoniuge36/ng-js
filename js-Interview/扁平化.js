//数组扁平化    
function flatten(arr) {
    return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
}
//数组扁平化
function flatten(arr) {;
    return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
}

//对象扁平化
function flatten(arr) {
    return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
};
function flatten(arr){
  return arr.reduce((a,b)=>{ a.concat(Array.isArray(b)?flatten(b):b)},[]);
}
function flatten(arr){
  return arr.reduce((a,b)=>{a.concat(Array.isArray(b)?flatten(b):b)},[]);
}
function flatten1(arr){
    const result = [];
    arr.forEach(element => {
        if(Array.isArray(element)){
            result.push(...flatten1(element));
        }else{
            result.push(element);
        }
    });
    return result;
}


// 测试
const source = [1, 2, [3, 4, [5, 6]], '7'];
console.log(flatten(source));
console.log(flatten1(source));

const a = [1,2,2,3,3]
console.log(...a);


//对象扁平化
function objectFlat(obj = {}) {
    const res = {}
    function flat(item, preKey = '') {
      Object.entries(item).forEach(([key, val]) => {
        const newKey = preKey ? `${preKey}.${key}` : key
        if (val && typeof val === 'object') {
          flat(val, newKey)
        } else {
          res[newKey] = val
        }
      })
    }
    flat(obj)
    return res
  }
  
  // 测试
  const source1 = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } }
  console.log(objectFlat(source));
  