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
            'as_fields' => 'class_name',
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
        if ($this->create($data)) {
            if ($this->add()) {
                return array('status' => 1, 'info' => '发布成功!文章ID：' . $this->getLastInsID(), 'url' => U('News/index'));
            } else {
                return array('status' => 0, 'info' => "发布失败，请刷新页面尝试操作");
            }
        }
    }

}