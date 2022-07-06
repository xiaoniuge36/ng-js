function myNew(fn, ...args) {
    let obj = Object.create(fn.prototype);
    let res = fn.call(obj, ...args);
    if (res && (typeof res === "object" || typeof res === "function")) {
      return res;
    }
    return obj;
  }
//   用法如下：
  // // function Person(name, age) {
  // //   this.name = name;
  // //   this.age = age;
  // // }
  // // Person.prototype.say = function() {
  // //   console.log(this.age);
  // // };
  // // let p1 = myNew(Person, "lihua", 18);
  // // console.log(p1.name);
  // // console.log(p1);
  // // p1.say();

  //手写new
    function Person(name, age) {
        this.name = name;
        this.age = age;
        }
        Person.prototype.say = function() {
            console.log(this.age);
        }
        // let p1 = myNew(Person, "lihua", 18);
        // console.log(p1.name);
        // console.log(p1);
        // p1.say();
        // console.log(p1.__proto__);
        // console.log(Person.prototype);
        // console.log(Person.prototype.__proto__);
        // console.log(Person.prototype.__proto__.__proto__);

//手写柯里化
function curry(fn) {
  // 将具有length属性的对象转换成数组
    let args = [].slice.call(arguments, 1);
    return function() {
        let newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this, newArgs);
    }
}
//   用法如下：
  function add(a, b) {
    return a + b;
  }
  let add10 = curry(add, 10);
  console.log(add10(20));
 




