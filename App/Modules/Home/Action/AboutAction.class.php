<?php

class AboutAction extends PublicAction {

    public function index() {
        $about = D('Class')->getDetail(array('class_module' => MODULE_NAME));
        $result = D('Class')->relation(true)->getDetail(array('class_pid' => $about['class_id']));
        $data = $result['Article'];
        $this->assign('data', $data);
        $cid = $data[0]['class_id'];
        
        $this->left($cid);
        $this->display();
    }

    public function read() {
        $cid = $this->_get('cid');
        $data = D('Article')->getDetail(array('class_id' => $cid));
        $this->assign('data', $data);

        $this->left($cid);
        $this->display();
    }

    public function left($cid) {
        parent::left();
        parent::crumbs($cid);
    }

}
