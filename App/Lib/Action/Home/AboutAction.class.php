<?php

class AboutAction extends PublicAction {

    public function index() {
        $classModel = D('Class');
        $cid = $this->_get('cid');
        $class = $classModel->getDetail(array('class_module' => MODULE_NAME));
        $data = $classModel->getIndexData($class['class_id'], $cid);
        $this->assign('data', $data['data']);
        $this->assign('path', $data['path']);

        $cpath = $data['data']['class_path'] . '-' . $data['data']['class_id'];
        parent::crumbs($cpath);
        $this->display();
    }

    public function read() {
        $aid = $this->_get('aid');
        $classModel = D('Class');
        $class = $classModel->getDetail(array('class_module' => MODULE_NAME));
        $path = $classModel->getPath($class['class_id']);
        $data = D('Article')->relation(true)->getDetail(array('article_id' => $aid));
        //上一篇|下一篇

        $this->assign('path', $path);
        $this->assign('data', $data);
        $cpath = $data['class_path'] . '-' . $data['class_id'];
        parent::crumbs($cpath);
        $this->display();
    }

}
