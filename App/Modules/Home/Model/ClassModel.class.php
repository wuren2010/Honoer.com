<?php

class ClassModel extends RelationModel {

    protected $_link = array(
        'Article' => array(
            'mapping_type' => HAS_MANY,
            'mapping_name' => 'Article',
            'class_name' => 'Article',
            'foreign_key' => 'class_id',
        ),
    );

    public function getList($where, $order) {
        $result = $this->field(true)
                ->where($where)
                ->order($order)
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
        $where['class_path'] = array('like', "%{$path['class_pid']}-{$path['class_id']}%");
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
