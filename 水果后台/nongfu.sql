/*
Navicat MySQL Data Transfer

Source Server         : tan
Source Server Version : 50549
Source Host           : localhost:3306
Source Database       : nongfu

Target Server Type    : MYSQL
Target Server Version : 50549
File Encoding         : 65001

Date: 2020-10-30 15:58:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `address`
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `address_id` int(7) NOT NULL AUTO_INCREMENT,
  `address_text` char(30) NOT NULL,
  `address_default` tinyint(1) NOT NULL DEFAULT '0',
  `user_id` int(7) NOT NULL,
  `address_name` char(10) NOT NULL,
  `address_phone` char(20) NOT NULL,
  `address_isdel` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`address_id`),
  KEY `add_user` (`user_id`),
  CONSTRAINT `add_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES ('2', '长沙市', '0', '2', '谭炜', '1232323141', '0');
INSERT INTO `address` VALUES ('3', 'eeee', '0', '1', '11', '23231241412', '0');
INSERT INTO `address` VALUES ('4', '长沙市', '0', '2', '谭炜', '1232323141', '0');
INSERT INTO `address` VALUES ('5', '${dizhi}', '0', '1', '${name}', '${number}', '0');
INSERT INTO `address` VALUES ('6', '长沙市', '0', '2', '谭炜', '1232323141', '0');
INSERT INTO `address` VALUES ('8', '长沙市', '0', '19', '谭炜', '1232323141', '0');
INSERT INTO `address` VALUES ('9', '长沙市', '0', '2', '谭炜', '1232323141', '0');
INSERT INTO `address` VALUES ('11', '长沙市', '0', '13', '谭炜', '1232323141', '0');
INSERT INTO `address` VALUES ('13', '长沙市', '1', '20', '谭炜', '1232323141', '0');
INSERT INTO `address` VALUES ('14', '长沙市', '1', '2', '谭炜', '1232323141', '0');

-- ----------------------------
-- Table structure for `appraisegoods`
-- ----------------------------
DROP TABLE IF EXISTS `appraisegoods`;
CREATE TABLE `appraisegoods` (
  `appraise_id` int(7) NOT NULL AUTO_INCREMENT,
  `appraise_text` text NOT NULL,
  `fruit_id` int(7) NOT NULL,
  `shop_id` int(7) NOT NULL,
  `user_id` int(7) NOT NULL,
  `appraise_time` datetime NOT NULL,
  `appraise_number` tinyint(1) NOT NULL,
  PRIMARY KEY (`appraise_id`),
  KEY `app_fruit` (`fruit_id`),
  KEY `app_shop` (`shop_id`),
  KEY `app_user` (`user_id`),
  CONSTRAINT `app_fruit` FOREIGN KEY (`fruit_id`) REFERENCES `fruitgoods` (`fruit_id`),
  CONSTRAINT `app_shop` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`shop_id`),
  CONSTRAINT `app_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appraisegoods
-- ----------------------------
INSERT INTO `appraisegoods` VALUES ('4', '11', '3', '1', '2', '2020-08-13 17:33:08', '0');
INSERT INTO `appraisegoods` VALUES ('5', '要不是看谭某人帅就不给5星好评了', '3', '1', '2', '2020-08-13 18:10:31', '5');
INSERT INTO `appraisegoods` VALUES ('6', '要不是看谭某人帅怎么可能5星好评', '3', '1', '2', '2020-08-13 18:12:18', '5');

-- ----------------------------
-- Table structure for `choice_fruit`
-- ----------------------------
DROP TABLE IF EXISTS `choice_fruit`;
CREATE TABLE `choice_fruit` (
  `Choice_id` int(7) NOT NULL AUTO_INCREMENT,
  `fruit_id` int(7) NOT NULL,
  PRIMARY KEY (`Choice_id`),
  KEY `fruit_id` (`fruit_id`),
  CONSTRAINT `choice_fruit_ibfk_1` FOREIGN KEY (`fruit_id`) REFERENCES `fruitgoods` (`fruit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of choice_fruit
-- ----------------------------
INSERT INTO `choice_fruit` VALUES ('1', '2');
INSERT INTO `choice_fruit` VALUES ('3', '19');
INSERT INTO `choice_fruit` VALUES ('4', '24');
INSERT INTO `choice_fruit` VALUES ('2', '29');

-- ----------------------------
-- Table structure for `cut_fruit`
-- ----------------------------
DROP TABLE IF EXISTS `cut_fruit`;
CREATE TABLE `cut_fruit` (
  `cut_id` int(7) NOT NULL AUTO_INCREMENT,
  `fruit_id` int(7) NOT NULL,
  PRIMARY KEY (`cut_id`),
  KEY `fruit_id` (`fruit_id`),
  CONSTRAINT `cut_fruit_ibfk_1` FOREIGN KEY (`fruit_id`) REFERENCES `fruitgoods` (`fruit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cut_fruit
-- ----------------------------
INSERT INTO `cut_fruit` VALUES ('1', '4');
INSERT INTO `cut_fruit` VALUES ('3', '5');
INSERT INTO `cut_fruit` VALUES ('4', '6');
INSERT INTO `cut_fruit` VALUES ('5', '7');
INSERT INTO `cut_fruit` VALUES ('6', '8');
INSERT INTO `cut_fruit` VALUES ('7', '9');
INSERT INTO `cut_fruit` VALUES ('8', '10');
INSERT INTO `cut_fruit` VALUES ('9', '11');
INSERT INTO `cut_fruit` VALUES ('10', '12');
INSERT INTO `cut_fruit` VALUES ('11', '13');
INSERT INTO `cut_fruit` VALUES ('2', '23');

-- ----------------------------
-- Table structure for `detailedorder`
-- ----------------------------
DROP TABLE IF EXISTS `detailedorder`;
CREATE TABLE `detailedorder` (
  `deOrder_id` int(7) NOT NULL AUTO_INCREMENT,
  `deOrder_count` smallint(4) NOT NULL,
  `fruit_id` int(7) NOT NULL,
  `order_id` int(7) NOT NULL,
  PRIMARY KEY (`deOrder_id`),
  KEY `detO_fr` (`fruit_id`),
  KEY `detO_or` (`order_id`),
  CONSTRAINT `detO_fr` FOREIGN KEY (`fruit_id`) REFERENCES `fruitgoods` (`fruit_id`),
  CONSTRAINT `detO_or` FOREIGN KEY (`order_id`) REFERENCES `userorder` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of detailedorder
-- ----------------------------
INSERT INTO `detailedorder` VALUES ('1', '11', '1', '1');
INSERT INTO `detailedorder` VALUES ('2', '11', '2', '1');
INSERT INTO `detailedorder` VALUES ('4', '2', '2', '3');
INSERT INTO `detailedorder` VALUES ('5', '222', '2', '5');
INSERT INTO `detailedorder` VALUES ('6', '2', '3', '6');
INSERT INTO `detailedorder` VALUES ('7', '1', '2', '6');
INSERT INTO `detailedorder` VALUES ('8', '8', '3', '7');
INSERT INTO `detailedorder` VALUES ('9', '1', '3', '8');
INSERT INTO `detailedorder` VALUES ('10', '1', '3', '9');
INSERT INTO `detailedorder` VALUES ('11', '1', '3', '10');
INSERT INTO `detailedorder` VALUES ('12', '2', '3', '11');
INSERT INTO `detailedorder` VALUES ('13', '11', '1', '13');
INSERT INTO `detailedorder` VALUES ('14', '1', '14', '15');
INSERT INTO `detailedorder` VALUES ('15', '1', '5', '16');
INSERT INTO `detailedorder` VALUES ('16', '1', '5', '25');
INSERT INTO `detailedorder` VALUES ('17', '1', '5', '26');
INSERT INTO `detailedorder` VALUES ('18', '1', '5', '27');
INSERT INTO `detailedorder` VALUES ('19', '1', '5', '28');
INSERT INTO `detailedorder` VALUES ('20', '1', '5', '29');
INSERT INTO `detailedorder` VALUES ('21', '1', '1', '30');
INSERT INTO `detailedorder` VALUES ('22', '1', '1', '31');
INSERT INTO `detailedorder` VALUES ('23', '1', '1', '32');
INSERT INTO `detailedorder` VALUES ('24', '1', '1', '47');

-- ----------------------------
-- Table structure for `domestic_fruit`
-- ----------------------------
DROP TABLE IF EXISTS `domestic_fruit`;
CREATE TABLE `domestic_fruit` (
  `domestic_id` int(7) NOT NULL AUTO_INCREMENT,
  `fruit_id` int(7) NOT NULL,
  PRIMARY KEY (`domestic_id`),
  KEY `fruit_id` (`fruit_id`),
  CONSTRAINT `domestic_fruit_ibfk_1` FOREIGN KEY (`fruit_id`) REFERENCES `fruitgoods` (`fruit_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of domestic_fruit
-- ----------------------------

-- ----------------------------
-- Table structure for `drink_fruit`
-- ----------------------------
DROP TABLE IF EXISTS `drink_fruit`;
CREATE TABLE `drink_fruit` (
  `drink_id` int(7) NOT NULL AUTO_INCREMENT,
  `fruit_id` int(7) NOT NULL,
  PRIMARY KEY (`drink_id`),
  KEY `fruit_id` (`fruit_id`),
  CONSTRAINT `drink_fruit_ibfk_1` FOREIGN KEY (`fruit_id`) REFERENCES `fruitgoods` (`fruit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of drink_fruit
-- ----------------------------
INSERT INTO `drink_fruit` VALUES ('1', '30');

-- ----------------------------
-- Table structure for `food_fruit`
-- ----------------------------
DROP TABLE IF EXISTS `food_fruit`;
CREATE TABLE `food_fruit` (
  `food_id` int(7) NOT NULL AUTO_INCREMENT,
  `fruit_id` int(7) NOT NULL,
  PRIMARY KEY (`food_id`),
  KEY `fruit_id` (`fruit_id`),
  CONSTRAINT `food_fruit_ibfk_1` FOREIGN KEY (`fruit_id`) REFERENCES `fruitgoods` (`fruit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of food_fruit
-- ----------------------------
INSERT INTO `food_fruit` VALUES ('3', '10');
INSERT INTO `food_fruit` VALUES ('2', '22');
INSERT INTO `food_fruit` VALUES ('1', '25');

-- ----------------------------
-- Table structure for `fruitgoods`
-- ----------------------------
DROP TABLE IF EXISTS `fruitgoods`;
CREATE TABLE `fruitgoods` (
  `fruit_id` int(7) NOT NULL AUTO_INCREMENT,
  `fruit_name` char(10) NOT NULL,
  `fruit_text` text NOT NULL,
  `fruit_Images_count` tinyint(1) NOT NULL,
  `fruit_images_url` char(15) NOT NULL,
  `fruit_invented_price` double(5,1) NOT NULL,
  `fruit_price` double(5,1) NOT NULL,
  `fruit_is_time` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`fruit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fruitgoods
-- ----------------------------
INSERT INTO `fruitgoods` VALUES ('1', '冬枣', '这个枣它又大啊又圆', '4', '/冬枣.jpg', '12.4', '13.5', '1');
INSERT INTO `fruitgoods` VALUES ('2', '哈密瓜', '这个瓜真的好吃哦', '1', '/哈密瓜.jpg', '15.2', '11.1', '0');
INSERT INTO `fruitgoods` VALUES ('3', '山竹', '这个山竹好吃死人', '2', '/山竹.jpg', '13.1', '9.9', '0');
INSERT INTO `fruitgoods` VALUES ('4', '拼盘产品1', '这个拼盘真的强', '1', '/拼盘1.jpg', '9.9', '2.1', '1');
INSERT INTO `fruitgoods` VALUES ('5', '拼盘产品2', '这个拼盘第二好吃', '1', '/拼盘2.jpg', '4.1', '2.1', '0');
INSERT INTO `fruitgoods` VALUES ('6', '拼盘产品3', '这个拼盘第三好吃', '1', '/拼盘3.jpg', '8.1', '9.1', '0');
INSERT INTO `fruitgoods` VALUES ('7', '拼盘产品4', '这个拼盘第四好吃', '1', '/拼盘4.jpg', '8.1', '5.1', '0');
INSERT INTO `fruitgoods` VALUES ('8', '拼盘产品5', '这个拼盘第五好吃', '1', '/拼盘5.jpg', '6.1', '4.1', '0');
INSERT INTO `fruitgoods` VALUES ('9', '拼盘产品6', '这个拼盘第', '1', '/拼盘6.jpg', '23.1', '14.1', '0');
INSERT INTO `fruitgoods` VALUES ('10', '拼盘产品7', '这个拼盘第', '1', '/拼盘7.jpg', '34.1', '21.1', '0');
INSERT INTO `fruitgoods` VALUES ('11', '拼盘产品8', 'xx', '1', '/拼盘8.jpg', '43.1', '22.1', '0');
INSERT INTO `fruitgoods` VALUES ('12', '拼盘产品9', 'xxx', '1', '/拼盘9.jpg', '32.1', '22.2', '0');
INSERT INTO `fruitgoods` VALUES ('13', '拼盘产品10', 'xxxx', '1', '/拼盘10.jpg', '34.1', '12.1', '0');
INSERT INTO `fruitgoods` VALUES ('14', '柚子', 'xxx', '6', '/柚子.jpg', '18.1', '21.0', '0');
INSERT INTO `fruitgoods` VALUES ('15', '柠檬', 'xxx', '1', '/柠檬.jpg', '3.1', '2.9', '0');
INSERT INTO `fruitgoods` VALUES ('16', '树莓', 'xxxx', '1', '/树莓.jpg', '9.1', '8.2', '0');
INSERT INTO `fruitgoods` VALUES ('17', '梨', 'xxxx', '3', '/梨.jpg', '5.1', '4.2', '0');
INSERT INTO `fruitgoods` VALUES ('18', '椰子', 'xxx', '3', '/椰子.jpg', '11.1', '4.4', '1');
INSERT INTO `fruitgoods` VALUES ('19', '榴莲', 'xxxx', '1', '/榴莲.jpg', '33.1', '28.9', '0');
INSERT INTO `fruitgoods` VALUES ('20', '樱桃', 'xxxx', '1', '/樱桃.jpg', '42.1', '32.7', '0');
INSERT INTO `fruitgoods` VALUES ('21', '橘子', 'xxxxx', '1', '/橘子.jpg', '32.1', '7.5', '0');
INSERT INTO `fruitgoods` VALUES ('22', '橙子', 'xxxx', '1', '/橙子.jpg', '23.2', '21.1', '0');
INSERT INTO `fruitgoods` VALUES ('23', '水蜜桃', 'xxxxxx', '4', '/水蜜桃.jpg', '15.8', '11.9', '0');
INSERT INTO `fruitgoods` VALUES ('24', '菠萝蜜', 'xxxxx', '1', '/菠萝蜜.jpg', '13.1', '8.2', '0');
INSERT INTO `fruitgoods` VALUES ('25', '牛油果', 'xxxxx', '1', '/牛油果.jpg', '12.3', '8.3', '0');
INSERT INTO `fruitgoods` VALUES ('26', '猕猴桃', 'xxxxx', '1', '/猕猴桃.jpg', '7.2', '5.3', '0');
INSERT INTO `fruitgoods` VALUES ('27', '红心火龙果', 'xxxx', '4', '/红心火龙果.jpg', '8.3', '6.3', '0');
INSERT INTO `fruitgoods` VALUES ('28', '红毛丹', 'xxxx', '1', '/红毛丹.jpg', '51.1', '23.1', '0');
INSERT INTO `fruitgoods` VALUES ('29', '芒果', 'xxxxx', '4', '/芒果.jpg', '31.1', '22.1', '0');
INSERT INTO `fruitgoods` VALUES ('30', '苹果', 'xx', '3', '/苹果.jpg', '21.1', '22.0', '0');
INSERT INTO `fruitgoods` VALUES ('31', '草莓', 'xxxxx', '4', '/草莓.jpg', '34.2', '33.1', '0');
INSERT INTO `fruitgoods` VALUES ('32', '荔枝', 'xxxx', '3', '/荔枝.jpg', '23.2', '16.2', '0');
INSERT INTO `fruitgoods` VALUES ('33', '菠萝', 'xxx', '1', '/菠萝.jpg', '21.2', '16.2', '0');
INSERT INTO `fruitgoods` VALUES ('34', '葡萄', 'xxx', '6', '/葡萄.jpg', '31.2', '23.2', '0');
INSERT INTO `fruitgoods` VALUES ('35', '蓝莓', 'xxx', '4', '/蓝莓.jpg', '21.2', '14.2', '0');
INSERT INTO `fruitgoods` VALUES ('36', '西瓜', 'xxxxx', '2', '/西瓜.jpg', '23.2', '22.1', '0');
INSERT INTO `fruitgoods` VALUES ('37', '香蕉', 'xxxxx', '3', '/香蕉.jpg', '22.0', '11.0', '0');
INSERT INTO `fruitgoods` VALUES ('38', '黄桃', 'xxxx', '4', '/黄桃.jpg', '11.0', '7.1', '0');

-- ----------------------------
-- Table structure for `integral`
-- ----------------------------
DROP TABLE IF EXISTS `integral`;
CREATE TABLE `integral` (
  `integral_id` int(7) NOT NULL AUTO_INCREMENT,
  `fruit_id` int(7) NOT NULL,
  `integral_price` int(7) NOT NULL,
  PRIMARY KEY (`integral_id`),
  KEY `in_fr` (`fruit_id`),
  CONSTRAINT `in_fr` FOREIGN KEY (`fruit_id`) REFERENCES `fruitgoods` (`fruit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of integral
-- ----------------------------
INSERT INTO `integral` VALUES ('1', '2', '1200');
INSERT INTO `integral` VALUES ('2', '3', '1200');
INSERT INTO `integral` VALUES ('3', '13', '1200');
INSERT INTO `integral` VALUES ('4', '1', '2222');

-- ----------------------------
-- Table structure for `new_fruit`
-- ----------------------------
DROP TABLE IF EXISTS `new_fruit`;
CREATE TABLE `new_fruit` (
  `new_id` int(7) NOT NULL AUTO_INCREMENT,
  `fruit_id` int(7) NOT NULL,
  PRIMARY KEY (`new_id`),
  KEY `fruit_id` (`fruit_id`),
  CONSTRAINT `new_fruit_ibfk_1` FOREIGN KEY (`fruit_id`) REFERENCES `fruitgoods` (`fruit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of new_fruit
-- ----------------------------
INSERT INTO `new_fruit` VALUES ('2', '37');
INSERT INTO `new_fruit` VALUES ('1', '38');

-- ----------------------------
-- Table structure for `ocean_fruit`
-- ----------------------------
DROP TABLE IF EXISTS `ocean_fruit`;
CREATE TABLE `ocean_fruit` (
  `Ocean_id` int(7) NOT NULL AUTO_INCREMENT,
  `fruit_id` int(7) NOT NULL,
  PRIMARY KEY (`Ocean_id`),
  KEY `fruit_id` (`fruit_id`),
  CONSTRAINT `ocean_fruit_ibfk_1` FOREIGN KEY (`fruit_id`) REFERENCES `fruitgoods` (`fruit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ocean_fruit
-- ----------------------------
INSERT INTO `ocean_fruit` VALUES ('1', '36');
INSERT INTO `ocean_fruit` VALUES ('2', '38');

-- ----------------------------
-- Table structure for `pluck_fruit`
-- ----------------------------
DROP TABLE IF EXISTS `pluck_fruit`;
CREATE TABLE `pluck_fruit` (
  `pluck_id` int(7) NOT NULL AUTO_INCREMENT,
  `fruit_id` int(7) NOT NULL,
  PRIMARY KEY (`pluck_id`),
  KEY `fruit_id` (`fruit_id`),
  CONSTRAINT `pluck_fruit_ibfk_1` FOREIGN KEY (`fruit_id`) REFERENCES `fruitgoods` (`fruit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pluck_fruit
-- ----------------------------
INSERT INTO `pluck_fruit` VALUES ('1', '1');
INSERT INTO `pluck_fruit` VALUES ('2', '2');
INSERT INTO `pluck_fruit` VALUES ('3', '3');
INSERT INTO `pluck_fruit` VALUES ('4', '4');
INSERT INTO `pluck_fruit` VALUES ('5', '6');

-- ----------------------------
-- Table structure for `recommend_fruit`
-- ----------------------------
DROP TABLE IF EXISTS `recommend_fruit`;
CREATE TABLE `recommend_fruit` (
  `recommend_id` int(7) NOT NULL AUTO_INCREMENT,
  `fruit_id` int(7) NOT NULL,
  `shop_id` int(6) NOT NULL,
  PRIMARY KEY (`recommend_id`),
  KEY `fruit_id` (`fruit_id`),
  KEY `recomshop` (`shop_id`),
  CONSTRAINT `recommend_fruit_ibfk_1` FOREIGN KEY (`fruit_id`) REFERENCES `fruitgoods` (`fruit_id`),
  CONSTRAINT `recomshop` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`shop_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of recommend_fruit
-- ----------------------------
INSERT INTO `recommend_fruit` VALUES ('1', '2', '1');
INSERT INTO `recommend_fruit` VALUES ('2', '4', '1');
INSERT INTO `recommend_fruit` VALUES ('3', '35', '1');

-- ----------------------------
-- Table structure for `shop`
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `shop_id` int(6) NOT NULL AUTO_INCREMENT,
  `shop_name` char(16) NOT NULL,
  `shop_address` char(25) NOT NULL,
  PRIMARY KEY (`shop_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES ('1', '铁道学院店', '铁道学院旁边的茅草街12号');

-- ----------------------------
-- Table structure for `shopping`
-- ----------------------------
DROP TABLE IF EXISTS `shopping`;
CREATE TABLE `shopping` (
  `shopping_id` int(7) NOT NULL AUTO_INCREMENT,
  `fruit_id` int(6) NOT NULL,
  `user_id` int(7) NOT NULL,
  `shopping_cout` smallint(5) NOT NULL,
  `shopping_status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`shopping_id`),
  KEY `shop_user` (`user_id`),
  KEY `shop_fruit` (`fruit_id`),
  CONSTRAINT `shop_fruit` FOREIGN KEY (`fruit_id`) REFERENCES `fruitgoods` (`fruit_id`),
  CONSTRAINT `shop_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopping
-- ----------------------------
INSERT INTO `shopping` VALUES ('1', '2', '2', '2', '0');
INSERT INTO `shopping` VALUES ('3', '3', '13', '11', '0');

-- ----------------------------
-- Table structure for `storehouse`
-- ----------------------------
DROP TABLE IF EXISTS `storehouse`;
CREATE TABLE `storehouse` (
  `storehouse_id` int(7) NOT NULL AUTO_INCREMENT,
  `shop_id` int(6) NOT NULL,
  `fruit_id` int(7) NOT NULL,
  `storehouse_cout` int(6) NOT NULL,
  `vesion` int(7) NOT NULL,
  `storehouse_heat` int(6) NOT NULL,
  PRIMARY KEY (`storehouse_id`),
  KEY `shop_store` (`shop_id`),
  KEY `fruit_store` (`fruit_id`),
  CONSTRAINT `fruit_store` FOREIGN KEY (`fruit_id`) REFERENCES `fruitgoods` (`fruit_id`),
  CONSTRAINT `shop_store` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`shop_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of storehouse
-- ----------------------------
INSERT INTO `storehouse` VALUES ('1', '1', '1', '875', '39', '30');
INSERT INTO `storehouse` VALUES ('2', '1', '2', '1777', '1', '1334');
INSERT INTO `storehouse` VALUES ('3', '1', '3', '216', '1', '116');
INSERT INTO `storehouse` VALUES ('4', '1', '4', '1222', '1', '113');
INSERT INTO `storehouse` VALUES ('5', '1', '5', '3327', '2', '240');
INSERT INTO `storehouse` VALUES ('8', '1', '6', '4433', '2', '3434');
INSERT INTO `storehouse` VALUES ('9', '1', '7', '2223', '1', '1113');
INSERT INTO `storehouse` VALUES ('10', '1', '8', '234', '1', '6553');
INSERT INTO `storehouse` VALUES ('11', '1', '9', '3342', '1', '6623');
INSERT INTO `storehouse` VALUES ('12', '1', '10', '2342', '1', '5423');
INSERT INTO `storehouse` VALUES ('13', '1', '11', '3232', '1', '232');
INSERT INTO `storehouse` VALUES ('14', '1', '12', '123232', '1', '233');
INSERT INTO `storehouse` VALUES ('15', '1', '13', '2423', '2', '11');
INSERT INTO `storehouse` VALUES ('16', '1', '14', '12323', '1', '233');
INSERT INTO `storehouse` VALUES ('17', '1', '15', '2311', '1', '321');
INSERT INTO `storehouse` VALUES ('18', '1', '16', '2314', '1', '123');
INSERT INTO `storehouse` VALUES ('19', '1', '17', '232', '1', '223');
INSERT INTO `storehouse` VALUES ('20', '1', '18', '2321', '1', '2323');
INSERT INTO `storehouse` VALUES ('21', '1', '19', '3242', '1', '231');
INSERT INTO `storehouse` VALUES ('22', '1', '20', '2321', '1', '213');
INSERT INTO `storehouse` VALUES ('23', '1', '21', '323', '1', '231');
INSERT INTO `storehouse` VALUES ('24', '1', '22', '2321', '1', '1312');
INSERT INTO `storehouse` VALUES ('25', '1', '23', '232', '1', '23');
INSERT INTO `storehouse` VALUES ('26', '1', '24', '23231', '1', '11');
INSERT INTO `storehouse` VALUES ('27', '1', '25', '2131', '1', '1131');
INSERT INTO `storehouse` VALUES ('28', '1', '26', '23412', '1', '13213');
INSERT INTO `storehouse` VALUES ('29', '1', '27', '232421', '1', '3141');
INSERT INTO `storehouse` VALUES ('30', '1', '28', '2342', '1', '1231');
INSERT INTO `storehouse` VALUES ('31', '1', '29', '132412', '1', '1111');
INSERT INTO `storehouse` VALUES ('32', '1', '30', '222', '1', '2341');
INSERT INTO `storehouse` VALUES ('33', '1', '31', '314241', '1', '23141');
INSERT INTO `storehouse` VALUES ('34', '1', '32', '13131', '1', '111');
INSERT INTO `storehouse` VALUES ('35', '1', '33', '13131', '11', '233');
INSERT INTO `storehouse` VALUES ('36', '1', '34', '12314', '1', '1231');
INSERT INTO `storehouse` VALUES ('37', '1', '35', '2314', '1', '22414');
INSERT INTO `storehouse` VALUES ('38', '1', '36', '23131', '1', '1231');
INSERT INTO `storehouse` VALUES ('39', '1', '37', '234141', '1', '2341');
INSERT INTO `storehouse` VALUES ('40', '1', '38', '2341', '1', '43242');

-- ----------------------------
-- Table structure for `timebuy_fruit`
-- ----------------------------
DROP TABLE IF EXISTS `timebuy_fruit`;
CREATE TABLE `timebuy_fruit` (
  `time_id` int(7) NOT NULL AUTO_INCREMENT,
  `fruit_id` int(7) NOT NULL,
  PRIMARY KEY (`time_id`),
  KEY `fruit_id` (`fruit_id`),
  CONSTRAINT `timebuy_fruit_ibfk_1` FOREIGN KEY (`fruit_id`) REFERENCES `fruitgoods` (`fruit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of timebuy_fruit
-- ----------------------------
INSERT INTO `timebuy_fruit` VALUES ('1', '1');
INSERT INTO `timebuy_fruit` VALUES ('2', '4');
INSERT INTO `timebuy_fruit` VALUES ('3', '18');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(6) NOT NULL AUTO_INCREMENT,
  `user_name` char(16) NOT NULL,
  `user_yn_vip` tinyint(1) NOT NULL,
  `user_sex` char(1) NOT NULL DEFAULT '男',
  `user_nickname` char(20) NOT NULL,
  `user_birthday` date NOT NULL DEFAULT '2000-05-01',
  `user_balance` double(9,2) NOT NULL DEFAULT '0.00',
  `user_integral` mediumint(7) NOT NULL DEFAULT '0',
  `user_yhj_count` tinyint(2) NOT NULL DEFAULT '0',
  `user_password` char(16) NOT NULL,
  `user_imagesUrl` char(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '1660937656', '1', '男', '钟意C++', '2020-08-09', '0.00', '100', '0', '1000', '');
INSERT INTO `user` VALUES ('2', '90', '0', '男', '大黑11', '2020-08-13', '-27.00', '14400', '0', '180808080', null);
INSERT INTO `user` VALUES ('13', '188900', '0', '', '大黑狗', '2020-08-11', '0.00', '0', '0', '180808080', '');
INSERT INTO `user` VALUES ('14', 'tanwei', '0', '男', '大黑狗', '2020-08-11', '0.00', '0', '0', '180808080', '');
INSERT INTO `user` VALUES ('15', '188p00', '0', '男', '大黑狗', '2020-08-11', '0.00', '0', '0', '180808080', '');
INSERT INTO `user` VALUES ('16', '100', '0', '男', '大黑狗', '2020-08-13', '0.00', '0', '0', '180808080', null);
INSERT INTO `user` VALUES ('17', '10', '0', '男', '大黑狗', '2020-08-13', '0.00', '0', '0', '180808080', null);
INSERT INTO `user` VALUES ('18', '120', '0', '男', '大黑狗', '2020-08-13', '0.00', '0', '0', '180808080', null);
INSERT INTO `user` VALUES ('19', '18900', '0', '男', '大黑狗', '2020-08-13', '-2.10', '0', '0', '180808080', null);
INSERT INTO `user` VALUES ('20', '111', '0', '男', '2222', '2020-09-06', '106.80', '0', '0', '6666', null);
INSERT INTO `user` VALUES ('21', '18118900', '0', '男', '大黑狗', '2020-09-07', '999997.90', '0', '0', '180808080', null);

-- ----------------------------
-- Table structure for `userorder`
-- ----------------------------
DROP TABLE IF EXISTS `userorder`;
CREATE TABLE `userorder` (
  `order_id` int(7) NOT NULL AUTO_INCREMENT,
  `user_id` int(7) NOT NULL,
  `order_status` tinyint(1) NOT NULL,
  `address_id` int(7) NOT NULL,
  `order_time` datetime NOT NULL,
  `shop_id` int(7) NOT NULL,
  `order_integral` tinyint(1) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `fr_us` (`user_id`),
  KEY `fr_ad` (`address_id`),
  KEY `fr_sp` (`shop_id`),
  CONSTRAINT `fr_ad` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`),
  CONSTRAINT `fr_sp` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`shop_id`),
  CONSTRAINT `fr_us` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userorder
-- ----------------------------
INSERT INTO `userorder` VALUES ('1', '2', '2', '2', '2020-08-20 09:02:57', '1', '1');
INSERT INTO `userorder` VALUES ('3', '1', '2', '3', '2020-08-20 06:03:29', '1', '0');
INSERT INTO `userorder` VALUES ('4', '1', '2', '3', '2020-08-20 07:03:22', '1', '0');
INSERT INTO `userorder` VALUES ('5', '2', '2', '2', '2020-08-17 23:48:52', '1', '1');
INSERT INTO `userorder` VALUES ('6', '2', '3', '2', '2020-08-21 09:24:49', '1', '0');
INSERT INTO `userorder` VALUES ('7', '2', '2', '2', '2020-08-20 11:50:22', '1', '0');
INSERT INTO `userorder` VALUES ('8', '2', '2', '2', '2020-08-21 21:04:44', '1', '0');
INSERT INTO `userorder` VALUES ('9', '2', '5', '2', '2020-08-21 21:06:13', '1', '0');
INSERT INTO `userorder` VALUES ('10', '2', '5', '2', '2020-08-21 21:07:57', '1', '0');
INSERT INTO `userorder` VALUES ('11', '2', '1', '2', '2020-08-21 22:38:59', '1', '1');
INSERT INTO `userorder` VALUES ('12', '2', '2', '2', '2020-09-06 22:35:00', '1', '0');
INSERT INTO `userorder` VALUES ('13', '2', '2', '2', '2020-09-06 22:35:58', '1', '0');
INSERT INTO `userorder` VALUES ('14', '2', '2', '2', '2020-09-07 00:13:24', '1', '0');
INSERT INTO `userorder` VALUES ('15', '20', '2', '11', '2020-09-07 00:31:43', '1', '0');
INSERT INTO `userorder` VALUES ('16', '20', '2', '11', '2020-09-07 00:33:05', '1', '0');
INSERT INTO `userorder` VALUES ('25', '20', '2', '11', '2020-09-07 00:51:21', '1', '0');
INSERT INTO `userorder` VALUES ('26', '20', '2', '11', '2020-09-07 00:54:28', '1', '0');
INSERT INTO `userorder` VALUES ('27', '20', '2', '11', '2020-09-07 00:54:40', '1', '0');
INSERT INTO `userorder` VALUES ('28', '19', '2', '11', '2020-09-07 00:54:54', '1', '0');
INSERT INTO `userorder` VALUES ('29', '21', '2', '11', '2020-09-07 00:57:47', '1', '0');
INSERT INTO `userorder` VALUES ('30', '21', '2', '11', '2020-09-07 22:22:00', '1', '0');
INSERT INTO `userorder` VALUES ('31', '21', '2', '11', '2020-09-07 22:40:20', '1', '0');
INSERT INTO `userorder` VALUES ('32', '21', '1', '11', '2020-09-07 22:41:35', '1', '0');
INSERT INTO `userorder` VALUES ('33', '2', '2', '2', '2020-09-08 17:44:09', '1', '0');
INSERT INTO `userorder` VALUES ('34', '2', '2', '2', '2020-09-08 17:44:20', '1', '0');
INSERT INTO `userorder` VALUES ('35', '2', '2', '2', '2020-09-08 17:50:23', '1', '0');
INSERT INTO `userorder` VALUES ('36', '2', '2', '2', '2020-09-08 18:18:45', '1', '0');
INSERT INTO `userorder` VALUES ('37', '2', '2', '2', '2020-09-08 18:23:09', '1', '0');
INSERT INTO `userorder` VALUES ('38', '2', '2', '2', '2020-09-08 18:31:26', '1', '0');
INSERT INTO `userorder` VALUES ('39', '2', '2', '2', '2020-09-08 19:21:58', '1', '0');
INSERT INTO `userorder` VALUES ('40', '2', '2', '2', '2020-09-08 19:23:28', '1', '0');
INSERT INTO `userorder` VALUES ('41', '2', '2', '2', '2020-09-08 19:23:45', '1', '0');
INSERT INTO `userorder` VALUES ('42', '2', '2', '2', '2020-09-08 19:24:03', '1', '0');
INSERT INTO `userorder` VALUES ('43', '2', '2', '2', '2020-09-08 19:24:11', '1', '0');
INSERT INTO `userorder` VALUES ('44', '2', '2', '2', '2020-09-08 19:24:51', '1', '0');
INSERT INTO `userorder` VALUES ('45', '2', '2', '2', '2020-09-08 19:25:44', '1', '0');
INSERT INTO `userorder` VALUES ('46', '2', '3', '2', '2020-09-08 19:33:01', '1', '0');
INSERT INTO `userorder` VALUES ('47', '2', '0', '2', '2020-09-08 19:33:23', '1', '0');

-- ----------------------------
-- Procedure structure for `updateDefaultAddress`
-- ----------------------------
DROP PROCEDURE IF EXISTS `updateDefaultAddress`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateDefaultAddress`(in userid int,in addressId int)
BEGIN
update address set address_default=0 where user_id=userid and address_default=1;
update address set address_default=1 where address_id = addressId;
end
;;
DELIMITER ;
