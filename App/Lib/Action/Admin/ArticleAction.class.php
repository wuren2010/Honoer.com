<?php

class ArticleAction extends CommonAction {

    public function index($name) {
        $class = D("Class")->getPath(array('class_module' => $name));
        foreach ($class as $key => $value) {
            $classIds[] = $value['class_id'];
        }
        array_shift($classIds);
        $where = array('class_id' => array('in', $classIds));
        $order = array('article_id' => 'DESC');
        $count = D("Article")->where($where)->count();

        import("ORG.Util.Page");       //载入分页类
        $page = new Page($count, C('PAGE_NUM'));
        $showPage = $page->show();
        $limit = $page->firstRow . ',' . $page->listRows;
        $list = D("Article")->relation(true)->getList($where, $order, $limit);
        $this->assign("page", $showPage);
        $this->assign("list", $list);
    }

}
