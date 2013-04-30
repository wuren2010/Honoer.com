<?php

$db_config = require SITE_PATH . '/db.config.php';
$web_config = require SITE_PATH . '/web.config.php';

$app_config = array(
    'URL_MODEL' => 3, 
    'APP_AUTOLOAD_PATH' => '@.TagLib',
    'APP_GROUP_LIST' => 'Home,Admin',
    'DEFAULT_GROUP' => 'Home',
    'SHOW_PAGE_TRACE' => 0, 
    'DEFAULT_THEME' => 'Default',
    'LAYOUT_ON' => true,
    'TMPL_FILE_DEPR' => '-',
    'TMPL_ACTION_ERROR' => TMPL_PATH . 'dispatch_jump.html', 
    'TMPL_ACTION_SUCCESS' => TMPL_PATH . 'dispatch_jump.html', 
    'TMPL_EXCEPTION_FILE' => TMPL_PATH . '404.html', 
);

return array_merge($db_config, $app_config, $web_config);
?>
