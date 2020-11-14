 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var J=c(0x24),K=c(0x9),Q=c(0x5);function U(){return W['TYPED_ARRAY_SUPPORT']?0x7fffffff:0x3fffffff;}function V(av,aw){if(U()<aw)throw new RangeError('Invalid\x20typed\x20array\x20length');return W['TYPED_ARRAY_SUPPORT']?(av=new Uint8Array(aw))['__proto__']=W['prototype']:(null===av&&(av=new W(aw)),av['length']=aw),av;}function W(av,aw,ax){if(!(W['TYPED_ARRAY_SUPPORT']||this instanceof W))return new W(av,aw,ax);if('number'==typeof av){if('string'==typeof aw)throw new Error('If\x20encoding\x20is\x20specified\x20then\x20the\x20first\x20argument\x20must\x20be\x20a\x20string');return Z(this,av);}return X(this,av,aw,ax);}function X(av,aw,ax,ay){if('number'==typeof aw)throw new TypeError('\x22value\x22\x20argument\x20must\x20not\x20be\x20a\x20number');return'undefined'!=typeof ArrayBuffer&&aw instanceof ArrayBuffer?function(az,aA,aB,aC){if(aA['byteLength'],0x0>aB||aA['byteLength']<aB)throw new RangeError('\x27offset\x27\x20is\x20out\x20of\x20bounds');if(aA['byteLength']<aB+(aC||0x0))throw new RangeError('\x27length\x27\x20is\x20out\x20of\x20bounds');return aA=void 0x0===aB&&void 0x0===aC?new Uint8Array(aA):void 0x0===aC?new Uint8Array(aA,aB):new Uint8Array(aA,aB,aC),W['TYPED_ARRAY_SUPPORT']?(az=aA)['__proto__']=W['prototype']:az=a0(az,aA),az;}(av,aw,ax,ay):'string'==typeof aw?function(az,aA,aB){if(('string'!=typeof aB||''===aB)&&(aB='utf8'),!W['isEncoding'](aB))throw new TypeError('\x22encoding\x22\x20must\x20be\x20a\x20valid\x20string\x20encoding');var aC=0x0|a2(aA,aB),aD=(az=V(az,aC))['write'](aA,aB);return aD!==aC&&(az=az['slice'](0x0,aD)),az;}(av,aw,ax):function(az,aA){if(W['isBuffer'](aA)){var aB=0x0|a1(aA['length']);return 0x0===(az=V(az,aB))['length']||aA['copy'](az,0x0,0x0,aB),az;}if(aA){if('undefined'!=typeof ArrayBuffer&&aA['buffer']instanceof ArrayBuffer||'length'in aA)return'number'!=typeof aA['length']||function(aC){return aC!=aC;}(aA['length'])?V(az,0x0):a0(az,aA);if('Buffer'===aA['type']&&Q(aA['data']))return a0(az,aA['data']);}throw new TypeError('First\x20argument\x20must\x20be\x20a\x20string,\x20Buffer,\x20ArrayBuffer,\x20Array,\x20or\x20array-like\x20object.');}(av,aw);}function Y(av){if('number'!=typeof av)throw new TypeError('\x22size\x22\x20argument\x20must\x20be\x20a\x20number');if(0x0>av)throw new RangeError('\x22size\x22\x20argument\x20must\x20not\x20be\x20negative');}function Z(av,aw){if(Y(aw),av=V(av,0x0>aw?0x0:0x0|a1(aw)),!W['TYPED_ARRAY_SUPPORT'])for(var ax=0x0;ax<aw;++ax)av[ax]=0x0;return av;}function a0(av,aw){var ax=0x0>aw['length']?0x0:0x0|a1(aw['length']);av=V(av,ax);for(var ay=0x0;ay<ax;ay+=0x1)av[ay]=0xff&aw[ay];return av;}function a1(av){if(av>=U())throw new RangeError('Attempt\x20to\x20allocate\x20Buffer\x20larger\x20than\x20maximum\x20size:\x200x'+U()['toString'](0x10)+'\x20bytes');return 0x0|av;}function a2(av,aw){if(W['isBuffer'](av))return av['length'];if('undefined'!=typeof ArrayBuffer&&'function'==typeof ArrayBuffer['isView']&&(ArrayBuffer['isView'](av)||av instanceof ArrayBuffer))return av['byteLength'];'string'!=typeof av&&(av=''+av);var ax=av['length'];if(0x0===ax)return 0x0;for(var ay=!0x1;;)switch(aw){case'ascii':case'latin1':case'binary':return ax;case'utf8':case'utf-8':case void 0x0:return as(av)['length'];case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return 0x2*ax;case'hex':return ax>>>0x1;case'base64':return at(av)['length'];default:if(ay)return as(av)['length'];aw=(''+aw)['toLowerCase'](),ay=!0x0;}}function a3(av,aw,ax){var ay=!0x1;if((void 0x0===aw||0x0>aw)&&(aw=0x0),aw>this['length'])return'';if((void 0x0===ax||ax>this['length'])&&(ax=this['length']),0x0>=ax)return'';if((ax>>>=0x0)<=(aw>>>=0x0))return'';for(av||(av='utf8');;)switch(av){case'hex':return ah(this,aw,ax);case'utf8':case'utf-8':return ae(this,aw,ax);case'ascii':return af(this,aw,ax);case'latin1':case'binary':return ag(this,aw,ax);case'base64':return ad(this,aw,ax);case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return ai(this,aw,ax);default:if(ay)throw new TypeError('Unknown\x20encoding:\x20'+av);av=(av+'')['toLowerCase'](),ay=!0x0;}}function a4(av,aw,ax){var ay=av[aw];av[aw]=av[ax],av[ax]=ay;}function a5(av,aw,ax,ay,az){if(0x0===av['length'])return-0x1;if('string'==typeof ax?(ay=ax,ax=0x0):0x7fffffff<ax?ax=0x7fffffff:-0x80000000>ax&&(ax=-0x80000000),ax=+ax,isNaN(ax)&&(ax=az?0x0:av['length']-0x1),0x0>ax&&(ax=av['length']+ax),ax>=av['length']){if(az)return-0x1;ax=av['length']-0x1;}else if(0x0>ax){if(!az)return-0x1;ax=0x0;}if('string'==typeof aw&&(aw=W['from'](aw,ay)),W['isBuffer'](aw))return 0x0===aw['length']?-0x1:a6(av,aw,ax,ay,az);if('number'==typeof aw)return aw&=0xff,W['TYPED_ARRAY_SUPPORT']&&'function'==typeof Uint8Array['prototype']['indexOf']?az?Uint8Array['prototype']['indexOf']['call'](av,aw,ax):Uint8Array['prototype']['lastIndexOf']['call'](av,aw,ax):a6(av,[aw],ax,ay,az);throw new TypeError('val\x20must\x20be\x20string,\x20number\x20or\x20Buffer');}function a6(av,aw,ax,ay,az){function aA(aI,aJ){return 0x1===aC?aI[aJ]:aI['readUInt16BE'](aJ*aC);}var aB,aC=0x1,aD=av['length'],aE=aw['length'];if(void 0x0!==ay&&('ucs2'===(ay=(ay+'')['toLowerCase']())||'ucs-2'===ay||'utf16le'===ay||'utf-16le'===ay)){if(0x2>av['length']||0x2>aw['length'])return-0x1;aC=0x2,aD/=0x2,aE/=0x2,ax/=0x2;}if(az){var aF=-0x1;for(aB=ax;aB<aD;aB++)if(aA(av,aB)!==aA(aw,-0x1===aF?0x0:aB-aF))-0x1!==aF&&(aB-=aB-aF),aF=-0x1;else if(-0x1===aF&&(aF=aB),aB-aF+0x1===aE)return aF*aC;}else for(ax+aE>aD&&(ax=aD-aE),aB=ax;0x0<=aB;aB--){for(var aG=!0x0,aH=0x0;aH<aE;aH++)if(aA(av,aB+aH)!==aA(aw,aH)){aG=!0x1;break;}if(aG)return aB;}return-0x1;}function a7(av,aw,ax,ay){ax=+ax||0x0;var az=av['length']-ax;ay?(ay=+ay)>az&&(ay=az):ay=az;var aA=aw['length'];if(0x0!=aA%0x2)throw new TypeError('Invalid\x20hex\x20string');ay>aA/0x2&&(ay=aA/0x2);for(var aB,aC=0x0;aC<ay;++aC){if(aB=parseInt(aw['substr'](0x2*aC,0x2),0x10),isNaN(aB))return aC;av[ax+aC]=aB;}return aC;}function a8(av,aw,ax,ay){return au(as(aw,av['length']-ax),av,ax,ay);}function a9(av,aw,ax,ay){return au(function(az){for(var aA=[],aB=0x0;aB<az['length'];++aB)aA['push'](0xff&az['charCodeAt'](aB));return aA;}(aw),av,ax,ay);}function aa(av,aw,ax,ay){return a9(av,aw,ax,ay);}function ab(av,aw,ax,ay){return au(at(aw),av,ax,ay);}function ac(av,aw,ax,ay){return au(function(az,aA){for(var aB,aC,aD,aE=[],aF=0x0;aF<az['length']&&!(0x0>(aA-=0x2));++aF)aB=az['charCodeAt'](aF),aC=aB>>0x8,aD=aB%0x100,aE['push'](aD),aE['push'](aC);return aE;}(aw,av['length']-ax),av,ax,ay);}function ad(av,aw,ax){return 0x0===aw&&ax===av['length']?J['fromByteArray'](av):J['fromByteArray'](av['slice'](aw,ax));}function ae(av,aw,ax){ax=Math['min'](av['length'],ax);for(var ay=[],az=aw;az<ax;){var aA,aB,aC,aD,aE=av[az],aF=null,aG=0xef<aE?0x4:0xdf<aE?0x3:0xbf<aE?0x2:0x1;if(az+aG<=ax)0x1===aG?0x80>aE&&(aF=aE):0x2===aG?0x80==(0xc0&(aA=av[az+0x1]))&&(0x7f<(aD=(0x1f&aE)<<0x6|0x3f&aA)&&(aF=aD)):0x3===aG?(aA=av[az+0x1],aB=av[az+0x2],0x80==(0xc0&aA)&&0x80==(0xc0&aB)&&(0x7ff<(aD=(0xf&aE)<<0xc|(0x3f&aA)<<0x6|0x3f&aB)&&(0xd800>aD||0xdfff<aD)&&(aF=aD))):0x4===aG&&(aA=av[az+0x1],aB=av[az+0x2],aC=av[az+0x3],0x80==(0xc0&aA)&&0x80==(0xc0&aB)&&0x80==(0xc0&aC)&&(0xffff<(aD=(0xf&aE)<<0x12|(0x3f&aA)<<0xc|(0x3f&aB)<<0x6|0x3f&aC)&&0x110000>aD&&(aF=aD)));null===aF?(aF=0xfffd,aG=0x1):0xffff<aF&&(aF-=0x10000,ay['push'](0xd800|0x3ff&aF>>>0xa),aF=0xdc00|0x3ff&aF),ay['push'](aF),az+=aG;}return function(aH){var aI=aH['length'];if(aI<=0x1000)return String['fromCharCode']['apply'](String,aH);for(var aJ='',aK=0x0;aK<aI;)aJ+=String['fromCharCode']['apply'](String,aH['slice'](aK,aK+=0x1000));return aJ;}(ay);}b['Buffer']=W,b['SlowBuffer']=function(av){return+av!=av&&(av=0x0),W['alloc'](+av);},b['INSPECT_MAX_BYTES']=0x32,W['TYPED_ARRAY_SUPPORT']=void 0x0===q['TYPED_ARRAY_SUPPORT']?function(){try{var av=new Uint8Array(0x1);return av['__proto__']={'__proto__':Uint8Array['prototype'],'foo':function(){return 0x2a;}},0x2a===av['foo']()&&'function'==typeof av['subarray']&&0x0===av['subarray'](0x1,0x1)['byteLength'];}catch(aw){return!0x1;}}():q['TYPED_ARRAY_SUPPORT'],b['kMaxLength']=U(),W['poolSize']=0x2000,W['_augment']=function(av){return av['__proto__']=W['prototype'],av;},W['from']=function(av,aw,ax){return X(null,av,aw,ax);},W['TYPED_ARRAY_SUPPORT']&&(W['prototype']['__proto__']=Uint8Array['prototype'],W['__proto__']=Uint8Array,'undefined'!=typeof Symbol&&Symbol['species']&&W[Symbol['species']]===W&&Object['defineProperty'](W,Symbol['species'],{'value':null,'configurable':!0x0})),W['alloc']=function(av,aw,ax){return function(ay,az,aA,aB){return Y(az),0x0>=az||void 0x0===aA?V(ay,az):'string'==typeof aB?V(ay,az)['fill'](aA,aB):V(ay,az)['fill'](aA);}(null,av,aw,ax);},W['allocUnsafe']=function(av){return Z(null,av);},W['allocUnsafeSlow']=function(av){return Z(null,av);},W['isBuffer']=function(av){return!(null==av||!av['_isBuffer']);},W['compare']=function(av,aw){if(!W['isBuffer'](av)||!W['isBuffer'](aw))throw new TypeError('Arguments\x20must\x20be\x20Buffers');if(av===aw)return 0x0;for(var ax=av['length'],ay=aw['length'],az=0x0,aA=Math['min'](ax,ay);az<aA;++az)if(av[az]!==aw[az]){ax=av[az],ay=aw[az];break;}return ax<ay?-0x1:ay<ax?0x1:0x0;},W['isEncoding']=function(av){switch((av+'')['toLowerCase']()){case'hex':case'utf8':case'utf-8':case'ascii':case'latin1':case'binary':case'base64':case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return!0x0;default:return!0x1;}},W['concat']=function(av,aw){if(!Q(av))throw new TypeError('\x22list\x22\x20argument\x20must\x20be\x20an\x20Array\x20of\x20Buffers');if(0x0===av['length'])return W['alloc'](0x0);var ax;if(void 0x0===aw)for(aw=0x0,ax=0x0;ax<av['length'];++ax)aw+=av[ax]['length'];var ay=W['allocUnsafe'](aw),az=0x0;for(ax=0x0;ax<av['length'];++ax){var aA=av[ax];if(!W['isBuffer'](aA))throw new TypeError('\x22list\x22\x20argument\x20must\x20be\x20an\x20Array\x20of\x20Buffers');aA['copy'](ay,az),az+=aA['length'];}return ay;},W['byteLength']=a2,W['prototype']['_isBuffer']=!0x0,W['prototype']['swap16']=function(){var av=this['length'];if(0x0!=av%0x2)throw new RangeError('Buffer\x20size\x20must\x20be\x20a\x20multiple\x20of\x2016-bits');for(var aw=0x0;aw<av;aw+=0x2)a4(this,aw,aw+0x1);return this;},W['prototype']['swap32']=function(){var av=this['length'];if(0x0!=av%0x4)throw new RangeError('Buffer\x20size\x20must\x20be\x20a\x20multiple\x20of\x2032-bits');for(var aw=0x0;aw<av;aw+=0x4)a4(this,aw,aw+0x3),a4(this,aw+0x1,aw+0x2);return this;},W['prototype']['swap64']=function(){var av=this['length'];if(0x0!=av%0x8)throw new RangeError('Buffer\x20size\x20must\x20be\x20a\x20multiple\x20of\x2064-bits');for(var aw=0x0;aw<av;aw+=0x8)a4(this,aw,aw+0x7),a4(this,aw+0x1,aw+0x6),a4(this,aw+0x2,aw+0x5),a4(this,aw+0x3,aw+0x4);return this;},W['prototype']['toString']=function(){var av=0x0|this['length'];return 0x0==av?'':0x0===arguments['length']?ae(this,0x0,av):a3['apply'](this,arguments);},W['prototype']['equals']=function(av){if(!W['isBuffer'](av))throw new TypeError('Argument\x20must\x20be\x20a\x20Buffer');return this===av||0x0===W['compare'](this,av);},W['prototype']['inspect']=function(){var av='',aw=b['INSPECT_MAX_BYTES'];return 0x0<this['length']&&(av=this['toString']('hex',0x0,aw)['match'](/.{2}/g)['join']('\x20'),this['length']>aw&&(av+='\x20...\x20')),'<Buffer\x20'+av+'>';},W['prototype']['compare']=function(av,aw,ax,ay,az){if(!W['isBuffer'](av))throw new TypeError('Argument\x20must\x20be\x20a\x20Buffer');if(void 0x0===aw&&(aw=0x0),void 0x0===ax&&(ax=av?av['length']:0x0),void 0x0===ay&&(ay=0x0),void 0x0===az&&(az=this['length']),0x0>aw||ax>av['length']||0x0>ay||az>this['length'])throw new RangeError('out\x20of\x20range\x20index');if(ay>=az&&aw>=ax)return 0x0;if(ay>=az)return-0x1;if(aw>=ax)return 0x1;if(this===av)return 0x0;for(var aA=(az>>>=0x0)-(ay>>>=0x0),aB=(ax>>>=0x0)-(aw>>>=0x0),aC=Math['min'](aA,aB),aD=this['slice'](ay,az),aE=av['slice'](aw,ax),aF=0x0;aF<aC;++aF)if(aD[aF]!==aE[aF]){aA=aD[aF],aB=aE[aF];break;}return aA<aB?-0x1:aB<aA?0x1:0x0;},W['prototype']['includes']=function(av,aw,ax){return-0x1!==this['indexOf'](av,aw,ax);},W['prototype']['indexOf']=function(av,aw,ax){return a5(this,av,aw,ax,!0x0);},W['prototype']['lastIndexOf']=function(av,aw,ax){return a5(this,av,aw,ax,!0x1);},W['prototype']['write']=function(av,aw,ax,ay){if(void 0x0===aw)ay='utf8',ax=this['length'],aw=0x0;else if(void 0x0===ax&&'string'==typeof aw)ay=aw,ax=this['length'],aw=0x0;else{if(!isFinite(aw))throw new Error('Buffer.write(string,\x20encoding,\x20offset[,\x20length])\x20is\x20no\x20longer\x20supported');aw|=0x0,isFinite(ax)?(ax|=0x0,void 0x0===ay&&(ay='utf8')):(ay=ax,ax=void 0x0);}var az=this['length']-aw;if((void 0x0===ax||ax>az)&&(ax=az),0x0<av['length']&&(0x0>ax||0x0>aw)||aw>this['length'])throw new RangeError('Attempt\x20to\x20write\x20outside\x20buffer\x20bounds');ay||(ay='utf8');for(var aA=!0x1;;)switch(ay){case'hex':return a7(this,av,aw,ax);case'utf8':case'utf-8':return a8(this,av,aw,ax);case'ascii':return a9(this,av,aw,ax);case'latin1':case'binary':return aa(this,av,aw,ax);case'base64':return ab(this,av,aw,ax);case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return ac(this,av,aw,ax);default:if(aA)throw new TypeError('Unknown\x20encoding:\x20'+ay);ay=(''+ay)['toLowerCase'](),aA=!0x0;}},W['prototype']['toJSON']=function(){return{'type':'Buffer','data':Array['prototype']['slice']['call'](this['_arr']||this,0x0)};};function af(av,aw,ax){var ay='';ax=Math['min'](av['length'],ax);for(var az=aw;az<ax;++az)ay+=String['fromCharCode'](0x7f&av[az]);return ay;}function ag(av,aw,ax){var ay='';ax=Math['min'](av['length'],ax);for(var az=aw;az<ax;++az)ay+=String['fromCharCode'](av[az]);return ay;}function ah(av,aw,ax){var ay=av['length'];(!aw||0x0>aw)&&(aw=0x0),(!ax||0x0>ax||ax>ay)&&(ax=ay);for(var az='',aA=aw;aA<ax;++aA)az+=ar(av[aA]);return az;}function ai(av,aw,ax){for(var ay=av['slice'](aw,ax),az='',aA=0x0;aA<ay['length'];aA+=0x2)az+=String['fromCharCode'](ay[aA]+0x100*ay[aA+0x1]);return az;}function aj(av,aw,ax){if(0x0!=av%0x1||0x0>av)throw new RangeError('offset\x20is\x20not\x20uint');if(av+aw>ax)throw new RangeError('Trying\x20to\x20access\x20beyond\x20buffer\x20length');}function ak(av,aw,ax,ay,az,aA){if(!W['isBuffer'](av))throw new TypeError('\x22buffer\x22\x20argument\x20must\x20be\x20a\x20Buffer\x20instance');if(aw>az||aw<aA)throw new RangeError('\x22value\x22\x20argument\x20is\x20out\x20of\x20bounds');if(ax+ay>av['length'])throw new RangeError('Index\x20out\x20of\x20range');}function al(av,aw,ax,ay){0x0>aw&&(aw=0xffff+aw+0x1);for(var az=0x0,aA=Math['min'](av['length']-ax,0x2);az<aA;++az)av[ax+az]=(aw&0xff<<0x8*(ay?az:0x1-az))>>>0x8*(ay?az:0x1-az);}function am(av,aw,ax,ay){0x0>aw&&(aw=0xffffffff+aw+0x1);for(var az=0x0,aA=Math['min'](av['length']-ax,0x4);az<aA;++az)av[ax+az]=0xff&aw>>>0x8*(ay?az:0x3-az);}function an(av,aw,ax,ay){if(ax+ay>av['length'])throw new RangeError('Index\x20out\x20of\x20range');if(0x0>ax)throw new RangeError('Index\x20out\x20of\x20range');}function ao(av,aw,ax,ay,az){return az||an(av,0x0,ax,0x4),K['write'](av,aw,ax,ay,0x17,0x4),ax+0x4;}function ap(av,aw,ax,ay,az){return az||an(av,0x0,ax,0x8),K['write'](av,aw,ax,ay,0x34,0x8),ax+0x8;}W['prototype']['slice']=function(av,aw){var ax,ay=this['length'];if(0x0>(av=~~av)?0x0>(av+=ay)&&(av=0x0):av>ay&&(av=ay),0x0>(aw=void 0x0===aw?ay:~~aw)?0x0>(aw+=ay)&&(aw=0x0):aw>ay&&(aw=ay),aw<av&&(aw=av),W['TYPED_ARRAY_SUPPORT'])(ax=this['subarray'](av,aw))['__proto__']=W['prototype'];else{var az=aw-av;ax=new W(az,void 0x0);for(var aA=0x0;aA<az;++aA)ax[aA]=this[aA+av];}return ax;},W['prototype']['readUIntLE']=function(av,aw,ax){av|=0x0,aw|=0x0,ax||aj(av,aw,this['length']);for(var ay=this[av],az=0x1,aA=0x0;++aA<aw&&(az*=0x100);)ay+=this[av+aA]*az;return ay;},W['prototype']['readUIntBE']=function(av,aw,ax){av|=0x0,aw|=0x0,ax||aj(av,aw,this['length']);for(var ay=this[av+--aw],az=0x1;0x0<aw&&(az*=0x100);)ay+=this[av+--aw]*az;return ay;},W['prototype']['readUInt8']=function(av,aw){return aw||aj(av,0x1,this['length']),this[av];},W['prototype']['readUInt16LE']=function(av,aw){return aw||aj(av,0x2,this['length']),this[av]|this[av+0x1]<<0x8;},W['prototype']['readUInt16BE']=function(av,aw){return aw||aj(av,0x2,this['length']),this[av]<<0x8|this[av+0x1];},W['prototype']['readUInt32LE']=function(av,aw){return aw||aj(av,0x4,this['length']),(this[av]|this[av+0x1]<<0x8|this[av+0x2]<<0x10)+0x1000000*this[av+0x3];},W['prototype']['readUInt32BE']=function(av,aw){return aw||aj(av,0x4,this['length']),0x1000000*this[av]+(this[av+0x1]<<0x10|this[av+0x2]<<0x8|this[av+0x3]);},W['prototype']['readIntLE']=function(av,aw,ax){av|=0x0,aw|=0x0,ax||aj(av,aw,this['length']);for(var ay=this[av],az=0x1,aA=0x0;++aA<aw&&(az*=0x100);)ay+=this[av+aA]*az;return ay>=(az*=0x80)&&(ay-=Math['pow'](0x2,0x8*aw)),ay;},W['prototype']['readIntBE']=function(av,aw,ax){av|=0x0,aw|=0x0,ax||aj(av,aw,this['length']);for(var ay=aw,az=0x1,aA=this[av+--ay];0x0<ay&&(az*=0x100);)aA+=this[av+--ay]*az;return aA>=(az*=0x80)&&(aA-=Math['pow'](0x2,0x8*aw)),aA;},W['prototype']['readInt8']=function(av,aw){return aw||aj(av,0x1,this['length']),0x80&this[av]?-0x1*(0xff-this[av]+0x1):this[av];},W['prototype']['readInt16LE']=function(av,aw){aw||aj(av,0x2,this['length']);var ax=this[av]|this[av+0x1]<<0x8;return 0x8000&ax?0xffff0000|ax:ax;},W['prototype']['readInt16BE']=function(av,aw){aw||aj(av,0x2,this['length']);var ax=this[av+0x1]|this[av]<<0x8;return 0x8000&ax?0xffff0000|ax:ax;},W['prototype']['readInt32LE']=function(av,aw){return aw||aj(av,0x4,this['length']),this[av]|this[av+0x1]<<0x8|this[av+0x2]<<0x10|this[av+0x3]<<0x18;},W['prototype']['readInt32BE']=function(av,aw){return aw||aj(av,0x4,this['length']),this[av]<<0x18|this[av+0x1]<<0x10|this[av+0x2]<<0x8|this[av+0x3];},W['prototype']['readFloatLE']=function(av,aw){return aw||aj(av,0x4,this['length']),K['read'](this,av,!0x0,0x17,0x4);},W['prototype']['readFloatBE']=function(av,aw){return aw||aj(av,0x4,this['length']),K['read'](this,av,!0x1,0x17,0x4);},W['prototype']['readDoubleLE']=function(av,aw){return aw||aj(av,0x8,this['length']),K['read'](this,av,!0x0,0x34,0x8);},W['prototype']['readDoubleBE']=function(av,aw){return aw||aj(av,0x8,this['length']),K['read'](this,av,!0x1,0x34,0x8);},W['prototype']['writeUIntLE']=function(av,aw,ax,ay){(av=+av,aw|=0x0,ax|=0x0,ay)||ak(this,av,aw,ax,Math['pow'](0x2,0x8*ax)-0x1,0x0);var az=0x1,aA=0x0;for(this[aw]=0xff&av;++aA<ax&&(az*=0x100);)this[aw+aA]=0xff&av/az;return aw+ax;},W['prototype']['writeUIntBE']=function(av,aw,ax,ay){(av=+av,aw|=0x0,ax|=0x0,ay)||ak(this,av,aw,ax,Math['pow'](0x2,0x8*ax)-0x1,0x0);var az=ax-0x1,aA=0x1;for(this[aw+az]=0xff&av;0x0<=--az&&(aA*=0x100);)this[aw+az]=0xff&av/aA;return aw+ax;},W['prototype']['writeUInt8']=function(av,aw,ax){return av=+av,aw|=0x0,ax||ak(this,av,aw,0x1,0xff,0x0),W['TYPED_ARRAY_SUPPORT']||(av=Math['floor'](av)),this[aw]=0xff&av,aw+0x1;},W['prototype']['writeUInt16LE']=function(av,aw,ax){return av=+av,aw|=0x0,ax||ak(this,av,aw,0x2,0xffff,0x0),W['TYPED_ARRAY_SUPPORT']?(this[aw]=0xff&av,this[aw+0x1]=av>>>0x8):al(this,av,aw,!0x0),aw+0x2;},W['prototype']['writeUInt16BE']=function(av,aw,ax){return av=+av,aw|=0x0,ax||ak(this,av,aw,0x2,0xffff,0x0),W['TYPED_ARRAY_SUPPORT']?(this[aw]=av>>>0x8,this[aw+0x1]=0xff&av):al(this,av,aw,!0x1),aw+0x2;},W['prototype']['writeUInt32LE']=function(av,aw,ax){return av=+av,aw|=0x0,ax||ak(this,av,aw,0x4,0xffffffff,0x0),W['TYPED_ARRAY_SUPPORT']?(this[aw+0x3]=av>>>0x18,this[aw+0x2]=av>>>0x10,this[aw+0x1]=av>>>0x8,this[aw]=0xff&av):am(this,av,aw,!0x0),aw+0x4;},W['prototype']['writeUInt32BE']=function(av,aw,ax){return av=+av,aw|=0x0,ax||ak(this,av,aw,0x4,0xffffffff,0x0),W['TYPED_ARRAY_SUPPORT']?(this[aw]=av>>>0x18,this[aw+0x1]=av>>>0x10,this[aw+0x2]=av>>>0x8,this[aw+0x3]=0xff&av):am(this,av,aw,!0x1),aw+0x4;},W['prototype']['writeIntLE']=function(av,aw,ax,ay){if(av=+av,aw|=0x0,!ay){var az=Math['pow'](0x2,0x8*ax-0x1);ak(this,av,aw,ax,az-0x1,-az);}var aA=0x0,aB=0x1,aC=0x0;for(this[aw]=0xff&av;++aA<ax&&(aB*=0x100);)0x0>av&&0x0===aC&&0x0!==this[aw+aA-0x1]&&(aC=0x1),this[aw+aA]=0xff&(av/aB>>0x0)-aC;return aw+ax;},W['prototype']['writeIntBE']=function(av,aw,ax,ay){if(av=+av,aw|=0x0,!ay){var az=Math['pow'](0x2,0x8*ax-0x1);ak(this,av,aw,ax,az-0x1,-az);}var aA=ax-0x1,aB=0x1,aC=0x0;for(this[aw+aA]=0xff&av;0x0<=--aA&&(aB*=0x100);)0x0>av&&0x0===aC&&0x0!==this[aw+aA+0x1]&&(aC=0x1),this[aw+aA]=0xff&(av/aB>>0x0)-aC;return aw+ax;},W['prototype']['writeInt8']=function(av,aw,ax){return av=+av,aw|=0x0,ax||ak(this,av,aw,0x1,0x7f,-0x80),W['TYPED_ARRAY_SUPPORT']||(av=Math['floor'](av)),0x0>av&&(av=0xff+av+0x1),this[aw]=0xff&av,aw+0x1;},W['prototype']['writeInt16LE']=function(av,aw,ax){return av=+av,aw|=0x0,ax||ak(this,av,aw,0x2,0x7fff,-0x8000),W['TYPED_ARRAY_SUPPORT']?(this[aw]=0xff&av,this[aw+0x1]=av>>>0x8):al(this,av,aw,!0x0),aw+0x2;},W['prototype']['writeInt16BE']=function(av,aw,ax){return av=+av,aw|=0x0,ax||ak(this,av,aw,0x2,0x7fff,-0x8000),W['TYPED_ARRAY_SUPPORT']?(this[aw]=av>>>0x8,this[aw+0x1]=0xff&av):al(this,av,aw,!0x1),aw+0x2;},W['prototype']['writeInt32LE']=function(av,aw,ax){return av=+av,aw|=0x0,ax||ak(this,av,aw,0x4,0x7fffffff,-0x80000000),W['TYPED_ARRAY_SUPPORT']?(this[aw]=0xff&av,this[aw+0x1]=av>>>0x8,this[aw+0x2]=av>>>0x10,this[aw+0x3]=av>>>0x18):am(this,av,aw,!0x0),aw+0x4;},W['prototype']['writeInt32BE']=function(av,aw,ax){return av=+av,aw|=0x0,ax||ak(this,av,aw,0x4,0x7fffffff,-0x80000000),0x0>av&&(av=0xffffffff+av+0x1),W['TYPED_ARRAY_SUPPORT']?(this[aw]=av>>>0x18,this[aw+0x1]=av>>>0x10,this[aw+0x2]=av>>>0x8,this[aw+0x3]=0xff&av):am(this,av,aw,!0x1),aw+0x4;},W['prototype']['writeFloatLE']=function(av,aw,ax){return ao(this,av,aw,!0x0,ax);},W['prototype']['writeFloatBE']=function(av,aw,ax){return ao(this,av,aw,!0x1,ax);},W['prototype']['writeDoubleLE']=function(av,aw,ax){return ap(this,av,aw,!0x0,ax);},W['prototype']['writeDoubleBE']=function(av,aw,ax){return ap(this,av,aw,!0x1,ax);},W['prototype']['copy']=function(av,aw,ax,ay){if(ax||(ax=0x0),ay||0x0===ay||(ay=this['length']),aw>=av['length']&&(aw=av['length']),aw||(aw=0x0),0x0<ay&&ay<ax&&(ay=ax),ay===ax)return 0x0;if(0x0===av['length']||0x0===this['length'])return 0x0;if(0x0>aw)throw new RangeError('targetStart\x20out\x20of\x20bounds');if(0x0>ax||ax>=this['length'])throw new RangeError('sourceStart\x20out\x20of\x20bounds');if(0x0>ay)throw new RangeError('sourceEnd\x20out\x20of\x20bounds');ay>this['length']&&(ay=this['length']),av['length']-aw<ay-ax&&(ay=av['length']-aw+ax);var az,aA=ay-ax;if(this===av&&ax<aw&&aw<ay)for(az=aA-0x1;0x0<=az;--az)av[az+aw]=this[az+ax];else if(0x3e8>aA||!W['TYPED_ARRAY_SUPPORT'])for(az=0x0;az<aA;++az)av[az+aw]=this[az+ax];else Uint8Array['prototype']['set']['call'](av,this['subarray'](ax,ax+aA),aw);return aA;},W['prototype']['fill']=function(av,aw,ax,ay){if('string'==typeof av){if('string'==typeof aw?(ay=aw,aw=0x0,ax=this['length']):'string'==typeof ax&&(ay=ax,ax=this['length']),0x1===av['length']){var az=av['charCodeAt'](0x0);0x100>az&&(av=az);}if(void 0x0!==ay&&'string'!=typeof ay)throw new TypeError('encoding\x20must\x20be\x20a\x20string');if('string'==typeof ay&&!W['isEncoding'](ay))throw new TypeError('Unknown\x20encoding:\x20'+ay);}else'number'==typeof av&&(av&=0xff);if(0x0>aw||this['length']<aw||this['length']<ax)throw new RangeError('Out\x20of\x20range\x20index');if(ax<=aw)return this;var aA;if(aw>>>=0x0,ax=void 0x0===ax?this['length']:ax>>>0x0,av||(av=0x0),'number'==typeof av)for(aA=aw;aA<ax;++aA)this[aA]=av;else{var aB=W['isBuffer'](av)?av:as(new W(av,ay)['toString']()),aC=aB['length'];for(aA=0x0;aA<ax-aw;++aA)this[aA+aw]=aB[aA%aC];}return this;};var aq=/[^+\/0-9A-Za-z-_]/g;function ar(av){return 0x10>av?'0'+av['toString'](0x10):av['toString'](0x10);}function as(av,aw){aw=aw||0x1/0x0;for(var ax,ay=av['length'],az=null,aA=[],aB=0x0;aB<ay;++aB){if(0xd7ff<(ax=av['charCodeAt'](aB))&&0xe000>ax){if(!az){if(0xdbff<ax){-0x1<(aw-=0x3)&&aA['push'](0xef,0xbf,0xbd);continue;}if(aB+0x1===ay){-0x1<(aw-=0x3)&&aA['push'](0xef,0xbf,0xbd);continue;}az=ax;continue;}if(0xdc00>ax){-0x1<(aw-=0x3)&&aA['push'](0xef,0xbf,0xbd),az=ax;continue;}ax=0x10000+(az-0xd800<<0xa|ax-0xdc00);}else az&&-0x1<(aw-=0x3)&&aA['push'](0xef,0xbf,0xbd);if(az=null,0x80>ax){if(0x0>(aw-=0x1))break;aA['push'](ax);}else if(0x800>ax){if(0x0>(aw-=0x2))break;aA['push'](0xc0|ax>>0x6,0x80|0x3f&ax);}else if(0x10000>ax){if(0x0>(aw-=0x3))break;aA['push'](0xe0|ax>>0xc,0x80|0x3f&ax>>0x6,0x80|0x3f&ax);}else{if(!(0x110000>ax))throw new Error('Invalid\x20code\x20point');if(0x0>(aw-=0x4))break;aA['push'](0xf0|ax>>0x12,0x80|0x3f&ax>>0xc,0x80|0x3f&ax>>0x6,0x80|0x3f&ax);}}return aA;}function at(av){return J['toByteArray'](function(aw){if(0x2>(aw=function(ax){return ax['trim']?ax['trim']():ax['replace'](/^\s+|\s+$/g,'');}(aw)['replace'](aq,''))['length'])return'';for(;0x0!=aw['length']%0x4;)aw+='=';return aw;}(av));}function au(av,aw,ax,ay){for(var az=0x0;az<ay&&!(az+ax>=aw['length']||az>=av['length']);++az)aw[az+ax]=av[az];return az;}}['call'](this,c(0x1c)));},function(a,b){for(var c=b['uint8']=Array(0x100),d=0x0;0xff>=d;d++)c[d]=f(d);function f(g){return function(h){var j=h['reserve'](0x1);h['buffer'][j]=g;};}},function(b,f,g){f['FlexDecoder']=j,f['FlexEncoder']=k;var h=g(0x0);function j(){if(!(this instanceof j))return new j();}function k(){if(!(this instanceof k))return new k();}function m(){throw new Error('method\x20not\x20implemented:\x20write()');}function q(){throw new Error('method\x20not\x20implemented:\x20fetch()');}function u(){return this['buffers']&&this['buffers']['length']?(this['flush'](),this['pull']()):this['fetch']();}function v(y){(this['buffers']||(this['buffers']=[]))['push'](y);}function w(){return(this['buffers']||(this['buffers']=[]))['shift']();}function x(y){return function(z){for(var A in y)z[A]=y[A];return z;};}j['mixin']=x({'bufferish':h,'write':function(y){var z=this['offset']?h['prototype']['slice']['call'](this['buffer'],this['offset']):this['buffer'];this['buffer']=z?y?this['bufferish']['concat']([z,y]):z:y,this['offset']=0x0;},'fetch':q,'flush':function(){for(;this['offset']<this['buffer']['length'];){var y,z=this['offset'];try{y=this['fetch']();}catch(A){if(A&&'BUFFER_SHORTAGE'!=A['message'])throw A;this['offset']=z;break;}this['push'](y);}},'push':v,'pull':w,'read':u,'reserve':function(y){var z=this['offset'],A=z+y;if(A>this['buffer']['length'])throw new Error('BUFFER_SHORTAGE');return this['offset']=A,z;},'offset':0x0}),j['mixin'](j['prototype']),k['mixin']=x({'bufferish':h,'write':m,'fetch':function(){var y=this['start'];if(y<this['offset']){var z=this['start']=this['offset'];return h['prototype']['slice']['call'](this['buffer'],y,z);}},'flush':function(){for(;this['start']<this['offset'];){var y=this['fetch']();y&&this['push'](y);}},'push':v,'pull':function(){var y=this['buffers']||(this['buffers']=[]),z=0x1<y['length']?this['bufferish']['concat'](y):y[0x0];return y['length']=0x0,z;},'read':u,'reserve':function(y){var z=0x0|y;if(this['buffer']){var A=this['buffer']['length'],B=0x0|this['offset'],C=B+z;if(C<A)return this['offset']=C,B;this['flush'](),y=Math['max'](y,Math['min'](0x2*A,this['maxBufferSize']));}return y=Math['max'](y,this['minBufferSize']),this['buffer']=this['bufferish']['alloc'](y),this['start']=0x0,this['offset']=z,0x0;},'send':function(y){var z=y['length'];if(z>this['minBufferSize'])this['flush'](),this['push'](y);else{var A=this['reserve'](z);h['prototype']['copy']['call'](y,this['buffer'],A);}},'maxBufferSize':0x10000,'minBufferSize':0x800,'offset':0x0,'start':0x0}),k['mixin'](k['prototype']);},function(a,b,c){b['decode']=function(f,g){var h=new d(g);return h['write'](f),h['read']();};var d=c(0x18)['DecodeBuffer'];},function(a,b,c){b['DecodeBuffer']=f;var d=c(0xc)['preset'];function f(g){if(!(this instanceof f))return new f(g);if(g&&(this['options']=g,g['codec'])){var h=this['codec']=g['codec'];h['bufferish']&&(this['bufferish']=h['bufferish']);}}c(0x16)['FlexDecoder']['mixin'](f['prototype']),f['prototype']['codec']=d,f['prototype']['fetch']=function(){return this['codec']['decode'](this);};},function(j,q,z){var B=z(0x9),D=z(0xb),E=D['Uint64BE'],F=D['Int64BE'];q['getReadFormat']=function(a7){var a8=G['hasArrayBuffer']&&a7&&a7['binarraybuffer'],a9=a7&&a7['int64'];return{'map':I&&a7&&a7['usemap']?K:J,'array':L,'str':N,'bin':a8?Q:P,'ext':R,'uint8':U,'uint16':W,'uint32':Y,'uint64':a0(0x8,a9?a3:a1),'int8':V,'int16':X,'int32':Z,'int64':a0(0x8,a9?a4:a2),'float32':a0(0x4,a5),'float64':a0(0x8,a6)};},q['readUint8']=U;var G=z(0x0),H=z(0xa),I='undefined'!=typeof Map;function J(a7,a8){var a9,aa={},ab=Array(a8),ac=Array(a8),ad=a7['codec']['decode'];for(a9=0x0;a9<a8;a9++)ab[a9]=ad(a7),ac[a9]=ad(a7);for(a9=0x0;a9<a8;a9++)aa[ab[a9]]=ac[a9];return aa;}function K(a7,a8){var a9,aa=new Map(),ab=Array(a8),ac=Array(a8),ad=a7['codec']['decode'];for(a9=0x0;a9<a8;a9++)ab[a9]=ad(a7),ac[a9]=ad(a7);for(a9=0x0;a9<a8;a9++)aa['set'](ab[a9],ac[a9]);return aa;}function L(a7,a8){for(var a9=Array(a8),aa=a7['codec']['decode'],ab=0x0;ab<a8;ab++)a9[ab]=aa(a7);return a9;}function N(a7,a8){var a9=a7['reserve'](a8);return H['toString']['call'](a7['buffer'],'utf-8',a9,a9+a8);}function P(a7,a8){var a9=a7['reserve'](a8),aa=H['slice']['call'](a7['buffer'],a9,a9+a8);return G['from'](aa);}function Q(a7,a8){var a9=a7['reserve'](a8),aa=H['slice']['call'](a7['buffer'],a9,a9+a8);return G['Uint8Array']['from'](aa)['buffer'];}function R(a7,a8){var a9=a7['reserve'](a8+0x1),aa=a7['buffer'][a9++],ab=a9+a8,ac=a7['codec']['getExtUnpacker'](aa);if(!ac)throw new Error('Invalid\x20ext\x20type:\x20'+(aa?'0x'+aa['toString'](0x10):aa));return ac(H['slice']['call'](a7['buffer'],a9,ab));}function U(a7){var a8=a7['reserve'](0x1);return a7['buffer'][a8];}function V(a7){var a8=a7['reserve'](0x1),a9=a7['buffer'][a8];return 0x80&a9?a9-0x100:a9;}function W(a7){var a8=a7['reserve'](0x2),a9=a7['buffer'];return a9[a8++]<<0x8|a9[a8];}function X(a7){var a8=a7['reserve'](0x2),a9=a7['buffer'],aa=a9[a8++]<<0x8|a9[a8];return 0x8000&aa?aa-0x10000:aa;}function Y(a7){var a8=a7['reserve'](0x4),a9=a7['buffer'];return 0x1000000*a9[a8++]+(a9[a8++]<<0x10)+(a9[a8++]<<0x8)+a9[a8];}function Z(a7){var a8=a7['reserve'](0x4),a9=a7['buffer'];return a9[a8++]<<0x18|a9[a8++]<<0x10|a9[a8++]<<0x8|a9[a8];}function a0(a7,a8){return function(a9){var aa=a9['reserve'](a7);return a8['call'](a9['buffer'],aa,!0x0);};}function a1(a7){return new E(this,a7)['toNumber']();}function a2(a7){return new F(this,a7)['toNumber']();}function a3(a7){return new E(this,a7);}function a4(a7){return new F(this,a7);}function a5(a7){return B['read'](this,a7,!0x1,0x17,0x4);}function a6(a7){return B['read'](this,a7,!0x1,0x34,0x8);}},function(a,b,c){!function(d){function f(k){for(var l in j)k[l]=j[l];return k;}function g(k,l){function m(q){return q!==l&&q['originalListener']!==l;}var o,p=this;if(arguments['length']){if(l){if(o=h(p,k,!0x0)){if(!(o=o['filter'](m))['length'])return g['call'](p,k);p['listeners'][k]=o;}}else if((o=p['listeners'])&&(delete o[k],!Object['keys'](o)['length']))return g['call'](p);}else delete p['listeners'];return p;}function h(k,l,m){if(!m||k['listeners']){var o=k['listeners']||(k['listeners']={});return o[l]||(o[l]=[]);}}a['exports']=d;var j={'on':function(k,l){return h(this,k)['push'](l),this;},'once':function(k,l){function m(){g['call'](o,k,m),l['apply'](this,arguments);}var o=this;return m['originalListener']=l,h(o,k)['push'](m),o;},'off':g,'emit':function(k,l){function m(w){w['apply'](p,v);}var p=this,q=h(p,k,!0x0);if(!q)return!0x1;var u=arguments['length'];if(0x1===u)q['forEach'](function(w){w['call'](p);});else if(0x2===u)q['forEach'](function(w){w['call'](p,l);});else{var v=Array['prototype']['slice']['call'](arguments,0x1);q['forEach'](m);}return!!q['length'];}};f(d['prototype']),d['mixin']=f;}(/**
 * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
 *
 * @copyright Yusuke Kawasaki
 * @license MIT
 * @constructor
 * @see https://github.com/kawanet/event-lite
 * @see http://kawanet.github.io/event-lite/EventLite.html
 * @example
 * var EventLite = require("event-lite");
 *
 * function MyClass() {...}             // your class
 *
 * EventLite.mixin(MyClass.prototype);  // import event methods
 *
 * var obj = new MyClass();
 * obj.on("foo", function() {...});     // add event listener
 * obj.once("bar", function() {...});   // add one-time event listener
 * obj.emit("foo");                     // dispatch event
 * obj.emit("bar");                     // dispatch another event
 * obj.off("foo");                      // remove event listener
 */