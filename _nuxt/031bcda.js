(window.webpackJsonp=window.webpackJsonp||[]).push([[62,82,101],{1009:function(e,t,n){"use strict";n.d(t,"c",(function(){return T})),n.d(t,"b",(function(){return $})),n.d(t,"e",(function(){return F})),n.d(t,"g",(function(){return L})),n.d(t,"d",(function(){return N})),n.d(t,"f",(function(){return M})),n.d(t,"a",(function(){return R}));var r=n(36),a=(n(61),n(183)),i=n(205),o=(n(146),n(246),n(1)),c=n(49),l=n(9),u=n(54);function s(e){return Object(o.flow)(u.some,e.of)}function p(e){return Object(o.constant)(e.of(u.none))}function d(e){return function(t){return e.map(t,u.some)}}function f(e){return Object(o.flow)(u.fromNullable,e.of)}function v(e){var t=f(e);return function(e){return Object(o.flow)(e,t)}}function y(e){var t=_(e),n=v(e);return function(e){return t(n(e))}}function m(e){return function(t){return Object(o.flow)(t,e.of)}}function b(e){var t=_(e),n=m(e);return function(e){return t(n(e))}}function h(e){return function(t){return function(n){return e.of(u.fromPredicate(t)(n))}}}function g(e){return Object(o.flow)(u.fromEither,e.of)}function w(e){return function(t,n){return function(r){return e.map(r,u.match(t,n))}}}function x(e){return function(t,n){return function(r){return e.chain(r,u.match(t,n))}}}function O(e){return function(t){return function(n){return e.chain(n,u.match(t,e.of))}}}function k(e){return Object(c.d)(e,u.Functor)}function j(e){return Object(r.a)(e,u.Apply)}function _(e){var t=p(e);return function(n){return function(r){return e.chain(r,u.match((function(){return t()}),n))}}}function C(e){var t=s(e);return function(n){return function(r){return e.chain(r,u.match(n,t))}}}var P=n(44),S=(n(182),function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}l((r=r.apply(e,t||[])).next())}))}),E=function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},B=s(P.g),T=h(P.g),$=P.k,F=(P.g,P.e,u.fromEither,w(P.e)),L=(P.d,P.f,P.g,function(e){return function(){return S(void 0,void 0,void 0,(function(){return E(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,e().then(l.o)];case 1:return[2,t.sent()];case 2:return t.sent(),[2,l.l];case 3:return[2]}}))}))}}),N=(P.g,P.f,P.g,P.f,k(P.e)),M=(P.b,B),R=_(P.f),U=(o.identity,P.f,P.g,P.e,u.Compactable,P.e,u.Compactable,u.Functor,P.e,u.Filterable,P.e,u.Filterable,P.e,u.Filterable,P.e,u.Filterable,l.b,M(l.a)),D=function(e){var t=function(e){return Object(o.flow)(P.m(e),P.j(u.traverseReadonlyNonEmptyArrayWithIndex(o.SK)))}(e);return function(e){return l.g(e)?t(e):U}},q=function(e){var t=function(e){return function(t){return function(){return l.p(t).reduce((function(t,n,r){return t.then((function(a){return l.h(a)?t:e(r+1,n)().then((function(e){return l.h(e)?e:(a.value.push(e.value),a)}))}))}),e(0,l.e(t))().then(u.map(l.n)))}}}(e);return function(e){return l.g(e)?t(e):U}};o.identity,o.identity},1896:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r,a,i,o,c,l,u;n(93),n(62),n(179),n(13);function s(e){r=e,a=e.length,i=o=c=-1,g(),w();try{var t=p();return m("EOF"),t}catch(e){var n=f();return m("EOF"),n}}function p(){var e=i,t=[];if(m("{"),!h("}")){do{t.push(d())}while(h(","));m("}")}return{kind:"Object",start:e,end:c,members:t}}function d(){var e=i,t="String"===u?y():null;m("String"),m(":");var n=v();return{kind:"Member",start:e,end:c,key:t,value:n}}function f(){var e=i,t=[];if(m("["),!h("]")){do{t.push(v())}while(h(","));m("]")}return{kind:"Array",start:e,end:c,values:t}}function v(){switch(u){case"[":return f();case"{":return p();case"String":case"Number":case"Boolean":case"Null":var e=y();return w(),e}return m("Value")}function y(){return{kind:u,start:i,end:o,value:JSON.parse(r.slice(i,o))}}function m(e){if(u!==e){var t;if("EOF"===u)t="[end of file]";else if(o-i>1)t="`".concat(r.slice(i,o),"`");else{var n=r.slice(i).match(/^.+?\b/);t="`".concat(n?n[0]:r[i],"`")}throw b("Expected ".concat(e," but found ").concat(t,"."))}w()}function b(e){return{message:e,start:i,end:o}}function h(e){if(u===e)return w(),!0}function g(){o<a&&(o++,l=o===a?0:r.charCodeAt(o))}function w(){for(c=o;9===l||10===l||13===l||32===l;)g();if(0!==l){switch(i=o,l){case 34:return u="String",function(){g();for(;34!==l&&l>31;)if(92===l)switch(g(),l){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:g();break;case 117:g(),x(),x(),x(),x();break;default:throw b("Bad character escape sequence.")}else{if(o===a)throw b("Unterminated string.");g()}if(34===l)return void g();throw b("Unterminated string.")}();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return u="Number",function(){45===l&&g();48===l?g():O();46===l&&(g(),O());69!==l&&101!==l||(g(),43!==l&&45!==l||g(),O())}();case 102:if("false"!==r.slice(i,i+5))break;return o+=4,g(),void(u="Boolean");case 110:if("null"!==r.slice(i,i+4))break;return o+=3,g(),void(u="Null");case 116:if("true"!==r.slice(i,i+4))break;return o+=3,g(),void(u="Boolean")}u=r[i],g()}else u="EOF"}function x(){if(l>=48&&l<=57||l>=65&&l<=70||l>=97&&l<=102)return g();throw b("Expected hexadecimal digit.")}function O(){if(l<48||l>57)throw b("Expected decimal digit.");do{g()}while(l>=48&&l<=57)}},1904:function(e,t,n){var r=n(2009);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(118).default)("7d08453e",r,!0,{sourceMap:!1})},1984:function(e,t,n){var r=n(2059);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(118).default)("2a3488ec",r,!0,{sourceMap:!1})},1985:function(e,t,n){"use strict";n(5);var r=n(1839),a=n(1896);t.a=function(e){try{return Object(a.a)(e),Promise.resolve([])}catch(t){return Promise.resolve([{from:Object(r.a)(e,t.start),to:Object(r.a)(e,t.end),message:t.message,severity:"error"}])}}},2008:function(e,t,n){"use strict";n(1904)},2009:function(e,t,n){var r=n(117)(!1);r.push([e.i,".chip[data-v-b459a34e] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  border-radius: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.125rem;\n  background-color: var(--primary-dark-color);\n}",""]),e.exports=r},2056:function(e,t,n){"use strict";n.r(t);n(2008);var r=n(23),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"chip"},[n("i",{staticClass:"opacity-75 material-icons"},[e._v("attachment")]),e._v(" "),n("span",{staticClass:"px-2 truncate max-w-32"},[e._t("default")],2)])}),[],!1,null,"b459a34e",null);t.default=a.exports},2058:function(e,t,n){"use strict";n(1984)},2059:function(e,t,n){var r=n(117)(!1);r.push([e.i,".file-chips-container[data-v-24103cd6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 0%;\n  -webkit-flex: 1 1 0%;\n  flex: 1 1 0%;\n  white-space: nowrap;\n  overflow: auto;\n  background-color: transparent;\n}\n.file-chips-container .file-chips-wrapper[data-v-24103cd6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  padding: 0.25rem;\n  width: 0px;\n}",""]),e.exports=r},2085:function(e,t,n){"use strict";n.r(t);var r=n(20),a=(n(64),n(5),n(132),n(115),n(3)),i=n(1009),o=n(1),c=n(965),l={"text/plain":"text/x-yaml","text/html":"htmlmixed","application/xml":"application/xml","application/hal+json":"application/ld+json","application/vnd.api+json":"application/ld+json","application/json":"application/ld+json"};var u=n(25),s=n(996),p=n(114),d=n(1985),f=function(e){return i.g((function(){return new Promise((function(t,n){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=function(){n(new Error("File err"))},r.readAsText(e)}))}))},v={props:{contentType:{key:"contentType",required:!0,type:null}}};v.setup=function(e,t){var n=Object(u.d)(),v=e,y=Object(u.j)(),m=Object(u.a)(Object(p.D)(),"body"),b=Object(a.o)("wand"),h=Object(a.a)((function(){return e=v.contentType,l[e]||"text/x-yaml";var e})),g=Object(a.a)((function(){return Object(s.a)(v.contentType)?d.a:null})),w=Object(a.o)(!0),x=Object(a.o)(null);Object(c.a)(x,m,Object(a.m)({extendedEditorConfig:{lineWrapping:w,mode:h,placeholder:n("request.raw_body").toString()},linter:g,completer:null,environmentHighlights:!0}));var O=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.pipe)(null===(r=t.target.files)||void 0===r?void 0:r[0],i.f,i.a(i.c((function(e){return void 0!==e}))),i.a(f),i.e((function(){return y.error("".concat(n("action.choose_file")))}),(function(e){m.value=e,y.success("".concat(n("state.file_imported")))})))();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{t:n,prettifyIcon:b,linewrapEnabled:w,rawBodyParameters:x,clearContent:function(){m.value=""},uploadPayload:O,prettifyRequestBody:function(){try{var e=JSON.parse(m.value);m.value=JSON.stringify(e,null,2),b.value="check"}catch(e){console.error(e),b.value="info",y.error("".concat(n("error.json_prettify_invalid_body")))}setTimeout((function(){return b.value="wand"}),1e3)}}};var y=v,m=n(23),b=Object(m.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col flex-1"},[n("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileRawStickyFold sm:top-upperMobileRawTertiaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("request.raw_body"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:e.t("app.wiki"),svg:"help-circle"}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":e.linewrapEnabled},attrs:{title:e.t("state.linewrap"),svg:"wrap-text"},nativeOn:{click:function(t){t.preventDefault(),e.linewrapEnabled=!e.linewrapEnabled}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent.apply(null,arguments)}}}),e._v(" "),e.contentType&&e.contentType.endsWith("json")?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"prettifyRequest",attrs:{title:e.t("action.prettify"),svg:e.prettifyIcon},nativeOn:{click:function(t){return e.prettifyRequestBody.apply(null,arguments)}}}):e._e(),e._v(" "),n("label",{attrs:{for:"payload"}},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("import.title"),svg:"file-plus"},nativeOn:{click:function(t){return e.$refs.payload.click()}}})],1),e._v(" "),n("input",{ref:"payload",staticClass:"input",attrs:{name:"payload",type:"file"},on:{change:e.uploadPayload}})],1)]),e._v(" "),n("div",{ref:"rawBodyParameters",staticClass:"flex flex-col flex-1"})])}),[],!1,null,null,null);t.default=b.exports;installComponents(b,{ButtonSecondary:n(107).default})},2086:function(e,t,n){"use strict";n.r(t);n(12),n(10),n(15),n(8),n(14);var r=n(34),a=(n(11),n(5),n(63),n(180),n(99),n(80),n(3)),i=n(303),o=n.n(i),c=n(238),l=n(1262),u=n.n(l),s=n(25),p=n(114);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={setup:function(e,t){var n=Object(s.d)(),r=Object(s.j)(),i=Object(a.o)(null),l=Object(s.a)(Object(p.D)(),"body"),u=Object(a.o)([{key:"",value:"",active:!0,isFile:!1}]);Object(a.y)(u,(function(e){e.length>0&&""!==e[e.length-1].key&&u.value.push({key:"",value:"",active:!0,isFile:!1})})),Object(a.y)(l,(function(e){var t=u.value.filter((function(e){return""!==e.key}));o()(e,t)||(u.value=e)}),{immediate:!0}),Object(a.y)(u,(function(e){var t=e.filter((function(e){return""!==e.key}));o()(l.value,t)||(l.value=t)}));var d=function(e,t){u.value=u.value.map((function(n,r){return r===e?t:n}))};return{workingParams:u,addBodyParam:function(){u.value.push({key:"",value:"",active:!0,isFile:!1})},updateBodyParam:d,deleteBodyParam:function(e){var t=Object(c.clone)(u.value);t.length>0&&e===t.length-1||(i.value&&(i.value.goAway(0),i.value=null),i.value=r.success("".concat(n("state.deleted")),{action:[{text:"".concat(n("action.undo")),onClick:function(e,n){u.value=t,n.goAway(0),i.value=null}}],onComplete:function(){i.value=null}})),u.value.splice(e,1)},clearContent:function(){u.value=[{key:"",value:"",active:!0,isFile:!1}]},setRequestAttachment:function(e,t,n){var r;if(0!==(null===(r=n.target.files)||void 0===r?void 0:r.length)){var a=f(f({},t),{},{isFile:!0,value:Array.from(n.target.files)});d(e,a)}else d(e,f(f({},t),{},{isFile:!1,value:""}))}}}};v.components=Object.assign({draggable:u.a},v.components);var y=v,m=(n(2058),n(23)),b=Object(m.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileRawStickyFold sm:top-upperMobileRawTertiaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.$t("request.body"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:e.$t("app.wiki"),svg:"help-circle"}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.clear_all"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent.apply(null,arguments)}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("add.new"),svg:"plus"},nativeOn:{click:function(t){return e.addBodyParam.apply(null,arguments)}}})],1)]),e._v(" "),n("draggable",{attrs:{animation:"250",handle:".draggable-handle",draggable:".draggable-content","ghost-class":"cursor-move","chosen-class":"bg-primaryLight","drag-class":"cursor-grabbing"},model:{value:e.workingParams,callback:function(t){e.workingParams=t},expression:"workingParams"}},e._l(e.workingParams,(function(t,r){var a;return n("div",{key:"param-"+r,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight draggable-content group"},[n("span",[n("ButtonSecondary",{staticClass:"cursor-auto text-primary hover:text-primary",class:{"draggable-handle group-hover:text-secondaryLight !cursor-grab":r!==(null===(a=e.workingParams)||void 0===a?void 0:a.length)-1},attrs:{svg:"grip-vertical",tabindex:"-1"}})],1),e._v(" "),n("SmartEnvInput",{attrs:{placeholder:""+e.$t("count.parameter",{count:r+1})},on:{change:function(n){return e.updateBodyParam(r,{key:n,value:t.value,active:t.active,isFile:t.isFile})}},model:{value:t.key,callback:function(n){e.$set(t,"key",n)},expression:"param.key"}}),e._v(" "),t.isFile?n("div",{staticClass:"file-chips-container hide-scrollbar"},[n("div",{staticClass:"space-x-2 file-chips-wrapper"},e._l(t.value,(function(t,a){return n("SmartFileChip",{key:"param-"+r+"-file-"+a},[e._v(e._s(t.name))])})),1)]):n("span",{staticClass:"flex flex-1"},[n("SmartEnvInput",{attrs:{placeholder:""+e.$t("count.value",{count:r+1})},on:{change:function(n){return e.updateBodyParam(r,{key:t.key,value:n,active:t.active,isFile:t.isFile})}},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"param.value"}})],1),e._v(" "),n("span",[n("label",{staticClass:"p-0",attrs:{for:"attachment"+r}},[n("input",{ref:"attachment"+r,refInFor:!0,staticClass:"p-1 cursor-pointer transition file:transition file:cursor-pointer text-secondaryLight hover:text-secondaryDark file:mr-2 file:py-1 file:px-4 file:rounded file:border-0 file:text-tiny text-tiny file:text-secondary hover:file:text-secondaryDark file:bg-primaryLight hover:file:bg-primaryDark",attrs:{id:"attachment"+r,name:"attachment"+r,type:"file",multiple:""},on:{change:function(n){return e.setRequestAttachment(r,t,n)}}})])]),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.hasOwnProperty("active")?t.active?e.$t("action.turn_off"):e.$t("action.turn_on"):e.$t("action.turn_off"),svg:t.hasOwnProperty("active")?t.active?"check-circle":"circle":"check-circle",color:"green"},nativeOn:{click:function(n){e.updateBodyParam(r,{key:t.key,value:t.value,active:!!t.hasOwnProperty("active")&&!t.active,isFile:t.isFile})}}})],1),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.deleteBodyParam(r)}}})],1)],1)})),0),e._v(" "),0===e.workingParams.length?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/upload_single_file.svg",loading:"lazy",alt:""+e.$t("empty.body")}}),e._v(" "),n("span",{staticClass:"pb-4 text-center"},[e._v(e._s(e.$t("empty.body")))]),e._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{label:""+e.$t("add.new"),filled:"",svg:"plus"},nativeOn:{click:function(t){return e.addBodyParam.apply(null,arguments)}}})],1):e._e()],1)}),[],!1,null,"24103cd6",null);t.default=b.exports;installComponents(b,{ButtonSecondary:n(107).default,SmartEnvInput:n(966).default,SmartFileChip:n(2056).default})},2087:function(e,t,n){"use strict";n.r(t);n(12),n(10),n(11),n(5),n(15),n(8),n(14);var r=n(34),a=(n(63),n(3)),i=n(303),o=n.n(i),c=n(74),l=n(1),u=n(87),s=n(54),p=n(60),d=n(16),f=n(238),v=n(1262),y=n.n(v),m=n(965),b=n(1956),h=n(114),g=n(25),w=n(1086),x=n(1002);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var k={};k.setup=function(e,t){var n=Object(g.d)(),i=Object(g.j)(),v=Object(a.o)(0),y=Object(a.o)(!1),k=Object(a.o)(""),j=Object(a.o)(null),_=Object(a.o)(null);Object(m.a)(j,k,{extendedEditorConfig:{mode:"text/x-yaml",placeholder:"".concat(n("state.bulk_mode_placeholder"))},linter:b.a,completer:null,environmentHighlights:!0});var C=Object(g.a)(Object(h.D)(),"body"),P=Object(a.a)({get:function(){return Object(c.parseRawKeyValueEntries)(C.value)},set:function(e){C.value=Object(c.rawKeyValueEntriesToString)(e)}}),S=Object(a.o)([{id:v.value++,key:"",value:"",active:!0}]);Object(a.y)(S,(function(e){e.length>0&&""!==e[e.length-1].key&&S.value.push({id:v.value++,key:"",value:"",active:!0})})),Object(a.y)(P,(function(e){var t=Object(l.pipe)(S.value,u.filterMap(Object(l.flow)(s.fromPredicate((function(e){return""!==e.key})),s.map(Object(w.d)("id"))))),n=Object(l.pipe)(Object(c.parseRawKeyValueEntriesE)(k.value),d.map(Object(l.flow)(p.filter((function(e){return""!==e.key})),p.toArray)));o()(e,t)||(S.value=Object(l.pipe)(e,u.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:v.value++},e)})))),o()(e,n)||(k.value=Object(c.rawKeyValueEntriesToString)(e))}),{immediate:!0}),Object(a.y)(S,(function(e){var t=Object(l.pipe)(e,u.filterMap(Object(l.flow)(s.fromPredicate((function(e){return""!==e.key})),s.map(Object(w.d)("id")))));o()(P.value,t)||(P.value=t)})),Object(a.y)(k,(function(e){var t=Object(l.pipe)(Object(c.parseRawKeyValueEntriesE)(e),d.map(Object(l.flow)(p.filter((function(e){return""!==e.key})),p.toArray)),d.getOrElse((function(){return[]})));o()(P.value,t)||(P.value=t)}));return{t:n,bulkMode:y,bulkEditor:j,workingUrlEncodedParams:S,addUrlEncodedParam:function(){S.value.push({id:v.value++,key:"",value:"",active:!0})},updateUrlEncodedParam:function(e,t){S.value=S.value.map((function(n,r){return r===e?t:n}))},deleteUrlEncodedParam:function(e){var t=Object(f.cloneDeep)(S.value);t.length>0&&e===t.length-1||(_.value&&(_.value.goAway(0),_.value=null),_.value=i.success("".concat(n("state.deleted")),{action:[{text:"".concat(n("action.undo")),onClick:function(e,n){S.value=t,n.goAway(0),_.value=null}}],onComplete:function(){_.value=null}})),S.value=Object(l.pipe)(S.value,u.deleteAt(e),s.getOrElseW((function(){return Object(x.a)("Working URL Encoded Params Deletion Out of Bounds")})))},clearContent:function(){S.value=[{id:v.value++,key:"",value:"",active:!0}],k.value=""}}},k.components=Object.assign({draggable:y.a},k.components);var j=k,_=n(23),C=Object(_.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col flex-1"},[n("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileRawStickyFold sm:top-upperMobileRawTertiaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("request.body"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:e.t("app.wiki"),svg:"help-circle"}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear_all"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent()}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":e.bulkMode},attrs:{title:e.t("state.bulk_mode"),svg:"edit"},nativeOn:{click:function(t){e.bulkMode=!e.bulkMode}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("add.new"),svg:"plus",disabled:e.bulkMode},nativeOn:{click:function(t){return e.addUrlEncodedParam.apply(null,arguments)}}})],1)]),e._v(" "),e.bulkMode?n("div",{ref:"bulkEditor",staticClass:"flex flex-col flex-1"}):n("div",[n("draggable",{attrs:{animation:"250",handle:".draggable-handle",draggable:".draggable-content","ghost-class":"cursor-move","chosen-class":"bg-primaryLight","drag-class":"cursor-grabbing"},model:{value:e.workingUrlEncodedParams,callback:function(t){e.workingUrlEncodedParams=t},expression:"workingUrlEncodedParams"}},e._l(e.workingUrlEncodedParams,(function(t,r){var a;return n("div",{key:"param-"+t.id+"-"+r,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight draggable-content group"},[n("span",[n("ButtonSecondary",{staticClass:"cursor-auto text-primary hover:text-primary",class:{"draggable-handle group-hover:text-secondaryLight !cursor-grab":r!==(null===(a=e.workingUrlEncodedParams)||void 0===a?void 0:a.length)-1},attrs:{svg:"grip-vertical",tabindex:"-1"}})],1),e._v(" "),n("SmartEnvInput",{attrs:{placeholder:""+e.t("count.parameter",{count:r+1})},on:{change:function(n){return e.updateUrlEncodedParam(r,{id:t.id,key:n,value:t.value,active:t.active})}},model:{value:t.key,callback:function(n){e.$set(t,"key",n)},expression:"param.key"}}),e._v(" "),n("SmartEnvInput",{attrs:{placeholder:""+e.t("count.value",{count:r+1})},on:{change:function(n){return e.updateUrlEncodedParam(r,{id:t.id,key:t.key,value:n,active:t.active})}},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"param.value"}}),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.hasOwnProperty("active")?t.active?e.t("action.turn_off"):e.t("action.turn_on"):e.t("action.turn_off"),svg:t.hasOwnProperty("active")?t.active?"check-circle":"circle":"check-circle",color:"green"},nativeOn:{click:function(n){return e.updateUrlEncodedParam(r,{id:t.id,key:t.key,value:t.value,active:!t.active})}}})],1),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.deleteUrlEncodedParam(r)}}})],1)],1)})),0),e._v(" "),0===e.workingUrlEncodedParams.length?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/add_category.svg",loading:"lazy",alt:""+e.t("empty.body")}}),e._v(" "),n("span",{staticClass:"pb-4 text-center"},[e._v("\n        "+e._s(e.t("empty.body"))+"\n      ")]),e._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{filled:"",label:""+e.t("add.new"),svg:"plus"},nativeOn:{click:function(t){return e.addUrlEncodedParam.apply(null,arguments)}}})],1):e._e()],1)])}),[],!1,null,null,null);t.default=C.exports;installComponents(C,{ButtonSecondary:n(107).default,SmartEnvInput:n(966).default})},2283:function(e,t,n){"use strict";n.r(t);n(12);var r=n(3),a=n(1),i=n(87),o=n(54),c=n(25),l=n(996),u=n(114),s={setup:function(e,t){var n=t.emit,s=Object.keys(l.b),p=Object(c.h)(u.j,null,u.t),d=Object(c.h)(u.l,[],u.v),f=Object(r.a)((function(){return Object(a.pipe)(d.value,i.findLast((function(e){return"content-type"===e.key.toLowerCase()&&e.active})),o.map((function(e){return e.value})),o.getOrElse((function(){return""})))})),v=function(){return Object(a.pipe)(d.value,i.some((function(e){return"content-type"===e.key.toLowerCase()})))};return{validContentTypes:s,contentType:p,overridenContentType:f,contentTypeOverride:function(e){n("change-tab",e),v()||Object(u.a)({key:"Content-Type",value:"",active:!0})}}}},p=s,d=n(23),f=Object(d.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col flex-1"},[n("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileSecondaryStickyFold sm:top-upperSecondaryStickyFold"},[n("span",{staticClass:"flex items-center"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n        "+e._s(e.$t("request.content_type"))+"\n      ")]),e._v(" "),n("tippy",{ref:"contentTypeOptions",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:""},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("span",{staticClass:"select-wrapper"},[n("ButtonSecondary",{staticClass:"pr-8 ml-2 rounded-none",attrs:{label:e.contentType||e.$t("state.none").toLowerCase()}})],1)]},proxy:!0}])},[e._v(" "),n("div",{staticClass:"flex flex-col",attrs:{role:"menu"}},[n("SmartItem",{attrs:{label:e.$t("state.none").toLowerCase(),"info-icon":null===e.contentType?"done":"","active-info-icon":null===e.contentType},nativeOn:{click:function(t){return function(){e.contentType=null,e.$refs.contentTypeOptions.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),e._l(e.validContentTypes,(function(t,r){return n("SmartItem",{key:"contentTypeItem-"+r,attrs:{label:t,"info-icon":t===e.contentType?"done":"","active-info-icon":t===e.contentType},nativeOn:{click:function(n){return function(){e.contentType=t,e.$refs.contentTypeOptions.tippy().hide()}.apply(null,arguments)}}})}))],2)]),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip",allowHTML:!0},expression:"{ theme: 'tooltip', allowHTML: true }"}],class:["!px-1 !py-0.5",{"text-yellow-500 hover:text-yellow-500":e.overridenContentType}],attrs:{title:e.$t("request.override_help"),label:e.overridenContentType?e.$t("request.overriden")+": "+e.overridenContentType:e.$t("request.override"),svg:e.overridenContentType?"info":"refresh-cw",filled:"",outline:""},nativeOn:{click:function(t){return e.contentTypeOverride("headers")}}})],1)]),e._v(" "),"multipart/form-data"===e.contentType?n("HttpBodyParameters"):"application/x-www-form-urlencoded"===e.contentType?n("HttpURLEncodedParams"):null!==e.contentType?n("HttpRawBody",{attrs:{"content-type":e.contentType}}):e._e(),e._v(" "),null==e.contentType?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/upload_single_file.svg",loading:"lazy",alt:""+e.$t("empty.body")}}),e._v(" "),n("span",{staticClass:"pb-4 text-center"},[e._v(e._s(e.$t("empty.body")))]),e._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{outline:"",label:""+e.$t("app.documentation"),to:"https://docs.hoppscotch.io/features/body",blank:"",svg:"external-link",reverse:""}})],1):e._e()],1)}),[],!1,null,null,null);t.default=f.exports;installComponents(f,{ButtonSecondary:n(107).default,SmartItem:n(124).default,HttpBodyParameters:n(2086).default,HttpURLEncodedParams:n(2087).default,HttpRawBody:n(2085).default})}}]);