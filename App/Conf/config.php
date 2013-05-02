<?php

$db_config = require  'db.config.php';
$web_config = require 'web.config.php';

$app_config = array(
    'URL_MODEL' => 1,
    'OUTPUT_ENCODE' => false,
    'APP_FILE_CASE' => true,
    'APP_AUTOLOAD_PATH' => '@.TagLib',
    'APP_GROUP_LIST' => 'Home,Admin',
    'DEFAULT_GROUP' => 'Home',
    'DEFAULT_THEME' => 'Default',
    'LAYOUT_ON' => true,
    'TMPL_FILE_DEPR' => '-',
    'TMPL_ACTION_ERROR' => TMPL_PATH . 'dispatch_jump.html',
    'TMPL_ACTION_SUCCESS' => TMPL_PATH . 'dispatch_jump.html',
    'TMPL_EXCEPTION_FILE' => TMPL_PATH . '404.html',
    //Runtime info
    //'SHOW_PAGE_TRACE' => true,
    'SHOW_ERROR_MSG' => true,
);

return array_merge($db_config, $app_config, $web_config);
?>
