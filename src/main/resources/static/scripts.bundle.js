/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
;/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

;/*! jQuery UI - v1.11.4 - 2015-09-20
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js, slider.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b,d){var e,f,g,h=b.nodeName.toLowerCase();return"area"===h?(e=b.parentNode,f=e.name,b.href&&f&&"map"===e.nodeName.toLowerCase()?(g=a("img[usemap='#"+f+"']")[0],!!g&&c(g)):!1):(/^(input|select|textarea|button|object)$/.test(h)?!b.disabled:"a"===h?b.href||d:d)&&c(b)}function c(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return d&&"static"===b.css("position")?!1:e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)},uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(c){return b(c,!isNaN(a.attr(c,"tabindex")))},tabbable:function(c){var d=a.attr(c,"tabindex"),e=isNaN(d);return(e||d>=0)&&b(c,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(b){if(void 0!==b)return this.css("zIndex",b);if(this.length)for(var c,d,e=a(this[0]);e.length&&e[0]!==document;){if(c=e.css("position"),("absolute"===c||"relative"===c||"fixed"===c)&&(d=parseInt(e.css("zIndex"),10),!isNaN(d)&&0!==d))return d;e=e.parent()}return 0}}),a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}};var d=0,e=Array.prototype.slice;a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h,i={},j=b.split(".")[0];return b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new g(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,d){return a.isFunction(d)?void(i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(i[b]=d)}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix||b:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g),g},a.widget.extend=function(b){for(var c,d,f=e.call(arguments,1),g=0,h=f.length;h>g;g++)for(c in f[g])d=f[g][c],f[g].hasOwnProperty(c)&&void 0!==d&&(a.isPlainObject(d)?b[c]=a.isPlainObject(b[c])?a.widget.extend({},b[c],d):a.widget.extend({},d):b[c]=d);return b},a.widget.bridge=function(b,c){var d=c.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=e.call(arguments,1),i=this;return g?this.each(function(){var c,e=a.data(this,d);return"instance"===f?(i=e,!1):e?a.isFunction(e[f])&&"_"!==f.charAt(0)?(c=e[f].apply(e,h),c!==e&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+f+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):(h.length&&(f=a.widget.extend.apply(null,[f].concat(h))),this.each(function(){var b=a.data(this,d);b?(b.option(f||{}),b._init&&b._init()):a.data(this,d,new c(f,this))})),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(b,c){c=a(c||this.defaultElement||this)[0],this.element=a(c),this.uuid=d++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),c!==this&&(a.data(c,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===c&&this.destroy()}}),this.document=a(c.style?c.ownerDocument:c.document||c),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),b),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!b),b&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){return b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled")?("string"==typeof g?f[g]:g).apply(f,arguments):void 0}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.unbind(c).undelegate(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}});var f=(a.widget,!1);a(document).mouseup(function(){f=!1});a.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){return!0===a.data(c.target,b.widgetName+".preventClickEvent")?(a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(!f){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var c=this,d=1===b.which,e="string"==typeof this.options.cancel&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;return d&&!e&&this._mouseCapture(b)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(b)!==!1,!this._mouseStarted)?(b.preventDefault(),!0):(!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return c._mouseMove(a)},this._mouseUpDelegate=function(a){return c._mouseUp(a)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),f=!0,!0)):!0}},_mouseMove:function(b){if(this._mouseMoved){if(a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button)return this._mouseUp(b);if(!b.which)return this._mouseUp(b)}return(b.which||b.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(b){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target===this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),f=!1,!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}});!function(){function b(a,b,c){return[parseFloat(a[0])*(n.test(a[0])?b/100:1),parseFloat(a[1])*(n.test(a[1])?c/100:1)]}function c(b,c){return parseInt(a.css(b,c),10)||0}function d(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}a.ui=a.ui||{};var e,f,g=Math.max,h=Math.abs,i=Math.round,j=/left|center|right/,k=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,m=/^\w+/,n=/%$/,o=a.fn.position;a.position={scrollbarWidth:function(){if(void 0!==e)return e;var b,c,d=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=d.children()[0];return a("body").append(d),b=f.offsetWidth,d.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=d[0].clientWidth),d.remove(),e=b-c},getScrollInfo:function(b){var c=b.isWindow||b.isDocument?"":b.element.css("overflow-x"),d=b.isWindow||b.isDocument?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]),e=!!c[0]&&9===c[0].nodeType;return{element:c,isWindow:d,isDocument:e,offset:c.offset()||{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:d||e?c.width():c.outerWidth(),height:d||e?c.height():c.outerHeight()}}},a.fn.position=function(e){if(!e||!e.of)return o.apply(this,arguments);e=a.extend({},e);var n,p,q,r,s,t,u=a(e.of),v=a.position.getWithinInfo(e.within),w=a.position.getScrollInfo(v),x=(e.collision||"flip").split(" "),y={};return t=d(u),u[0].preventDefault&&(e.at="left top"),p=t.width,q=t.height,r=t.offset,s=a.extend({},r),a.each(["my","at"],function(){var a,b,c=(e[this]||"").split(" ");1===c.length&&(c=j.test(c[0])?c.concat(["center"]):k.test(c[0])?["center"].concat(c):["center","center"]),c[0]=j.test(c[0])?c[0]:"center",c[1]=k.test(c[1])?c[1]:"center",a=l.exec(c[0]),b=l.exec(c[1]),y[this]=[a?a[0]:0,b?b[0]:0],e[this]=[m.exec(c[0])[0],m.exec(c[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?s.left+=p:"center"===e.at[0]&&(s.left+=p/2),"bottom"===e.at[1]?s.top+=q:"center"===e.at[1]&&(s.top+=q/2),n=b(y.at,p,q),s.left+=n[0],s.top+=n[1],this.each(function(){var d,j,k=a(this),l=k.outerWidth(),m=k.outerHeight(),o=c(this,"marginLeft"),t=c(this,"marginTop"),z=l+o+c(this,"marginRight")+w.width,A=m+t+c(this,"marginBottom")+w.height,B=a.extend({},s),C=b(y.my,k.outerWidth(),k.outerHeight());"right"===e.my[0]?B.left-=l:"center"===e.my[0]&&(B.left-=l/2),"bottom"===e.my[1]?B.top-=m:"center"===e.my[1]&&(B.top-=m/2),B.left+=C[0],B.top+=C[1],f||(B.left=i(B.left),B.top=i(B.top)),d={marginLeft:o,marginTop:t},a.each(["left","top"],function(b,c){a.ui.position[x[b]]&&a.ui.position[x[b]][c](B,{targetWidth:p,targetHeight:q,elemWidth:l,elemHeight:m,collisionPosition:d,collisionWidth:z,collisionHeight:A,offset:[n[0]+C[0],n[1]+C[1]],my:e.my,at:e.at,within:v,elem:k})}),e.using&&(j=function(a){var b=r.left-B.left,c=b+p-l,d=r.top-B.top,f=d+q-m,i={target:{element:u,left:r.left,top:r.top,width:p,height:q},element:{element:k,left:B.left,top:B.top,width:l,height:m},horizontal:0>c?"left":b>0?"right":"center",vertical:0>f?"top":d>0?"bottom":"middle"};l>p&&h(b+c)<p&&(i.horizontal="center"),m>q&&h(d+f)<q&&(i.vertical="middle"),g(h(b),h(c))>g(h(d),h(f))?i.important="horizontal":i.important="vertical",e.using.call(this,a,i)}),k.offset(a.extend(B,{using:j}))})},a.ui.position={fit:{left:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollLeft:d.offset.left,f=d.width,h=a.left-b.collisionPosition.marginLeft,i=e-h,j=h+b.collisionWidth-f-e;b.collisionWidth>f?i>0&&0>=j?(c=a.left+i+b.collisionWidth-f-e,a.left+=i-c):j>0&&0>=i?a.left=e:i>j?a.left=e+f-b.collisionWidth:a.left=e:i>0?a.left+=i:j>0?a.left-=j:a.left=g(a.left-h,a.left)},top:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollTop:d.offset.top,f=b.within.height,h=a.top-b.collisionPosition.marginTop,i=e-h,j=h+b.collisionHeight-f-e;b.collisionHeight>f?i>0&&0>=j?(c=a.top+i+b.collisionHeight-f-e,a.top+=i-c):j>0&&0>=i?a.top=e:i>j?a.top=e+f-b.collisionHeight:a.top=e:i>0?a.top+=i:j>0?a.top-=j:a.top=g(a.top-h,a.top)}},flip:{left:function(a,b){var c,d,e=b.within,f=e.offset.left+e.scrollLeft,g=e.width,i=e.isWindow?e.scrollLeft:e.offset.left,j=a.left-b.collisionPosition.marginLeft,k=j-i,l=j+b.collisionWidth-g-i,m="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,n="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,o=-2*b.offset[0];0>k?(c=a.left+m+n+o+b.collisionWidth-g-f,(0>c||c<h(k))&&(a.left+=m+n+o)):l>0&&(d=a.left-b.collisionPosition.marginLeft+m+n+o-i,(d>0||h(d)<l)&&(a.left+=m+n+o))},top:function(a,b){var c,d,e=b.within,f=e.offset.top+e.scrollTop,g=e.height,i=e.isWindow?e.scrollTop:e.offset.top,j=a.top-b.collisionPosition.marginTop,k=j-i,l=j+b.collisionHeight-g-i,m="top"===b.my[1],n=m?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,o="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,p=-2*b.offset[1];0>k?(d=a.top+n+o+p+b.collisionHeight-g-f,(0>d||d<h(k))&&(a.top+=n+o+p)):l>0&&(c=a.top-b.collisionPosition.marginTop+n+o+p-i,(c>0||h(c)<l)&&(a.top+=n+o+p))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}},function(){var b,c,d,e,g,h=document.getElementsByTagName("body")[0],i=document.createElement("div");b=document.createElement(h?"div":"body"),d={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},h&&a.extend(d,{position:"absolute",left:"-1000px",top:"-1000px"});for(g in d)b.style[g]=d[g];b.appendChild(i),c=h||document.documentElement,c.insertBefore(b,c.firstChild),i.style.cssText="position: absolute; left: 10.7432222px;",e=a(i).offset().left,f=e>10&&11>e,b.innerHTML="",c.removeChild(b)}()}();a.ui.position;a.widget("ui.draggable",a.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(a,b){this._super(a,b),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(b){var c=this.options;return this._blurActiveElement(b),this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(b),this.handle?(this._blockFrames(c.iframeFix===!0?"iframe":c.iframeFix),!0):!1)},_blockFrames:function(b){this.iframeBlocks=this.document.find(b).map(function(){var b=a(this);return a("<div>").css("position","absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(b){var c=this.document[0];if(this.handleElement.is(b.target))try{c.activeElement&&"body"!==c.activeElement.nodeName.toLowerCase()&&a(c.activeElement).blur()}catch(d){}},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===a(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(b),this.originalPosition=this.position=this._generatePosition(b,!1),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._normalizeRightBottom(),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(b,c){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b,!0),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=this,d=!1;return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1},_mouseUp:function(b){return this._unblockFrames(),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),this.handleElement.is(b.target)&&this.element.focus(),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){return this.options.handle?!!a(b.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper),e=d?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return e.parents("body").length||e.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d&&e[0]===this.element[0]&&this._setPositionRelative(),e[0]===this.element[0]||/(fixed|absolute)/.test(e.css("position"))||e.css("position","absolute"),e},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){var b=this.offsetParent.offset(),c=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==c&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),b=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(b?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(b?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options,f=this.document[0];return this.relativeContainer=null,e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(f).width()-this.helperProportions.width-this.margins.left,(a(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c))):void(this.containment=null)},_convertPositionTo:function(a,b){b||(b=this.position);var c="absolute"===a?1:-1,d=this._isRootNode(this.scrollParent[0]);return{top:b.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*c,left:b.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*c}},_generatePosition:function(a,b){var c,d,e,f,g=this.options,h=this._isRootNode(this.scrollParent[0]),i=a.pageX,j=a.pageY;return h&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),b&&(this.containment&&(this.relativeContainer?(d=this.relativeContainer.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,a.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),a.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),a.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),a.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f),"y"===g.axis&&(i=this.originalPageX),"x"===g.axis&&(j=this.originalPageY)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:h?0:this.offset.scroll.top),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:h?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d,this],!0),/^(drag|start|stop)/.test(b)&&(this.positionAbs=this._convertPositionTo("absolute"),d.offset=this.positionAbs),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c,d){var e=a.extend({},c,{item:d.element});d.sortables=[],a(d.options.connectToSortable).each(function(){var c=a(this).sortable("instance");c&&!c.options.disabled&&(d.sortables.push(c),c.refreshPositions(),c._trigger("activate",b,e))})},stop:function(b,c,d){var e=a.extend({},c,{item:d.element});d.cancelHelperRemoval=!1,a.each(d.sortables,function(){var a=this;a.isOver?(a.isOver=0,d.cancelHelperRemoval=!0,a.cancelHelperRemoval=!1,a._storedCSS={position:a.placeholder.css("position"),top:a.placeholder.css("top"),left:a.placeholder.css("left")},a._mouseStop(b),a.options.helper=a.options._helper):(a.cancelHelperRemoval=!0,a._trigger("deactivate",b,e))})},drag:function(b,c,d){a.each(d.sortables,function(){var e=!1,f=this;f.positionAbs=d.positionAbs,f.helperProportions=d.helperProportions,f.offset.click=d.offset.click,f._intersectsWith(f.containerCache)&&(e=!0,a.each(d.sortables,function(){
return this.positionAbs=d.positionAbs,this.helperProportions=d.helperProportions,this.offset.click=d.offset.click,this!==f&&this._intersectsWith(this.containerCache)&&a.contains(f.element[0],this.element[0])&&(e=!1),e})),e?(f.isOver||(f.isOver=1,d._parent=c.helper.parent(),f.currentItem=c.helper.appendTo(f.element).data("ui-sortable-item",!0),f.options._helper=f.options.helper,f.options.helper=function(){return c.helper[0]},b.target=f.currentItem[0],f._mouseCapture(b,!0),f._mouseStart(b,!0,!0),f.offset.click.top=d.offset.click.top,f.offset.click.left=d.offset.click.left,f.offset.parent.left-=d.offset.parent.left-f.offset.parent.left,f.offset.parent.top-=d.offset.parent.top-f.offset.parent.top,d._trigger("toSortable",b),d.dropped=f.element,a.each(d.sortables,function(){this.refreshPositions()}),d.currentItem=d.element,f.fromOutside=d),f.currentItem&&(f._mouseDrag(b),c.position=f.position)):f.isOver&&(f.isOver=0,f.cancelHelperRemoval=!0,f.options._revert=f.options.revert,f.options.revert=!1,f._trigger("out",b,f._uiHash(f)),f._mouseStop(b,!0),f.options.revert=f.options._revert,f.options.helper=f.options._helper,f.placeholder&&f.placeholder.remove(),c.helper.appendTo(d._parent),d._refreshOffsets(b),c.position=d._generatePosition(b,!0),d._trigger("fromSortable",b),d.dropped=!1,a.each(d.sortables,function(){this.refreshPositions()}))})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c,d){var e=a("body"),f=d.options;e.css("cursor")&&(f._cursor=e.css("cursor")),e.css("cursor",f.cursor)},stop:function(b,c,d){var e=d.options;e._cursor&&a("body").css("cursor",e._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("opacity")&&(f._opacity=e.css("opacity")),e.css("opacity",f.opacity)},stop:function(b,c,d){var e=d.options;e._opacity&&a(c.helper).css("opacity",e._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(a,b,c){c.scrollParentNotHidden||(c.scrollParentNotHidden=c.helper.scrollParent(!1)),c.scrollParentNotHidden[0]!==c.document[0]&&"HTML"!==c.scrollParentNotHidden[0].tagName&&(c.overflowOffset=c.scrollParentNotHidden.offset())},drag:function(b,c,d){var e=d.options,f=!1,g=d.scrollParentNotHidden[0],h=d.document[0];g!==h&&"HTML"!==g.tagName?(e.axis&&"x"===e.axis||(d.overflowOffset.top+g.offsetHeight-b.pageY<e.scrollSensitivity?g.scrollTop=f=g.scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(g.scrollTop=f=g.scrollTop-e.scrollSpeed)),e.axis&&"y"===e.axis||(d.overflowOffset.left+g.offsetWidth-b.pageX<e.scrollSensitivity?g.scrollLeft=f=g.scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(g.scrollLeft=f=g.scrollLeft-e.scrollSpeed))):(e.axis&&"x"===e.axis||(b.pageY-a(h).scrollTop()<e.scrollSensitivity?f=a(h).scrollTop(a(h).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(h).scrollTop())<e.scrollSensitivity&&(f=a(h).scrollTop(a(h).scrollTop()+e.scrollSpeed))),e.axis&&"y"===e.axis||(b.pageX-a(h).scrollLeft()<e.scrollSensitivity?f=a(h).scrollLeft(a(h).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(h).scrollLeft())<e.scrollSensitivity&&(f=a(h).scrollLeft(a(h).scrollLeft()+e.scrollSpeed)))),f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c,d){var e=d.options;d.snapElements=[],a(e.snap.constructor!==String?e.snap.items||":data(ui-draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!==d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o=d.options,p=o.snapTolerance,q=c.offset.left,r=q+d.helperProportions.width,s=c.offset.top,t=s+d.helperProportions.height;for(m=d.snapElements.length-1;m>=0;m--)i=d.snapElements[m].left-d.margins.left,j=i+d.snapElements[m].width,k=d.snapElements[m].top-d.margins.top,l=k+d.snapElements[m].height,i-p>r||q>j+p||k-p>t||s>l+p||!a.contains(d.snapElements[m].item.ownerDocument,d.snapElements[m].item)?(d.snapElements[m].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=!1):("inner"!==o.snapMode&&(e=Math.abs(k-t)<=p,f=Math.abs(l-s)<=p,g=Math.abs(i-r)<=p,h=Math.abs(j-q)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k-d.helperProportions.height,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i-d.helperProportions.width}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j}).left)),n=e||f||g||h,"outer"!==o.snapMode&&(e=Math.abs(k-s)<=p,f=Math.abs(l-t)<=p,g=Math.abs(i-q)<=p,h=Math.abs(j-r)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l-d.helperProportions.height,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j-d.helperProportions.width}).left)),!d.snapElements[m].snapping&&(e||f||g||h||n)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=e||f||g||h||n)}}),a.ui.plugin.add("draggable","stack",{start:function(b,c,d){var e,f=d.options,g=a.makeArray(a(f.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});g.length&&(e=parseInt(a(g[0]).css("zIndex"),10)||0,a(g).each(function(b){a(this).css("zIndex",e+b)}),this.css("zIndex",e+g.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("zIndex")&&(f._zIndex=e.css("zIndex")),e.css("zIndex",f.zIndex)},stop:function(b,c,d){var e=d.options;e._zIndex&&a(c.helper).css("zIndex",e._zIndex)}});a.ui.draggable;a.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var b,c=this.options,d=c.accept;this.isover=!1,this.isout=!0,this.accept=a.isFunction(d)?d:function(a){return a.is(d)},this.proportions=function(){return arguments.length?void(b=arguments[0]):b?b:b={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(c.scope),c.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(b){a.ui.ddmanager.droppables[b]=a.ui.ddmanager.droppables[b]||[],a.ui.ddmanager.droppables[b].push(this)},_splice:function(a){for(var b=0;b<a.length;b++)a[b]===this&&a.splice(b,1)},_destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];this._splice(b),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(b,c){if("accept"===b)this.accept=a.isFunction(c)?c:function(a){return a.is(c)};else if("scope"===b){var d=a.ui.ddmanager.droppables[this.options.scope];this._splice(d),this._addToManager(c)}this._super(b,c)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current,e=!1;return d&&(d.currentItem||d.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var c=a(this).droppable("instance");return c.options.greedy&&!c.options.disabled&&c.options.scope===d.options.scope&&c.accept.call(c.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(c,{offset:c.element.offset()}),c.options.tolerance,b)?(e=!0,!1):void 0}),e?!1:this.accept.call(this.element[0],d.currentItem||d.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d)),this.element):!1):!1},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.ui.intersect=function(){function a(a,b,c){return a>=b&&b+c>a}return function(b,c,d,e){if(!c.offset)return!1;var f=(b.positionAbs||b.position.absolute).left+b.margins.left,g=(b.positionAbs||b.position.absolute).top+b.margins.top,h=f+b.helperProportions.width,i=g+b.helperProportions.height,j=c.offset.left,k=c.offset.top,l=j+c.proportions().width,m=k+c.proportions().height;switch(d){case"fit":return f>=j&&l>=h&&g>=k&&m>=i;case"intersect":return j<f+b.helperProportions.width/2&&h-b.helperProportions.width/2<l&&k<g+b.helperProportions.height/2&&i-b.helperProportions.height/2<m;case"pointer":return a(e.pageY,k,c.proportions().height)&&a(e.pageX,j,c.proportions().width);case"touch":return(g>=k&&m>=g||i>=k&&m>=i||k>g&&i>m)&&(f>=j&&l>=f||h>=j&&l>=h||j>f&&h>l);default:return!1}}}(),a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(b,c){var d,e,f=a.ui.ddmanager.droppables[b.options.scope]||[],g=c?c.type:null,h=(b.currentItem||b.element).find(":data(ui-droppable)").addBack();a:for(d=0;d<f.length;d++)if(!(f[d].options.disabled||b&&!f[d].accept.call(f[d].element[0],b.currentItem||b.element))){for(e=0;e<h.length;e++)if(h[e]===f[d].element[0]){f[d].proportions().height=0;continue a}f[d].visible="none"!==f[d].element.css("display"),f[d].visible&&("mousedown"===g&&f[d]._activate.call(f[d],c),f[d].offset=f[d].element.offset(),f[d].proportions({width:f[d].element[0].offsetWidth,height:f[d].element[0].offsetHeight}))}},drop:function(b,c){var d=!1;return a.each((a.ui.ddmanager.droppables[b.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance,c)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,c)))}),d},dragStart:function(b,c){b.element.parentsUntil("body").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var d,e,f,g=a.ui.intersect(b,this,this.options.tolerance,c),h=!g&&this.isover?"isout":g&&!this.isover?"isover":null;h&&(this.options.greedy&&(e=this.options.scope,f=this.element.parents(":data(ui-droppable)").filter(function(){return a(this).droppable("instance").options.scope===e}),f.length&&(d=a(f[0]).droppable("instance"),d.greedyChild="isover"===h)),d&&"isover"===h&&(d.isover=!1,d.isout=!0,d._out.call(d,c)),this[h]=!0,this["isout"===h?"isover":"isout"]=!1,this["isover"===h?"_over":"_out"].call(this,c),d&&"isout"===h&&(d.isout=!1,d.isover=!0,d._over.call(d,c)))}})},dragStop:function(b,c){b.element.parentsUntil("body").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}};a.ui.droppable;a.widget("ui.resizable",a.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseInt(a,10)||0},_isNumber:function(a){return!isNaN(parseInt(a,10))},_hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},_create:function(){var b,c,d,e,f,g=this,h=this.options;if(this.element.addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!h.aspectRatio,aspectRatio:h.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:h.helper||h.ghost||h.animate?h.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=h.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=a(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),b=this.handles.split(","),this.handles={},c=0;c<b.length;c++)d=a.trim(b[c]),f="ui-resizable-"+d,e=a("<div class='ui-resizable-handle "+f+"'></div>"),e.css({zIndex:h.zIndex}),"se"===d&&e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[d]=".ui-resizable-"+d,this.element.append(e);this._renderAxis=function(b){var c,d,e,f;b=b||this.element;for(c in this.handles)this.handles[c].constructor===String?this.handles[c]=this.element.children(this.handles[c]).first().show():(this.handles[c].jquery||this.handles[c].nodeType)&&(this.handles[c]=a(this.handles[c]),this._on(this.handles[c],{mousedown:g._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(d=a(this.handles[c],this.element),f=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth(),e=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join(""),b.css(e,f),this._proportionallyResize()),this._handles=this._handles.add(this.handles[c])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){g.resizing||(this.className&&(e=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),g.axis=e&&e[1]?e[1]:"se")}),h.autoHide&&(this._handles.hide(),a(this.element).addClass("ui-resizable-autohide").mouseenter(function(){h.disabled||(a(this).removeClass("ui-resizable-autohide"),g._handles.show())}).mouseleave(function(){h.disabled||g.resizing||(a(this).addClass("ui-resizable-autohide"),g._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var b,c=function(b){a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(c(this.element),b=this.element,this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b),b.remove()),this.originalElement.css("resize",this.originalResizeStyle),c(this.originalElement),this},_mouseCapture:function(b){var c,d,e=!1;for(c in this.handles)d=a(this.handles[c])[0],(d===b.target||a.contains(d,b.target))&&(e=!0);return!this.options.disabled&&e},_mouseStart:function(b){var c,d,e,f=this.options,g=this.element;return this.resizing=!0,this._renderProxy(),c=this._num(this.helper.css("left")),d=this._num(this.helper.css("top")),f.containment&&(c+=a(f.containment).scrollLeft()||0,d+=a(f.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:c,top:d},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:g.width(),height:g.height()},this.originalSize=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()},this.sizeDiff={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()},this.originalPosition={left:c,top:d},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio="number"==typeof f.aspectRatio?f.aspectRatio:this.originalSize.width/this.originalSize.height||1,e=a(".ui-resizable-"+this.axis).css("cursor"),a("body").css("cursor","auto"===e?this.axis+"-resize":e),g.addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c,d,e=this.originalMousePosition,f=this.axis,g=b.pageX-e.left||0,h=b.pageY-e.top||0,i=this._change[f];return this._updatePrevProperties(),i?(c=i.apply(this,[b,g,h]),this._updateVirtualBoundaries(b.shiftKey),(this._aspectRatio||b.shiftKey)&&(c=this._updateRatio(c,b)),c=this._respectSize(c,b),this._updateCache(c),this._propagate("resize",b),d=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),a.isEmptyObject(d)||(this._updatePrevProperties(),this._trigger("resize",b,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(b){this.resizing=!1;var c,d,e,f,g,h,i,j=this.options,k=this;return this._helper&&(c=this._proportionallyResizeElements,d=c.length&&/textarea/i.test(c[0].nodeName),e=d&&this._hasScroll(c[0],"left")?0:k.sizeDiff.height,f=d?0:k.sizeDiff.width,g={width:k.helper.width()-f,height:k.helper.height()-e},h=parseInt(k.element.css("left"),10)+(k.position.left-k.originalPosition.left)||null,i=parseInt(k.element.css("top"),10)+(k.position.top-k.originalPosition.top)||null,j.animate||this.element.css(a.extend(g,{top:i,left:h})),k.helper.height(k.size.height),k.helper.width(k.size.width),this._helper&&!j.animate&&this._proportionallyResize()),a("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var a={};return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a},_updateVirtualBoundaries:function(a){var b,c,d,e,f,g=this.options;f={minWidth:this._isNumber(g.minWidth)?g.minWidth:0,maxWidth:this._isNumber(g.maxWidth)?g.maxWidth:1/0,minHeight:this._isNumber(g.minHeight)?g.minHeight:0,maxHeight:this._isNumber(g.maxHeight)?g.maxHeight:1/0},(this._aspectRatio||a)&&(b=f.minHeight*this.aspectRatio,d=f.minWidth/this.aspectRatio,c=f.maxHeight*this.aspectRatio,e=f.maxWidth/this.aspectRatio,b>f.minWidth&&(f.minWidth=b),d>f.minHeight&&(f.minHeight=d),c<f.maxWidth&&(f.maxWidth=c),e<f.maxHeight&&(f.maxHeight=e)),this._vBoundaries=f},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,d=this.axis;return this._isNumber(a.height)?a.width=a.height*this.aspectRatio:this._isNumber(a.width)&&(a.height=a.width/this.aspectRatio),"sw"===d&&(a.left=b.left+(c.width-a.width),a.top=null),"nw"===d&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width)),a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,d=this._isNumber(a.width)&&b.maxWidth&&b.maxWidth<a.width,e=this._isNumber(a.height)&&b.maxHeight&&b.maxHeight<a.height,f=this._isNumber(a.width)&&b.minWidth&&b.minWidth>a.width,g=this._isNumber(a.height)&&b.minHeight&&b.minHeight>a.height,h=this.originalPosition.left+this.originalSize.width,i=this.position.top+this.size.height,j=/sw|nw|w/.test(c),k=/nw|ne|n/.test(c);return f&&(a.width=b.minWidth),g&&(a.height=b.minHeight),d&&(a.width=b.maxWidth),e&&(a.height=b.maxHeight),f&&j&&(a.left=h-b.minWidth),d&&j&&(a.left=h-b.maxWidth),g&&k&&(a.top=i-b.minHeight),e&&k&&(a.top=i-b.maxHeight),a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null,a},_getPaddingPlusBorderDimensions:function(a){for(var b=0,c=[],d=[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],e=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];4>b;b++)c[b]=parseInt(d[b],10)||0,c[b]+=parseInt(e[b],10)||0;return{height:c[0]+c[2],width:c[1]+c[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var a,b=0,c=this.helper||this.element;b<this._proportionallyResizeElements.length;b++)a=this._proportionallyResizeElements[b],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(a)),a.css({height:c.height()-this.outerDimensions.height||0,width:c.width()-this.outerDimensions.width||0})},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset(),this._helper?(this.helper=this.helper||a("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(a,b){return{width:this.originalSize.width+b}},w:function(a,b){var c=this.originalSize,d=this.originalPosition;return{left:d.left+b,width:c.width-b}},n:function(a,b,c){var d=this.originalSize,e=this.originalPosition;return{top:e.top+c,height:d.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),"resize"!==b&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.ui.plugin.add("resizable","animate",{stop:function(b){var c=a(this).resizable("instance"),d=c.options,e=c._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&c._hasScroll(e[0],"left")?0:c.sizeDiff.height,h=f?0:c.sizeDiff.width,i={width:c.size.width-h,height:c.size.height-g},j=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null,k=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;c.element.animate(a.extend(i,k&&j?{top:k,left:j}:{}),{duration:d.animateDuration,easing:d.animateEasing,step:function(){var d={width:parseInt(c.element.css("width"),10),height:parseInt(c.element.css("height"),10),top:parseInt(c.element.css("top"),10),left:parseInt(c.element.css("left"),10)};e&&e.length&&a(e[0]).css({width:d.width,height:d.height}),c._updateCache(d),c._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(){var b,c,d,e,f,g,h,i=a(this).resizable("instance"),j=i.options,k=i.element,l=j.containment,m=l instanceof a?l.get(0):/parent/.test(l)?k.parent().get(0):l;m&&(i.containerElement=a(m),/document/.test(l)||l===document?(i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}):(b=a(m),c=[],a(["Top","Right","Left","Bottom"]).each(function(a,d){c[a]=i._num(b.css("padding"+d))}),i.containerOffset=b.offset(),i.containerPosition=b.position(),i.containerSize={height:b.innerHeight()-c[3],width:b.innerWidth()-c[1]},d=i.containerOffset,e=i.containerSize.height,f=i.containerSize.width,g=i._hasScroll(m,"left")?m.scrollWidth:f,h=i._hasScroll(m)?m.scrollHeight:e,i.parentData={element:m,left:d.left,top:d.top,width:g,height:h}))},resize:function(b){var c,d,e,f,g=a(this).resizable("instance"),h=g.options,i=g.containerOffset,j=g.position,k=g._aspectRatio||b.shiftKey,l={top:0,left:0},m=g.containerElement,n=!0;m[0]!==document&&/static/.test(m.css("position"))&&(l=i),j.left<(g._helper?i.left:0)&&(g.size.width=g.size.width+(g._helper?g.position.left-i.left:g.position.left-l.left),k&&(g.size.height=g.size.width/g.aspectRatio,n=!1),g.position.left=h.helper?i.left:0),j.top<(g._helper?i.top:0)&&(g.size.height=g.size.height+(g._helper?g.position.top-i.top:g.position.top),k&&(g.size.width=g.size.height*g.aspectRatio,n=!1),g.position.top=g._helper?i.top:0),e=g.containerElement.get(0)===g.element.parent().get(0),f=/relative|absolute/.test(g.containerElement.css("position")),e&&f?(g.offset.left=g.parentData.left+g.position.left,g.offset.top=g.parentData.top+g.position.top):(g.offset.left=g.element.offset().left,g.offset.top=g.element.offset().top),c=Math.abs(g.sizeDiff.width+(g._helper?g.offset.left-l.left:g.offset.left-i.left)),d=Math.abs(g.sizeDiff.height+(g._helper?g.offset.top-l.top:g.offset.top-i.top)),c+g.size.width>=g.parentData.width&&(g.size.width=g.parentData.width-c,k&&(g.size.height=g.size.width/g.aspectRatio,n=!1)),d+g.size.height>=g.parentData.height&&(g.size.height=g.parentData.height-d,k&&(g.size.width=g.size.height*g.aspectRatio,n=!1)),n||(g.position.left=g.prevPosition.left,g.position.top=g.prevPosition.top,g.size.width=g.prevSize.width,g.size.height=g.prevSize.height)},stop:function(){var b=a(this).resizable("instance"),c=b.options,d=b.containerOffset,e=b.containerPosition,f=b.containerElement,g=a(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width,j=g.outerHeight()-b.sizeDiff.height;b._helper&&!c.animate&&/relative/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j}),b._helper&&!c.animate&&/static/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j})}}),a.ui.plugin.add("resizable","alsoResize",{start:function(){var b=a(this).resizable("instance"),c=b.options;a(c.alsoResize).each(function(){var b=a(this);b.data("ui-resizable-alsoresize",{width:parseInt(b.width(),10),height:parseInt(b.height(),10),left:parseInt(b.css("left"),10),top:parseInt(b.css("top"),10)})})},resize:function(b,c){var d=a(this).resizable("instance"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0};a(e.alsoResize).each(function(){var b=a(this),d=a(this).data("ui-resizable-alsoresize"),e={},f=b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(f,function(a,b){var c=(d[b]||0)+(h[b]||0);c&&c>=0&&(e[b]=c||null)}),b.css(e)})},stop:function(){a(this).removeData("resizable-alsoresize")}}),a.ui.plugin.add("resizable","ghost",{start:function(){var b=a(this).resizable("instance"),c=b.options,d=b.size;b.ghost=b.originalElement.clone(),b.ghost.css({opacity:.25,display:"block",position:"relative",height:d.height,width:d.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof c.ghost?c.ghost:""),b.ghost.appendTo(b.helper)},resize:function(){var b=a(this).resizable("instance");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=a(this).resizable("instance");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(){var b,c=a(this).resizable("instance"),d=c.options,e=c.size,f=c.originalSize,g=c.originalPosition,h=c.axis,i="number"==typeof d.grid?[d.grid,d.grid]:d.grid,j=i[0]||1,k=i[1]||1,l=Math.round((e.width-f.width)/j)*j,m=Math.round((e.height-f.height)/k)*k,n=f.width+l,o=f.height+m,p=d.maxWidth&&d.maxWidth<n,q=d.maxHeight&&d.maxHeight<o,r=d.minWidth&&d.minWidth>n,s=d.minHeight&&d.minHeight>o;d.grid=i,r&&(n+=j),s&&(o+=k),p&&(n-=j),q&&(o-=k),/^(se|s|e)$/.test(h)?(c.size.width=n,c.size.height=o):/^(ne)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.top=g.top-m):/^(sw)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.left=g.left-l):((0>=o-k||0>=n-j)&&(b=c._getPaddingPlusBorderDimensions(this)),o-k>0?(c.size.height=o,c.position.top=g.top-m):(o=k-b.height,c.size.height=o,c.position.top=g.top+f.height-o),n-j>0?(c.size.width=n,c.position.left=g.left-l):(n=j-b.width,c.size.width=n,c.position.left=g.left+f.width-n))}});a.ui.resizable,a.widget("ui.selectable",a.ui.mouse,{version:"1.11.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var b,c=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){b=a(c.options.filter,c.element[0]),b.addClass("ui-selectee"),b.each(function(){var b=a(this),c=b.offset();a.data(this,"selectable-item",{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass("ui-selected"),selecting:b.hasClass("ui-selecting"),unselecting:b.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=b.addClass("ui-selectee"),this._mouseInit(),this.helper=a("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(b){var c=this,d=this.options;this.opos=[b.pageX,b.pageY],this.options.disabled||(this.selectees=a(d.filter,this.element[0]),this._trigger("start",b),a(d.appendTo).append(this.helper),this.helper.css({left:b.pageX,top:b.pageY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=a.data(this,"selectable-item");d.startselected=!0,b.metaKey||b.ctrlKey||(d.$element.removeClass("ui-selected"),d.selected=!1,d.$element.addClass("ui-unselecting"),d.unselecting=!0,c._trigger("unselecting",b,{unselecting:d.element}))}),a(b.target).parents().addBack().each(function(){var d,e=a.data(this,"selectable-item");return e?(d=!b.metaKey&&!b.ctrlKey||!e.$element.hasClass("ui-selected"),e.$element.removeClass(d?"ui-unselecting":"ui-selected").addClass(d?"ui-selecting":"ui-unselecting"),e.unselecting=!d,e.selecting=d,e.selected=d,d?c._trigger("selecting",b,{selecting:e.element}):c._trigger("unselecting",b,{unselecting:e.element}),!1):void 0}))},_mouseDrag:function(b){if(this.dragged=!0,!this.options.disabled){var c,d=this,e=this.options,f=this.opos[0],g=this.opos[1],h=b.pageX,i=b.pageY;
return f>h&&(c=h,h=f,f=c),g>i&&(c=i,i=g,g=c),this.helper.css({left:f,top:g,width:h-f,height:i-g}),this.selectees.each(function(){var c=a.data(this,"selectable-item"),j=!1;c&&c.element!==d.element[0]&&("touch"===e.tolerance?j=!(c.left>h||c.right<f||c.top>i||c.bottom<g):"fit"===e.tolerance&&(j=c.left>f&&c.right<h&&c.top>g&&c.bottom<i),j?(c.selected&&(c.$element.removeClass("ui-selected"),c.selected=!1),c.unselecting&&(c.$element.removeClass("ui-unselecting"),c.unselecting=!1),c.selecting||(c.$element.addClass("ui-selecting"),c.selecting=!0,d._trigger("selecting",b,{selecting:c.element}))):(c.selecting&&((b.metaKey||b.ctrlKey)&&c.startselected?(c.$element.removeClass("ui-selecting"),c.selecting=!1,c.$element.addClass("ui-selected"),c.selected=!0):(c.$element.removeClass("ui-selecting"),c.selecting=!1,c.startselected&&(c.$element.addClass("ui-unselecting"),c.unselecting=!0),d._trigger("unselecting",b,{unselecting:c.element}))),c.selected&&(b.metaKey||b.ctrlKey||c.startselected||(c.$element.removeClass("ui-selected"),c.selected=!1,c.$element.addClass("ui-unselecting"),c.unselecting=!0,d._trigger("unselecting",b,{unselecting:c.element})))))}),!1}},_mouseStop:function(b){var c=this;return this.dragged=!1,a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-unselecting"),d.unselecting=!1,d.startselected=!1,c._trigger("unselected",b,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger("selected",b,{selected:d.element})}),this._trigger("stop",b),this.helper.remove(),!1}}),a.widget("ui.sortable",a.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(a,b,c){return a>=b&&b+c>a},_isFloating:function(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))},_create:function(){this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(a,b){this._super(a,b),"handle"===a&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),a.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(b,c){var d=null,e=!1,f=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(b),a(b.target).parents().each(function(){return a.data(this,f.widgetName+"-item")===f?(d=a(this),!1):void 0}),a.data(b.target,f.widgetName+"-item")===f&&(d=a(b.target)),d&&(!this.options.handle||c||(a(this.options.handle,d).find("*").addBack().each(function(){this===b.target&&(e=!0)}),e))?(this.currentItem=d,this._removeCurrentsFromItems(),!0):!1)},_mouseStart:function(b,c,d){var e,f,g=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),g.containment&&this._setContainment(),g.cursor&&"auto"!==g.cursor&&(f=this.document.find("body"),this.storedCursor=f.css("cursor"),f.css("cursor",g.cursor),this.storedStylesheet=a("<style>*{ cursor: "+g.cursor+" !important; }</style>").appendTo(f)),g.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",g.opacity)),g.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",g.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!d)for(e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("activate",b,this._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){var c,d,e,f,g=this.options,h=!1;for(this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<g.scrollSensitivity?this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop+g.scrollSpeed:b.pageY-this.overflowOffset.top<g.scrollSensitivity&&(this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop-g.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<g.scrollSensitivity?this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft+g.scrollSpeed:b.pageX-this.overflowOffset.left<g.scrollSensitivity&&(this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft-g.scrollSpeed)):(b.pageY-this.document.scrollTop()<g.scrollSensitivity?h=this.document.scrollTop(this.document.scrollTop()-g.scrollSpeed):this.window.height()-(b.pageY-this.document.scrollTop())<g.scrollSensitivity&&(h=this.document.scrollTop(this.document.scrollTop()+g.scrollSpeed)),b.pageX-this.document.scrollLeft()<g.scrollSensitivity?h=this.document.scrollLeft(this.document.scrollLeft()-g.scrollSpeed):this.window.width()-(b.pageX-this.document.scrollLeft())<g.scrollSensitivity&&(h=this.document.scrollLeft(this.document.scrollLeft()+g.scrollSpeed))),h!==!1&&a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),c=this.items.length-1;c>=0;c--)if(d=this.items[c],e=d.item[0],f=this._intersectsWithPointer(d),f&&d.instance===this.currentContainer&&e!==this.currentItem[0]&&this.placeholder[1===f?"next":"prev"]()[0]!==e&&!a.contains(this.placeholder[0],e)&&("semi-dynamic"===this.options.type?!a.contains(this.element[0],e):!0)){if(this.direction=1===f?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(d))break;this._rearrange(b,d),this._trigger("change",b,this._uiHash());break}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(b){if(a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b),this.options.revert){var d=this,e=this.placeholder.offset(),f=this.options.axis,g={};f&&"x"!==f||(g.left=e.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),f&&"y"!==f||(g.top=e.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,a(this.helper).animate(g,parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--)this.containers[b]._trigger("deactivate",null,this._uiHash(this)),this.containers[b].containerCache.over&&(this.containers[b]._trigger("out",null,this._uiHash(this)),this.containers[b].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[\-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l="x"===this.options.axis||d+j>h&&i>d+j,m="y"===this.options.axis||b+k>f&&g>b+k,n=l&&m;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?n:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(a){var b="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height),c="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width),d=b&&c,e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return d?this.floating?f&&"right"===f||"down"===e?2:1:e&&("down"===e?2:1):!1},_intersectsWithSides:function(a){var b=this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height),c=this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width),d=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?"right"===e&&c||"left"===e&&!c:d&&("down"===d&&b||"up"===d&&!b)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return 0!==a&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return 0!==a&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor===String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){function c(){h.push(this)}var d,e,f,g,h=[],i=[],j=this._connectWith();if(j&&b)for(d=j.length-1;d>=0;d--)for(f=a(j[d],this.document[0]),e=f.length-1;e>=0;e--)g=a.data(f[e],this.widgetFullName),g&&g!==this&&!g.options.disabled&&i.push([a.isFunction(g.options.items)?g.options.items.call(g.element):a(g.options.items,g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),g]);for(i.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),d=i.length-1;d>=0;d--)i[d][0].each(c);return a(h)},_removeCurrentsFromItems:function(){var b=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=a.grep(this.items,function(a){for(var c=0;c<b.length;c++)if(b[c]===a.item[0])return!1;return!0})},_refreshItems:function(b){this.items=[],this.containers=[this];var c,d,e,f,g,h,i,j,k=this.items,l=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],m=this._connectWith();if(m&&this.ready)for(c=m.length-1;c>=0;c--)for(e=a(m[c],this.document[0]),d=e.length-1;d>=0;d--)f=a.data(e[d],this.widgetFullName),f&&f!==this&&!f.options.disabled&&(l.push([a.isFunction(f.options.items)?f.options.items.call(f.element[0],b,{item:this.currentItem}):a(f.options.items,f.element),f]),this.containers.push(f));for(c=l.length-1;c>=0;c--)for(g=l[c][1],h=l[c][0],d=0,j=h.length;j>d;d++)i=a(h[d]),i.data(this.widgetName+"-item",g),k.push({item:i,instance:g,width:0,height:0,left:0,top:0})},refreshPositions:function(b){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var c,d,e,f;for(c=this.items.length-1;c>=0;c--)d=this.items[c],d.instance!==this.currentContainer&&this.currentContainer&&d.item[0]!==this.currentItem[0]||(e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item,b||(d.width=e.outerWidth(),d.height=e.outerHeight()),f=e.offset(),d.left=f.left,d.top=f.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(c=this.containers.length-1;c>=0;c--)f=this.containers[c].element.offset(),this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight();return this},_createPlaceholder:function(b){b=b||this;var c,d=b.options;d.placeholder&&d.placeholder.constructor!==String||(c=d.placeholder,d.placeholder={element:function(){var d=b.currentItem[0].nodeName.toLowerCase(),e=a("<"+d+">",b.document[0]).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tbody"===d?b._createTrPlaceholder(b.currentItem.find("tr").eq(0),a("<tr>",b.document[0]).appendTo(e)):"tr"===d?b._createTrPlaceholder(b.currentItem,e):"img"===d&&e.attr("src",b.currentItem.attr("src")),c||e.css("visibility","hidden"),e},update:function(a,e){c&&!d.forcePlaceholderSize||(e.height()||e.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10)))}}),b.placeholder=a(d.placeholder.element.call(b.element,b.currentItem)),b.currentItem.after(b.placeholder),d.placeholder.update(b,b.placeholder)},_createTrPlaceholder:function(b,c){var d=this;b.children().each(function(){a("<td>&#160;</td>",d.document[0]).attr("colspan",a(this).attr("colspan")||1).appendTo(c)})},_contactContainers:function(b){var c,d,e,f,g,h,i,j,k,l,m=null,n=null;for(c=this.containers.length-1;c>=0;c--)if(!a.contains(this.currentItem[0],this.containers[c].element[0]))if(this._intersectsWith(this.containers[c].containerCache)){if(m&&a.contains(this.containers[c].element[0],m.element[0]))continue;m=this.containers[c],n=c}else this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",b,this._uiHash(this)),this.containers[c].containerCache.over=0);if(m)if(1===this.containers.length)this.containers[n].containerCache.over||(this.containers[n]._trigger("over",b,this._uiHash(this)),this.containers[n].containerCache.over=1);else{for(e=1e4,f=null,k=m.floating||this._isFloating(this.currentItem),g=k?"left":"top",h=k?"width":"height",l=k?"clientX":"clientY",d=this.items.length-1;d>=0;d--)a.contains(this.containers[n].element[0],this.items[d].item[0])&&this.items[d].item[0]!==this.currentItem[0]&&(i=this.items[d].item.offset()[g],j=!1,b[l]-i>this.items[d][h]/2&&(j=!0),Math.abs(b[l]-i)<e&&(e=Math.abs(b[l]-i),f=this.items[d],this.direction=j?"up":"down"));if(!f&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[n])return void(this.currentContainer.containerCache.over||(this.containers[n]._trigger("over",b,this._uiHash()),this.currentContainer.containerCache.over=1));f?this._rearrange(b,f,null,!0):this._rearrange(b,null,this.containers[n].element,!0),this._trigger("change",b,this._uiHash()),this.containers[n]._trigger("change",b,this._uiHash(this)),this.currentContainer=this.containers[n],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[n]._trigger("over",b,this._uiHash(this)),this.containers[n].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):"clone"===c.helper?this.currentItem.clone():this.currentItem;return d.parents("body").length||a("parent"!==c.appendTo?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),d[0].style.width&&!c.forceHelperSize||d.width(this.currentItem.width()),d[0].style.height&&!c.forceHelperSize||d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options;"parent"===e.containment&&(e.containment=this.helper[0].parentNode),"document"!==e.containment&&"window"!==e.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===e.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===e.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(e.containment)||(b=a(e.containment)[0],c=a(e.containment).offset(),d="hidden"!==a(b).css("overflow"),this.containment=[c.left+(parseInt(a(b).css("borderLeftWidth"),10)||0)+(parseInt(a(b).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt(a(b).css("borderTopWidth"),10)||0)+(parseInt(a(b).css("paddingTop"),10)||0)-this.margins.top,c.left+(d?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(a(b).css("borderLeftWidth"),10)||0)-(parseInt(a(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(d?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(a(b).css("borderTopWidth"),10)||0)-(parseInt(a(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(b,c){c||(c=this.position);var d="absolute"===b?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(e[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:e.scrollTop())*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:e.scrollLeft())*d}},_generatePosition:function(b){var c,d,e=this.options,f=b.pageX,g=b.pageY,h="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(h[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top)),e.grid&&(c=this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1],g=this.containment?c-this.offset.click.top>=this.containment[1]&&c-this.offset.click.top<=this.containment[3]?c:c-this.offset.click.top>=this.containment[1]?c-e.grid[1]:c+e.grid[1]:c,d=this.originalPageX+Math.round((f-this.originalPageX)/e.grid[0])*e.grid[0],f=this.containment?d-this.offset.click.left>=this.containment[0]&&d-this.offset.click.left<=this.containment[2]?d:d-this.offset.click.left>=this.containment[0]?d-e.grid[0]:d+e.grid[0]:d)),{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():i?0:h.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():i?0:h.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this.counter;this._delay(function(){e===this.counter&&this.refreshPositions(!d)})},_clear:function(a,b){function c(a,b,c){return function(d){c._trigger(a,d,b._uiHash(b))}}this.reverting=!1;var d,e=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(d in this._storedCSS)"auto"!==this._storedCSS[d]&&"static"!==this._storedCSS[d]||(this._storedCSS[d]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!b&&e.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||b||e.push(function(a){this._trigger("update",a,this._uiHash())}),this!==this.currentContainer&&(b||(e.push(function(a){this._trigger("remove",a,this._uiHash())}),e.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.currentContainer)),e.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.currentContainer)))),d=this.containers.length-1;d>=0;d--)b||e.push(c("deactivate",this,this.containers[d])),this.containers[d].containerCache.over&&(e.push(c("out",this,this.containers[d])),this.containers[d].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,b||this._trigger("beforeStop",a,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!b){for(d=0;d<e.length;d++)e[d].call(this,a);this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}}),a.widget("ui.slider",a.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var b,c,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",g=[];for(c=d.values&&d.values.length||1,e.length>c&&(e.slice(c).remove(),e=e.slice(0,c)),b=e.length;c>b;b++)g.push(f);this.handles=e.add(a(g.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(b){a(this).data("ui-slider-handle-index",b)})},_createRange:function(){var b=this.options,c="";b.range?(b.range===!0&&(b.values?b.values.length&&2!==b.values.length?b.values=[b.values[0],b.values[0]]:a.isArray(b.values)&&(b.values=b.values.slice(0)):b.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=a("<div></div>").appendTo(this.element),c="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(c+("min"===b.range||"max"===b.range?" ui-slider-range-"+b.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(b){var c,d,e,f,g,h,i,j,k=this,l=this.options;return l.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),c={x:b.pageX,y:b.pageY},d=this._normValueFromMouse(c),e=this._valueMax()-this._valueMin()+1,this.handles.each(function(b){var c=Math.abs(d-k.values(b));(e>c||e===c&&(b===k._lastChangedValue||k.values(b)===l.min))&&(e=c,f=a(this),g=b)}),h=this._start(b,g),h===!1?!1:(this._mouseSliding=!0,this._handleIndex=g,f.addClass("ui-state-active").focus(),i=f.offset(),j=!a(b.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=j?{left:0,top:0}:{left:b.pageX-i.left-f.width()/2,top:b.pageY-i.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,g,d),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return"horizontal"===this.orientation?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),0>d&&(d=0),"vertical"===this.orientation&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),2===this.options.values.length&&this.options.range===!0&&(0===b&&c>d||1===b&&d>c)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._lastChangedValue=b,this._trigger("change",a,c)}},value:function(a){return arguments.length?(this.options.value=this._trimAlignValue(a),this._refreshValue(),void this._change(null,0)):this._value()},values:function(b,c){var d,e,f;if(arguments.length>1)return this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),void this._change(null,b);if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();for(d=this.options.values,e=arguments[0],f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),
this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;switch("range"===b&&this.options.range===!0&&("min"===c?(this.options.value=this._values(0),this.options.values=null):"max"===c&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),a.isArray(this.options.values)&&(e=this.options.values.length),"disabled"===b&&this.element.toggleClass("ui-state-disabled",!!c),this._super(b,c),b){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===c?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),d=0;e>d;d+=1)this._change(null,d);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a)},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b);if(this.options.values&&this.options.values.length){for(c=this.options.values.slice(),d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c}return[]},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return 2*Math.abs(c)>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_calculateNewMax:function(){var a=this.options.max,b=this._valueMin(),c=this.options.step,d=Math.floor(+(a-b).toFixed(this._precision())/c)*c;a=d+b,this.max=parseFloat(a.toFixed(this._precision()))},_precision:function(){var a=this._precisionOf(this.options.step);return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a},_precisionOf:function(a){var b=a.toString(),c=b.indexOf(".");return-1===c?0:b.length-c-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var b,c,d,e,f,g=this.options.range,h=this.options,i=this,j=this._animateOff?!1:h.animate,k={};this.options.values&&this.options.values.length?this.handles.each(function(d){c=(i.values(d)-i._valueMin())/(i._valueMax()-i._valueMin())*100,k["horizontal"===i.orientation?"left":"bottom"]=c+"%",a(this).stop(1,1)[j?"animate":"css"](k,h.animate),i.options.range===!0&&("horizontal"===i.orientation?(0===d&&i.range.stop(1,1)[j?"animate":"css"]({left:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({width:c-b+"%"},{queue:!1,duration:h.animate})):(0===d&&i.range.stop(1,1)[j?"animate":"css"]({bottom:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({height:c-b+"%"},{queue:!1,duration:h.animate}))),b=c}):(d=this.value(),e=this._valueMin(),f=this._valueMax(),c=f!==e?(d-e)/(f-e)*100:0,k["horizontal"===this.orientation?"left":"bottom"]=c+"%",this.handle.stop(1,1)[j?"animate":"css"](k,h.animate),"min"===g&&"horizontal"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({width:c+"%"},h.animate),"max"===g&&"horizontal"===this.orientation&&this.range[j?"animate":"css"]({width:100-c+"%"},{queue:!1,duration:h.animate}),"min"===g&&"vertical"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({height:c+"%"},h.animate),"max"===g&&"vertical"===this.orientation&&this.range[j?"animate":"css"]({height:100-c+"%"},{queue:!1,duration:h.animate}))},_handleEvents:{keydown:function(b){var c,d,e,f,g=a(b.target).data("ui-slider-handle-index");switch(b.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(b.preventDefault(),!this._keySliding&&(this._keySliding=!0,a(b.target).addClass("ui-state-active"),c=this._start(b,g),c===!1))return}switch(f=this.options.step,d=e=this.options.values&&this.options.values.length?this.values(g):this.value(),b.keyCode){case a.ui.keyCode.HOME:e=this._valueMin();break;case a.ui.keyCode.END:e=this._valueMax();break;case a.ui.keyCode.PAGE_UP:e=this._trimAlignValue(d+(this._valueMax()-this._valueMin())/this.numPages);break;case a.ui.keyCode.PAGE_DOWN:e=this._trimAlignValue(d-(this._valueMax()-this._valueMin())/this.numPages);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(d===this._valueMax())return;e=this._trimAlignValue(d+f);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(d===this._valueMin())return;e=this._trimAlignValue(d-f)}this._slide(b,g,e)},keyup:function(b){var c=a(b.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(b,c),this._change(b,c),a(b.target).removeClass("ui-state-active"))}}})});
;/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function b(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var c,d=a.ui.mouse.prototype,e=d._mouseInit,f=d._mouseDestroy;d._touchStart=function(a){var d=this;!c&&d._mouseCapture(a.originalEvent.changedTouches[0])&&(c=!0,d._touchMoved=!1,b(a,"mouseover"),b(a,"mousemove"),b(a,"mousedown"))},d._touchMove=function(a){c&&(this._touchMoved=!0,b(a,"mousemove"))},d._touchEnd=function(a){c&&(b(a,"mouseup"),b(a,"mouseout"),this._touchMoved||b(a,"click"),c=!1)},d._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),e.call(b)},d._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),f.call(b)}}}(jQuery);
;/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement("canvas");a.appendChild(d),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext("2d");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,"px"].join(""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d="function"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(a,b){},onStep:function(a,b,c){},onStop:function(a,b){}};if("undefined"!=typeof b)d.renderer=b;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&"undefined"!=typeof c[b]?c[b]:d[b],"function"==typeof e[b]&&(e[b]=e[b].bind(this)));"string"==typeof e.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?e.easing=jQuery.easing[e.easing]:e.easing=d.easing,"number"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),"boolean"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent"))),a.style.width=a.style.height=e.size+"px",a.style.lineHeight=e.size-1+"px"}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,"easyPieChart")||(d=a.extend({},b,a(this).data()),a.data(this,"easyPieChart",new c(this,d)))})}});
;/**
*
* jquery.sparkline.js
*
* v2.1.2
* (c) Splunk, Inc
* Contact: Gareth Watts (gareth@splunk.com)
* http://omnipotent.net/jquery.sparkline/
*
* Generates inline sparkline charts from data supplied either to the method
* or inline in HTML
*
* Compatible with Internet Explorer 6.0+ and modern browsers equipped with the canvas tag
* (Firefox 2.0+, Safari, Opera, etc)
*
* License: New BSD License
*
* Copyright (c) 2012, Splunk Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without modification,
* are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright notice,
*       this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright notice,
*       this list of conditions and the following disclaimer in the documentation
*       and/or other materials provided with the distribution.
*     * Neither the name of Splunk Inc nor the names of its contributors may
*       be used to endorse or promote products derived from this software without
*       specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
* OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
* SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
* OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
* HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* Usage:
*  $(selector).sparkline(values, options)
*
* If values is undefined or set to 'html' then the data values are read from the specified tag:
*   <p>Sparkline: <span class="sparkline">1,4,6,6,8,5,3,5</span></p>
*   $('.sparkline').sparkline();
* There must be no spaces in the enclosed data set
*
* Otherwise values must be an array of numbers or null values
*    <p>Sparkline: <span id="sparkline1">This text replaced if the browser is compatible</span></p>
*    $('#sparkline1').sparkline([1,4,6,6,8,5,3,5])
*    $('#sparkline2').sparkline([1,4,6,null,null,5,3,5])
*
* Values can also be specified in an HTML comment, or as a values attribute:
*    <p>Sparkline: <span class="sparkline"><!--1,4,6,6,8,5,3,5 --></span></p>
*    <p>Sparkline: <span class="sparkline" values="1,4,6,6,8,5,3,5"></span></p>
*    $('.sparkline').sparkline();
*
* For line charts, x values can also be specified:
*   <p>Sparkline: <span class="sparkline">1:1,2.7:4,3.4:6,5:6,6:8,8.7:5,9:3,10:5</span></p>
*    $('#sparkline1').sparkline([ [1,1], [2.7,4], [3.4,6], [5,6], [6,8], [8.7,5], [9,3], [10,5] ])
*
* By default, options should be passed in as teh second argument to the sparkline function:
*   $('.sparkline').sparkline([1,2,3,4], {type: 'bar'})
*
* Options can also be set by passing them on the tag itself.  This feature is disabled by default though
* as there's a slight performance overhead:
*   $('.sparkline').sparkline([1,2,3,4], {enableTagOptions: true})
*   <p>Sparkline: <span class="sparkline" sparkType="bar" sparkBarColor="red">loading</span></p>
* Prefix all options supplied as tag attribute with "spark" (configurable by setting tagOptionPrefix)
*
* Supported options:
*   lineColor - Color of the line used for the chart
*   fillColor - Color used to fill in the chart - Set to '' or false for a transparent chart
*   width - Width of the chart - Defaults to 3 times the number of values in pixels
*   height - Height of the chart - Defaults to the height of the containing element
*   chartRangeMin - Specify the minimum value to use for the Y range of the chart - Defaults to the minimum value supplied
*   chartRangeMax - Specify the maximum value to use for the Y range of the chart - Defaults to the maximum value supplied
*   chartRangeClip - Clip out of range values to the max/min specified by chartRangeMin and chartRangeMax
*   chartRangeMinX - Specify the minimum value to use for the X range of the chart - Defaults to the minimum value supplied
*   chartRangeMaxX - Specify the maximum value to use for the X range of the chart - Defaults to the maximum value supplied
*   composite - If true then don't erase any existing chart attached to the tag, but draw
*           another chart over the top - Note that width and height are ignored if an
*           existing chart is detected.
*   tagValuesAttribute - Name of tag attribute to check for data values - Defaults to 'values'
*   enableTagOptions - Whether to check tags for sparkline options
*   tagOptionPrefix - Prefix used for options supplied as tag attributes - Defaults to 'spark'
*   disableHiddenCheck - If set to true, then the plugin will assume that charts will never be drawn into a
*           hidden dom element, avoding a browser reflow
*   disableInteraction - If set to true then all mouseover/click interaction behaviour will be disabled,
*       making the plugin perform much like it did in 1.x
*   disableTooltips - If set to true then tooltips will be disabled - Defaults to false (tooltips enabled)
*   disableHighlight - If set to true then highlighting of selected chart elements on mouseover will be disabled
*       defaults to false (highlights enabled)
*   highlightLighten - Factor to lighten/darken highlighted chart values by - Defaults to 1.4 for a 40% increase
*   tooltipContainer - Specify which DOM element the tooltip should be rendered into - defaults to document.body
*   tooltipClassname - Optional CSS classname to apply to tooltips - If not specified then a default style will be applied
*   tooltipOffsetX - How many pixels away from the mouse pointer to render the tooltip on the X axis
*   tooltipOffsetY - How many pixels away from the mouse pointer to render the tooltip on the r axis
*   tooltipFormatter  - Optional callback that allows you to override the HTML displayed in the tooltip
*       callback is given arguments of (sparkline, options, fields)
*   tooltipChartTitle - If specified then the tooltip uses the string specified by this setting as a title
*   tooltipFormat - A format string or SPFormat object  (or an array thereof for multiple entries)
*       to control the format of the tooltip
*   tooltipPrefix - A string to prepend to each field displayed in a tooltip
*   tooltipSuffix - A string to append to each field displayed in a tooltip
*   tooltipSkipNull - If true then null values will not have a tooltip displayed (defaults to true)
*   tooltipValueLookups - An object or range map to map field values to tooltip strings
*       (eg. to map -1 to "Lost", 0 to "Draw", and 1 to "Win")
*   numberFormatter - Optional callback for formatting numbers in tooltips
*   numberDigitGroupSep - Character to use for group separator in numbers "1,234" - Defaults to ","
*   numberDecimalMark - Character to use for the decimal point when formatting numbers - Defaults to "."
*   numberDigitGroupCount - Number of digits between group separator - Defaults to 3
*
* There are 7 types of sparkline, selected by supplying a "type" option of 'line' (default),
* 'bar', 'tristate', 'bullet', 'discrete', 'pie' or 'box'
*    line - Line chart.  Options:
*       spotColor - Set to '' to not end each line in a circular spot
*       minSpotColor - If set, color of spot at minimum value
*       maxSpotColor - If set, color of spot at maximum value
*       spotRadius - Radius in pixels
*       lineWidth - Width of line in pixels
*       normalRangeMin
*       normalRangeMax - If set draws a filled horizontal bar between these two values marking the "normal"
*                      or expected range of values
*       normalRangeColor - Color to use for the above bar
*       drawNormalOnTop - Draw the normal range above the chart fill color if true
*       defaultPixelsPerValue - Defaults to 3 pixels of width for each value in the chart
*       highlightSpotColor - The color to use for drawing a highlight spot on mouseover - Set to null to disable
*       highlightLineColor - The color to use for drawing a highlight line on mouseover - Set to null to disable
*       valueSpots - Specify which points to draw spots on, and in which color.  Accepts a range map
*
*   bar - Bar chart.  Options:
*       barColor - Color of bars for postive values
*       negBarColor - Color of bars for negative values
*       zeroColor - Color of bars with zero values
*       nullColor - Color of bars with null values - Defaults to omitting the bar entirely
*       barWidth - Width of bars in pixels
*       colorMap - Optional mappnig of values to colors to override the *BarColor values above
*                  can be an Array of values to control the color of individual bars or a range map
*                  to specify colors for individual ranges of values
*       barSpacing - Gap between bars in pixels
*       zeroAxis - Centers the y-axis around zero if true
*
*   tristate - Charts values of win (>0), lose (<0) or draw (=0)
*       posBarColor - Color of win values
*       negBarColor - Color of lose values
*       zeroBarColor - Color of draw values
*       barWidth - Width of bars in pixels
*       barSpacing - Gap between bars in pixels
*       colorMap - Optional mappnig of values to colors to override the *BarColor values above
*                  can be an Array of values to control the color of individual bars or a range map
*                  to specify colors for individual ranges of values
*
*   discrete - Options:
*       lineHeight - Height of each line in pixels - Defaults to 30% of the graph height
*       thesholdValue - Values less than this value will be drawn using thresholdColor instead of lineColor
*       thresholdColor
*
*   bullet - Values for bullet graphs msut be in the order: target, performance, range1, range2, range3, ...
*       options:
*       targetColor - The color of the vertical target marker
*       targetWidth - The width of the target marker in pixels
*       performanceColor - The color of the performance measure horizontal bar
*       rangeColors - Colors to use for each qualitative range background color
*
*   pie - Pie chart. Options:
*       sliceColors - An array of colors to use for pie slices
*       offset - Angle in degrees to offset the first slice - Try -90 or +90
*       borderWidth - Width of border to draw around the pie chart, in pixels - Defaults to 0 (no border)
*       borderColor - Color to use for the pie chart border - Defaults to #000
*
*   box - Box plot. Options:
*       raw - Set to true to supply pre-computed plot points as values
*             values should be: low_outlier, low_whisker, q1, median, q3, high_whisker, high_outlier
*             When set to false you can supply any number of values and the box plot will
*             be computed for you.  Default is false.
*       showOutliers - Set to true (default) to display outliers as circles
*       outlierIQR - Interquartile range used to determine outliers.  Default 1.5
*       boxLineColor - Outline color of the box
*       boxFillColor - Fill color for the box
*       whiskerColor - Line color used for whiskers
*       outlierLineColor - Outline color of outlier circles
*       outlierFillColor - Fill color of the outlier circles
*       spotRadius - Radius of outlier circles
*       medianColor - Line color of the median line
*       target - Draw a target cross hair at the supplied value (default undefined)
*
*
*
*   Examples:
*   $('#sparkline1').sparkline(myvalues, { lineColor: '#f00', fillColor: false });
*   $('.barsparks').sparkline('html', { type:'bar', height:'40px', barWidth:5 });
*   $('#tristate').sparkline([1,1,-1,1,0,0,-1], { type:'tristate' }):
*   $('#discrete').sparkline([1,3,4,5,5,3,4,5], { type:'discrete' });
*   $('#bullet').sparkline([10,12,12,9,7], { type:'bullet' });
*   $('#pie').sparkline([1,1,2], { type:'pie' });
*/
!function(a,b,c){!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):jQuery&&!jQuery.fn.sparkline&&a(jQuery)}(function(d){"use strict";var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K={},L=0;e=function(){return{common:{type:"line",lineColor:"#00f",fillColor:"#cdf",defaultPixelsPerValue:3,width:"auto",height:"auto",composite:!1,tagValuesAttribute:"values",tagOptionsPrefix:"spark",enableTagOptions:!1,enableHighlight:!0,highlightLighten:1.4,tooltipSkipNull:!0,tooltipPrefix:"",tooltipSuffix:"",disableHiddenCheck:!1,numberFormatter:!1,numberDigitGroupCount:3,numberDigitGroupSep:",",numberDecimalMark:".",disableTooltips:!1,disableInteraction:!1},line:{spotColor:"#f80",highlightSpotColor:"#5f5",highlightLineColor:"#f22",spotRadius:1.5,minSpotColor:"#f80",maxSpotColor:"#f80",lineWidth:1,normalRangeMin:c,normalRangeMax:c,normalRangeColor:"#ccc",drawNormalOnTop:!1,chartRangeMin:c,chartRangeMax:c,chartRangeMinX:c,chartRangeMaxX:c,tooltipFormat:new g('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:"#3366cc",negBarColor:"#f44",stackedBarColor:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],zeroColor:c,nullColor:c,zeroAxis:!0,barWidth:4,barSpacing:1,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,colorMap:c,tooltipFormat:new g('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:"#6f6",negBarColor:"#f44",zeroBarColor:"#999",colorMap:{},tooltipFormat:new g('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{"-1":"Loss",0:"Draw",1:"Win"}}},discrete:{lineHeight:"auto",thresholdColor:c,thresholdValue:0,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,tooltipFormat:new g("{{prefix}}{{value}}{{suffix}}")},bullet:{targetColor:"#f33",targetWidth:3,performanceColor:"#33f",rangeColors:["#d3dafe","#a8b6ff","#7f94ff"],base:c,tooltipFormat:new g("{{fieldkey:fields}} - {{value}}"),tooltipValueLookups:{fields:{r:"Range",p:"Performance",t:"Target"}}},pie:{offset:0,sliceColors:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],borderWidth:0,borderColor:"#000",tooltipFormat:new g('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:!1,boxLineColor:"#000",boxFillColor:"#cdf",whiskerColor:"#000",outlierLineColor:"#333",outlierFillColor:"#fff",medianColor:"#f00",showOutliers:!0,outlierIQR:1.5,spotRadius:1.5,target:c,targetColor:"#4a2",chartRangeMax:c,chartRangeMin:c,tooltipFormat:new g("{{field:fields}}: {{value}}"),tooltipFormatFieldlistKey:"field",tooltipValueLookups:{fields:{lq:"Lower Quartile",med:"Median",uq:"Upper Quartile",lo:"Left Outlier",ro:"Right Outlier",lw:"Left Whisker",rw:"Right Whisker"}}}}},D='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',f=function(){var a,b;return a=function(){this.init.apply(this,arguments)},arguments.length>1?(arguments[0]?(a.prototype=d.extend(new arguments[0],arguments[arguments.length-1]),a._super=arguments[0].prototype):a.prototype=arguments[arguments.length-1],arguments.length>2&&(b=Array.prototype.slice.call(arguments,1,-1),b.unshift(a.prototype),d.extend.apply(d,b))):a.prototype=arguments[0],a.prototype.cls=a,a},d.SPFormatClass=g=f({fre:/\{\{([\w.]+?)(:(.+?))?\}\}/g,precre:/(\w+)\.(\d+)/,init:function(a,b){this.format=a,this.fclass=b},render:function(a,b,d){var e,f,g,h,i,j=this,k=a;return this.format.replace(this.fre,function(){var a;return f=arguments[1],g=arguments[3],e=j.precre.exec(f),e?(i=e[2],f=e[1]):i=!1,h=k[f],h===c?"":g&&b&&b[g]?(a=b[g],a.get?b[g].get(h)||h:b[g][h]||h):(m(h)&&(h=d.get("numberFormatter")?d.get("numberFormatter")(h):r(h,i,d.get("numberDigitGroupCount"),d.get("numberDigitGroupSep"),d.get("numberDecimalMark"))),h)})}}),d.spformat=function(a,b){return new g(a,b)},h=function(a,b,c){return b>a?b:a>c?c:a},i=function(a,c){var d;return 2===c?(d=b.floor(a.length/2),a.length%2?a[d]:(a[d-1]+a[d])/2):a.length%2?(d=(a.length*c+c)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1]):(d=(a.length*c+2)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1])},j=function(a){var b;switch(a){case"undefined":a=c;break;case"null":a=null;break;case"true":a=!0;break;case"false":a=!1;break;default:b=parseFloat(a),a==b&&(a=b)}return a},k=function(a){var b,c=[];for(b=a.length;b--;)c[b]=j(a[b]);return c},l=function(a,b){var c,d,e=[];for(c=0,d=a.length;d>c;c++)a[c]!==b&&e.push(a[c]);return e},m=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},r=function(a,b,c,e,f){var g,h;for(a=(b===!1?parseFloat(a).toString():a.toFixed(b)).split(""),g=(g=d.inArray(".",a))<0?a.length:g,g<a.length&&(a[g]=f),h=g-c;h>0;h-=c)a.splice(h,0,e);return a.join("")},n=function(a,b,c){var d;for(d=b.length;d--;)if((!c||null!==b[d])&&b[d]!==a)return!1;return!0},o=function(a){var b,c=0;for(b=a.length;b--;)c+="number"==typeof a[b]?a[b]:0;return c},q=function(a){return d.isArray(a)?a:[a]},p=function(b){var c;a.createStyleSheet?a.createStyleSheet().cssText=b:(c=a.createElement("style"),c.type="text/css",a.getElementsByTagName("head")[0].appendChild(c),c["string"==typeof a.body.style.WebkitAppearance?"innerText":"innerHTML"]=b)},d.fn.simpledraw=function(b,e,f,g){var h,i;if(f&&(h=this.data("_jqs_vcanvas")))return h;if(d.fn.sparkline.canvas===!1)return!1;if(d.fn.sparkline.canvas===c){var j=a.createElement("canvas");if(j.getContext&&j.getContext("2d"))d.fn.sparkline.canvas=function(a,b,c,d){return new H(a,b,c,d)};else{if(!a.namespaces||a.namespaces.v)return d.fn.sparkline.canvas=!1,!1;a.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML"),d.fn.sparkline.canvas=function(a,b,c,d){return new I(a,b,c)}}}return b===c&&(b=d(this).innerWidth()),e===c&&(e=d(this).innerHeight()),h=d.fn.sparkline.canvas(b,e,this,g),i=d(this).data("_jqs_mhandler"),i&&i.registerCanvas(h),h},d.fn.cleardraw=function(){var a=this.data("_jqs_vcanvas");a&&a.reset()},d.RangeMapClass=s=f({init:function(a){var b,c,d=[];for(b in a)a.hasOwnProperty(b)&&"string"==typeof b&&b.indexOf(":")>-1&&(c=b.split(":"),c[0]=0===c[0].length?-(1/0):parseFloat(c[0]),c[1]=0===c[1].length?1/0:parseFloat(c[1]),c[2]=a[b],d.push(c));this.map=a,this.rangelist=d||!1},get:function(a){var b,d,e,f=this.rangelist;if((e=this.map[a])!==c)return e;if(f)for(b=f.length;b--;)if(d=f[b],d[0]<=a&&d[1]>=a)return d[2];return c}}),d.range_map=function(a){return new s(a)},t=f({init:function(a,b){var c=d(a);this.$el=c,this.options=b,this.currentPageX=0,this.currentPageY=0,this.el=a,this.splist=[],this.tooltip=null,this.over=!1,this.displayTooltips=!b.get("disableTooltips"),this.highlightEnabled=!b.get("disableHighlight")},registerSparkline:function(a){this.splist.push(a),this.over&&this.updateDisplay()},registerCanvas:function(a){var b=d(a.canvas);this.canvas=a,this.$canvas=b,b.mouseenter(d.proxy(this.mouseenter,this)),b.mouseleave(d.proxy(this.mouseleave,this)),b.click(d.proxy(this.mouseclick,this))},reset:function(a){this.splist=[],this.tooltip&&a&&(this.tooltip.remove(),this.tooltip=c)},mouseclick:function(a){var b=d.Event("sparklineClick");b.originalEvent=a,b.sparklines=this.splist,this.$el.trigger(b)},mouseenter:function(b){d(a.body).unbind("mousemove.jqs"),d(a.body).bind("mousemove.jqs",d.proxy(this.mousemove,this)),this.over=!0,this.currentPageX=b.pageX,this.currentPageY=b.pageY,this.currentEl=b.target,!this.tooltip&&this.displayTooltips&&(this.tooltip=new u(this.options),this.tooltip.updatePosition(b.pageX,b.pageY)),this.updateDisplay()},mouseleave:function(){d(a.body).unbind("mousemove.jqs");var b,c,e=this.splist,f=e.length,g=!1;for(this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null),c=0;f>c;c++)b=e[c],b.clearRegionHighlight()&&(g=!0);g&&this.canvas.render()},mousemove:function(a){this.currentPageX=a.pageX,this.currentPageY=a.pageY,this.currentEl=a.target,this.tooltip&&this.tooltip.updatePosition(a.pageX,a.pageY),this.updateDisplay()},updateDisplay:function(){var a,b,c,e,f,g=this.splist,h=g.length,i=!1,j=this.$canvas.offset(),k=this.currentPageX-j.left,l=this.currentPageY-j.top;if(this.over){for(c=0;h>c;c++)b=g[c],e=b.setRegionHighlight(this.currentEl,k,l),e&&(i=!0);if(i){if(f=d.Event("sparklineRegionChange"),f.sparklines=this.splist,this.$el.trigger(f),this.tooltip){for(a="",c=0;h>c;c++)b=g[c],a+=b.getCurrentRegionTooltip();this.tooltip.setContent(a)}this.disableHighlight||this.canvas.render()}null===e&&this.mouseleave()}}}),u=f({sizeStyle:"position: static !important;display: block !important;visibility: hidden !important;float: left !important;",init:function(b){var c,e=b.get("tooltipClassname","jqstooltip"),f=this.sizeStyle;this.container=b.get("tooltipContainer")||a.body,this.tooltipOffsetX=b.get("tooltipOffsetX",10),this.tooltipOffsetY=b.get("tooltipOffsetY",12),d("#jqssizetip").remove(),d("#jqstooltip").remove(),this.sizetip=d("<div/>",{id:"jqssizetip",style:f,"class":e}),this.tooltip=d("<div/>",{id:"jqstooltip","class":e}).appendTo(this.container),c=this.tooltip.offset(),this.offsetLeft=c.left,this.offsetTop=c.top,this.hidden=!0,d(window).unbind("resize.jqs scroll.jqs"),d(window).bind("resize.jqs scroll.jqs",d.proxy(this.updateWindowDims,this)),this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=d(window).scrollTop(),this.scrollLeft=d(window).scrollLeft(),this.scrollRight=this.scrollLeft+d(window).width(),this.updatePosition()},getSize:function(a){this.sizetip.html(a).appendTo(this.container),this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove()},setContent:function(a){return a?(this.getSize(a),this.tooltip.html(a).css({width:this.width,height:this.height,visibility:"visible"}),void(this.hidden&&(this.hidden=!1,this.updatePosition()))):(this.tooltip.css("visibility","hidden"),void(this.hidden=!0))},updatePosition:function(a,b){if(a===c){if(this.mousex===c)return;a=this.mousex-this.offsetLeft,b=this.mousey-this.offsetTop}else this.mousex=a-=this.offsetLeft,this.mousey=b-=this.offsetTop;this.height&&this.width&&!this.hidden&&(b-=this.height+this.tooltipOffsetY,a+=this.tooltipOffsetX,b<this.scrollTop&&(b=this.scrollTop),a<this.scrollLeft?a=this.scrollLeft:a+this.width>this.scrollRight&&(a=this.scrollRight-this.width),this.tooltip.css({left:a,top:b}))},remove:function(){this.tooltip.remove(),this.sizetip.remove(),this.sizetip=this.tooltip=c,d(window).unbind("resize.jqs scroll.jqs")}}),E=function(){p(D)},d(E),J=[],d.fn.sparkline=function(b,e){return this.each(function(){var f,g,h=new d.fn.sparkline.options(this,e),i=d(this);if(f=function(){var e,f,g,j,k,l,m;return"html"===b||b===c?(m=this.getAttribute(h.get("tagValuesAttribute")),m!==c&&null!==m||(m=i.html()),e=m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")):e=b,f="auto"===h.get("width")?e.length*h.get("defaultPixelsPerValue"):h.get("width"),"auto"===h.get("height")?h.get("composite")&&d.data(this,"_jqs_vcanvas")||(j=a.createElement("span"),j.innerHTML="a",i.html(j),g=d(j).innerHeight()||d(j).height(),d(j).remove(),j=null):g=h.get("height"),h.get("disableInteraction")?k=!1:(k=d.data(this,"_jqs_mhandler"),k?h.get("composite")||k.reset():(k=new t(this,h),d.data(this,"_jqs_mhandler",k))),h.get("composite")&&!d.data(this,"_jqs_vcanvas")?void(d.data(this,"_jqs_errnotify")||(alert("Attempted to attach a composite sparkline to an element with no existing sparkline"),d.data(this,"_jqs_errnotify",!0))):(l=new(d.fn.sparkline[h.get("type")])(this,e,h,f,g),l.render(),void(k&&k.registerSparkline(l)))},d(this).html()&&!h.get("disableHiddenCheck")&&d(this).is(":hidden")||!d(this).parents("body").length){if(!h.get("composite")&&d.data(this,"_jqs_pending"))for(g=J.length;g;g--)J[g-1][0]==this&&J.splice(g-1,1);J.push([this,f]),d.data(this,"_jqs_pending",!0)}else f.call(this)})},d.fn.sparkline.defaults=e(),d.sparkline_display_visible=function(){var a,b,c,e=[];for(b=0,c=J.length;c>b;b++)a=J[b][0],d(a).is(":visible")&&!d(a).parents().is(":hidden")?(J[b][1].call(a),d.data(J[b][0],"_jqs_pending",!1),e.push(b)):d(a).closest("html").length||d.data(a,"_jqs_pending")||(d.data(J[b][0],"_jqs_pending",!1),e.push(b));for(b=e.length;b;b--)J.splice(e[b-1],1)},d.fn.sparkline.options=f({init:function(a,b){var c,e,f,g;this.userOptions=b=b||{},this.tag=a,this.tagValCache={},e=d.fn.sparkline.defaults,f=e.common,this.tagOptionsPrefix=b.enableTagOptions&&(b.tagOptionsPrefix||f.tagOptionsPrefix),g=this.getTagSetting("type"),c=g===K?e[b.type||f.type]:e[g],this.mergedOptions=d.extend({},f,c,b)},getTagSetting:function(a){var b,d,e,f,g=this.tagOptionsPrefix;if(g===!1||g===c)return K;if(this.tagValCache.hasOwnProperty(a))b=this.tagValCache.key;else{if(b=this.tag.getAttribute(g+a),b===c||null===b)b=K;else if("["===b.substr(0,1))for(b=b.substr(1,b.length-2).split(","),d=b.length;d--;)b[d]=j(b[d].replace(/(^\s*)|(\s*$)/g,""));else if("{"===b.substr(0,1))for(e=b.substr(1,b.length-2).split(","),b={},d=e.length;d--;)f=e[d].split(":",2),b[f[0].replace(/(^\s*)|(\s*$)/g,"")]=j(f[1].replace(/(^\s*)|(\s*$)/g,""));else b=j(b);this.tagValCache.key=b}return b},get:function(a,b){var d,e=this.getTagSetting(a);return e!==K?e:(d=this.mergedOptions[a])===c?b:d}}),d.fn.sparkline._base=f({disabled:!1,init:function(a,b,e,f,g){this.el=a,this.$el=d(a),this.values=b,this.options=e,this.width=f,this.height=g,this.currentRegion=c},initTarget:function(){var a=!this.options.get("disableInteraction");(this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),a))?(this.canvasWidth=this.target.pixelWidth,this.canvasHeight=this.target.pixelHeight):this.disabled=!0},render:function(){return this.disabled?(this.el.innerHTML="",!1):!0},getRegion:function(a,b){},setRegionHighlight:function(a,b,d){var e,f=this.currentRegion,g=!this.options.get("disableHighlight");return b>this.canvasWidth||d>this.canvasHeight||0>b||0>d?null:(e=this.getRegion(a,b,d),f!==e?(f!==c&&g&&this.removeHighlight(),this.currentRegion=e,e!==c&&g&&this.renderHighlight(),!0):!1)},clearRegionHighlight:function(){return this.currentRegion!==c?(this.removeHighlight(),this.currentRegion=c,!0):!1},renderHighlight:function(){this.changeHighlight(!0)},removeHighlight:function(){this.changeHighlight(!1)},changeHighlight:function(a){},getCurrentRegionTooltip:function(){var a,b,e,f,h,i,j,k,l,m,n,o,p,q,r=this.options,s="",t=[];if(this.currentRegion===c)return"";if(a=this.getCurrentRegionFields(),n=r.get("tooltipFormatter"))return n(this,r,a);if(r.get("tooltipChartTitle")&&(s+='<div class="jqs jqstitle">'+r.get("tooltipChartTitle")+"</div>\n"),b=this.options.get("tooltipFormat"),!b)return"";if(d.isArray(b)||(b=[b]),d.isArray(a)||(a=[a]),j=this.options.get("tooltipFormatFieldlist"),k=this.options.get("tooltipFormatFieldlistKey"),j&&k){for(l=[],i=a.length;i--;)m=a[i][k],-1!=(q=d.inArray(m,j))&&(l[q]=a[i]);a=l}for(e=b.length,p=a.length,i=0;e>i;i++)for(o=b[i],"string"==typeof o&&(o=new g(o)),f=o.fclass||"jqsfield",q=0;p>q;q++)a[q].isNull&&r.get("tooltipSkipNull")||(d.extend(a[q],{prefix:r.get("tooltipPrefix"),suffix:r.get("tooltipSuffix")}),h=o.render(a[q],r.get("tooltipValueLookups"),r),t.push('<div class="'+f+'">'+h+"</div>"));return t.length?s+t.join("\n"):""},getCurrentRegionFields:function(){},calcHighlightColor:function(a,c){var d,e,f,g,i=c.get("highlightColor"),j=c.get("highlightLighten");if(i)return i;if(j&&(d=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a))){for(f=[],e=4===a.length?16:1,g=0;3>g;g++)f[g]=h(b.round(parseInt(d[g+1],16)*e*j),0,255);return"rgb("+f.join(",")+")"}return a}}),v={changeHighlight:function(a){var b,c=this.currentRegion,e=this.target,f=this.regionShapes[c];f&&(b=this.renderRegion(c,a),d.isArray(b)||d.isArray(f)?(e.replaceWithShapes(f,b),this.regionShapes[c]=d.map(b,function(a){return a.id})):(e.replaceWithShape(f,b),this.regionShapes[c]=b.id))},render:function(){var a,b,c,e,f=this.values,g=this.target,h=this.regionShapes;if(this.cls._super.render.call(this)){for(c=f.length;c--;)if(a=this.renderRegion(c))if(d.isArray(a)){for(b=[],e=a.length;e--;)a[e].append(),b.push(a[e].id);h[c]=b}else a.append(),h[c]=a.id;else h[c]=null;g.render()}}},d.fn.sparkline.line=w=f(d.fn.sparkline._base,{type:"line",init:function(a,b,c,d,e){w._super.init.call(this,a,b,c,d,e),this.vertices=[],this.regionMap=[],this.xvalues=[],this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,this.initTarget()},getRegion:function(a,b,d){var e,f=this.regionMap;for(e=f.length;e--;)if(null!==f[e]&&b>=f[e][0]&&b<=f[e][1])return f[e][2];return c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:null===this.yvalues[a],x:this.xvalues[a],y:this.yvalues[a],color:this.options.get("lineColor"),fillColor:this.options.get("fillColor"),offset:a}},renderHighlight:function(){var a,b,d=this.currentRegion,e=this.target,f=this.vertices[d],g=this.options,h=g.get("spotRadius"),i=g.get("highlightSpotColor"),j=g.get("highlightLineColor");f&&(h&&i&&(a=e.drawCircle(f[0],f[1],h,c,i),this.highlightSpotId=a.id,e.insertAfterShape(this.lastShapeId,a)),j&&(b=e.drawLine(f[0],this.canvasTop,f[0],this.canvasTop+this.canvasHeight,j),this.highlightLineId=b.id,e.insertAfterShape(this.lastShapeId,b)))},removeHighlight:function(){var a=this.target;this.highlightSpotId&&(a.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),this.highlightLineId&&(a.removeShapeId(this.highlightLineId),this.highlightLineId=null)},scanValues:function(){var a,c,d,e,f,g=this.values,h=g.length,i=this.xvalues,j=this.yvalues,k=this.yminmax;for(a=0;h>a;a++)c=g[a],d="string"==typeof g[a],e="object"==typeof g[a]&&g[a]instanceof Array,f=d&&g[a].split(":"),d&&2===f.length?(i.push(Number(f[0])),j.push(Number(f[1])),k.push(Number(f[1]))):e?(i.push(c[0]),j.push(c[1]),k.push(c[1])):(i.push(a),null===g[a]||"null"===g[a]?j.push(null):(j.push(Number(c)),k.push(Number(c))));this.options.get("xvalues")&&(i=this.options.get("xvalues")),this.maxy=this.maxyorg=b.max.apply(b,k),this.miny=this.minyorg=b.min.apply(b,k),this.maxx=b.max.apply(b,i),this.minx=b.min.apply(b,i),this.xvalues=i,this.yvalues=j,this.yminmax=k},processRangeOptions:function(){var a=this.options,b=a.get("normalRangeMin"),d=a.get("normalRangeMax");b!==c&&(b<this.miny&&(this.miny=b),d>this.maxy&&(this.maxy=d)),a.get("chartRangeMin")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMin")<this.miny)&&(this.miny=a.get("chartRangeMin")),a.get("chartRangeMax")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMax")>this.maxy)&&(this.maxy=a.get("chartRangeMax")),a.get("chartRangeMinX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMinX")<this.minx)&&(this.minx=a.get("chartRangeMinX")),a.get("chartRangeMaxX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMaxX")>this.maxx)&&(this.maxx=a.get("chartRangeMaxX"))},drawNormalRange:function(a,d,e,f,g){var h=this.options.get("normalRangeMin"),i=this.options.get("normalRangeMax"),j=d+b.round(e-e*((i-this.miny)/g)),k=b.round(e*(i-h)/g);this.target.drawRect(a,j,f,k,c,this.options.get("normalRangeColor")).append()},render:function(){var a,e,f,g,h,i,j,k,l,m,n,o,p,q,r,t,u,v,x,y,z,A,B,C,D,E=this.options,F=this.target,G=this.canvasWidth,H=this.canvasHeight,I=this.vertices,J=E.get("spotRadius"),K=this.regionMap;if(w._super.render.call(this)&&(this.scanValues(),this.processRangeOptions(),B=this.xvalues,C=this.yvalues,this.yminmax.length&&!(this.yvalues.length<2))){for(g=h=0,a=this.maxx-this.minx===0?1:this.maxx-this.minx,e=this.maxy-this.miny===0?1:this.maxy-this.miny,f=this.yvalues.length-1,J&&(4*J>G||4*J>H)&&(J=0),J&&(z=E.get("highlightSpotColor")&&!E.get("disableInteraction"),(z||E.get("minSpotColor")||E.get("spotColor")&&C[f]===this.miny)&&(H-=b.ceil(J)),(z||E.get("maxSpotColor")||E.get("spotColor")&&C[f]===this.maxy)&&(H-=b.ceil(J),g+=b.ceil(J)),(z||(E.get("minSpotColor")||E.get("maxSpotColor"))&&(C[0]===this.miny||C[0]===this.maxy))&&(h+=b.ceil(J),G-=b.ceil(J)),(z||E.get("spotColor")||E.get("minSpotColor")||E.get("maxSpotColor")&&(C[f]===this.miny||C[f]===this.maxy))&&(G-=b.ceil(J))),H--,E.get("normalRangeMin")===c||E.get("drawNormalOnTop")||this.drawNormalRange(h,g,H,G,e),j=[],k=[j],q=r=null,t=C.length,D=0;t>D;D++)l=B[D],n=B[D+1],m=C[D],o=h+b.round((l-this.minx)*(G/a)),p=t-1>D?h+b.round((n-this.minx)*(G/a)):G,r=o+(p-o)/2,K[D]=[q||0,r,D],q=r,null===m?D&&(null!==C[D-1]&&(j=[],k.push(j)),I.push(null)):(m<this.miny&&(m=this.miny),m>this.maxy&&(m=this.maxy),j.length||j.push([o,g+H]),i=[o,g+b.round(H-H*((m-this.miny)/e))],j.push(i),I.push(i));for(u=[],v=[],x=k.length,D=0;x>D;D++)j=k[D],j.length&&(E.get("fillColor")&&(j.push([j[j.length-1][0],g+H]),v.push(j.slice(0)),j.pop()),j.length>2&&(j[0]=[j[0][0],j[1][1]]),u.push(j));for(x=v.length,D=0;x>D;D++)F.drawShape(v[D],E.get("fillColor"),E.get("fillColor")).append();for(E.get("normalRangeMin")!==c&&E.get("drawNormalOnTop")&&this.drawNormalRange(h,g,H,G,e),x=u.length,D=0;x>D;D++)F.drawShape(u[D],E.get("lineColor"),c,E.get("lineWidth")).append();if(J&&E.get("valueSpots"))for(y=E.get("valueSpots"),y.get===c&&(y=new s(y)),D=0;t>D;D++)A=y.get(C[D]),A&&F.drawCircle(h+b.round((B[D]-this.minx)*(G/a)),g+b.round(H-H*((C[D]-this.miny)/e)),J,c,A).append();J&&E.get("spotColor")&&null!==C[f]&&F.drawCircle(h+b.round((B[B.length-1]-this.minx)*(G/a)),g+b.round(H-H*((C[f]-this.miny)/e)),J,c,E.get("spotColor")).append(),this.maxy!==this.minyorg&&(J&&E.get("minSpotColor")&&(l=B[d.inArray(this.minyorg,C)],F.drawCircle(h+b.round((l-this.minx)*(G/a)),g+b.round(H-H*((this.minyorg-this.miny)/e)),J,c,E.get("minSpotColor")).append()),J&&E.get("maxSpotColor")&&(l=B[d.inArray(this.maxyorg,C)],F.drawCircle(h+b.round((l-this.minx)*(G/a)),g+b.round(H-H*((this.maxyorg-this.miny)/e)),J,c,E.get("maxSpotColor")).append())),this.lastShapeId=F.getLastShapeId(),this.canvasTop=g,F.render()}}}),d.fn.sparkline.bar=x=f(d.fn.sparkline._base,v,{type:"bar",init:function(a,e,f,g,i){var m,n,o,p,q,r,t,u,v,w,y,z,A,B,C,D,E,F,G,H,I,J,K=parseInt(f.get("barWidth"),10),L=parseInt(f.get("barSpacing"),10),M=f.get("chartRangeMin"),N=f.get("chartRangeMax"),O=f.get("chartRangeClip"),P=1/0,Q=-(1/0);for(x._super.init.call(this,a,e,f,g,i),r=0,t=e.length;t>r;r++)H=e[r],m="string"==typeof H&&H.indexOf(":")>-1,(m||d.isArray(H))&&(C=!0,m&&(H=e[r]=k(H.split(":"))),H=l(H,null),n=b.min.apply(b,H),o=b.max.apply(b,H),P>n&&(P=n),o>Q&&(Q=o));this.stacked=C,this.regionShapes={},this.barWidth=K,this.barSpacing=L,this.totalBarWidth=K+L,this.width=g=e.length*K+(e.length-1)*L,this.initTarget(),O&&(A=M===c?-(1/0):M,B=N===c?1/0:N),q=[],p=C?[]:q;var R=[],S=[];for(r=0,t=e.length;t>r;r++)if(C)for(D=e[r],e[r]=G=[],R[r]=0,p[r]=S[r]=0,E=0,F=D.length;F>E;E++)H=G[E]=O?h(D[E],A,B):D[E],null!==H&&(H>0&&(R[r]+=H),0>P&&Q>0?0>H?S[r]+=b.abs(H):p[r]+=H:p[r]+=b.abs(H-(0>H?Q:P)),q.push(H));else H=O?h(e[r],A,B):e[r],H=e[r]=j(H),null!==H&&q.push(H);this.max=z=b.max.apply(b,q),this.min=y=b.min.apply(b,q),this.stackMax=Q=C?b.max.apply(b,R):z,this.stackMin=P=C?b.min.apply(b,q):y,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<y)&&(y=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>z)&&(z=f.get("chartRangeMax")),this.zeroAxis=v=f.get("zeroAxis",!0),w=0>=y&&z>=0&&v?0:0==v?y:y>0?y:z,this.xaxisOffset=w,u=C?b.max.apply(b,p)+b.max.apply(b,S):z-y,this.canvasHeightEf=v&&0>y?this.canvasHeight-2:this.canvasHeight-1,w>y?(J=C&&z>=0?Q:z,I=(J-w)/u*this.canvasHeight,I!==b.ceil(I)&&(this.canvasHeightEf-=2,I=b.ceil(I))):I=this.canvasHeight,this.yoffset=I,d.isArray(f.get("colorMap"))?(this.colorMapByIndex=f.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=f.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new s(this.colorMapByValue))),this.range=u},getRegion:function(a,d,e){var f=b.floor(d/this.totalBarWidth);return 0>f||f>=this.values.length?c:f},getCurrentRegionFields:function(){var a,b,c=this.currentRegion,d=q(this.values[c]),e=[];for(b=d.length;b--;)a=d[b],e.push({isNull:null===a,value:a,color:this.calcColor(b,a,c),offset:c});return e},calcColor:function(a,b,e){var f,g,h=this.colorMapByIndex,i=this.colorMapByValue,j=this.options;return f=this.stacked?j.get("stackedBarColor"):0>b?j.get("negBarColor"):j.get("barColor"),0===b&&j.get("zeroColor")!==c&&(f=j.get("zeroColor")),i&&(g=i.get(b))?f=g:h&&h.length>e&&(f=h[e]),d.isArray(f)?f[a%f.length]:f},renderRegion:function(a,e){var f,g,h,i,j,k,l,m,o,p,q=this.values[a],r=this.options,s=this.xaxisOffset,t=[],u=this.range,v=this.stacked,w=this.target,x=a*this.totalBarWidth,y=this.canvasHeightEf,z=this.yoffset;if(q=d.isArray(q)?q:[q],l=q.length,m=q[0],i=n(null,q),p=n(s,q,!0),i)return r.get("nullColor")?(h=e?r.get("nullColor"):this.calcHighlightColor(r.get("nullColor"),r),f=z>0?z-1:z,w.drawRect(x,f,this.barWidth-1,0,h,h)):c;for(j=z,k=0;l>k;k++){if(m=q[k],v&&m===s){if(!p||o)continue;o=!0}g=u>0?b.floor(y*(b.abs(m-s)/u))+1:1,s>m||m===s&&0===z?(f=j,j+=g):(f=z-g,z-=g),h=this.calcColor(k,m,a),e&&(h=this.calcHighlightColor(h,r)),t.push(w.drawRect(x,f,this.barWidth-1,g-1,h,h))}return 1===t.length?t[0]:t}}),d.fn.sparkline.tristate=y=f(d.fn.sparkline._base,v,{type:"tristate",init:function(a,b,e,f,g){var h=parseInt(e.get("barWidth"),10),i=parseInt(e.get("barSpacing"),10);y._super.init.call(this,a,b,e,f,g),this.regionShapes={},this.barWidth=h,this.barSpacing=i,this.totalBarWidth=h+i,this.values=d.map(b,Number),this.width=f=b.length*h+(b.length-1)*i,d.isArray(e.get("colorMap"))?(this.colorMapByIndex=e.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=e.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new s(this.colorMapByValue))),this.initTarget()},getRegion:function(a,c,d){return b.floor(c/this.totalBarWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],color:this.calcColor(this.values[a],a),offset:a}},calcColor:function(a,b){var c,d,e=this.values,f=this.options,g=this.colorMapByIndex,h=this.colorMapByValue;return c=h&&(d=h.get(a))?d:g&&g.length>b?g[b]:e[b]<0?f.get("negBarColor"):e[b]>0?f.get("posBarColor"):f.get("zeroBarColor")},renderRegion:function(a,c){var d,e,f,g,h,i,j=this.values,k=this.options,l=this.target;return d=l.pixelHeight,f=b.round(d/2),g=a*this.totalBarWidth,j[a]<0?(h=f,e=f-1):j[a]>0?(h=0,e=f-1):(h=f-1,e=2),i=this.calcColor(j[a],a),null!==i?(c&&(i=this.calcHighlightColor(i,k)),l.drawRect(g,h,this.barWidth-1,e-1,i,i)):void 0}}),d.fn.sparkline.discrete=z=f(d.fn.sparkline._base,v,{type:"discrete",init:function(a,e,f,g,h){z._super.init.call(this,a,e,f,g,h),this.regionShapes={},this.values=e=d.map(e,Number),this.min=b.min.apply(b,e),this.max=b.max.apply(b,e),this.range=this.max-this.min,this.width=g="auto"===f.get("width")?2*e.length:this.width,this.interval=b.floor(g/e.length),this.itemWidth=g/e.length,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<this.min)&&(this.min=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>this.max)&&(this.max=f.get("chartRangeMax")),this.initTarget(),this.target&&(this.lineHeight="auto"===f.get("lineHeight")?b.round(.3*this.canvasHeight):f.get("lineHeight"))},getRegion:function(a,c,d){return b.floor(c/this.itemWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],offset:a}},renderRegion:function(a,c){var d,e,f,g,i=this.values,j=this.options,k=this.min,l=this.max,m=this.range,n=this.interval,o=this.target,p=this.canvasHeight,q=this.lineHeight,r=p-q;return e=h(i[a],k,l),g=a*n,d=b.round(r-r*((e-k)/m)),f=j.get("thresholdColor")&&e<j.get("thresholdValue")?j.get("thresholdColor"):j.get("lineColor"),c&&(f=this.calcHighlightColor(f,j)),o.drawLine(g,d,g,d+q,f)}}),d.fn.sparkline.bullet=A=f(d.fn.sparkline._base,{type:"bullet",init:function(a,d,e,f,g){var h,i,j;A._super.init.call(this,a,d,e,f,g),this.values=d=k(d),j=d.slice(),j[0]=null===j[0]?j[2]:j[0],j[1]=null===d[1]?j[2]:j[1],h=b.min.apply(b,d),i=b.max.apply(b,d),h=e.get("base")===c?0>h?h:0:e.get("base"),this.min=h,this.max=i,this.range=i-h,this.shapes={},this.valueShapes={},this.regiondata={},this.width=f="auto"===e.get("width")?"4.0em":f,this.target=this.$el.simpledraw(f,g,e.get("composite")),d.length||(this.disabled=!0),this.initTarget()},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{fieldkey:a.substr(0,1),value:this.values[a.substr(1)],region:a}},changeHighlight:function(a){var b,c=this.currentRegion,d=this.valueShapes[c];switch(delete this.shapes[d],c.substr(0,1)){case"r":b=this.renderRange(c.substr(1),a);break;case"p":b=this.renderPerformance(a);break;case"t":b=this.renderTarget(a)}this.valueShapes[c]=b.id,this.shapes[b.id]=c,this.target.replaceWithShape(d,b)},renderRange:function(a,c){var d=this.values[a],e=b.round(this.canvasWidth*((d-this.min)/this.range)),f=this.options.get("rangeColors")[a-2];return c&&(f=this.calcHighlightColor(f,this.options)),this.target.drawRect(0,0,e-1,this.canvasHeight-1,f,f)},renderPerformance:function(a){var c=this.values[1],d=b.round(this.canvasWidth*((c-this.min)/this.range)),e=this.options.get("performanceColor");return a&&(e=this.calcHighlightColor(e,this.options)),this.target.drawRect(0,b.round(.3*this.canvasHeight),d-1,b.round(.4*this.canvasHeight)-1,e,e)},renderTarget:function(a){var c=this.values[0],d=b.round(this.canvasWidth*((c-this.min)/this.range)-this.options.get("targetWidth")/2),e=b.round(.1*this.canvasHeight),f=this.canvasHeight-2*e,g=this.options.get("targetColor");return a&&(g=this.calcHighlightColor(g,this.options)),this.target.drawRect(d,e,this.options.get("targetWidth")-1,f-1,g,g)},render:function(){var a,b,c=this.values.length,d=this.target;if(A._super.render.call(this)){for(a=2;c>a;a++)b=this.renderRange(a).append(),this.shapes[b.id]="r"+a,this.valueShapes["r"+a]=b.id;null!==this.values[1]&&(b=this.renderPerformance().append(),this.shapes[b.id]="p1",this.valueShapes.p1=b.id),null!==this.values[0]&&(b=this.renderTarget().append(),this.shapes[b.id]="t0",this.valueShapes.t0=b.id),d.render()}}}),d.fn.sparkline.pie=B=f(d.fn.sparkline._base,{type:"pie",init:function(a,c,e,f,g){var h,i=0;if(B._super.init.call(this,a,c,e,f,g),this.shapes={},this.valueShapes={},this.values=c=d.map(c,Number),"auto"===e.get("width")&&(this.width=this.height),c.length>0)for(h=c.length;h--;)i+=c[h];this.total=i,this.initTarget(),this.radius=b.floor(b.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],percent:this.values[a]/this.total*100,color:this.options.get("sliceColors")[a%this.options.get("sliceColors").length],offset:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.renderSlice(b,a),d=this.valueShapes[b];delete this.shapes[d],this.target.replaceWithShape(d,c),this.valueShapes[b]=c.id,this.shapes[c.id]=b},renderSlice:function(a,d){var e,f,g,h,i,j=this.target,k=this.options,l=this.radius,m=k.get("borderWidth"),n=k.get("offset"),o=2*b.PI,p=this.values,q=this.total,r=n?2*b.PI*(n/360):0;for(h=p.length,g=0;h>g;g++){if(e=r,f=r,q>0&&(f=r+o*(p[g]/q)),a===g)return i=k.get("sliceColors")[g%k.get("sliceColors").length],d&&(i=this.calcHighlightColor(i,k)),j.drawPieSlice(l,l,l-m,e,f,c,i);r=f}},render:function(){var a,d,e=this.target,f=this.values,g=this.options,h=this.radius,i=g.get("borderWidth");
if(B._super.render.call(this)){for(i&&e.drawCircle(h,h,b.floor(h-i/2),g.get("borderColor"),c,i).append(),d=f.length;d--;)f[d]&&(a=this.renderSlice(d).append(),this.valueShapes[d]=a.id,this.shapes[a.id]=d);e.render()}}}),d.fn.sparkline.box=C=f(d.fn.sparkline._base,{type:"box",init:function(a,b,c,e,f){C._super.init.call(this,a,b,c,e,f),this.values=d.map(b,Number),this.width="auto"===c.get("width")?"4.0em":e,this.initTarget(),this.values.length||(this.disabled=1)},getRegion:function(){return 1},getCurrentRegionFields:function(){var a=[{field:"lq",value:this.quartiles[0]},{field:"med",value:this.quartiles[1]},{field:"uq",value:this.quartiles[2]}];return this.loutlier!==c&&a.push({field:"lo",value:this.loutlier}),this.routlier!==c&&a.push({field:"ro",value:this.routlier}),this.lwhisker!==c&&a.push({field:"lw",value:this.lwhisker}),this.rwhisker!==c&&a.push({field:"rw",value:this.rwhisker}),a},render:function(){var a,d,e,f,g,h,j,k,l,m,n,o=this.target,p=this.values,q=p.length,r=this.options,s=this.canvasWidth,t=this.canvasHeight,u=r.get("chartRangeMin")===c?b.min.apply(b,p):r.get("chartRangeMin"),v=r.get("chartRangeMax")===c?b.max.apply(b,p):r.get("chartRangeMax"),w=0;if(C._super.render.call(this)){if(r.get("raw"))r.get("showOutliers")&&p.length>5?(d=p[0],a=p[1],f=p[2],g=p[3],h=p[4],j=p[5],k=p[6]):(a=p[0],f=p[1],g=p[2],h=p[3],j=p[4]);else if(p.sort(function(a,b){return a-b}),f=i(p,1),g=i(p,2),h=i(p,3),e=h-f,r.get("showOutliers")){for(a=j=c,l=0;q>l;l++)a===c&&p[l]>f-e*r.get("outlierIQR")&&(a=p[l]),p[l]<h+e*r.get("outlierIQR")&&(j=p[l]);d=p[0],k=p[q-1]}else a=p[0],j=p[q-1];this.quartiles=[f,g,h],this.lwhisker=a,this.rwhisker=j,this.loutlier=d,this.routlier=k,n=s/(v-u+1),r.get("showOutliers")&&(w=b.ceil(r.get("spotRadius")),s-=2*b.ceil(r.get("spotRadius")),n=s/(v-u+1),a>d&&o.drawCircle((d-u)*n+w,t/2,r.get("spotRadius"),r.get("outlierLineColor"),r.get("outlierFillColor")).append(),k>j&&o.drawCircle((k-u)*n+w,t/2,r.get("spotRadius"),r.get("outlierLineColor"),r.get("outlierFillColor")).append()),o.drawRect(b.round((f-u)*n+w),b.round(.1*t),b.round((h-f)*n),b.round(.8*t),r.get("boxLineColor"),r.get("boxFillColor")).append(),o.drawLine(b.round((a-u)*n+w),b.round(t/2),b.round((f-u)*n+w),b.round(t/2),r.get("lineColor")).append(),o.drawLine(b.round((a-u)*n+w),b.round(t/4),b.round((a-u)*n+w),b.round(t-t/4),r.get("whiskerColor")).append(),o.drawLine(b.round((j-u)*n+w),b.round(t/2),b.round((h-u)*n+w),b.round(t/2),r.get("lineColor")).append(),o.drawLine(b.round((j-u)*n+w),b.round(t/4),b.round((j-u)*n+w),b.round(t-t/4),r.get("whiskerColor")).append(),o.drawLine(b.round((g-u)*n+w),b.round(.1*t),b.round((g-u)*n+w),b.round(.9*t),r.get("medianColor")).append(),r.get("target")&&(m=b.ceil(r.get("spotRadius")),o.drawLine(b.round((r.get("target")-u)*n+w),b.round(t/2-m),b.round((r.get("target")-u)*n+w),b.round(t/2+m),r.get("targetColor")).append(),o.drawLine(b.round((r.get("target")-u)*n+w-m),b.round(t/2),b.round((r.get("target")-u)*n+w+m),b.round(t/2),r.get("targetColor")).append()),o.render()}}}),F=f({init:function(a,b,c,d){this.target=a,this.id=b,this.type=c,this.args=d},append:function(){return this.target.appendShape(this),this}}),G=f({_pxregex:/(\d+)(px)?\s*$/i,init:function(a,b,c){a&&(this.width=a,this.height=b,this.target=c,this.lastShapeId=null,c[0]&&(c=c[0]),d.data(c,"_jqs_vcanvas",this))},drawLine:function(a,b,c,d,e,f){return this.drawShape([[a,b],[c,d]],e,f)},drawShape:function(a,b,c,d){return this._genShape("Shape",[a,b,c,d])},drawCircle:function(a,b,c,d,e,f){return this._genShape("Circle",[a,b,c,d,e,f])},drawPieSlice:function(a,b,c,d,e,f,g){return this._genShape("PieSlice",[a,b,c,d,e,f,g])},drawRect:function(a,b,c,d,e,f){return this._genShape("Rect",[a,b,c,d,e,f])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert("reset not implemented")},_insert:function(a,b){d(b).html(a)},_calculatePixelDims:function(a,b,c){var e;e=this._pxregex.exec(b),e?this.pixelHeight=e[1]:this.pixelHeight=d(c).height(),e=this._pxregex.exec(a),e?this.pixelWidth=e[1]:this.pixelWidth=d(c).width()},_genShape:function(a,b){var c=L++;return b.unshift(c),new F(this,c,a,b)},appendShape:function(a){alert("appendShape not implemented")},replaceWithShape:function(a,b){alert("replaceWithShape not implemented")},insertAfterShape:function(a,b){alert("insertAfterShape not implemented")},removeShapeId:function(a){alert("removeShapeId not implemented")},getShapeAt:function(a,b,c){alert("getShapeAt not implemented")},render:function(){alert("render not implemented")}}),H=f(G,{init:function(b,e,f,g){H._super.init.call(this,b,e,f),this.canvas=a.createElement("canvas"),f[0]&&(f=f[0]),d.data(f,"_jqs_vcanvas",this),d(this.canvas).css({display:"inline-block",width:b,height:e,verticalAlign:"top"}),this._insert(this.canvas,f),this._calculatePixelDims(b,e,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=g,this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c,d(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(a,b,d){var e=this.canvas.getContext("2d");return a!==c&&(e.strokeStyle=a),e.lineWidth=d===c?1:d,b!==c&&(e.fillStyle=b),e},reset:function(){var a=this._getContext();a.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c},_drawShape:function(a,b,d,e,f){var g,h,i=this._getContext(d,e,f);for(i.beginPath(),i.moveTo(b[0][0]+.5,b[0][1]+.5),g=1,h=b.length;h>g;g++)i.lineTo(b[g][0]+.5,b[g][1]+.5);d!==c&&i.stroke(),e!==c&&i.fill(),this.targetX!==c&&this.targetY!==c&&i.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawCircle:function(a,d,e,f,g,h,i){var j=this._getContext(g,h,i);j.beginPath(),j.arc(d,e,f,0,2*b.PI,!1),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a),g!==c&&j.stroke(),h!==c&&j.fill()},_drawPieSlice:function(a,b,d,e,f,g,h,i){var j=this._getContext(h,i);j.beginPath(),j.moveTo(b,d),j.arc(b,d,e,f,g,!1),j.lineTo(b,d),j.closePath(),h!==c&&j.stroke(),i&&j.fill(),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b+d,c],[b+d,c+e],[b,c+e],[b,c]],f,g)},appendShape:function(a){return this.shapes[a.id]=a,this.shapeseq.push(a.id),this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c,d=this.shapeseq;for(this.shapes[b.id]=b,c=d.length;c--;)d[c]==a&&(d[c]=b.id);delete this.shapes[a]},replaceWithShapes:function(a,b){var c,d,e,f=this.shapeseq,g={};for(d=a.length;d--;)g[a[d]]=!0;for(d=f.length;d--;)c=f[d],g[c]&&(f.splice(d,1),delete this.shapes[c],e=d);for(d=b.length;d--;)f.splice(e,0,b[d].id),this.shapes[b[d].id]=b[d]},insertAfterShape:function(a,b){var c,d=this.shapeseq;for(c=d.length;c--;)if(d[c]===a)return d.splice(c+1,0,b.id),void(this.shapes[b.id]=b)},removeShapeId:function(a){var b,c=this.shapeseq;for(b=c.length;b--;)if(c[b]===a){c.splice(b,1);break}delete this.shapes[a]},getShapeAt:function(a,b,c){return this.targetX=b,this.targetY=c,this.render(),this.currentTargetShapeId},render:function(){var a,b,c,d=this.shapeseq,e=this.shapes,f=d.length,g=this._getContext();for(g.clearRect(0,0,this.pixelWidth,this.pixelHeight),c=0;f>c;c++)a=d[c],b=e[a],this["_draw"+b.type].apply(this,b.args);this.interact||(this.shapes={},this.shapeseq=[])}}),I=f(G,{init:function(b,c,e){var f;I._super.init.call(this,b,c,e),e[0]&&(e=e[0]),d.data(e,"_jqs_vcanvas",this),this.canvas=a.createElement("span"),d(this.canvas).css({display:"inline-block",position:"relative",overflow:"hidden",width:b,height:c,margin:"0px",padding:"0px",verticalAlign:"top"}),this._insert(this.canvas,e),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,f='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>',this.canvas.insertAdjacentHTML("beforeEnd",f),this.group=d(this.canvas).children()[0],this.rendered=!1,this.prerender=""},_drawShape:function(a,b,d,e,f){var g,h,i,j,k,l,m,n=[];for(m=0,l=b.length;l>m;m++)n[m]=""+b[m][0]+","+b[m][1];return g=n.splice(0,1),f=f===c?1:f,h=d===c?' stroked="false" ':' strokeWeight="'+f+'px" strokeColor="'+d+'" ',i=e===c?' filled="false"':' fillColor="'+e+'" filled="true" ',j=n[0]===n[n.length-1]?"x ":"",k='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"  id="jqsshape'+a+'" '+h+i+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;"  path="m '+g+" l "+n.join(", ")+" "+j+'e"> </v:shape>'},_drawCircle:function(a,b,d,e,f,g,h){var i,j,k;return b-=e,d-=e,i=f===c?' stroked="false" ':' strokeWeight="'+h+'px" strokeColor="'+f+'" ',j=g===c?' filled="false"':' fillColor="'+g+'" filled="true" ',k='<v:oval  id="jqsshape'+a+'" '+i+j+' style="position:absolute;top:'+d+"px; left:"+b+"px; width:"+2*e+"px; height:"+2*e+'px"></v:oval>'},_drawPieSlice:function(a,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r;if(g===h)return"";if(h-g===2*b.PI&&(g=0,h=2*b.PI),l=d+b.round(b.cos(g)*f),m=e+b.round(b.sin(g)*f),n=d+b.round(b.cos(h)*f),o=e+b.round(b.sin(h)*f),l===n&&m===o){if(h-g<b.PI)return"";l=n=d+f,m=o=e}return l===n&&m===o&&h-g<b.PI?"":(k=[d-f,e-f,d+f,e+f,l,m,n,o],p=i===c?' stroked="false" ':' strokeWeight="1px" strokeColor="'+i+'" ',q=j===c?' filled="false"':' fillColor="'+j+'" filled="true" ',r='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"  id="jqsshape'+a+'" '+p+q+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;"  path="m '+d+","+e+" wa "+k.join(", ")+' x e"> </v:shape>')},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b,c+e],[b+d,c+e],[b+d,c],[b,c]],f,g)},reset:function(){this.group.innerHTML=""},appendShape:function(a){var b=this["_draw"+a.type].apply(this,a.args);return this.rendered?this.group.insertAdjacentHTML("beforeEnd",b):this.prerender+=b,this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].outerHTML=e},replaceWithShapes:function(a,b){var c,e=d("#jqsshape"+a[0]),f="",g=b.length;for(c=0;g>c;c++)f+=this["_draw"+b[c].type].apply(this,b[c].args);for(e[0].outerHTML=f,c=1;c<a.length;c++)d("#jqsshape"+a[c]).remove()},insertAfterShape:function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].insertAdjacentHTML("afterEnd",e)},removeShapeId:function(a){var b=d("#jqsshape"+a);this.group.removeChild(b[0])},getShapeAt:function(a,b,c){var d=a.id.substr(8);return d},render:function(){this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0)}})})}(document,Math);
;/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/
!function(a){a.color={},a.color.make=function(b,c,d,e){var f={};return f.r=b||0,f.g=c||0,f.b=d||0,f.a=null!=e?e:1,f.add=function(a,b){for(var c=0;c<a.length;++c)f[a.charAt(c)]+=b;return f.normalize()},f.scale=function(a,b){for(var c=0;c<a.length;++c)f[a.charAt(c)]*=b;return f.normalize()},f.toString=function(){return f.a>=1?"rgb("+[f.r,f.g,f.b].join(",")+")":"rgba("+[f.r,f.g,f.b,f.a].join(",")+")"},f.normalize=function(){function a(a,b,c){return a>b?a:b>c?c:b}return f.r=a(0,parseInt(f.r),255),f.g=a(0,parseInt(f.g),255),f.b=a(0,parseInt(f.b),255),f.a=a(0,f.a,1),f},f.clone=function(){return a.color.make(f.r,f.b,f.g,f.a)},f.normalize()},a.color.extract=function(b,c){var d;do{if(d=b.css(c).toLowerCase(),""!=d&&"transparent"!=d)break;b=b.parent()}while(b.length&&!a.nodeName(b.get(0),"body"));return"rgba(0, 0, 0, 0)"==d&&(d="transparent"),a.color.parse(d)},a.color.parse=function(c){var d,e=a.color.make;if(d=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return e(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10));if(d=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c))return e(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10),parseFloat(d[4]));if(d=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return e(2.55*parseFloat(d[1]),2.55*parseFloat(d[2]),2.55*parseFloat(d[3]));if(d=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c))return e(2.55*parseFloat(d[1]),2.55*parseFloat(d[2]),2.55*parseFloat(d[3]),parseFloat(d[4]));if(d=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return e(parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16));if(d=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return e(parseInt(d[1]+d[1],16),parseInt(d[2]+d[2],16),parseInt(d[3]+d[3],16));var f=a.trim(c).toLowerCase();return"transparent"==f?e(255,255,255,0):(d=b[f]||[0,0,0],e(d[0],d[1],d[2]))};var b={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}}(jQuery),function(a){function b(b,c){var d=c.children("."+b)[0];if(null==d&&(d=document.createElement("canvas"),d.className=b,a(d).css({direction:"ltr",position:"absolute",left:0,top:0}).appendTo(c),!d.getContext)){if(!window.G_vmlCanvasManager)throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");d=window.G_vmlCanvasManager.initElement(d)}this.element=d;var e=this.context=d.getContext("2d"),f=window.devicePixelRatio||1,g=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;this.pixelRatio=f/g,this.resize(c.width(),c.height()),this.textContainer=null,this.text={},this._textCache={}}function c(c,e,f,g){function h(a,b){b=[qa].concat(b);for(var c=0;c<a.length;++c)a[c].apply(this,b)}function i(){for(var c={Canvas:b},d=0;d<g.length;++d){var e=g[d];e.init(qa,c),e.options&&a.extend(!0,ea,e.options)}}function j(b){a.extend(!0,ea,b),b&&b.colors&&(ea.colors=b.colors),null==ea.xaxis.color&&(ea.xaxis.color=a.color.parse(ea.grid.color).scale("a",.22).toString()),null==ea.yaxis.color&&(ea.yaxis.color=a.color.parse(ea.grid.color).scale("a",.22).toString()),null==ea.xaxis.tickColor&&(ea.xaxis.tickColor=ea.grid.tickColor||ea.xaxis.color),null==ea.yaxis.tickColor&&(ea.yaxis.tickColor=ea.grid.tickColor||ea.yaxis.color),null==ea.grid.borderColor&&(ea.grid.borderColor=ea.grid.color),null==ea.grid.tickColor&&(ea.grid.tickColor=a.color.parse(ea.grid.color).scale("a",.22).toString());var d,e,f,g=c.css("font-size"),i=g?+g.replace("px",""):13,j={style:c.css("font-style"),size:Math.round(.8*i),variant:c.css("font-variant"),weight:c.css("font-weight"),family:c.css("font-family")};for(f=ea.xaxes.length||1,d=0;f>d;++d)e=ea.xaxes[d],e&&!e.tickColor&&(e.tickColor=e.color),e=a.extend(!0,{},ea.xaxis,e),ea.xaxes[d]=e,e.font&&(e.font=a.extend({},j,e.font),e.font.color||(e.font.color=e.color),e.font.lineHeight||(e.font.lineHeight=Math.round(1.15*e.font.size)));for(f=ea.yaxes.length||1,d=0;f>d;++d)e=ea.yaxes[d],e&&!e.tickColor&&(e.tickColor=e.color),e=a.extend(!0,{},ea.yaxis,e),ea.yaxes[d]=e,e.font&&(e.font=a.extend({},j,e.font),e.font.color||(e.font.color=e.color),e.font.lineHeight||(e.font.lineHeight=Math.round(1.15*e.font.size)));for(ea.xaxis.noTicks&&null==ea.xaxis.ticks&&(ea.xaxis.ticks=ea.xaxis.noTicks),ea.yaxis.noTicks&&null==ea.yaxis.ticks&&(ea.yaxis.ticks=ea.yaxis.noTicks),ea.x2axis&&(ea.xaxes[1]=a.extend(!0,{},ea.xaxis,ea.x2axis),ea.xaxes[1].position="top",null==ea.x2axis.min&&(ea.xaxes[1].min=null),null==ea.x2axis.max&&(ea.xaxes[1].max=null)),ea.y2axis&&(ea.yaxes[1]=a.extend(!0,{},ea.yaxis,ea.y2axis),ea.yaxes[1].position="right",null==ea.y2axis.min&&(ea.yaxes[1].min=null),null==ea.y2axis.max&&(ea.yaxes[1].max=null)),ea.grid.coloredAreas&&(ea.grid.markings=ea.grid.coloredAreas),ea.grid.coloredAreasColor&&(ea.grid.markingsColor=ea.grid.coloredAreasColor),ea.lines&&a.extend(!0,ea.series.lines,ea.lines),ea.points&&a.extend(!0,ea.series.points,ea.points),ea.bars&&a.extend(!0,ea.series.bars,ea.bars),null!=ea.shadowSize&&(ea.series.shadowSize=ea.shadowSize),null!=ea.highlightColor&&(ea.series.highlightColor=ea.highlightColor),d=0;d<ea.xaxes.length;++d)q(ka,d+1).options=ea.xaxes[d];for(d=0;d<ea.yaxes.length;++d)q(la,d+1).options=ea.yaxes[d];for(var k in pa)ea.hooks[k]&&ea.hooks[k].length&&(pa[k]=pa[k].concat(ea.hooks[k]));h(pa.processOptions,[ea])}function k(a){da=l(a),r(),s()}function l(b){for(var c=[],d=0;d<b.length;++d){var e=a.extend(!0,{},ea.series);null!=b[d].data?(e.data=b[d].data,delete b[d].data,a.extend(!0,e,b[d]),b[d].data=e.data):e.data=b[d],c.push(e)}return c}function m(a,b){var c=a[b+"axis"];return"object"==typeof c&&(c=c.n),"number"!=typeof c&&(c=1),c}function n(){return a.grep(ka.concat(la),function(a){return a})}function o(a){var b,c,d={};for(b=0;b<ka.length;++b)c=ka[b],c&&c.used&&(d["x"+c.n]=c.c2p(a.left));for(b=0;b<la.length;++b)c=la[b],c&&c.used&&(d["y"+c.n]=c.c2p(a.top));return void 0!==d.x1&&(d.x=d.x1),void 0!==d.y1&&(d.y=d.y1),d}function p(a){var b,c,d,e={};for(b=0;b<ka.length;++b)if(c=ka[b],c&&c.used&&(d="x"+c.n,null==a[d]&&1==c.n&&(d="x"),null!=a[d])){e.left=c.p2c(a[d]);break}for(b=0;b<la.length;++b)if(c=la[b],c&&c.used&&(d="y"+c.n,null==a[d]&&1==c.n&&(d="y"),null!=a[d])){e.top=c.p2c(a[d]);break}return e}function q(b,c){return b[c-1]||(b[c-1]={n:c,direction:b==ka?"x":"y",options:a.extend(!0,{},b==ka?ea.xaxis:ea.yaxis)}),b[c-1]}function r(){var b,c=da.length,d=-1;for(b=0;b<da.length;++b){var e=da[b].color;null!=e&&(c--,"number"==typeof e&&e>d&&(d=e))}d>=c&&(c=d+1);var f,g=[],h=ea.colors,i=h.length,j=0;for(b=0;c>b;b++)f=a.color.parse(h[b%i]||"#666"),b%i==0&&b&&(j=j>=0?.5>j?-j-.2:0:-j),g[b]=f.scale("rgb",1+j);var k,l=0;for(b=0;b<da.length;++b){if(k=da[b],null==k.color?(k.color=g[l].toString(),++l):"number"==typeof k.color&&(k.color=g[k.color].toString()),null==k.lines.show){var n,o=!0;for(n in k)if(k[n]&&k[n].show){o=!1;break}o&&(k.lines.show=!0)}null==k.lines.zero&&(k.lines.zero=!!k.lines.fill),k.xaxis=q(ka,m(k,"x")),k.yaxis=q(la,m(k,"y"))}}function s(){function b(a,b,c){b<a.datamin&&b!=-s&&(a.datamin=b),c>a.datamax&&c!=s&&(a.datamax=c)}var c,d,e,f,g,i,j,k,l,m,o,p,q=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,s=Number.MAX_VALUE;for(a.each(n(),function(a,b){b.datamin=q,b.datamax=r,b.used=!1}),c=0;c<da.length;++c)g=da[c],g.datapoints={points:[]},h(pa.processRawData,[g,g.data,g.datapoints]);for(c=0;c<da.length;++c){if(g=da[c],o=g.data,p=g.datapoints.format,!p){if(p=[],p.push({x:!0,number:!0,required:!0}),p.push({y:!0,number:!0,required:!0}),g.bars.show||g.lines.show&&g.lines.fill){var t=!!(g.bars.show&&g.bars.zero||g.lines.show&&g.lines.zero);p.push({y:!0,number:!0,required:!1,defaultValue:0,autoscale:t}),g.bars.horizontal&&(delete p[p.length-1].y,p[p.length-1].x=!0)}g.datapoints.format=p}if(null==g.datapoints.pointsize){g.datapoints.pointsize=p.length,j=g.datapoints.pointsize,i=g.datapoints.points;var u=g.lines.show&&g.lines.steps;for(g.xaxis.used=g.yaxis.used=!0,d=e=0;d<o.length;++d,e+=j){m=o[d];var v=null==m;if(!v)for(f=0;j>f;++f)k=m[f],l=p[f],l&&(l.number&&null!=k&&(k=+k,isNaN(k)?k=null:k==1/0?k=s:k==-(1/0)&&(k=-s)),null==k&&(l.required&&(v=!0),null!=l.defaultValue&&(k=l.defaultValue))),i[e+f]=k;if(v)for(f=0;j>f;++f)k=i[e+f],null!=k&&(l=p[f],l.autoscale!==!1&&(l.x&&b(g.xaxis,k,k),l.y&&b(g.yaxis,k,k))),i[e+f]=null;else if(u&&e>0&&null!=i[e-j]&&i[e-j]!=i[e]&&i[e-j+1]!=i[e+1]){for(f=0;j>f;++f)i[e+j+f]=i[e+f];i[e+1]=i[e-j+1],e+=j}}}}for(c=0;c<da.length;++c)g=da[c],h(pa.processDatapoints,[g,g.datapoints]);for(c=0;c<da.length;++c){g=da[c],i=g.datapoints.points,j=g.datapoints.pointsize,p=g.datapoints.format;var w=q,x=q,y=r,z=r;for(d=0;d<i.length;d+=j)if(null!=i[d])for(f=0;j>f;++f)k=i[d+f],l=p[f],l&&l.autoscale!==!1&&k!=s&&k!=-s&&(l.x&&(w>k&&(w=k),k>y&&(y=k)),l.y&&(x>k&&(x=k),k>z&&(z=k)));if(g.bars.show){var A;switch(g.bars.align){case"left":A=0;break;case"right":A=-g.bars.barWidth;break;default:A=-g.bars.barWidth/2}g.bars.horizontal?(x+=A,z+=A+g.bars.barWidth):(w+=A,y+=A+g.bars.barWidth)}b(g.xaxis,w,y),b(g.yaxis,x,z)}a.each(n(),function(a,b){b.datamin==q&&(b.datamin=null),b.datamax==r&&(b.datamax=null)})}function t(){c.css("padding",0).children().filter(function(){return!a(this).hasClass("flot-overlay")&&!a(this).hasClass("flot-base")}).remove(),"static"==c.css("position")&&c.css("position","relative"),fa=new b("flot-base",c),ga=new b("flot-overlay",c),ia=fa.context,ja=ga.context,ha=a(ga.element).unbind();var d=c.data("plot");d&&(d.shutdown(),ga.clear()),c.data("plot",qa)}function u(){ea.grid.hoverable&&(ha.mousemove(T),ha.bind("mouseleave",U)),ea.grid.clickable&&ha.click(V),h(pa.bindEvents,[ha])}function v(){sa&&clearTimeout(sa),ha.unbind("mousemove",T),ha.unbind("mouseleave",U),ha.unbind("click",V),h(pa.shutdown,[ha])}function w(a){function b(a){return a}var c,d,e=a.options.transform||b,f=a.options.inverseTransform;"x"==a.direction?(c=a.scale=na/Math.abs(e(a.max)-e(a.min)),d=Math.min(e(a.max),e(a.min))):(c=a.scale=oa/Math.abs(e(a.max)-e(a.min)),c=-c,d=Math.max(e(a.max),e(a.min))),e==b?a.p2c=function(a){return(a-d)*c}:a.p2c=function(a){return(e(a)-d)*c},f?a.c2p=function(a){return f(d+a/c)}:a.c2p=function(a){return d+a/c}}function x(a){for(var b=a.options,c=a.ticks||[],d=b.labelWidth||0,e=b.labelHeight||0,f=d||("x"==a.direction?Math.floor(fa.width/(c.length||1)):null),g=a.direction+"Axis "+a.direction+a.n+"Axis",h="flot-"+a.direction+"-axis flot-"+a.direction+a.n+"-axis "+g,i=b.font||"flot-tick-label tickLabel",j=0;j<c.length;++j){var k=c[j];if(k.label){var l=fa.getTextInfo(h,k.label,i,null,f);d=Math.max(d,l.width),e=Math.max(e,l.height)}}a.labelWidth=b.labelWidth||d,a.labelHeight=b.labelHeight||e}function y(b){var c=b.labelWidth,d=b.labelHeight,e=b.options.position,f="x"===b.direction,g=b.options.tickLength,h=ea.grid.axisMargin,i=ea.grid.labelMargin,j=!0,k=!0,l=!0,m=!1;a.each(f?ka:la,function(a,c){c&&(c.show||c.reserveSpace)&&(c===b?m=!0:c.options.position===e&&(m?k=!1:j=!1),m||(l=!1))}),k&&(h=0),null==g&&(g=l?"full":5),isNaN(+g)||(i+=+g),f?(d+=i,"bottom"==e?(ma.bottom+=d+h,b.box={top:fa.height-ma.bottom,height:d}):(b.box={top:ma.top+h,height:d},ma.top+=d+h)):(c+=i,"left"==e?(b.box={left:ma.left+h,width:c},ma.left+=c+h):(ma.right+=c+h,b.box={left:fa.width-ma.right,width:c})),b.position=e,b.tickLength=g,b.box.padding=i,b.innermost=j}function z(a){"x"==a.direction?(a.box.left=ma.left-a.labelWidth/2,a.box.width=fa.width-ma.left-ma.right+a.labelWidth):(a.box.top=ma.top-a.labelHeight/2,a.box.height=fa.height-ma.bottom-ma.top+a.labelHeight)}function A(){var b,c=ea.grid.minBorderMargin;if(null==c)for(c=0,b=0;b<da.length;++b)c=Math.max(c,2*(da[b].points.radius+da[b].points.lineWidth/2));var d={left:c,right:c,top:c,bottom:c};a.each(n(),function(a,b){b.reserveSpace&&b.ticks&&b.ticks.length&&("x"===b.direction?(d.left=Math.max(d.left,b.labelWidth/2),d.right=Math.max(d.right,b.labelWidth/2)):(d.bottom=Math.max(d.bottom,b.labelHeight/2),d.top=Math.max(d.top,b.labelHeight/2)))}),ma.left=Math.ceil(Math.max(d.left,ma.left)),ma.right=Math.ceil(Math.max(d.right,ma.right)),ma.top=Math.ceil(Math.max(d.top,ma.top)),ma.bottom=Math.ceil(Math.max(d.bottom,ma.bottom))}function B(){var b,c=n(),d=ea.grid.show;for(var e in ma){var f=ea.grid.margin||0;ma[e]="number"==typeof f?f:f[e]||0}h(pa.processOffset,[ma]);for(var e in ma)"object"==typeof ea.grid.borderWidth?ma[e]+=d?ea.grid.borderWidth[e]:0:ma[e]+=d?ea.grid.borderWidth:0;if(a.each(c,function(a,b){var c=b.options;b.show=null==c.show?b.used:c.show,b.reserveSpace=null==c.reserveSpace?b.show:c.reserveSpace,C(b)}),d){var g=a.grep(c,function(a){return a.show||a.reserveSpace});for(a.each(g,function(a,b){D(b),E(b),F(b,b.ticks),x(b)}),b=g.length-1;b>=0;--b)y(g[b]);A(),a.each(g,function(a,b){z(b)})}na=fa.width-ma.left-ma.right,oa=fa.height-ma.bottom-ma.top,a.each(c,function(a,b){w(b)}),d&&K(),R()}function C(a){var b=a.options,c=+(null!=b.min?b.min:a.datamin),d=+(null!=b.max?b.max:a.datamax),e=d-c;if(0==e){var f=0==d?1:.01;null==b.min&&(c-=f),null!=b.max&&null==b.min||(d+=f)}else{var g=b.autoscaleMargin;null!=g&&(null==b.min&&(c-=e*g,0>c&&null!=a.datamin&&a.datamin>=0&&(c=0)),null==b.max&&(d+=e*g,d>0&&null!=a.datamax&&a.datamax<=0&&(d=0)))}a.min=c,a.max=d}function D(b){var c,e=b.options;c="number"==typeof e.ticks&&e.ticks>0?e.ticks:.3*Math.sqrt("x"==b.direction?fa.width:fa.height);var f=(b.max-b.min)/c,g=-Math.floor(Math.log(f)/Math.LN10),h=e.tickDecimals;null!=h&&g>h&&(g=h);var i,j=Math.pow(10,-g),k=f/j;if(1.5>k?i=1:3>k?(i=2,k>2.25&&(null==h||h>=g+1)&&(i=2.5,++g)):i=7.5>k?5:10,i*=j,null!=e.minTickSize&&i<e.minTickSize&&(i=e.minTickSize),b.delta=f,b.tickDecimals=Math.max(0,null!=h?h:g),b.tickSize=e.tickSize||i,"time"==e.mode&&!b.tickGenerator)throw new Error("Time mode requires the flot.time plugin.");if(b.tickGenerator||(b.tickGenerator=function(a){var b,c=[],e=d(a.min,a.tickSize),f=0,g=Number.NaN;do b=g,g=e+f*a.tickSize,c.push(g),++f;while(g<a.max&&g!=b);return c},b.tickFormatter=function(a,b){var c=b.tickDecimals?Math.pow(10,b.tickDecimals):1,d=""+Math.round(a*c)/c;if(null!=b.tickDecimals){var e=d.indexOf("."),f=-1==e?0:d.length-e-1;if(f<b.tickDecimals)return(f?d:d+".")+(""+c).substr(1,b.tickDecimals-f)}return d}),a.isFunction(e.tickFormatter)&&(b.tickFormatter=function(a,b){return""+e.tickFormatter(a,b)}),null!=e.alignTicksWithAxis){var l=("x"==b.direction?ka:la)[e.alignTicksWithAxis-1];if(l&&l.used&&l!=b){var m=b.tickGenerator(b);if(m.length>0&&(null==e.min&&(b.min=Math.min(b.min,m[0])),null==e.max&&m.length>1&&(b.max=Math.max(b.max,m[m.length-1]))),b.tickGenerator=function(a){var b,c,d=[];for(c=0;c<l.ticks.length;++c)b=(l.ticks[c].v-l.min)/(l.max-l.min),b=a.min+b*(a.max-a.min),d.push(b);return d},!b.mode&&null==e.tickDecimals){var n=Math.max(0,-Math.floor(Math.log(b.delta)/Math.LN10)+1),o=b.tickGenerator(b);o.length>1&&/\..*0$/.test((o[1]-o[0]).toFixed(n))||(b.tickDecimals=n)}}}}function E(b){var c=b.options.ticks,d=[];null==c||"number"==typeof c&&c>0?d=b.tickGenerator(b):c&&(d=a.isFunction(c)?c(b):c);var e,f;for(b.ticks=[],e=0;e<d.length;++e){var g=null,h=d[e];"object"==typeof h?(f=+h[0],h.length>1&&(g=h[1])):f=+h,null==g&&(g=b.tickFormatter(f,b)),isNaN(f)||b.ticks.push({v:f,label:g})}}function F(a,b){a.options.autoscaleMargin&&b.length>0&&(null==a.options.min&&(a.min=Math.min(a.min,b[0].v)),null==a.options.max&&b.length>1&&(a.max=Math.max(a.max,b[b.length-1].v)))}function G(){fa.clear(),h(pa.drawBackground,[ia]);var a=ea.grid;a.show&&a.backgroundColor&&I(),a.show&&!a.aboveData&&J();for(var b=0;b<da.length;++b)h(pa.drawSeries,[ia,da[b]]),L(da[b]);h(pa.draw,[ia]),a.show&&a.aboveData&&J(),fa.render(),X()}function H(a,b){for(var c,d,e,f,g=n(),h=0;h<g.length;++h)if(c=g[h],c.direction==b&&(f=b+c.n+"axis",a[f]||1!=c.n||(f=b+"axis"),a[f])){d=a[f].from,e=a[f].to;break}if(a[f]||(c="x"==b?ka[0]:la[0],d=a[b+"1"],e=a[b+"2"]),null!=d&&null!=e&&d>e){var i=d;d=e,e=i}return{from:d,to:e,axis:c}}function I(){ia.save(),ia.translate(ma.left,ma.top),ia.fillStyle=ca(ea.grid.backgroundColor,oa,0,"rgba(255, 255, 255, 0)"),ia.fillRect(0,0,na,oa),ia.restore()}function J(){var b,c,d,e;ia.save(),ia.translate(ma.left,ma.top);var f=ea.grid.markings;if(f)for(a.isFunction(f)&&(c=qa.getAxes(),c.xmin=c.xaxis.min,c.xmax=c.xaxis.max,c.ymin=c.yaxis.min,c.ymax=c.yaxis.max,f=f(c)),b=0;b<f.length;++b){var g=f[b],h=H(g,"x"),i=H(g,"y");if(null==h.from&&(h.from=h.axis.min),null==h.to&&(h.to=h.axis.max),null==i.from&&(i.from=i.axis.min),null==i.to&&(i.to=i.axis.max),!(h.to<h.axis.min||h.from>h.axis.max||i.to<i.axis.min||i.from>i.axis.max)){h.from=Math.max(h.from,h.axis.min),h.to=Math.min(h.to,h.axis.max),i.from=Math.max(i.from,i.axis.min),i.to=Math.min(i.to,i.axis.max);var j=h.from===h.to,k=i.from===i.to;if(!j||!k)if(h.from=Math.floor(h.axis.p2c(h.from)),h.to=Math.floor(h.axis.p2c(h.to)),i.from=Math.floor(i.axis.p2c(i.from)),i.to=Math.floor(i.axis.p2c(i.to)),j||k){var l=g.lineWidth||ea.grid.markingsLineWidth,m=l%2?.5:0;ia.beginPath(),ia.strokeStyle=g.color||ea.grid.markingsColor,ia.lineWidth=l,j?(ia.moveTo(h.to+m,i.from),ia.lineTo(h.to+m,i.to)):(ia.moveTo(h.from,i.to+m),ia.lineTo(h.to,i.to+m)),ia.stroke()}else ia.fillStyle=g.color||ea.grid.markingsColor,ia.fillRect(h.from,i.to,h.to-h.from,i.from-i.to)}}c=n(),d=ea.grid.borderWidth;for(var o=0;o<c.length;++o){var p,q,r,s,t=c[o],u=t.box,v=t.tickLength;if(t.show&&0!=t.ticks.length){for(ia.lineWidth=1,"x"==t.direction?(p=0,q="full"==v?"top"==t.position?0:oa:u.top-ma.top+("top"==t.position?u.height:0)):(q=0,p="full"==v?"left"==t.position?0:na:u.left-ma.left+("left"==t.position?u.width:0)),t.innermost||(ia.strokeStyle=t.options.color,ia.beginPath(),r=s=0,"x"==t.direction?r=na+1:s=oa+1,1==ia.lineWidth&&("x"==t.direction?q=Math.floor(q)+.5:p=Math.floor(p)+.5),ia.moveTo(p,q),ia.lineTo(p+r,q+s),ia.stroke()),ia.strokeStyle=t.options.tickColor,ia.beginPath(),b=0;b<t.ticks.length;++b){var w=t.ticks[b].v;r=s=0,isNaN(w)||w<t.min||w>t.max||"full"==v&&("object"==typeof d&&d[t.position]>0||d>0)&&(w==t.min||w==t.max)||("x"==t.direction?(p=t.p2c(w),s="full"==v?-oa:v,"top"==t.position&&(s=-s)):(q=t.p2c(w),r="full"==v?-na:v,"left"==t.position&&(r=-r)),1==ia.lineWidth&&("x"==t.direction?p=Math.floor(p)+.5:q=Math.floor(q)+.5),ia.moveTo(p,q),ia.lineTo(p+r,q+s))}ia.stroke()}}d&&(e=ea.grid.borderColor,"object"==typeof d||"object"==typeof e?("object"!=typeof d&&(d={top:d,right:d,bottom:d,left:d}),"object"!=typeof e&&(e={top:e,right:e,bottom:e,left:e}),d.top>0&&(ia.strokeStyle=e.top,ia.lineWidth=d.top,ia.beginPath(),ia.moveTo(0-d.left,0-d.top/2),ia.lineTo(na,0-d.top/2),ia.stroke()),d.right>0&&(ia.strokeStyle=e.right,ia.lineWidth=d.right,ia.beginPath(),ia.moveTo(na+d.right/2,0-d.top),ia.lineTo(na+d.right/2,oa),ia.stroke()),d.bottom>0&&(ia.strokeStyle=e.bottom,ia.lineWidth=d.bottom,ia.beginPath(),ia.moveTo(na+d.right,oa+d.bottom/2),ia.lineTo(0,oa+d.bottom/2),ia.stroke()),d.left>0&&(ia.strokeStyle=e.left,ia.lineWidth=d.left,ia.beginPath(),ia.moveTo(0-d.left/2,oa+d.bottom),ia.lineTo(0-d.left/2,0),ia.stroke())):(ia.lineWidth=d,ia.strokeStyle=ea.grid.borderColor,ia.strokeRect(-d/2,-d/2,na+d,oa+d))),ia.restore()}function K(){a.each(n(),function(a,b){var c,d,e,f,g,h=b.box,i=b.direction+"Axis "+b.direction+b.n+"Axis",j="flot-"+b.direction+"-axis flot-"+b.direction+b.n+"-axis "+i,k=b.options.font||"flot-tick-label tickLabel";if(fa.removeText(j),b.show&&0!=b.ticks.length)for(var l=0;l<b.ticks.length;++l)c=b.ticks[l],!c.label||c.v<b.min||c.v>b.max||("x"==b.direction?(f="center",d=ma.left+b.p2c(c.v),"bottom"==b.position?e=h.top+h.padding:(e=h.top+h.height-h.padding,g="bottom")):(g="middle",e=ma.top+b.p2c(c.v),"left"==b.position?(d=h.left+h.width-h.padding,f="right"):d=h.left+h.padding),fa.addText(j,d,e,c.label,k,null,null,f,g))})}function L(a){a.lines.show&&M(a),a.bars.show&&P(a),a.points.show&&N(a)}function M(a){function b(a,b,c,d,e){var f=a.points,g=a.pointsize,h=null,i=null;ia.beginPath();for(var j=g;j<f.length;j+=g){var k=f[j-g],l=f[j-g+1],m=f[j],n=f[j+1];if(null!=k&&null!=m){if(n>=l&&l<e.min){if(n<e.min)continue;k=(e.min-l)/(n-l)*(m-k)+k,l=e.min}else if(l>=n&&n<e.min){if(l<e.min)continue;m=(e.min-l)/(n-l)*(m-k)+k,n=e.min}if(l>=n&&l>e.max){if(n>e.max)continue;k=(e.max-l)/(n-l)*(m-k)+k,l=e.max}else if(n>=l&&n>e.max){if(l>e.max)continue;m=(e.max-l)/(n-l)*(m-k)+k,n=e.max}if(m>=k&&k<d.min){if(m<d.min)continue;l=(d.min-k)/(m-k)*(n-l)+l,k=d.min}else if(k>=m&&m<d.min){if(k<d.min)continue;n=(d.min-k)/(m-k)*(n-l)+l,m=d.min}if(k>=m&&k>d.max){if(m>d.max)continue;l=(d.max-k)/(m-k)*(n-l)+l,k=d.max}else if(m>=k&&m>d.max){if(k>d.max)continue;n=(d.max-k)/(m-k)*(n-l)+l,m=d.max}k==h&&l==i||ia.moveTo(d.p2c(k)+b,e.p2c(l)+c),h=m,i=n,ia.lineTo(d.p2c(m)+b,e.p2c(n)+c)}}ia.stroke()}function c(a,b,c){for(var d=a.points,e=a.pointsize,f=Math.min(Math.max(0,c.min),c.max),g=0,h=!1,i=1,j=0,k=0;;){if(e>0&&g>d.length+e)break;g+=e;var l=d[g-e],m=d[g-e+i],n=d[g],o=d[g+i];if(h){if(e>0&&null!=l&&null==n){k=g,e=-e,i=2;continue}if(0>e&&g==j+e){ia.fill(),h=!1,e=-e,i=1,g=j=k+e;continue}}if(null!=l&&null!=n){if(n>=l&&l<b.min){if(n<b.min)continue;m=(b.min-l)/(n-l)*(o-m)+m,l=b.min}else if(l>=n&&n<b.min){if(l<b.min)continue;o=(b.min-l)/(n-l)*(o-m)+m,n=b.min}if(l>=n&&l>b.max){if(n>b.max)continue;m=(b.max-l)/(n-l)*(o-m)+m,l=b.max}else if(n>=l&&n>b.max){if(l>b.max)continue;o=(b.max-l)/(n-l)*(o-m)+m,n=b.max}if(h||(ia.beginPath(),ia.moveTo(b.p2c(l),c.p2c(f)),h=!0),m>=c.max&&o>=c.max)ia.lineTo(b.p2c(l),c.p2c(c.max)),ia.lineTo(b.p2c(n),c.p2c(c.max));else if(m<=c.min&&o<=c.min)ia.lineTo(b.p2c(l),c.p2c(c.min)),ia.lineTo(b.p2c(n),c.p2c(c.min));else{var p=l,q=n;o>=m&&m<c.min&&o>=c.min?(l=(c.min-m)/(o-m)*(n-l)+l,m=c.min):m>=o&&o<c.min&&m>=c.min&&(n=(c.min-m)/(o-m)*(n-l)+l,o=c.min),m>=o&&m>c.max&&o<=c.max?(l=(c.max-m)/(o-m)*(n-l)+l,m=c.max):o>=m&&o>c.max&&m<=c.max&&(n=(c.max-m)/(o-m)*(n-l)+l,o=c.max),l!=p&&ia.lineTo(b.p2c(p),c.p2c(m)),ia.lineTo(b.p2c(l),c.p2c(m)),ia.lineTo(b.p2c(n),c.p2c(o)),n!=q&&(ia.lineTo(b.p2c(n),c.p2c(o)),ia.lineTo(b.p2c(q),c.p2c(o)))}}}}ia.save(),ia.translate(ma.left,ma.top),ia.lineJoin="round";var d=a.lines.lineWidth,e=a.shadowSize;if(d>0&&e>0){ia.lineWidth=e,ia.strokeStyle="rgba(0,0,0,0.1)";var f=Math.PI/18;b(a.datapoints,Math.sin(f)*(d/2+e/2),Math.cos(f)*(d/2+e/2),a.xaxis,a.yaxis),ia.lineWidth=e/2,b(a.datapoints,Math.sin(f)*(d/2+e/4),Math.cos(f)*(d/2+e/4),a.xaxis,a.yaxis)}ia.lineWidth=d,ia.strokeStyle=a.color;var g=Q(a.lines,a.color,0,oa);g&&(ia.fillStyle=g,c(a.datapoints,a.xaxis,a.yaxis)),d>0&&b(a.datapoints,0,0,a.xaxis,a.yaxis),ia.restore()}function N(a){function b(a,b,c,d,e,f,g,h){for(var i=a.points,j=a.pointsize,k=0;k<i.length;k+=j){var l=i[k],m=i[k+1];null==l||l<f.min||l>f.max||m<g.min||m>g.max||(ia.beginPath(),l=f.p2c(l),m=g.p2c(m)+d,"circle"==h?ia.arc(l,m,b,0,e?Math.PI:2*Math.PI,!1):h(ia,l,m,b,e),ia.closePath(),c&&(ia.fillStyle=c,ia.fill()),ia.stroke())}}ia.save(),ia.translate(ma.left,ma.top);var c=a.points.lineWidth,d=a.shadowSize,e=a.points.radius,f=a.points.symbol;if(0==c&&(c=1e-4),c>0&&d>0){var g=d/2;ia.lineWidth=g,ia.strokeStyle="rgba(0,0,0,0.1)",b(a.datapoints,e,null,g+g/2,!0,a.xaxis,a.yaxis,f),ia.strokeStyle="rgba(0,0,0,0.2)",b(a.datapoints,e,null,g/2,!0,a.xaxis,a.yaxis,f)}ia.lineWidth=c,ia.strokeStyle=a.color,b(a.datapoints,e,Q(a.points,a.color),0,!1,a.xaxis,a.yaxis,f),ia.restore()}function O(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q,r,s,t;j?(s=q=r=!0,p=!1,l=c,m=a,o=b+d,n=b+e,l>m&&(t=m,m=l,l=t,p=!0,q=!1)):(p=q=r=!0,s=!1,l=a+d,m=a+e,n=c,o=b,n>o&&(t=o,o=n,n=t,s=!0,r=!1)),m<g.min||l>g.max||o<h.min||n>h.max||(l<g.min&&(l=g.min,p=!1),m>g.max&&(m=g.max,q=!1),n<h.min&&(n=h.min,s=!1),o>h.max&&(o=h.max,r=!1),l=g.p2c(l),n=h.p2c(n),m=g.p2c(m),o=h.p2c(o),f&&(i.fillStyle=f(n,o),i.fillRect(l,o,m-l,n-o)),k>0&&(p||q||r||s)&&(i.beginPath(),i.moveTo(l,n),p?i.lineTo(l,o):i.moveTo(l,o),r?i.lineTo(m,o):i.moveTo(m,o),q?i.lineTo(m,n):i.moveTo(m,n),s?i.lineTo(l,n):i.moveTo(l,n),i.stroke()))}function P(a){function b(b,c,d,e,f,g){for(var h=b.points,i=b.pointsize,j=0;j<h.length;j+=i)null!=h[j]&&O(h[j],h[j+1],h[j+2],c,d,e,f,g,ia,a.bars.horizontal,a.bars.lineWidth)}ia.save(),ia.translate(ma.left,ma.top),ia.lineWidth=a.bars.lineWidth,ia.strokeStyle=a.color;var c;switch(a.bars.align){case"left":c=0;break;case"right":c=-a.bars.barWidth;break;default:c=-a.bars.barWidth/2}var d=a.bars.fill?function(b,c){return Q(a.bars,a.color,b,c)}:null;b(a.datapoints,c,c+a.bars.barWidth,d,a.xaxis,a.yaxis),ia.restore()}function Q(b,c,d,e){var f=b.fill;if(!f)return null;if(b.fillColor)return ca(b.fillColor,d,e,c);var g=a.color.parse(c);return g.a="number"==typeof f?f:.4,g.normalize(),g.toString()}function R(){if(null!=ea.legend.container?a(ea.legend.container).html(""):c.find(".legend").remove(),ea.legend.show){for(var b,d,e=[],f=[],g=!1,h=ea.legend.labelFormatter,i=0;i<da.length;++i)b=da[i],b.label&&(d=h?h(b.label,b):b.label,d&&f.push({label:d,color:b.color}));if(ea.legend.sorted)if(a.isFunction(ea.legend.sorted))f.sort(ea.legend.sorted);else if("reverse"==ea.legend.sorted)f.reverse();else{var j="descending"!=ea.legend.sorted;f.sort(function(a,b){return a.label==b.label?0:a.label<b.label!=j?1:-1})}for(var i=0;i<f.length;++i){var k=f[i];i%ea.legend.noColumns==0&&(g&&e.push("</tr>"),e.push("<tr>"),g=!0),e.push('<td class="legendColorBox"><div style="border:1px solid '+ea.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+k.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+k.label+"</td>")}if(g&&e.push("</tr>"),0!=e.length){var l='<table style="font-size:smaller;color:'+ea.grid.color+'">'+e.join("")+"</table>";if(null!=ea.legend.container)a(ea.legend.container).html(l);else{var m="",n=ea.legend.position,o=ea.legend.margin;null==o[0]&&(o=[o,o]),"n"==n.charAt(0)?m+="top:"+(o[1]+ma.top)+"px;":"s"==n.charAt(0)&&(m+="bottom:"+(o[1]+ma.bottom)+"px;"),"e"==n.charAt(1)?m+="right:"+(o[0]+ma.right)+"px;":"w"==n.charAt(1)&&(m+="left:"+(o[0]+ma.left)+"px;");var p=a('<div class="legend">'+l.replace('style="','style="position:absolute;'+m+";")+"</div>").appendTo(c);if(0!=ea.legend.backgroundOpacity){var q=ea.legend.backgroundColor;null==q&&(q=ea.grid.backgroundColor,q=q&&"string"==typeof q?a.color.parse(q):a.color.extract(p,"background-color"),q.a=1,q=q.toString());var r=p.children();a('<div style="position:absolute;width:'+r.width()+"px;height:"+r.height()+"px;"+m+"background-color:"+q+';"> </div>').prependTo(p).css("opacity",ea.legend.backgroundOpacity)}}}}}function S(a,b,c){var d,e,f,g=ea.grid.mouseActiveRadius,h=g*g+1,i=null;for(d=da.length-1;d>=0;--d)if(c(da[d])){var j=da[d],k=j.xaxis,l=j.yaxis,m=j.datapoints.points,n=k.c2p(a),o=l.c2p(b),p=g/k.scale,q=g/l.scale;if(f=j.datapoints.pointsize,k.options.inverseTransform&&(p=Number.MAX_VALUE),l.options.inverseTransform&&(q=Number.MAX_VALUE),j.lines.show||j.points.show)for(e=0;e<m.length;e+=f){var r=m[e],s=m[e+1];if(null!=r&&!(r-n>p||-p>r-n||s-o>q||-q>s-o)){var t=Math.abs(k.p2c(r)-a),u=Math.abs(l.p2c(s)-b),v=t*t+u*u;h>v&&(h=v,i=[d,e/f])}}if(j.bars.show&&!i){var w,x;switch(j.bars.align){case"left":w=0;break;case"right":w=-j.bars.barWidth;break;default:w=-j.bars.barWidth/2}for(x=w+j.bars.barWidth,e=0;e<m.length;e+=f){var r=m[e],s=m[e+1],y=m[e+2];null!=r&&(da[d].bars.horizontal?n<=Math.max(y,r)&&n>=Math.min(y,r)&&o>=s+w&&s+x>=o:n>=r+w&&r+x>=n&&o>=Math.min(y,s)&&o<=Math.max(y,s))&&(i=[d,e/f])}}}return i?(d=i[0],e=i[1],f=da[d].datapoints.pointsize,{datapoint:da[d].datapoints.points.slice(e*f,(e+1)*f),dataIndex:e,series:da[d],seriesIndex:d}):null}function T(a){ea.grid.hoverable&&W("plothover",a,function(a){return 0!=a.hoverable})}function U(a){ea.grid.hoverable&&W("plothover",a,function(a){return!1})}function V(a){W("plotclick",a,function(a){return 0!=a.clickable})}function W(a,b,d){var e=ha.offset(),f=b.pageX-e.left-ma.left,g=b.pageY-e.top-ma.top,h=o({left:f,top:g});h.pageX=b.pageX,h.pageY=b.pageY;var i=S(f,g,d);if(i&&(i.pageX=parseInt(i.series.xaxis.p2c(i.datapoint[0])+e.left+ma.left,10),i.pageY=parseInt(i.series.yaxis.p2c(i.datapoint[1])+e.top+ma.top,10)),ea.grid.autoHighlight){for(var j=0;j<ra.length;++j){var k=ra[j];k.auto!=a||i&&k.series==i.series&&k.point[0]==i.datapoint[0]&&k.point[1]==i.datapoint[1]||$(k.series,k.point)}i&&Z(i.series,i.datapoint,a)}c.trigger(a,[h,i])}function X(){var a=ea.interaction.redrawOverlayInterval;return-1==a?void Y():void(sa||(sa=setTimeout(Y,a)))}function Y(){sa=null,ja.save(),ga.clear(),ja.translate(ma.left,ma.top);var a,b;for(a=0;a<ra.length;++a)b=ra[a],b.series.bars.show?ba(b.series,b.point):aa(b.series,b.point);ja.restore(),h(pa.drawOverlay,[ja])}function Z(a,b,c){if("number"==typeof a&&(a=da[a]),"number"==typeof b){var d=a.datapoints.pointsize;b=a.datapoints.points.slice(d*b,d*(b+1))}var e=_(a,b);-1==e?(ra.push({series:a,point:b,auto:c}),X()):c||(ra[e].auto=!1)}function $(a,b){if(null==a&&null==b)return ra=[],void X();if("number"==typeof a&&(a=da[a]),"number"==typeof b){var c=a.datapoints.pointsize;b=a.datapoints.points.slice(c*b,c*(b+1))}var d=_(a,b);-1!=d&&(ra.splice(d,1),X())}function _(a,b){for(var c=0;c<ra.length;++c){var d=ra[c];if(d.series==a&&d.point[0]==b[0]&&d.point[1]==b[1])return c}return-1}function aa(b,c){var d=c[0],e=c[1],f=b.xaxis,g=b.yaxis,h="string"==typeof b.highlightColor?b.highlightColor:a.color.parse(b.color).scale("a",.5).toString();if(!(d<f.min||d>f.max||e<g.min||e>g.max)){var i=b.points.radius+b.points.lineWidth/2;ja.lineWidth=i,ja.strokeStyle=h;var j=1.5*i;d=f.p2c(d),e=g.p2c(e),ja.beginPath(),"circle"==b.points.symbol?ja.arc(d,e,j,0,2*Math.PI,!1):b.points.symbol(ja,d,e,j,!1),ja.closePath(),ja.stroke()}}function ba(b,c){var d,e="string"==typeof b.highlightColor?b.highlightColor:a.color.parse(b.color).scale("a",.5).toString(),f=e;switch(b.bars.align){case"left":d=0;break;case"right":d=-b.bars.barWidth;break;default:d=-b.bars.barWidth/2}ja.lineWidth=b.bars.lineWidth,ja.strokeStyle=e,O(c[0],c[1],c[2]||0,d,d+b.bars.barWidth,function(){return f},b.xaxis,b.yaxis,ja,b.bars.horizontal,b.bars.lineWidth)}function ca(b,c,d,e){if("string"==typeof b)return b;for(var f=ia.createLinearGradient(0,d,0,c),g=0,h=b.colors.length;h>g;++g){var i=b.colors[g];if("string"!=typeof i){var j=a.color.parse(e);null!=i.brightness&&(j=j.scale("rgb",i.brightness)),null!=i.opacity&&(j.a*=i.opacity),i=j.toString()}f.addColorStop(g/(h-1),i)}return f}var da=[],ea={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:!0,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:.85,sorted:null},xaxis:{show:null,position:"bottom",mode:null,font:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null},yaxis:{autoscaleMargin:.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:!1,radius:3,lineWidth:2,fill:!0,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:!1,fillColor:null,steps:!1},bars:{show:!1,lineWidth:2,barWidth:1,fill:!0,
fillColor:null,align:"left",horizontal:!1,zero:!0},shadowSize:3,highlightColor:null},grid:{show:!0,aboveData:!1,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,margin:0,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:!1,hoverable:!1,autoHighlight:!0,mouseActiveRadius:10},interaction:{redrawOverlayInterval:1e3/60},hooks:{}},fa=null,ga=null,ha=null,ia=null,ja=null,ka=[],la=[],ma={left:0,right:0,top:0,bottom:0},na=0,oa=0,pa={processOptions:[],processRawData:[],processDatapoints:[],processOffset:[],drawBackground:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},qa=this;qa.setData=k,qa.setupGrid=B,qa.draw=G,qa.getPlaceholder=function(){return c},qa.getCanvas=function(){return fa.element},qa.getPlotOffset=function(){return ma},qa.width=function(){return na},qa.height=function(){return oa},qa.offset=function(){var a=ha.offset();return a.left+=ma.left,a.top+=ma.top,a},qa.getData=function(){return da},qa.getAxes=function(){var b={};return a.each(ka.concat(la),function(a,c){c&&(b[c.direction+(1!=c.n?c.n:"")+"axis"]=c)}),b},qa.getXAxes=function(){return ka},qa.getYAxes=function(){return la},qa.c2p=o,qa.p2c=p,qa.getOptions=function(){return ea},qa.highlight=Z,qa.unhighlight=$,qa.triggerRedrawOverlay=X,qa.pointOffset=function(a){return{left:parseInt(ka[m(a,"x")-1].p2c(+a.x)+ma.left,10),top:parseInt(la[m(a,"y")-1].p2c(+a.y)+ma.top,10)}},qa.shutdown=v,qa.destroy=function(){v(),c.removeData("plot").empty(),da=[],ea=null,fa=null,ga=null,ha=null,ia=null,ja=null,ka=[],la=[],pa=null,ra=[],qa=null},qa.resize=function(){var a=c.width(),b=c.height();fa.resize(a,b),ga.resize(a,b)},qa.hooks=pa,i(qa),j(f),t(),k(e),B(),G(),u();var ra=[],sa=null}function d(a,b){return b*Math.floor(a/b)}var e=Object.prototype.hasOwnProperty;a.fn.detach||(a.fn.detach=function(){return this.each(function(){this.parentNode&&this.parentNode.removeChild(this)})}),b.prototype.resize=function(a,b){if(0>=a||0>=b)throw new Error("Invalid dimensions for plot, width = "+a+", height = "+b);var c=this.element,d=this.context,e=this.pixelRatio;this.width!=a&&(c.width=a*e,c.style.width=a+"px",this.width=a),this.height!=b&&(c.height=b*e,c.style.height=b+"px",this.height=b),d.restore(),d.save(),d.scale(e,e)},b.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},b.prototype.render=function(){var a=this._textCache;for(var b in a)if(e.call(a,b)){var c=this.getTextLayer(b),d=a[b];c.hide();for(var f in d)if(e.call(d,f)){var g=d[f];for(var h in g)if(e.call(g,h)){for(var i,j=g[h].positions,k=0;i=j[k];k++)i.active?i.rendered||(c.append(i.element),i.rendered=!0):(j.splice(k--,1),i.rendered&&i.element.detach());0==j.length&&delete g[h]}}c.show()}},b.prototype.getTextLayer=function(b){var c=this.text[b];return null==c&&(null==this.textContainer&&(this.textContainer=a("<div class='flot-text'></div>").css({position:"absolute",top:0,left:0,bottom:0,right:0,"font-size":"smaller",color:"#545454"}).insertAfter(this.element)),c=this.text[b]=a("<div></div>").addClass(b).css({position:"absolute",top:0,left:0,bottom:0,right:0}).appendTo(this.textContainer)),c},b.prototype.getTextInfo=function(b,c,d,e,f){var g,h,i,j;if(c=""+c,g="object"==typeof d?d.style+" "+d.variant+" "+d.weight+" "+d.size+"px/"+d.lineHeight+"px "+d.family:d,h=this._textCache[b],null==h&&(h=this._textCache[b]={}),i=h[g],null==i&&(i=h[g]={}),j=i[c],null==j){var k=a("<div></div>").html(c).css({position:"absolute","max-width":f,top:-9999}).appendTo(this.getTextLayer(b));"object"==typeof d?k.css({font:g,color:d.color}):"string"==typeof d&&k.addClass(d),j=i[c]={width:k.outerWidth(!0),height:k.outerHeight(!0),element:k,positions:[]},k.detach()}return j},b.prototype.addText=function(a,b,c,d,e,f,g,h,i){var j=this.getTextInfo(a,d,e,f,g),k=j.positions;"center"==h?b-=j.width/2:"right"==h&&(b-=j.width),"middle"==i?c-=j.height/2:"bottom"==i&&(c-=j.height);for(var l,m=0;l=k[m];m++)if(l.x==b&&l.y==c)return void(l.active=!0);l={active:!0,rendered:!1,element:k.length?j.element.clone():j.element,x:b,y:c},k.push(l),l.element.css({top:Math.round(c),left:Math.round(b),"text-align":h})},b.prototype.removeText=function(a,b,c,d,f,g){if(null==d){var h=this._textCache[a];if(null!=h)for(var i in h)if(e.call(h,i)){var j=h[i];for(var k in j)if(e.call(j,k))for(var l,m=j[k].positions,n=0;l=m[n];n++)l.active=!1}}else for(var l,m=this.getTextInfo(a,d,f,g).positions,n=0;l=m[n];n++)l.x==b&&l.y==c&&(l.active=!1)},a.plot=function(b,d,e){var f=new c(a(b),d,e,a.plot.plugins);return f},a.plot.version="0.8.3",a.plot.plugins=[],a.fn.plot=function(b,c){return this.each(function(){a.plot(this,b,c)})}}(jQuery);
;/* Flot plugin for rendering pie charts.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

The plugin assumes that each series has a single data value, and that each
value is a positive integer or zero.  Negative numbers don't make sense for a
pie chart, and have unpredictable results.  The values do NOT need to be
passed in as percentages; the plugin will calculate the total and per-slice
percentages internally.

* Created by Brian Medendorp

* Updated with contributions from btburnett3, Anthony Aragues and Xavi Ivars

The plugin supports these options:

	series: {
		pie: {
			show: true/false
			radius: 0-1 for percentage of fullsize, or a specified pixel length, or 'auto'
			innerRadius: 0-1 for percentage of fullsize or a specified pixel length, for creating a donut effect
			startAngle: 0-2 factor of PI used for starting angle (in radians) i.e 3/2 starts at the top, 0 and 2 have the same result
			tilt: 0-1 for percentage to tilt the pie, where 1 is no tilt, and 0 is completely flat (nothing will show)
			offset: {
				top: integer value to move the pie up or down
				left: integer value to move the pie left or right, or 'auto'
			},
			stroke: {
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#FFF')
				width: integer pixel width of the stroke
			},
			label: {
				show: true/false, or 'auto'
				formatter:  a user-defined function that modifies the text/style of the label text
				radius: 0-1 for percentage of fullsize, or a specified pixel length
				background: {
					color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#000')
					opacity: 0-1
				},
				threshold: 0-1 for the percentage value at which to hide labels (if they're too small)
			},
			combine: {
				threshold: 0-1 for the percentage value at which to combine slices (if they're too small)
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#CCC'), if null, the plugin will automatically use the color of the first slice to be combined
				label: any text value of what the combined slice should be labeled
			}
			highlight: {
				opacity: 0-1
			}
		}
	}

More detail and specific examples can be found in the included HTML file.

*/
!function(a){function b(b){function e(b,c,d){x||(x=!0,r=b.getCanvas(),s=a(r).parent(),t=b.getOptions(),b.setData(f(b.getData())))}function f(b){for(var c=0,d=0,e=0,f=t.series.pie.combine.color,g=[],h=0;h<b.length;++h){var i=b[h].data;a.isArray(i)&&1==i.length&&(i=i[0]),a.isArray(i)?!isNaN(parseFloat(i[1]))&&isFinite(i[1])?i[1]=+i[1]:i[1]=0:i=!isNaN(parseFloat(i))&&isFinite(i)?[1,+i]:[1,0],b[h].data=[i]}for(var h=0;h<b.length;++h)c+=b[h].data[0][1];for(var h=0;h<b.length;++h){var i=b[h].data[0][1];i/c<=t.series.pie.combine.threshold&&(d+=i,e++,f||(f=b[h].color))}for(var h=0;h<b.length;++h){var i=b[h].data[0][1];(2>e||i/c>t.series.pie.combine.threshold)&&g.push(a.extend(b[h],{data:[[1,i]],color:b[h].color,label:b[h].label,angle:i*Math.PI*2/c,percent:i/(c/100)}))}return e>1&&g.push({data:[[1,d]],color:f,label:t.series.pie.combine.label,angle:d*Math.PI*2/c,percent:d/(c/100)}),g}function g(b,e){function f(){y.clearRect(0,0,j,k),s.children().filter(".pieLabel, .pieLabelBackground").remove()}function g(){var a=t.series.pie.shadow.left,b=t.series.pie.shadow.top,c=10,d=t.series.pie.shadow.alpha,e=t.series.pie.radius>1?t.series.pie.radius:u*t.series.pie.radius;if(!(e>=j/2-a||e*t.series.pie.tilt>=k/2-b||c>=e)){y.save(),y.translate(a,b),y.globalAlpha=d,y.fillStyle="#000",y.translate(v,w),y.scale(1,t.series.pie.tilt);for(var f=1;c>=f;f++)y.beginPath(),y.arc(0,0,e,0,2*Math.PI,!1),y.fill(),e-=f;y.restore()}}function i(){function b(a,b,c){0>=a||isNaN(a)||(c?y.fillStyle=b:(y.strokeStyle=b,y.lineJoin="round"),y.beginPath(),Math.abs(a-2*Math.PI)>1e-9&&y.moveTo(0,0),y.arc(0,0,e,f,f+a/2,!1),y.arc(0,0,e,f+a/2,f+a,!1),y.closePath(),f+=a,c?y.fill():y.stroke())}function c(){function b(b,c,d){if(0==b.data[0][1])return!0;var f,g=t.legend.labelFormatter,h=t.series.pie.label.formatter;f=g?g(b.label,b):b.label,h&&(f=h(f,b));var i=(c+b.angle+c)/2,l=v+Math.round(Math.cos(i)*e),m=w+Math.round(Math.sin(i)*e)*t.series.pie.tilt,n="<span class='pieLabel' id='pieLabel"+d+"' style='position:absolute;top:"+m+"px;left:"+l+"px;'>"+f+"</span>";s.append(n);var o=s.children("#pieLabel"+d),p=m-o.height()/2,q=l-o.width()/2;if(o.css("top",p),o.css("left",q),0-p>0||0-q>0||k-(p+o.height())<0||j-(q+o.width())<0)return!1;if(0!=t.series.pie.label.background.opacity){var r=t.series.pie.label.background.color;null==r&&(r=b.color);var u="top:"+p+"px;left:"+q+"px;";a("<div class='pieLabelBackground' style='position:absolute;width:"+o.width()+"px;height:"+o.height()+"px;"+u+"background-color:"+r+";'></div>").css("opacity",t.series.pie.label.background.opacity).insertBefore(o)}return!0}for(var c=d,e=t.series.pie.label.radius>1?t.series.pie.label.radius:u*t.series.pie.label.radius,f=0;f<m.length;++f){if(m[f].percent>=100*t.series.pie.label.threshold&&!b(m[f],c,f))return!1;c+=m[f].angle}return!0}var d=Math.PI*t.series.pie.startAngle,e=t.series.pie.radius>1?t.series.pie.radius:u*t.series.pie.radius;y.save(),y.translate(v,w),y.scale(1,t.series.pie.tilt),y.save();for(var f=d,g=0;g<m.length;++g)m[g].startAngle=f,b(m[g].angle,m[g].color,!0);if(y.restore(),t.series.pie.stroke.width>0){y.save(),y.lineWidth=t.series.pie.stroke.width,f=d;for(var g=0;g<m.length;++g)b(m[g].angle,t.series.pie.stroke.color,!1);y.restore()}return h(y),y.restore(),t.series.pie.label.show?c():!0}if(s){var j=b.getPlaceholder().width(),k=b.getPlaceholder().height(),l=s.children().filter(".legend").children().width()||0;y=e,x=!1,u=Math.min(j,k/t.series.pie.tilt)/2,w=k/2+t.series.pie.offset.top,v=j/2,"auto"==t.series.pie.offset.left?(t.legend.position.match("w")?v+=l/2:v-=l/2,u>v?v=u:v>j-u&&(v=j-u)):v+=t.series.pie.offset.left;var m=b.getData(),n=0;do n>0&&(u*=d),n+=1,f(),t.series.pie.tilt<=.8&&g();while(!i()&&c>n);n>=c&&(f(),s.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")),b.setSeries&&b.insertLegend&&(b.setSeries(m),b.insertLegend())}}function h(a){if(t.series.pie.innerRadius>0){a.save();var b=t.series.pie.innerRadius>1?t.series.pie.innerRadius:u*t.series.pie.innerRadius;a.globalCompositeOperation="destination-out",a.beginPath(),a.fillStyle=t.series.pie.stroke.color,a.arc(0,0,b,0,2*Math.PI,!1),a.fill(),a.closePath(),a.restore(),a.save(),a.beginPath(),a.strokeStyle=t.series.pie.stroke.color,a.arc(0,0,b,0,2*Math.PI,!1),a.stroke(),a.closePath(),a.restore()}}function i(a,b){for(var c=!1,d=-1,e=a.length,f=e-1;++d<e;f=d)(a[d][1]<=b[1]&&b[1]<a[f][1]||a[f][1]<=b[1]&&b[1]<a[d][1])&&b[0]<(a[f][0]-a[d][0])*(b[1]-a[d][1])/(a[f][1]-a[d][1])+a[d][0]&&(c=!c);return c}function j(a,c){for(var d,e,f=b.getData(),g=b.getOptions(),h=g.series.pie.radius>1?g.series.pie.radius:u*g.series.pie.radius,j=0;j<f.length;++j){var k=f[j];if(k.pie.show){if(y.save(),y.beginPath(),y.moveTo(0,0),y.arc(0,0,h,k.startAngle,k.startAngle+k.angle/2,!1),y.arc(0,0,h,k.startAngle+k.angle/2,k.startAngle+k.angle,!1),y.closePath(),d=a-v,e=c-w,y.isPointInPath){if(y.isPointInPath(a-v,c-w))return y.restore(),{datapoint:[k.percent,k.data],dataIndex:0,series:k,seriesIndex:j}}else{var l=h*Math.cos(k.startAngle),m=h*Math.sin(k.startAngle),n=h*Math.cos(k.startAngle+k.angle/4),o=h*Math.sin(k.startAngle+k.angle/4),p=h*Math.cos(k.startAngle+k.angle/2),q=h*Math.sin(k.startAngle+k.angle/2),r=h*Math.cos(k.startAngle+k.angle/1.5),s=h*Math.sin(k.startAngle+k.angle/1.5),t=h*Math.cos(k.startAngle+k.angle),x=h*Math.sin(k.startAngle+k.angle),z=[[0,0],[l,m],[n,o],[p,q],[r,s],[t,x]],A=[d,e];if(i(z,A))return y.restore(),{datapoint:[k.percent,k.data],dataIndex:0,series:k,seriesIndex:j}}y.restore()}}return null}function k(a){m("plothover",a)}function l(a){m("plotclick",a)}function m(a,c){var d=b.offset(),e=parseInt(c.pageX-d.left),f=parseInt(c.pageY-d.top),g=j(e,f);if(t.grid.autoHighlight)for(var h=0;h<z.length;++h){var i=z[h];i.auto!=a||g&&i.series==g.series||o(i.series)}g&&n(g.series,a);var k={pageX:c.pageX,pageY:c.pageY};s.trigger(a,[k,g])}function n(a,c){var d=p(a);-1==d?(z.push({series:a,auto:c}),b.triggerRedrawOverlay()):c||(z[d].auto=!1)}function o(a){null==a&&(z=[],b.triggerRedrawOverlay());var c=p(a);-1!=c&&(z.splice(c,1),b.triggerRedrawOverlay())}function p(a){for(var b=0;b<z.length;++b){var c=z[b];if(c.series==a)return b}return-1}function q(a,b){function c(a){a.angle<=0||isNaN(a.angle)||(b.fillStyle="rgba(255, 255, 255, "+d.series.pie.highlight.opacity+")",b.beginPath(),Math.abs(a.angle-2*Math.PI)>1e-9&&b.moveTo(0,0),b.arc(0,0,e,a.startAngle,a.startAngle+a.angle/2,!1),b.arc(0,0,e,a.startAngle+a.angle/2,a.startAngle+a.angle,!1),b.closePath(),b.fill())}var d=a.getOptions(),e=d.series.pie.radius>1?d.series.pie.radius:u*d.series.pie.radius;b.save(),b.translate(v,w),b.scale(1,d.series.pie.tilt);for(var f=0;f<z.length;++f)c(z[f].series);h(b),b.restore()}var r=null,s=null,t=null,u=null,v=null,w=null,x=!1,y=null,z=[];b.hooks.processOptions.push(function(a,b){b.series.pie.show&&(b.grid.show=!1,"auto"==b.series.pie.label.show&&(b.legend.show?b.series.pie.label.show=!1:b.series.pie.label.show=!0),"auto"==b.series.pie.radius&&(b.series.pie.label.show?b.series.pie.radius=.75:b.series.pie.radius=1),b.series.pie.tilt>1?b.series.pie.tilt=1:b.series.pie.tilt<0&&(b.series.pie.tilt=0))}),b.hooks.bindEvents.push(function(a,b){var c=a.getOptions();c.series.pie.show&&(c.grid.hoverable&&b.unbind("mousemove").mousemove(k),c.grid.clickable&&b.unbind("click").click(l))}),b.hooks.processDatapoints.push(function(a,b,c,d){var f=a.getOptions();f.series.pie.show&&e(a,b,c,d)}),b.hooks.drawOverlay.push(function(a,b){var c=a.getOptions();c.series.pie.show&&q(a,b)}),b.hooks.draw.push(function(a,b){var c=a.getOptions();c.series.pie.show&&g(a,b)})}var c=10,d=.95,e={series:{pie:{show:!1,radius:"auto",innerRadius:0,startAngle:1.5,tilt:1,shadow:{left:5,top:15,alpha:.02},offset:{top:0,left:"auto"},stroke:{color:"#fff",width:1},label:{show:"auto",formatter:function(a,b){return"<div style='font-size:x-small;text-align:center;padding:2px;color:"+b.color+";'>"+a+"<br/>"+Math.round(b.percent)+"%</div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:.5}}}};a.plot.plugins.push({init:b,options:e,name:"pie",version:"1.1"})}(jQuery);
;/* Flot plugin for automatically redrawing plots as the placeholder resizes.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

It works by listening for changes on the placeholder div (through the jQuery
resize event plugin) - if the size changes, it will redraw the plot.

There are no options. If you need to disable the plugin for some plots, you
can just fix the size of their placeholders.

*/
!function(a,b,c){"$:nomunge";function d(c){h===!0&&(h=c||1);for(var i=f.length-1;i>=0;i--){var m=a(f[i]);if(m[0]==b||m.is(":visible")){var n=m.width(),o=m.height(),p=m.data(k);!p||n===p.w&&o===p.h||(m.trigger(j,[p.w=n,p.h=o]),h=c||!0)}else p=m.data(k),p.w=0,p.h=0}null!==e&&(h&&(null==c||1e3>c-h)?e=b.requestAnimationFrame(d):(e=setTimeout(d,g[l]),h=!1))}var e,f=[],g=a.resize=a.extend(a.resize,{}),h=!1,i="setTimeout",j="resize",k=j+"-special-event",l="pendingDelay",m="activeDelay",n="throttleWindow";g[l]=200,g[m]=20,g[n]=!0,a.event.special[j]={setup:function(){if(!g[n]&&this[i])return!1;var b=a(this);f.push(this),b.data(k,{w:b.width(),h:b.height()}),1===f.length&&(e=c,d())},teardown:function(){if(!g[n]&&this[i])return!1;for(var b=a(this),c=f.length-1;c>=0;c--)if(f[c]==this){f.splice(c,1);break}b.removeData(k),f.length||(h?cancelAnimationFrame(e):clearTimeout(e),e=null)},add:function(b){function d(b,d,f){var g=a(this),h=g.data(k)||{};h.w=d!==c?d:g.width(),h.h=f!==c?f:g.height(),e.apply(this,arguments)}if(!g[n]&&this[i])return!1;var e;return a.isFunction(b)?(e=b,d):(e=b.handler,void(b.handler=d))}},b.requestAnimationFrame||(b.requestAnimationFrame=function(){return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||function(a,c){return b.setTimeout(function(){a((new Date).getTime())},g[m])}}()),b.cancelAnimationFrame||(b.cancelAnimationFrame=function(){return b.webkitCancelRequestAnimationFrame||b.mozCancelRequestAnimationFrame||b.oCancelRequestAnimationFrame||b.msCancelRequestAnimationFrame||clearTimeout}())}(jQuery,this),function(a){function b(a){function b(){var b=a.getPlaceholder();0!=b.width()&&0!=b.height()&&(a.resize(),a.setupGrid(),a.draw())}function c(a,c){a.getPlaceholder().resize(b)}function d(a,c){a.getPlaceholder().unbind("resize",b)}a.hooks.bindEvents.push(c),a.hooks.shutdown.push(d)}var c={};a.plot.plugins.push({init:b,options:c,name:"resize",version:"1.0"})}(jQuery);
;/*!
 * Ace v1.4.0
 */
if("undefined"==typeof jQuery)throw new Error("Ace's JavaScript requires jQuery");!function(a,b){var c=function(b,c){function d(a){a.preventDefault(),a.stopPropagation();var b=A.offset(),c=b[o],d=u?a.pageY:a.pageX;d>c+G?(G=d-c-F+I,G>H&&(G=H)):(G=d-c-I,0>G&&(G=0)),l.update_scroll()}function e(b){b.preventDefault(),b.stopPropagation(),ba=aa=u?b.pageY:b.pageX,Q=!0,a("html").off("mousemove.ace_scroll").on("mousemove.ace_scroll",f),a(R).off("mouseup.ace_scroll").on("mouseup.ace_scroll",g),A.addClass("active"),S&&l.$element.trigger("drag.start")}function f(a){a.preventDefault(),a.stopPropagation(),ba=u?a.pageY:a.pageX,ba-aa+G>H?ba=aa+H-G:0>ba-aa+G&&(ba=aa-G),G+=ba-aa,aa=ba,0>G?G=0:G>H&&(G=H),l.update_scroll()}function g(b){b.preventDefault(),b.stopPropagation(),Q=!1,a("html").off(".ace_scroll"),a(R).off(".ace_scroll"),A.removeClass("active"),S&&l.$element.trigger("drag.end"),w&&W&&!Y&&i()}function h(a){var b=+new Date;if(Z&&b-da>1e3){var c=z[t];$!=c&&($=c,_=!0,l.reset(!0)),da=b}w&&W&&(null!=ca&&(clearTimeout(ca),ca=null),A.addClass("not-idle"),Y||1!=a||i())}function i(){null!=ca&&(clearTimeout(ca),ca=null),ca=setTimeout(function(){ca=null,A.removeClass("not-idle")},X)}function j(){A.css("visibility","hidden").addClass("scroll-hover"),N=u?parseInt(A.outerWidth())||0:parseInt(A.outerHeight())||0,A.css("visibility","").removeClass("scroll-hover")}function k(){if(V!==!1){var a=y.offset(),b=a.left,c=a.top;u?M||(b+=y.outerWidth()-N):M||(c+=y.outerHeight()-N),V===!0?A.css({top:parseInt(c),left:parseInt(b)}):"left"===V?A.css("left",parseInt(b)):"top"===V&&A.css("top",parseInt(c))}}var l=this,m=ace.helper.getAttrSettings(b,a.fn.ace_scroll.defaults),n=a.extend({},a.fn.ace_scroll.defaults,c,m);this.size=0,this.lock=!1,this.lock_anyway=!1,this.$element=a(b),this.element=b;var o,p,q,r,s,t,u=!0,v=!1,w=!1,x=!1,y=null,z=null,A=null,B=null,C=null,D=null,E=null,F=0,G=0,H=0,I=0,J=!0,K=!1,L="",M=!1,N=0,O=1,P=!1,Q=!1,R="onmouseup"in window?window:"html",S=n.dragEvent||!1,T=c.scrollEvent||!1,U=n.detached||!1,V=n.updatePos||!1,W=n.hideOnIdle||!1,X=n.hideDelay||1500,Y=!1,Z=n.observeContent||!1,$=0,_=!0;this.ref=function(){return this},this.create=function(b){if(!x){b&&(n=a.extend({},a.fn.ace_scroll.defaults,b)),this.size=parseInt(this.$element.attr("data-size"))||n.size||200,u=!n.horizontal,o=u?"top":"left",p=u?"height":"width",q=u?"maxHeight":"maxWidth",r=u?"clientHeight":"clientWidth",s=u?"scrollTop":"scrollLeft",t=u?"scrollHeight":"scrollWidth",this.$element.addClass("ace-scroll"),"static"==this.$element.css("position")?(P=this.element.style.position,this.element.style.position="relative"):P=!1;var c=null;U?c=a('<div class="scroll-track scroll-detached"><div class="scroll-bar"></div></div>').appendTo("body"):(this.$element.wrapInner('<div class="scroll-content" />'),this.$element.prepend('<div class="scroll-track"><div class="scroll-bar"></div></div>')),y=this.$element,U||(y=this.$element.find(".scroll-content").eq(0)),u||y.wrapInner("<div />"),z=y.get(0),U?(A=c,k()):A=this.$element.find(".scroll-track").eq(0),B=A.find(".scroll-bar").eq(0),C=A.get(0),D=B.get(0),E=D.style,u||A.addClass("scroll-hz"),n.styleClass&&(L=n.styleClass,A.addClass(L),M=!!L.match(/scroll\-left|scroll\-top/)),0==N&&(A.show(),j()),A.hide(),A.on("mousedown",d),B.on("mousedown",e),y.on("scroll",function(){J&&(G=parseInt(Math.round(this[s]*O)),E[o]=G+"px"),J=!1,T&&this.$element.trigger("scroll",[z])}),n.mouseWheel&&(this.lock=n.mouseWheelLock,this.lock_anyway=n.lockAnyway,this.$element.on(a.event.special.mousewheel?"mousewheel.ace_scroll":"mousewheel.ace_scroll DOMMouseScroll.ace_scroll",function(b){if(!v){if(h(!0),!w)return!l.lock_anyway;Q&&(Q=!1,a("html").off(".ace_scroll"),a(R).off(".ace_scroll"),S&&l.$element.trigger("drag.end")),b.deltaY=b.deltaY||0;var c=b.deltaY>0||b.originalEvent.detail<0||b.originalEvent.wheelDelta>0?1:-1,d=!1,e=z[r],f=z[s];l.lock||(d=-1==c?z[t]<=f+e:0==f),l.move_bar(!0);var g=parseInt(e/8);return 80>g&&(g=80),g>l.size&&(g=l.size),g+=1,z[s]=f-c*g,d&&!l.lock_anyway}}));var f=ace.vars.touch&&"ace_drag"in a.event.special&&n.touchDrag;if(f){var g="",m=f?"ace_drag":"swipe";this.$element.on(m+".ace_scroll",function(a){if(v)return void(a.retval.cancel=!0);if(h(!0),!w)return void(a.retval.cancel=this.lock_anyway);if(g=a.direction,u&&("up"==g||"down"==g)||!u&&("left"==g||"right"==g)){var b=u?a.dy:a.dx;0!=b&&(Math.abs(b)>20&&f&&(b=2*b),l.move_bar(!0),z[s]=z[s]+b)}})}W&&A.addClass("idle-hide"),Z&&A.on("mouseenter.ace_scroll",function(){Y=!0,h(!1)}).on("mouseleave.ace_scroll",function(){Y=!1,0==Q&&i()}),this.$element.on("mouseenter.ace_scroll touchstart.ace_scroll",function(a){_=!0,Z?h(!0):n.hoverReset&&l.reset(!0),A.addClass("scroll-hover")}).on("mouseleave.ace_scroll touchend.ace_scroll",function(){A.removeClass("scroll-hover")}),u||y.children(0).css(p,this.size),y.css(q,this.size),v=!1,x=!0}},this.is_active=function(){return w},this.is_enabled=function(){return!v},this.move_bar=function(a){J=a},this.get_track=function(){return C},this.reset=function(a){if(!v){x||this.create();var b=this.size;if(!a||_){if(_=!1,U){var c=parseInt(Math.round((parseInt(y.css("border-top-width"))+parseInt(y.css("border-bottom-width")))/2.5));b-=c}var d=u?z[t]:b;if(u&&0==d||!u&&0==this.element.scrollWidth)return void A.removeClass("scroll-active");var e=u?b:z.clientWidth;u||y.children(0).css(p,b),y.css(q,this.size),d>e?(w=!0,A.css(p,e).show(),O=parseFloat((e/d).toFixed(5)),F=parseInt(Math.round(e*O)),I=parseInt(Math.round(F/2)),H=e-F,G=parseInt(Math.round(z[s]*O)),E[p]=F+"px",E[o]=G+"px",A.addClass("scroll-active"),0==N&&j(),K||(n.reset&&(z[s]=0,E[o]=0),K=!0),U&&k()):(w=!1,A.hide(),A.removeClass("scroll-active"),y.css(q,""))}}},this.disable=function(){z[s]=0,E[o]=0,v=!0,w=!1,A.hide(),this.$element.addClass("scroll-disabled"),A.removeClass("scroll-active"),y.css(q,"")},this.enable=function(){v=!1,this.$element.removeClass("scroll-disabled")},this.destroy=function(){w=!1,v=!1,x=!1,this.$element.removeClass("ace-scroll scroll-disabled scroll-active"),this.$element.off(".ace_scroll"),U||(u||y.find("> div").children().unwrap(),y.children().unwrap(),y.remove()),A.remove(),P!==!1&&(this.element.style.position=P),null!=ca&&(clearTimeout(ca),ca=null)},this.modify=function(b){b&&(n=a.extend({},n,b)),this.destroy(),this.create(),_=!0,this.reset(!0)},this.update=function(b){b&&(n=a.extend({},n,b)),this.size=n.size||this.size,this.lock=n.mouseWheelLock||this.lock,this.lock_anyway=n.lockAnyway||this.lock_anyway,W=n.hideOnIdle||W,X=n.hideDelay||X,Z=n.observeContent||!1,S=n.dragEvent||!1,"undefined"!=typeof b.styleClass&&(L&&A.removeClass(L),L=b.styleClass,L&&A.addClass(L),M=!!L.match(/scroll\-left|scroll\-top/))},this.start=function(){z[s]=0},this.end=function(){z[s]=z[t]},this.hide=function(){A.hide()},this.show=function(){A.show()},this.update_scroll=function(){J=!1,E[o]=G+"px",z[s]=parseInt(Math.round(G/O))};var aa=-1,ba=-1,ca=null,da=0;return this.track_size=function(){return 0==N&&j(),N},this.create(),_=!0,this.reset(!0),$=z[t],this};a.fn.ace_scroll=function(d,e){var f,g=this.each(function(){var b=a(this),g=b.data("ace_scroll"),h="object"==typeof d&&d;g||b.data("ace_scroll",g=new c(this,h)),"string"==typeof d&&(f=g[d](e))});return f===b?g:f},a.fn.ace_scroll.defaults={size:200,horizontal:!1,mouseWheel:!0,mouseWheelLock:!1,lockAnyway:!1,styleClass:!1,observeContent:!1,hideOnIdle:!1,hideDelay:1500,hoverReset:!0,reset:!1,dragEvent:!1,touchDrag:!0,touchSwipe:!1,scrollEvent:!1,detached:!1,updatePos:!0}}(window.jQuery),function(a,b){var c=function(b,c){var d=ace.helper.getAttrSettings(b,a.fn.ace_colorpicker.defaults),e=a.extend({},a.fn.ace_colorpicker.defaults,c,d),f=a(b),g="",h="",i=null,j=[];f.addClass("hide").find("option").each(function(){var a="colorpick-btn",b=this.value.replace(/[^\w\s,#\(\)\.]/g,"");b.indexOf("number")>=0||(this.value!=b&&(this.value=b),this.selected&&(a+=" selected",h=b),j.push(b),g+='<li><a class="'+a+'" style="background-color:'+b+';" data-color="'+b+'"></a></li>')}).end().on("change.color",function(){f.next().find(".btn-colorpicker").css("background-color",this.value)}).after('<div class="dropdown dropdown-colorpicker">		<a data-toggle="dropdown" class="dropdown-toggle" '+(e.auto_pos?'data-position="auto"':"")+'><span class="btn-colorpicker" style="background-color:'+h+'"></span></a><ul class="dropdown-menu'+(e.caret?" dropdown-caret":"")+(e.pull_right?" dropdown-menu-right":"")+'">'+g+"</ul></div>");var k=f.next().find(".dropdown-menu");k.on(ace.click_event,function(b,c){var d=a(b.target);if(!d.is(".colorpick-btn"))return!1;i&&i.removeClass("selected"),i=d,i.addClass("selected");var e=i.data("color");return c!==!0&&f.val(e).trigger("change"),f.next().find(".btn-colorpicker").css("background-color",e),b.preventDefault(),!0}),i=f.next().find("a.selected"),this.pick=function(c,d){if("number"==typeof c){if(c>=j.length)return;b.selectedIndex=c,k.find("a:eq("+c+")").trigger(ace.click_event,[!0])}else if("string"==typeof c){var e=c.replace(/[^\w\s,#\(\)\.]/g,"");if(c=j.indexOf(e),-1==c&&d===!0&&(j.push(e),a("<option />").appendTo(f).val(e),a('<li><a class="colorpick-btn"></a></li>').appendTo(k).find("a").css("background-color",e).data("color",e),c=j.length-1),-1==c)return;k.find("a:eq("+c+")").trigger(ace.click_event,[!0])}},this.destroy=function(){f.removeClass("hide").next().remove(),j=[]}};a.fn.ace_colorpicker=function(d,e){var f,g=this.each(function(){var b=a(this),g=b.data("ace_colorpicker"),h="object"==typeof d&&d;g||b.data("ace_colorpicker",g=new c(this,h)),"string"==typeof d&&(f=g[d](e))});return f===b?g:f},a.fn.ace_colorpicker.defaults={pull_right:!1,caret:!0,auto_pos:!0}}(window.jQuery),function(a,b){var c="multiple"in document.createElement("INPUT"),d="FileList"in window,e="FileReader"in window,f="File"in window,g=function(b,c){var d=this,e=ace.helper.getAttrSettings(b,a.fn.ace_file_input.defaults);this.settings=a.extend({},a.fn.ace_file_input.defaults,c,e),this.$element=a(b),this.element=b,this.disabled=!1,this.can_reset=!0,this.$element.off("change.ace_inner_call").on("change.ace_inner_call",function(a,b){return d.disabled||b===!0?void 0:i.call(d)});var f=this.$element.closest("label").css({display:"block"}),g=0==f.length?"label":"span";this.$element.wrap("<"+g+' class="ace-file-input" />'),this.apply_settings(),this.reset_input_field()};g.error={FILE_LOAD_FAILED:1,IMAGE_LOAD_FAILED:2,THUMBNAIL_FAILED:3},g.prototype.apply_settings=function(){var b=this;this.multi=this.$element.attr("multiple")&&c,this.well_style="well"==this.settings.style,this.well_style?(this.settings.thumbnail||(this.settings.thumbnail="small"),this.$element.parent().addClass("ace-file-multiple")):this.$element.parent().removeClass("ace-file-multiple"),this.$element.parent().find(":not(input[type=file])").remove(),this.$element.after('<span class="ace-file-container" data-title="'+this.settings.btn_choose+'"><span class="ace-file-name" data-title="'+this.settings.no_file+'">'+(this.settings.no_icon?'<i class="'+ace.vars.icon+this.settings.no_icon+'"></i>':"")+"</span></span>"),this.$label=this.$element.next(),this.$container=this.$element.closest(".ace-file-input");var e=!!this.settings.icon_remove;if(e){var f=a('<a class="remove" href="#"><i class="'+ace.vars.icon+this.settings.icon_remove+'"></i></a>').appendTo(this.$element.parent());f.on(ace.click_event,function(a){if(a.preventDefault(),!b.can_reset)return!1;var c=!0;if(b.settings.before_remove&&(c=b.settings.before_remove.call(b.element)),!c)return!1;b.reset_input();return!1})}this.settings.droppable&&d&&h.call(this)},g.prototype.show_file_list=function(b,c){var d="undefined"==typeof b?this.$element.data("ace_input_files"):b;if(d&&0!=d.length){this.well_style&&(this.$label.find(".ace-file-name").remove(),this.settings.btn_change||this.$label.addClass("hide-placeholder")),this.$label.attr("data-title",this.settings.btn_change).addClass("selected");for(var g=0;g<d.length;g++){var h="",i=!1;if("string"==typeof d[g])h=d[g];else if(f&&d[g]instanceof File)h=a.trim(d[g].name);else{if(!(d[g]instanceof Object&&d[g].hasOwnProperty("name")))continue;h=d[g].name,d[g].hasOwnProperty("type")&&(i=d[g].type),d[g].hasOwnProperty("path")||(d[g].path=d[g].name)}var k=h.lastIndexOf("\\")+1;0==k&&(k=h.lastIndexOf("/")+1),h=h.substr(k),0==i&&(i=/\.(jpe?g|png|gif|svg|bmp|tiff?)$/i.test(h)?"image":/\.(mpe?g|flv|mov|avi|swf|mp4|mkv|webm|wmv|3gp)$/i.test(h)?"video":/\.(mp3|ogg|wav|wma|amr|aac)$/i.test(h)?"audio":"file");var l={file:"fa fa-file",image:"fa fa-picture-o file-image",video:"fa fa-film file-video",audio:"fa fa-music file-audio"},m=l[i];if(this.well_style){this.$label.append('<span class="ace-file-name" data-title="'+h+'"><i class="'+ace.vars.icon+m+'"></i></span>');var n=c===!0&&f&&d[g]instanceof File?a.trim(d[g].type):"",o=e&&this.settings.thumbnail&&(n.length>0&&n.match("image")||0==n.length&&"image"==i);if(o){var p=this;a.when(j.call(this,d[g])).fail(function(a){p.settings.preview_error&&p.settings.preview_error.call(p,h,a.code)})}}else this.$label.find(".ace-file-name").attr({"data-title":h}).find(ace.vars[".icon"]).attr("class",ace.vars.icon+m)}return!0}},g.prototype.reset_input=function(){this.reset_input_ui(),this.reset_input_field()},g.prototype.reset_input_ui=function(){this.$label.attr({"data-title":this.settings.btn_choose,"class":"ace-file-container"}).find(".ace-file-name:first").attr({"data-title":this.settings.no_file,"class":"ace-file-name"}).find(ace.vars[".icon"]).attr("class",ace.vars.icon+this.settings.no_icon).prev("img").remove(),this.settings.no_icon||this.$label.find(ace.vars[".icon"]).remove(),this.$label.find(".ace-file-name").not(":first").remove(),this.reset_input_data()},g.prototype.reset_input_field=function(){this.$element.wrap("<form>").parent().get(0).reset(),this.$element.unwrap()},g.prototype.reset_input_data=function(){this.$element.data("ace_input_files")&&(this.$element.removeData("ace_input_files"),this.$element.removeData("ace_input_method"))},g.prototype.enable_reset=function(a){this.can_reset=a},g.prototype.disable=function(){this.disabled=!0,this.$element.attr("disabled","disabled").addClass("disabled")},g.prototype.enable=function(){this.disabled=!1,this.$element.removeAttr("disabled").removeClass("disabled")},g.prototype.files=function(){return a(this).data("ace_input_files")||null},g.prototype.method=function(){return a(this).data("ace_input_method")||""},g.prototype.update_settings=function(b){this.settings=a.extend({},this.settings,b),this.apply_settings()},g.prototype.loading=function(b){if(b===!1)this.$container.find(".ace-file-overlay").remove(),this.element.removeAttribute("readonly");else{var c="string"==typeof b?b:'<i class="overlay-content fa fa-spin fa-spinner orange2 fa-2x"></i>',d=this.$container.find(".ace-file-overlay");0==d.length&&(d=a('<div class="ace-file-overlay"></div>').appendTo(this.$container),d.on("click tap",function(a){return a.stopImmediatePropagation(),a.preventDefault(),!1}),this.element.setAttribute("readonly","true")),d.empty().append(c)}};var h=function(){var a=this,b=this.$element.parent();b.off("dragenter").on("dragenter",function(a){a.preventDefault(),a.stopPropagation()}).off("dragover").on("dragover",function(a){a.preventDefault(),a.stopPropagation()}).off("drop").on("drop",function(b){if(b.preventDefault(),b.stopPropagation(),!a.disabled){var c=b.originalEvent.dataTransfer,d=c.files;if(!a.multi&&d.length>1){var e=[];e.push(d[0]),d=e}return d=l.call(a,d,!0),d===!1?!1:(a.$element.data("ace_input_method","drop"),a.$element.data("ace_input_files",d),a.show_file_list(d,!0),a.$element.triggerHandler("change",[!0]),!0)}})},i=function(){var a=this.element.files||[this.element.value];return a=l.call(this,a,!1),a===!1?!1:(this.$element.data("ace_input_method","select"),this.$element.data("ace_input_files",a),this.show_file_list(a,!0),!0)},j=function(b){var c=this,d=c.$label.find(".ace-file-name:last"),e=new a.Deferred,h=function(b,c){d.prepend("<img class='middle' style='display:none;' />");var e=d.find("img:last").get(0);a(e).one("load",function(){i.call(null,e,c)}).one("error",function(){j.call(null,e)}),e.src=b},i=function(b,f){var h=c.settings.previewSize;h||(c.settings.previewWidth||c.settings.previewHeight?h={previewWidth:c.settings.previewWidth,previewHeight:c.settings.previewHeight}:(h=50,"large"==c.settings.thumbnail&&(h=150))),"fit"==c.settings.thumbnail?h=d.width():"number"==typeof h&&(h=parseInt(Math.min(h,d.width())));var i=k(b,h);if(null==i)return a(this).remove(),void e.reject({code:g.error.THUMBNAIL_FAILED});var j=!0;if(f&&f instanceof File){f.width=i.width,f.height=i.height,c.$element.trigger("file.preview.ace",{file:f});var l;c.$element.trigger(l=new a.Event("file.preview.ace"),{file:f}),l.isDefaultPrevented()&&(j=!1)}if(j){var m=i.previewWidth,n=i.previewHeight;"small"==c.settings.thumbnail?m=n=parseInt(Math.max(m,n)):d.addClass("large"),a(b).css({"background-image":"url("+i.src+")",width:m,height:n}).data("thumb",i.src).attr({src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="}).show()}e.resolve()},j=function(a){d.find("img").remove(),e.reject({code:g.error.IMAGE_LOAD_FAILED})};if(f&&b instanceof File){var l=new FileReader;l.onload=function(a){h(a.target.result,b)},l.onerror=function(a){e.reject({code:g.error.FILE_LOAD_FAILED})},l.readAsDataURL(b)}else b instanceof Object&&b.hasOwnProperty("path")&&h(b.path,null);return e.promise()},k=function(b,c,d){var e=b.width,f=b.height;e=e>0?e:a(b).width(),f=f>0?f:a(b).height();var g=!1,h=!1,i=!1;"number"==typeof c?g=c:c instanceof Object&&(c.previewWidth&&!c.previewHeight?i=c.previewWidth:c.previewHeight&&!c.previewWidth?h=c.previewHeight:c.previewWidth&&c.previewHeight&&(i=c.previewWidth,h=c.previewHeight)),g?e>f?(i=g,h=parseInt(f/e*i)):(h=g,i=parseInt(e/f*h)):!h&&i?h=parseInt(f/e*i):h&&!i&&(i=parseInt(e/f*h));var j;try{var k=document.createElement("canvas");k.width=i,k.height=h;var l=k.getContext("2d");l.drawImage(b,0,0,e,f,0,0,i,h),j=k.toDataURL()}catch(m){j=null}return j?(/^data\:image\/(png|jpe?g|gif);base64,[0-9A-Za-z\+\/\=]+$/.test(j)||(j=null),j?{src:j,previewWidth:i,previewHeight:h,width:e,height:f}:null):null},l=function(a,b){var c=o.call(this,a,b);return-1===c?(this.reset_input(),!1):c&&0!=c.length?((c instanceof Array||d&&c instanceof FileList)&&(a=c),c=!0,this.settings.before_change&&(c=this.settings.before_change.call(this.element,a,b)),-1===c?(this.reset_input(),!1):c&&0!=c.length?((c instanceof Array||d&&c instanceof FileList)&&(a=c),a):(this.$element.data("ace_input_files")||this.reset_input(),!1)):(this.$element.data("ace_input_files")||this.reset_input(),!1)},m=function(a){return a?("string"==typeof a&&(a=[a]),0==a.length?null:new RegExp(".(?:"+a.join("|")+")$","i")):null},n=function(a){return a?("string"==typeof a&&(a=[a]),0==a.length?null:new RegExp("^(?:"+a.join("|").replace(/\//g,"\\/")+")$","i")):null},o=function(b,c){var d=m(this.settings.allowExt),e=m(this.settings.denyExt),g=n(this.settings.allowMime),h=n(this.settings.denyMime),i=this.settings.maxSize||!1;if(!(d||e||g||h||i))return!0;for(var j=[],k={},l=0;l<b.length;l++){var o=b[l],p=f?o.name:o;if(!d||d.test(p))if(e&&e.test(p))"ext"in k||(k.ext=[]),k.ext.push(p);else{var q;if(f){if((q=a.trim(o.type)).length>0){if(g&&!g.test(q)){"mime"in k||(k.mime=[]),k.mime.push(p);continue}if(h&&h.test(q)){"mime"in k||(k.mime=[]),k.mime.push(p);continue}}i&&o.size>i?("size"in k||(k.size=[]),k.size.push(p)):j.push(o)}else j.push(o)}else"ext"in k||(k.ext=[]),k.ext.push(p)}if(j.length==b.length)return b;var r={ext:0,mime:0,size:0};"ext"in k&&(r.ext=k.ext.length),"mime"in k&&(r.mime=k.mime.length),"size"in k&&(r.size=k.size.length);var s;return this.$element.trigger(s=new a.Event("file.error.ace"),{file_count:b.length,invalid_count:b.length-j.length,error_list:k,error_count:r,dropped:c}),s.isDefaultPrevented()?-1:j};a.fn.aceFileInput=a.fn.ace_file_input=function(c,d){var e,f=this.each(function(){var b=a(this),f=b.data("ace_file_input"),h="object"==typeof c&&c;f||b.data("ace_file_input",f=new g(this,h)),"string"==typeof c&&(e=f[c](d))});return e===b?f:e},a.fn.ace_file_input.defaults={style:!1,no_file:"No File ...",no_icon:"fa fa-upload",btn_choose:"Choose",btn_change:"Change",icon_remove:"fa fa-times",droppable:!1,thumbnail:!1,allowExt:null,denyExt:null,allowMime:null,denyMime:null,maxSize:!1,previewSize:!1,previewWidth:!1,previewHeight:!1,before_change:null,before_remove:null,preview_error:null}}(window.jQuery),!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.bs_typeahead.defaults,c),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=a(this.options.menu),this.shown=!1,this.listen()};b.prototype={constructor:b,select:function(){var a=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(a)).change(),this.hide()},updater:function(a){return a},show:function(){var b=a.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:b.top+b.height,left:b.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(b){var c;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(c=a.isFunction(this.source)?this.source(this.query,a.proxy(this.process,this)):this.source,c?this.process(c):this)},process:function(b){var c=this;return b=a.grep(b,function(a){return c.matcher(a)}),b=this.sorter(b),b.length?this.render(b.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){for(var b,c=[],d=[],e=[];b=a.shift();)b.toLowerCase().indexOf(this.query.toLowerCase())?~b.indexOf(this.query)?d.push(b):e.push(b):c.push(b);return c.concat(d,e)},highlighter:function(a){var b=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return a.replace(new RegExp("("+b+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(b){var c=this;return b=a(b).map(function(b,d){return b=a(c.options.item).attr("data-value",d),b.find("a").html(c.highlighter(d)),b[0]}),b.first().addClass("active"),this.$menu.html(b),this},next:function(b){var c=this.$menu.find(".active").removeClass("active"),d=c.next();d.length||(d=a(this.$menu.find("li")[0])),d.addClass("active")},prev:function(a){var b=this.$menu.find(".active").removeClass("active"),c=b.prev();c.length||(c=this.$menu.find("li").last()),c.addClass("active")},listen:function(){this.$element.on("focus",a.proxy(this.focus,this)).on("blur",a.proxy(this.blur,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",a.proxy(this.keydown,this)),this.$menu.on("click",a.proxy(this.click,this)).on("mouseenter","li",a.proxy(this.mouseenter,this)).on("mouseleave","li",a.proxy(this.mouseleave,this))},eventSupported:function(a){var b=a in this.$element;return b||(this.$element.setAttribute(a,"return;"),b="function"==typeof this.$element[a]),b},move:function(a){if(this.shown){switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:a.preventDefault(),this.prev();break;case 40:a.preventDefault(),this.next()}a.stopPropagation()}},keydown:function(b){this.suppressKeyPressRepeat=~a.inArray(b.keyCode,[40,38,9,13,27]),this.move(b)},keypress:function(a){this.suppressKeyPressRepeat||this.move(a)},keyup:function(a){switch(a.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}a.stopPropagation(),a.preventDefault()},focus:function(a){this.focused=!0},blur:function(a){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(a){a.stopPropagation(),a.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(b){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),a(b.currentTarget).addClass("active")},mouseleave:function(a){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var c=a.fn.bs_typeahead;a.fn.bs_typeahead=function(c){return this.each(function(){var d=a(this),e=d.data("bs_typeahead"),f="object"==typeof c&&c;e||d.data("bs_typeahead",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.bs_typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},a.fn.bs_typeahead.Constructor=b,a.fn.bs_typeahead.noConflict=function(){return a.fn.bs_typeahead=c,this},a(document).on("focus.bs_typeahead.data-api",'[data-provide="bs_typeahead"]',function(b){var c=a(this);c.data("bs_typeahead")||c.bs_typeahead(c.data())})}(window.jQuery),function(a,b){a.fn.ace_wysiwyg=function(b,c){var d=a.extend({speech_button:!0,wysiwyg:{}},b),e=["#ac725e","#d06b64","#f83a22","#fa573c","#ff7537","#ffad46","#42d692","#16a765","#7bd148","#b3dc6c","#fbe983","#fad165","#92e1c0","#9fe1e7","#9fc6e7","#4986e7","#9a9cff","#b99aff","#c2c2c2","#cabdbf","#cca6ac","#f691b2","#cd74e6","#a47ae2","#444444"],f={font:{values:["Arial","Courier","Comic Sans MS","Helvetica","Open Sans","Tahoma","Verdana"],icon:"fa fa-font",title:"Font"},fontSize:{values:{5:"Huge",3:"Normal",1:"Small"},icon:"fa fa-text-height",title:"Font Size"},bold:{icon:"fa fa-bold",title:"Bold (Ctrl/Cmd+B)"},italic:{icon:"fa fa-italic",title:"Italic (Ctrl/Cmd+I)"},strikethrough:{icon:"fa fa-strikethrough",title:"Strikethrough"},underline:{icon:"fa fa-underline",title:"Underline"},insertunorderedlist:{icon:"fa fa-list-ul",title:"Bullet list"},insertorderedlist:{icon:"fa fa-list-ol",title:"Number list"},outdent:{icon:"fa fa-outdent",title:"Reduce indent (Shift+Tab)"},indent:{icon:"fa fa-indent",title:"Indent (Tab)"},justifyleft:{icon:"fa fa-align-left",title:"Align Left (Ctrl/Cmd+L)"},justifycenter:{icon:"fa fa-align-center",title:"Center (Ctrl/Cmd+E)"},justifyright:{icon:"fa fa-align-right",title:"Align Right (Ctrl/Cmd+R)"},justifyfull:{icon:"fa fa-align-justify",title:"Justify (Ctrl/Cmd+J)"},createLink:{icon:"fa fa-link",title:"Hyperlink",button_text:"Add",placeholder:"URL",button_class:"btn-primary"},unlink:{icon:"fa fa-chain-broken",title:"Remove Hyperlink"},insertImage:{icon:"fa fa-picture-o",title:"Insert picture",button_text:'<i class="'+ace.vars.icon+'fa fa-file"></i> Choose Image &hellip;',placeholder:"Image URL",button_insert:"Insert",button_class:"btn-success",button_insert_class:"btn-primary",choose_file:!0},foreColor:{values:e,title:"Change Color"},backColor:{values:e,title:"Change Background Color"},undo:{icon:"fa fa-undo",title:"Undo (Ctrl/Cmd+Z)"},redo:{icon:"fa fa-repeat",title:"Redo (Ctrl/Cmd+Y)"},viewSource:{icon:"fa fa-code",title:"View Source"}},g=d.toolbar||["font",null,"fontSize",null,"bold","italic","strikethrough","underline",null,"insertunorderedlist","insertorderedlist","outdent","indent",null,"justifyleft","justifycenter","justifyright","justifyfull",null,"createLink","unlink",null,"insertImage",null,"foreColor",null,"undo","redo",null,"viewSource"];return this.each(function(){var b=' <div class="wysiwyg-toolbar btn-toolbar center"> <div class="btn-group"> ';for(var c in g)if(g.hasOwnProperty(c)){var e=g[c];if(null===e){b+=' </div> <div class="btn-group"> ';continue}if("string"==typeof e&&e in f)e=f[e],e.name=g[c];else{if(!("object"==typeof e&&e.name in f))continue;e=a.extend(f[e.name],e)}var h="className"in e?e.className:"btn-default";switch(e.name){case"font":b+=' <a class="btn btn-sm '+h+' dropdown-toggle" data-toggle="dropdown" title="'+e.title+'"><i class="'+ace.vars.icon+e.icon+'"></i><i class="'+ace.vars.icon+'fa fa-angle-down icon-on-right"></i></a> ',b+=' <ul class="dropdown-menu dropdown-light dropdown-caret">';for(var i in e.values)e.values.hasOwnProperty(i)&&(b+=' <li><a data-edit="fontName '+e.values[i]+'" style="font-family:\''+e.values[i]+"'\">"+e.values[i]+"</a></li> ");b+=" </ul>";break;case"fontSize":b+=' <a class="btn btn-sm '+h+' dropdown-toggle" data-toggle="dropdown" title="'+e.title+'"><i class="'+ace.vars.icon+e.icon+'"></i>&nbsp;<i class="'+ace.vars.icon+'fa fa-angle-down icon-on-right"></i></a> ',b+=' <ul class="dropdown-menu dropdown-light dropdown-caret"> ';for(var j in e.values)e.values.hasOwnProperty(j)&&(b+=' <li><a data-edit="fontSize '+j+'"><font size="'+j+'">'+e.values[j]+"</font></a></li> ");b+=" </ul> ";break;case"createLink":b+=' <div class="btn-group"> <a class="btn btn-sm '+h+' dropdown-toggle" data-toggle="dropdown" title="'+e.title+'"><i class="'+ace.vars.icon+e.icon+'"></i></a> ',b+=' <div class="dropdown-menu dropdown-caret dropdown-menu-right">							 <div class="input-group">								<input class="form-control" placeholder="'+e.placeholder+'" type="text" data-edit="'+e.name+'" />								<span class="input-group-btn">									<button class="btn btn-sm '+e.button_class+'" type="button">'+e.button_text+"</button>								</span>							 </div>						</div> </div>";break;case"insertImage":b+=' <div class="btn-group"> <a class="btn btn-sm '+h+' dropdown-toggle" data-toggle="dropdown" title="'+e.title+'"><i class="'+ace.vars.icon+e.icon+'"></i></a> ',b+=' <div class="dropdown-menu dropdown-caret dropdown-menu-right">							 <div class="input-group">								<input class="form-control" placeholder="'+e.placeholder+'" type="text" data-edit="'+e.name+'" />								<span class="input-group-btn">									<button class="btn btn-sm '+e.button_insert_class+'" type="button">'+e.button_insert+"</button>								</span>							 </div>",e.choose_file&&"FileReader"in window&&(b+='<div class="space-2"></div>							 <label class="center block no-margin-bottom">								<button class="btn btn-sm '+e.button_class+' wysiwyg-choose-file" type="button">'+e.button_text+'</button>								<input type="file" data-edit="'+e.name+'" />							  </label>'),b+=" </div> </div>";break;case"foreColor":case"backColor":b+=' <select class="hide wysiwyg_colorpicker" title="'+e.title+'"> ',a.each(e.values,function(a,c){b+=' <option value="'+c+'">'+c+"</option> "}),b+=" </select> ",b+=' <input style="display:none;" disabled class="hide" type="text" data-edit="'+e.name+'" /> ';break;case"viewSource":b+=' <a class="btn btn-sm '+h+'" data-view="source" title="'+e.title+'"><i class="'+ace.vars.icon+e.icon+'"></i></a> ';break;default:b+=' <a class="btn btn-sm '+h+'" data-edit="'+e.name+'" title="'+e.title+'"><i class="'+ace.vars.icon+e.icon+'"></i></a> '}}b+=" </div> ";var k;d.speech_button&&"onwebkitspeechchange"in(k=document.createElement("input"))&&(b+=' <input class="wysiwyg-speech-input" type="text" data-edit="inserttext" x-webkit-speech />'),k=null,b+=" </div> ",b=d.toolbar_place?d.toolbar_place.call(this,b):a(this).before(b).prev(),a.fn.tooltip&&b.find("a[title]").tooltip({animation:!1,container:"body"}),b.find(".dropdown-menu input[type=text]").on("click",function(){return!1}).on("change",function(){a(this).closest(".dropdown-menu").siblings(".dropdown-toggle").dropdown("toggle")}).on("keydown",function(b){27==b.which?(this.value="",a(this).change()):13==b.which&&(b.preventDefault(),b.stopPropagation(),a(this).change())}),b.find("input[type=file]").prev().on(ace.click_event,function(b){a(this).next().click()}),b.find(".wysiwyg_colorpicker").each(function(){var b=a(this).ace_colorpicker({pull_right:!0}).change(function(){a(this).nextAll("input").eq(0).val(this.value).change()}).next().find(".btn-colorpicker");a.fn.tooltip&&b.tooltip({title:this.title,animation:!1,container:"body"})});var l=a(this),m=!1;b.find("a[data-view=source]").on("click",function(b){if(b.preventDefault(),m){var c=l.next();l.html(c.val()).show(),c.remove(),a(this).removeClass("active")}else a("<textarea />").css({width:l.outerWidth(),height:l.outerHeight()}).val(l.html()).insertAfter(l),l.hide(),a(this).addClass("active");m=!m});var n=a.extend({},{
activeToolbarClass:"active",toolbarSelector:b},d.wysiwyg||{});a(this).wysiwyg(n)}),this}}(window.jQuery),function(a,b){function c(b,c){var d=ace.helper.getAttrSettings(b,a.fn.ace_spinner.defaults),e=a.extend({},a.fn.ace_spinner.defaults,c,d),f=e.max;f=(""+f).length;var g=parseInt(Math.max(20*f+40,90)),h=a(b),i="btn-sm",j=2;h.hasClass("input-sm")?(i="btn-xs",j=1):h.hasClass("input-lg")&&(i="btn-lg",j=3),2==j?g+=25:3==j&&(g+=50),h.addClass("spinbox-input form-control text-center").wrap('<div class="ace-spinner middle">');var k=h.closest(".ace-spinner").spinbox(e).wrapInner("<div class='input-group'></div>"),l=k.data("fu.spinbox");e.on_sides?(h.before('<div class="spinbox-buttons input-group-btn">					<button type="button" class="btn spinbox-down '+i+" "+e.btn_down_class+'">						<i class="icon-only '+ace.vars.icon+e.icon_down+'"></i>					</button>				</div>').after('<div class="spinbox-buttons input-group-btn">					<button type="button" class="btn spinbox-up '+i+" "+e.btn_up_class+'">						<i class="icon-only '+ace.vars.icon+e.icon_up+'"></i>					</button>				</div>'),k.addClass("touch-spinner"),k.css("width",g+"px")):(h.after('<div class="spinbox-buttons input-group-btn">					<button type="button" class="btn spinbox-up '+i+" "+e.btn_up_class+'">						<i class="icon-only '+ace.vars.icon+e.icon_up+'"></i>					</button>					<button type="button" class="btn spinbox-down '+i+" "+e.btn_down_class+'">						<i class="icon-only '+ace.vars.icon+e.icon_down+'"></i>					</button>				</div>'),ace.vars.touch||e.touch_spinner?(k.addClass("touch-spinner"),k.css("width",g+"px")):(h.next().addClass("btn-group-vertical"),k.css("width",g+"px"))),k.on("changed",function(){h.trigger("change")}),this._call=function(a,b){l[a](b)}}a.fn.ace_spinner=function(d,e){var f,g=this.each(function(){var b=a(this),g=b.data("ace_spinner"),h="object"==typeof d&&d;g||(h=a.extend({},a.fn.ace_spinner.defaults,d),b.data("ace_spinner",g=new c(this,h))),"string"==typeof d&&(f=g._call(d,e))});return f===b?g:f},a.fn.ace_spinner.defaults={icon_up:"fa fa-chevron-up",icon_down:"fa fa-chevron-down",on_sides:!1,btn_up_class:"",btn_down_class:"",max:999,touch_spinner:!1}}(window.jQuery),function(a,b){a.fn.aceTree=a.fn.ace_tree=function(b){var c={"open-icon":ace.vars.icon+"fa fa-folder-open","close-icon":ace.vars.icon+"fa fa-folder","toggle-icon":ace.vars.icon+"fa fa-play","selected-icon":ace.vars.icon+"fa fa-check","unselected-icon":ace.vars.icon+"fa fa-times","base-icon":ace.vars.icon+"fa","folder-open-icon":"fa fa-plus-square-o","folder-close-icon":"fa fa-plus-minus-o",loadingHTML:"Loading..."};return this.each(function(){var d=ace.helper.getAttrSettings(this,c),e=a.extend({},c,b,d),f=a(this);f.addClass("tree").attr("role","tree"),f.html('<li class="tree-branch hide" data-template="treebranch" role="treeitem" aria-expanded="false">				'+(e.folderSelect?'<i class="icon-caret '+e["folder-open-icon"]+'"></i>&nbsp;':"")+'				<div class="tree-branch-header">					<span class="tree-branch-name">						<i class="icon-folder '+e["close-icon"]+'"></i>						<span class="tree-label"></span>					</span>				</div>				<ul class="tree-branch-children" role="group"></ul>				<div class="tree-loader" role="alert">'+e.loadingHTML+'</div>			</li>			<li class="tree-item hide" data-template="treeitem" role="treeitem">				<span class="tree-item-name">				  '+(null==e["unselected-icon"]?"":'<i class="icon-item '+e["unselected-icon"]+'"></i>')+'				  <span class="tree-label"></span>				</span>			</li>'),f.addClass(1==e.selectable?"tree-selectable":"tree-unselectable"),f.tree(e)}),this}}(window.jQuery),function(a,b){a.fn.aceWizard=a.fn.ace_wizard=function(b){return this.each(function(){var c=a(this);c.wizard(),ace.vars.old_ie&&c.find("ul.steps > li").last().addClass("last-child");var d=b&&b.buttons?a(b.buttons):c.siblings(".wizard-actions").eq(0),e=c.data("fu.wizard");e.$prevBtn.remove(),e.$nextBtn.remove(),e.$prevBtn=d.find(".btn-prev").eq(0).on(ace.click_event,function(){e.previous()}).attr("disabled","disabled"),e.$nextBtn=d.find(".btn-next").eq(0).on(ace.click_event,function(){e.next()}).removeAttr("disabled"),e.nextText=e.$nextBtn.text();var f=b&&(b.selectedItem&&b.selectedItem.step||b.step);f&&(e.currentStep=f,e.setState())}),this}}(window.jQuery),function(a,b){function c(b,c){var e=this,f=a(b),g="right",h=!1,i=f.hasClass("fade"),j=ace.helper.getAttrSettings(b,a.fn.ace_aside.defaults);if(this.settings=a.extend({},a.fn.ace_aside.defaults,c,j),!this.settings.background||c.scroll_style||j.scroll_style||(this.settings.scroll_style="scroll-white no-track"),this.container=this.settings.container,this.container)try{a(this.container).get(0)==document.body&&(this.container=null)}catch(k){}this.container&&(this.settings.backdrop=!1,f.addClass("aside-contained"));var l=f.find(".modal-dialog"),m=f.find(".modal-content"),n=300;this.initiate=function(){b.className=b.className.replace(/(\s|^)aside\-(right|top|left|bottom)(\s|$)/gi,"$1$3"),g=this.settings.placement,g&&(g=a.trim(g.toLowerCase())),g&&/right|top|left|bottom/.test(g)||(g="right"),f.attr("data-placement",g),f.addClass("aside-"+g),/right|left/.test(g)?(h=!0,f.addClass("aside-vc")):f.addClass("aside-hz"),this.settings.fixed&&f.addClass("aside-fixed"),this.settings.background&&f.addClass("aside-dark"),this.settings.offset&&f.addClass("navbar-offset"),this.settings.transition||f.addClass("transition-off"),f.addClass("aside-hidden"),this.insideContainer(),l=f.find(".modal-dialog"),m=f.find(".modal-content"),this.settings.body_scroll||f.on("mousewheel.aside DOMMouseScroll.aside touchmove.aside pointermove.aside",function(b){return a.contains(m[0],b.target)?void 0:(b.preventDefault(),!1)}),0==this.settings.backdrop&&f.addClass("no-backdrop")},this.show=function(){if(0==this.settings.backdrop)try{f.data("bs.modal").$backdrop.remove()}catch(b){}this.container?a(this.container).addClass("overflow-hidden"):f.css("position","fixed"),f.removeClass("aside-hidden")},this.hide=function(){this.container&&(this.container.addClass("overflow-hidden"),ace.vars.firefox&&b.offsetHeight),o(),ace.vars.transition&&!i&&f.one("bsTransitionEnd",function(){f.addClass("aside-hidden"),f.css("position",""),e.container&&e.container.removeClass("overflow-hidden")}).emulateTransitionEnd(n)},this.shown=function(){if(o(),a("body").removeClass("modal-open").css("padding-right",""),"invisible"==this.settings.backdrop)try{f.data("bs.modal").$backdrop.css("opacity",0)}catch(b){}var c=h?m.height():l.height();ace.vars.touch?m.addClass("overflow-scroll").css("max-height",c+"px"):m.hasClass("ace-scroll")||m.ace_scroll({size:c,reset:!0,mouseWheelLock:!0,lockAnyway:!this.settings.body_scroll,styleClass:this.settings.scroll_style,observeContent:!0,hideOnIdle:!ace.vars.old_ie,hideDelay:1500}),d.off("resize.modal.aside").on("resize.modal.aside",function(){if(ace.vars.touch)m.css("max-height",(h?m.height():l.height())+"px");else{m.ace_scroll("disable");var a=h?m.height():l.height();m.ace_scroll("update",{size:a}).ace_scroll("enable").ace_scroll("reset")}}).triggerHandler("resize.modal.aside"),e.container&&ace.vars.transition&&!i&&f.one("bsTransitionEnd",function(){e.container.removeClass("overflow-hidden")}).emulateTransitionEnd(n)},this.hidden=function(){d.off(".aside"),ace.vars.transition&&!i||(f.addClass("aside-hidden"),f.css("position",""))},this.insideContainer=function(){var b=a(".main-container"),c=f.find(".modal-dialog");if(c.css({right:"",left:""}),b.hasClass("container")){var e=!1;1==h&&(c.css(g,parseInt((d.width()-b.width())/2)),e=!0),e&&ace.vars.firefox&&ace.helper.redraw(b[0])}},this.flip=function(){var a={right:"left",left:"right",top:"bottom",bottom:"top"};f.removeClass("aside-"+g).addClass("aside-"+a[g]),g=a[g]};var o=function(){var a=f.find(".aside-trigger");if(0!=a.length){a.toggleClass("open");var b=a.find(ace.vars[".icon"]);0!=b.length&&b.toggleClass(b.attr("data-icon1")+" "+b.attr("data-icon2"))}};this.initiate(),this.container&&(this.container=a(this.container)),f.appendTo(this.container||"body")}var d=a(window);a(document).on("show.bs.modal",".modal.aside",function(b){a(".aside.in").modal("hide"),a(this).ace_aside("show")}).on("hide.bs.modal",".modal.aside",function(b){a(this).ace_aside("hide")}).on("shown.bs.modal",".modal.aside",function(b){a(this).ace_aside("shown")}).on("hidden.bs.modal",".modal.aside",function(b){a(this).ace_aside("hidden")}),a(window).on("resize.aside_container",function(){a(".modal.aside").ace_aside("insideContainer")}),a(document).on("settings.ace.aside",function(b,c){"main_container_fixed"==c&&a(".modal.aside").ace_aside("insideContainer")}),a.fn.aceAside=a.fn.ace_aside=function(d,e){var f,g=this.each(function(){var b=a(this),g=b.data("ace_aside"),h="object"==typeof d&&d;g||b.data("ace_aside",g=new c(this,h)),"string"==typeof d&&"function"==typeof g[d]&&(f=e instanceof Array?g[d].apply(g,e):g[d](e))});return f===b?g:f},a.fn.ace_aside.defaults={fixed:!1,background:!1,offset:!1,body_scroll:!1,transition:!0,scroll_style:"scroll-dark no-track",container:null,backdrop:!1,placement:"right"}}(window.jQuery);
;!function(){"ace"in window||(window.ace={}),ace.config={storage_method:0,cookie_expiry:604800,cookie_path:""},"vars"in window.ace||(window.ace.vars={}),ace.vars.very_old_ie=!("querySelector"in document.documentElement),ace.settings={saveState:function(a,b,c,d){if(!a||"string"==typeof a&&!(a=document.getElementById(a))||!a.hasAttribute("id"))return!1;if(!ace.hasClass(a,"ace-save-state"))return!1;var b=b||"class",e=a.getAttribute("id"),f=ace.data.get("state","id-"+e)||{};if("string"==typeof f)try{f=JSON.parse(f)}catch(g){f={}}var h,i="undefined"!=typeof c,j=!1,k=/class/i,l=/checked|disabled|readonly|value/i;l.test(b)?h=i?c:a[b]:a.hasAttribute(b)?h=i?c:a.getAttribute(b):i||(j=!0),j?delete f[b]:k.test(b)?(f.hasOwnProperty(b)||(f[b]={}),d===!0?f[b][h]=1:d===!1?f[b][h]=-1:f[b].className=h):f[b]=h,ace.data.set("state","id-"+e,JSON.stringify(f))},loadState:function(a,b){if(!a||"string"==typeof a&&!(a=document.getElementById(a))||!a.hasAttribute("id"))return!1;var c=a.getAttribute("id"),d=ace.data.get("state","id-"+c)||{};if("string"==typeof d)try{d=JSON.parse(d)}catch(e){d={}}var f=function(a,b,c){var d=/class/i,e=/checked|disabled|readonly|value/i;if(d.test(b)){if("object"==typeof c){"className"in c&&a.setAttribute("class",c.className);for(var f in c)if(c.hasOwnProperty(f)){var g=c[f];1==g?ace.addClass(a,f):-1==g&&ace.removeClass(a,f)}}}else e.test(b)?a[b]=c:a.setAttribute(b,c)};if(void 0!==b)d.hasOwnProperty(b)&&null!==d[b]&&f(a,b,d[b]);else for(var g in d)d.hasOwnProperty(g)&&null!==d[g]&&f(a,g,d[g])},clearState:function(a){var b=null;"string"==typeof a?b=a:"hasAttribute"in a&&a.hasAttribute("id")&&(b=a.getAttribute("id")),b&&ace.data.remove("state","id-"+b)}},function(){var a=function(){var a=!1,b="animation",c="",d="Webkit Moz O ms Khtml".split(" "),e="",f=document.createElement("div");if(void 0!==f.style.animationName&&(a=!0),a===!1)for(var g=0;g<d.length;g++)if(void 0!==f.style[d[g]+"AnimationName"]){e=d[g],b=e+"Animation",c="-"+e.toLowerCase()+"-",a=!0;break}return a};if(ace.vars.animation=a(),ace.vars.animation){var b="@keyframes nodeInserted{from{outline-color:#fff}to{outline-color:#000}}@-moz-keyframes nodeInserted{from{outline-color:#fff}to{outline-color:#000}}@-webkit-keyframes nodeInserted{from{outline-color:#fff}to{outline-color:#000}}@-ms-keyframes nodeInserted{from{outline-color:#fff}to{outline-color:#000}}@-o-keyframes nodeInserted{from{outline-color:#fff}to{outline-color:#000}}.ace-save-state{animation-duration:10ms;-o-animation-duration:10ms;-ms-animation-duration:10ms;-moz-animation-duration:10ms;-webkit-animation-duration:10ms;animation-delay:0s;-o-animation-delay:0s;-ms-animation-delay:0s;-moz-animation-delay:0s;-webkit-animation-delay:0s;animation-name:nodeInserted;-o-animation-name:nodeInserted;-ms-animation-name:nodeInserted;-moz-animation-name:nodeInserted;-webkit-animation-name:nodeInserted}",c=document.createElement("style");c.innerHTML=b,document.head.appendChild(c);var d=function(a){var b=a.target;b&&ace.hasClass(b,"ace-save-state")&&ace.settings.loadState(b)};document.addEventListener("animationstart",d,!1),document.addEventListener("MSAnimationStart",d,!1),document.addEventListener("webkitAnimationStart",d,!1)}else{var e=function(){for(var a=document.querySelectorAll(".ace-save-state"),b=0;b<a.length;b++)ace.settings.loadState(a[b])};"complete"==document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e,!1):document.attachEvent&&document.attachEvent("onreadystatechange",function(){"complete"==document.readyState&&e()})}}(),ace.data_storage=function(a,b){var c="ace_",d=null,e=0;(1==a||a===b||0==a)&&"localStorage"in window&&null!==window.localStorage?(d=ace.storage,e=1):null==d&&(2==a||a===b)&&"cookie"in document&&null!==document.cookie&&(d=ace.cookie,e=2),this.set=function(a,b,f,g,h,i){if(d)if(f===i)f=b,b=a,null==f?d.remove(c+b):1==e?d.set(c+b,f):2==e&&d.set(c+b,f,ace.config.cookie_expiry,g||ace.config.cookie_path);else if(1==e)null==f?d.remove(c+a+"_"+b):(h&&"object"==typeof f&&(f=JSON.stringify(f)),d.set(c+a+"_"+b,f));else if(2==e){var j=d.get(c+a),k=j?JSON.parse(j):{};if(null==f){if(delete k[b],0==ace.sizeof(k))return void d.remove(c+a)}else k[b]=f;d.set(c+a,JSON.stringify(k),ace.config.cookie_expiry,g||ace.config.cookie_path)}},this.get=function(a,b,f,g){if(!d)return null;if(b===g)return b=a,d.get(c+b);if(1==e){var h=d.get(c+a+"_"+b);if(f&&h)try{h=JSON.parse(h)}catch(i){}return h}if(2==e){var j=d.get(c+a),k=j?JSON.parse(j):{};return b in k?k[b]:null}},this.remove=function(a,b,c){d&&(b===c?(b=a,this.set(b,null)):this.set(a,b,null))}},ace.cookie={get:function(a){var b,c,d=document.cookie,e=a+"=";if(d){if(c=d.indexOf("; "+e),-1==c){if(c=d.indexOf(e),0!=c)return null}else c+=2;return b=d.indexOf(";",c),-1==b&&(b=d.length),decodeURIComponent(d.substring(c+e.length,b))}},set:function(a,b,c,d,e,f){var g=new Date;"object"==typeof c&&c.toGMTString?c=c.toGMTString():parseInt(c,10)?(g.setTime(g.getTime()+1e3*parseInt(c,10)),c=g.toGMTString()):c="",document.cookie=a+"="+encodeURIComponent(b)+(c?"; expires="+c:"")+(d?"; path="+d:"")+(e?"; domain="+e:"")+(f?"; secure":"")},remove:function(a,b){this.set(a,"",-1e3,b)}},ace.storage={get:function(a){return window.localStorage.getItem(a)},set:function(a,b){window.localStorage.setItem(a,b)},remove:function(a){window.localStorage.removeItem(a)}},ace.sizeof=function(a){var b=0;for(var c in a)a.hasOwnProperty(c)&&b++;return b},ace.hasClass=function(a,b){return(" "+a.className+" ").indexOf(" "+b+" ")>-1},ace.addClass=function(a,b){for(var c=b.split(/\s+/),d=0;d<c.length;d++)if(c[d].length>0&&!ace.hasClass(a,c[d])){var e=a.className;a.className=e+(e.length?" ":"")+c[d]}},ace.removeClass=function(a,b){for(var c=b.split(/\s+/),d=0;d<c.length;d++)c[d].length>0&&ace.replaceClass(a,c[d]);ace.replaceClass(a,b)},ace.replaceClass=function(a,b,c){var d=new RegExp("(^|\\s)"+b+"(\\s|$)","i");a.className=a.className.replace(d,function(a,b,d){return c?b+c+d:" "}).replace(/^\s+|\s+$/g,"")},ace.toggleClass=function(a,b){ace.hasClass(a,b)?ace.removeClass(a,b):ace.addClass(a,b)},ace.isHTMlElement=function(a){return window.HTMLElement?a instanceof HTMLElement:"nodeType"in a?1==a.nodeType:!1},ace.data=new ace.data_storage(ace.config.storage_method)}();
;/*!
 * Ace v1.4.0
 */
if("undefined"==typeof jQuery)throw new Error("Ace's JavaScript requires jQuery");!function(a){"ace"in window||(window.ace={}),"helper"in window.ace||(window.ace.helper={}),"vars"in window.ace||(window.ace.vars={}),window.ace.vars.icon=" ace-icon ",window.ace.vars[".icon"]=".ace-icon",ace.vars.touch="ontouchstart"in window;var b=navigator.userAgent;ace.vars.webkit=!!b.match(/AppleWebKit/i),ace.vars.safari=!!b.match(/Safari/i)&&!b.match(/Chrome/i),ace.vars.android=ace.vars.safari&&!!b.match(/Android/i),ace.vars.ios_safari=!!b.match(/OS ([4-9])(_\d)+ like Mac OS X/i)&&!b.match(/CriOS/i),ace.vars.ie=window.navigator.msPointerEnabled||document.all&&document.querySelector,ace.vars.old_ie=document.all&&!document.addEventListener,ace.vars.very_old_ie=document.all&&!document.querySelector,ace.vars.firefox="MozAppearance"in document.documentElement.style,ace.vars.non_auto_fixed=ace.vars.android||ace.vars.ios_safari,ace.click_event=ace.vars.touch&&jQuery.fn.tap?"tap":"click"}(),function(a,b){a.unCamelCase=function(a){return a.replace(/([a-z])([A-Z])/g,function(a,b,c){return b+"-"+c.toLowerCase()})},a.strToVal=function(a){var b=a.match(/^(?:(true)|(false)|(null)|(\-?[\d]+(?:\.[\d]+)?)|(\[.*\]|\{.*\}))$/i),c=a;if(b)if(b[1])c=!0;else if(b[2])c=!1;else if(b[3])c=null;else if(b[4])c=parseFloat(a);else if(b[5])try{c=JSON.parse(a)}catch(d){}return c},a.getAttrSettings=function(b,c,d){if(b){var e=c instanceof Array?1:2,d=d?d.replace(/([^\-])$/,"$1-"):"";d="data-"+d;var f={};for(var g in c)if(c.hasOwnProperty(g)){var h,i=1==e?c[g]:g,j=a.unCamelCase(i.replace(/[^A-Za-z0-9]{1,}/g,"-")).toLowerCase();if(!(h=b.getAttribute(d+j)))continue;f[i]=a.strToVal(h)}return f}},a.scrollTop=function(){return document.scrollTop||document.documentElement.scrollTop||document.body.scrollTop},a.winHeight=function(){return window.innerHeight||document.documentElement.clientHeight},a.redraw=function(a,b){if(a){var c=a.style.display;a.style.display="none",a.offsetHeight,b!==!0?a.style.display=c:setTimeout(function(){a.style.display=c},10)}}}(ace.helper),jQuery(function(a){try{ace.demo.init()}catch(b){}}),function(a,b){ace.demo={functions:{},init:function(a){var a=!!a&&!0;if("undefined"==typeof requirejs||a)for(var b in ace.demo.functions)ace.demo.functions.hasOwnProperty(b)&&ace.demo.functions[b]()}},ace.demo.functions.basics=function(){ace.vars.non_auto_fixed&&a("body").addClass("mob-safari"),ace.vars.transition=ace.vars.animation||!!a.support.transition},ace.demo.functions.enableSidebar=function(){var b=a(".sidebar");a.fn.ace_sidebar&&b.ace_sidebar(),a.fn.ace_sidebar_scroll&&b.ace_sidebar_scroll({include_toggle:ace.vars.safari||ace.vars.ios_safari}),a.fn.ace_sidebar_hover&&b.ace_sidebar_hover({sub_hover_delay:750,sub_scroll_style:"no-track scroll-thin scroll-margin scroll-visible"})},ace.demo.functions.enableDemoAjax=function(){if(a.fn.ace_ajax){window.Pace&&(window.paceOptions={ajax:!0,document:!0,eventLag:!1});var b={close_active:!0,close_mobile_menu:"#sidebar",close_dropdowns:!0,default_url:"page/index",content_url:function(a){if(!a.match(/^page\//))return!1;var b=document.location.pathname;return b.match(/(\/ajax\/)(index\.html)?/)?b.replace(/(\/ajax\/)(index\.html)?/,"/ajax/content/"+a.replace(/^page\//,"")+".html"):b+"?"+a.replace(/\//,"=")}};b.loading_overlay="body",a("[data-ajax-content=true]").ace_ajax(b),a(window).on("error.ace_ajax",function(){a("[data-ajax-content=true]").each(function(){var b=a(this);b.ace_ajax("working")&&(window.Pace&&Pace.running&&Pace.stop(),b.ace_ajax("stopLoading",!0))})})}},ace.demo.functions.handleScrollbars=function(){var b=!!a.fn.ace_scroll;b&&a(".dropdown-content").ace_scroll({reset:!1,mouseWheelLock:!0}),b&&!ace.vars.old_ie&&(a(window).on("resize.reset_scroll",function(){a(".ace-scroll:not(.scroll-disabled)").not(":hidden").ace_scroll("reset")}),b&&a(document).on("settings.ace.reset_scroll",function(b,c){"sidebar_collapsed"==c&&a(".ace-scroll:not(.scroll-disabled)").not(":hidden").ace_scroll("reset")}))},ace.demo.functions.dropdownAutoPos=function(){a(document).on("click.dropdown.pos",'.dropdown-toggle[data-position="auto"]',function(){var b=a(this).offset(),c=a(this.parentNode);parseInt(b.top+a(this).height())+50>ace.helper.scrollTop()+ace.helper.winHeight()-c.find(".dropdown-menu").eq(0).height()?c.addClass("dropup"):c.removeClass("dropup")})},ace.demo.functions.navbarHelpers=function(){a('.ace-nav [class*="icon-animated-"]').closest("a").one("click",function(){var b=a(this).find('[class*="icon-animated-"]').eq(0),c=b.attr("class").match(/icon\-animated\-([\d\w]+)/);b.removeClass(c[0])}),a(document).on("click",".dropdown-navbar .nav-tabs",function(b){b.stopPropagation();var c;b.target;(c=a(b.target).closest("[data-toggle=tab]"))&&c.length>0&&(c.tab("show"),b.preventDefault(),a(window).triggerHandler("resize.navbar.dropdown"))})},ace.demo.functions.sidebarTooltips=function(){a(".sidebar .nav-list .badge[title],.sidebar .nav-list .badge[title]").each(function(){var b=a(this).attr("class").match(/tooltip\-(?:\w+)/);b=b?b[0]:"tooltip-error",a(this).tooltip({placement:function(b,c){var d=a(c).offset();return parseInt(d.left)<parseInt(document.body.scrollWidth/2)?"right":"left"},container:"body",template:'<div class="tooltip '+b+'"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'})})},ace.demo.functions.someBrowserFix=function(){if(ace.vars.webkit){var b=a(".ace-nav").get(0);b&&a(window).on("resize.webkit_fix",function(){ace.helper.redraw(b)})}ace.vars.ios_safari&&a(document).on("ace.settings.ios_fix",function(b,c,d){"navbar_fixed"==c&&(a(document).off("focus.ios_fix blur.ios_fix","input,textarea,.wysiwyg-editor"),1==d&&a(document).on("focus.ios_fix","input,textarea,.wysiwyg-editor",function(){a(window).on("scroll.ios_fix",function(){var b=a("#navbar").get(0);b&&ace.helper.redraw(b)})}).on("blur.ios_fix","input,textarea,.wysiwyg-editor",function(){a(window).off("scroll.ios_fix")}))}).triggerHandler("ace.settings.ios_fix",["navbar_fixed","fixed"==a("#navbar").css("position")])},ace.demo.functions.bsCollapseToggle=function(){a(document).on("hide.bs.collapse show.bs.collapse",function(b){var c=b.target.getAttribute("id"),d=a('a[href*="#'+c+'"]');0==d.length&&(d=a('a[data-target*="#'+c+'"]')),0!=d.length&&d.find(ace.vars[".icon"]).each(function(){var c,d=a(this),e=null,f=null;return(e=d.attr("data-icon-show"))?f=d.attr("data-icon-hide"):(c=d.attr("class").match(/fa\-(.*)\-(up|down)/))&&(e="fa-"+c[1]+"-down",f="fa-"+c[1]+"-up"),e?("show"==b.type?d.removeClass(e).addClass(f):d.removeClass(f).addClass(e),!1):void 0})})},ace.demo.functions.smallDeviceDropdowns=function(){function b(){var b=a(this).find("> .dropdown-menu");if("fixed"==b.css("position")){var d=parseInt(a(window).width()),e=d>320?60:d>240?40:30,f=parseInt(d)-e,g=parseInt(a(window).height())-30,h=parseInt(Math.min(f,320));b.css("width",h);var i=!1,j=0,k=b.find(".tab-pane.active .dropdown-content.ace-scroll");0==k.length?k=b.find(".dropdown-content.ace-scroll"):i=!0;var l=k.closest(".dropdown-menu"),m=b[0].scrollHeight;if(1==k.length){var n=k.find(".scroll-content")[0];n&&(m=n.scrollHeight),j+=l.find(".dropdown-header").outerHeight(),j+=l.find(".dropdown-footer").outerHeight();var o=l.closest(".tab-content");0!=o.length&&(j+=o.siblings(".nav-tabs").eq(0).height())}var p=parseInt(Math.min(g,480,m+j)),q=parseInt(Math.abs((f+e-h)/2)),r=parseInt(Math.abs((g+30-p)/2)),s=parseInt(b.css("z-index"))||0;if(b.css({height:p,left:q,right:"auto",top:r-(i?3:1)}),1==k.length&&(ace.vars.touch?k.ace_scroll("disable").css("max-height",p-j).addClass("overflow-scroll"):k.ace_scroll("update",{size:p-j}).ace_scroll("enable").ace_scroll("reset")),b.css("height",p+(i?7:2)),b.hasClass("user-menu")){b.css("height","");var t=a(this).find(".user-info");1==t.length&&"fixed"==t.css("position")?t.css({left:q,right:"auto",top:r,width:h-2,"max-width":h-2,"z-index":s+1}):t.css({left:"",right:"",top:"",width:"","max-width":"","z-index":""})}a(this).closest(".navbar.navbar-fixed-top").css("z-index",s)}else 0!=b.length&&c.call(this,b)}function c(b){if(b=b||a(this).find("> .dropdown-menu"),b.length>0&&(b.css({width:"",height:"",left:"",right:"",top:""}).find(".dropdown-content").each(function(){ace.vars.touch&&a(this).css("max-height","").removeClass("overflow-scroll");var b=parseInt(a(this).attr("data-size")||0)||a.fn.ace_scroll.defaults.size;a(this).ace_scroll("update",{size:b}).ace_scroll("enable").ace_scroll("reset")}),b.hasClass("user-menu"))){a(this).find(".user-info").css({left:"",right:"",top:"",width:"","max-width":"","z-index":""})}a(this).closest(".navbar").css("z-index","")}ace.vars.old_ie||a(document).on("shown.bs.dropdown.navbar",".ace-nav > li.dropdown-modal",function(c){b.call(this);var d=this;a(window).on("resize.navbar.dropdown",function(){b.call(d)})}).on("hidden.bs.dropdown.navbar",".ace-nav > li.dropdown-modal",function(b){a(window).off("resize.navbar.dropdown"),c.call(this)})}}(jQuery),function(a,b){var c=a(".btn-scroll-up");if(c.length>0){var d=!1;a(window).on("scroll.scroll_btn",function(){var a=ace.helper.scrollTop(),b=ace.helper.winHeight(),e=document.body.scrollHeight;a>parseInt(b/4)||a>0&&e>=b&&b+a>=e-1?d||(c.addClass("display"),d=!0):d&&(c.removeClass("display"),d=!1)}).triggerHandler("scroll.scroll_btn"),c.on(ace.click_event,function(){var b=Math.min(500,Math.max(100,parseInt(ace.helper.scrollTop()/3)));return a("html,body").animate({scrollTop:0},b),!1})}}(window.jQuery),function(a,b){function c(b,c){function e(b){var c="",d=a(".breadcrumb");if(d.length>0&&d.is(":visible")){d.find("> li:not(:first-child)").remove();var e=0;b.parents(".nav li").each(function(){var b=a(this).find("> a"),f=b.clone();f.find("i,.fa,.glyphicon,.ace-icon,.menu-icon,.badge,.label").remove();var g=f.text();f.remove();var h=b.attr("href");if(0==e){var i=a('<li class="active"></li>').appendTo(d);i.text(g),c=g}else{var i=a("<li><a /></li>").insertAfter(d.find("> li:first-child"));i.find("a").attr("href",h).text(g)}e++})}return c}function f(b){var c=g.find(".ajax-append-title");if(c.length>0)document.title=c.text(),c.remove();else if(b.length>0){var d=a.trim(String(document.title).replace(/^(.*)[\-]/,""));d&&(d=" - "+d),b=a.trim(b)+d}}var g=a(b),h=this;g.attr("data-ajax-content","true");var i=ace.helper.getAttrSettings(b,a.fn.ace_ajax.defaults);this.settings=a.extend({},a.fn.ace_ajax.defaults,c,i);var j=!1,k=a();this.force_reload=!1,this.loadUrl=function(a,b,c){var d=!1;a=a.replace(/^(\#\!)?\#/,""),this.force_reload=b===!1,"function"==typeof this.settings.content_url&&(d=this.settings.content_url(a)),"string"==typeof d&&this.getUrl(d,a,c)},this.loadAddr=function(a,b,c){this.force_reload=c===!1,this.getUrl(a,b,!1)},this.reload=function(){var b=a.trim(window.location.hash);!b&&this.settings.default_url&&(b=this.settings.default_url),this.loadUrl(b,!1)},this.post=function(b,c,d,e){var b=b||a.trim(location.href.replace(location.hash,""));if(b){var c=c||{},d=d||!1;this.getUrl(b,null,!1,"POST",c,d,e)}},this.getUrl=function(b,c,d,i,l,m,n){if(!j){var o,i=i||"GET",m="GET"==i||"POST"==i&&1==m,l=l||null;if(g.trigger(o=a.Event("ajaxloadstart"),{url:b,hash:c,method:i,data:l}),!o.isDefaultPrevented()){h.startLoading();var p="GET"==i?{url:b,cache:!this.force_reload}:{url:b,method:"POST",data:l};"POST"==i&&"object"==typeof n&&(p=a.extend({},p,n)),a.ajax(p).error(function(){g.trigger("ajaxloaderror",{url:b,hash:c,method:i,data:l}),h.stopLoading(!0)}).done(function(j){if(g.trigger("ajaxloaddone",{url:b,hash:c,method:i,data:l}),"POST"==i){var n;g.trigger(n=a.Event("ajaxpostdone",{url:b,data:l,result:j})),n.isDefaultPrevented()&&(m=!1)}var o=null,p="";if("function"==typeof h.settings.update_active)o=h.settings.update_active.call(null,c,b,i,m);else if(h.settings.update_active===!0&&c&&(o=a('a[data-url="'+c+'"]'),o.length>0)){var q=o.closest(".nav");if(q.length>0){q.find(".active").each(function(){var b="active";(a(this).hasClass("hover")||h.settings.close_active)&&(b+=" open"),a(this).removeClass(b),h.settings.close_active&&a(this).find(" > .submenu").css("display","")});o.closest("li").addClass("active").parents(".nav li").addClass("active open");q.closest(".sidebar[data-sidebar-scroll=true]").each(function(){var b=a(this);b.ace_sidebar_scroll("reset"),1==d&&b.ace_sidebar_scroll("scroll_to_active")})}}"function"==typeof h.settings.update_breadcrumbs?p=h.settings.update_breadcrumbs.call(null,c,b,o,i,m):h.settings.update_breadcrumbs===!0&&null!=o&&o.length>0&&(p=e(o)),k.addClass("content-loaded").detach(),m&&(j=String(j).replace(/<(title|link)([\s\>])/gi,'<div class="hidden ajax-append-$1"$2').replace(/<\/(title|link)\>/gi,"</div>"),g.empty().html(j)),a(h.settings.loading_overlay||g).append(k),m&&setTimeout(function(){a("head").find("link.ace-ajax-stylesheet").remove();for(var b=["link.ace-main-stylesheet","link#main-ace-style",'link[href*="/ace.min.css"]','link[href*="/ace.css"]'],c=[],d=0;d<b.length&&(c=a("head").find(b[d]).first(),!(c.length>0));d++);g.find(".ajax-append-link").each(function(b){var d=a(this);if(d.attr("href")){var e=jQuery("<link />",{type:"text/css",rel:"stylesheet","class":"ace-ajax-stylesheet"});c.length>0?e.insertBefore(c):e.appendTo("head"),e.attr("href",d.attr("href"))}d.remove()})},10),"function"==typeof h.settings.update_title?h.settings.update_title.call(null,c,b,p,i,m):h.settings.update_title===!0&&"GET"==i&&f(p),!d&&m&&a("html,body").animate({scrollTop:0},250),g.trigger("ajaxloadcomplete",{url:b,hash:c,method:i,data:l});var r=/\.(?:\s*)ace(?:_a|A)jax(?:\s*)\((?:\s*)(?:\'|\")loadScripts(?:\'|\")/;j.match(r)?h.stopLoading():h.stopLoading(!0)})}}};var l=!1,m=null;this.startLoading=function(){j||(j=!0,this.settings.loading_overlay||"static"!=g.css("position")||(g.css("position","relative"),l=!0),k.remove(),k=a('<div class="ajax-loading-overlay"><i class="ajax-loading-icon '+(this.settings.loading_icon||"")+'"></i> '+this.settings.loading_text+"</div>"),"body"==this.settings.loading_overlay?a("body").append(k.addClass("ajax-overlay-body")):this.settings.loading_overlay?a(this.settings.loading_overlay).append(k):g.append(k),this.settings.max_load_wait!==!1&&(m=setTimeout(function(){if(m=null,j){var b;g.trigger(b=a.Event("ajaxloadlong")),b.isDefaultPrevented()||h.stopLoading(!0)}},1e3*this.settings.max_load_wait)))},this.stopLoading=function(a){a===!0?(j=!1,k.remove(),l&&(g.css("position",""),l=!1),null!=m&&(clearTimeout(m),m=null)):(k.addClass("almost-loaded"),g.one("ajaxscriptsloaded.inner_call",function(){h.stopLoading(!0)}))},this.working=function(){return j},this.loadScripts=function(b,c){var b=b||[];a.ajaxPrefilter("script",function(a){a.cache=!0}),setTimeout(function(){function e(){"function"==typeof c&&c(),a('.btn-group[data-toggle="buttons"] > .btn').button(),g.trigger("ajaxscriptsloaded")}function f(a){a+=1,a<b.length?h(a):e()}function h(c){if(c=c||0,!b[c])return f(c);var g="js-"+b[c].replace(/[^\w\d\-]/g,"-").replace(/\-\-/g,"-");d[g]!==!0?a.getScript(b[c]).done(function(){d[g]=!0}).complete(function(){k++,k>=i&&j?e():f(c)}):f(c)}for(var i=0,k=0,l=0;l<b.length;l++)b[l]&&!function(){var a="js-"+b[l].replace(/[^\w\d\-]/g,"-").replace(/\-\-/g,"-");d[a]!==!0&&i++}();i>0?h():e()},10)},a(window).off("hashchange.ace_ajax").on("hashchange.ace_ajax",function(b,c){var d=a.trim(window.location.hash);if(d&&0!=d.length){if(h.settings.close_mobile_menu)try{a(h.settings.close_mobile_menu).ace_sidebar("mobileHide")}catch(b){}h.settings.close_dropdowns&&a(".dropdown.open .dropdown-toggle").dropdown("toggle"),h.loadUrl(d,null,c)}}).trigger("hashchange.ace_ajax",[!0]);var n=a.trim(window.location.hash);!n&&this.settings.default_url&&(window.location.hash=this.settings.default_url)}var d={};a.fn.aceAjax=a.fn.ace_ajax=function(d,e,f,g,h){var i,j=this.each(function(){var j=a(this),k=j.data("ace_ajax"),l="object"==typeof d&&d;k||j.data("ace_ajax",k=new c(this,l)),"string"==typeof d&&"function"==typeof k[d]&&(i=h!==b?k[d](e,f,g,h):g!==b?k[d](e,f,g):f!==b?k[d](e,f):k[d](e))});return i===b?j:i},a.fn.aceAjax.defaults=a.fn.ace_ajax.defaults={content_url:!1,default_url:!1,loading_icon:"fa fa-spin fa-spinner fa-2x orange",loading_text:"",loading_overlay:null,update_breadcrumbs:!0,update_title:!0,update_active:!0,close_active:!1,max_load_wait:!1,close_mobile_menu:!1,close_dropdowns:!1}}(window.jQuery),function(a,b){if(ace.vars.touch){var c="touchstart MSPointerDown pointerdown",d="touchend touchcancel MSPointerUp MSPointerCancel pointerup pointercancel",e="touchmove MSPointerMove MSPointerHover pointermove";a.event.special.ace_drag={setup:function(){var f=0,g=a(this);g.on(c,function(c){function h(a){if(k){var b=a.originalEvent.touches?a.originalEvent.touches[0]:a;if(i={coords:[b.pageX,b.pageY]},k&&i&&(m=0,n=0,l=Math.abs(n=k.coords[1]-i.coords[1])>f&&Math.abs(m=k.coords[0]-i.coords[0])<=Math.abs(n)?n>0?"up":"down":Math.abs(m=k.coords[0]-i.coords[0])>f&&Math.abs(n)<=Math.abs(m)?m>0?"left":"right":!1,l!==!1)){var c={cancel:!1};k.origin.trigger({type:"ace_drag",direction:l,dx:m,dy:n,retval:c}),0==c.cancel&&a.preventDefault()}k.coords[0]=i.coords[0],k.coords[1]=i.coords[1]}}var i,j=c.originalEvent.touches?c.originalEvent.touches[0]:c,k={coords:[j.pageX,j.pageY],origin:a(c.target)},l=!1,m=0,n=0;g.on(e,h).one(d,function(a){g.off(e,h),k=i=b})})}}}}(window.jQuery),function(a,b){function c(b,c){function e(){this.mobile_view=this.mobile_style<4&&this.is_mobile_view(),this.collapsible=!this.mobile_view&&this.is_collapsible(),this.minimized=!this.collapsible&&this.$sidebar.hasClass(k)||3==this.mobile_style&&this.mobile_view&&this.$sidebar.hasClass(l),this.horizontal=!(this.mobile_view||this.collapsible)&&this.$sidebar.hasClass(n)}var f=this;this.$sidebar=a(b),this.$sidebar.attr("data-sidebar","true"),this.$sidebar.attr("id")||this.$sidebar.attr("id","id-sidebar-"+ ++d);var g=ace.helper.getAttrSettings(b,a.fn.ace_sidebar.defaults,"sidebar-");this.settings=a.extend({},a.fn.ace_sidebar.defaults,c,g),this.minimized=!1,this.collapsible=!1,this.horizontal=!1,this.mobile_view=!1,this.vars=function(){return{minimized:this.minimized,collapsible:this.collapsible,horizontal:this.horizontal,mobile_view:this.mobile_view}},this.get=function(a){return this.hasOwnProperty(a)?this[a]:void 0},this.set=function(a,b){this.hasOwnProperty(a)&&(this[a]=b)},this.ref=function(){return this};var h=function(b,c){var d,e,f=a(this).find(ace.vars[".icon"]);if(f.length>0){d=f.attr("data-icon1"),e=f.attr("data-icon2"),"undefined"!=typeof b?b?f.removeClass(d).addClass(e):f.removeClass(e).addClass(d):f.toggleClass(d).toggleClass(e);try{c!==!1&&ace.settings.saveState(f.get(0))}catch(g){}}},i=function(){var b=f.$sidebar.find(".sidebar-collapse");return 0==b.length&&(b=a('.sidebar-collapse[data-target="#'+(f.$sidebar.attr("id")||"")+'"]')),b=0!=b.length?b[0]:null};this.toggleMenu=function(c,d){if(this.collapsible)return!1;this.minimized=!this.minimized;var d=!(c===!1||d===!1);this.minimized?this.$sidebar.addClass("menu-min"):this.$sidebar.removeClass("menu-min");try{d&&ace.settings.saveState(b,"class","menu-min",this.minimized)}catch(e){}return c||(c=i()),c&&h.call(c,this.minimized,d),ace.vars.old_ie&&ace.helper.redraw(b),a(document).trigger("settings.ace",["sidebar_collapsed",this.minimized,b,d]),this.minimized?this.$sidebar.trigger(a.Event("collapse.ace.sidebar")):this.$sidebar.trigger(a.Event("expand.ace.sidebar")),!0},this.collapse=function(a,b){this.collapsible||(this.minimized=!1,this.toggleMenu(a,b))},this.expand=function(a,b){this.collapsible||(this.minimized=!0,this.toggleMenu(a,b))},this.showResponsive=function(){this.$sidebar.removeClass(l).removeClass(m)},this.toggleResponsive=function(b,c){if(this.mobile_view&&3==this.mobile_style){if(this.$sidebar.hasClass("menu-min")){this.$sidebar.removeClass("menu-min");var d=i();d&&h.call(d)}var c="boolean"==typeof c?c:"boolean"==typeof b?b:this.$sidebar.hasClass(l);if(c?this.$sidebar.addClass(m).removeClass(l):this.$sidebar.removeClass(m).addClass(l),this.minimized=!c,b&&"object"==typeof b||(b=this.$sidebar.find(".sidebar-expand"),0==b.length&&(b=a('.sidebar-expand[data-target="#'+(this.$sidebar.attr("id")||"")+'"]')),b=0!=b.length?b[0]:null),b){var e,g,j=a(b).find(ace.vars[".icon"]);j.length>0&&(e=j.attr("data-icon1"),g=j.attr("data-icon2"),c?j.removeClass(e).addClass(g):j.removeClass(g).addClass(e))}c?f.$sidebar.trigger(a.Event("mobileShow.ace.sidebar")):f.$sidebar.trigger(a.Event("mobileHide.ace.sidebar")),a(document).triggerHandler("settings.ace",["sidebar_collapsed",this.minimized])}},this.is_collapsible=function(){var b;return this.$sidebar.hasClass("navbar-collapse")&&null!=(b=a('.navbar-toggle[data-target="#'+(this.$sidebar.attr("id")||"")+'"]').get(0))&&b.scrollHeight>0},this.is_mobile_view=function(){var b;return null!=(b=a('.menu-toggler[data-target="#'+(this.$sidebar.attr("id")||"")+'"]').get(0))&&b.scrollHeight>0};var j=!1;this.show=function(b,c,d){if(d=d!==!1,d&&j)return!1;var e,f=a(b);if(f.trigger(e=a.Event("show.ace.submenu")),e.isDefaultPrevented())return!1;d&&(j=!0),c="undefined"!=typeof c?c:this.settings.duration,f.css({height:0,overflow:"hidden",display:"block"}).removeClass("nav-hide").addClass("nav-show").parent().addClass("open"),b.scrollTop=0;var g=function(b,c){b&&b.stopPropagation(),f.css({"transition-property":"","transition-duration":"",overflow:"",height:""}),c!==!1&&f.trigger(a.Event("shown.ace.submenu")),d&&(j=!1)},h=b.scrollHeight;return 0!=c&&0!=h&&a.support.transition.end?(f.css({height:h,"transition-property":"height","transition-duration":c/1e3+"s"}).one(a.support.transition.end,g),ace.vars.android&&setTimeout(function(){g(null,!1),ace.helper.redraw(b)},c+20)):g(),!0},this.hide=function(b,c,d){if(d=d!==!1,d&&j)return!1;var e,f=a(b);if(f.trigger(e=a.Event("hide.ace.submenu")),e.isDefaultPrevented())return!1;d&&(j=!0),c="undefined"!=typeof c?c:this.settings.duration;var g=b.scrollHeight;f.css({height:g,overflow:"hidden",display:"block"}).parent().removeClass("open"),b.offsetHeight;var h=function(b,c){b&&b.stopPropagation(),f.css({display:"none",overflow:"",height:"","transition-property":"","transition-duration":""}).removeClass("nav-show").addClass("nav-hide"),c!==!1&&f.trigger(a.Event("hidden.ace.submenu")),d&&(j=!1)};return 0!=c&&0!=g&&a.support.transition.end?(f.css({height:0,"transition-property":"height","transition-duration":c/1e3+"s"}).one(a.support.transition.end,h),ace.vars.android&&setTimeout(function(){h(null,!1),ace.helper.redraw(b)},c+20)):h(),!0},this.toggle=function(a,b){if(b=b||f.settings.duration,0==a.scrollHeight){if(this.show(a,b))return 1}else if(this.hide(a,b))return-1;return 0},this.mobileToggle=function(a){this.mobile_view?1==this.mobile_style||2==this.mobile_style?this.toggleMobile("object"==typeof a?a:null,"boolean"==typeof a?a:null):3==this.mobile_style&&this.toggleResponsive("object"==typeof a?a:null,"boolean"==typeof a?a:null):this.collapsible&&this.toggleCollapsible("object"==typeof a?a:null,"boolean"==typeof a?a:null)},this.mobileShow=function(){this.mobileToggle(!0)},this.mobileHide=function(){this.mobileToggle(!1)},this.toggleMobile=function(b,c){if(1==this.mobile_style||2==this.mobile_style){var c="boolean"==typeof c?c:"boolean"==typeof b?b:!this.$sidebar.hasClass("display");b&&"object"==typeof b||(b=a('.menu-toggler[data-target="#'+(this.$sidebar.attr("id")||"")+'"]'),b=0!=b.length?b[0]:null),c?(this.$sidebar.addClass("display"),b&&a(b).addClass("display")):(this.$sidebar.removeClass("display"),b&&a(b).removeClass("display")),c?f.$sidebar.trigger(a.Event("mobileShow.ace.sidebar")):f.$sidebar.trigger(a.Event("mobileHide.ace.sidebar"))}},this.toggleCollapsible=function(b,c){if(4==this.mobile_style){var c="boolean"==typeof c?c:"boolean"==typeof b?b:!this.$sidebar.hasClass("in");c?this.$sidebar.collapse("show"):(this.$sidebar.removeClass("display"),this.$sidebar.collapse("hide")),c?f.$sidebar.trigger(a.Event("mobileShow.ace.sidebar")):f.$sidebar.trigger(a.Event("mobileHide.ace.sidebar"))}};var k="menu-min",l="responsive-min",m="responsive-max",n="h-sidebar",o=function(){this.mobile_style=1,this.$sidebar.hasClass("responsive")&&!a('.menu-toggler[data-target="#'+this.$sidebar.attr("id")+'"]').hasClass("navbar-toggle")?this.mobile_style=2:this.$sidebar.hasClass(l)?this.mobile_style=3:this.$sidebar.hasClass("navbar-collapse")&&(this.mobile_style=4)};o.call(f),a(window).on("resize.sidebar.vars",function(){e.call(f)}).triggerHandler("resize.sidebar.vars"),this.$sidebar.on(ace.click_event+".ace.submenu",".nav-list",function(b){var c=this,d=a(b.target).closest("a");if(d&&0!=d.length){var e=f.minimized&&!f.collapsible;if(d.hasClass("dropdown-toggle")){b.preventDefault();var g=d.siblings(".submenu").get(0);if(!g)return!1;var h=a(g),i=0,j=g.parentNode.parentNode;if(e&&j==c||h.parent().hasClass("hover")&&"absolute"==h.css("position")&&!f.collapsible)return!1;var k=0==g.scrollHeight;return k&&f.settings.hide_open_subs&&a(j).find("> .open > .submenu").each(function(){this==g||a(this.parentNode).hasClass("active")||(i-=this.scrollHeight,f.hide(this,f.settings.duration,!1))}),k?(f.show(g,f.settings.duration),0!=i&&(i+=g.scrollHeight)):(f.hide(g,f.settings.duration),i-=g.scrollHeight),0!=i&&("true"!=f.$sidebar.attr("data-sidebar-scroll")||f.minimized||f.$sidebar.ace_sidebar_scroll("prehide",i)),!1}if("tap"==ace.click_event&&e&&d.get(0).parentNode.parentNode==c){var l=d.find(".menu-text").get(0);if(null!=l&&b.target!=l&&!a.contains(l,b.target))return b.preventDefault(),!1}if(ace.vars.ios_safari&&"false"!==d.attr("data-link"))return document.location=d.attr("href"),b.preventDefault(),!1}})}var d=0;a(document).on(ace.click_event+".ace.menu",".menu-toggler",function(b){var c=a(this),d=a(c.attr("data-target"));if(0!=d.length){b.preventDefault(),d.ace_sidebar("mobileToggle",this);var e=ace.click_event+".ace.autohide",f="true"===d.attr("data-auto-hide");return c.hasClass("display")?(f&&a(document).on(e,function(b){return d.get(0)==b.target||a.contains(d.get(0),b.target)?void b.stopPropagation():(d.ace_sidebar("mobileToggle",this,!1),void a(document).off(e))}),"true"==d.attr("data-sidebar-scroll")&&d.ace_sidebar_scroll("reset")):f&&a(document).off(e),!1}}).on(ace.click_event+".ace.menu",".sidebar-collapse",function(b){var c=a(this).attr("data-target"),d=null;c&&(d=a(c)),null!=d&&0!=d.length||(d=a(this).closest(".sidebar")),0!=d.length&&(b.preventDefault(),d.ace_sidebar("toggleMenu",this))}).on(ace.click_event+".ace.menu",".sidebar-expand",function(b){var c=a(this).attr("data-target"),d=null;if(c&&(d=a(c)),null!=d&&0!=d.length||(d=a(this).closest(".sidebar")),0!=d.length){var e=this;b.preventDefault(),d.ace_sidebar("toggleResponsive",this);var f=ace.click_event+".ace.autohide";"true"===d.attr("data-auto-hide")&&(d.hasClass(responsive_max_class)?a(document).on(f,function(b){return d.get(0)==b.target||a.contains(d.get(0),b.target)?void b.stopPropagation():(d.ace_sidebar("toggleResponsive",e),void a(document).off(f))}):a(document).off(f))}}),a.fn.ace_sidebar=function(d,e,f){var g,h=this.each(function(){var h=a(this),i=h.data("ace_sidebar"),j="object"==typeof d&&d;i||h.data("ace_sidebar",i=new c(this,j)),"string"==typeof d&&"function"==typeof i[d]&&(g=e instanceof Array?i[d].apply(i,e):f!==b?i[d](e,f):i[d](e))});return g===b?h:g},a.fn.ace_sidebar.defaults={duration:300,hide_open_subs:!0}}(window.jQuery),function(a,b){function c(b,c){var f,g,h,i,j=this,k=a(window),l=a(b);if(f=l.find(".nav-list"),g=f.get(0)){var m=ace.helper.getAttrSettings(b,a.fn.ace_sidebar_scroll.defaults);this.settings=a.extend({},a.fn.ace_sidebar_scroll.defaults,c,m);var n=j.settings.scroll_to_active,o=l.ace_sidebar("ref");l.attr("data-sidebar-scroll","true");var p=null,q=null,r=null,s=null,t=null,u=null;this.is_scrolling=!1;var v=!1;this.sidebar_fixed=e(b,"fixed");var w,x,y=function(){var a=f.parent().offset();return j.sidebar_fixed&&(a.top-=ace.helper.scrollTop()),k.innerHeight()-a.top-(j.settings.include_toggle?0:h.outerHeight())+1},z=function(){return g.clientHeight},A=function(b){if(!v&&j.sidebar_fixed&&(f=l.find(".nav-list"),h=l.find(".sidebar-toggle").eq(0),i=l.find(".sidebar-shortcuts").eq(0),g=f.get(0))){f.wrap('<div class="nav-wrap-up pos-rel" />'),f.after("<div><div></div></div>"),f.wrap('<div class="nav-wrap" />'),j.settings.include_toggle||h.css({"z-index":1}),j.settings.include_shortcuts||i.css({"z-index":99}),p=f.parent().next().ace_scroll({size:y(),mouseWheelLock:!0,hoverReset:!1,dragEvent:!0,styleClass:j.settings.scroll_style,touchDrag:!1}).closest(".ace-scroll").addClass("nav-scroll"),u=p.data("ace_scroll"),q=p.find(".scroll-content").eq(0),r=q.find(" > div").eq(0),t=a(u.get_track()),s=t.find(".scroll-bar").eq(0),j.settings.include_shortcuts&&0!=i.length&&(f.parent().prepend(i).wrapInner("<div />"),f=f.parent()),j.settings.include_toggle&&0!=h.length&&(f.append(h),f.closest(".nav-wrap").addClass("nav-wrap-t")),f.css({position:"relative"}),1==j.settings.scroll_outside&&p.addClass("scrollout"),g=f.get(0),g.style.top=0,q.on("scroll.nav",function(){g.style.top=-1*this.scrollTop+"px"}),f.on(a.event.special.mousewheel?"mousewheel.ace_scroll":"mousewheel.ace_scroll DOMMouseScroll.ace_scroll",function(a){return j.is_scrolling&&u.is_active()?p.trigger(a):!j.settings.lock_anyway}),f.on("mouseenter.ace_scroll",function(){t.addClass("scroll-hover")}).on("mouseleave.ace_scroll",function(){t.removeClass("scroll-hover")});var c=q.get(0);if(f.on("ace_drag.nav",function(b){if(!j.is_scrolling||!u.is_active())return void(b.retval.cancel=!0);if(0!=a(b.target).closest(".can-scroll").length)return void(b.retval.cancel=!0);if("up"==b.direction||"down"==b.direction){u.move_bar(!0);var d=b.dy;d=parseInt(Math.min(w,d)),Math.abs(d)>2&&(d=2*d),0!=d&&(c.scrollTop=c.scrollTop+d,g.style.top=-1*c.scrollTop+"px")}}),j.settings.smooth_scroll&&f.on("touchstart.nav MSPointerDown.nav pointerdown.nav",function(a){f.css("transition-property","none"),s.css("transition-property","none")}).on("touchend.nav touchcancel.nav MSPointerUp.nav MSPointerCancel.nav pointerup.nav pointercancel.nav",function(a){f.css("transition-property","top"),s.css("transition-property","top")}),d&&!j.settings.include_toggle){var e=h.get(0);e&&q.on("scroll.safari",function(){ace.helper.redraw(e)})}if(v=!0,1==b&&(j.reset(),n&&j.scroll_to_active(),n=!1),"number"==typeof j.settings.smooth_scroll&&j.settings.smooth_scroll>0&&(f.css({"transition-property":"top","transition-duration":(j.settings.smooth_scroll/1e3).toFixed(2)+"s"}),s.css({"transition-property":"top","transition-duration":(j.settings.smooth_scroll/1500).toFixed(2)+"s"}),p.on("drag.start",function(a){a.stopPropagation(),f.css("transition-property","none")}).on("drag.end",function(a){a.stopPropagation(),f.css("transition-property","top")})),ace.vars.android){var k=ace.helper.scrollTop();2>k&&(window.scrollTo(k,0),setTimeout(function(){j.reset()},20));var m,o=ace.helper.winHeight();a(window).on("scroll.ace_scroll",function(){j.is_scrolling&&u.is_active()&&(m=ace.helper.winHeight(),m!=o&&(o=m,j.reset()))})}}};this.scroll_to_active=function(){if(u&&u.is_active())try{var a,b=o.vars(),c=l.find(".nav-list");b.minimized&&!b.collapsible?a=c.find("> .active"):(a=f.find("> .active.hover"),0==a.length&&(a=f.find(".active:not(.open)")));var d=a.outerHeight();c=c.get(0);for(var e=a.get(0);e!=c;)d+=e.offsetTop,e=e.parentNode;var h=d-p.height();h>0&&(g.style.top=-h+"px",q.scrollTop(h))}catch(i){}},this.reset=function(a){if(a===!0&&(this.sidebar_fixed=e(b,"fixed")),!this.sidebar_fixed)return void this.disable();v||A();var c=o.vars(),d=!c.collapsible&&!c.horizontal&&(w=y())<(x=g.clientHeight);this.is_scrolling=!0,d&&(r.css({height:x,width:8}),p.prev().css({"max-height":w}),u.update({size:w}),u.enable(),u.reset()),d&&u.is_active()?l.addClass("sidebar-scroll"):this.is_scrolling&&this.disable()},this.disable=function(){this.is_scrolling=!1,p&&(p.css({height:"","max-height":""}),r.css({height:"",width:""}),p.prev().css({"max-height":""}),u.disable()),parseInt(g.style.top)<0&&j.settings.smooth_scroll&&a.support.transition.end?f.one(a.support.transition.end,function(){l.removeClass("sidebar-scroll"),f.off(".trans")}):l.removeClass("sidebar-scroll"),g.style.top=0},
this.prehide=function(a){if(this.is_scrolling&&!o.get("minimized"))if(z()+a<y())this.disable();else if(0>a){var b=q.scrollTop()+a;if(0>b)return;g.style.top=-1*b+"px"}},this._reset=function(a){a===!0&&(this.sidebar_fixed=e(b,"fixed")),ace.vars.webkit?setTimeout(function(){j.reset()},0):this.reset()},this.set_hover=function(){t&&t.addClass("scroll-hover")},this.get=function(a){return this.hasOwnProperty(a)?this[a]:void 0},this.set=function(a,b){this.hasOwnProperty(a)&&(this[a]=b)},this.ref=function(){return this},this.updateStyle=function(a){null!=u&&u.update({styleClass:a})},l.on("hidden.ace.submenu.sidebar_scroll shown.ace.submenu.sidebar_scroll",".submenu",function(a){a.stopPropagation(),o.get("minimized")||(j._reset(),"shown"==a.type&&j.set_hover())}),A(!0)}}var d=ace.vars.safari&&navigator.userAgent.match(/version\/[1-5]/i),e="getComputedStyle"in window?function(a,b){return a.offsetHeight,window.getComputedStyle(a).position==b}:function(b,c){return b.offsetHeight,a(b).css("position")==c};a(document).on("settings.ace.sidebar_scroll",function(b,c,d){a(".sidebar[data-sidebar-scroll=true]").each(function(){var b=a(this),d=b.ace_sidebar_scroll("ref");if("sidebar_collapsed"==c&&e(this,"fixed"))"true"==b.attr("data-sidebar-hover")&&b.ace_sidebar_hover("reset"),d._reset();else if("sidebar_fixed"===c||"navbar_fixed"===c){var f=d.get("is_scrolling"),g=e(this,"fixed");d.set("sidebar_fixed",g),g&&!f?d._reset():g||d.disable()}})}),a(window).on("resize.ace.sidebar_scroll",function(){a(".sidebar[data-sidebar-scroll=true]").each(function(){var b=a(this);"true"==b.attr("data-sidebar-hover")&&b.ace_sidebar_hover("reset");var c=a(this).ace_sidebar_scroll("ref"),d=e(this,"fixed");c.set("sidebar_fixed",d),c._reset()})}),a.fn.ace_sidebar_scroll||(a.fn.ace_sidebar_scroll=function(d,e){var f,g=this.each(function(){var b=a(this),g=b.data("ace_sidebar_scroll"),h="object"==typeof d&&d;g||b.data("ace_sidebar_scroll",g=new c(this,h)),"string"==typeof d&&"function"==typeof g[d]&&(f=g[d](e))});return f===b?g:f},a.fn.ace_sidebar_scroll.defaults={scroll_to_active:!0,include_shortcuts:!0,include_toggle:!1,smooth_scroll:150,scroll_outside:!1,scroll_style:"",lock_anyway:!1})}(window.jQuery),function(a,b){function c(b,c){function h(b){var c=b,d=a(c),e=null,f=!1;this.show=function(){null!=e&&clearTimeout(e),e=null,d.addClass("hover-show hover-shown"),f=!0;for(var a=0;a<g.length;a++)g[a].find(".hover-show").not(".hover-shown").each(function(){i(this).hide()})},this.hide=function(){f=!1,d.removeClass("hover-show hover-shown hover-flip"),null!=e&&clearTimeout(e),e=null;var a=d.find("> .submenu").get(0);a&&j(a,"hide")},this.hideDelay=function(a){null!=e&&clearTimeout(e),d.removeClass("hover-shown"),e=setTimeout(function(){f=!1,d.removeClass("hover-show hover-flip"),e=null;var b=d.find("> .submenu").get(0);b&&j(b,"hide"),"function"==typeof a&&a.call(this)},m.settings.sub_hover_delay)},this.is_visible=function(){return f}}function i(b){var c=a(b).data("subHide");return c||a(b).data("subHide",c=new h(b)),c}function j(b,c){var d=a(b).data("ace_scroll");return d?"string"==typeof c?(d[c](),!0):d:!1}function k(c){var d=a(this),f=a(c);c.style.top="",c.style.bottom="";var g=null;q.minimized&&(g=d.find(".menu-text").get(0))&&(g.style.marginTop="");var h=ace.helper.scrollTop(),i=0,k=h;w&&(i=b.offsetTop,k+=i+1);var m=d.offset();m.top=parseInt(m.top);var n,o=0;c.style.maxHeight="";var r=c.scrollHeight,n=d.height();g&&(o=n,m.top+=o);var t=parseInt(m.top+r),v=0,y=u.height(),z=parseInt(m.top-k-o),A=y,B=q.horizontal,C=!1;B&&this.parentNode==p&&(v=0,m.top+=d.height(),C=!0),!C&&(v=t-(y+h))>=0&&(v=z>v?v:z,0==v&&(v=20),z-v>10&&(v+=parseInt(Math.min(25,z-v))),m.top+(n-o)>t-v&&(v-=m.top+(n-o)-(t-v)),v>0&&(c.style.top=-v+"px",g&&(g.style.marginTop=-v+"px"))),0>v&&(v=0);var D=v>0&&v>n-20;if(D?d.addClass("pull_up"):d.removeClass("pull_up"),B)if(d.parent().parent().hasClass("hover-flip"))d.addClass("hover-flip");else{var E=f.offset(),F=f.width(),G=u.width();E.left+F>G&&d.addClass("hover-flip")}var H=d.hasClass("hover")&&!q.mobile_view;if(!(H&&f.find("> li > .submenu").length>0)){var I=A-(m.top-h)+v,J=v-I;if(J>0&&n>J&&(I+=parseInt(Math.max(n,n-J))),I-=5,!(90>I)){var K=!1;if(e)f.addClass("sub-scroll").css("max-height",I+"px");else{if(K=j(c),0==K){f.ace_scroll({observeContent:!0,detached:!0,updatePos:!1,reset:!0,mouseWheelLock:!0,styleClass:l.settings.sub_scroll_style}),K=j(c);var L=K.get_track();L&&f.after(L)}K.update({size:I})}if(x=I,!e&&K){I>14&&r-I>4?(K.enable(),K.reset()):K.disable();var L=K.get_track();if(L){L.style.top=-(v-o-1)+"px";var m=f.position(),M=m.left;M+=s?2:f.outerWidth()-K.track_size(),L.style.left=parseInt(M)+"px",C&&(L.style.left=parseInt(M-2)+"px",L.style.top=parseInt(m.top)+(g?o-2:0)+"px")}}ace.vars.safari&&ace.helper.redraw(c)}}}var l=this,m=this,n=ace.helper.getAttrSettings(b,a.fn.ace_sidebar_hover.defaults);this.settings=a.extend({},a.fn.ace_sidebar_hover.defaults,c,n);var o=a(b),p=o.find(".nav-list").get(0);o.attr("data-sidebar-hover","true"),g.push(o);var q={},r=ace.vars.old_ie,s=!1,t=l.settings.sub_hover_delay||!1;d&&t&&(l.settings.sub_hover_delay=parseInt(Math.max(l.settings.sub_hover_delay,2500)));var u=a(window),v=a(".navbar").eq(0),w="fixed"==v.css("position");this.update_vars=function(){w="fixed"==v.css("position")},l.dirty=!1,this.reset=function(){0!=l.dirty&&(l.dirty=!1,o.find(".submenu").each(function(){var b=a(this),c=b.parent();b.css({top:"",bottom:"","max-height":""}),b.hasClass("ace-scroll")?b.ace_scroll("disable"):b.removeClass("sub-scroll"),f(this,"absolute")?b.addClass("can-scroll"):b.removeClass("can-scroll"),c.removeClass("pull_up").find(".menu-text:first").css("margin-top","")}),o.find(".hover-show").removeClass("hover-show hover-shown hover-flip"))},this.updateStyle=function(a){sub_scroll_style=a,o.find(".submenu.ace-scroll").ace_scroll("update",{styleClass:a})},this.changeDir=function(a){s="right"===a};var x=-1;e||o.on("hide.ace.submenu.sidebar_hover",".submenu",function(b){if(!(1>x)){b.stopPropagation();var c=a(this).closest(".ace-scroll.can-scroll");0!=c.length&&f(c[0],"absolute")&&c[0].scrollHeight-this.scrollHeight<x&&c.ace_scroll("disable")}}),e||o.on("shown.ace.submenu.sidebar_hover hidden.ace.submenu.sidebar_hover",".submenu",function(b){if(!(1>x)){var c=a(this).closest(".ace-scroll.can-scroll");if(0!=c.length&&f(c[0],"absolute")){var d=c[0].scrollHeight;x>14&&d-x>4?c.ace_scroll("enable").ace_scroll("reset"):c.ace_scroll("disable")}}});var y=-1,z=d?"touchstart.sub_hover":"mouseenter.sub_hover",A=d?"touchend.sub_hover touchcancel.sub_hover":"mouseleave.sub_hover";o.on(z,".nav-list li, .sidebar-shortcuts",function(b){if(q=o.ace_sidebar("vars"),!q.collapsible){var c=a(this),e=!1,g=c.hasClass("hover"),h=c.find("> .submenu").get(0);if(!(h||this.parentNode==p||g||(e=c.hasClass("sidebar-shortcuts"))))return void(h&&a(h).removeClass("can-scroll"));var j=h,m=!1;if(j||this.parentNode!=p||(j=c.find("> a > .menu-text").get(0)),!j&&e&&(j=c.find(".sidebar-shortcuts-large").get(0)),!(j&&(m=f(j,"absolute"))||g))return void(h&&a(h).removeClass("can-scroll"));var n=t?i(this):null;if(h)if(m){l.dirty=!0;var s=ace.helper.scrollTop();if(t&&!n.is_visible()||!d&&s!=y||r)if(a(h).addClass("can-scroll"),r||d){var u=this;setTimeout(function(){k.call(u,h)},0)}else k.call(this,h);y=s}else a(h).removeClass("can-scroll");t&&n.show()}}).on(A,".nav-list li, .sidebar-shortcuts",function(b){q=o.ace_sidebar("vars"),q.collapsible||a(this).hasClass("hover-show")&&t&&i(this).hideDelay()})}if(!ace.vars.very_old_ie){var d=ace.vars.touch,e=ace.vars.old_ie||d,f="getComputedStyle"in window?function(a,b){return a.offsetHeight,window.getComputedStyle(a).position==b}:function(b,c){return b.offsetHeight,a(b).css("position")==c};a(window).on("resize.sidebar.ace_hover",function(){a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("update_vars").ace_sidebar_hover("reset")}),a(document).on("settings.ace.ace_hover",function(b,c,d){"sidebar_collapsed"==c?a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("reset"):"navbar_fixed"==c&&a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("update_vars")});var g=[];a.fn.ace_sidebar_hover=function(d,e){var f,g=this.each(function(){var b=a(this),g=b.data("ace_sidebar_hover"),h="object"==typeof d&&d;g||b.data("ace_sidebar_hover",g=new c(this,h)),"string"==typeof d&&"function"==typeof g[d]&&(f=g[d](e))});return f===b?g:f},a.fn.ace_sidebar_hover.defaults={sub_hover_delay:750,sub_scroll_style:"no-track scroll-thin"}}}(window.jQuery),function(a,b){function c(b,c){var d=b.find(".widget-main").eq(0);a(window).off("resize.widget.scroll");var e=ace.vars.old_ie||ace.vars.touch;if(c){var f=d.data("ace_scroll");f&&d.data("save_scroll",{size:f.size,lock:f.lock,lock_anyway:f.lock_anyway});var g=b.height()-b.find(".widget-header").height()-10;g=parseInt(g),d.css("min-height",g),e?(f&&d.ace_scroll("disable"),d.css("max-height",g).addClass("overflow-scroll")):(f?d.ace_scroll("update",{size:g,mouseWheelLock:!0,lockAnyway:!0}):d.ace_scroll({size:g,mouseWheelLock:!0,lockAnyway:!0}),d.ace_scroll("enable").ace_scroll("reset")),a(window).on("resize.widget.scroll",function(){var a=b.height()-b.find(".widget-header").height()-10;a=parseInt(a),d.css("min-height",a),e?d.css("max-height",a).addClass("overflow-scroll"):d.ace_scroll("update",{size:a}).ace_scroll("reset")})}else{d.css("min-height","");var h=d.data("save_scroll");h&&d.ace_scroll("update",{size:h.size,mouseWheelLock:h.lock,lockAnyway:h.lock_anyway}).ace_scroll("enable").ace_scroll("reset"),e?d.css("max-height","").removeClass("overflow-scroll"):h||d.ace_scroll("disable")}}var d=function(b,d){this.$box=a(b);this.reload=function(){var a=this.$box,b=!1;"static"==a.css("position")&&(b=!0,a.addClass("position-relative")),a.append('<div class="widget-box-overlay"><i class="'+ace.vars.icon+'loading-icon fa fa-spinner fa-spin fa-2x white"></i></div>'),a.one("reloaded.ace.widget",function(){a.find(".widget-box-overlay").remove(),b&&a.removeClass("position-relative")})},this.closeFast=function(){this.close(0)},this.close=function(a){var b=this.$box,a="undefined"==typeof a?300:a;b.fadeOut(a,function(){b.trigger("closed.ace.widget"),b.remove()})},this.toggleFast=function(){this.toggle(null,null,0,0)},this.toggle=function(a,b,c,d){var e=this.$box,f=e.find(".widget-body").eq(0),g=null,h=a||(e.hasClass("collapsed")?"show":"hide"),i="show"==h?"shown":"hidden";if(b||(b=e.find("> .widget-header a[data-action=collapse]").eq(0),0==b.length&&(b=null)),b){g=b.find(ace.vars[".icon"]).eq(0);var j,k=null,l=null;(k=g.attr("data-icon-show"))?l=g.attr("data-icon-hide"):(j=g.attr("class").match(/fa\-(.*)\-(up|down)/))&&(k="fa-"+j[1]+"-down",l="fa-"+j[1]+"-up")}var c="undefined"==typeof c?250:c,d="undefined"==typeof d?200:d;"show"==h?(g&&g.removeClass(k).addClass(l),f.hide(),e.removeClass("collapsed"),f.slideDown(c,function(){e.trigger(i+".ace.widget")})):(g&&g.removeClass(l).addClass(k),f.slideUp(d,function(){e.addClass("collapsed"),e.trigger(i+".ace.widget")})),e.trigger("toggled.ace.widget",[h])},this.hide=function(){this.toggle("hide")},this.show=function(){this.toggle("show")},this.hideFast=function(){this.toggle("hide",null,0,0)},this.showFast=function(){this.toggle("show",null,0,0)},this.fullscreen=function(a){var b=this.$box.find("> .widget-header a[data-action=fullscreen]").find(ace.vars[".icon"]).eq(0),d=null,e=null;(d=b.attr("data-icon1"))?e=b.attr("data-icon2"):(d="fa-expand",e="fa-compress");var f=this.$box.hasClass("fullscreen"),g=a!==!0&&a!==!1;a===!0||g&&!f?(b.removeClass(d).addClass(e),this.$box.addClass("fullscreen"),c(this.$box,!0)):(a===!1||g&&f)&&(b.addClass(d).removeClass(e),this.$box.removeClass("fullscreen"),c(this.$box,!1)),this.$box.trigger("fullscreened.ace.widget")}};a.fn.widget_box=function(c,e){var f,g=this.each(function(){var b=a(this),g=b.data("widget_box"),h="object"==typeof c&&c;g||b.data("widget_box",g=new d(this,h)),"string"==typeof c&&(f=g[c](e))});return f===b?g:f},a(document).on(ace.click_event+".ace.widget",".widget-header a[data-action]",function(b){b.preventDefault();var c=a(this),e=c.closest(".widget-box");if(0!=e.length&&!e.hasClass("ui-sortable-helper")){var f=e.data("widget_box");f||e.data("widget_box",f=new d(e.get(0)));var g=c.data("action");if("collapse"==g){var h,i=e.hasClass("collapsed")?"show":"hide";if(e.trigger(h=a.Event(i+".ace.widget")),h.isDefaultPrevented())return;e.trigger(h=a.Event("toggle.ace.widget"),[i]),f.toggle(i,c)}else if("close"==g){var h;if(e.trigger(h=a.Event("close.ace.widget")),h.isDefaultPrevented())return;f.close()}else if("reload"==g){c.blur();var h;if(e.trigger(h=a.Event("reload.ace.widget")),h.isDefaultPrevented())return;f.reload()}else if("fullscreen"==g){var h;if(e.trigger(h=a.Event("fullscreen.ace.widget")),h.isDefaultPrevented())return;f.fullscreen()}else"settings"==g&&e.trigger("setting.ace.widget")}})}(window.jQuery),function(a,b){a("#ace-settings-btn").on(ace.click_event,function(b){b.preventDefault(),a(this).toggleClass("open"),a("#ace-settings-box").toggleClass("open")}),a("#ace-settings-navbar").on("click",function(){ace.settingFunction.navbar_fixed(null,this.checked)}),a("#ace-settings-sidebar").on("click",function(){ace.settingFunction.sidebar_fixed(null,this.checked)}),a("#ace-settings-breadcrumbs").on("click",function(){ace.settingFunction.breadcrumbs_fixed(null,this.checked)}),a("#ace-settings-add-container").on("click",function(){ace.settingFunction.main_container_fixed(null,this.checked)}),a("#ace-settings-compact").on("click",function(){if(this.checked){a("#sidebar").addClass("compact");var b=a("#ace-settings-hover");b.length>0&&b.removeAttr("checked").trigger("click")}else a("#sidebar").removeClass("compact"),a("#sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("reset");ace.vars.old_ie&&ace.helper.redraw(a("#sidebar")[0],!0)}),a("#ace-settings-highlight").on("click",function(){this.checked?a("#sidebar .nav-list > li").addClass("highlight"):a("#sidebar .nav-list > li").removeClass("highlight"),ace.vars.old_ie&&ace.helper.redraw(a("#sidebar")[0])}),a("#ace-settings-hover").on("click",function(){if(!a("#sidebar").hasClass("h-sidebar")){if(this.checked)a("#sidebar li").addClass("hover").filter(".open").removeClass("open").find("> .submenu").css("display","none");else{a("#sidebar li.hover").removeClass("hover");var b=a("#ace-settings-compact");b.length>0&&b.get(0).checked&&b.trigger("click")}a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("reset"),a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("reset"),ace.vars.old_ie&&ace.helper.redraw(a("#sidebar")[0])}});a(document).on("settings.ace",function(b,c,d,e,f){var g="";switch(c){case"navbar_fixed":g="ace-settings-navbar";break;case"sidebar_fixed":g="ace-settings-sidebar";break;case"breadcrumbs_fixed":g="ace-settings-breadcrumbs";break;case"main_container_fixed":g="ace-settings-add-container"}if(g&&(g=document.getElementById(g))){a(g).prop("checked",d);try{1==f&&ace.settings.saveState(g,"checked")}catch(h){}}}),ace.settingFunction={navbar_fixed:function(b,c,d,e){if(ace.vars.very_old_ie)return!1;var b=b||"#navbar";if("string"==typeof b&&(b=a(b).get(0)),!b)return!1;var f,c=c||!1,d="undefined"!=typeof d?d:!0;if(a(document).trigger(f=a.Event("presettings.ace"),["navbar_fixed",c,b,d]),f.isDefaultPrevented())return!1;if(e!==!1&&!c){var g=a("#sidebar");g.hasClass("sidebar-fixed")&&ace.settingFunction.sidebar_fixed(g.get(0),!1,d)}c?a(b).addClass("navbar-fixed-top"):a(b).removeClass("navbar-fixed-top"),d&&ace.settings.saveState(b,"class","navbar-fixed-top",c),a(document).trigger("settings.ace",["navbar_fixed",c,b,d])},sidebar_fixed:function(b,c,d,e){if(ace.vars.very_old_ie)return!1;var b=b||"#sidebar";if("string"==typeof b&&(b=a(b).get(0)),!b)return!1;var f,c=c||!1,d="undefined"!=typeof d?d:!0;if(a(document).trigger(f=a.Event("presettings.ace"),["sidebar_fixed",c,b,d]),f.isDefaultPrevented())return!1;e!==!1&&(c?ace.settingFunction.navbar_fixed(null,!0,d):ace.settingFunction.breadcrumbs_fixed(null,!1,d));var g=a("#menu-toggler");c?(a(b).addClass("sidebar-fixed"),g.addClass("fixed")):(a(b).removeClass("sidebar-fixed"),g.removeClass("fixed")),d&&(ace.settings.saveState(b,"class","sidebar-fixed",c),0!=g.length&&ace.settings.saveState(g[0],"class","fixed",c)),a(document).trigger("settings.ace",["sidebar_fixed",c,b,d])},breadcrumbs_fixed:function(b,c,d,e){if(ace.vars.very_old_ie)return!1;var b=b||"#breadcrumbs";if("string"==typeof b&&(b=a(b).get(0)),!b)return!1;var f,c=c||!1,d="undefined"!=typeof d?d:!0;return a(document).trigger(f=a.Event("presettings.ace"),["breadcrumbs_fixed",c,b,d]),f.isDefaultPrevented()?!1:(c&&e!==!1&&ace.settingFunction.sidebar_fixed(null,!0,d),c?a(b).addClass("breadcrumbs-fixed"):a(b).removeClass("breadcrumbs-fixed"),d&&ace.settings.saveState(b,"class","breadcrumbs-fixed",c),void a(document).trigger("settings.ace",["breadcrumbs_fixed",c,b,d]))},main_container_fixed:function(b,c,d){if(ace.vars.very_old_ie)return!1;var c=c||!1,d="undefined"!=typeof d?d:!0,b=b||"#main-container";if("string"==typeof b&&(b=a(b).get(0)),!b)return!1;var e;if(a(document).trigger(e=a.Event("presettings.ace"),["main_container_fixed",c,b,d]),e.isDefaultPrevented())return!1;var f=a("#navbar-container");c?(a(b).addClass("container"),a(f).addClass("container")):(a(b).removeClass("container"),a(f).removeClass("container")),d&&(ace.settings.saveState(b,"class","container",c),0!=f.length&&ace.settings.saveState(f[0],"class","container",c)),navigator.userAgent.match(/webkit/i)&&(a("#sidebar").toggleClass("menu-min"),setTimeout(function(){a("#sidebar").toggleClass("menu-min")},10)),a(document).trigger("settings.ace",["main_container_fixed",c,b,d])}}}(jQuery),function(a,b){a("#ace-settings-rtl").removeAttr("checked").on("click",function(){c()});var c=function(){function b(b){function c(a,b){e.find("."+a).removeClass(a).addClass("tmp-rtl-"+a).end().find("."+b).removeClass(b).addClass(a).end().find(".tmp-rtl-"+a).removeClass("tmp-rtl-"+a).addClass(b)}var d=a(document.body);b||d.toggleClass("rtl"),b=b||document.body;var e=a(b);e.find(".dropdown-menu:not(.datepicker-dropdown,.colorpicker)").toggleClass("dropdown-menu-right").end().find(".pull-right:not(.dropdown-menu,blockquote,.profile-skills .pull-right)").removeClass("pull-right").addClass("tmp-rtl-pull-right").end().find(".pull-left:not(.dropdown-submenu,.profile-skills .pull-left)").removeClass("pull-left").addClass("pull-right").end().find(".tmp-rtl-pull-right").removeClass("tmp-rtl-pull-right").addClass("pull-left").end().find(".chosen-select").toggleClass("chosen-rtl").next().toggleClass("chosen-rtl"),c("align-left","align-right"),c("no-padding-left","no-padding-right"),c("arrowed","arrowed-right"),c("arrowed-in","arrowed-in-right"),c("tabs-left","tabs-right"),c("messagebar-item-left","messagebar-item-right"),a(".modal.aside-vc").ace_aside("flip").ace_aside("insideContainer"),e.find(".fa").each(function(){if(!(this.className.match(/ui-icon/)||a(this).closest(".fc-button").length>0))for(var b=this.attributes.length,c=0;b>c;c++){var d=this.attributes[c].value;d.match(/fa\-(?:[\w\-]+)\-left/)?this.attributes[c].value=d.replace(/fa\-([\w\-]+)\-(left)/i,"fa-$1-right"):d.match(/fa\-(?:[\w\-]+)\-right/)&&(this.attributes[c].value=d.replace(/fa\-([\w\-]+)\-(right)/i,"fa-$1-left"))}});var f=d.hasClass("rtl");f?(e.find(".scroll-hz").addClass("make-ltr").find(".scroll-content").wrapInner('<div class="make-rtl" />'),a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("changeDir","right")):(e.find(".scroll-hz").removeClass("make-ltr").find(".make-rtl").children().unwrap(),a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("changeDir","left")),a.fn.ace_scroll&&e.find(".scroll-hz").ace_scroll("reset");try{var g=a("#piechart-placeholder");if(g.length>0){var h=d.hasClass("rtl")?"nw":"ne";g.data("draw").call(g.get(0),g,g.data("chart"),h)}}catch(i){}ace.helper.redraw(b,!0)}b(),a(".page-content-area[data-ajax-content=true]").on("ajaxscriptsloaded.rtl",function(){a("body").hasClass("rtl")&&b(this)})}}(jQuery),function(a,b){try{a("#skin-colorpicker").ace_colorpicker({auto_pos:!1})}catch(c){}a("#skin-colorpicker").on("change",function(){function b(b){var c=a(document.body);c.removeClass("no-skin skin-1 skin-2 skin-3"),c.addClass(b),ace.data.set("skin",b);var d=["red","blue","green",""];a(".ace-nav > li.grey").removeClass("dark"),a(".ace-nav > li").removeClass("no-border margin-1"),a(".ace-nav > li:not(:last-child)").removeClass("light-pink").find("> a > "+ace.vars[".icon"]).removeClass("pink").end().eq(0).find(".badge").removeClass("badge-warning"),a(".sidebar-shortcuts .btn").removeClass("btn-pink btn-white").find(ace.vars[".icon"]).removeClass("white"),a(".ace-nav > li.grey").removeClass("red").find(".badge").removeClass("badge-yellow"),a(".sidebar-shortcuts .btn").removeClass("btn-primary btn-white");var e=0;a(".sidebar-shortcuts .btn").each(function(){a(this).find(ace.vars[".icon"]).removeClass(d[e++])});var f=["btn-success","btn-info","btn-warning","btn-danger"];if("no-skin"==b){var e=0;a(".sidebar-shortcuts .btn").each(function(){a(this).attr("class","btn "+f[e++%4])}),a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("updateStyle",""),a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("updateStyle","no-track scroll-thin")}else if("skin-1"==b){a(".ace-nav > li.grey").addClass("dark");var e=0;a(".sidebar-shortcuts").find(".btn").each(function(){a(this).attr("class","btn "+f[e++%4])}),a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("updateStyle","scroll-white no-track"),a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("updateStyle","no-track scroll-thin scroll-white")}else if("skin-2"==b)a(".ace-nav > li").addClass("no-border margin-1"),a(".ace-nav > li:not(:last-child)").addClass("light-pink").find("> a > "+ace.vars[".icon"]).addClass("pink").end().eq(0).find(".badge").addClass("badge-warning"),a(".sidebar-shortcuts .btn").attr("class","btn btn-white btn-pink").find(ace.vars[".icon"]).addClass("white"),a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("updateStyle","scroll-white no-track"),a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("updateStyle","no-track scroll-thin scroll-white");else if("skin-3"==b){c.addClass("no-skin"),a(".ace-nav > li.grey").addClass("red").find(".badge").addClass("badge-yellow");var e=0;a(".sidebar-shortcuts .btn").each(function(){a(this).attr("class","btn btn-primary btn-white"),a(this).find(ace.vars[".icon"]).addClass(d[e++])}),a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("updateStyle","scroll-dark no-track"),a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("updateStyle","no-track scroll-thin")}a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("reset"),ace.vars.old_ie&&ace.helper.redraw(document.body,!0)}var c=a(this).find("option:selected").data("skin");b(c)})}(jQuery),function(a,b){a(document).on("reload.ace.widget",".widget-box",function(b){var c=a(this);setTimeout(function(){c.trigger("reloaded.ace.widget")},parseInt(1e3*Math.random()+1e3))})}(window.jQuery),function(a,b){ace.vars.US_STATES=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];try{a("#nav-search-input").bs_typeahead({source:ace.vars.US_STATES,updater:function(b){return a("#nav-search-input").focus(),b}})}catch(c){}}(window.jQuery);
;
//# sourceMappingURL=scripts.bundle.js.map