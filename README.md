# 纪录学习AJAX的过程

## 课程地址：https://www.bilibili.com/video/BV1WC4y1b78y/?share_source=copy_web&vd_source=49f6187a0c24f0cf1f063cdface326fd

## 问题集合:
  *  P16中 安装nodemon自动重启失败

      因为在此系统上禁止运行脚本，也就是说没有权限。
      使用get-ExecutionPolicy查看权限。
      输出为Restricted则说明权限不够
      使用下列代码提升权限  
      Set-ExecutionPolicy -Scope CurrentUser
      在之后的提示中输入RemoteSigned
      再次尝试安装即可解决

      解决来源:https://blog.csdn.net/qq_43802768/article/details/124356677?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-124356677-blog-126213233.pc_relevant_3mothn_strategy_and_data_recovery&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-124356677-blog-126213233.pc_relevant_3mothn_strategy_and_data_recovery&utm_relevant_index=1

      
  *  P23中 请求头中找不到age属性

      将axios.html中请求头信息Headers修改为header

      解决来源:弹幕

      


