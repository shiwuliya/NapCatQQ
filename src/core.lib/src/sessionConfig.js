function _0xce19(_0x2c6a78,_0x150ee){const _0x10a3b1=_0x10a3();return _0xce19=function(_0xce19fc,_0x3ccc90){_0xce19fc=_0xce19fc-0x16f;let _0x34214c=_0x10a3b1[_0xce19fc];return _0x34214c;},_0xce19(_0x2c6a78,_0x150ee);}(function(_0x5bab1,_0x2da5d0){const _0x1d3ec9=_0xce19,_0x5d92a6=_0x5bab1();while(!![]){try{const _0x297d3d=-parseInt(_0x1d3ec9(0x17e))/0x1*(parseInt(_0x1d3ec9(0x17f))/0x2)+parseInt(_0x1d3ec9(0x177))/0x3*(parseInt(_0x1d3ec9(0x183))/0x4)+-parseInt(_0x1d3ec9(0x185))/0x5+-parseInt(_0x1d3ec9(0x176))/0x6*(-parseInt(_0x1d3ec9(0x16f))/0x7)+-parseInt(_0x1d3ec9(0x173))/0x8+parseInt(_0x1d3ec9(0x171))/0x9*(parseInt(_0x1d3ec9(0x17c))/0xa)+parseInt(_0x1d3ec9(0x181))/0xb;if(_0x297d3d===_0x2da5d0)break;else _0x5d92a6['push'](_0x5d92a6['shift']());}catch(_0x3db7fe){_0x5d92a6['push'](_0x5d92a6['shift']());}}}(_0x10a3,0xab2e7));import{appid,qqPkgInfo,qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';import{hostname,systemName,systemVersion}from'@/common/utils/system';import _0x33cf65 from'node:path';import _0x82ab99 from'node:fs';import{randomUUID}from'crypto';export let sessionConfig=null;function _0x10a3(){const _0x16af50=['version','681057aUZrgl','writeFileSync','8833960tRwqQH','join','GffXK','667878tQeHoP','638643FayvJq','jjHaq','curVersion','utf-8','guid.txt','70OROzVt','NapCat','521DxaRGy','2960fsrxUc','temp','16310514qkpHjY','readFileSync','4KZnLqe','{\x22appearance\x22:{\x22isSplitViewMode\x22:true},\x22msg\x22:{}}','1027235cUnwrM','gfxbk','35VuNiFK'];_0x10a3=function(){return _0x16af50;};return _0x10a3();}export function genSessionConfig(_0x1b39a0,_0x3aed2a,_0x321a24){const _0x260512=_0xce19,_0x470e0c={'GffXK':'NapCat','gfxbk':_0x260512(0x17b),'jjHaq':_0x260512(0x17a),'oTIak':_0x260512(0x184)},_0x1cba22=_0x33cf65[_0x260512(0x174)](_0x321a24,_0x470e0c[_0x260512(0x175)],_0x260512(0x180));_0x82ab99['mkdirSync'](_0x1cba22,{'recursive':!![]});const _0x5e65d2=_0x33cf65[_0x260512(0x174)](_0x321a24,_0x260512(0x17d),_0x470e0c[_0x260512(0x186)]);let _0x205a32=randomUUID();try{_0x205a32=_0x82ab99[_0x260512(0x182)](_0x33cf65[_0x260512(0x174)](_0x5e65d2),_0x470e0c[_0x260512(0x178)]);}catch(_0x149814){_0x82ab99[_0x260512(0x172)](_0x33cf65[_0x260512(0x174)](_0x5e65d2),_0x205a32,_0x470e0c[_0x260512(0x178)]);}const _0x1031a6={'selfUin':_0x1b39a0,'selfUid':_0x3aed2a,'desktopPathConfig':{'account_path':_0x321a24},'clientVer':qqVersionConfigInfo[_0x260512(0x179)],'a2':'','d2':'','d2Key':'','machineId':'','platform':0x3,'platVer':systemVersion,'appid':appid,'rdeliveryConfig':{'appKey':'','systemId':0x0,'appId':'','logicEnvironment':'','platform':0x3,'language':'','sdkVersion':'','userId':'','appVersion':'','osVersion':'','bundleId':'','serverUrl':'','fixedAfterHitKeys':['']},'defaultFileDownloadPath':_0x1cba22,'deviceInfo':{'guid':_0x205a32,'buildVer':qqPkgInfo[_0x260512(0x170)],'localId':0x804,'devName':hostname,'devType':systemName,'vendorName':'','osVer':systemVersion,'vendorOsName':systemName,'setMute':![],'vendorType':0x0},'deviceConfig':_0x470e0c['oTIak']};return sessionConfig=_0x1031a6,_0x1031a6;}