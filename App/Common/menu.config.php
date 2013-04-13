<?php

return array(
    'admin_big_menu' => array(
        'Index' => '首页',
        'Member' => '用户管理',
        'Class' => '分类管理',
        'News' => '资讯管理',
        'Product' => '产品管理',
        'Webinfo' => '系统设置',
        'Sysdata' => '数据管理',
        'Access' => '权限管理',
    ),
    'admin_sub_menu' => array(
        'Common' => array(
            'Index/personal' => '修改密码',
            'Index/cache' => '缓存清理',
            'News/add' => '新闻发布'
        ),
        'Webinfo' => array(
            'index' => '站点配置',
            'setEmailConfig' => '邮箱配置',
            'setSafeConfig' => '安全配置'
        ),
        'Member' => array(
            'index' => '注册用户列表',
        ),
        'Class' => array(
            'index' => '分类列表',
        ),
        'News' => array(
            'index' => '新闻列表',
            'category' => '新闻分类管理',
            'add' => '发布新闻',
        ),
        'Product' => array(
            'index' => '产品列表',
            'category' => '分类管理',
            'add' => '添加产品',
        ),
        'Sysdata' => array(
            'index' => '数据库备份',
            'restore' => '数据库导入',
            'zipList' => '数据库压缩包',
            'repair' => '数据库优化修复'
        ),
        'Access' => array(
            'index' => '后台用户',
            'nodeList' => '节点管理',
            'roleList' => '角色管理',
            'addAdmin' => '添加管理员',
            'addNode' => '添加节点',
            'addRole' => '添加角色',
        ),
    ),
);
?>