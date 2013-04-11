<?php

class ServiceAction extends PublicAction {

    public function index() {
        import('ORG.Util.String');
        $String = new String();
        $service = D('Class')->getDetail(array('class_module' => MODULE_NAME));
        $data = D('Class')->relation(true)->getList(array('class_pid'=>$service['class_id']));
        foreach ($data as $key => $value) {
            foreach ($value['Article'] as $k => $val) {
                //dump($data[$key]['Article'][$k]['article_content']);
                $data[$key]['Article'][$k]['article_content'] = $String->msubstr($val['article_content'], 0, 80);
            }
        }
        $this->assign('data', $data);
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