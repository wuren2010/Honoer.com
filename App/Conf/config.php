<?php

$db_config = require __ROOT__ . '/db.config.php';
$web_config = require __ROOT__ . '/web.config.php';
//项目配置文件
$app_config = array(
    'URL_MODEL' => 3, // 如果你的环境不支持PATHINFO 请设置为3
    'APP_AUTOLOAD_PATH' => '@.TagLib',
    'APP_GROUP_LIST' => 'Home,Admin',
    'DEFAULT_GROUP' => 'Home',
    'SHOW_PAGE_TRACE' => 0, //显示调试信息
    'DEFAULT_THEME' => 'Default',
    'LAYOUT_ON' => true,
    'TMPL_FILE_DEPR' => '-',
    'TMPL_ACTION_ERROR' => TMPL_PATH . 'dispatch_jump.html', //错误页面
    'TMPL_ACTION_SUCCESS' => TMPL_PATH . 'dispatch_jump.html', //成功页面
    'TMPL_EXCEPTION_FILE' => TMPL_PATH . '404.html', //异常页面
);

return array_merge($db_config, $app_config, $web_config);
?>
