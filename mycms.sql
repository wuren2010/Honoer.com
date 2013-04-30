/*
SQLyog v10.2 
MySQL - 5.5.8-log : Database - mycms.me
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`mycms.me` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `mycms.me`;

/*Table structure for table `fy_article` */

DROP TABLE IF EXISTS `fy_article`;

CREATE TABLE `fy_article` (
  `article_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `article_title` varchar(255) NOT NULL,
  `article_content` longtext NOT NULL,
  `class_id` int(11) NOT NULL,
  `article_summary` varchar(500) NOT NULL,
  `article_keywords` varchar(255) NOT NULL,
  `article_description` varchar(500) NOT NULL,
  `article_pic` varchar(255) NOT NULL,
  `article_order` int(11) NOT NULL DEFAULT '0',
  `article_hits` int(11) NOT NULL DEFAULT '0',
  `article_using` tinyint(4) NOT NULL DEFAULT '1',
  `create_time` datetime NOT NULL,
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COMMENT='文章表';

/*Data for the table `fy_article` */

insert  into `fy_article`(`article_id`,`article_title`,`article_content`,`class_id`,`article_summary`,`article_keywords`,`article_description`,`article_pic`,`article_order`,`article_hits`,`article_using`,`create_time`) values (1,'公司介绍','公司介绍<p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">深圳市典信科技有限公司成立于2009年，‘典信’寓意为信用管理的集大成者。公司自创始之初便专注于企业往来账款管理与信用管理方面的研究，并以此为基础，致力于帮助企业调整往来业务处理方法、改善企业的往来管理状态、全面提升企业的信用管理能力，进而增加企业资源利用效率、促进与上下游企业及金融机构的信息沟通、降低企业成本、提高企业利润。</span> </p><p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">通过多年深入分析研究往来账款与信用管理的实际情况，结合现有的技术手段，公司创造性地提出往来账款电子化的理论，根据这一理论，公司开发出电子往来账款管理系统。该系统面向各类企业，能够成熟、快速、全面地解决现有往来账款管理与信用管理领域中存在的诸多主要问题，为企业带来重大价值。同时，公司将通过持续的技术和理论创新、积极实践，立志成为全球首屈一指的信用环境提供商，促进信用及信息化发展，造福社会大众。</span> </p><p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">典信公司成立之初便集聚了一批在公司财务管理、金融、IT等各方面优秀人才，尤其是在往来账款电子化与信用管理方面，更是拥有行业内最顶尖的人才队伍。公司有信心有能力帮助客户实现相关业务及管理的大幅提升，并让客户感受到我们的专业热心的服务，享受管理进步与技术进步带来的巨大利益。</span> </p><p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">我们的产品，以电子化和信息化为手段，以提升客户信用管理水平为目标，通过构建强大的IT体系平台，形成标准的信息交互机制，从而实现对往来账款业务的精准管理。</span> </p><p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">从短期来看，可以很好地帮客户解决(往来账款管理)对账的问题；从长远来看，可以帮助客户建立起自己的独立的、完整的信用业务管理体系，从而为客户在多个方面带来巨大的衍生经济利益。</span> </p><p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">（利益包括：提高销售收入和利润、减少坏账损失、降低成本、提高资金周转率、减少对外部融资的依赖；减轻管理人员工作强度、提高工作效率、提升管理价值，等等。）</span> </p><p style=\"text-indent:2em;\">	<br /></p>',3,'','','','0',0,0,1,'0000-00-00 00:00:00'),(2,'企业文化','企业文化<p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">深圳市典信科技有限公司成立于2009年，‘典信’寓意为信用管理的集大成者。公司自创始之初便专注于企业往来账款管理与信用管理方面的研究，并以此为基础，致力于帮助企业调整往来业务处理方法、改善企业的往来管理状态、全面提升企业的信用管理能力，进而增加企业资源利用效率、促进与上下游企业及金融机构的信息沟通、降低企业成本、提高企业利润。</span> </p><p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">通过多年深入分析研究往来账款与信用管理的实际情况，结合现有的技术手段，公司创造性地提出往来账款电子化的理论，根据这一理论，公司开发出电子往来账款管理系统。该系统面向各类企业，能够成熟、快速、全面地解决现有往来账款管理与信用管理领域中存在的诸多主要问题，为企业带来重大价值。同时，公司将通过持续的技术和理论创新、积极实践，立志成为全球首屈一指的信用环境提供商，促进信用及信息化发展，造福社会大众。</span> </p><p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">典信公司成立之初便集聚了一批在公司财务管理、金融、IT等各方面优秀人才，尤其是在往来账款电子化与信用管理方面，更是拥有行业内最顶尖的人才队伍。公司有信心有能力帮助客户实现相关业务及管理的大幅提升，并让客户感受到我们的专业热心的服务，享受管理进步与技术进步带来的巨大利益。</span> </p><p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">我们的产品，以电子化和信息化为手段，以提升客户信用管理水平为目标，通过构建强大的IT体系平台，形成标准的信息交互机制，从而实现对往来账款业务的精准管理。</span> </p><p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">从短期来看，可以很好地帮客户解决(往来账款管理)对账的问题；从长远来看，可以帮助客户建立起自己的独立的、完整的信用业务管理体系，从而为客户在多个方面带来巨大的衍生经济利益。</span> </p><p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">（利益包括：提高销售收入和利润、减少坏账损失、降低成本、提高资金周转率、减少对外部融资的依赖；减轻管理人员工作强度、提高工作效率、提升管理价值，等等。）</span> </p><p style=\"text-indent:2em;\">	<br /></p>',4,'','','','0',0,0,1,'0000-00-00 00:00:00'),(3,'联系我们','<p>\n	一、航班到达：\n进入航站楼以后，您可参照航站楼内到达旅客的引导标识前往行李提取大厅。&nbsp;\n</p>\n<p>\n	二、检验检疫：\n请您填写健康申报单，交检验检疫部门查验。&nbsp;\n</p>\n<p>\n<pre class=\"prettyprint lang-php\">&lt;?php\n\nclass ClassModel extends RelationModel {\n\n    protected $_link = array(\n        \'Article\' =&gt; array(\n            \'mapping_type\' =&gt; HAS_MANY,\n            \'mapping_name\' =&gt; \'Article\',\n            \'class_name\' =&gt; \'Article\',\n            \'foreign_key\' =&gt; \'class_id\',\n        ),\n        \'Picture\' =&gt; array(\n            \'mapping_type\' =&gt; BELONGS_TO,\n            \'mapping_name\' =&gt; \'Picture\',\n            \'class_name\' =&gt; \'Picture\',\n            \'foreign_key\' =&gt; \'picture_id\',\n            \'as_fields\' =&gt; \'picture_path,picture_thumb\',\n        ),\n    );\n\n    /**\n     * 获取页面内容\n     */\n    public function getIndexData($topid, &amp;$cid) {\n        $path = $this-&gt;getPath($topid);\n        $cid = $cid? : $path[0][\'_child\'][0][\'class_id\'];\n        $data = D(\'Class\')-&gt;relation(true)-&gt;getDetail(array(\'class_id\' =&gt; $cid));\n        return array(\'path\' =&gt; $path, \'data\' =&gt; $data);\n    }\n\n    public function getList($where, $order = null, $limit = null) {\n        $where[\'class_using\'] = 1;\n        //empty($order) &amp;&amp; $order = array(\'class_id\' =&gt; \'ASC\');\n        empty($order) &amp;&amp; $order = array(\"CONCAT(`class_path`,\'-\',`class_id`)\" =&gt; \'ASC\');\n        $result = $this-&gt;field(true)\n                -&gt;where($where)\n                -&gt;order($order)\n                -&gt;limit($limit)\n                -&gt;select();\n        return $result;\n    }\n\n    public function getDetail($where) {\n        $result = $this-&gt;field(true)\n                -&gt;where($where)\n                -&gt;find();\n        return $result;\n    }\n\n    /**\n     * 获取树形结构的列表\n     * @param int $cid 顶级栏目的ID\n     */\n    public function getPath($cid) {\n        $data = $this-&gt;allChild($cid);\n        return list_to_tree($data, \'class_id\', \'class_pid\');\n    }\n\n    public function allChild($cid) {\n        $where[\'class_pid\'] = array(\'eq\', $cid);\n        $where[\'class_path\'] = array(\'like\', \'0-\' . $cid . \'-%\');\n        $where[\'class_id\'] = array(\'eq\', $cid);\n        $where[\'_logic\'] = \'or\';\n        $map[\'_complex\'] = $where;\n        $data = $this-&gt;getList($map);\n        return $data;\n    }\n\n    public function parsePath($args, $isTree = true) {\n        $data = array();\n        if (is_array($args)) {\n            $class = $this-&gt;getList($args);\n            if (count($class) &gt; 1) {\n                foreach ($class as $key =&gt; $value) {\n			$data[] = $this-&gt;allChild($value[\'class_id\']);\n			$merge[] = \'$data[\"\'.$key.\'\"]\';\n                }\n		eval(\'$list = array_merge(\'.implode(\',\',$merge).\');\');\n                //todo 这里需要修改 将未知个数的数组合并起来\n                //$list = array_merge($data[0], $data[1], $data[2], $data[3]);\n                return $isTree ? list_to_tree($list, \'class_id\', \'class_pid\') : $list;\n            } else {\n                return $this-&gt;parsePath($class[0][\'class_id\'], $isTree);\n            }\n        } else {\n            return $isTree ? $this-&gt;getPath($args) : $this-&gt;allChild($args);\n        }\n    }\n\n    /**\n     * 面包屑\n     */\n    public function getCrumbs($path) {\n        $path = \'1\' . strstr($path, \'-\');\n        $ids = join(\',\', explode(\'-\', $path));\n        $where[\'class_id\'] = array(\'in\', $ids);\n        $result = $this-&gt;getList($where);\n        return $result;\n    }\n\n}\n</pre>\n</p>\n<p>\n	三、边防检查：\n外国旅客入境须持有效的护照证件、入境签证，并将填好的入境登记卡连同护照证件、签证一并交边防检查站查验。\n中国旅客凭有效护照证件入境。&nbsp;\n</p>\n<p>\n	四、提取行李：\n行李提取厅位于一层，其入口处设有行李转盘显示屏，您可根据航班号查知您的托运行李所在的转盘。请在相应转盘提取行李，核对行李牌，避免行李错取。如出现行李运输不正常事故（如行李少收、破损等），请到航空公司行李查询柜台咨询。\n中转旅客（除南航澳洲航线外），尽管您的行李已挂至最终目的站，但敬请您提取行李，办理海关手续后，到中转柜台重新托运行李。（行李在广州必须办理出关手续）&nbsp;\n</p>\n<p>\n	五、海关检查：\n如果您携带有向海关申报的物品，须填写《中华人民共和国海关进出境旅客行李物品申报单》，选择“申报通道”（又称“红色通道”）通关；如果没有，无须填写《申报单》，选择“无申报通道”（又称“绿色通道”）通关。&nbsp;\n</p>\n<p>\n	六、离开机场：\n提取行李后您将通过A1安检口离开国际到达厅，在那里您可与亲友会面，或到酒店咨询柜台及问讯柜台进行咨询。可选择机场巴士或出租车离开机场。\n</p>',5,'','','','0',0,0,1,'0000-00-00 00:00:00'),(4,'企业文化','<p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">深圳市典信科技有限公司成立于2009年，‘典信’寓意为信用管理的集大成者。公司自创始之初便专注于企业往来账款管理与信用管理方面的研究，并以此为基础，致力于帮助企业调整往来业务处理方法、改善企业的往来管理状态、全面提升企业的信用管理能力，进而增加企业资源利用效率、促进与上下游企业及金融机构的信息沟通、降低企业成本、提高企业利润。</span> </p><p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">通过多年深入分析研究往来账款与信用管理的实际情况，结合现有的技术手段，公司创造性地提出往来账款电子化的理论，根据这一理论，公司开发出电子往来账款管理系统。该系统面向各类企业，能够成熟、快速、全面地解决现有往来账款管理与信用管理领域中存在的诸多主要问题，为企业带来重大价值。同时，公司将通过持续的技术和理论创新、积极实践，立志成为全球首屈一指的信用环境提供商，促进信用及信息化发展，造福社会大众。</span> </p><p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">典信公司成立之初便集聚了一批在公司财务管理、金融、IT等各方面优秀人才，尤其是在往来账款电子化与信用管理方面，更是拥有行业内最顶尖的人才队伍。公司有信心有能力帮助客户实现相关业务及管理的大幅提升，并让客户感受到我们的专业热心的服务，享受管理进步与技术进步带来的巨大利益。</span> </p><p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">我们的产品，以电子化和信息化为手段，以提升客户信用管理水平为目标，通过构建强大的IT体系平台，形成标准的信息交互机制，从而实现对往来账款业务的精准管理。</span> </p><p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">从短期来看，可以很好地帮客户解决(往来账款管理)对账的问题；从长远来看，可以帮助客户建立起自己的独立的、完整的信用业务管理体系，从而为客户在多个方面带来巨大的衍生经济利益。</span> </p><p style=\"text-indent:2em;\">	<span style=\"line-height:2;\">（利益包括：提高销售收入和利润、减少坏账损失、降低成本、提高资金周转率、减少对外部融资的依赖；减轻管理人员工作强度、提高工作效率、提升管理价值，等等。）</span> </p><p style=\"text-indent:2em;\">	<br /></p>',9,'','','','0',0,0,1,'0000-00-00 00:00:00'),(5,'手机11111','或犯人等特殊旅客，只有在符合航空公司规定的条件下经航空公司预先同意并做出安排后方予载运。传染病患者、精神病患者或健康情况可能危及自身或影响其他旅客安全的旅客，航空公司不予承运。根据国家有关规定不能乘机的旅客，航空公司有权拒绝其乘机，已购客票按自愿退票处理。\r\n',7,'','','','1',0,0,1,'0000-00-00 00:00:00'),(6,'手机22222','公司有权拒绝其乘机，已购客票按自愿退票处理。\r\n',7,'','','','2',0,0,1,'0000-00-00 00:00:00'),(7,'手机33333','乘机前，旅客及其行李必须经过安全检查。无成人陪伴儿童、病残旅客、孕妇、盲人、聋人或犯人等特殊旅客，只有在符合航空公司规定的条件下经航空公司预先同意并做出安排后方予载运。传染病患者、精神病患者或健康情况可能危及自身或影响其他旅客安全的旅客，航空公司不予承运。根据国家有关规定不能乘机的旅客，航空公司有权拒绝其乘机，已购客票按自愿退票处理。\r\n',7,'','','','3',0,0,1,'0000-00-00 00:00:00'),(8,'手机44444','伴儿童、病残旅客、孕妇、盲人、聋人或犯人等特殊旅客，只有在符合航空公司规定的条件下经航空公司预先同意并做出安排后方予载运。传染病患者、精神病患者或健康情况可能危及自身或影响其他旅客安全的旅客，航空公司不予承运。根据国家有关规定不能乘机的旅客，航空公司有权拒绝其乘机，已购客票按自愿退票处理。\r\n',7,'','','','4',0,0,1,'0000-00-00 00:00:00'),(9,'手机55555','管制刀具：指1983年经国务院批准由公安部颁发实施的《对部分刀具实行管制的暂行规定》中所列出的刀具，包括匕首、三棱刀（包括机械加工用的三棱刮 刀）、带有自锁装置的刀具和形似匕首但长度超过匕首的单刃刀、双刃刀以及其他类似的单单刃，双刃、三棱尖刀等。少数民族由于生活习惯需要佩戴、使用的藏 刀、腰刀、靴刀等属于管制刀具，只准在民族自治地方销售、使用。\r\n\r\n（四）易燃、易爆物品，包括：氢气、氧气、丁烷等瓶装压缩气体、液 化气体；黄磷、白磷、硝化纤维（含胶片）、油纸及其制品等自燃物品；金属钾、钠、锂、碳化钙（电石）、镁铝粉等遇水燃烧物品；汽油、煤油、柴油、苯、乙醇 （酒精）、\r\n',8,'','','','5',0,0,1,'0000-00-00 00:00:00'),(10,'电子往来账款管理系统','电子往来账款管理系统是由典信公司独立开发的管理应用系统，具有自主知识产权。本系统主要侧重于企业往来及相关业务，包括往来、授信、信用管理等业务，系统以其为主要管理对象和业务对象，应用全新的思路进行设计和开发，突破了传统管理软件的瓶颈. 电子往来账款管理系统是由典信公司独立开发的管理应用系统，具有自主知识产权。本系统主要侧重于企业往来及相关业务，包括往来、授信、信用管理等业务，系统以其为主要管理对象和业务对象，应用全新的思路进行设计和开发，突破了传统管理软件的瓶颈. 电子往来账款管理系统是由典信公司独立开发的管理应用系统，具有自主知识产权。本系统主要侧重于企业往来及相关业务，包括往来、授信、信用管理等业务，系统以其为主要管理对象和业务对象，应用全新的思路进行设计和开发，突破了传统管理软件的瓶颈.',18,'','','','./Public/Images/517e777f55578.jpg',0,0,1,'0000-00-00 00:00:00'),(11,'电子往来账款','电子往来账款管理系统电子往来账款管理系统电子往来账款管理系统电子往来账款管理系统电子往来账款管理系统电子往来账款管理系统电子往来账款管理系统电子往来账款管理系统',18,'','','','./Public/Images/0103040.jpg',0,0,1,'0000-00-00 00:00:00'),(12,'公司的产品系列','乘机前，旅客及其行李必须经过安全检查。无成人陪伴儿童、病残旅客、孕妇、盲人、聋人或犯人等特殊旅客，只有在符合航空公司规定的条件下经航空公司预先同意并做出安排后方予载运。传染病患者、精神病患者或健康情况可能危及自身或影响其他旅客安全的旅客，航空公司不予承运。根据国家有关规定不能乘机的旅客，航空公司有权拒绝其乘机，已购客票按自愿退票处理。\r\n',18,'','','','./Public/Images/new_show.jpg',0,0,1,'0000-00-00 00:00:00'),(15,'PHP小组的文章2','&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; KindEditor 是一套开源的在线HTML编辑器，主要用于让用户在网站上获得所见即所得编辑效果，开发人员可以用 KindEditor \n把传统的多行文本输入框(textarea)替换为可视化的富文本输入框。 KindEditor 使用 JavaScript 编写，可以无缝地与 \nJava、.NET、PHP、ASP 等程序集成，比较适合在 CMS、商城、论坛、博客、Wiki、电子邮件等互联网应用上使用。',21,'大秘密','文章','马伊咪','0',0,0,1,'0000-00-00 00:00:00'),(17,'java学习基础','java学习基础java学习基础java学习基础java学习基础java学习基础java学习基础java学习基础java学习基础java学习基础java学习基础java学习基础java学习基础',22,'java学习基础java学习基础','java学习基础','java学习基础','./Public/Images/517e76eede991.jpg',0,0,1,'2013-04-13 16:44:35'),(19,'312312','gadasdasdakdasdasdasdadsa',19,'','','','./Public/Images/517e81e21756b.jpg',0,0,1,'2013-04-29 22:21:22');

/*Table structure for table `fy_class` */

DROP TABLE IF EXISTS `fy_class`;

CREATE TABLE `fy_class` (
  `class_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `class_name` varchar(255) NOT NULL DEFAULT '',
  `class_pid` int(10) unsigned NOT NULL DEFAULT '0',
  `class_path` varchar(200) NOT NULL DEFAULT '0',
  `picture_id` int(10) unsigned NOT NULL,
  `class_order` int(10) unsigned NOT NULL DEFAULT '0',
  `class_module` varchar(200) NOT NULL DEFAULT '',
  `class_using` tinyint(3) unsigned NOT NULL DEFAULT '1',
  `create_time` datetime NOT NULL,
  PRIMARY KEY (`class_id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COMMENT='分类表';

/*Data for the table `fy_class` */

insert  into `fy_class`(`class_id`,`class_name`,`class_pid`,`class_path`,`picture_id`,`class_order`,`class_module`,`class_using`,`create_time`) values (1,'首页',0,'0',19,0,'Index',1,'0000-00-00 00:00:00'),(2,'关于我们',0,'0',5,0,'About',1,'0000-00-00 00:00:00'),(3,'公司介绍',2,'0-2',0,0,'',1,'0000-00-00 00:00:00'),(4,'企业文化',2,'0-2',0,0,'',1,'0000-00-00 00:00:00'),(5,'联系我们',2,'0-2',0,0,'',1,'0000-00-00 00:00:00'),(6,'产品分类',0,'0',2,0,'Product',0,'0000-00-00 00:00:00'),(7,'电子',6,'0-6',0,0,'',0,'0000-00-00 00:00:00'),(8,'家具',6,'0-6',0,0,'',0,'0000-00-00 00:00:00'),(9,'书籍',6,'0-6',0,0,'',0,'0000-00-00 00:00:00'),(10,'智能手机',7,'0-6-7',0,0,'',0,'0000-00-00 00:00:00'),(11,'数码相机',7,'0-6-7',0,0,'',0,'0000-00-00 00:00:00'),(12,'平板电脑',7,'0-6-7',0,0,'',0,'0000-00-00 00:00:00'),(13,'洗衣机',8,'0-6-8',0,0,'',0,'0000-00-00 00:00:00'),(14,'电冰箱',8,'0-6-8',0,0,'',0,'0000-00-00 00:00:00'),(15,'Iphone 4S',10,'0-6-7-10',0,0,'',0,'0000-00-00 00:00:00'),(16,'产品·服务',0,'0',1,0,'Service',1,'0000-00-00 00:00:00'),(18,'公司产品',16,'0-16',0,0,'',1,'0000-00-00 00:00:00'),(19,'服务支持',16,'0-16',0,0,'',1,'0000-00-00 00:00:00'),(20,'公司动态',0,'0',21,0,'News',1,'0000-00-00 00:00:00'),(21,'PHP小组',20,'0-20',0,0,'',1,'0000-00-00 00:00:00'),(22,'JAVA小组',20,'0-20',0,0,'',1,'0000-00-00 00:00:00');

/*Table structure for table `fy_config` */

DROP TABLE IF EXISTS `fy_config`;

CREATE TABLE `fy_config` (
  `config_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `config_name` varchar(200) NOT NULL,
  `config_value` varchar(500) NOT NULL,
  `config_using` tinyint(1) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`config_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `fy_config` */

insert  into `fy_config`(`config_id`,`config_name`,`config_value`,`config_using`) values (1,'web_logo','./Public/Images/logo.png',1),(2,'web_name','深圳市典信科技有限公司',1),(3,'record_no','粤ICP备:11086626号-2 ',1),(4,'conpany_address','深圳市宝安区2区龙井二路62号6楼 ',1),(5,'conpany_email','jeffyli@basicredit.com',1),(6,'ebs_info','<script src=\"http://www.ebs.gov.cn/Validate/IconProcess.aspx?domainid=3B7FF64E-F875-4EE4-9F34-998E6500A901&show=pic&width=140&height=50\" type=\"text/javascript\"></script>',0),(7,'conpany_weibo','http://weibo.com',0);

/*Table structure for table `fy_picture` */

DROP TABLE IF EXISTS `fy_picture`;

CREATE TABLE `fy_picture` (
  `picture_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `picture_name` varchar(255) NOT NULL DEFAULT '',
  `picture_thumb` varchar(255) NOT NULL DEFAULT '',
  `picture_path` varchar(1000) NOT NULL DEFAULT '',
  `picture_purpose` int(11) NOT NULL,
  `picture_using` tinyint(3) unsigned NOT NULL DEFAULT '1',
  `create_time` datetime NOT NULL,
  PRIMARY KEY (`picture_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COMMENT='图片表';

/*Data for the table `fy_picture` */

insert  into `fy_picture`(`picture_id`,`picture_name`,`picture_thumb`,`picture_path`,`picture_purpose`,`picture_using`,`create_time`) values (1,'','./Public/Images/1.jpg','./Public/Images/1.jpg',1,1,'0000-00-00 00:00:00'),(2,'','./Public/Images/2.jpg','./Public/Images/2.jpg',1,1,'0000-00-00 00:00:00'),(3,'','./Public/Images/3.jpg','./Public/Images/3.jpg',1,1,'0000-00-00 00:00:00'),(4,'','./Public/Images/4.jpg','./Public/Images/4.jpg',1,1,'0000-00-00 00:00:00'),(5,'','./Public/Images/5.jpg','./Public/Images/5.jpg',1,1,'0000-00-00 00:00:00'),(6,'','./Public/Images/5.jpg','./Public/Images/5.jpg',2,1,'0000-00-00 00:00:00'),(7,'','./Public/Images/3.jpg','./Public/Images/3.jpg',5,1,'0000-00-00 00:00:00'),(8,'','./Public/Images/2.jpg','./Public/Images/2.jpg',6,1,'0000-00-00 00:00:00'),(9,'','./Public/Images/4.jpg','./Public/Images/4.jpg',16,1,'0000-00-00 00:00:00'),(10,'5172acc8f3276.jpg','./Public/Uploads/_thumb5172acc8f3276.jpg','./Public/Uploads/5172acc8f3276.jpg',0,1,'2013-04-20 22:57:13'),(11,'5172ae41f3b2e.jpg','./Public/Uploads/thumb_5172ae41f3b2e.jpg','./Public/Uploads/5172ae41f3b2e.jpg',0,1,'2013-04-20 23:03:30'),(12,'5172aec3ef738.jpg','./Public/Uploads/thumb_5172aec3ef738.jpg','./Public/Uploads/5172aec3ef738.jpg',0,1,'2013-04-20 23:05:40'),(13,'5172aef173db9.jpg','./Public/Uploads/thumb_5172aef173db9.jpg','./Public/Uploads/5172aef173db9.jpg',0,1,'2013-04-20 23:06:25'),(14,'5172aef2d4096.jpg','./Public/Uploads/thumb_5172aef2d4096.jpg','./Public/Uploads/5172aef2d4096.jpg',0,1,'2013-04-20 23:06:27'),(15,'5172aef3e2314.jpg','./Public/Uploads/thumb_5172aef3e2314.jpg','./Public/Uploads/5172aef3e2314.jpg',0,1,'2013-04-20 23:06:28'),(16,'5172aef50ff13.jpg','./Public/Uploads/thumb_5172aef50ff13.jpg','./Public/Uploads/5172aef50ff13.jpg',0,1,'2013-04-20 23:06:29'),(17,'5172aef95becd.jpg','./Public/Uploads/thumb_5172aef95becd.jpg','./Public/Uploads/5172aef95becd.jpg',0,1,'2013-04-20 23:06:33'),(18,'5172af5b7644a.jpg','./Public/Uploads/thumb_5172af5b7644a.jpg','./Public/Uploads/5172af5b7644a.jpg',0,1,'2013-04-20 23:08:11'),(19,'5172af971c7c3.jpg','./Public/Uploads/thumb_5172af971c7c3.jpg','./Public/Uploads/5172af971c7c3.jpg',0,1,'2013-04-20 23:09:11'),(20,'5172b0c647283.jpg','./Public/Uploads/thumb_5172b0c647283.jpg','./Public/Uploads/5172b0c647283.jpg',0,1,'2013-04-20 23:14:14'),(21,'5172b10332694.jpg','./Public/Uploads/thumb_5172b10332694.jpg','./Public/Uploads/5172b10332694.jpg',0,1,'2013-04-20 23:15:15');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
