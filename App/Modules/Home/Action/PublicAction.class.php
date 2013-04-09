<?php

class PublicAction extends Action {

    public function _initialize() {
        $class = M('Class');
        $where = array(
            'class_pid' => 0,
            'class_using' => 1,
        );
        $order = array(
            'class_order' => 'ASC',
        );
        $navigation = $class->field(true)->where($where)->order($order)->select();


//        将配置文件缓存起来       
        $config = M('Config')->where(array('config_using'=>1))->select();
        foreach ($config as $key=>$value){
            $conf[$value['config_name']] = $value['config_value'];
        }
        S('config',$conf);

        $config = S('config');
        $this->assign('config', $config);
        $this->assign('navigation', $navigation);
        $this->banner();
    }

    public function banner() {
        $cid = $_GET['cid'] ? $_GET['cid'] : 1;
        $where = array('picture_purpose' => $cid);
        $banner = M('Picture')->where($where)->select();
        $this->assign('banner', $banner);
    }

}
