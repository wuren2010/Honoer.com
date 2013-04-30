<?php

header('Content-Type:text/html;charset=utf-8');

if (!file_exists("./db.config.php"))
    header("location: ./Install/index.php");

define('SITE_PATH', dirname(__FILE__));
define('UPLOAD_PATH', './Public/Uploads/');
define('THINK_PATH', './ThinkPHP/');
define('APP_NAME', 'App');
define('APP_PATH', 'App/');
define('RUNTIME_PATH', './Runtime/');
define('APP_DEBUG', TRUE);

require( THINK_PATH . "ThinkPHP.php");
?>
