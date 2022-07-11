//深拷贝

function deepCopy(object){
    if(!object||typeof object !== "object") return;

    let newObject = Array.isArray(object) ? [] :{};

    for(let key in object){
        if(object.hasOwnProperty(key)){
            newObject[key] = typeof object[key] === 'object' ?deepCopy(object[key]) : object[key];
        }
    }
    return newObject;
}

// 要求：

// 支持对象、数组、日期、正则的拷贝。
// 处理原始类型（原始类型直接返回，只有引用类型才有深拷贝这个概念）。
// 处理 Symbol 作为键名的情况。
// 处理函数（函数直接返回，拷贝函数没有意义，两个对象使用内存中同一个地址的函数，问题不大）。
// 处理 DOM 元素（DOM 元素直接返回，拷贝 DOM 元素没有意义，都是指向页面中同一个）。
// 额外开辟一个储存空间 WeakMap，解决循环引用递归爆栈问题（引入 WeakMap 的另一个意义，配合垃圾回收机制，防止内存泄漏）。

function deepClone (target, hash = new WeakMap()) { // 额外开辟一个存储空间WeakMap来存储当前对象
  if (target === null) return target // 如果是 null 就不进行拷贝操作
  if (target instanceof Date) return new Date(target) // 处理日期
  if (target instanceof RegExp) return new RegExp(target) // 处理正则
  if (target instanceof HTMLElement) return target // 处理 DOM元素

  if (typeof target !== 'object') return target // 处理原始类型和函数 不需要深拷贝，直接返回

  // 是引用类型的话就要进行深拷贝
  if (hash.get(target)) return hash.get(target) // 当需要拷贝当前对象时，先去存储空间中找，如果有的话直接返回
  const cloneTarget = new target.constructor() // 创建一个新的克隆对象或克隆数组
  hash.set(target, cloneTarget) // 如果存储空间中没有就存进 hash 里

  Reflect.ownKeys(target).forEach(key => { // 引入 Reflect.ownKeys，处理 Symbol 作为键名的情况
    cloneTarget[key] = deepClone(target[key], hash) // 递归拷贝每一层
  })
  return cloneTarget // 返回克隆的对象
}

//浅拷贝
function shallowClone(object){
  let newObj = [];

  for(let key in object ){
    if(object.hasOwnProperty(key)){
      newObj[key] = object[key];
    }
  }
  return newObj;
}

//手写深拷贝
function deepClone(object){
  let newObj = {};

  for(let key in object){
    if(object.hasOwnProperty(key)){
      newObj[key] = object[key];
    }
  }
  return newObj;
}

function deepCopy(object){
  if(!object||typeof object !== "object") return;

  let newObject = Array.isArray(object) ? [] :{};

  for(let key in object){
      if(object.hasOwnProperty(key)){
          newObject[key] = typeof object[key] === 'object' ?deepCopy(object[key]) : object[key];
      }
  }
  return newObject;
}

