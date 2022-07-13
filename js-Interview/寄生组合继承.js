//继承的实现方式：
//1.构造函数继承
//2.寄生组合继承
//3.组合继承
//4.原型继承
//5.寄生组合继承
//6.组合继承
//7.原型继承

//构造函数继承
function Animal(name) {
    this.name = name;
}



//寄生组合继承
function Animal(name) {
    this.name = name;
}
Animal.prototype.sayName = function() {
    console.log(this.name);
}
function Cat(name) {
    Animal.call(this, name);
}
Cat.prototype = new Animal();
Cat.prototype.sayName = function() {
    console.log("cat:" + this.name);
}
var cat = new Cat("cat");
cat.sayName();

function Animal(name) {
    this.name = name;
}
Animal.prototype.sayName = function() {
    console.log(this.name);
}
function  Cat(name) {
    Animal.call(this, name);
}
Cat.prototype = new Animal();
Cat.prototype.sayName = function() {
    console.log("cat:" + this.name);
}
var cat = new Cat("cat");
cat.sayName();

//原型继承
function Animal(name) {
    this.name = name;
}
Animal.prototype.sayName = function() {
    console.log(this.name);
}
function Cat(name) {
    Animal.call(this, name);
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.sayName = function() {
    console.log("cat:" + this.name);
}
var cat = new Cat("cat");
cat.sayName();

//大数相加
function add(a, b) {
    var sum = 0;
    var carry = 0;
    while (b != 0) {
        // ^“^”运算符（位异或）用于对两个二进制操作数逐位进行比较，并根据如表格所示的换算表返回结果。
        sum = a ^ b;
        //“&”运算符（位与）用于对两个二进制操作数逐位进行比较，并根据下表所示的换算表返回结果。
        carry = (a & b) << 1;
        a = sum;
        b = carry;
    }
    return a;
}
//es6继承
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    sayName() {
        console.log("cat:" + this.name);
    }
}
var cat = new Cat("cat");
cat.sayName();

class Animal{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
}
class Cat extends Animal{
    constructor(name){
        super(name);
    }
    sayName(){
        console.log("cat:"+this.name);
    }
}

// 创建一个父类
class Parent {
    constructor(props){
      this.name = '沐华'
    }
  }
  // 创建一个继承自父类的子类
  class Child extends Parent{
    // props是继承过来的属性， myAttr是自己的属性
    constructor(props, myAttr){
      // 调用父类的构造函数，相当于获得父类的this指向
      super(props)
    }
  }
  console.log(new Child().name) // 沐华
  




