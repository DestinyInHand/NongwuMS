启动该项目之前，需要修改以下配置参数
1.在根目录config_default文件中修改程序运行端口、mysql相关配置
2.在public/demo/javascripts/basicSetup.js文件中修改参数“PINYUANIP” ，修改其端口为程序运行端口

3.运行根目录下程序createDB.js ，来创建相应的数据库
4.在创建的数据库中，找到maintainer数据表，该表是用户权限表，在表maintainer中创建一个超级管理员账号，创建账号时需要注意的是：
    a.超级管理员账号的typeid=0
    b.所有的用户密码存储时都是以MD5加密后的结果进行存储的，因此在数据库中创建用户时，设置用户密码时，需要先将密码通过在线md5加密，然后将加密后的32位小写结果存储到数据库表maintainer中。