<?php

class NewsAction extends PublicAction {

    public function index() {
        $about = D('Class')->getDetail(array('class_module' => MODULE_NAME));
        $result = D('Class')->relation(true)->getDetail(array('class_pid' => $about['class_id']));
        $data = $result['Article'];
        $this->assign('data', $data);
        $cid = $data[0]['class_id'];

        parent::left();
        parent::crumbs($cid);
        $this->display();
    }

    public function read() {
        $aid = $this->_get('aid');
        $data = D('Article')->getDetail(array('article_id' => $aid));
        $this->assign('data', $data);

        parent::left();
        parent::crumbs($data['class_id']);
        $this->display();
    }

}
