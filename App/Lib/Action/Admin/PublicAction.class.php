<?php

class PublicAction extends Action {

    private $adminMenu = array();

//    public function _initialize() {
//        header("Content-Type:text/html; charset=utf-8");
//        header('Content-Type:application/json; charset=utf-8');
//        $this->adminMenu = require COMMON_PATH . 'menu.config.php';
//    }

    public function login() {
        if (IS_POST) {
            
        }
        $_SESSION['_login'] = true;
        $_SESSION['userid'] = 10000;
        $_SESSION['username'] = 'admin';
        $_SESSION['email'] = 'admin@qq.com';
        $_SESSION['logintime'] = date('Y-m-d H:i:s', time());

        $this->redirect('Index/index');
    }

}