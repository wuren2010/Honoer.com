<?php

class IndexAction extends PublicAction {

    public function index() {
        parent::banner();
        $this->display();
    }

}
