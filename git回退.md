# git回退

## 一共有三种情况

1. 删除了但是没有add

2. 删除了但是add了，但是没有commit

3. 删除也已经commit了

	## git checkout 后面跟不小心删除的文件

	根据第一种情况![](https://github.com/giaoge2602/picture/blob/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20241108231311.png?raw=true)

	可以使用git checkout加上文件名来进行恢复

	## 已经有add但是没有commit的操作

	这里本来是想有图片显示的。但是忘记记录了，实在很抱歉，具体的操作就是用git log查看日志，找到相应的哈希值，再用checkout来实现。

	**就可以先查出日志，再用哈希值来还原** 

	![image-20241108170718903](https://github.com/giaoge2602/picture/blob/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20241108231234.jpg?raw=true)

	我们add只是把它从工作区放到了暂存区，checkout只是从暂存区恢复到工作区，添加了add，就把工作区和暂存区的内容变得一样了，所以我们得从版本库里面恢复我们的文件。

	## git reset head —

	这个是可以进行commit后版本可以进行回溯。（这个表示硬重置，即覆盖所有变更）

	## branch

	分支可以把当前版本复制一遍

	用**checkout**命令可以不断切换分支

	还可以用**merge**将分支合并
	
	# 关于git和github连接的一些报错解决方法和个人心得
	
	
	
	### 这个是可以查看远程仓库的代码
	
	
	
	![image-20241108143303842](https://github.com/giaoge2602/picture/blob/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20241108231917.png?raw=true)
	
	### 遇到的一点小问题
	
	![image-20241108150752457](https://github.com/giaoge2602/picture/blob/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20241108232007.png?raw=true)
	
	​     
	
	就是要谨慎使用全局命令，不然git会找不到远端的仓库，从而导致报错
	
	所以我们要先确定好相对的github的邮箱和用户名再进行push
	
	### 如何创建远程分支和本地连接的理解
	
	![image-20241108160038137](https://github.com/giaoge2602/picture/blob/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20241108231247.png?raw=true)
	
	**git push origin（远程仓库的名称） master（本地仓库的名称）:main（你想推送到的远程仓库的分支或者是主文件）**
	
	这个十分重要！！！！
	
	千万要分清楚远程仓库的分支和主文件，以后才能更好的并发开发，不会对主要的稳定的文件进行干扰。
	
	### 使用场景
	
	`git push origin master:main` 通常用于以下场景：
	
	1. **本地和远程的主分支名称不一致**：例如，本地的主分支叫 `master`，而远程仓库的主分支叫 `main`。
	2. **将一个分支推送到不同名称的远程分支**：这条命令允许你将本地的任何分支推送到远程的任何分支。
	
	
	
	
	
	