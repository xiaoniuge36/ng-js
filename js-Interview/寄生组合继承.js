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
        sum = a ^ b;
        carry = (a & b) << 1;
        a = sum;
        b = carry;
    }
    return a;
}

