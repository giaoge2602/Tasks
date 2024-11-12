# CSS笔记

## css定义

css是层叠样式表，是一种样式表语言，是用来描述html文档的呈现。

它放在title标签的下方，要先加上一段style标签

 <style>
        p {
            color: blue;
            font-size: 30px;
        }
    </style>

在这里面**font size**属性是显示字号的大小的

**color**和颜色成对出现，我们管这个叫做键值对

## css的引入方式

内部样式表：css代码在style标签内部使用

外部样式表：css代码在单独的css文件中（.css）

- 在html里面使用link标签引入这个

 <link rel="stylesheet" href="./my.css">

需要单独写一个css的文件，然后在title的标签下面link一个外部样式表

## 标签选择器

 <style>
        p {
            color: blue;
            font-size: 30px;
        }
    </style>

这个就是p的标签选择器，这个有一点不好的就是无法差异化同名标签的样式

## 类选择器

可以差异化设置标签的效果

- 定义类选择器->.类名
- 使用类选择器->标签添加**class=“类名”**

 <style>
        .red{
            color: red;
        }
    </style>
</head>
<body>

  <p class="red">11111111</p>
  <p>33333333</p>  

一个标签可以使用多个类名

class写多个类名就ok了

## 画盒子

width     代表宽度

height    代表高度

background color   背景色

  .red{

​      width: 100px;

​      height: 100px;

​      background-color: aqua;

​    }

  ## 字体大小

<img src="https://raw.githubusercontent.com/giaoge2602/images/main/202411100406121.png" alt="image-20241110040634678" style="zoom:50%;" />

font weight 400是正常的效果

font weight700 就是加粗后的效果

## 行高

设置多行文本的间距

- 数字加px
- 数字(行高的值是数字，表示是当前字号大小的倍数)

行高的测量就是从一行文字的最顶到测量下一行文字的最底

.div2{

  height: 100px;

  background-color: blueviolet;

  line-height: 100px;

}

这个就可以使得文字在盒子的中央位置**（这个技巧只能单行文字垂直居中）**

## 文字的字体

font family

建议在font family属性设置的后面设置一个字体族 网页开发建议使用无衬线的字体

无衬线的字体族名字是sans-serif

## font属性

<img src="https://raw.githubusercontent.com/giaoge2602/images/main/202411100439400.png" alt="image-20241110043949670" style="zoom: 50%;" />

## 文本缩进

text indent

属性值

- 数字加上px
- 数字加上em（推荐1em（当前标签的字号的大小））
- 用第二种方法就是你不管怎么变换字号大小，多大多小都好，他还是会缩进两个字符或者是你设定的字符

## 文本的对齐方式

text align

left        左对齐是默认的

center  居中对齐

right      右对齐

这个居中的文字的内容，并没有改变其标签的位置

## 文字的颜色

