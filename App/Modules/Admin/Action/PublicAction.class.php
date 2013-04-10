<?php

class PublicAction extends Action {

    public $loginMarked;

    public function _initialize() {
        header("Content-Type:text/html; charset=utf-8");
        header('Content-Type:application/json; charset=utf-8');
        echo COMMON_PATH;
    }

    public function header(){
        
    }

}