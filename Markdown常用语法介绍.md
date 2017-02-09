### 什么是Markdown语法？
Markdown 是一种轻量级标记语言，目标是实现「易读易写」
###标题
在传统文本编辑器中，如果要写标题，要输入文本、选中文本、设置标题格式。而在Markdown中，你需要用到几级标题就在在文本前加上相几个#即可。例如：
```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```
注：` # `  和「一级标题」之间建议保留一个字符的空格，这是最标准的 Markdown 写法。
下图左侧为Markdown语法，右侧即其在页面上的表现形式
![图片.png](http://upload-images.jianshu.io/upload_images/4648608-8828202f5461b362.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 列表
在Markdown中如果你想要使用列表，只需要在前面加上 `- ` 即可。例如：
```
- 列表项1
- 列表项2
- 列表项3
```
上面的列表时无序列表，如果你想使用有序列表，再问前面加上 `1.` `2.` `3.` 即可，例如：
```
1. 列表项1
2. 列表项2
3. 列表项3
```
列表案例截图如下：
![图片.png](http://upload-images.jianshu.io/upload_images/4648608-fb8e0198404a0000.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 链接和图片
Markdown中插入链接不需要其他操纵，只要按照 `[显示文本] (链接地址)` 这样的格式来写节课，例如：
```
[饥人谷](www.jirengu.com)
```
在 Markdown 中，插入图片不需要其他按钮，你只需要使用 ```![](图片地址链接) ``` 这样的语法即可，例如：
```
![](http://upload-images.jianshu.io/upload_images/4648608-67f96ba6fa278123.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
插入链接和图片的案例截图：

![图片.png](http://upload-images.jianshu.io/upload_images/4648608-ec6932249a202374.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 引用
我们平时在写作的时候有时候需要引用他人的作品，这个时候就需要引用格式了。在Markdown中，你只需要在你引用的文字前面加上 ` > ` 即可，例如：
```
> 窗前明月光，疑是地上霜。举头望明月，低头思故乡。
```
这段文字在页面上就会显示成
> 窗前明月光，疑是地上霜。举头望明月，低头思故乡。

引用的案例截图：
![图片.png](http://upload-images.jianshu.io/upload_images/4648608-7108f07c1b660a47.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 粗体和斜体
Markdown中粗体和斜体的使用十分方便。用 ` ** ` 包含一段文本就是粗体的语法，用 ` * ` 包含一段文本就是斜体的语法 。例如：
```
*  窗前明月光，疑是地上霜。 * ** 举头望明月，低头思故乡。**
```
粗体和斜体的案例截图如下：

![图片.png](http://upload-images.jianshu.io/upload_images/4648608-28bb8fd0763a3932.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 代码引用
在需要引用代码时，如果引用的语句只有一段，不分行，可以用 ```  ` ``` 将语句包起来。而如果引用的语句为多行，可以将 ` ``` ` 置于这段代码的首行和末行。
引用的案例截图：

![图片.png](http://upload-images.jianshu.io/upload_images/4648608-b687caddb8437f80.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 表格
相关代码：
```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```
显示效果：


![图片.png](http://upload-images.jianshu.io/upload_images/4648608-b4c78679d8c9f4c9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

相关代码：
```
dog | bird | cat
----|------|----
foo | foo  | foo
bar | bar  | bar
baz | baz  | baz
```
显示效果：

![图片.png](http://upload-images.jianshu.io/upload_images/4648608-518bd4520d8e9bff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 显示链接中带括号的图片
![][1]
[1]: http://latex.codecogs.com/gif.latex?\prod%20\(n_{i}\)+1
代码如下：
```
![][1]
[1]: http://latex.codecogs.com/gif.latex?\prod%20\(n_{i}\)+1
```
### 结语
以上就是Markdown常用的语法，如果你想更深入的了解Markdown语法，请参考[Markdown语法说明](http://wowubuntu.com/markdown/)，希望本篇文章能够为你提供些许帮助。