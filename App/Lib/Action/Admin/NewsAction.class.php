<?php

class NewsAction extends CommonAction {

    public function index() {
        $this->assign('currentNav', '资讯管理 > 资讯列表');
        $class = D("Class")->getPath(array('class_module' => 'News'));
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
        $Class = D("Class");
        $list = $Class->getPath(array('class_module' => 'News'));
        $this->assign("list", $list);
    }

    public function add() {
        $this->assign('currentNav', '资讯管理 > 添加编辑新闻');
        if (IS_POST) {
            $result = D("Article")->addArticle($this->_post());
            echo json_encode($result);
        } else {
            $this->category();
            $this->display();
        }
    }

    public function checkNewsTitle() {
        $M = M("News");
        $where = "title='" . $this->_get('title') . "'";
        if (!empty($_GET['id'])) {
            $where.=" And id !=" . (int) $_GET['id'];
        }
        if ($M->where($where)->count() > 0) {
            echo json_encode(array("status" => 0, "info" => "已经存在，请修改标题"));
        } else {
            echo json_encode(array("status" => 1, "info" => "可以使用"));
        }
    }

    public function edit() {
        $Article = D("Article");
        if (IS_POST) {
            $this->checkToken();
            echo json_encode(D("News")->edit());
        } else {
            $info = D("Article")->getDetail(array('article_id' => $this->_get('aid')));
            if (empty($info)) {
                $this->error("不存在该记录!");
            }
            $this->assign("info", $info);
            $this->category();
            $this->display('News:add');
        }
    }

    public function del() {
        if (M("News")->where("id=" . (int) $_GET['id'])->delete()) {
            $this->success("成功删除");
//            echo json_encode(array("status"=>1,"info"=>""));
        } else {
            $this->error("删除失败，可能是不存在该ID的记录");
        }
    }

}
