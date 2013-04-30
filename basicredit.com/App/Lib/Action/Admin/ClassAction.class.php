<?php

class ClassAction extends CommonAction {

    private $modules = array('News', 'Product', 'Service');

    public function index() {
        $this->assign('currentNav', '分类管理 > 分类列表');
        $list = D('Class')->getList($where, array("CONCAT(`class_path`,'-',`class_id`)" => 'ASC'));
        $this->assign("list", $list);
        $this->display();
    }

    public function add() {
        if (IS_POST) {
            $data = array(
                'class_name' => $this->_post('class_name'),
                'class_pid' => $this->_post('class_id'),
                'class_path' => $this->_post('class_path') . '-' . $this->_post('class_id'),
                'create_time' => date('Y-m-d H:i:s', time()),
            );
            if (M('Class')->add($data)) {
                echo json_encode(array('status' => 1, 'info' => '添加成功！', 'url' => U('index')));
            } else {
                echo json_encode(array('status' => 0, 'info' => '添加失败！'));
            }
        }
    }

    public function edit() {
        if (IS_POST) {
            $data = array('class_name' => $this->_post('class_name'));
            $where = array('class_id' => $this->_post('class_id'));
            if (M('Class')->where($where)->setField($data)) {
                echo json_encode(array('status' => 1, 'info' => '修改成功！'));
            } else {
                echo json_encode(array('status' => 0, 'info' => '修改失败！'));
            }
        }
    }

    public function del() {
        if (IS_POST) {
            $data = array('class_using' => 0);
            $where = array('class_id' => $this->_post('class_id'));
            if (M('Class')->where($where)->delete($data)) {
                echo json_encode(array('status' => 1, 'info' => '删除成功！'));
            } else {
                echo json_encode(array('status' => 0, 'info' => '删除失败！'));
            }
        }
    }

}
