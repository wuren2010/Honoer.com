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

    public function getPath($cid) {
        $path = $this->getDetail(array('class_id' => $cid));
        $where['class_path'] = array('like', "%{$path['class_pid']}-{$path['class_id']}%");
        $result = $this->getList($where);
        return $result;
    }

    public function getCrumbs($cid) {
        $path = $this->getDetail(array('class_id' => $cid));
        $ids = join(',', explode('-', $path['class_path'])) . ',' . $cid;
        $where = array('class_id' => array('in', $ids));
        $result = $this->getList($where);
        return $result;
    }

}
