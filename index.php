<?php

header('Content-Type:text/html;charset=utf-8');
if (!file_exists("config.inc.php"))
    header("location: Install/index.php");

//定义项目名称和路径
define('THINK_PATH', './ThinkPHP/');
define('APP_NAME', 'App');
define('APP_PATH', './App/');
define('APP_DEBUG', TRUE);

// 加载框架入口文件
require( THINK_PATH . "/ThinkPHP.php");
