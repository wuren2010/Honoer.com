<?php

class EmptyAction extends Action {

    public function _empty() {
        echo '404->没有操作';
    }

    public function index() {
        echo '404->没有模块';
    }

}