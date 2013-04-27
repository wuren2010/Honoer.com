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

    /**
     * 获取页面内容
     */
    public function getIndexData($topid, &$cid) {
        $path = $this->getPath($topid);
        $cid = $cid? : $path[0]['_child'][0]['class_id'];
        $data = D('Class')->relation(true)->getDetail(array('class_id' => $cid));
        return array('path' => $path, 'data' => $data);
    }

    public function getList($where, $order = null, $limit = null) {
        $where['class_using'] = 1;
        empty($order) && $order = array('class_id' => 'ASC');
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

    /**
     * 获取树形结构的列表
     */
    public function getPath($cid) {
        $where['class_pid'] = array('eq', $cid);
        $where['class_path'] = array('like', '0-' . $cid . '-%');
        $where['class_id'] = array('eq', $cid);
        $where['_logic'] = 'or';
        $map['_complex'] = $where;
        $data = $this->getList($map);
        return list_to_tree($data, 'class_id', 'class_pid');
    }

    /**
     * 面包屑
     */
    public function getCrumbs($path) {
        $path = '1' . strstr($path, '-');
        $ids = join(',', explode('-', $path));
        $where['class_id'] = array('in', $ids);
        $result = $this->getList($where);
        return $result;
    }

}
