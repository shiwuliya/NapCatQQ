const _0xe848a3=_0x4a0a;(function(_0x575935,_0x3e6854){const _0x101d5a=_0x4a0a,_0x3ec393=_0x575935();while(!![]){try{const _0x8c4c1c=parseInt(_0x101d5a(0xc9))/0x1*(-parseInt(_0x101d5a(0xf4))/0x2)+parseInt(_0x101d5a(0x91))/0x3+parseInt(_0x101d5a(0xdb))/0x4*(-parseInt(_0x101d5a(0xcc))/0x5)+-parseInt(_0x101d5a(0xb2))/0x6*(parseInt(_0x101d5a(0xe2))/0x7)+parseInt(_0x101d5a(0xd2))/0x8*(-parseInt(_0x101d5a(0xa1))/0x9)+parseInt(_0x101d5a(0xbc))/0xa+parseInt(_0x101d5a(0x103))/0xb;if(_0x8c4c1c===_0x3e6854)break;else _0x3ec393['push'](_0x3ec393['shift']());}catch(_0x2d62fb){_0x3ec393['push'](_0x3ec393['shift']());}}}(_0x18b0,0xe5745));import _0x119764 from'sqlite3';import{logDebug,logError}from'@/common/utils/log';import{NTQQMsgApi}from'@/core';class DBUtilBase{['db'];async['init'](_0xf53ca5){const _0x5b46b5=_0x4a0a,_0x47f3a3={'yHbWQ':function(_0x4fa9f9,_0x268aed,_0x49ff59){return _0x4fa9f9(_0x268aed,_0x49ff59);},'sOtjd':_0x5b46b5(0xf1),'QTFWH':function(_0x2c157b,_0x32aaf6){return _0x2c157b(_0x32aaf6);},'DmbFU':function(_0x25ad57){return _0x25ad57();},'tKPMo':function(_0x327071,_0x3cdbf7){return _0x327071|_0x3cdbf7;}};if(this['db'])return;return new Promise((_0x5acd4d,_0x34f138)=>{const _0x3d96a3=_0x5b46b5;this['db']=new _0x119764[(_0x3d96a3(0xaa))](_0xf53ca5,_0x47f3a3[_0x3d96a3(0xdc)](_0x119764['OPEN_READWRITE'],_0x119764[_0x3d96a3(0xb8)]),_0x4017f4=>{const _0x22e385=_0x3d96a3;if(_0x4017f4){_0x47f3a3[_0x22e385(0x101)](logError,_0x47f3a3[_0x22e385(0xfd)],_0x4017f4),_0x47f3a3['QTFWH'](_0x34f138,_0x4017f4);return;}this[_0x22e385(0xc6)](),_0x47f3a3[_0x22e385(0xe5)](_0x5acd4d);});});}[_0xe848a3(0xc6)](){const _0x384ea2=_0xe848a3;throw new Error(_0x384ea2(0xce));}[_0xe848a3(0xc4)](){const _0x58f9d1=_0xe848a3;this['db']?.[_0x58f9d1(0xc4)]();}}function _0x18b0(){const _0x5499cf=['wKKlf','OPVMY','getFileCacheByName','wxRlc','path','BIXUu','QPbMT','OWUzf','getMsgByShortId','element','toString',',\x20短id:\x20','yQUFq','4715565GgHnQU','WcHXJ','pUVVK','then','uid','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20msgs\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20INTEGER\x20PRIMARY\x20KEY\x20AUTOINCREMENT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20shortId\x20INTEGER\x20NOT\x20NULL\x20UNIQUE,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20longId\x20TEXT\x20NOT\x20NULL\x20UNIQUE,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20seq\x20INTEGER\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20peerUid\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20chatType\x20INTEGER\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)','Could\x20not\x20get\x20max\x20short\x20id,\x20Use\x20default\x20-2147483640','addTempUin','globalMsgShortId','TWtKc','WeUZy','VyoWt','forEach','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20files\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20INTEGER\x20PRIMARY\x20KEY\x20AUTOINCREMENT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20path\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20url\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20size\x20INTEGER\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uuid\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20elementType\x20INTEGER,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20element\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20elementId\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20msgId\x20TEXT\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)','dHltf','Could\x20not\x20create\x20table\x20msgs','4856814KUUTkx','SELECT\x20*\x20FROM\x20msgs\x20WHERE\x20shortId\x20=\x20?','LqqdX','hFwGB','SxAnY','getFileCache','记录消息到数据库,\x20消息长id:\x20','addFileCache','getUidByTempUin','Database','msgCache','SELECT\x20*\x20FROM\x20msgs\x20WHERE\x20peerUid\x20=\x20?\x20AND\x20seq\x20=\x20?','uuid','parse','TrHYO','prepare','msgTime','161982PQGyWU','chatType','tbCMy','getMsgsByMsgId','VvaRD','kDkLT','OPEN_CREATE','ErRai','PYkzs','XBcpv','13393190WCnWZc','db\x20could\x20not\x20get\x20file\x20cache','stringify','INSERT\x20INTO\x20msgs\x20(shortId,\x20longId,\x20seq,\x20peerUid,\x20chatType)\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?)','dyJng','db\x20could\x20not\x20get\x20temp\x20uin\x20map','SELECT\x20*\x20FROM\x20files\x20WHERE\x20uuid\x20=\x20?','getCurrentMaxShortId','close','msgSeq','createTable','VSOBy','set','4lEDmOX','MxotL','ZAyDM','7853965bdhlFO','db\x20could\x20not\x20add\x20msg','Method\x20not\x20implemented.','msgId','mxHbk','name','16zWNXjY','init','Flsvx','getMsgByLongId','KEzRM','zPigP',',\x20msgId:\x20','errno','db\x20getMsgByLongId\x20error','4Qfvmqp','tKPMo','JevKb','stack','assign','YJxdP','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20temp_uins\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20INTEGER\x20PRIMARY\x20KEY\x20AUTOINCREMENT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uid\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uin\x20TEXT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)','476hGoLoM','SELECT\x20*\x20FROM\x20temp_uins','Uyfep','DmbFU','oxEhI','elementType','Could\x20not\x20create\x20table\x20files','now','updateFileCache','更新消息,\x20shortId:','INSERT\x20INTO\x20temp_uins\x20(uin,\x20uid)\x20VALUES\x20(?,\x20?)','url','bmiZE','has','Dritj','Could\x20not\x20connect\x20to\x20database','db\x20could\x20not\x20get\x20msg\x20by\x20long\x20id','dfudv','40428bRPMxr','INSERT\x20INTO\x20files\x20(name,\x20path,\x20url,\x20size,\x20uuid,\x20elementType\x20,element,\x20elementId,\x20msgId)\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?)','peerUid','getMsg','xlqOJ','SELECT\x20*\x20FROM\x20msgs\x20WHERE\x20longId\x20=\x20?','maxId',',\x20seq:\x20','数据库中消息最大短id','sOtjd','catch','tHjQG','run','yHbWQ','updateMsg\x20db\x20error','28549488thWIen','elementId','JMwLi','UPDATE\x20files\x20SET\x20path\x20=\x20?,\x20url\x20=\x20?\x20WHERE\x20uuid\x20=\x20?','get','getFileCacheByUuid','uin','UPDATE\x20msgs\x20SET\x20seq=?\x20WHERE\x20longId=?','updateMsg','db\x20could\x20not\x20update\x20file\x20cache','AsrtT','delete','KaXAg','getMsgBySeq'];_0x18b0=function(){return _0x5499cf;};return _0x18b0();}class DBUtil extends DBUtilBase{[_0xe848a3(0xab)]=new Map();[_0xe848a3(0x99)]=-0x7ffffff8;constructor(){const _0x2c5d03=_0xe848a3,_0x1aaa0b={'QPbMT':function(_0x36227a,_0x488f19){return _0x36227a(_0x488f19);},'TrHYO':function(_0x25043e,_0x49de81){return _0x25043e(_0x49de81);},'KaXAg':function(_0x1037ac,_0x1f0a5e){return _0x1037ac*_0x1f0a5e;},'hFwGB':function(_0x336168,_0x4c9648,_0x2b2905){return _0x336168(_0x4c9648,_0x2b2905);}};super();const _0x33f443=_0x1aaa0b['KaXAg'](_0x1aaa0b[_0x2c5d03(0x10f)](0x3e8,0x3c),0xa);_0x1aaa0b[_0x2c5d03(0xa4)](setInterval,()=>{const _0x418453=_0x2c5d03,_0x2e37db={'ErRai':function(_0x138284,_0x29f76e){return _0x138284>_0x29f76e;},'gwKCM':function(_0x57febf,_0x1a0f2a){return _0x57febf-_0x1a0f2a;},'zPigP':function(_0x26eff5,_0x3a5869){return _0x26eff5*_0x3a5869;},'Dritj':function(_0x5657cd,_0x44f09e){const _0x3d39fd=_0x4a0a;return _0x1aaa0b[_0x3d39fd(0x8a)](_0x5657cd,_0x44f09e);}};_0x1aaa0b[_0x418453(0xaf)](logDebug,'清理消息缓存'),this[_0x418453(0xab)][_0x418453(0x9d)]((_0xa0dd28,_0x105836)=>{const _0x3f0762=_0x418453;_0x2e37db[_0x3f0762(0xb9)](_0x2e37db['gwKCM'](Date[_0x3f0762(0xe9)](),_0x2e37db[_0x3f0762(0xd7)](_0x2e37db[_0x3f0762(0xf0)](parseInt,_0xa0dd28[_0x3f0762(0xb1)]),0x3e8)),_0x33f443)&&this[_0x3f0762(0xab)][_0x3f0762(0x10e)](_0x105836);});},_0x33f443);}async[_0xe848a3(0xd3)](_0x4663fc){const _0x902087=_0xe848a3;await super['init'](_0x4663fc),this['globalMsgShortId']=await this[_0x902087(0xc3)]();}['createTable'](){const _0x42c39c=_0xe848a3,_0x5b5dc0={'OPVMY':function(_0x497da3,_0x4e3ff9,_0x7bdaf1){return _0x497da3(_0x4e3ff9,_0x7bdaf1);},'JWNtx':_0x42c39c(0xa0),'ohdGb':_0x42c39c(0xe8),'kDkLT':'Could\x20not\x20create\x20table\x20temp_uins'},_0x40169b=_0x42c39c(0x96);this['db'][_0x42c39c(0x100)](_0x40169b,function(_0x15f794){const _0x43cdc8=_0x42c39c;_0x15f794&&_0x5b5dc0[_0x43cdc8(0x112)](logError,_0x5b5dc0['JWNtx'],_0x15f794[_0x43cdc8(0xde)]);});const _0x36147e=_0x42c39c(0x9e);this['db'][_0x42c39c(0x100)](_0x36147e,function(_0x522e23){_0x522e23&&logError(_0x5b5dc0['ohdGb'],_0x522e23);});const _0x4bc9fc=_0x42c39c(0xe1);this['db'][_0x42c39c(0x100)](_0x4bc9fc,function(_0x2cc3fd){const _0x5cd5be=_0x42c39c;_0x2cc3fd&&_0x5b5dc0[_0x5cd5be(0x112)](logError,_0x5b5dc0[_0x5cd5be(0xb7)],_0x2cc3fd);});}async['getCurrentMaxShortId'](){const _0x22b896=_0xe848a3,_0x907024={'dHltf':_0x22b896(0x97),'MxotL':function(_0x58ff5f,_0x183c34){return _0x58ff5f(_0x183c34);},'TWtKc':function(_0x27f33f,_0x3e2e25,_0xf31f0a){return _0x27f33f(_0x3e2e25,_0xf31f0a);},'AsrtT':_0x22b896(0xfc),'OWUzf':'SELECT\x20MAX(shortId)\x20as\x20maxId\x20FROM\x20msgs'};return new Promise((_0x22bf3f,_0x6e3ad9)=>{const _0x4ee6fd=_0x22b896;this['db'][_0x4ee6fd(0x107)](_0x907024[_0x4ee6fd(0x8b)],(_0x3da268,_0x28c06c)=>{const _0x5f51e9=_0x4ee6fd;if(_0x3da268)return logDebug(_0x907024[_0x5f51e9(0x9f)],_0x3da268),_0x907024[_0x5f51e9(0xca)](_0x22bf3f,-0x7ffffff8);_0x907024[_0x5f51e9(0x9a)](logDebug,_0x907024[_0x5f51e9(0x10d)],_0x28c06c?.[_0x5f51e9(0xfa)]),_0x22bf3f(_0x28c06c?.[_0x5f51e9(0xfa)]??-0x7ffffff8);});});}async[_0xe848a3(0xf7)](_0xe5a304,_0x20494a){const _0x519945={'JMwLi':function(_0x20d68c,_0x3190ec,_0xb7594,_0x49d650,_0x5bfda6){return _0x20d68c(_0x3190ec,_0xb7594,_0x49d650,_0x5bfda6);},'xlqOJ':'Could\x20not\x20get\x20msg','tHjQG':function(_0x50b05b,_0x43e8ed){return _0x50b05b(_0x43e8ed);},'ixeXl':function(_0x2bc158,_0x131fff){return _0x2bc158(_0x131fff);}},_0x3095fe=this['db']['prepare'](_0xe5a304);return new Promise((_0x1ff180,_0x59ed84)=>{const _0x2a76e9={'Uyfep':function(_0x3efbc0,_0x577634){return _0x519945['ixeXl'](_0x3efbc0,_0x577634);},'lbEyC':function(_0x32a296,_0xe599ea){const _0x487fb0=_0x4a0a;return _0x519945[_0x487fb0(0xff)](_0x32a296,_0xe599ea);}};_0x3095fe['get'](..._0x20494a,(_0xf55974,_0x380410)=>{const _0x361776=_0x4a0a;if(_0xf55974)return _0x519945[_0x361776(0x105)](logError,_0x519945[_0x361776(0xf8)],_0xf55974,_0xe5a304,_0x20494a),_0x519945[_0x361776(0xff)](_0x1ff180,null);if(!_0x380410){_0x519945['ixeXl'](_0x1ff180,null);return;}const _0x132adb=_0x380410['longId'];NTQQMsgApi[_0x361776(0xb5)]({'peerUid':_0x380410[_0x361776(0xf6)],'chatType':_0x380410[_0x361776(0xb3)]},[_0x132adb])['then'](_0x2524cb=>{const _0x31b7a2=_0x361776,_0x98e5=_0x2524cb['msgList'][0x0];if(!_0x98e5){_0x2a76e9[_0x31b7a2(0xe4)](_0x1ff180,null);return;}_0x98e5['id']=_0x380410['shortId'],_0x2a76e9['Uyfep'](_0x1ff180,_0x98e5);})[_0x361776(0xfe)](_0x109df0=>{_0x2a76e9['lbEyC'](_0x1ff180,null);});});});}async[_0xe848a3(0x8c)](_0x40b180){const _0x1dddce=_0xe848a3,_0x55e982={'LqqdX':_0x1dddce(0xa2)};if(this[_0x1dddce(0xab)][_0x1dddce(0xef)](_0x40b180))return this['msgCache'][_0x1dddce(0x107)](_0x40b180);const _0x275410=_0x55e982[_0x1dddce(0xa3)];return this[_0x1dddce(0xf7)](_0x275410,[_0x40b180]);}async[_0xe848a3(0xd5)](_0x307970){const _0x1a426a=_0xe848a3,_0x4bbc0f={'Flsvx':_0x1a426a(0xf9)};if(this[_0x1a426a(0xab)][_0x1a426a(0xef)](_0x307970))return this[_0x1a426a(0xab)][_0x1a426a(0x107)](_0x307970);return this[_0x1a426a(0xf7)](_0x4bbc0f[_0x1a426a(0xd4)],[_0x307970]);}async[_0xe848a3(0x110)](_0x2c3671,_0x3875c5){const _0x29d1db=_0xe848a3,_0x3b656e={'bmiZE':_0x29d1db(0xac)},_0x3c1b32=_0x3b656e[_0x29d1db(0xee)];return this[_0x29d1db(0xf7)](_0x3c1b32,[_0x2c3671,_0x3875c5]);}async['addMsg'](_0x5d3912,_0x4a1eb2=!![]){const _0x3cfaf5=_0xe848a3,_0x13c6e7={'VvaRD':_0x3cfaf5(0xf2),'yQUFq':function(_0x89d6b4,_0x551d56){return _0x89d6b4===_0x551d56;},'ZAyDM':function(_0x41ee31,_0x353ce9,_0x236ff6){return _0x41ee31(_0x353ce9,_0x236ff6);},'WeUZy':_0x3cfaf5(0xcd),'mxHbk':function(_0x416251,_0x1e7c00){return _0x416251(_0x1e7c00);}},_0x2e9c34=await this[_0x3cfaf5(0xd5)](_0x5d3912[_0x3cfaf5(0xcf)]);if(_0x2e9c34){if(_0x4a1eb2)this['updateMsg'](_0x5d3912)[_0x3cfaf5(0x94)]();return _0x2e9c34['id'];}const _0x1776ee=this['db'][_0x3cfaf5(0xb0)](_0x3cfaf5(0xbf)),_0x20164f=++this['globalMsgShortId'];return _0x5d3912['id']=_0x20164f,_0x13c6e7[_0x3cfaf5(0xd0)](logDebug,_0x3cfaf5(0xa7)+_0x5d3912[_0x3cfaf5(0xcf)]+_0x3cfaf5(0x8f)+_0x5d3912['id']),this[_0x3cfaf5(0xab)][_0x3cfaf5(0xc8)](_0x20164f,_0x5d3912),this[_0x3cfaf5(0xab)][_0x3cfaf5(0xc8)](_0x5d3912[_0x3cfaf5(0xcf)],_0x5d3912),_0x1776ee['run'](this[_0x3cfaf5(0x99)],_0x5d3912[_0x3cfaf5(0xcf)],_0x5d3912[_0x3cfaf5(0xc5)][_0x3cfaf5(0x8e)](),_0x5d3912[_0x3cfaf5(0xf6)],_0x5d3912[_0x3cfaf5(0xb3)],_0xfede0b=>{const _0x36f5a0=_0x3cfaf5;_0xfede0b&&(_0x13c6e7[_0x36f5a0(0x90)](_0xfede0b[_0x36f5a0(0xd9)],0x13)?this[_0x36f5a0(0xd5)](_0x5d3912[_0x36f5a0(0xcf)])[_0x36f5a0(0x94)](_0x1697e3=>{const _0x29ee06=_0x36f5a0;_0x1697e3?(this[_0x29ee06(0xab)]['set'](_0x20164f,_0x1697e3),this[_0x29ee06(0xab)][_0x29ee06(0xc8)](_0x1697e3[_0x29ee06(0xcf)],_0x1697e3)):logError(_0x13c6e7[_0x29ee06(0xb6)],_0xfede0b);})[_0x36f5a0(0xfe)](_0x2f1a61=>logError(_0x36f5a0(0xda),_0x2f1a61)):_0x13c6e7[_0x36f5a0(0xcb)](logError,_0x13c6e7[_0x36f5a0(0x9b)],_0xfede0b));}),_0x20164f;}async[_0xe848a3(0x10b)](_0x341f67){const _0x429cfc=_0xe848a3,_0x2e7b57={'BIXUu':_0x429cfc(0x102),'YJxdP':function(_0x24d346,_0x18aa18){return _0x24d346(_0x18aa18);},'djxpu':_0x429cfc(0x10a)},_0x5cc14d=this['msgCache'][_0x429cfc(0x107)](_0x341f67[_0x429cfc(0xcf)]);_0x5cc14d&&Object[_0x429cfc(0xdf)](_0x5cc14d,_0x341f67);_0x2e7b57[_0x429cfc(0xe0)](logDebug,_0x429cfc(0xeb)+_0x341f67['id']+_0x429cfc(0xfb)+_0x341f67[_0x429cfc(0xc5)]+_0x429cfc(0xd8)+_0x341f67[_0x429cfc(0xcf)]);const _0x2aa1dd=this['db']['prepare'](_0x2e7b57['djxpu']);_0x2aa1dd[_0x429cfc(0x100)](_0x341f67[_0x429cfc(0xc5)],_0x341f67[_0x429cfc(0xcf)],_0x580126=>{const _0x221dca=_0x429cfc;_0x580126&&logError(_0x2e7b57[_0x221dca(0x89)],_0x580126);});}async[_0xe848a3(0xa8)](_0x5b22c3){const _0x1a8c50=_0xe848a3,_0x26d367={'VyoWt':function(_0x5003f9,_0x1e779,_0x5721b6){return _0x5003f9(_0x1e779,_0x5721b6);},'dfudv':function(_0x3a360e,_0x279d7f){return _0x3a360e(_0x279d7f);},'XBcpv':function(_0x59a770,_0x30cba3){return _0x59a770(_0x30cba3);}},_0x5a4897=this['db'][_0x1a8c50(0xb0)](_0x1a8c50(0xf5));return new Promise((_0x5d2220,_0x34999b)=>{const _0x49ccb1=_0x1a8c50;_0x5a4897[_0x49ccb1(0x100)](_0x5b22c3[_0x49ccb1(0xd1)],_0x5b22c3[_0x49ccb1(0x88)],_0x5b22c3['url'],_0x5b22c3['size'],_0x5b22c3[_0x49ccb1(0xad)],_0x5b22c3[_0x49ccb1(0xe7)],JSON[_0x49ccb1(0xbe)](_0x5b22c3['element']),_0x5b22c3[_0x49ccb1(0x104)],_0x5b22c3[_0x49ccb1(0xcf)],function(_0x5db04d){const _0x176ead=_0x49ccb1;_0x5db04d&&(_0x26d367[_0x176ead(0x9c)](logError,'db\x20could\x20not\x20add\x20file',_0x5db04d),_0x26d367[_0x176ead(0xf3)](_0x34999b,_0x5db04d)),_0x26d367[_0x176ead(0xbb)](_0x5d2220,null);});});}async[_0xe848a3(0xa6)](_0x1ac684,_0xad4a43){const _0x46d93d=_0xe848a3,_0x274b77={'JevKb':_0x46d93d(0xbd),'oxEhI':function(_0x45eae3,_0x5c1f81){return _0x45eae3(_0x5c1f81);},'pUVVK':function(_0x228038,_0x10e567){return _0x228038(_0x10e567);}},_0x3c0d38=this['db'][_0x46d93d(0xb0)](_0x1ac684);return new Promise((_0x12b8ea,_0x5ea003)=>{_0x3c0d38['get'](..._0xad4a43,(_0xf2f99c,_0x210593)=>{const _0x2246ee=_0x4a0a;_0xf2f99c&&(logError(_0x274b77[_0x2246ee(0xdd)],_0xf2f99c),_0x274b77[_0x2246ee(0xe6)](_0x5ea003,_0xf2f99c)),_0x210593&&(_0x210593['element']=JSON[_0x2246ee(0xae)](_0x210593[_0x2246ee(0x8d)])),_0x274b77[_0x2246ee(0x93)](_0x12b8ea,_0x210593);});});}async[_0xe848a3(0x113)](_0x20390f){const _0x2b1dd=_0xe848a3,_0x31996c={'dyJng':'SELECT\x20*\x20FROM\x20files\x20WHERE\x20name\x20=\x20?'};return this[_0x2b1dd(0xa6)](_0x31996c[_0x2b1dd(0xc0)],[_0x20390f]);}async[_0xe848a3(0x108)](_0x351d6e){const _0x51b9cb=_0xe848a3;return this[_0x51b9cb(0xa6)](_0x51b9cb(0xc2),[_0x351d6e]);}async[_0xe848a3(0xea)](_0x16f7d4){const _0x5b3313=_0xe848a3,_0x3a0332={'WcHXJ':_0x5b3313(0x106)},_0x23428f=this['db'][_0x5b3313(0xb0)](_0x3a0332[_0x5b3313(0x92)]);return new Promise((_0x26a3fc,_0x9d69dc)=>{const _0x18dd1a=_0x5b3313,_0x300bfe={'FWIWT':function(_0x177f78,_0x34aeb2,_0x1660cf){return _0x177f78(_0x34aeb2,_0x1660cf);}};_0x23428f[_0x18dd1a(0x100)](_0x16f7d4[_0x18dd1a(0x88)],_0x16f7d4[_0x18dd1a(0xed)],_0x16f7d4[_0x18dd1a(0xad)],function(_0x5b6d84){const _0x4cd232=_0x18dd1a;_0x5b6d84&&(_0x300bfe['FWIWT'](logError,_0x4cd232(0x10c),_0x5b6d84),_0x9d69dc(_0x5b6d84)),_0x26a3fc(null);});});}async['getReceivedTempUinMap'](){const _0xbb5c52=_0xe848a3,_0x22195e={'KEzRM':function(_0x352c11,_0x2dd349,_0x2d721a){return _0x352c11(_0x2dd349,_0x2d721a);},'wKKlf':function(_0x548945,_0x22385d){return _0x548945(_0x22385d);}},_0x4c57d0=_0xbb5c52(0xe3);return new Promise((_0x27dcf8,_0x3b41ba)=>{const _0x5b6160=_0xbb5c52,_0x115a36={'wxRlc':function(_0x15966c,_0x3afc86,_0x5ae662){const _0x3acc40=_0x4a0a;return _0x22195e[_0x3acc40(0xd6)](_0x15966c,_0x3afc86,_0x5ae662);},'tbCMy':_0x5b6160(0xc1),'VSOBy':function(_0x17ad0d,_0x7eb70e){const _0x4fc65c=_0x5b6160;return _0x22195e[_0x4fc65c(0x111)](_0x17ad0d,_0x7eb70e);}};this['db']['all'](_0x4c57d0,(_0x1f5a18,_0x198e50)=>{const _0x1f1fec=_0x5b6160;_0x1f5a18&&(_0x115a36[_0x1f1fec(0x114)](logError,_0x115a36[_0x1f1fec(0xb4)],_0x1f5a18),_0x3b41ba(_0x1f5a18));const _0x3749c7={};_0x198e50['forEach'](_0x291ad4=>{const _0x1b9bfc=_0x1f1fec;_0x3749c7[_0x291ad4[_0x1b9bfc(0x109)]]=_0x291ad4['uid'];}),_0x115a36[_0x1f1fec(0xc7)](_0x27dcf8,_0x3749c7);});});}async[_0xe848a3(0xa9)](_0x1f9074){const _0x1ed491={'CYUyC':'SELECT\x20*\x20FROM\x20temp_uins\x20WHERE\x20uin\x20=\x20?'},_0x120ba7=_0x1ed491['CYUyC'];return new Promise((_0x3f54cc,_0x10fed2)=>{const _0x471269=_0x4a0a,_0x2d8239={'PYkzs':_0x471269(0xc1)};this['db'][_0x471269(0x107)](_0x120ba7,[_0x1f9074],(_0x3192f6,_0x47cead)=>{const _0x1c3054=_0x471269;_0x3192f6&&(logError(_0x2d8239[_0x1c3054(0xba)],_0x3192f6),_0x10fed2(_0x3192f6)),_0x3f54cc(_0x47cead?.[_0x1c3054(0x95)]);});});}async[_0xe848a3(0x98)](_0x537ad6,_0xc95638){const _0x4ed451=_0xe848a3,_0x49076d={'jHUWs':function(_0x44ac9d,_0x4cd8a0,_0x31a144){return _0x44ac9d(_0x4cd8a0,_0x31a144);},'SxAnY':function(_0x2c7af3,_0x5b575f){return _0x2c7af3(_0x5b575f);},'Mylxp':_0x4ed451(0xec)},_0x2b80e6=await this[_0x4ed451(0xa9)](_0x537ad6);if(!_0x2b80e6){const _0x5ec719=this['db'][_0x4ed451(0xb0)](_0x49076d['Mylxp']);return new Promise((_0x2cf913,_0x3e5166)=>{const _0x363a87=_0x4ed451;_0x5ec719[_0x363a87(0x100)](_0x537ad6,_0xc95638,function(_0x2a52c9){const _0x4da696=_0x363a87;_0x2a52c9&&(_0x49076d['jHUWs'](logError,'db\x20could\x20not\x20add\x20temp\x20uin',_0x2a52c9),_0x3e5166(_0x2a52c9)),_0x49076d[_0x4da696(0xa5)](_0x2cf913,null);});});}}}function _0x4a0a(_0x5ee508,_0x451034){const _0x18b0b0=_0x18b0();return _0x4a0a=function(_0x4a0a90,_0x4f5baa){_0x4a0a90=_0x4a0a90-0x88;let _0xd4869e=_0x18b0b0[_0x4a0a90];return _0xd4869e;},_0x4a0a(_0x5ee508,_0x451034);}export const dbUtil=new DBUtil();