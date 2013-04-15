<?php

class UploadAction extends Action {

    public function upload_json() {
        import("@.ORG.Util.Upload");
        $upload = new Upload();
        $upload->save_path = './Public/Uploads/';
        $upload->save_url = './Public/Uploads/';
        return $upload->upload_json();
    }

    public function file_manager_json() {
        import("@.ORG.Util.Upload");
        $upload = new Upload();
        $upload->save_path = './Public/Uploads/';
        $upload->save_url = './Public/Uploads/';
        return $upload->file_manager_json();
    }

}

?>
