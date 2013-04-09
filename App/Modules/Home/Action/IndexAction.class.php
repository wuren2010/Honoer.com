<?php

class IndexAction extends PublicAction {

    public function index() {
        $this->display();
    }

    public function about() {
        $data = D('Class')->relation(true)->getList(array('class_pid' => $this->_get('cid')));
        $crumbs = D('Class')->getCrumbs($this->_get('cid'));
        $this->assign('data', $data);
        $this->assign('crumbs', $crumbs);
        $this->display();
    }

    public function service() {
        import('ORG.Util.String');
        $String = new String();
        $data = D('Class')->relation(true)->getList(array('class_pid' => $this->_get('cid')));
        foreach ($data as $key => $value) {
            foreach ($value['Article'] as $k => $val) {
                //dump($data[$key]['Article'][$k]['article_content']);
                $data[$key]['Article'][$k]['article_content'] = $String->msubstr($val['article_content'], 0, 80);
            }
        }

        $this->assign('data', $data);
        $this->display();
    }

    public function connect() {


        $this->display();
    }

    public function news() {


        $this->display();
    }
    
    public function product() {


        $this->display();
    }

    
}
