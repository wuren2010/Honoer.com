<?php

class ArticleModel extends RelationModel {

    protected $_link = array(
        'Picture' => array(
            'mapping_type' => HAS_MANY,
            'mapping_name' => 'Picture',
            'class_name' => 'Picture',
            'foreign_key' => 'picture_id',
        ),
    );

    public function getList($where, $order) {
        $result = $this->field(true)
                ->where($where)
                ->order($order)
                ->select();
        return $result;
    }

    public function getDetail($id = 0) {
        
    }

}