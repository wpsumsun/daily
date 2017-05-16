###题目1： 为什么要使用模块化？
最主要的目的：

解决命名冲突
依赖管理
其他价值

提高代码可读性
代码解耦，提高复用性

###题目2： CMD、AMD、CommonJS 规范分别指什么？有哪些应用

CommonJs 是服务器端模块的规范，Node.js采用了这个规范。根据CommonJS规范，一个单独的文件就是一个模块。加载模块使用require方法，该方法读取一个文件并执行，最后返回文件内部的exports对象。
CommonJS 加载模块是同步的，所以只有加载完成才能执行后面的操作。像Node.js主要用于服务器的编程，加载的模块文件一般都已经存在本地硬盘，所以加载起来比较快，不用考虑异步加载的方式，所以CommonJS规范比较适用。
```
var xx = require('./url');
console.log(xx.foo);
```
但如果是浏览器环境，要从服务器加载模块，这是就必须采用异步模式。所以就有了 AMD CMD 解决方案。 
AMD 即Asynchronous Module Definition（异步模块定义），AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
```
define(['dep1', 'dep2'],function(dep1, dep2){
    //在开始就已经引入了要用的所有模块
    return {xx: xx};
})
```
CMD 即Common Module Definition（通用模块定义），CMD是SeaJS 在推广过程中对模块定义的规范化产出。
```
define(function(require, exports, module) {
  // 用到XX模块，才引入
  var xx = require('XX')
})
```
AMD与CMD最明显的区别就是在模块定义时对依赖的处理不同：
(1)AMD推崇依赖前置，在定义模块的时候就要声明其依赖的模块
(2)CMD推崇就近依赖，只有在用到某个模块的时候再去require
这种区别各有优劣，只是语法上的差距，而且requireJS和SeaJS都支持对方的写法

###题目3： 使用 requirejs 完善入门任务15，包括如下功能：

 [代码](https://github.com/wpsumsun/daily/tree/master/amdDemo)
 [预览](https://wpsumsun.github.io/amdDomo/)
 因为用的新浪的api协议是http的  在git预览中所以获取不到数据，但是在本地是好的