<?php

class NewsAction extends PublicAction {

    public function index() {
        $About = new AboutAction();
        $About->index();
    }

    public function read() {
        $About = new AboutAction();
        $About->read();
    }

}
