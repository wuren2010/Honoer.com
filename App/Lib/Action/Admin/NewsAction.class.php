<?php

class NewsAction extends CommonAction {

    public function index() {
        $this->assign('currentNav', '内容管理 > 资讯列表');
        $article = new ArticleAction();
        $list = $article->getIndexList('News', &$page);
        $this->assign("page", $page);
        $this->assign("list", $list);
        $this->display();
    }

    public function stance() {
        $this->assign('currentNav', '内容管理 > 网站内容');
        $article = new ArticleAction();
        $list = $article->getIndexList('About', &$page);
        $this->assign("page", $page);
        $this->assign("list", $list);
        $this->display('index');
    }

    public function service() {
        $this->assign('currentNav', '内容管理 > 服务列表');
        $article = new ArticleAction();
        $list = $article->getIndexList('Service', &$page);
        $this->assign("page", $page);
        $this->assign("list", $list);
        $this->display('index');
    }

    public function category() {
        $list = D("Class")->parsePath(array('class_pid' => 0), false);
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
            $this->category();
            if (empty($info)) {
                $this->error("不存在该记录!");
            }
            $this->assign("info", $info);
            $this->display('News:add');
        }
    }

    public function del() {
        if (IS_POST) {
            echo json_encode(D('Article')->delArticle($this->_get('aid')));
        } else {
            $this->display('index');
        }
    }

}
