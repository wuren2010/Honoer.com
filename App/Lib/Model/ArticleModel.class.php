<?php

class ArticleModel extends RelationModel {

    protected $_link = array(
        'Picture' => array(
            'mapping_type' => HAS_MANY,
            'mapping_name' => 'Picture',
            'class_name' => 'Picture',
            'foreign_key' => 'picture_id',
        ),
        'Class' => array(
            'mapping_type' => BELONGS_TO,
            'mapping_name' => 'Class',
            'class_name' => 'Class',
            'foreign_key' => 'class_id',
            'as_fields' => 'class_name,class_path',
        ),
    );

    public function getList($where, $order = null, $limit = null) {
        $result = $this->field(true)
                ->where($where)
                ->order($order)
                ->limit($limit)
                ->select();
        return $result;
    }

    public function getDetail($where) {
        $result = $this->field(true)
                ->where($where)
                ->find();
        return $result;
    }

    public function addArticle($data) {
        $data['create_time'] = date('Y-m-d H:i:s', time());
        if (empty($data['class_id'])) {
            return array('status' => 0, 'info' => '没有所属分类');
        }
        $picture = $this->uploadFiles();
        $data['article_pic'] = $picture['savepath'] . $picture['savename'];
        if ($this->create($data)) {
            if ($this->add()) {
                return array('status' => 1, 'info' => '发布成功!文章ID：' . $this->getLastInsID(), 'url' => U('index'));
            } else {
                return array('status' => 0, 'info' => "发布失败，请刷新页面尝试操作");
            }
        }
    }

    public function editArticle($data) {
        $picture = $this->uploadFiles();
        $data['article_pic'] = $picture['savepath'] . $picture['savename'];
        if ($this->create($data)) {
            if ($this->save()) {
                return array('status' => 1, 'info' => '修改成功!', 'url' => U('index'));
            } else {
                return array('status' => 0, 'info' => "修改失败，请刷新页面尝试操作");
            }
        }
    }

    public function checkTitle($title, $cid) {
        $where['article_title'] = $title;
        if (!empty($cid)) {
            $where['article_id'] = array('neq', $cid);
        }
        if (M("Article")->where($where)->count() > 0) {
            return json_encode(array("status" => 0, "info" => "标题已存在"));
        } else {
            return json_encode(array("status" => 1, "info" => "可以使用"));
        }
    }

    public function delArticle($aid) {
        $where = array('article_id' => (int) $aid);
        if ($this->where($where)->delete()) {
            return array("status" => 1, "info" => "删除成功！", 'url' => U('index'));
        } else {
            return array("status" => 0, "info" => "删除失败，可能是不存在该ID的记录！", 'url' => U('index'));
        }
    }

    public function uploadFiles() {
        if (!empty($_FILES)) {
            $upload = new UploadAction();
            $data = $upload->uploadFiles();
            return $data;
        }
    }

}