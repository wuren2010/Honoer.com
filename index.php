<?php

//定义项目名称和路径
define('APP_NAME', 'App');
define('APP_PATH', './App/');
define('APP_DEBUG',TRUE);

if (!file_exists ('./Install/install.lock')) {
    header("Location: Install/");
    exit;
}
// 加载框架入口文件
require( "./ThinkPHP/ThinkPHP.php");
