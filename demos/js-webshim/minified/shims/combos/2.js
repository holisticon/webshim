var swfmini=function(){function e(){if(!C){try{var e=x.getElementsByTagName("body")[0].appendChild(p("span"));e.parentNode.removeChild(e)}catch(t){return}C=!0;for(var n=E.length,i=0;n>i;i++)E[i]()}}function t(e){C?e():E[E.length]=e}function n(){}function i(){N&&a()}function a(){var e=x.getElementsByTagName("body")[0],t=p(m);t.setAttribute("type",b);var n=e.appendChild(t);if(n){var i=0;(function(){if(typeof n.GetVariable!=f){var a=n.GetVariable("$version");a&&(a=a.split(" ")[1].split(","),M.pv=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)])}else if(10>i)return i++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),n=null})()}}function r(e){var t=null,n=c(e);if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=f)t=n;else{var i=n.getElementsByTagName(m)[0];i&&(t=i)}return t}function o(e,t,n){var i,a=c(n);if(M.wk&&312>M.wk)return i;if(a)if(typeof e.id==f&&(e.id=n),M.ie&&M.win){var r="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?r+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(r+=" "+o+'="'+e[o]+'"'));var l="";for(var u in t)t[u]!=Object.prototype[u]&&(l+='<param name="'+u+'" value="'+t[u]+'" />');a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+l+"</object>",A[A.length]=e.id,i=c(e.id)}else{var d=p(m);d.setAttribute("type",b);for(var h in e)e[h]!=Object.prototype[h]&&("styleclass"==h.toLowerCase()?d.setAttribute("class",e[h]):"classid"!=h.toLowerCase()&&d.setAttribute(h,e[h]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&s(d,v,t[v]);a.parentNode.replaceChild(d,a),i=d}return i}function s(e,t,n){var i=p("param");i.setAttribute("name",t),i.setAttribute("value",n),e.appendChild(i)}function l(e){var t=c(e);t&&"OBJECT"==t.nodeName&&(M.ie&&M.win?(t.style.display="none",function(){4==t.readyState?u(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function u(e){var t=c(e);if(t){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}}function c(e){var t=null;try{t=x.getElementById(e)}catch(n){}return t}function p(e){return x.createElement(e)}function d(e){var t=M.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function h(e,t){if(S){var n,i=t?"visible":"hidden";C&&n&&c(e)&&(c(e).style.visibility=i)}}var f="undefined",m="object",v=window.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",b="application/x-shockwave-flash",w=window,x=document,T=navigator,N=!1,E=[i],A=[],k=[],C=!1,S=!0,M=function(){var e=typeof x.getElementById!=f&&typeof x.getElementsByTagName!=f&&typeof x.createElement!=f,t=T.userAgent.toLowerCase(),n=T.platform.toLowerCase(),i=n?/win/.test(n):/win/.test(t),a=n?/mac/.test(n):/mac/.test(t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],l=null;if(typeof T.plugins!=f&&typeof T.plugins[g]==m)l=T.plugins[g].description,!l||typeof T.mimeTypes!=f&&T.mimeTypes[b]&&!T.mimeTypes[b].enabledPlugin||(N=!0,o=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof w.ActiveXObject!=f)try{var u=new ActiveXObject(y);u&&(l=u.GetVariable("$version"),l&&(o=!0,l=l.split(" ")[1].split(","),s=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(c){}return{w3:e,pv:s,wk:r,ie:o,win:i,mac:a}}();return function(){M.ie&&M.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=k.length,t=0;e>t;t++)k[t][0].detachEvent(k[t][1],k[t][2]);for(var n=A.length,i=0;n>i;i++)l(A[i]);for(var a in M)M[a]=null;M=null;for(var r in swfmini)swfmini[r]=null;swfmini=null})}(),v.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return M.w3?r(e):void 0},embedSWF:function(e,n,i,a,r,s,l,u,c,p){var v={success:!1,id:n};M.w3&&!(M.wk&&312>M.wk)&&e&&n&&i&&a&&r?(h(n,!1),t(function(){i+="",a+="";var t={};if(c&&typeof c===m)for(var s in c)t[s]=c[s];t.data=e,t.width=i,t.height=a;var g={};if(u&&typeof u===m)for(var y in u)g[y]=u[y];if(l&&typeof l===m)for(var b in l)typeof g.flashvars!=f?g.flashvars+="&"+b+"="+l[b]:g.flashvars=b+"="+l[b];if(d(r)){var w=o(t,g,n);t.id==n&&h(n,!0),v.success=!0,v.ref=w}else h(n,!0);p&&p(v)})):p&&p(v)},switchOffAutoHideShow:function(){S=!1},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:d,createSWF:function(e,t,n){return M.w3?o(e,t,n):void 0},showExpressInstall:function(){},removeSWF:function(e){M.w3&&l(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:n,expressInstallCallback:function(){}}}();webshims.register("dom-extend",function(e,t,n,i,a){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),1===t.cfg.extendNative&&t.warn("extendNative configuration will be set to false by default with next release. In case you rely on it set it to 'true' otherwise to 'false'. See http://bit.ly/16OOTQO"),!t.cfg.no$Switch){var r=function(){if(!n.jQuery||n.$&&n.jQuery!=n.$||n.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),n.$&&(n.$=t.$),n.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};r(),setTimeout(r,90),t.ready("DOM",r),e(r),t.ready("WINDOWLOAD",r)}var o=t.modules,s=/\s*,\s*/,l={},u={},c={},p={},d={},h=e.fn.val,f=function(t,n,i,a,r){return r?h.call(e(t)):h.call(e(t),i)};e.widget||function(){var t=e.cleanData;e.cleanData=function(n){if(!e.widget)for(var i,a=0;null!=(i=n[a]);a++)try{e(i).triggerHandler("remove")}catch(r){}t(n)}}(),e.fn.val=function(t){var n=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return n&&1===n.nodeType?e.prop(n,"value",t,"val",!0):h.call(this);if(e.isArray(t))return h.apply(this,arguments);var i=e.isFunction(t);return this.each(function(r){if(n=this,1===n.nodeType)if(i){var o=t.call(n,r,e.prop(n,"value",a,"val",!0));null==o&&(o=""),e.prop(n,"value",o,"val")}else e.prop(n,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,n,a,r){return r||(r=i),e(r)[a?"onTrigger":"on"](t,n),this.on("remove",function(i){i.originalEvent||e(r).off(t,n)}),this};var m="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,n,i){if(t=t.jquery?t[0]:t,!t)return i||{};var r=e.data(t,m);return i!==a&&(r||(r=e.data(t,m,{})),n&&(r[n]=i)),n?r&&r[n]:r};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var n=[];return this.each(function(){var i=v(this,"shadowData"),a=i&&i[t.prop]||this;-1==e.inArray(a,n)&&n.push(a)}),this.pushStack(n)}}),["removeAttr","prop","attr"].forEach(function(n){l[n]=e[n],e[n]=function(t,i,r,o,s){var p="val"==o,h=p?f:l[n];if(!t||!u[i]||1!==t.nodeType||!p&&o&&"attr"==n&&e.attrFn[i])return h(t,i,r,o,s);var m,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=n||r!==!1&&null!==r?n:"removeAttr";if(b||(b=c["*"]),b&&(b=b[i]),b&&(m=b[w]),m){if("value"==i&&(v=m.isVal,m.isVal=p),"removeAttr"===w)return m.value.call(t);if(r===a)return m.get?m.get.call(t):m.value;m.set&&("attr"==n&&r===!0&&(r=i),g=m.set.call(t,r)),"value"==i&&(m.isVal=v)}else g=h(t,i,r,o,s);if((r!==a||"removeAttr"===w)&&d[y]&&d[y][i]){var x;x="removeAttr"==w?!1:"prop"==w?!!r:!0,d[y][i].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==n)||"attr"==e.only&&"prop"!=n)&&e.call(t,r,x,p?"val":w,n)})}return g},p[n]=function(e,i,r){c[e]||(c[e]={}),c[e][i]||(c[e][i]={});var o=c[e][i][n],s=function(e,t,a){return t&&t[e]?t[e]:a&&a[e]?a[e]:"prop"==n&&"value"==i?function(e){var t=this;return r.isVal?f(t,i,e,!1,0===arguments.length):l[n](t,i,e)}:"prop"==n&&"value"==e&&r.value.apply?function(){var e=l[n](this,i);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[n](this,i,e)}};c[e][i][n]=r,r.value===a&&(r.set||(r.set=r.writeable?s("set",r,o):t.cfg.useStrict&&"prop"==i?function(){throw i+" is readonly on "+e}:function(){t.info(i+" is readonly on "+e)}),r.get||(r.get=s("get",r,o))),["value","get","set"].forEach(function(e){r[e]&&(r["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(i.createElement("foobar")),n=Object.prototype.hasOwnProperty,a=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(r,o,s){var l,u;if(!(a&&(l=i.createElement(r))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&n.call(l,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(r,o,s.value);else{var c=l[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var n={};t.addReady(function(i,r){var o={},s=function(t){o[t]||(o[t]=e(i.getElementsByTagName(t)),r[0]&&e.nodeName(r[0],t)&&(o[t]=o[t].add(r)))};e.each(n,function(e,n){return s(e),n&&n.forEach?(n.forEach(function(t){o[e].each(t)}),a):(t.warn("Error: with "+e+"-property. methods: "+n),a)}),o=null});var r,o=e([]),s=function(t,a){n[t]?n[t].push(a):n[t]=[a],e.isDOMReady&&(r||e(i.getElementsByTagName(t))).each(a)};return{createTmpCache:function(t){return e.isDOMReady&&(r=r||e(i.getElementsByTagName(t))),r||o},flushTmpCache:function(){r=null},content:function(t,n){s(t,function(){var t=e.attr(this,n);null!=t&&e.attr(this,n,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,n,i){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[n]=this[n],this[n]=i})})}}}(),b=function(e,t){e.defaultValue===a&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(n){n=e(n);var i=n.prop("id");return i||(t++,i="ID-"+t,n.eq(0).prop("id",i)),i}}(),implement:function(e,n){var i=v(e,"implemented")||v(e,"implemented",{});return i[n]?(t.warn(n+" already implemented for element #"+e.id),!1):(i[n]=!0,!0)},extendUNDEFProp:function(t,n){e.each(n,function(e,n){e in t||(t[e]=n)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,n,i){var a,r=(e._data(t,"events")||{})[n];r&&r.length>1&&(a=r.pop(),i||(i="bind"),"bind"==i&&r.delegateCount?r.splice(r.delegateCount,0,a):r.unshift(a)),t=null},addShadowDom:function(){var a,r,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(a),a=setTimeout(function(){if("resize"==t.type){var a=e(n).width(),l=e(n).width();if(l==r&&a==o)return;r=l,o=a,s.height=s.getHeight(),s.width=s.getWidth()}e(i).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var n=i.body,a=i.documentElement;s[t]=function(){return Math.max(n["scroll"+e],a["scroll"+e],n["offset"+e],a["offset"+e],a["client"+e])}})},start:function(){!this.init&&i.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(n).bind("resize",this.handler),function(){var t,n=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),n.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(n,i,a){if(n&&i){a=a||{},n.jquery&&(n=n[0]),i.jquery&&(i=i[0]);var r=e.data(n,m)||e.data(n,m,{}),o=e.data(i,m)||e.data(i,m,{}),s={};a.shadowFocusElement?a.shadowFocusElement&&(a.shadowFocusElement.jquery&&(a.shadowFocusElement=a.shadowFocusElement[0]),s=e.data(a.shadowFocusElement,m)||e.data(a.shadowFocusElement,m,s)):a.shadowFocusElement=i,e(n).on("remove",function(t){t.originalEvent||e(i).remove()}),r.hasShadow=i,s.nativeElement=o.nativeElement=n,s.shadowData=o.shadowData=r.shadowData={nativeElement:n,shadowElement:i,shadowFocusElement:a.shadowFocusElement},a.shadowChilds&&a.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),a.data&&(s.shadowData.data=o.shadowData.data=r.shadowData.data=a.data),a=null}t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=i.createElement("a");return t.style.display="none",function(n,i){b(n),n.prop||(n.prop={set:function(e){n.attr.set.call(this,e)},get:function(){var n,a=this.getAttribute(i);if(null==a)return"";if(t.setAttribute("href",a+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),n=t.getAttribute("href",4)}catch(r){n=t.getAttribute("href",4)}e(t).detach()}return n||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(n,i){"string"==typeof i&&(i=i.split(s)),i.forEach(function(i){t.defineNodeNamesProperty(n,i,{prop:{set:function(t){e.attr(this,i,t)},get:function(){return e.attr(this,i)||""}}})})},defineNodeNameProperty:function(n,i,a){return u[i]=!0,a.reflect&&t.propTypes[a.propType||"standard"](a,i),["prop","attr","removeAttr"].forEach(function(r){var o=a[r];o&&(o="prop"===r?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),p[r](n,i,o),"*"!=n&&t.cfg.extendNative&&"prop"==r&&o.value&&e.isFunction(o.value)&&g(n,i,o),a[r]=o)}),a.initAttr&&y.content(n,i),a},defineNodeNameProperties:function(e,n,i,a){for(var r in n)!a&&n[r].initAttr&&y.createTmpCache(e),i&&(n[r][i]||(n[r][i]={},["value","set","get"].forEach(function(e){e in n[r]&&(n[r][i][e]=n[r][e],delete n[r][e])}))),n[r]=t.defineNodeNameProperty(e,r,n[r]);return a||y.flushTmpCache(),n},createElement:function(n,i,a){var r;return e.isFunction(i)&&(i={after:i}),y.createTmpCache(n),i.before&&y.createElement(n,i.before),a&&(r=t.defineNodeNameProperties(n,a,!1,!0)),i.after&&y.createElement(n,i.after),y.flushTmpCache(),r},onNodeNamesPropertyModify:function(t,n,i,a){"string"==typeof t&&(t=t.split(s)),e.isFunction(i)&&(i={set:i}),t.forEach(function(e){d[e]||(d[e]={}),"string"==typeof n&&(n=n.split(s)),i.initAttr&&y.createTmpCache(e),n.forEach(function(t){d[e][t]||(d[e][t]=[],u[t]=!0),i.set&&(a&&(i.set.only=a),d[e][t].push(i.set)),i.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(n,i,r){r||(r={}),e.isFunction(r)&&(r.set=r),t.defineNodeNamesProperty(n,i,{attr:{set:function(e){this.setAttribute(i,e),r.set&&r.set.call(this,!0)},get:function(){var e=this.getAttribute(i);return null==e?a:i}},removeAttr:{value:function(){this.removeAttribute(i),r.set&&r.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:r.initAttr||!1})},contentAttr:function(e,t,n){if(e.nodeName){var i;return n===a?(i=e.attributes[t]||{},n=i.specified?i.value:null,null==n?a:n):("boolean"==typeof n?n?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,n),a)}},activeLang:function(){var n,i,a=[],r={},s=/:\/\/|^\.*\//,l=function(n,i,a){var r;return i&&a&&-1!==e.inArray(i,a.availabeLangs||[])?(n.loading=!0,r=a.langSrc,s.test(r)||(r=t.cfg.basePath+r),t.loader.loadScript(r+i+".js",function(){n.langObj[i]?(n.loading=!1,c(n,!0)):e(function(){n.langObj[i]&&c(n,!0),n.loading=!1})}),!0):!1},u=function(e){r[e]&&r[e].forEach(function(e){e.callback(n,i,"")})},c=function(e,t){if(e.activeLang!=n&&e.activeLang!==i){var a=o[e.module].options;e.langObj[n]||i&&e.langObj[i]?(e.activeLang=n,e.callback(e.langObj[n]||e.langObj[i],n),u(e.module)):t||l(e,n,a)||l(e,i,a)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],n),u(e.module))}},p=function(t){return"string"==typeof t&&t!==n?(n=t,i=n.split("-")[0],n==i&&(i=!1),e.each(a,function(e,t){c(t)})):"object"==typeof t&&(t.register?(r[t.register]||(r[t.register]=[]),r[t.register].push(t),t.callback(n,i,"")):(t.activeLang||(t.activeLang=""),a.push(t),c(t))),n};return p}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,n){t[e]=function(e,i,a,r){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[n](e,i,a,r)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var n={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},i=function(e,t){var n=e.getAttribute("role");n||e.setAttribute("role",t)};e.webshims.addReady(function(a,r){if(e.each(n,function(t,n){for(var o=e(t,a).add(r.filter(t)),s=0,l=o.length;l>s;s++)i(o[s],n)}),a===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&i(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||i(u,"contentinfo")}})}}(webshims.$,document),webshims.register("form-core",function(e,t,n,i,a,r){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var n=t.isDefaultPrevented,i=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),i.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!n.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},Modernizr.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0);var o=function(t){return(e.prop(t,"validity")||{valid:1}).valid},s=function(){var n=["form-validation"];r.lazyCustomMessages&&(r.customMessages=!0,n.push("form-message")),r.addValidators&&n.push("form-validators"),t.reTest(n),e(i).off(".lazyloadvalidation")},l=function(t){var n=!1;return e(t).jProp("elements").each(function(){return n=e(this).is(":invalid"),n?!1:a}),n},u=/^(?:form)$/i;e.extend(e.expr[":"],{"valid-element":function(t){return u.test(t.nodeName||"")?!l(t):!(!e.prop(t,"willValidate")||!o(t))},"invalid-element":function(t){return u.test(t.nodeName||"")?l(t):!(!e.prop(t,"willValidate")||o(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]});var c=e.expr[":"].focus;e.expr[":"].focus=function(){try{return c.apply(this,arguments)}catch(e){t.error(e)}return!1},t.triggerInlineForm=function(t,n){e(t).trigger(n)};var p=function(e,n,i){s(),t.ready("form-validation",function(){e[n].apply(e,i)})},d="transitionDelay"in i.documentElement.style?"":" no-transition",h=t.cfg.wspopover;h.position||h.position===!1||(h.position={at:"left bottom",my:"left top",collision:"fit flip"}),t.wsPopover={id:0,_create:function(){this.options=e.extend({},h,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover'+d+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){p(this,"show",arguments)}},t.validityAlert={showFor:function(){p(this,"showFor",arguments)}},t.getContentValidationMessage=function(t,n,i){var r=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return i&&r[i]&&(r=r[i]),"object"==typeof r&&(n=n||e.prop(t,"validity")||{valid:1},n.valid||e.each(n,function(e,t){return t&&"valid"!=e&&r[e]?(r=r[e],!1):a})),"object"==typeof r&&(r=r.defaultMessage),r||""},e.fn.getErrorMessage=function(n){var i="",a=this[0];return a&&(i=t.getContentValidationMessage(a,!1,n)||e.prop(a,"customValidationMessage")||e.prop(a,"validationMessage")),i},e(i).on("focusin.lazyloadvalidation",function(t){"form"in t.target&&e(t.target).is(":invalid")&&s()}),t.ready("WINDOWLOAD",s),r.replaceValidationUI&&t.ready("DOM forms",function(){e(i).on("firstinvalid",function(e){e.isInvalidUIPrevented()||(e.preventDefault(),t.validityAlert.showFor(e.target))})}),function(){var t,n,a=[];e(i).on("invalid",function(r){if(!r.wrongWebkitInvalid){var o=e(r.target);if(!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=r.isDefaultPrevented;var s=e.Event("firstinvalidsystem");e(i).triggerHandler(s,{element:r.target,form:r.target.form,isInvalidUIPrevented:r.isDefaultPrevented}),o.trigger(t)}t&&t.isDefaultPrevented()&&r.preventDefault(),a.push(r.target),r.extraData="fix",clearTimeout(n),n=setTimeout(function(){var n={type:"lastinvalid",cancelable:!1,invalidlist:e(a)};t=!1,a=[],e(r.target).trigger(n,n)},9),o=null}})}()}),webshims.register("form-datalist",function(e,t,n,i,a,r){"use strict";var o=function(e){e&&"string"==typeof e||(e="DOM"),o[e+"Loaded"]||(o[e+"Loaded"]=!0,t.ready(e,function(){t.loader.loadList(["form-datalist-lazy"])}))},s={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};t.modules["form-number-date-ui"].loaded&&e.extend(s,{number:1,time:1}),t.propTypes.element=function(n){t.createPropDefault(n,"attr"),n.prop||(n.prop={get:function(){var t=e.attr(this,"list");return t&&(t=i.getElementById(t),t&&n.propNodeName&&!e.nodeName(t,n.propNodeName)&&(t=null)),t||null},writeable:!1})},function(){var l=e.webshims.cfg.forms,u=Modernizr.input.list;if(!u||l.customDatalist){var c=function(){var n={autocomplete:{attr:{get:function(){var t=this,n=e.data(t,"datalistWidget");return n?n._autocomplete:"autocomplete"in t?t.autocomplete:t.getAttribute("autocomplete")},set:function(t){var n=this,i=e.data(n,"datalistWidget");i?(i._autocomplete=t,"off"==t&&i.hideList()):"autocomplete"in n?n.autocomplete=t:n.setAttribute("autocomplete",t)}}}};!l.customDatalist||u&&"selectedOption"in e("<input />")[0]||(n.selectedOption={prop:{writeable:!1,get:function(){var t,n,i=this,r=e.prop(i,"list"),o=null;return r?(t=e.prop(i,"value"))?(n=e.prop(r,"options"),n.length?(e.each(n,function(n,i){return t==e.prop(i,"value")?(o=i,!1):a}),o):o):o:o}}}),u&&((e("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var t=this.options||[];if(!t.length){var n=this,i=e("select",n);i[0]&&i[0].options&&i[0].options.length&&(t=i[0].options)}return t}}}),n.list={attr:{get:function(){var n=t.contentAttr(this,"list");return null!=n?(e.data(this,"datalistListAttr",n),s[e.prop(this,"type")]||s[e.attr(this,"type")]||this.removeAttribute("list")):n=e.data(this,"datalistListAttr"),null==n?a:n},set:function(n){var i=this;e.data(i,"datalistListAttr",n),s[e.prop(this,"type")]||s[e.attr(this,"type")]?i.setAttribute("list",n):t.objectCreate(p,a,{input:i,id:n,datalist:e.prop(i,"list")}),e(i).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}),t.defineNodeNameProperties("input",n),t.addReady(function(t,n){n.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(function(){e(this).triggerHandler("updateDatalist")})})},p={_create:function(n){if(!s[e.prop(n.input,"type")]&&!s[e.attr(n.input,"type")]){var i=n.datalist,r=e.data(n.input,"datalistWidget"),l=this;return i&&r&&r.datalist!==i?(r.datalist=i,r.id=n.id,e(r.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(r,"_resetListCached")),r._resetListCached(),a):i?(r&&r.datalist===i||(this.datalist=i,this.id=n.id,this.hasViewableData=!0,this._autocomplete=e.attr(n.input,"autocomplete"),e.data(n.input,"datalistWidget",this),o("WINDOWLOAD"),t.isReady("form-datalist-lazy")?this._lazyCreate(n):(e(n.input).one("focus",o),t.ready("form-datalist-lazy",function(){l._destroyed||l._lazyCreate(n)}))),a):(r&&r.destroy(),a)}},destroy:function(t){var r,o=e.attr(this.input,"autocomplete");e(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),e(i).off(".datalist"+this.id),e(n).off(".datalist"+this.id),this.input.form&&this.input.id&&e(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),o===a?this.input.removeAttribute("autocomplete"):e(this.input).attr("autocomplete",o),t&&"beforeunload"==t.type&&(r=this.input,setTimeout(function(){e.attr(r,"list",e.attr(r,"list"))},9)),this._destroyed=!0}};t.loader.addModule("form-datalist-lazy",{noAutoCallback:!0,options:e.extend(r,{shadowListProto:p})}),c()}}()}),function(e,t){"use strict";var n,i,a=t.$,r=e.audio&&e.video,o=!1,s=t.bugs,l="mediaelement-jaris",u=function(){t.ready(l,function(){t.mediaelement.createSWF||(t.mediaelement.loadSwf=!0,t.reTest([l],r))})},c=t.cfg.mediaelement;if(!c)return t.error("mediaelement wasn't implemented but loaded"),void 0;if(r){var p=document.createElement("video");if(e.videoBuffered="buffered"in p,o="loop"in p,t.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),e.videoBuffered||(t.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),t.loader.loadList(["mediaelement-native-fix"])),!c.preferFlash){var d={1:1,2:1},h=function(e){var n,r,o;if(!c.preferFlash&&(a(e.target).is("audio, video")||(o=e.target.parentNode)&&a("source:last",o)[0]==e.target)&&(n=a(e.target).closest("audio, video"))&&!d[r=n.prop("error")]){if(null==r)return t.warn("There was an unspecified error on a mediaelement"),void 0;a(function(){i&&!c.preferFlash?(u(),t.ready("WINDOWLOAD "+l,function(){setTimeout(function(){c.preferFlash||!t.mediaelement.createSWF||n.is(".nonnative-api-active")||(c.preferFlash=!0,document.removeEventListener("error",h,!0),a("audio, video").each(function(){t.mediaelement.selectSource(this)}),t.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src+" Mediaerror: "+n.prop("error")))},9)})):document.removeEventListener("error",h,!0)})}};document.addEventListener("error",h,!0),a("audio, video").each(function(){var e=a.prop(this,"error");return e&&!d[e]?(h({target:this}),!1):void 0})}}e.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof a("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(e){s.track=!0}}(),n=e.track&&!s.track,t.register("mediaelement-core",function(e,t,a,s,p){i=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(i?"swf":"no-swf");var d=t.mediaelement;d.parseRtmp=function(e){var n,i,a,r=e.src.split("://"),o=r[1].split("/");for(e.server=r[0]+"://"+o[0]+"/",e.streamId=[],n=1,i=o.length;i>n;n++)a||-1===o[n].indexOf(":")||(o[n]=o[n].split(":")[1],a=!0),a?e.streamId.push(o[n]):e.server+=o[n]+"/";e.streamId.length||t.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var h=function(t,n){t=e(t);var i,a={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return a.src?(i=t.attr("data-server"),null!=i&&(a.server=i),i=t.attr("type"),i?(a.type=i,a.container=e.trim(i.split(";")[0])):(n||(n=t[0].nodeName.toLowerCase(),"source"==n&&(n=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),a.server?(a.type=n+"/rtmp",a.container=n+"/rtmp"):(i=d.getTypeForSrc(a.src,n,a),i&&(a.type=i,a.container=i))),i=t.attr("media"),i&&(a.media=i),("audio/rtmp"==a.type||"video/rtmp"==a.type)&&(a.server?a.streamId=a.src:d.parseRtmp(a)),a):a},f=!i&&"postMessage"in a&&r,m=function(){m.loaded||(m.loaded=!0,t.ready("WINDOWLOAD",function(){g(),t.loader.loadList(["track-ui"])}))},v=function(){var n;return function(){!n&&f&&(n=!0,t.loader.loadScript("https://www.youtube.com/player_api"),e(function(){t._polyfill(["mediaelement-yt"])}))}}(),g=function(){i?u():v()};t.addPolyfill("mediaelement-yt",{test:!f,d:["dom-support"]}),d.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},d.mimeTypes.source=e.extend({},d.mimeTypes.audio,d.mimeTypes.video),d.getTypeForSrc=function(t,n){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return n+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var i;return e.each(d.mimeTypes[n],function(e,n){return-1!==n.indexOf(t)?(i=e,!1):p}),i},d.srces=function(t,n){if(t=e(t),!n){n=[];var i=t[0].nodeName.toLowerCase(),a=h(t,i);return a.src?n.push(a):e("source",t).each(function(){a=h(this,i),a.src&&n.push(a)}),n}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(n)||(n=[n]),n.forEach(function(n){"string"==typeof n&&(n={src:n}),t.append(e(s.createElement("source")).attr(n))})},e.fn.loadMediaSrc=function(t,n){return this.each(function(){n!==p&&(e(this).removeAttr("poster"),n&&e.attr(this,"poster",n)),d.srces(this,t),e(this).mediaLoad()})},d.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],d.canThirdPlaySrces=function(t,n){var a="";return(i||f)&&(t=e(t),n=n||d.srces(t),e.each(n,function(e,t){return t.container&&t.src&&(i&&-1!=d.swfMimeTypes.indexOf(t.container)||f&&"video/youtube"==t.container)?(a=t,!1):p})),a};var y={};d.canNativePlaySrces=function(t,n){var i="";if(r){t=e(t);var a=(t[0].nodeName||"").toLowerCase(),o=(y[a]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return i;n=n||d.srces(t),e.each(n,function(e,n){return n.type&&o.call(t[0],n.type)?(i=n,!1):p})}return i};var b=/^\s*application\/octet\-stream\s*$/i,w=function(){var t=b.test(e.attr(this,"type")||"");
return t&&e(this).removeAttr("type"),t};d.setError=function(n,i){if(e("source",n).filter(w).length){t.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(n).mediaLoad()}catch(a){}}else i||(i="can't play sources"),e(n).pause().data("mediaerror",i),t.error("mediaelementError: "+i),setTimeout(function(){e(n).data("mediaerror")&&e(n).trigger("mediaerror")},1)};var x=function(){var e;return function(n,a,r){t.ready(i?l:"mediaelement-yt",function(){d.createSWF?d.createSWF(n,a,r):e||(e=!0,g(),x(n,a,r))}),e||!f||d.createSWF||v()}}(),T=function(e,t,n,i,a){var r;n||n!==!1&&t&&"third"==t.isActive?(r=d.canThirdPlaySrces(e,i),r?x(e,r,t):a?d.setError(e,!1):T(e,t,!1,i,!0)):(r=d.canNativePlaySrces(e,i),r?t&&"third"==t.isActive&&d.setActive(e,"html5",t):a?(d.setError(e,!1),t&&"third"==t.isActive&&d.setActive(e,"html5",t)):T(e,t,!0,i,!0))},N=/^(?:embed|object|datalist)$/i,E=function(n,i){var a=t.data(n,"mediaelementBase")||t.data(n,"mediaelementBase",{}),r=d.srces(n),o=n.parentNode;clearTimeout(a.loadTimer),e.data(n,"mediaerror",!1),r.length&&o&&1==o.nodeType&&!N.test(o.nodeName||"")&&(i=i||t.data(n,"mediaelement"),d.sortMedia&&r.sort(d.sortMedia),T(n,i,c.preferFlash||p,r))};d.selectSource=E,e(s).on("ended",function(n){var i=t.data(n.target,"mediaelement");(!o||i&&"html5"!=i.isActive||e.prop(n.target,"loop"))&&setTimeout(function(){!e.prop(n.target,"paused")&&e.prop(n.target,"loop")&&e(n.target).prop("currentTime",0).play()},1)});var A=!1,k=function(){var s=function(){if(t.implement(this,"mediaelement")&&(E(this),r&&(!o||"ActiveXObject"in a))){var n,i,s=this,l=function(){var t=e.prop(s,"buffered");if(t){for(var n="",i=0,a=t.length;a>i;i++)n+=t.end(i);return n}},u=function(){var n=l();n!=i&&(i=n,t.info("needed to trigger progress manually"),e(s).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(i=l()),clearTimeout(n),n=setTimeout(u,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(i=!1),clearTimeout(n)}}),"ActiveXObject"in a&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&e(this).prop("preload","metadata").mediaLoad()}};t.ready("dom-support",function(){A=!0,o||t.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(n){var a=t.defineNodeNameProperty(n,"load",{prop:{value:function(){var e=t.data(this,"mediaelement");E(this,e),!r||e&&"html5"!=e.isActive||!a.prop._supvalue||a.prop._supvalue.apply(this,arguments)}}});y[n]=t.defineNodeNameProperty(n,"canPlayType",{prop:{value:function(t){var a="";return r&&y[n].prop._supvalue&&(a=y[n].prop._supvalue.call(this,t),"no"==a&&(a="")),!a&&i&&(t=e.trim((t||"").split(";")[0]),-1!=d.swfMimeTypes.indexOf(t)&&(a="maybe")),a}}})}),t.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,n=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{});clearTimeout(n.loadTimer),n.loadTimer=setTimeout(function(){E(e),e=null},9)}}),t.addReady(function(t,n){var i=e("video, audio",t).add(n.filter("video, audio")).each(s);!m.loaded&&e("track",i).length&&m(),i=null})}),r&&!A&&t.addReady(function(i,a){A||e("video, audio",i).add(a.filter("video, audio")).each(function(){return d.canNativePlaySrces(this)?(n&&!t.modules.track.options.override||m.loaded||!e("track",this).length||m(),p):(g(),A=!0,!1)})})};n&&t.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),r?(t.isReady("mediaelement-core",!0),k(),t.ready("WINDOWLOAD mediaelement",g)):t.ready(l,k),t.ready("track",m)})}(Modernizr,webshims);