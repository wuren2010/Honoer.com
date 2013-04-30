<?php

class PictureAction extends CommonAction {

    public function index() {
        $this->assign('currentNav', '图片管理 > 栏目图片');
        $list = D("Class")->relation(true)->getList(array('class_pid' => 0));
        $this->assign("list", $list);
        $this->display();
    }

    public function category() {
        $list = D("Class")->getPath(array('class_module' => MODULE_NAME));
        $this->assign("list", $list);
    }

    public function add() {
        $this->assign('currentNav', '图片管理 > 添加图片');
        if (IS_POST) {
            $class_id = $this->_post('class_id');
            import('ORG.Net.UploadFile');
            $upload = new UploadFile(); // 实例化上传类
            $upload->maxSize = 3145728; // 设置附件上传大小
            $upload->allowExts = array('jpg', 'gif', 'png', 'jpeg'); // 设置附件上传类型
            $upload->savePath = './Public/Uploads/'; // 设置附件上传目录
            $upload->thumb = true;
            $upload->thumbMaxWidth = '50,200';
            $upload->thumbMaxHeight = '50,200';
            if (!$upload->upload()) {// 上传错误提示错误信息
                echo json_encode(array('status' => 0, 'info' => $upload->getErrorMsg()));
            } else {// 上传成功 获取上传文件信息
                $info = $upload->getUploadFileInfo();
            }
            $data = array(
                'picture_name' => $info[0]['savename'],
                'picture_thumb' => $info[0]['savepath'] . 'thumb_' . $info[0]['savename'],
                'picture_path' => $info[0]['savepath'] . $info[0]['savename'],
                'create_time' => date('Y-m-d H:i:s', time()),
            );
            M('Picture')->create($data);
            if ($picture_id = M('Picture')->add()) {
                M('Class')->where(array('class_id' => $class_id))->setField(array('picture_id' => $picture_id));
                dump(M('Class')->getLastSql());
                echo json_encode(array('status' => 1, 'info' => '上传成功！'));
            }
            echo json_encode(array('status' => 0, 'info' => '上传失败！'));
        } else {
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
