## 复合选择器

定义：由两个或者多个选择器，通过不同的方式组合而来

### 后代选择器

 div span {

​      color: red

​    }

这个表示在这个div里面全部span全都能选中

### 子代选择器

 div > span {

​      color: red

​    }

这个只能选择子代

### 并级选择器

div，

p，

span{

}

### 交集选择器

p.box{

color: red}

## 伪类选择器

鼠标悬停的状态

 a:hover {

  color: aqua;

  }

.box:hover{

​    color: red;

  }类选择器可以设置

**任何标签都可以设置鼠标悬停的状态**

### 伪类选择器的超链接拓展

**超链接一共有四个状态**

![image-20241110233757330](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20241110233757330.png)

a:link {

  color: red;

  }

按下去前



  a:visited {

  color: green;

  }

按下去后



  a:hover {

  color: blue;

  }

鼠标悬停



  a:active {

  color: orange;

  }

长时间按住不动

![image-20241110234838387](https://raw.githubusercontent.com/giaoge2602/images/main/202411110007133.png)

工作当中的设置，就是把一个a标签设置成一个颜色，然后鼠标悬停在单独设置

# css的三大特性

可以在body内部直接定义文字的属性以及特点

但是如果添加的标签自己有相对应的样式，那么生效自己的样式，不继承，就比如说a超链接的属性

![image-20241111000746793](https://raw.githubusercontent.com/giaoge2602/images/main/202411110007701.png)

# Emmet写法

标签名.类名 回车

如果我们想要div带类名   直接.类名就ok了

标签名加id选择器就是标签名加上#加上id选择器

同级别的就是div +p

想要父子级别的就是div>p这个形式

想要span多个标签显示，我们就可以使用×号比如span*3

标签直接加大括号就可以直接生成标签的内容了

w500+h200+bgc

## 显示模式

### 块级元素

**block**就是块级

**inline-block**则是行内块











  

























