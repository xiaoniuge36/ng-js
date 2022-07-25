var a = "abc";
var b = 123;
var c= [1,2,3];
var d = new Date();
var e = function(){alert(111);};
var f = function(){this.name="22";};
var g = {name:"33"};
var h = null;
var i = undefined;
var j = NaN;
var k = true;
var l = false;
var m = Symbol("name");

//1.判断数据类型方法
//Object.prototype.toString.call() 使用 Object 对象的原型方法 toString 来判断数据类型：
function type(obj){
    return Object.prototype.toString.call(obj).slice(8,-1);
}
console.log(type(a));
console.log(type(b));
console.log(type(c));
console.log(type(d));
console.log(type(e));
console.log(type(f));
console.log(type(g));
console.log(type(h));
console.log(type(i));
console.log(type(j));
console.log(type(k));
console.log(type(l));
console.log(type(m));




