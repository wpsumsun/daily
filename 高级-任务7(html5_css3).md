##题目1： HTML5是什么？有哪些新特性？有哪些新增标签？如何让低版本的 IE 支持 HTML5新标签
HTML5是超文本标记语言的第五次重大修改，2014年10月29日标准规范制定完成


###特性

####语义特性

HTML5赋予网页更好的意义和结构。更加丰富的标签将随着对RDFa的，微数据与微格式等方面的支持，构建对程序、对用户都更有价值的数据驱动的Web。

####本地存储特性

基于HTML5开发的网页APP拥有更短的启动时间，更快的联网速度，这些全得益于HTML5 APP Cache，以及本地存储功能。Indexed DB（html5本地存储最重要的技术之一）和API说明文档。

####设备兼容特性

从Geolocation功能的API文档公开以来，HTML5为网页应用开发者们提供了更多功能上的优化选择，带来了更多体验功能的优势。HTML5提供了前所未有的数据与应用接入开放接口。使外部应用可以直接与浏览器内部的数据直接相连，例如视频影音可直接与microphones及摄像头相联。

####连接特性

更有效的连接工作效率，使得基于页面的实时聊天，更快速的网页游戏体验，更优化的在线交流得到了实现。HTML5拥有更有效的服务器推送技术，Server-Sent Event和WebSockets就是其中的两个特性，这两个特性能够帮助我们实现服务器将数据“推送”到客户端的功能。

####网页多媒体特性

支持网页端的Audio、Video等多媒体功能， 与网站自带的APPS，摄像头，影音功能相得益彰。

三维、图形及特效特性（Class: 3D, Graphics & Effects）

基于SVG、Canvas、WebGL及CSS3的3D功能，用户会惊叹于在浏览器中，所呈现的惊人视觉效果。

####性能与集成特性

没有用户会永远等待你的Loading——HTML5会通过XMLHttpRequest2等技术，解决以前的跨域等问题，帮助您的Web应用和网站在多样化的环境中更快速的工作。

####CSS3特性

在不牺牲性能和语义结构的前提下，CSS3中提供了更多的风格和更强的效果。此外，较之以前的Web排版，Web的开放字体格式（WOFF）也提供了更高的灵活性和控制性。2： input 有哪些新增类型？

###新增标签
header footer nav section audio video aside 

```
<!--[if lt IE 9]>            
<script type="text/javascript" src="scripts/html5shiv.js"></script>
<![endif]-->    
//如果版本小于IE9就引入html5shiv.js，IE9以前的浏览器就能使用h5标签，并使用定义好的样式了。这个标签必须放在head标签内，因为浏览器要在解析之前知道这个元素。

//也可以直接声明
<!--[if lt IE 9]> 
(function(){if(!/*@cc_on!@*/0)return;var e = "abbr,article,aside,audio,canvas,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(','),i=e.length;while(i--){document.createElement(e[i])}})()
<![endif]-->

```

##题目2： input 有哪些新增类型？
email url number range Date month week time datatime
##题目3： 浏览器本地存储中 cookie 和 localStorage 有什么区别？ localStorage 如何存储删除数据。
![](https://jscode.me/uploads/default/original/2X/5/5b41604c509bf74d8b08ab68e4db8734f47e6485.jpg)
```
storage.removeItem(keyName);//删除
```
##题目4： 写出如下 CSS3效果的简单事例

    1. 圆角， 圆形
    2. div 阴影
    3. 2D 转换：放大、缩小、偏移、旋转
    4. 3D 转换：移动、旋转
    5. 背景色渐变
    6. 过渡效果
    7. 动画
    [code](http://js.jirengu.com/cizocaravi/19/edit)
##题目5： 实现如下全屏图加过渡色的效果（具体效果随意
[code](http://js.jirengu.com/sogofenezo/3/edit?html,css,output)
##题目6： 写出如下 loading 动画效果
[loading-1](http://js.jirengu.com/favapipate/1/edit?html,css,output)
[loading-2](http://js.jirengu.com/sokihojuwi/1/edit?html,css,output)