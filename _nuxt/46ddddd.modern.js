(window.webpackJsonp=window.webpackJsonp||[]).push([[65,85,104],{1823:function(e,t,n){var a=n(1904);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(95).default)("7d08453e",a,!0,{sourceMap:!1})},1842:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a,r,i,o,l,c,s;n(63),n(146);function u(e){a=e,r=e.length,i=o=l=-1,g(),w();try{var t=p();return m("EOF"),t}catch(e){var n=v();return m("EOF"),n}}function p(){var e=i,t=[];if(m("{"),!h("}")){do{t.push(d())}while(h(","));m("}")}return{kind:"Object",start:e,end:l,members:t}}function d(){var e=i,t="String"===s?y():null;m("String"),m(":");var n=f();return{kind:"Member",start:e,end:l,key:t,value:n}}function v(){var e=i,t=[];if(m("["),!h("]")){do{t.push(f())}while(h(","));m("]")}return{kind:"Array",start:e,end:l,values:t}}function f(){switch(s){case"[":return v();case"{":return p();case"String":case"Number":case"Boolean":case"Null":var e=y();return w(),e}return m("Value")}function y(){return{kind:s,start:i,end:o,value:JSON.parse(a.slice(i,o))}}function m(e){if(s!==e){var t;if("EOF"===s)t="[end of file]";else if(o-i>1)t="`".concat(a.slice(i,o),"`");else{var n=a.slice(i).match(/^.+?\b/);t="`".concat(n?n[0]:a[i],"`")}throw b("Expected ".concat(e," but found ").concat(t,"."))}w()}function b(e){return{message:e,start:i,end:o}}function h(e){if(s===e)return w(),!0}function g(){o<r&&(o++,c=o===r?0:a.charCodeAt(o))}function w(){for(l=o;9===c||10===c||13===c||32===c;)g();if(0!==c){switch(i=o,c){case 34:return s="String",function(){g();for(;34!==c&&c>31;)if(92===c)switch(g(),c){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:g();break;case 117:g(),x(),x(),x(),x();break;default:throw b("Bad character escape sequence.")}else{if(o===r)throw b("Unterminated string.");g()}if(34===c)return void g();throw b("Unterminated string.")}();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return s="Number",function(){45===c&&g();48===c?g():O();46===c&&(g(),O());69!==c&&101!==c||(g(),43!==c&&45!==c||g(),O())}();case 102:if("false"!==a.slice(i,i+5))break;return o+=4,g(),void(s="Boolean");case 110:if("null"!==a.slice(i,i+4))break;return o+=3,g(),void(s="Null");case 116:if("true"!==a.slice(i,i+4))break;return o+=3,g(),void(s="Boolean")}s=a[i],g()}else s="EOF"}function x(){if(c>=48&&c<=57||c>=65&&c<=70||c>=97&&c<=102)return g();throw b("Expected hexadecimal digit.")}function O(){if(c<48||c>57)throw b("Expected decimal digit.");do{g()}while(c>=48&&c<=57)}},1879:function(e,t,n){var a=n(1953);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(95).default)("2a3488ec",a,!0,{sourceMap:!1})},1880:function(e,t,n){"use strict";n(64);var a=n(1814),r=n(1842);t.a=e=>{try{return Object(r.a)(e),Promise.resolve([])}catch(t){return Promise.resolve([{from:Object(a.a)(e,t.start),to:Object(a.a)(e,t.end),message:t.message,severity:"error"}])}}},1903:function(e,t,n){"use strict";n(1823)},1904:function(e,t,n){var a=n(94)(!1);a.push([e.i,".chip[data-v-b459a34e] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  border-radius: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.125rem;\n  background-color: var(--primary-dark-color);\n}",""]),e.exports=a},1950:function(e,t,n){"use strict";n.r(t);n(1903);var a=n(16),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"chip"},[n("i",{staticClass:"opacity-75 material-icons"},[e._v("attachment")]),e._v(" "),n("span",{staticClass:"px-2 truncate max-w-32"},[e._t("default")],2)])}),[],!1,null,"b459a34e",null);t.default=r.exports},1952:function(e,t,n){"use strict";n(1879)},1953:function(e,t,n){var a=n(94)(!1);a.push([e.i,".file-chips-container[data-v-24103cd6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 0%;\n  -webkit-flex: 1 1 0%;\n  flex: 1 1 0%;\n  white-space: nowrap;\n  overflow: auto;\n  background-color: transparent;\n}\n.file-chips-container .file-chips-wrapper[data-v-24103cd6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  padding: 0.25rem;\n  width: 0px;\n}",""]),e.exports=a},1979:function(e,t,n){"use strict";n.r(t);var a=n(13),r=(n(109),n(3)),i=n(926),o=n(1),l=n(882),c={"text/plain":"text/x-yaml","text/html":"htmlmixed","application/xml":"application/xml","application/hal+json":"application/ld+json","application/vnd.api+json":"application/ld+json","application/json":"application/ld+json"};var s=n(17),u=n(910),p=n(93),d=n(1880),v=(n(64),e=>i.g((()=>new Promise(((t,n)=>{var a=new FileReader;a.onload=()=>{t(a.result)},a.onerror=()=>{n(new Error("File err"))},a.readAsText(e)}))))),f={props:{contentType:{key:"contentType",required:!0,type:null}}};f.setup=(e,t)=>{var n=Object(s.d)(),f=e,y=Object(s.j)(),m=Object(s.a)(Object(p.D)(),"body"),b=Object(r.o)("wand"),h=Object(r.a)((()=>{return e=f.contentType,c[e]||"text/x-yaml";var e})),g=Object(r.a)((()=>Object(u.a)(f.contentType)?d.a:null)),w=Object(r.o)(!0),x=Object(r.o)(null);Object(l.a)(x,m,Object(r.m)({extendedEditorConfig:{lineWrapping:w,mode:h,placeholder:n("request.raw_body").toString()},linter:g,completer:null,environmentHighlights:!0}));var O=function(){var e=Object(a.a)((function*(e){var t;yield Object(o.pipe)(null===(t=e.target.files)||void 0===t?void 0:t[0],i.f,i.a(i.c((e=>void 0!==e))),i.a(v),i.e((()=>y.error("".concat(n("action.choose_file")))),(e=>{m.value=e,y.success("".concat(n("state.file_imported")))})))()}));return function(t){return e.apply(this,arguments)}}();return{t:n,prettifyIcon:b,linewrapEnabled:w,rawBodyParameters:x,clearContent:()=>{m.value=""},uploadPayload:O,prettifyRequestBody:()=>{try{var e=JSON.parse(m.value);m.value=JSON.stringify(e,null,2),b.value="check"}catch(e){console.error(e),b.value="info",y.error("".concat(n("error.json_prettify_invalid_body")))}setTimeout((()=>b.value="wand"),1e3)}}};var y=f,m=n(16),b=Object(m.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col flex-1"},[n("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileRawStickyFold sm:top-upperMobileRawTertiaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("request.raw_body"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:e.t("app.wiki"),svg:"help-circle"}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":e.linewrapEnabled},attrs:{title:e.t("state.linewrap"),svg:"wrap-text"},nativeOn:{click:function(t){t.preventDefault(),e.linewrapEnabled=!e.linewrapEnabled}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent.apply(null,arguments)}}}),e._v(" "),e.contentType&&e.contentType.endsWith("json")?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"prettifyRequest",attrs:{title:e.t("action.prettify"),svg:e.prettifyIcon},nativeOn:{click:function(t){return e.prettifyRequestBody.apply(null,arguments)}}}):e._e(),e._v(" "),n("label",{attrs:{for:"payload"}},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("import.title"),svg:"file-plus"},nativeOn:{click:function(t){return e.$refs.payload.click()}}})],1),e._v(" "),n("input",{ref:"payload",staticClass:"input",attrs:{name:"payload",type:"file"},on:{change:e.uploadPayload}})],1)]),e._v(" "),n("div",{ref:"rawBodyParameters",staticClass:"flex flex-col flex-1"})])}),[],!1,null,null,null);t.default=b.exports;installComponents(b,{ButtonSecondary:n(86).default})},1980:function(e,t,n){"use strict";n.r(t);var a=n(34),r=(n(9),n(3)),i=n(246),o=n.n(i),l=n(194),c=n(1178),s=n.n(c),u=n(17),p=n(93);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={setup:(e,t)=>{var n=Object(u.d)(),a=Object(u.j)(),i=Object(r.o)(null),c=Object(u.a)(Object(p.D)(),"body"),s=Object(r.o)([{key:"",value:"",active:!0,isFile:!1}]);Object(r.y)(s,(e=>{e.length>0&&""!==e[e.length-1].key&&s.value.push({key:"",value:"",active:!0,isFile:!1})})),Object(r.y)(c,(e=>{var t=s.value.filter((e=>""!==e.key));o()(e,t)||(s.value=e)}),{immediate:!0}),Object(r.y)(s,(e=>{var t=e.filter((e=>""!==e.key));o()(c.value,t)||(c.value=t)}));var d=(e,t)=>{s.value=s.value.map(((n,a)=>a===e?t:n))};return{workingParams:s,addBodyParam:()=>{s.value.push({key:"",value:"",active:!0,isFile:!1})},updateBodyParam:d,deleteBodyParam:e=>{var t=Object(l.clone)(s.value);t.length>0&&e===t.length-1||(i.value&&(i.value.goAway(0),i.value=null),i.value=a.success("".concat(n("state.deleted")),{action:[{text:"".concat(n("action.undo")),onClick:(e,n)=>{s.value=t,n.goAway(0),i.value=null}}],onComplete:()=>{i.value=null}})),s.value.splice(e,1)},clearContent:()=>{s.value=[{key:"",value:"",active:!0,isFile:!1}]},setRequestAttachment:(e,t,n)=>{var a;if(0!==(null===(a=n.target.files)||void 0===a?void 0:a.length)){var r=v(v({},t),{},{isFile:!0,value:Array.from(n.target.files)});d(e,r)}else d(e,v(v({},t),{},{isFile:!1,value:""}))}}}};f.components=Object.assign({draggable:s.a},f.components);var y=f,m=(n(1952),n(16)),b=Object(m.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileRawStickyFold sm:top-upperMobileRawTertiaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.$t("request.body"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:e.$t("app.wiki"),svg:"help-circle"}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.clear_all"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent.apply(null,arguments)}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("add.new"),svg:"plus"},nativeOn:{click:function(t){return e.addBodyParam.apply(null,arguments)}}})],1)]),e._v(" "),n("draggable",{attrs:{animation:"250",handle:".draggable-handle",draggable:".draggable-content","ghost-class":"cursor-move","chosen-class":"bg-primaryLight","drag-class":"cursor-grabbing"},model:{value:e.workingParams,callback:function(t){e.workingParams=t},expression:"workingParams"}},e._l(e.workingParams,(function(t,a){var r;return n("div",{key:"param-"+a,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight draggable-content group"},[n("span",[n("ButtonSecondary",{staticClass:"cursor-auto text-primary hover:text-primary",class:{"draggable-handle group-hover:text-secondaryLight !cursor-grab":a!==(null===(r=e.workingParams)||void 0===r?void 0:r.length)-1},attrs:{svg:"grip-vertical",tabindex:"-1"}})],1),e._v(" "),n("SmartEnvInput",{attrs:{placeholder:""+e.$t("count.parameter",{count:a+1})},on:{change:function(n){return e.updateBodyParam(a,{key:n,value:t.value,active:t.active,isFile:t.isFile})}},model:{value:t.key,callback:function(n){e.$set(t,"key",n)},expression:"param.key"}}),e._v(" "),t.isFile?n("div",{staticClass:"file-chips-container hide-scrollbar"},[n("div",{staticClass:"space-x-2 file-chips-wrapper"},e._l(t.value,(function(t,r){return n("SmartFileChip",{key:"param-"+a+"-file-"+r},[e._v(e._s(t.name))])})),1)]):n("span",{staticClass:"flex flex-1"},[n("SmartEnvInput",{attrs:{placeholder:""+e.$t("count.value",{count:a+1})},on:{change:function(n){return e.updateBodyParam(a,{key:t.key,value:n,active:t.active,isFile:t.isFile})}},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"param.value"}})],1),e._v(" "),n("span",[n("label",{staticClass:"p-0",attrs:{for:"attachment"+a}},[n("input",{ref:"attachment"+a,refInFor:!0,staticClass:"p-1 cursor-pointer transition file:transition file:cursor-pointer text-secondaryLight hover:text-secondaryDark file:mr-2 file:py-1 file:px-4 file:rounded file:border-0 file:text-tiny text-tiny file:text-secondary hover:file:text-secondaryDark file:bg-primaryLight hover:file:bg-primaryDark",attrs:{id:"attachment"+a,name:"attachment"+a,type:"file",multiple:""},on:{change:function(n){return e.setRequestAttachment(a,t,n)}}})])]),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.hasOwnProperty("active")?t.active?e.$t("action.turn_off"):e.$t("action.turn_on"):e.$t("action.turn_off"),svg:t.hasOwnProperty("active")?t.active?"check-circle":"circle":"check-circle",color:"green"},nativeOn:{click:function(n){e.updateBodyParam(a,{key:t.key,value:t.value,active:!!t.hasOwnProperty("active")&&!t.active,isFile:t.isFile})}}})],1),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.deleteBodyParam(a)}}})],1)],1)})),0),e._v(" "),0===e.workingParams.length?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/upload_single_file.svg",loading:"lazy",alt:""+e.$t("empty.body")}}),e._v(" "),n("span",{staticClass:"pb-4 text-center"},[e._v(e._s(e.$t("empty.body")))]),e._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{label:""+e.$t("add.new"),filled:"",svg:"plus"},nativeOn:{click:function(t){return e.addBodyParam.apply(null,arguments)}}})],1):e._e()],1)}),[],!1,null,"24103cd6",null);t.default=b.exports;installComponents(b,{ButtonSecondary:n(86).default,SmartEnvInput:n(883).default,SmartFileChip:n(1950).default})},1981:function(e,t,n){"use strict";n.r(t);var a=n(34),r=(n(9),n(3)),i=n(246),o=n.n(i),l=n(61),c=n(1),s=n(71),u=n(46),p=n(48),d=n(8),v=n(194),f=n(1178),y=n.n(f),m=n(882),b=n(1850),h=n(93),g=n(17),w=n(1004),x=n(921);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var k={};k.setup=(e,t)=>{var n=Object(g.d)(),i=Object(g.j)(),f=Object(r.o)(0),y=Object(r.o)(!1),k=Object(r.o)(""),j=Object(r.o)(null),_=Object(r.o)(null);Object(m.a)(j,k,{extendedEditorConfig:{mode:"text/x-yaml",placeholder:"".concat(n("state.bulk_mode_placeholder"))},linter:b.a,completer:null,environmentHighlights:!0});var C=Object(g.a)(Object(h.D)(),"body"),P=Object(r.a)({get:()=>Object(l.parseRawKeyValueEntries)(C.value),set(e){C.value=Object(l.rawKeyValueEntriesToString)(e)}}),S=Object(r.o)([{id:f.value++,key:"",value:"",active:!0}]);Object(r.y)(S,(e=>{e.length>0&&""!==e[e.length-1].key&&S.value.push({id:f.value++,key:"",value:"",active:!0})})),Object(r.y)(P,(e=>{var t=Object(c.pipe)(S.value,s.filterMap(Object(c.flow)(u.fromPredicate((e=>""!==e.key)),u.map(Object(w.d)("id"))))),n=Object(c.pipe)(Object(l.parseRawKeyValueEntriesE)(k.value),d.map(Object(c.flow)(p.filter((e=>""!==e.key)),p.toArray)));o()(e,t)||(S.value=Object(c.pipe)(e,s.map((e=>function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:f.value++},e))))),o()(e,n)||(k.value=Object(l.rawKeyValueEntriesToString)(e))}),{immediate:!0}),Object(r.y)(S,(e=>{var t=Object(c.pipe)(e,s.filterMap(Object(c.flow)(u.fromPredicate((e=>""!==e.key)),u.map(Object(w.d)("id")))));o()(P.value,t)||(P.value=t)})),Object(r.y)(k,(e=>{var t=Object(c.pipe)(Object(l.parseRawKeyValueEntriesE)(e),d.map(Object(c.flow)(p.filter((e=>""!==e.key)),p.toArray)),d.getOrElse((()=>[])));o()(P.value,t)||(P.value=t)}));return{t:n,bulkMode:y,bulkEditor:j,workingUrlEncodedParams:S,addUrlEncodedParam:()=>{S.value.push({id:f.value++,key:"",value:"",active:!0})},updateUrlEncodedParam:(e,t)=>{S.value=S.value.map(((n,a)=>a===e?t:n))},deleteUrlEncodedParam:e=>{var t=Object(v.cloneDeep)(S.value);t.length>0&&e===t.length-1||(_.value&&(_.value.goAway(0),_.value=null),_.value=i.success("".concat(n("state.deleted")),{action:[{text:"".concat(n("action.undo")),onClick:(e,n)=>{S.value=t,n.goAway(0),_.value=null}}],onComplete:()=>{_.value=null}})),S.value=Object(c.pipe)(S.value,s.deleteAt(e),u.getOrElseW((()=>Object(x.a)("Working URL Encoded Params Deletion Out of Bounds"))))},clearContent:()=>{S.value=[{id:f.value++,key:"",value:"",active:!0}],k.value=""}}},k.components=Object.assign({draggable:y.a},k.components);var j=k,_=n(16),C=Object(_.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col flex-1"},[n("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileRawStickyFold sm:top-upperMobileRawTertiaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("request.body"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:e.t("app.wiki"),svg:"help-circle"}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear_all"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent()}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":e.bulkMode},attrs:{title:e.t("state.bulk_mode"),svg:"edit"},nativeOn:{click:function(t){e.bulkMode=!e.bulkMode}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("add.new"),svg:"plus",disabled:e.bulkMode},nativeOn:{click:function(t){return e.addUrlEncodedParam.apply(null,arguments)}}})],1)]),e._v(" "),e.bulkMode?n("div",{ref:"bulkEditor",staticClass:"flex flex-col flex-1"}):n("div",[n("draggable",{attrs:{animation:"250",handle:".draggable-handle",draggable:".draggable-content","ghost-class":"cursor-move","chosen-class":"bg-primaryLight","drag-class":"cursor-grabbing"},model:{value:e.workingUrlEncodedParams,callback:function(t){e.workingUrlEncodedParams=t},expression:"workingUrlEncodedParams"}},e._l(e.workingUrlEncodedParams,(function(t,a){var r;return n("div",{key:"param-"+t.id+"-"+a,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight draggable-content group"},[n("span",[n("ButtonSecondary",{staticClass:"cursor-auto text-primary hover:text-primary",class:{"draggable-handle group-hover:text-secondaryLight !cursor-grab":a!==(null===(r=e.workingUrlEncodedParams)||void 0===r?void 0:r.length)-1},attrs:{svg:"grip-vertical",tabindex:"-1"}})],1),e._v(" "),n("SmartEnvInput",{attrs:{placeholder:""+e.t("count.parameter",{count:a+1})},on:{change:function(n){return e.updateUrlEncodedParam(a,{id:t.id,key:n,value:t.value,active:t.active})}},model:{value:t.key,callback:function(n){e.$set(t,"key",n)},expression:"param.key"}}),e._v(" "),n("SmartEnvInput",{attrs:{placeholder:""+e.t("count.value",{count:a+1})},on:{change:function(n){return e.updateUrlEncodedParam(a,{id:t.id,key:t.key,value:n,active:t.active})}},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"param.value"}}),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.hasOwnProperty("active")?t.active?e.t("action.turn_off"):e.t("action.turn_on"):e.t("action.turn_off"),svg:t.hasOwnProperty("active")?t.active?"check-circle":"circle":"check-circle",color:"green"},nativeOn:{click:function(n){return e.updateUrlEncodedParam(a,{id:t.id,key:t.key,value:t.value,active:!t.active})}}})],1),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.deleteUrlEncodedParam(a)}}})],1)],1)})),0),e._v(" "),0===e.workingUrlEncodedParams.length?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/add_category.svg",loading:"lazy",alt:""+e.t("empty.body")}}),e._v(" "),n("span",{staticClass:"pb-4 text-center"},[e._v("\n        "+e._s(e.t("empty.body"))+"\n      ")]),e._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{filled:"",label:""+e.t("add.new"),svg:"plus"},nativeOn:{click:function(t){return e.addUrlEncodedParam.apply(null,arguments)}}})],1):e._e()],1)])}),[],!1,null,null,null);t.default=C.exports;installComponents(C,{ButtonSecondary:n(86).default,SmartEnvInput:n(883).default})},2175:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(1),i=n(71),o=n(46),l=n(17),c=n(910),s=n(93),u={setup:(e,t)=>{var n=t.emit,u=Object.keys(c.b),p=Object(l.h)(s.j,null,s.t),d=Object(l.h)(s.l,[],s.v),v=Object(a.a)((()=>Object(r.pipe)(d.value,i.findLast((e=>"content-type"===e.key.toLowerCase()&&e.active)),o.map((e=>e.value)),o.getOrElse((()=>""))))),f=()=>Object(r.pipe)(d.value,i.some((e=>"content-type"===e.key.toLowerCase())));return{validContentTypes:u,contentType:p,overridenContentType:v,contentTypeOverride:e=>{n("change-tab",e),f()||Object(s.a)({key:"Content-Type",value:"",active:!0})}}}},p=u,d=n(16),v=Object(d.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col flex-1"},[n("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileSecondaryStickyFold sm:top-upperSecondaryStickyFold"},[n("span",{staticClass:"flex items-center"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n        "+e._s(e.$t("request.content_type"))+"\n      ")]),e._v(" "),n("tippy",{ref:"contentTypeOptions",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:""},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("span",{staticClass:"select-wrapper"},[n("ButtonSecondary",{staticClass:"pr-8 ml-2 rounded-none",attrs:{label:e.contentType||e.$t("state.none").toLowerCase()}})],1)]},proxy:!0}])},[e._v(" "),n("div",{staticClass:"flex flex-col",attrs:{role:"menu"}},[n("SmartItem",{attrs:{label:e.$t("state.none").toLowerCase(),"info-icon":null===e.contentType?"done":"","active-info-icon":null===e.contentType},nativeOn:{click:function(t){return function(){e.contentType=null,e.$refs.contentTypeOptions.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),e._l(e.validContentTypes,(function(t,a){return n("SmartItem",{key:"contentTypeItem-"+a,attrs:{label:t,"info-icon":t===e.contentType?"done":"","active-info-icon":t===e.contentType},nativeOn:{click:function(n){return function(){e.contentType=t,e.$refs.contentTypeOptions.tippy().hide()}.apply(null,arguments)}}})}))],2)]),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip",allowHTML:!0},expression:"{ theme: 'tooltip', allowHTML: true }"}],class:["!px-1 !py-0.5",{"text-yellow-500 hover:text-yellow-500":e.overridenContentType}],attrs:{title:e.$t("request.override_help"),label:e.overridenContentType?e.$t("request.overriden")+": "+e.overridenContentType:e.$t("request.override"),svg:e.overridenContentType?"info":"refresh-cw",filled:"",outline:""},nativeOn:{click:function(t){return e.contentTypeOverride("headers")}}})],1)]),e._v(" "),"multipart/form-data"===e.contentType?n("HttpBodyParameters"):"application/x-www-form-urlencoded"===e.contentType?n("HttpURLEncodedParams"):null!==e.contentType?n("HttpRawBody",{attrs:{"content-type":e.contentType}}):e._e(),e._v(" "),null==e.contentType?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/upload_single_file.svg",loading:"lazy",alt:""+e.$t("empty.body")}}),e._v(" "),n("span",{staticClass:"pb-4 text-center"},[e._v(e._s(e.$t("empty.body")))]),e._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{outline:"",label:""+e.$t("app.documentation"),to:"https://docs.hoppscotch.io/features/body",blank:"",svg:"external-link",reverse:""}})],1):e._e()],1)}),[],!1,null,null,null);t.default=v.exports;installComponents(v,{ButtonSecondary:n(86).default,SmartItem:n(102).default,HttpBodyParameters:n(1980).default,HttpURLEncodedParams:n(1981).default,HttpRawBody:n(1979).default})},926:function(e,t,n){"use strict";n.d(t,"c",(function(){return T})),n.d(t,"b",(function(){return $})),n.d(t,"e",(function(){return F})),n.d(t,"g",(function(){return L})),n.d(t,"d",(function(){return N})),n.d(t,"f",(function(){return M})),n.d(t,"a",(function(){return R}));var a=n(28),r=(n(50),n(148)),i=n(172),o=(n(122),n(201),n(1)),l=n(40),c=n(7),s=n(46);function u(e){return Object(o.flow)(s.some,e.of)}function p(e){return Object(o.constant)(e.of(s.none))}function d(e){return function(t){return e.map(t,s.some)}}function v(e){return Object(o.flow)(s.fromNullable,e.of)}function f(e){var t=v(e);return function(e){return Object(o.flow)(e,t)}}function y(e){var t=_(e),n=f(e);return function(e){return t(n(e))}}function m(e){return function(t){return Object(o.flow)(t,e.of)}}function b(e){var t=_(e),n=m(e);return function(e){return t(n(e))}}function h(e){return function(t){return function(n){return e.of(s.fromPredicate(t)(n))}}}function g(e){return Object(o.flow)(s.fromEither,e.of)}function w(e){return function(t,n){return function(a){return e.map(a,s.match(t,n))}}}function x(e){return function(t,n){return function(a){return e.chain(a,s.match(t,n))}}}function O(e){return function(t){return function(n){return e.chain(n,s.match(t,e.of))}}}function k(e){return Object(l.d)(e,s.Functor)}function j(e){return Object(a.a)(e,s.Apply)}function _(e){var t=p(e);return function(n){return function(a){return e.chain(a,s.match((function(){return t()}),n))}}}function C(e){var t=u(e);return function(n){return function(a){return e.chain(a,s.match(n,t))}}}var P=n(33),S=(n(147),function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function l(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))}),E=function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},B=u(P.g),T=h(P.g),$=P.k,F=(P.g,P.e,s.fromEither,w(P.e)),L=(P.d,P.f,P.g,function(e){return function(){return S(void 0,void 0,void 0,(function(){return E(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,e().then(c.o)];case 1:return[2,t.sent()];case 2:return t.sent(),[2,c.l];case 3:return[2]}}))}))}}),N=(P.g,P.f,P.g,P.f,k(P.e)),M=(P.b,B),R=_(P.f),U=(o.identity,P.f,P.g,P.e,s.Compactable,P.e,s.Compactable,s.Functor,P.e,s.Filterable,P.e,s.Filterable,P.e,s.Filterable,P.e,s.Filterable,c.b,M(c.a)),D=function(e){var t=function(e){return Object(o.flow)(P.m(e),P.j(s.traverseReadonlyNonEmptyArrayWithIndex(o.SK)))}(e);return function(e){return c.g(e)?t(e):U}},q=function(e){var t=function(e){return function(t){return function(){return c.p(t).reduce((function(t,n,a){return t.then((function(r){return c.h(r)?t:e(a+1,n)().then((function(e){return c.h(e)?e:(r.value.push(e.value),r)}))}))}),e(0,c.e(t))().then(s.map(c.n)))}}}(e);return function(e){return c.g(e)?t(e):U}};o.identity,o.identity}}]);