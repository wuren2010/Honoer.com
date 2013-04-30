<?php

class PictureModel extends Model {

    public function showPicture($path, $width, $height) {
        import('ORG.Util.Image');
        if (empty($width) && empty($height)) {
            $info = Image::getImageInfo($path);
            $width = $info['width'];
            $height = $info['height'];
        }
        $image = Image::thumb($path, '', '', $width, $height);
        Image::output($image);
    }

}