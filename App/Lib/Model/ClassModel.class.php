<?php

class ClassModel extends RelationModel {

    protected $_link = array(
        'Article' => array(
            'mapping_type' => HAS_MANY,
            'mapping_name' => 'Article',
            'class_name' => 'Article',
            'foreign_key' => 'class_id',
        ),
        'Picture' => array(
            'mapping_type' => BELONGS_TO,
            'mapping_name' => 'Picture',
            'class_name' => 'Picture',
            'foreign_key' => 'picture_id',
            'as_fields' => 'picture_path,picture_thumb',
        ),
    );

    public function getList($where, $order = null, $limit = null) {
        $where['class_using'] = 1;
        $result = $this->field(true)
                ->where($where)
                ->order($order)
                ->limit($limit)
                ->select();
        //dump($this->getLastSql());
        return $result;
    }

    public function getDetail($where) {
        $result = $this->field(true)
                ->where($where)
                ->find();
        return $result;
    }

    public function getPath($args) {
        $path = $this->getDetail($args);
        $where['class_id|class_pid'] = $path['class_id'];
        $result = $this->getList($where);
        //dump($this->getLastSql());
        return $result;
    }

    public function getCrumbs($args) {
        $path = $this->getDetail($args);
        $ids = join(',', explode('-', $path['class_path'])) . ',' . $path['class_id'];
        $where = array('class_id' => array('in', $ids));
        $result = $this->getList($where);
        //dump($this->getLastSql());
        return $result;
    }

}
