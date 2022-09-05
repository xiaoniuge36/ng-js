function myInstanceof(left, right) {
    while (true) {
      if (left === null) {
        return false;
      }
      if (left.__proto__ === right.prototype) {
        return true;
      }
      left = left.__proto__;
    }
  }
  
//手写instanceof
function myInstanceof(left, right) {
    while (true) {
      if (left === null) {
        return false;
      }
      if (left.__proto__ === right.prototype) {
        return true;
      }
      left = left.__proto__;
    }
  }
  //测试
    var a = {};
    var b = {};
    var c = {};
    a.__proto__ = b;
    b.__proto__ = c;
    console.log(myInstanceof(a, b));
    console.log(myInstanceof(a, c));
    console.log(myInstanceof(a, null));
    console.log(myInstanceof(null, a));
    console.log(myInstanceof(null, null));
    console.log(myInstanceof(a, a));
    console.log(myInstanceof(a, a.__proto__));
    console.log(myInstanceof(a.__proto__, a));
    console.log(myInstanceof(a.__proto__, a.__proto__));
    console.log(myInstanceof(a.__proto__, a.__proto__.__proto__));
    console.log(myInstanceof(a.__proto__.__proto__, a.__proto__));
    console.log(myInstanceof(a.__proto__.__proto__, a.__proto__.__proto__));
    console.log(myInstanceof(a.__proto__.__proto__.__proto__, a.__proto__.__proto__));