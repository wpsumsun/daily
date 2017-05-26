###题目1： 如何全局安装一个 node 应用?
```
npm install -g <module_name>
```
###题目2： package.json 有什么作用？
每个项目的根目录下面，一般都有一个 package.json 文件，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。npm install 命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。
```
{
  "name": "test",  //名称
  "version": "0.0.1",  //版本
  "description": "This is my first node.js program.",  //描述
  "main": "index.js",  //入口
  "keywords": [  //关键字
                       "node.js",
                       "javascript"
  ],
  "scripts": {  //执行命令行
	  "start": "node index.js"
  },
  "author": "Mike",  //作者
  "license":"MIT",  //认证
  "dependencies": {  //生产环境依赖
	              "express": "latest"
  },
  "devDependencies": {  //开发环境依赖
		   "bower": "~1.2.8",
		   "grunt": "~0.4.1"
  }
}
```
###题目3： npm install --save app 与 npm install --save-dev app有什么区别?
--save 将产品运行时（或生产环境）需要的依赖模块添加到 package.json 的 dependencies 中，
在发布后还需要继续使用，否则就运行不了。
--save-dev 将产品的开发环境需要的依赖模块添加到 package.json 的 devDependencies 中，
只在开发时才用到，发布后用不到它。

###题目4： node_modules的查找路径是怎样的?
先查找当前目录下node_modules如果没有就查找上一级目录下的node_modules，直到查询到根目录下的node_modules

###题目5： npm3与 npm2相比有什么改进？yarn和 npm 相比有什么优势? (选做题目)

###题目6： webpack是什么？和其他同类型工具比有什么优势？

###题目7：npm script是什么？如何使用？
npm script是指的package.json的scripts(脚本)，在其中可配置命令字段
在package.json的scripts字段定义脚本命令，可在命令行中通过npm run [对应字符]执行，只有test、install等npm自带的命令字段可以直接 npm [字段]
例：
```
{
    'name':'demo',
    'version':'0.0.1',
    'scripts':{                 //设置命令
         'start':'git add . && git commit -m change && git push origin master'     //‘定义名’：‘命令集合’
    }           //若需要注意指令先后，指令间使用& ，同时需要保证前一指令成功，后一指令才执行，使用&&
}
//执行命令
$ npm run start
```
###题目8： 使用 webpack 替换 入门-任务15中模块化使用的 requriejs

###题目9：gulp是什么？使用 gulp 实现图片压缩、CSS 压缩合并、JS 压缩合并
gulp是一个自动化构建工具,开发者可以使用它在项目开发过程中自动执行常见任务使用 
[图片压缩、css压缩合并、js压缩合并](https://github.com/wpsumsun/daily/tree/master/gulp-demo)
###题目10： 开发一个 node 命令行天气应用用于查询用户当前所在城市的天气，发布到 npm 上去。可以通过如下方式安装使用(可使用api.jirengu.com里提供的查询天气接口) (选做题目)
```
npm install hunger-weather -g
weather
```
[地址](https://github.com/wpsumsun/daily/blob/master/weather-query/index.js)