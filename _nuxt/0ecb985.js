(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{2270:function(e,t,n){var o=n(2332);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(118).default)("c425d6a4",o,!0,{sourceMap:!1})},2331:function(e,t,n){"use strict";n(2270)},2332:function(e,t,n){var o=n(117)(!1);o.push([e.i,".covers-response[data-v-214e0772] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n  height: 100%;\n  width: 100%;\n  border-width: 1px;\n  border-color: var(--divider-light-color);\n  z-index: 5;\n}",""]),e.exports=o},2374:function(e,t,n){"use strict";n.r(t);var o=n(3);var r=n(2051),a=n(2e3),i=n(2052),l=n(965),s=n(25),p={props:{response:{key:"response",required:!0,type:null}}};p.setup=function(e,t){var n=Object(s.d)(),p=e,c=Object(o.o)(null),d=Object(o.o)(!0),v=Object(r.a)(p.response).responseBodyText,u=Object(a.a)("text/html",v),w=u.downloadIcon,b=u.downloadResponse,y=function(e,t){var n=Object(o.o)(null),r=Object(o.o)(e),a=Object(o.o)("");return{previewFrame:n,previewEnabled:r,togglePreview:function(){if(r.value=!r.value,r.value){if(n.value.getAttribute("data-previewing-url")===a.value)return;var e=(new DOMParser).parseFromString(t.value,"text/html");e.head.innerHTML='<base href="'.concat(a.value,'">')+e.head.innerHTML,n.value.srcdoc=e.documentElement.outerHTML,n.value.setAttribute("data-previewing-url",a.value)}}}}(!1,v),m=y.previewFrame,f=y.previewEnabled,h=y.togglePreview,g=Object(i.a)(v),x=g.copyIcon,O=g.copyResponse;return Object(l.a)(c,v,Object(o.m)({extendedEditorConfig:{mode:"htmlmixed",readOnly:!0,lineWrapping:d},linter:null,completer:null,environmentHighlights:!0})),{t:n,htmlResponse:c,linewrapEnabled:d,downloadIcon:w,downloadResponse:b,previewFrame:m,previewEnabled:f,togglePreview:h,copyIcon:x,copyResponse:O}};var c=p,d=(n(2331),n(23)),v=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col flex-1"},[n("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-lowerSecondaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("response.body"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[e.response.body?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":e.linewrapEnabled},attrs:{title:e.t("state.linewrap"),svg:"wrap-text"},nativeOn:{click:function(t){t.preventDefault(),e.linewrapEnabled=!e.linewrapEnabled}}}):e._e(),e._v(" "),e.response.body?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.previewEnabled?e.t("hide.preview"):e.t("response.preview_html"),svg:e.previewEnabled?"eye-off":"eye"},nativeOn:{click:function(t){return t.preventDefault(),e.togglePreview.apply(null,arguments)}}}):e._e(),e._v(" "),e.response.body?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"downloadResponse",attrs:{title:e.t("action.download_file"),svg:e.downloadIcon},nativeOn:{click:function(t){return e.downloadResponse.apply(null,arguments)}}}):e._e(),e._v(" "),e.response.body?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"copyResponse",attrs:{title:e.t("action.copy"),svg:e.copyIcon},nativeOn:{click:function(t){return e.copyResponse.apply(null,arguments)}}}):e._e()],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.previewEnabled,expression:"!previewEnabled"}],ref:"htmlResponse",staticClass:"flex flex-col flex-1"}),e._v(" "),n("iframe",{directives:[{name:"show",rawName:"v-show",value:e.previewEnabled,expression:"previewEnabled"}],ref:"previewFrame",staticClass:"covers-response",attrs:{src:"about:blank",loading:"lazy",sandbox:""}})])}),[],!1,null,"214e0772",null);t.default=v.exports;installComponents(v,{ButtonSecondary:n(107).default})}}]);