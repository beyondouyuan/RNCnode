## React Native环境配置

- 安装JDK
- 配置JDK环境变量
- 安装ndroid环境
- 配置SDK
- 创建RN项目（react-native init AwesomeProject）

## 运行RN项目进行调试

- 使用USB将手机与电脑连接，在手机上打开开发者调试模式
- CMD窗口输入adb devices查看手机上是否正确安装驱动程序
- 继续在CMD窗口输入adb reverse tcp:8081 tcp:8081 重新监听手机的端口，该端口与RN启动的端口一致（手机与电脑在同一wifi下，确保是同一ip）
- 打开新的CMD窗口并进入到RN项目根目录
- 运行react-native run-android命令

## 启动常见错误及解决方案

魅族 Meizu m2 note / 魅族 Meizu MX4 / 华为 Huawei Mate 7 / 华为 Huawei P8 / 小米 Redmi Note 2 / 乐视 Letv X500 无法安装以上手机安装apk时, 可能会报一个 com.android.ddmlib.InstallException: Unable to upload some APKs, 需要修改如下几个位置:

- 将 android/build.gradle 里的 gradle:1.3.1 改为 gradle:1.2.3
- 需要将 android/gradle/wrapper/gradle-wrapper.properties里的 distributionUrl 版本改为gradle-2.2-all.zip
- 重新运行react-native run-android即可

## 更新RN项目后在手机上预览最新更新

- 运行react-native run-android命令启动后
- 在运行adb reverse tcp:8081 tcp:8081的CMD窗口者运行adb shell input keyevent 82（或者摇晃手机设备）即可打开开发者菜单
- 点击进入Dev Settings
- 点击Debug server host for device
- 输入你电脑的IP地址和端口号（譬如10.0.1.1:8081）
- 回到开发者菜单然后选择Reload JS
- 若在开发者菜单点击了Enable Hot Reloading则每次保存修改的文件将会自动刷新

## 在模拟器上连接RN项目

每次用真机尽情测试着实不爽，模拟器是开发中很好的选择，此处选择夜神安卓模拟器，

- 安装夜神模拟器
- 启动模拟器
- 运行adb devices，什么也没看到
- 进入夜神安装路径cd yeshen/Nox\bin
- 运行nox_adb devices查看模拟器设备信息（设备端口等）
- 若没有看到设备信息，则直接从任务管理器查看NoxVMHandle.exe的PID信息
- md中netstat -aon|findstr PID
- 此时得到模拟器设备信息，一般为127.0.0.1:52001或者127.0.0.1:62001
- 从cmd进入SDK路径（如我的是C:\Users\dami1\AppData\Local\Android\Sdk）
- 进入platform-tools （cd C:\Users\dami1\AppData\Local\Android\Sdk\platform-tools）
- 使用adb链接模拟器adb.exe connect 127.0.0.1:62001
- 此时链接成功
- 进入RN项目执行react-native run-android APK将安装到模拟器，此时启动会报错红色屏幕
- 点击模拟器的摇一摇，进入开发设置对话框，则如链接真机一样，设置ip为电脑ipconfig查看到的ip以及端口即可（如92.168.1.167:8081）
- so just coding


## 通过Chrome调试React Native

- 摇一摇手机或者模拟机器，在Developer Menu下单击”Debug JS Remotely” 启动JS远程调试功能。此时Chrome会被打开，同时会创建一个“http://localhost:8081/debugger-ui.” Tab页
- 打开Chrome开发者工具
- 如此既可以看到诸如console.log之类的信息以及网络请求