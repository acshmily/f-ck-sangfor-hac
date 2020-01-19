#使用说明
##声明
本插件仅为个人学习测试使用，请在下载后24小时内删除，不得用于商业用途，否则后果自负
##前言
由于某运维系统对Mac支持非常糟糕，目前对于目标服务器非Unix服务器暂时没有比较合适的解决方案，只能曲线救国连接至Win跳板机再进入目标Unix服务器运维。
##准备条件
- 合法的运维帐号及目标运维目标Win服务器
- 安装Microsoft Remote Desktop For Mac

其中关于Microsoft Remote Desktop版本推荐版本10及以上，安装方式分为**AppStore（推荐）**及自行安装。其中AppStore安装方式需要更改您的AppId归属地区及国家，亲测侧换至US可以正常下载。

- AppId切换地区及国区的方法请自行百度或者Google
- Microsoft Remote Desktop 10（不保证安全） https://www.techspot.com/downloads/4698-microsoft-remote-desktop-for-mac.html 

##关于本插件安装方法
最新下载地址：https://github.com/acshmily/f-ck-sangfor-hac/releases

安装方法：https://www.jianshu.com/p/bb51dc91b93a

##使用方法

在Chrome右上角找到本插件：

![image-20200119102449788](/Users/huanghongzhi/WebstormProjects/f-ck-sangfor-hac/dist/image-20200119102449788.png)

点击后会弹出一个窗口进行相关配置，如需要使用请选择**开启**，运维系统地址请填写运维系统所在**IP**，例如 192.168.199.99，配置后点击保存即可生效。

![image-20200119102552792](/Users/huanghongzhi/WebstormProjects/f-ck-sangfor-hac/dist/image-20200119102552792.png)

在运维系统选择Win中间机，选择**RDP**协议，填写合法的帐号及密码点击确认即可获取对应的sid![image-20200119102813439](/Users/huanghongzhi/WebstormProjects/f-ck-sangfor-hac/dist/image-20200119102813439.png)

![image-20200119102948092](/Users/huanghongzhi/WebstormProjects/f-ck-sangfor-hac/dist/image-20200119102948092.png)

复制sid后进行后续Microsoft Remote Desktop 相关配置，添加PC资源，填写运维系统的ip及代理端口进行连接，填入sid即可连接win目标服务器。

![image-20200119103222417](/Users/huanghongzhi/WebstormProjects/f-ck-sangfor-hac/dist/image-20200119103222417.png)

![image-20200119103257843](/Users/huanghongzhi/WebstormProjects/f-ck-sangfor-hac/dist/image-20200119103257843.png)

