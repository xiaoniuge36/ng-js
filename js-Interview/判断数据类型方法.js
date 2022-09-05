// var a = "abc";
// var b = 123;
// var c= [1,2,3];
// var d = new Date();
// var e = function(){alert(111);};
// var f = function(){this.name="22";};
// var g = {name:"33"};
// var h = null;
// var i = undefined;
// var j = NaN;
// var k = true;
// var l = false;
// var m = Symbol("name");


// //1.Object.prototype.toString.call() 使用 Object 对象的原型方法 toString 来判断数据类型：
// function type(obj){
//     return Object.prototype.toString.call(obj).slice(8,-1);
// }
// console.log(type(a));
// console.log(type(b));
// console.log(type(c));
// console.log(type(d));
// console.log(type(e));
// console.log(type(f));
// console.log(type(g));
// console.log(type(h));
// console.log(type(i));
// console.log(type(j));
// console.log(type(k));
// console.log(type(l));
// console.log(type(m));

// //2.typeof 关键字可以判断数据类型：
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);
// console.log(typeof h);
// console.log(typeof i);
// console.log(typeof j);
// console.log(typeof k);
// console.log(typeof l);
// console.log(typeof m);

// //3.instanceof 关键字可以判断数据类型：
// console.log(a instanceof String);
// console.log(b instanceof Number);
// console.log(c instanceof Array);
// console.log(d instanceof Date);
// console.log(e instanceof Function);
// console.log(f instanceof Object);
// console.log(g instanceof Object);
// console.log(h instanceof Null);
// console.log(i instanceof Undefined);
// console.log(j instanceof Number);
// console.log(k instanceof Boolean);
// console.log(l instanceof Boolean);
// console.log(m instanceof Symbol);

// //4.constructor 关键字可以判断数据类型：
// console.log(a.constructor);
// console.log(b.constructor);
// console.log(c.constructor);
// console.log(d.constructor);
// console.log(e.constructor);
// console.log(f.constructor);
// console.log(g.constructor);
// console.log(h.constructor);
// console.log(i.constructor);
// console.log(j.constructor);
// console.log(k.constructor);
// console.log(l.constructor);
// console.log(m.constructor);

function type(obj){
    return Object.prototype.toString.call(obj).slice(8,-1);
}
console.log(type('abc'));
console.log(type(123));
console.log(type([1,2,3]));
console.log(type(new Date()));
console.log(type(function(){}));
console.log(type(function(){this.name="22";}));
console.log(type({name:"33"}));
console.log(type(null));
console.log(type(undefined));
console.log(type(NaN));
console.log(type(true));
console.log(type(false));
console.log(type(Symbol("name")));
console.log(type(/^abc$/));

console.log(typeof('abc'));
console.log(typeof(123));
console.log(typeof([1,2,3]));
console.log(typeof(new Date()));
console.log(typeof(function(){}));
console.log(typeof(function(){this.name="22";}));
console.log(typeof({name:"33"}));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(NaN));
console.log(typeof(true));
console.log(typeof(false));
console.log(typeof(Symbol("name")));
console.log(typeof(/^abc$/));

console.log('abc' instanceof String);
console.log(123 instanceof Number);
console.log([1,2,3] instanceof Array);
console.log(new Date() instanceof Date);
console.log(function(){} instanceof Function);
console.log(function(){this.name="22";} instanceof Object);
console.log({name:"33"} instanceof Object);
// console.log(null instanceof Null);
// console.log(undefined instanceof Undefined);
console.log(NaN instanceof Number);
console.log(true instanceof Boolean);
console.log(false instanceof Boolean);
console.log(Symbol("name") instanceof Symbol);
console.log(/^abc$/ instanceof RegExp);

console.log(('abc').constructor === String);
console.log((123).constructor === Number);
console.log(([1,2,3]).constructor === Array);
console.log((new Date()).constructor === Date);
console.log((function(){}).constructor === Function);
console.log((function(){this.name="22";}).constructor === Object);
console.log(({name:"33"}).constructor === Object);
// console.log((null).constructor === Null);
// console.log((undefined).constructor === Undefined);
console.log((NaN).constructor === Number);
console.log((true).constructor === Boolean);
console.log((false).constructor === Boolean);
console.log((Symbol("name")).constructor === Symbol);
console.log((/^abc$/).constructor === RegExp);
