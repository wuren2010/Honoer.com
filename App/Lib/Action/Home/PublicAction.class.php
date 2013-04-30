<?php

class PublicAction extends Action {

    public function _initialize() {
        $class = D('Class')->relation(true)->getDetail(array('class_module' => MODULE_NAME));
        $this->assign('class', $class);
        self::header();
    }

    public function header() {
        $where = array(
            'class_pid' => 0,
            'class_using' => 1,
        );
        $order = array(
            'class_order' => 'ASC',
        );
        $navigation = D('Class')->getList($where, $order);
        $this->assign('navigation', $navigation);
    }

    public function footer() {
        
    }

    public function banner($cid = 1) {
        $where = array('picture_purpose' => $cid);
        $banner = M('Picture')->where($where)->select();
        $this->assign('banner', $banner);
    }

    public function crumbs($path) {
        $crumbs = D('Class')->getCrumbs($path);
        $this->assign('crumbs', $crumbs);
    }

}
