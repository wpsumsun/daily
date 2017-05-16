###题目1： 如何全局安装一个 node 应用?
```
npm install -g <package_name>
```
###题目2： package.json 有什么作用？

###题目3： npm install --save app 与 npm install --save-dev app有什么区别?
--save 将产品运行时（或生产环境）需要的依赖模块添加到 package.json 的 dependencies 中，
在发布后还需要继续使用，否则就运行不了。
--save-dev 将产品的开发环境需要的依赖模块添加到 package.json 的 devDependencies 中，
只在开发时才用到，发布后用不到它。

###题目4： node_modules的查找路径是怎样的?
先查找当前目录下node_modules如果没有就查找上一级目录下的node_modules，直到查询到根目录下的node_modules

###题目5： npm3与 npm2相比有什么改进？yarn和 npm 相比有什么优势? (选做###题目)

###题目6： webpack是什么？和其他同类型工具比有什么优势？

###题目7：npm script是什么？如何使用？

###题目8： 使用 webpack 替换 入门-任务15中模块化使用的 requriejs

###题目9：gulp是什么？使用 gulp 实现图片压缩、CSS 压缩合并、JS 压缩合并

###题目10： 开发一个 node 命令行天气应用用于查询用户当前所在城市的天气，发布到 npm 上去。可以通过如下方式安装使用(可使用api.jirengu.com里提供的查询天气接口) (选做题目)
```
npm install hunger-weather -g
weather
```