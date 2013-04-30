<?php

class PictureModel extends Model {

    public function getList($where, $order = null, $limit = null) {
        $where['picture_using'] = 1;
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

}