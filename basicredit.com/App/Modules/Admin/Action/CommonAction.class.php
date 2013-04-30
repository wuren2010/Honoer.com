<?php

class CommonAction extends Action {

    public $loginMarked;
    public $adminMenu = array();

    public function _initialize() {
        header("Content-Type:text/html; charset=utf-8");
        header('Content-Type:application/json; charset=utf-8');
        $this->adminMenu = require APP_PATH . 'Modules/Admin/Common/top.menu.php';
        $this->header();
        $this->left();
    }

    public function header() {
        $menu = $this->adminMenu['admin_big_menu'];
        $count = count($menu);
        $i = 1;
        $top_menu = '<ul>';
        foreach ($menu as $url => $name) {
            if ($i == 1) {
                $css = $url == MODULE_NAME || !$top_menu[MODULE_NAME] ? "fisrt_current" : "fisrt";
                $top_menu.='<li class="' . $css . '"><span><a href="' . U($url . '/index') . '">' . $name . '</a></span></li>';
            } else if ($i == $count) {
                $css = $url == MODULE_NAME ? "end_current" : "end";
                $top_menu.='<li class="' . $css . '"><span><a href="' . U($url . '/index') . '">' . $name . '</a></span></li>';
            } else {
                $css = $url == MODULE_NAME ? "current" : "";
                $top_menu.='<li class="' . $css . '"><span><a href="' . U($url . '/index') . '">' . $name . '</a></span></li>';
            }
            $i++;
        }
        $top_menu.='</ul>';
        $this->assign('top_menu', $top_menu);
    }

    public function left() {
        $menu = $this->adminMenu['admin_sub_menu'];
        $big = MODULE_NAME == "Index" ? "Common" : MODULE_NAME;
        $sub_menu = array();
        if ($menu[$big]) {
            $menu = $menu[$big];
            foreach ($menu as $url => $title) {
                $url = $big == "Common" ? $url : "$big/$url";
                $sub_menu[] = array('url' => U("$url"), 'title' => $title);
            }
        } else {
            $sub_menu[] = array('url' => '#', 'title' => "该菜单组不存在");
        }
        $this->assign('sub_menu', $sub_menu);
    }

}