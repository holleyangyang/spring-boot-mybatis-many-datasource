CREATE TABLE `person_info` (
  `id` int(11) GENERATED ALWAYS AS (1) STORED NOT NULL,
  `chushengriqi` varchar(45) DEFAULT NULL,
  `xingbie` varchar(45) DEFAULT NULL,
  `zuji` varchar(45) DEFAULT NULL,
  `zhengjianxinxi` varchar(45) DEFAULT NULL,
  `chutaoriqi` varchar(45) DEFAULT NULL,
  `chutaoguojia` varchar(45) DEFAULT NULL,
  `suozaizuzhi` varchar(45) DEFAULT NULL,
  `zhiwei` varchar(45) DEFAULT NULL,
  `suoshuleibie` varchar(45) DEFAULT NULL,
  `shoujiaoyuqingkuang` varchar(45) DEFAULT NULL,
  `jiatingqingkuang` varchar(45) DEFAULT NULL,
  `youxiangdizhi` varchar(45) DEFAULT NULL,
  `qitaxixi` varchar(45) DEFAULT NULL,
  `zaijingneichuliqingkuang` varchar(45) DEFAULT NULL,
  `canyuhuodong` varchar(45) DEFAULT NULL,
  `fumianziliao` varchar(45) DEFAULT NULL,
  `yingwenming` varchar(45) DEFAULT NULL,
  `xingming` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
