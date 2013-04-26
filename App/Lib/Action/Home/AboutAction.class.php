<?php

class AboutAction extends PublicAction {

    public function index() {
        $classModel = D('Class');
        $cid = $this->_get('cid');
        $class = $classModel->getDetail(array('class_module' => MODULE_NAME));
        $data = $classModel->getIndexData($class['class_id']);
        $this->assign('data', $data['data']);
        $this->assign('path', $data['path']);
        $cid = $cid? : $data['path'][0]['_child'][0]['class_id'];
        parent::crumbs($cid);
        $this->display();
    }

    public function read() {
        $cid = $this->_get('cid');
        $data = D('Article')->getDetail(array('class_id' => $cid));
        $this->assign('data', $data);

        parent::left();
        parent::crumbs($cid);
        $this->display();
    }

}
