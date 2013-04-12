<?php

class SysdataAction extends CommonAction {

    public function index() {
        $this->assign('currentNav', '数据管理 > 数据库表信息');
        $Model = new Model();
        $tables = $Model->query('SHOW TABLE STATUS');
        $total = 0;
        foreach ($tables as $key => $value) {
            $tables[$key]['size'] = $value['Data_length'] + $value['Index_length'];
            $total+=$value['Data_length'] + $value['Index_length'];
        }
        $this->assign("list", $tables);
        $this->assign("total", $total);
        $this->assign("tables", count($tables));
        $this->display();
    }

}
