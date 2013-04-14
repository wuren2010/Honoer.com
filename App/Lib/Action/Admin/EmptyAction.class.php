<?php

class EmptyAction extends Action {

    //模块错误
    public function _empty() {
        echo '找不到模块';
        $this->notfound();
    }

    public function index() {
        echo '找不到操作';
        $this->notfound();
    }

    public function notfound() {
        $this->display('Empty:notfound');
    }

}