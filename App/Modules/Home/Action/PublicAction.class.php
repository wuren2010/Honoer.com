<?php

class PublicAction extends Action {

    public function _initialize() {
        $where = array(
            'class_pid' => 0,
            'class_using' => 1,
        );
        $order = array(
            'class_order' => 'ASC',
        );
        $navigation = D('Class')->getList($where, $order);


//        将配置文件缓存起来       
        $config = M('Config')->where(array('config_using' => 1))->select();
        foreach ($config as $key => $value) {
            $conf[$value['config_name']] = $value['config_value'];
        }
        S('config', $conf);

        $config = S('config');
        $this->assign('config', $config);
        $this->assign('navigation', $navigation);
    }

    public function header() {
        
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
        $this->assign('sliderBar', $sliderBar);
    }

}
