<?php

class ProductAction extends CommonAction {

    public function index() {
        $this->assign('currentNav', '产品管理 > 产品列表');
        $class = D("Class")->getPath(array('class_module' => MODULE_NAME));
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
        $this->display();
    }

    public function category() {
        $list = D("Class")->getPath(array('class_module' => MODULE_NAME));
        $this->assign("list", $list);
    }

    public function add() {
        $this->assign('currentNav', '产品管理 > 添加产品');
        if (IS_POST) {
            $result = D("Article")->addArticle($this->_post());
            echo json_encode($result);
        } else {
            $this->category();
            $this->display();
        }
    }

    public function edit() {
        $this->assign('currentNav', '产品管理 > 编辑产品');
        if (IS_POST) {
            echo json_encode(D("Article")->editArticle($this->_post()));
        } else {
            $info = D("Article")->getDetail(array('article_id' => $this->_get('aid')));
            if (empty($info)) {
                $this->error("不存在该记录!");
            }
            $this->assign("info", $info);
            $this->display('Product:add');
        }
    }

    public function del($aid) {
        $where = array('article_id' => (int) $this->_get('aid'));
        if (M("Article")->where($where)->delete()) {
            echo json_encode(array("status" => 1, "info" => "删除成功！"));
            $this->success('删除成功！');
        } else {
            echo json_encode(array("status" => 0, "info" => "删除失败，可能是不存在该ID的记录！"));
        }
    }
}
