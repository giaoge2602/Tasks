# html笔记

<img src="https://raw.githubusercontent.com/giaoge2602/images/main/202411090525420.png?token=BDSPFR77GRIE5G5JMF7AUF3HF2BBI" alt="image-20241109052518201" style="zoom: 50%;" />

<img src="https://raw.githubusercontent.com/giaoge2602/images/main/202411090526333.png?token=BDSPFRYTNYEST2HCAHJSESTHF2BC4" alt="image-20241109052603376" style="zoom:50%;" />

<img src="https://raw.githubusercontent.com/giaoge2602/images/main/202411090526430.png?token=BDSPFR44WKRLOIZ7F24IHODHF2BEM" alt="image-20241109052627406" style="zoom:50%;" />

## 路径

路径指的是查找文件时，从起点到终点所经历的路线

- 相对路径 ：从当前文件位置出发查找目标文件
- 绝对路径：从盘符出发查找目标文件

/ 表示进入了某个文件夹

. 表示当前文件所在文件夹

../表示上一级的文件夹

.. 表示进入上一级

**绝对路径可以用来做友情连接**

##  超链接标签

输入a即可开始跳转到超链接的标签

href的等号后面就是可以添加我我们想要跳转的网页，在这之后我们就是可以在后面编辑上我们想要的文字进行说明

在网址的后面加上一个空格再加上target 以及blank就可以重新打开一个新的页面，不需要回退

在开发初期，不知道要跳转的地址是哪一个的话，我们可以在href的后面加上一个#号键

## 音频标签

![](https://raw.githubusercontent.com/giaoge2602/images/main/202411090512508.png?token=BDSPFR4VYZA6BIWX2RI24ELHFZ7RS)

在src后面加一个空格再加上contrls 就会出现音频的控制面板

在空格加上loop就是循环

以此类推autoplay就是自动播放（但是一般都是会被禁掉）

## 视频标签

![image-20241109052031062](https://raw.githubusercontent.com/giaoge2602/images/main/202411090520905.png?token=BDSPFRYJMSLTBLEHJIA5AA3HF2AN4)

这个和音频文件比较雷同，所以不多解释

**可以进行在静音状态下自动播放**

## 复刻代码的小技巧

在复制的文本内，想要加上超链接等标签，需要vscode进行联想，可以在超链接的标签或者其他标签的后面加上一个空格，vscode就可以进行联想了

## 列表标签

**无序列表**：

这个需要嵌套<ul>里面嵌套《li》

注意事项：

ul里面只能包裹li标签

li标签里面可以包裹各种内容

**有序列表**：

里面和无序列表的方式是一致的

**定义列表**:

一个标题有多个小分类的就是使用定义列表

《dl》里面嵌套《dd》以及《dt》

《dt》是标题

《dd》是内容

## 表格标签

<img src="https://raw.githubusercontent.com/giaoge2602/images/main/202411091551844.png?token=BDSPFR64NBAIPFNKURJTYF3HF4KNC" alt="image-20241109155126050" style="zoom: 67%;" />

table是整个表格《table》

tr代表行，有几行就加几个tr

## 合并单元格

可以进行跨行合并以及跨列合并

**保留最左边最上边的单元格**

就是假如说要跨行合并，就是保留最上边的单元格

要跨列合并，就是要保存最左边的单元格

![image-20241109184947005](https://raw.githubusercontent.com/giaoge2602/images/main/202411091849346.png?token=BDSPFR3MAKNMXR34FMPQ6UTHF47JG)

最上面的单元格添加属性 rowspan然后等于号后面跟上需要合并单元格的数量

下面的单元格就可以删掉了或者添加注释



跨列合并的原理和跨行合并是一样的

## 表单

### input标签的使用

input标签中有一个type

然后type属性值不一样，那么功能也是不相同的

![image-20241109185636413](https://raw.githubusercontent.com/giaoge2602/images/main/202411091856548.png?token=BDSPFR35YO3VY3SVXI6GEATHF5ACI)

文本框输入的是单行文本

输入密码框输入什么都是以点的形式出现的

上传文件是给用户上传文件用的

### input占位文本

文本框的标签里面添加属性placeholder在等于号后面加上想要输入的占位字符就行了

### 单选

<input type="radio" name="gender">男

<input type="radio" name="gender">女

加name属性就是可以实现真正的单选动能

#### 一进来就选中

在后面添加属性checked

**这个功能同样适用于多选框的直接选中功能

#### 上传多个文件

在file后面加上mutiple属性

## 下拉菜单

**select**嵌套**option**就可以实现了

option是下拉菜单的每一项

下拉菜单做默认选中用selected

<option selected>武汉</option>

## 文本域

作用：多行输入文本的表单控件

双标签<textarea>双标签

右下角会有拖拽功能（但是一般都会禁用掉的）

## label 标签

作用：某个标签的说明文本

**用label标签绑定文字和表单控件的关系，增大表单控件的点击范围.**

一个label标签直接包裹内容

你想增大表单控件的点击范围，就可以使用label标签

## 按钮

submit   默认是提交功能

reset      重置按钮，点击后将某一个表单控件恢复默认值

button   普通按钮，配合js使用

#### 表单区域标签form

form包含了所有的表单区域

但是要注意缩进

<form action="">
文本框<input type="text"><br><br>
密码<input type="password">
    <input type="radio" name="gender" id="man"><label for="man">nan</label>
    <label><input type="radio" name="gender" checked>女</label>
    <button type="submit">提交</button>
    <button type="reset">重置</button>
</form>



## 无语义的布局标签

**div**  独占一行

**span** 默认是不换行的

div是独占一整行的标签。叫做大盒子

span是小盒子

## 字符实体

空格  &nbsp；

小于号  &lt；

大于号 &gt；





















​               

​        


​	·		









