<?php

class PublicAction extends Action {

    public function _initialize() {
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

    public function crumbs($cid) {
        $where = array('class_id' => $cid);
        $crumbs = D('Class')->getCrumbs($where);
        $this->assign('crumbs', $crumbs);
    }

    public function left() {
        $where = array('class_module' => MODULE_NAME);
        $sliderBar = D('Class')->getPath($where);
        array_shift($sliderBar);
        $this->assign('sliderBar', $sliderBar);
    }

}
