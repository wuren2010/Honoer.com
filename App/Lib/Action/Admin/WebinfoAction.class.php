<?php

class WebinfoAction extends CommonAction {

    public function index() {
        $this->assign('currentNav', '系统设置 > 站点配置');

        $this->display();
    }

}
