<?php

class ServiceAction extends PublicAction {

    public function index() {

        $this->display();
    }

    public function read($aid) {
        $data = M('Article')->find($aid);
        $crumbs = D('Class')->getCrumbs($this->_get('cid'));
        $this->assign('crumbs', $crumbs);
        $this->assign('data', $data);
        $this->display();
    }

}