<?php

class PublicAction extends Action {

    private $adminMenu = array();

//    public function _initialize() {
//        header("Content-Type:text/html; charset=utf-8");
//        header('Content-Type:application/json; charset=utf-8');
//        $this->adminMenu = require COMMON_PATH . 'menu.config.php';
//    }

    public function login() {
        header("Content-Type:text/html; charset=utf-8");
        header('Content-Type:application/json; charset=utf-8');
        if (!empty($_POST)) {
            $verify = $this->_post('verify');
            $username = $this->_post('username');
            $password = $this->_post('password');
            if ($_SESSION['verify'] === md5($verify)) {
                if (C('ADMIN_USER') === $username && C('ADMIN_PASS') === $password) {
                    $_SESSION['_login'] = true;
                    $_SESSION['userid'] = 10000;
                    $_SESSION['username'] = $this->_post('username');
                    $_SESSION['logintime'] = date('Y-m-d H:i:s', time());
                    echo json_encode(array('status' => 1, 'info' => '登录成功！', 'url' => U('Index/index')));
                } else {
                    echo json_encode(array('status' => 0, 'info' => '账号或密码错误！'));
                }
            } else {
                echo json_encode(array('status' => 0, 'info' => '验证码错误！'));
            }
        } else {
            $this->display();
        }
    }

    public function logout() {
        session_destroy();
        $_SESSION = array();
        $this->redirect('Public/login');
    }

    public function verify() {
        $w = isset($_GET['w']) ? (int) $_GET['w'] : 50;
        $h = isset($_GET['h']) ? (int) $_GET['h'] : 24;
        import("@.ORG.Util.Image");
        Image::buildImageVerify(4, 1, 'png', $w, $h);
    }

}