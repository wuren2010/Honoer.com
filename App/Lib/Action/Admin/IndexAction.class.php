<?php

class IndexAction extends CommonAction {

    //服务器信息检测
    public function index() {
        $this->assign('currentNav', '后台管理 > 基本信息');
        if (function_exists('gd_info')) {
            $gd = gd_info();
            $gd_version = $gd['GD Version'];
        } else {
            $gd_version = "不支持";
        }
        $server_info = array(
            '操作系统' => PHP_OS,
            '主机名IP端口' => $_SERVER['SERVER_NAME'] . ' (' . $_SERVER['SERVER_ADDR'] . ':' . $_SERVER['SERVER_PORT'] . ')',
            '运行环境' => $_SERVER["SERVER_SOFTWARE"],
            'PHP运行方式' => php_sapi_name(),
            '程序目录' => SITE_PATH,
            'MYSQL版本' => function_exists("mysql_close") ? mysql_get_client_info() : '不支持',
            'GD库版本' => $gd_version,
            'MYSQL版本' => mysql_get_server_info(),
            '上传附件限制' => ini_get('upload_max_filesize'),
            '执行时间限制' => ini_get('max_execution_time') . "秒",
            '剩余空间' => round((@disk_free_space(".") / (1024 * 1024)), 2) . 'M',
            '服务器时间' => date("Y年n月j日 H:i:s"),
            '北京时间' => gmdate("Y年n月j日 H:i:s", time() + 8 * 3600),
            '采集函数检测' => ini_get('allow_url_fopen') ? '支持' : '不支持',
            'register_globals' => get_cfg_var("register_globals") == "1" ? "ON" : "OFF",
            'magic_quotes_gpc' => (1 === get_magic_quotes_gpc()) ? 'YES' : 'NO',
            'magic_quotes_runtime' => (1 === get_magic_quotes_runtime()) ? 'YES' : 'NO',
        );
        $this->assign('server_info', $server_info);
        $this->display();
    }

    public function personal() {
        $this->assign('currentNav', '网站管理 > 个人信息');
        if (IS_POST) {
            echo json_encode(D("Index")->editPersonal($_POST));
        } else {
            $this->display();
        }
    }

    public function cache() {
        $this->assign('currentNav', '网站管理 > 缓存管理');
        $caches = array(
            "HomeCache" => array("name" => "网站前台缓存文件", "path" => RUNTIME_PATH . "Cache/Home/"),
            "AdminCache" => array("name" => "网站后台缓存文件", "path" => RUNTIME_PATH . "Cache/Admin/"),
            "HomeData" => array("name" => "网站前台数据库字段缓存文件", "path" => RUNTIME_PATH . "Data/"),
            "AdminData" => array("name" => "网站后台数据库字段缓存文件", "path" => RUNTIME_PATH . "Data/"),
            "HomeLog" => array("name" => "网站前台日志缓存文件", "path" => RUNTIME_PATH . "Logs/"),
            "AdminLog" => array("name" => "网站后台日志缓存文件", "path" => RUNTIME_PATH . "Logs/"),
            "HomeTemp" => array("name" => "网站前台临时缓存文件", "path" => RUNTIME_PATH . "Temp/"),
            "AdminTemp" => array("name" => "网站后台临时缓存文件", "path" => RUNTIME_PATH . "Temp/"),
            "Homeruntime" => array("name" => "网站前台runtime.php缓存文件", "path" => RUNTIME_PATH . "/Home/~runtime.php"),
            "Adminruntime" => array("name" => "网站后台runtime.php缓存文件", "path" => RUNTIME_PATH . "/Admin/~runtime.php"),
        );
        if (IS_POST) {
            foreach ($_POST['cache'] as $path) {
                if (isset($caches[$path]))
                    deleteFile($caches[$path]['path']);
            }
            echo json_encode(array("status" => 1, "info" => "缓存文件已清除"));
        } else {
            $this->assign("caches", $caches);
            $this->display();
        }
    }

    public function bakup() {
        $this->assign('currentNav', '网站管理 > 数据库备份');
        $Model = new Model();
        $tables = $Model->query('SHOW TABLE STATUS');
        $total = 0;
        foreach ($tables as $key => $value) {
            $tables[$key]['size'] = $value['Data_length'] + $value['Index_length'];
            $total+=$value['Data_length'] + $value['Index_length'];
        }
        $this->assign("list", $tables);
        $this->assign("total", $total);
        $this->assign("tables", count($tables));
        $this->display();
    }

}
