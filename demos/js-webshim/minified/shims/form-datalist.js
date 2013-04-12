jQuery.webshims.register("form-datalist",function(e,t,i,n,a,r){"use strict";t.propTypes.element=function(i){t.createPropDefault(i,"attr"),i.prop||(i.prop={get:function(){var t=e.attr(this,"list");return t&&(t=n.getElementById(t),t&&i.propNodeName&&!e.nodeName(t,i.propNodeName)&&(t=null)),t||null},writeable:!1})},function(){var o=e.webshims.cfg.forms,s=Modernizr.input.list;if(!s||o.customDatalist){var u=function(){s||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var i,n=this,a=e("select",n);return a[0]?i=a[0].options:(i=e("option",n).get(),i.length&&t.warn("you should wrap your option-elements for a datalist in a select element to support IE and other old browsers.")),i}}});var i={autocomplete:{attr:{get:function(){var t=this,i=e.data(t,"datalistWidget");return i?i._autocomplete:"autocomplete"in t?t.autocomplete:t.getAttribute("autocomplete")},set:function(t){var i=this,n=e.data(i,"datalistWidget");n?(n._autocomplete=t,"off"==t&&n.hideList()):"autocomplete"in i?i.autocomplete=t:i.setAttribute("autocomplete",t)}}}};!o.customDatalist||s&&"selectedOption"in e("<input />")[0]||(i.selectedOption={prop:{writeable:!1,get:function(){var t,i,n=this,r=e.prop(n,"list"),o=null;return r?(t=e.prop(n,"value"))?(i=e.prop(r,"options"),i.length?(e.each(i,function(i,n){return t==e.prop(n,"value")?(o=n,!1):a}),o):o):o:o}}}),s?((e("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var t=this.options||[];if(!t.length){var i=this,n=e("select",i);n[0]&&n[0].options&&n[0].options.length&&(t=n[0].options)}return t}}}),i.list={attr:{get:function(){var i=t.contentAttr(this,"list");return null!=i?(e.data(this,"datalistListAttr",i),this.removeAttribute("list")):i=e.data(this,"datalistListAttr"),null==i?a:i},set:function(i){var n=this;e.data(n,"datalistListAttr",i),t.objectCreate(m,a,{input:n,id:i,datalist:e.prop(n,"list")}),e(n).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):i.list={attr:{get:function(){var e=t.contentAttr(this,"list");return null==e?a:e},set:function(i){var n=this;t.contentAttr(n,"list",i),t.objectCreate(m,a,{input:n,id:i,datalist:e.prop(n,"list")}),e(n).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"},t.defineNodeNameProperties("input",i),t.addReady(function(t,i){i.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(function(){e(this).triggerHandler("updateDatalist")})})},l=0,p={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};t.modules["form-number-date-ui"].loaded&&e.extend(p,{number:1,time:1});var c={},d=function(e){if(!e)return[];if(c[e])return c[e];var t;try{t=JSON.parse(localStorage.getItem("storedDatalistOptions"+e))}catch(i){}return c[e]=t||[],t||[]},h=function(e,t){if(e){t=t||[];try{localStorage.setItem("storedDatalistOptions"+e,JSON.stringify(t))}catch(i){}}},f=function(t){return t.textContent||t.innerText||e.text([t])||""},m={_create:function(n){if(!p[e.prop(n.input,"type")]&&!p[e.attr(n.input,"type")]){var s=n.datalist,u=e.data(n.input,"datalistWidget");if(s&&u&&u.datalist!==s)return u.datalist=s,u.id=n.id,e(u.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(u,"_resetListCached")),u._resetListCached(),a;if(!s)return u&&u.destroy(),a;if(!u||u.datalist!==s){l++;var c=this;this.hideList=e.proxy(c,"hideList"),this.datalist=s,this.id=n.id,this.hasViewableData=!0,this._autocomplete=e.attr(n.input,"autocomplete"),e.data(n.input,"datalistWidget",this),this.popover=t.objectCreate(t.wsPopover,{},r.datalistPopover),this.shadowList=this.popover.element.addClass("datalist-polyfill"),this.index=-1,this.input=n.input,this.arrayOptions=[],this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(t){var i=e("li:not(.hidden-item)",c.shadowList),a="mousedown"==t.type||"click"==t.type;return c.markItem(i.index(t.currentTarget),a,i),"click"==t.type&&(c.hideList(),o.customDatalist&&e(n.input).getNativeElement().trigger("datalistselect")),"mousedown"!=t.type}),n.input.setAttribute("autocomplete","off"),e(n.input).attr({"aria-haspopup":"true"}).on({"input.datalistWidget":function(){c.triggeredByDatalist||(c.changedValue=!1,c.showHideOptions())},"keydown.datalistWidget":function(t){var i,r,s=t.keyCode;return 40!=s||c.showList()?c.popover.isVisible?38==s?(c.markItem(c.index-1,!0),!1):t.shiftKey||33!=s&&36!=s?t.shiftKey||34!=s&&35!=s?13==s||27==s?(13==s&&(i=e("li.active-item:not(.hidden-item)",c.shadowList),c.changeValue(e("li.active-item:not(.hidden-item)",c.shadowList))),c.hideList(),o.customDatalist&&i&&i[0]&&e(n.input).getNativeElement().trigger("datalistselect"),!1):a:(r=e("li:not(.hidden-item)",c.shadowList),c.markItem(r.length-1,!0,r),!1):(c.markItem(0,!0),!1):a:(c.markItem(c.index+1,!0),!1)},"focus.datalistWidget":function(){e(this).hasClass("list-focus")&&c.showList()},"mousedown.datalistWidget":function(){e(this).is(":focus")&&c.showList()}}),e(this.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(this,"_resetListCached")),this._resetListCached(),n.input.form&&(n.input.name||n.input.id)&&e(n.input.form).on("submit.datalistWidget"+n.input.id,function(){if(!e(n.input).hasClass("no-datalist-cache")&&"off"!=c._autocomplete){var t=e.prop(n.input,"value"),i=(n.input.name||n.input.id)+e.prop(n.input,"type");c.storedOptions||(c.storedOptions=d(i)),t&&-1==c.storedOptions.indexOf(t)&&(c.storedOptions.push(t),h(i,c.storedOptions))}}),e(i).on("unload.datalist"+this.id+" beforeunload.datalist"+this.id,function(){c.destroy()})}}},destroy:function(){var t=e.attr(this.input,"autocomplete");e(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),e(n).off(".datalist"+this.id),e(i).off(".datalist"+this.id),this.input.form&&this.input.id&&e(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),t===a?this.input.removeAttribute("autocomplete"):e(this.input).attr("autocomplete",t)},_resetListCached:function(){var n,a=this;this.needsUpdate=!0,this.lastUpdatedValue=!1,this.lastUnfoundValue="",this.updateTimer||(i.QUnit||(n=e(a.input).is(":focus")&&(e(a.input).hasClass("list-focus")||e.prop(a.input,"value")))?a.updateListOptions(n):t.ready("WINDOWLOAD",function(){a.updateTimer=setTimeout(function(){a.updateListOptions(),a=null,l=1},200+100*l)}))},maskHTML:function(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")},updateListOptions:function(t){this.needsUpdate=!1,clearTimeout(this.updateTimer),this.updateTimer=!1,this.searchStart=o.customDatalist&&e(this.input).hasClass("search-start");var i,n,a,r,s,u,l=[],p=[],c=[];for(a=e.prop(this.datalist,"options"),r=0,s=a.length;s>r;r++){if(i=a[r],i.disabled)return;n={value:e(i).val()||"",text:e.trim(e.attr(i,"label")||f(i)),className:i.className||""},n.text&&(n.className+=" has-option-label"),p[r]=n.value,c[r]=n}for(this.storedOptions||(this.storedOptions=e(this.input).hasClass("no-datalist-cache")||"off"==this._autocomplete?[]:d((this.input.name||this.input.id)+e.prop(this.input,"type"))),this.storedOptions.forEach(function(e){-1==p.indexOf(e)&&c.push({value:e,text:e,className:"stored-suggest",style:""})}),r=0,s=c.length;s>r;r++)u=c[r],l[r]='<li class="'+u.className+'" tabindex="-1" role="listitem"><span class="option-value">'+this.maskHTML(u.value,"value",u)+'</span> <span class="option-label">'+this.maskHTML(u.text,"label",u)+"</span></li>";this.arrayOptions=c,this.popover.contentElement.html('<div class="datalist-box"><ul role="list">'+l.join("\n")+"</ul></div>"),(t||this.popover.isVisible)&&this.showHideOptions()},showHideOptions:function(t){var i=e.prop(this.input,"value").toLowerCase();if(i!==this.lastUpdatedValue){if(this.lastUnfoundValue&&0===i.indexOf(this.lastUnfoundValue))return this.hideList(),a;this.lastUpdatedValue=i;var n=!1,r=this.searchStart,o=e("li",this.shadowList);i?this.arrayOptions.forEach(function(t,a){var s;"lowerText"in t||(t.lowerText=t.text&&t.text!=t.value?t.value.toLowerCase()+"A"+t.text.toLowerCase():t.value.toLowerCase()),s=i==t.lowerText||t.value==i||t.text==i?-1:t.lowerText.indexOf(i),s=r?!s:-1!==s,s?(e(o[a]).removeClass("hidden-item"),n=!0):e(o[a]).addClass("hidden-item")}):o.length&&(o.removeClass("hidden-item"),n=!0),this.hasViewableData=n,!t&&n&&this.showList(),n?this.lastUnfoundValue=!1:(this.lastUnfoundValue=i,this.hideList())}},showList:function(){if(this.popover.isVisible)return!1;if(this.needsUpdate&&this.updateListOptions(),this.showHideOptions(!0),!this.hasViewableData)return!1;var e=this;return e.shadowList.find("li.active-item").removeClass("active-item"),e.popover.show(this.input),!0},hideList:function(){if(!this.popover.isVisible)return!1;var t=this;return this.popover.hide(),t.shadowList.removeClass("datalist-visible list-item-active"),t.index=-1,t.changedValue&&(t.triggeredByDatalist=!0,e(t.input).trigger("input").trigger("change"),t.changedValue=!1,t.triggeredByDatalist=!1),!0},scrollIntoView:function(t){var i,n=e("ul",this.shadowList),r=e("div.datalist-box",this.shadowList),o=t.position();return o.top-=(parseInt(n.css("paddingTop"),10)||0)+(parseInt(n.css("marginTop"),10)||0)+(parseInt(n.css("borderTopWidth"),10)||0),0>o.top?(r.scrollTop(r.scrollTop()+o.top-2),a):(o.top+=t.outerHeight(),i=r.height(),o.top>i&&r.scrollTop(r.scrollTop()+(o.top-i)+2),a)},changeValue:function(t){if(t[0]){var i,n=e("span.option-value",t).text(),a=e.prop(this.input,"value");n!=a&&(e(this.input).prop("value",n).triggerHandler("updateInput"),this.changedValue=!0,(i=e.data(this.input,"wsspinner"))&&i.setInput&&i.setInput(n))}},markItem:function(t,i,n){var a;n=n||e("li:not(.hidden-item)",this.shadowList),n.length&&(0>t?t=n.length-1:t>=n.length&&(t=0),n.removeClass("active-item"),this.shadowList.addClass("list-item-active"),a=n.filter(":eq("+t+")").addClass("active-item"),i&&(this.changeValue(a),this.scrollIntoView(a)),this.index=t)}};u()}}()});