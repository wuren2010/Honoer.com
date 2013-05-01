<?php

class WebinfoAction extends CommonAction {

    public function index() {
        $this->assign('currentNav', '系统设置 > 站点配置');

        $this->display();
    }

    public function edit() {
        if (!empty($_POST)) {
            $data = $this->_post();
            $keys = array_map(function($args) {
                        return strtoupper($args);
                    }, array_keys($data));
            $data = array_combine(array_values($keys), array_values($data));
            $web_config = "./web.config.php";
            $config = file_exists($web_config) ? include ($web_config) : array();
            $config = is_array($config) ? $config : array();
            $config = array_merge($config, $data);
            if (F('web.config', $config, __ROOT__)) {
                deleteFile(RUNTIME_PATH, true);
                echo json_encode(array('status' => 1, 'info' => $str . '更新成功'));
            } else {
                echo json_encode(array('status' => 0, 'info' => $str . '更新失败，请检查', 'url' => __ACTION__));
            }
        } else {
            $this->display();
        }
    }

}
