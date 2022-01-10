/**
 * skylark-domx-plugins-tablegrids - The skylark tablegrid plugin library.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-domx-plugins/skylark-domx-plugins-tablegrids/
 * @license MIT
 */
!function(e,t){var n=t.define,require=t.require,o="function"==typeof n&&n.amd,r=!o&&"undefined"!=typeof exports;if(!o&&!n){var l={};n=t.define=function(e,t,n){"function"==typeof n?(l[e]={factory:n,deps:t.map(function(t){return function(e,t){if("."!==e[0])return e;var n=t.split("/"),o=e.split("/");n.pop();for(var r=0;r<o.length;r++)"."!=o[r]&&(".."==o[r]?n.pop():n.push(o[r]));return n.join("/")}(t,e)}),resolved:!1,exports:null},require(e)):l[e]={factory:null,resolved:!0,exports:n}},require=t.require=function(e){if(!l.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var module=l[e];if(!module.resolved){var n=[];module.deps.forEach(function(e){n.push(require(e))}),module.exports=module.factory.apply(t,n)||null,module.resolved=!0}return module.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,require){e("skylark-domx-plugins-tablegrids/table-grid",["skylark-langx","skylark-domx/query"],function(e,t){var n={caption:null,captionTooltip:null,initRows:3,maxRowsAllowed:0,initData:null,columns:null,i18n:null,idPrefix:null,rowDragging:!1,hideButtons:null,hideRowNumColumn:!1,rowButtonsInFront:!1,rowCountName:"_RowCount",buttonClasses:null,sectionClasses:null,customGridButtons:null,customRowButtons:null,customFooterButtons:null,useSubPanel:!1,maintainScroll:!1,maxBodyHeight:0,autoColumnWidth:!0},o={nameFormatter:null,dataLoaded:null,rowDataLoaded:null,afterRowAppended:null,afterRowInserted:null,afterRowSwapped:null,beforeRowRemove:null,afterRowRemoved:null,afterRowDragged:null,subPanelBuilder:null,subPanelGetter:null,maxNumRowsReached:null},r={type:"text",name:null,value:null,display:null,displayCss:null,displayTooltip:null,headerSpan:1,cellCss:null,ctrlAttr:null,ctrlProp:null,ctrlCss:null,ctrlClass:null,ctrlOptions:null,uiOption:null,uiTooltip:null,resizable:!1,invisible:!1,emptyCriteria:null,customBuilder:null,customGetter:null,customSetter:null,onClick:null,onChange:null},l={noColumnInfo:"Cannot initial grid without column information!",elemNotTable:"Cannot initial grid on element other than TABLE!",notInit:"`appendGrid` does not initialized",getValueMultiGrid:"Cannot get values on multiple grid",notSupportMethod:"Method is not supported by `appendGrid`: "},i={append:"Append Row",removeLast:"Remove Last Row",insert:"Insert Row Above",remove:"Remove Current Row",moveUp:"Move Up",moveDown:"Move Down",rowDrag:"Sort Row",rowEmpty:"This Grid Is Empty"},a={append:null,removeLast:null,insert:null,remove:null,moveUp:null,moveDown:null,rowDrag:null},s={caption:null,header:null,body:null,subPanel:null,footer:null},u={append:!1,removeLast:!1,insert:!1,remove:!1,moveUp:!1,moveDown:!1},d={init:function(d){if(this.length>0){if(!e.isArray(d.columns)||0==d.columns.length)return alert(l.noColumnInfo),this;var c,f,w,_,g,x,y,O=this[0];if(b(O.tagName)||"TABLE"!=O.tagName)return alert(l.elemNotTable),this;var R,P,S=e.extend({},n,o,d);e.extend(S,{_uniqueIndex:0,_rowOrder:[],_isDataLoaded:!1,_visibleCount:0,_finalColSpan:0,_hideLastColumn:!1,_wrapperId:null,_calculateWidth:!0}),e.isPlainObject(d.i18n)?S._i18n=e.extend({},i,d.i18n):S._i18n=e.extend({},i),e.isPlainObject(d.buttonClasses)?S._buttonClasses=e.extend({},a,d.buttonClasses):S._buttonClasses=e.extend({},a),e.isPlainObject(d.sectionClasses)?S._sectionClasses=e.extend({},s,d.sectionClasses):S._sectionClasses=e.extend({},s),e.isPlainObject(d.hideButtons)?S.hideButtons=e.extend({},u,d.hideButtons):S.hideButtons=e.extend({},u),b(S.idPrefix)&&(b(O.id)||""==O.id?S.idPrefix="ag"+(new Date).getTime():S.idPrefix=O.id),e.isPlainObject(S.customGridButtons)||(S.customGridButtons={}),S.useSubPanel&&S.rowDragging&&(S.rowDragging=!1),(f=document.createElement("thead")).className="ui-widget-header",(w=document.createElement("tbody")).className="ui-widget-content",(_=document.createElement("tfoot")).className="ui-widget-header",g=document.createElement("colgroup"),S._wrapperId=S.idPrefix+"-wrapper",c=document.createElement("div"),t(c).attr("id",S._wrapperId).addClass("appendGrid").insertAfter(O),t(O).empty().addClass("ui-widget").appendTo(c),t(O).addClass("head body foot").append(g,f,w,_),S.maxBodyHeight>0&&t(w).css("max-height",S.maxBodyHeight),f.appendChild(x=document.createElement("tr")),S._sectionClasses.header?x.className="columnHead "+S._sectionClasses.header:x.className="columnHead",S.hideRowNumColumn||(x.appendChild(R=document.createElement("td")),R.className="ui-widget-header first",g.appendChild(document.createElement("col")));for(var k=0,N=0;N<S.columns.length;N++){var E=e.extend({},r,S.columns[N]);if(S.columns[N]=E,"hidden"!=S.columns[N].type)if(S.columns[N].invisible||S._visibleCount++,0==k){var I="ui-widget-header";S.columns[N].invisible&&(I+=" invisible"),S.columns[N].resizable&&(I+=" resizable"),x.appendChild(y=document.createElement("td")),y.id=S.idPrefix+"_"+S.columns[N].name+"_td_head",y.className=I,S.columns[N].displayCss&&t(y).css(S.columns[N].displayCss),S.columns[N].headerSpan>1&&(t(y).attr("colSpan",S.columns[N].headerSpan),k=S.columns[N].headerSpan-1),e.isPlainObject(S.columns[N].displayTooltip)||b(S.columns[N].displayTooltip)||t(y).attr("title",S.columns[N].displayTooltip),e.isFunction(S.columns[N].display)?S.columns[N].display(y):b(S.columns[N].display)||t(y).text(S.columns[N].display),g.appendChild(document.createElement("col"))}else k--}if(S.hideButtons.insert&&S.hideButtons.remove&&S.hideButtons.moveUp&&S.hideButtons.moveDown&&(!e.isArray(S.customRowButtons)||0==S.customRowButtons.length)&&(S._hideLastColumn=!0),S._finalColSpan=S._visibleCount,S.hideRowNumColumn||S._finalColSpan++,S._hideLastColumn||S._finalColSpan++,S._hideLastColumn||(S.rowButtonsInFront?S.hideRowNumColumn?x.insertBefore(P=document.createElement("td"),x.firstChild):x.insertBefore(P=document.createElement("td"),x.childnodes[1]):x.appendChild(P=document.createElement("td")),P.className="ui-widget-header last",P.id=S.idPrefix+"_last_td_head",g.appendChild(document.createElement("col"))),S.caption&&(f.insertBefore(x=document.createElement("tr"),f.firstChild),S._sectionClasses.caption&&(x.className=S._sectionClasses.caption),x.appendChild(y=document.createElement("td")),y.id=S.idPrefix+"_caption_td",y.className="ui-state-active caption",y.colSpan=S._finalColSpan,e.isPlainObject(S.captionTooltip)||b(S.captionTooltip)||t(y).attr("title",S.captionTooltip),e.isFunction(S.caption)?S.caption(y):t(y).text(S.caption)),_.appendChild(x=document.createElement("tr")),S._sectionClasses.footer&&(x.className=S._sectionClasses.footer),x.appendChild(y=document.createElement("td")),y.id=S.idPrefix+"_footer_td",y.colSpan=S._finalColSpan,t("<input/>").attr({type:"hidden",id:S.idPrefix+"_rowOrder",name:S.idPrefix+"_rowOrder"}).appendTo(y),!S.hideButtons.append||!S.hideButtons.removeLast||e.isArray(S.customFooterButtons)&&0!=S.customFooterButtons.length){if(!S.hideButtons.append){var D=B(S.customGridButtons.append,"ui-icon-plusthick").attr({title:S._i18n.append}).addClass("append").click(function(e){return m(O,1,null,null),e&&e.preventDefault&&e.preventDefault(),!1}).appendTo(y);b(S._buttonClasses.append)||D.addClass(S._buttonClasses.append)}if(!S.hideButtons.removeLast){var D=B(S.customGridButtons.removeLast,"ui-icon-closethick").attr({title:S._i18n.removeLast}).addClass("removeLast").click(function(e){return h(O,null,this.value,!1),e&&e.preventDefault&&e.preventDefault(),!1}).appendTo(y);b(S._buttonClasses.removeLast)||D.addClass(S._buttonClasses.removeLast)}if(S.customFooterButtons&&S.customFooterButtons.length){for(var G=S.customFooterButtons.length-1;G>=0;G--){var F=S.customFooterButtons[G];F&&F.uiButton&&F.click&&F.atTheFront&&t(y).prepend(p(O,F))}for(var G=0;G<S.customFooterButtons.length;G++){var F=S.customFooterButtons[G];F&&F.uiButton&&F.click&&!F.atTheFront&&t(y).append(p(O,F))}}}else x.style.display="none";S.rowDragging,t(O).data("appendGrid",S),e.isArray(d.initData)?C(O,d.initData,!0):t(O).appendGrid("appendRow",S.initRows),0==S._rowOrder.length&&v(c,S,!0)}return this},isReady:function(){var e=c(this,!0);return!!e},isDataLoaded:function(){var e=c(this);return!!e&&e._isDataLoaded},load:function(e){var t=c(this);return t&&(null!=e&&e.length>0?C(this[0],e,!1):w(this[0])),this},appendRow:function(e){return this.appendGrid("insertRow",e)},insertRow:function(n,o,r){var l=c(this);if(l&&(e.isArray(n)&&n.length>0||e.isNumeric(n)&&n>0)){var i=this[0];if(insertResult=m(i,n,o,r),e.isNumeric(o)||e.isNumeric(r)){_(i,insertResult.rowIndex);var a=l._rowOrder[insertResult.addedRows[0]];t("#"+l.idPrefix+"_Insert_"+a,i).focus()}}return this},removeRow:function(e,t){var n=c(this);return n&&n._rowOrder.length>0&&h(this[0],e,t,!0),this},emptyGrid:function(){var e=c(this);return e&&w(this[0]),target},moveUpRow:function(n,o){var r=c(this);if(r){var l,i,a,s,u=this[0],d=null,m=u.getElementsByTagName("tbody")[0];e.isNumeric(n)&&n>0&&n<r._rowOrder.length?(d=n,o=r._rowOrder[n]):e.isNumeric(o)&&(d=g(o,r)),null!=d&&d>0&&(l=document.getElementById(r.idPrefix+"_Row_"+o,u),i=document.getElementById(r.idPrefix+"_Row_"+r._rowOrder[d-1],u),r.useSubPanel&&(a=document.getElementById(r.idPrefix+"_SubRow_"+o,u)),m.removeChild(l),r.useSubPanel&&m.removeChild(a),m.insertBefore(l,i),r.useSubPanel&&m.insertBefore(a,i),r._rowOrder[d]=r._rowOrder[d-1],r._rowOrder[d-1]=o,s=t("td.first",i).html(),t("td.first",i).html(t("td.first",l).html()),t("td.first",l).html(s),x(u,r),t("td.last button.moveUp",l).removeClass("ui-state-hover").blur(),t("td.last button.moveUp",i).focus(),r.afterRowSwapped&&r.afterRowSwapped(u,d,d-1))}return this},moveDownRow:function(n,o){var r=c(this);if(r){var l,i,a,s,u=this[0],d=null,m=u.getElementsByTagName("tbody")[0];e.isNumeric(n)&&n>=0&&n<r._rowOrder.length-1?(d=n,o=r._rowOrder[n]):e.isNumeric(o)&&(d=g(o,r)),null!=d&&d!=r._rowOrder.length-1&&(l=document.getElementById(r.idPrefix+"_Row_"+o,u),i=document.getElementById(r.idPrefix+"_Row_"+r._rowOrder[d+1],u),r.useSubPanel&&(a=document.getElementById(r.idPrefix+"_SubRow_"+r._rowOrder[d+1],u)),m.removeChild(i),m.insertBefore(i,l),r.useSubPanel&&m.insertBefore(a,l),r._rowOrder[d]=r._rowOrder[d+1],r._rowOrder[d+1]=o,s=t("td.first",i).html(),t("td.first",i).html(t("td.first",l).html()),t("td.first",l).html(s),x(u,r),t("td.last button.moveDown",l).removeClass("ui-state-hover").blur(),t("td.last button.moveDown",i).focus(),r.afterRowSwapped&&r.afterRowSwapped(u,d,d+1))}return this},showColumn:function(e){var n=c(this);if(n&&e){for(var o=-1,r=this[0],l=0;l<n.columns.length;l++)if(n.columns[l].name==e){o=l;break}if(-1!=o&&n.columns[o].invisible){n._visibleCount++,n._finalColSpan++,t("#"+n.idPrefix+"_caption_td").attr("colSpan",n._finalColSpan),t("#"+n.idPrefix+"_footer_td").attr("colSpan",n._finalColSpan),t("#"+n.idPrefix+"_"+e+"_td_head").removeClass("invisible");for(var l=0;l<n._rowOrder.length;l++){var i=n._rowOrder[l];t("#"+n.idPrefix+"_"+e+"_td_"+i).removeClass("invisible"),n.useSubPanel&&t("#"+n.idPrefix+"_SubRow_"+i).attr("colSpan",n._visibleCount+(n._hideLastColumn?0:1))}n.columns[o].invisible=!1,x(r,n)}}return this},hideColumn:function(e){var n=c(this);if(n&&e){for(var o=-1,r=this[0],l=0;l<n.columns.length;l++)if(n.columns[l].name==e){o=l;break}if(-1!=o&&!n.columns[o].invisible){n._visibleCount--,n._finalColSpan--,t("#"+n.idPrefix+"_caption_td").attr("colSpan",n._finalColSpan),t("#"+n.idPrefix+"_footer_td").attr("colSpan",n._finalColSpan),t("#"+n.idPrefix+"_"+e+"_td_head").addClass("invisible");for(var l=0;l<n._rowOrder.length;l++){var i=n._rowOrder[l];t("#"+n.idPrefix+"_"+e+"_td_"+i).addClass("invisible"),n.useSubPanel&&t("#"+n.idPrefix+"_SubRow_"+i).attr("colSpan",n._visibleCount+(n._hideLastColumn?0:1))}n.columns[o].invisible=!0,x(r,n)}}return this},isColumnInvisible:function(e){var t=c(this);if(t&&e)for(var n=0;n<t.columns.length;n++)if(t.columns[n].name==e)return t.columns[n].invisible;return null},getRowCount:function(){var e=c(this);return e?e._rowOrder.length:null},getUniqueIndex:function(t){var n=c(this);return n&&e.isNumeric(t)&&t<n._rowOrder.length?n._rowOrder[t]:null},getRowIndex:function(t){var n=c(this);if(n&&e.isNumeric(t))for(var o=0;o<n._rowOrder.length;o++)if(n._rowOrder[o]==t)return o;return null},getRowValue:function(t,n,o){var r=c(this),l=null;return r&&(e.isNumeric(t)&&t>=0&&t<r._rowOrder.length&&(n=r._rowOrder[t]),b(n)||(l=y(r,n,o))),l},getAllValue:function(t){var n=c(this),o=null;if(n){o=t?{}:[];for(var r=0;r<n._rowOrder.length;r++)t?(rowValue=y(n,n._rowOrder[r],r),e.extend(o,rowValue)):(rowValue=y(n,n._rowOrder[r]),o.push(rowValue));t&&(o[n.rowCountName]=n._rowOrder.length)}return o},getCtrlValue:function(e,t){var n=c(this);if(n&&t>=0&&t<n._rowOrder.length)for(var o=0;o<n.columns.length;o++)if(n.columns[o].name===e)return O(n,o,n._rowOrder[t]);return null},setCtrlValue:function(e,t,n){var o=c(this);if(o&&t>=0&&t<o._rowOrder.length)for(var r=0;r<o.columns.length;r++)if(o.columns[r].name==e){P(o,r,o._rowOrder[t],n);break}return this},getCellCtrl:function(e,t){var n=c(this);if(n&&t>=0&&t<n._rowOrder.length)for(var o=n._rowOrder[t],r=0;r<n.columns.length;r++)if(n.columns[r].name===e)return R(n.columns[r].type,n.idPrefix,e,o);return null},getCellCtrlByUniqueIndex:function(e,t){var n=c(this);if(n)for(var o=0;o<n.columns.length;o++)if(n.columns[o].name===e)return R(n.columns[o].type,n.idPrefix,e,t);return null},getRowOrder:function(){var e=c(this);return e?e._rowOrder.slice():null},getColumns:function(){var e=c(this);return e?e.columns.slice():null},isRowEmpty:function(e){var t=c(this);return t?S(t,e):null},removeEmptyRows:function(){var e=c(this);if(e){for(var t=this[0],n=e._rowOrder.length;n>=0;n--)S(e,n)&&h(t,null,e._rowOrder[n],!0);return this}return null}};function c(e,t){var n=null;return 1==e.length?(n=e.data("appendGrid"))||t||alert(l.notInit):t||alert(l.getValueMultiGrid),n}function m(n,o,r,l){var i,a,s,u,d=t(n).data("appendGrid"),c=[],m=null,p=[],v=(n.getElementsByTagName("thead")[0],n.getElementsByTagName("tbody")[0]),w=null,_=!1,C=0,g=0,y=o,O=!1;if(e.isArray(o)&&(y=o.length,O=!0),e.isNumeric(l)){for(var R=0;R<d._rowOrder.length;R++)if(d._rowOrder[R]==l){r=R,0!=R&&(m=R-1);break}}else e.isNumeric(r)?r>=d._rowOrder.length?r=null:m=r-1:0!=d._rowOrder.length&&(r=null,m=d._rowOrder.length-1);d.maintainScroll&&!e.isNumeric(r)&&(C=t(n).height(),g=t(n).scrollParent().scrollTop()),0==d._rowOrder.length&&t("tr.empty",n).remove();for(var R=0;R<y;R++){if(0<d.maxRowsAllowed&&d._rowOrder.length>=d.maxRowsAllowed){_=!0;break}d._uniqueIndex++,i=d._uniqueIndex,p.length=0,e.isNumeric(r)?(d._rowOrder.splice(r,0,i),d.useSubPanel?(v.insertBefore(w=document.createElement("tr"),v.childNodes[2*r]),v.insertBefore(s=document.createElement("tr"),v.childNodes[2*r])):v.insertBefore(s=document.createElement("tr"),v.childNodes[r]),c.push(r)):(d._rowOrder.push(i),v.appendChild(s=document.createElement("tr")),d.useSubPanel&&v.appendChild(w=document.createElement("tr")),c.push(d._rowOrder.length-1)),s.id=d.idPrefix+"_Row_"+i,d._sectionClasses.body&&(s.className=d._sectionClasses.body),t(s).data("appendGrid",i),null!=w&&(w.id=d.idPrefix+"_SubRow_"+i,t(w).data("appendGrid",i),d._sectionClasses.subPanel&&(w.className=d._sectionClasses.subPanel)),d.hideRowNumColumn||(s.appendChild(u=document.createElement("td")),t(u).addClass("ui-widget-content first").text(d._rowOrder.length),d.useSubPanel&&(u.rowSpan=2));for(var S=0;S<d.columns.length;S++)if("hidden"!=d.columns[S].type){var k="ui-widget-content";d.columns[S].invisible&&(k+=" invisible"),s.appendChild(u=document.createElement("td")),u.id=d.idPrefix+"_"+d.columns[S].name+"_td_"+i,u.className=k,null!=d.columns[S].cellCss&&t(u).css(d.columns[S].cellCss);var N,E=d.idPrefix+"_"+d.columns[S].name+"_"+i;if(N=e.isFunction(d.nameFormatter)?d.nameFormatter(d.idPrefix,d.columns[S].name,i):E,a=null,"custom"==d.columns[S].type)e.isFunction(d.columns[S].customBuilder)&&(a=d.columns[S].customBuilder(u,d.idPrefix,d.columns[S].name,i));else if("select"==d.columns[S].type||"ui-selectmenu"==d.columns[S].type){if((a=document.createElement("select")).id=E,a.name=N,e.isArray(d.columns[S].ctrlOptions)){if(d.columns[S].ctrlOptions.length>0)if(e.isPlainObject(d.columns[S].ctrlOptions[0]))for(var I=null,D=null,G=0;G<d.columns[S].ctrlOptions.length;G++){b(d.columns[S].ctrlOptions[G].group)?D=null:I!=d.columns[S].ctrlOptions[G].group&&(I=d.columns[S].ctrlOptions[G].group,(D=document.createElement("optgroup")).label=I,a.appendChild(D));var F=t("<option/>").val(d.columns[S].ctrlOptions[G].value).text(d.columns[S].ctrlOptions[G].label);b(d.columns[S].ctrlOptions[G].title)||F.attr("title",d.columns[S].ctrlOptions[G].title),null==D?F.appendTo(a):F.appendTo(D)}else for(var G=0;G<d.columns[S].ctrlOptions.length;G++)a.options[a.options.length]=new Option(d.columns[S].ctrlOptions[G],d.columns[S].ctrlOptions[G])}else if(e.isPlainObject(d.columns[S].ctrlOptions))for(var G in d.columns[S].ctrlOptions)a.options[a.options.length]=new Option(d.columns[S].ctrlOptions[G],G);else if("string"==typeof d.columns[S].ctrlOptions)for(var T=d.columns[S].ctrlOptions.split(";"),G=0;G<T.length;G++){var L=T[G].indexOf(":");a.options[a.options.length]=-1==L?new Option(T[G],T[G]):new Option(T[G].substring(L+1,T[G].length),T[G].substring(0,L))}else e.isFunction(d.columns[S].ctrlOptions)&&d.columns[S].ctrlOptions(a);u.appendChild(a),"ui-selectmenu"==d.columns[S].type&&t(a).selectmenu(d.columns[S].uiOption)}else if("checkbox"==d.columns[S].type)(a=document.createElement("input")).type="checkbox",a.id=E,a.name=N,a.value=1,u.appendChild(a),u.style.textAlign="center";else if("textarea"==d.columns[S].type)(a=document.createElement("textarea")).id=E,a.name=N,u.appendChild(a);else if(-1!=d.columns[S].type.search(/^(color|date|datetime|datetime\-local|email|month|number|range|search|tel|time|url|week)$/)){a=document.createElement("input");try{a.type=d.columns[S].type}catch(e){}a.id=E,a.name=N,u.appendChild(a)}else(a=document.createElement("input")).type="text",a.id=E,a.name=N,u.appendChild(a),"ui-datepicker"==d.columns[S].type?t(a).datepicker(d.columns[S].uiOption):"ui-spinner"==d.columns[S].type?t(a).spinner(d.columns[S].uiOption):"ui-autocomplete"==d.columns[S].type&&t(a).autocomplete(d.columns[S].uiOption);"custom"!=d.columns[S].type&&(null!=d.columns[S].ctrlAttr&&t(a).attr(d.columns[S].ctrlAttr),null!=d.columns[S].ctrlProp&&t(a).prop(d.columns[S].ctrlProp),null!=d.columns[S].ctrlCss&&t(a).css(d.columns[S].ctrlCss),null!=d.columns[S].ctrlClass&&t(a).addClass(d.columns[S].ctrlClass),e.isFunction(d.columns[S].onClick)&&t(a).click({caller:n,callback:d.columns[S].onClick,uniqueIndex:i},function(e){e.data.callback(e,t(e.data.caller).appendGrid("getRowIndex",e.data.uniqueIndex))}),e.isFunction(d.columns[S].onChange)&&t(a).change({caller:n,callback:d.columns[S].onChange,uniqueIndex:i},function(e){e.data.callback(e,t(e.data.caller).appendGrid("getRowIndex",e.data.uniqueIndex))})),O?P(d,S,i,o[R][d.columns[S].name]):b(d.columns[S].value)||P(d,S,i,d.columns[S].value)}else p.push(S);if(!d._hideLastColumn||d.columns.length>d._visibleCount){if(d.rowButtonsInFront?d.hideRowNumColumn?s.insertBefore(u=document.createElement("td"),s.firstChild):s.insertBefore(u=document.createElement("td"),s.childNodes[1]):s.appendChild(u=document.createElement("td")),u.className="ui-widget-content last",u.id=d.idPrefix+"_last_td_"+i,d._hideLastColumn&&(u.style.display="none"),!d.hideButtons.insert){var A=B(d.customGridButtons.insert,"ui-icon-arrowreturnthick-1-w").attr({id:d.idPrefix+"_Insert_"+i,title:d._i18n.insert,tabindex:-1}).addClass("insert").data("appendGrid",{uniqueIndex:i}).click(function(e){var o=t(this).data("appendGrid").uniqueIndex;return t(n).appendGrid("insertRow",1,null,o),e&&e.preventDefault&&e.preventDefault(d._buttonClasses.insert),!1}).appendTo(u);b(d._buttonClasses.insert)||A.addClass(d._buttonClasses.insert)}if(!d.hideButtons.remove){var A=B(d.customGridButtons.remove,"ui-icon-trash").attr({id:d.idPrefix+"_Delete_"+i,title:d._i18n.remove,tabindex:-1}).addClass("remove").data("appendGrid",{uniqueIndex:i}).click(function(e){var o=t(this).data("appendGrid").uniqueIndex;return h(n,null,o,!1),e&&e.preventDefault&&e.preventDefault(),!1}).appendTo(u);b(d._buttonClasses.remove)||A.addClass(d._buttonClasses.remove)}if(!d.hideButtons.moveUp){var A=B(d.customGridButtons.moveUp,"ui-icon-arrowthick-1-n").attr({id:d.idPrefix+"_MoveUp_"+i,title:d._i18n.moveUp,tabindex:-1}).addClass("moveUp").data("appendGrid",{uniqueIndex:i}).click(function(e){var o=t(this).data("appendGrid").uniqueIndex;return t(n).appendGrid("moveUpRow",null,o),e&&e.preventDefault&&e.preventDefault(),!1}).appendTo(u);b(d._buttonClasses.moveUp)||A.addClass(d._buttonClasses.moveUp)}if(!d.hideButtons.moveDown){var A=B(d.customGridButtons.moveDown,"ui-icon-arrowthick-1-s").attr({id:d.idPrefix+"_MoveDown_"+i,title:d._i18n.moveDown,tabindex:-1}).addClass("moveDown").data("appendGrid",{uniqueIndex:i}).click(function(e){var o=t(this).data("appendGrid").uniqueIndex;return t(n).appendGrid("moveDownRow",null,o),e&&e.preventDefault&&e.preventDefault(),!1}).appendTo(u);b(d._buttonClasses.moveDown)||A.addClass(d._buttonClasses.moveDown)}if(d.rowDragging){var A=t("<div/>").addClass("rowDrag ui-state-default ui-corner-all").attr("title",d._i18n.rowDrag).append(t("<div/>").addClass("ui-icon ui-icon-caret-2-n-s").append(t("<span/>").addClass("ui-button-text").text("Drag"))).appendTo(u);b(d._buttonClasses.rowDrag)||A.addClass(d._buttonClasses.rowDrag)}for(var S=0;S<p.length;S++)(a=document.createElement("input")).id=d.idPrefix+"_"+d.columns[p[S]].name+"_"+i,e.isFunction(d.nameFormatter)?a.name=d.nameFormatter(d.idPrefix,d.columns[S].name,i):a.name=a.id,a.type="hidden",O?a.value=o[R][d.columns[p[S]].name]:b(d.columns[p[S]].value)||(a.value=d.columns[p[S]].value),u.appendChild(a);if(d.customRowButtons&&d.customRowButtons.length){for(var S=d.customRowButtons.length-1;S>=0;S--){var q=d.customRowButtons[S];q&&q.uiButton&&q.click&&q.atTheFront&&t(u).prepend(f(n,q,i))}for(var S=0;S<d.customRowButtons.length;S++){var q=d.customRowButtons[S];q&&q.uiButton&&q.click&&!q.atTheFront&&t(u).append(f(n,q,i))}}}d.useSubPanel&&(w.appendChild(u=document.createElement("td")),u.className="ui-widget-content",u.colSpan=d._visibleCount+(d._hideLastColumn?0:1),e.isFunction(d.subPanelBuilder)&&d.subPanelBuilder(u,i))}if(x(n,d),e.isNumeric(r)?e.isFunction(d.afterRowInserted)&&d.afterRowInserted(n,m,c):e.isFunction(d.afterRowAppended)&&d.afterRowAppended(n,m,c),_&&e.isFunction(d.maxNumRowsReached)&&d.maxNumRowsReached(),d.maintainScroll&&!e.isNumeric(r)){var U=t(n).height();t(n).scrollParent().scrollTop(g+U-C)}return{addedRows:c,parentIndex:m,rowIndex:r}}function p(e,n){var o=t("<button/>").attr({type:"button",tabindex:-1}).click({tbWhole:e},n.click);return n.btnClass&&o.addClass(n.btnClass),n.btnCss&&o.css(n.btnCss),n.btnAttr&&o.attr(n.btnAttr),o}function f(e,n,o){var r=t("<button/>").val(o).attr({type:"button",tabindex:-1}).click({tbWhole:e,uniqueIndex:o},function(e){var o=t(e.data.tbWhole).appendGrid("getRowValue",null,e.data.uniqueIndex);n.click(e,e.data.uniqueIndex,o)});return n.btnClass&&r.addClass(n.btnClass),n.btnCss&&r.css(n.btnCss),n.btnAttr&&r.attr(n.btnAttr),r}function h(n,o,r,l){var i=t(n).data("appendGrid"),a=n.getElementsByTagName("tbody")[0];if(e.isNumeric(r))for(var s=0;s<i._rowOrder.length;s++)if(i._rowOrder[s]==r){o=s;break}if(e.isNumeric(o))(l||"function"!=typeof i.beforeRowRemove||i.beforeRowRemove(n,o))&&(i._rowOrder.splice(o,1),i.useSubPanel?(a.removeChild(a.childNodes[2*o]),a.removeChild(a.childNodes[2*o])):a.removeChild(a.childNodes[o]),x(n,i),_(n,o),e.isFunction(i.afterRowRemoved)&&i.afterRowRemoved(n,o));else{var u=0,d=0;if(i.maintainScroll&&(u=t(n).height(),d=t(n).scrollParent().scrollTop()),(l||!e.isFunction(i.beforeRowRemove)||i.beforeRowRemove(n,i._rowOrder.length-1))&&(r=i._rowOrder.pop(),a.removeChild(a.lastChild),i.useSubPanel&&a.removeChild(a.lastChild),x(n,i),e.isFunction(i.afterRowRemoved)&&i.afterRowRemoved(n,null)),i.maintainScroll){var c=t(n).height();t(n).scrollParent().scrollTop(d+c-u)}}0==i._rowOrder.length&&v(document.getElementById(i._wrapperId),i)}function v(e,n,o){var r=t("<td></td>").text(n._i18n.rowEmpty).attr("colspan",n._finalColSpan);t("table.body tbody",e).append(t("<tr></tr>").addClass("empty").append(r))}function w(e){var n=t(e).data("appendGrid");t("tbody",e).empty(),n._rowOrder.length=0,n._uniqueIndex=0,x(e,n),v(document.getElementById(n._wrapperId),n)}function _(e,n){var o=t(e).data("appendGrid");if(!o.hideRowNumColumn)for(var r=n;r<o._rowOrder.length;r++)t("#"+o.idPrefix+"_Row_"+o._rowOrder[r]+" td.first",e).text(r+1)}function C(n,o,r){var l,i,a=t(n).data("appendGrid");if(a){if(l=n.getElementsByTagName("tbody")[0],t(l).empty(),a._rowOrder.length=0,a._uniqueIndex=0,null!=o&&o.length){i=m(n,o.length,null,null);for(var s=0;s<i.addedRows.length;s++){for(var u=0;u<a.columns.length;u++)P(a,u,a._rowOrder[s],o[s][a.columns[u].name]);e.isFunction(a.rowDataLoaded)&&a.rowDataLoaded(n,o[s],s,a._rowOrder[s])}}a._isDataLoaded=!0,r&&(a.initData=null),t(n).data("appendGrid",a),e.isFunction(a.dataLoaded)&&a.dataLoaded(n,o)}}function g(e,t){for(var n=0;n<t._rowOrder.length;n++)if(t._rowOrder[n]==e)return n;return null}function b(e){return void 0===e||null==e}function x(e,n){t(e).data("appendGrid",n),t("#"+n.idPrefix+"_rowOrder",e).val(n._rowOrder.join())}function y(t,n,o){for(var r={},l=null,i=b(o)?"":"_"+o,a=0;a<t.columns.length;a++)l=t.columns[a].name+i,r[l]=O(t,a,n);if(t.useSubPanel&&e.isFunction(t.subPanelGetter)){var s=t.subPanelGetter(n);if(e.isPlainObject(s))if(""==i)e.extend(r,s);else{var u={};for(var d in s)u[d+i]=s[d];e.extend(r,u)}}return r}function O(n,o,r){var l=n.columns[o].type,i=n.columns[o].name;if("custom"==l)return e.isFunction(n.columns[o].customGetter)?n.columns[o].customGetter(n.idPrefix,i,r):null;var a=R(l,n.idPrefix,i,r);return null==a?null:"checkbox"==l?a.checked?1:0:t(a).val()}function R(e,t,n,o){return document.getElementById(t+"_"+n+"_"+o)}function P(n,o,r,l){var i=n.columns[o].type,a=n.columns[o].name;if("custom"==i)e.isFunction(n.columns[o].customSetter)&&n.columns[o].customSetter(n.idPrefix,a,r,l);else{var s=R(i,n.idPrefix,a,r);"checkbox"==i?s.checked=null!=l&&0!=l:"ui-selectmenu"==i?(s.value=null==l?"":l,t(s).selectmenu("refresh")):t(s).val(null==l?"":l)}}function B(n,o){var r=null;return n&&(e.isFunction(n)?r=t(n()):n.nodeType?r=t(n).clone():(n.icon||n.label)&&(r=t("<button/>").attr({type:"button"}))),r||(r=t("<button/>").attr({type:"button"})),r}function S(t,n){for(var o=0;o<t.columns.length;o++){var r=t._rowOrder[n],l=O(t,o,r);if(e.isFunction(t.columns[o].emptyCriteria)){if(!t.columns[o].emptyCriteria(l))return!1}else{var i=null;if(b(t.columns[o].emptyCriteria))if("checkbox"==t.columns[o].type)i=0;else if("select"==t.columns[o].type||"ui-selectmenu"==t.columns[o].type){var a=R(t.columns[o].type,t.idPrefix,t.columns[o].name,r).options;i=a.length>0?a[0].value:""}else i="";else i=t.columns[o].emptyCriteria;if(l!=i)return!1}}return!0}t.fn.appendGrid=function(e){return d[e]?d[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void alert(l.notSupportMethod+e):d.init.apply(this,arguments)}}),e("skylark-domx-plugins-tablegrids/main",["skylark-domx-query","./table-grid"],function(e){return e}),e("skylark-domx-plugins-tablegrids",["skylark-domx-plugins-tablegrids/main"],function(e){return e})}(n),!o){var i=require("skylark-langx-ns");r?module.exports=i:t.skylarkjs=i}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-plugins-tablegrids.js.map
