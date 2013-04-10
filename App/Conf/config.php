<?php

$db_config = require __ROOT__ . '/db.config.php';
$web_config = require __ROOT__ . '/web.config.php';
//项目配置文件
$app_config = array(
    'URL_MODEL' => 3, // 如果你的环境不支持PATHINFO 请设置为3
    'APP_AUTOLOAD_PATH' => '@.TagLib',
    'APP_GROUP_LIST' => 'Home,Admin',
    'DEFAULT_GROUP' => 'Home',
    'APP_GROUP_MODE' => 1,
    'SHOW_PAGE_TRACE' => 0//显示调试信息
);

return array_merge($db_config, $app_config, $web_config);
?>
