<?php

class ArticleAction extends CommonAction {

    public function getIndexList($name, $page) {
        $module = D('Class')->getDetail(array('class_module' => $name));
        $class = D("Class")->getPath($module['class_id']);
        foreach ($class[0]['_child'] as $value) {
            $classIds[] = $value['class_id'];
        }
        $where = array('class_id' => array('in', $classIds));
        $order = array('article_id' => 'DESC');
        $count = D("Article")->where($where)->count();

        import("ORG.Util.Page");       //载入分页类
        $Pages = new Page($count, C('PAGE_NUM'));
        $page = $Pages->show();
        $limit = $Pages->firstRow . ',' . $Pages->listRows;
        $list = D("Article")->relation(true)->getList($where, $order, $limit);
        return $list;
    }

}
