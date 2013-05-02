<?php

header('Content-Type:text/html;charset=utf-8');
error_reporting('E-ALL');

//定义相关常量
define('SITE_PATH', dirname(__FILE__));
define('UPLOAD_PATH', './Public/Uploads/');
define('THINK_PATH', './ThinkPHP3.0/');
define('APP_NAME', 'App');
define('APP_PATH', './App/');
define('APP_DEBUG', TRUE);

//运行ThinkPHP
require( THINK_PATH . "ThinkPHP.php");


if (!file_exists(CONF_PATH . "db.config.php"))
    header("location: ./Install/index.php");
?>
