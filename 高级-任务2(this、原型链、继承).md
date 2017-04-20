###问题1： apply、call 、bind有什么作用，什么区别
bind,返回一个新函数，并且使函数内部的this为传入的第一个参数
call apply调用一个函数，传入函数执行上下文及参数
第一个参数都是希望设置的this对象，不同之处在于call方法接收参数列表。而apply接收参数数组
###问题2： 以下代码输出什么?
```
var john = { 
  firstName: "John" 
}
function func() { 
  alert(this.firstName + ": hi!")
}
john.sayHi = func
john.sayHi() //Join 等同于 sayHi.call(join),this指向join对象
```
###问题3： 下面代码输出什么，为什么
```
func() 
function func() { 
  alert(this)
}  //Window 等同于 func.call(null) 在非严格模式下，call第一个参数为null、undefined或者空的时候this指向window
```
###问题4：下面代码输出什么
```
document.addEventListener('click', function(e){
    console.log(this);  //document
    setTimeout(function(){
        console.log(this);  //Window
    }, 200);
}, false);
```
###问题5：下面代码输出什么，why
```
var john = { 
  firstName: "John" 
}

function func() { 
  alert( this.firstName )
}
func.call(john)  //Join 因为call将函数的this设置为join对象
```
###问题6： 以下代码有什么问题，如何修改
```
var module= {
  bind: function(){
    $btn.on('click', function(){
      console.log(this) //this指什么  this指$btn
      this.showMsg();
    })
  },
  
  showMsg: function(){
    console.log('饥人谷');
  }
}
//问题 $btn的绑定事件中的this指向$btn 不再指向module  因此this.showMsg()会报错
//修正后代码
var module= {
  bind: function(){
    var _this=this;
    $btn.on('click', function(){
      console.log(_this) //this指什么  this指$btn
      this.showMsg();
    })
  },
  
  showMsg: function(){
    console.log('饥人谷');
  }
}
```
##原型链相关问题
###问题7：有如下代码，解释Person、 prototype、__proto__、p、constructor之间的关联。
```
function Person(name){
    this.name = name;
}
Person.prototype.sayName = function(){
    console.log('My name is :' + this.name);
}
var p = new Person("若愚")
p.sayName();
```
```
p.__proto__===Person.prototype
p.__proto__.constructor===Person
Person.prototype.constructor===Person
```
###问题8： 上例中，对对象 p可以这样调用 p.toString()。toString是哪里来的? 画出原型图?并解释什么是原型链。
是从p.__proto__.__proto__得来的  先从p身上找，找不到的话就从p.__proto__找，再找不到就从p.__proto__.__proto__找，直到找到或者为null
原型链就像上面一样，每个对象都有一个__proto__，而每个__proto__都指向他所创造的prototype，直到Object.prototype,而Object.__proto__ == null，null没有原型，因此终结。这条链就是原型链,
![](http://upload-images.jianshu.io/upload_images/1974686-7dca486f04506077.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###问题9：对String做扩展，实现如下方式获取字符串中频率最高的字符
```
var str = 'ahbbccdeddddfg';
var ch = str.getMostOften();
console.log(ch); //d , 因为d 出现了5次
```
###问题10： instanceOf有什么作用？内部逻辑是如何实现的？

##继承相关问题
###问题11：继承有什么作用?

###问题12： 下面两种写法有什么区别?
```
//方法1
function People(name, sex){
    this.name = name;
    this.sex = sex;
    this.printName = function(){
        console.log(this.name);
    }
}
var p1 = new People('饥人谷', 2)

//方法2
function Person(name, sex){
    this.name = name;
    this.sex = sex;
}

Person.prototype.printName = function(){
    console.log(this.name);
}
var p1 = new Person('若愚', 27);
```
###问题13： Object.create 有什么作用？兼容性如何？

###问题14： hasOwnProperty有什么作用？ 如何使用？

###问题15：如下代码中call的作用是什么?
```
function Person(name, sex){
    this.name = name;
    this.sex = sex;
}
function Male(name, sex, age){
    Person.call(this, name, sex);    //这里的 call 有什么作用
    this.age = age;
}
```
###问题16： 补全代码，实现继承 
```
function Person(name, sex){
    // todo ...
}

Person.prototype.getName = function(){
    // todo ...
};    

function Male(name, sex, age){
   //todo ...
}

//todo ...
Male.prototype.getAge = function(){
    //todo ...
};

var ruoyu = new Male('若愚', '男', 27);
ruoyu.printName();
```