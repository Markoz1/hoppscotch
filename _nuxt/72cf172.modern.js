(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1198:function(t,e,o){"use strict";o.r(e);var r=o(13),i=(o(109),o(63),o(121),o(37),o(43),o(844),o(243),o(3)),n=o(15),l=o(17),a=o(101),s={};s.props={show:{key:"show",required:!0,type:Boolean}},s.setup=(t,e)=>{var o=e.emit,s=Object(l.b)(),c=Object(l.j)(),p=Object(l.d)(),u=Object(l.g)(a.o,[]),d=Object(l.g)(n.c,null),m=Object(i.o)(),v=Object(i.o)(),f=Object(i.a)((()=>JSON.stringify(u.value,null,2))),h=function(){var t=Object(r.a)((function*(){if(d.value)try{var t=yield s.$post("https://api.github.com/gists",{files:{"hoppscotch-collections.json":{content:f.value}}},{headers:{Authorization:"token ".concat(d.value.accessToken),Accept:"application/vnd.github.v3+json"}});c.success(p("export.gist_created").toString()),window.open(t.html_url)}catch(t){c.error(p("error.something_went_wrong").toString()),console.error(t)}else c.error(p("profile.no_permission").toString())}));return function(){return t.apply(this,arguments)}}(),g=()=>{c.success(p("state.file_imported").toString())},b=()=>{c.error(p("import.failed").toString())},y=function(){var t=Object(r.a)((function*(){var t=prompt(p("import.gist_url").toString());if(t)try{var{files:e}=yield s.$get("https://api.github.com/gists/".concat(t.split("/").pop()),{headers:{Accept:"application/vnd.github.v3+json"}}),o=JSON.parse(Object.values(e)[0].content);Object(a.B)(o),g()}catch(t){b(),console.error(t)}}));return function(){return t.apply(this,arguments)}}();return{t:p,currentUser:d,options:m,inputChooseFileToImportFrom:v,createCollectionGist:h,readCollectionGist:y,hideModal:()=>{o("hide-modal")},openDialogChooseFileToImportFrom:()=>{v.value&&v.value.click()},importFromJSON:()=>{if(v.value)if(v.value.files&&0!==v.value.files.length){var t=new FileReader;t.onload=t=>{var{target:e}=t,o=e.result;if(o){var r=JSON.parse(o);if(r[0]){var[i,n,l]=Object.keys(r[0]);Object(a.e)(r),g()}else b()}else c.show(p("action.choose_file").toString())},t.readAsText(v.value.files[0]),v.value.value=""}else c.show(p("action.choose_file").toString())},exportJSON:()=>{var t=f.value,e=new Blob([t],{type:"application/json"}),o=document.createElement("a"),r=URL.createObjectURL(e);o.href=r,o.download="".concat(r.split("/").pop().split("#")[0].split("?")[0],".json"),document.body.appendChild(o),o.click(),c.success(p("state.download_started").toString()),setTimeout((()=>{document.body.removeChild(o),URL.revokeObjectURL(r)}),1e3)}}};var c=s,p=o(16),u=Object(p.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("SmartModal",{attrs:{dialog:"",title:""+t.t("modal.collections"),"max-width":"sm:max-w-md"},on:{close:t.hideModal},scopedSlots:t._u([{key:"actions",fn:function(){return[o("span",[o("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:""},scopedSlots:t._u([{key:"trigger",fn:function(){return[o("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.t("action.more"),svg:"more-vertical"}})]},proxy:!0}],null,!1,3953414183)},[t._v(" "),o("div",{staticClass:"flex flex-col",attrs:{role:"menu"}},[o("SmartItem",{attrs:{icon:"assignment_returned",label:t.t("import.from_gist")},nativeOn:{click:function(e){return function(){t.readCollectionGist(),t.options.tippy().hide()}.apply(null,arguments)}}}),t._v(" "),o("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.currentUser?"github.com"!==t.currentUser.provider?""+t.t("export.require_github"):void 0:""+t.t("export.require_github")}},[o("SmartItem",{attrs:{disabled:!t.currentUser||"github.com"!==t.currentUser.provider,icon:"assignment_turned_in",label:t.t("export.create_secret_gist")},nativeOn:{click:function(e){return function(){t.createCollectionGist(),t.options.tippy().hide()}.apply(null,arguments)}}})],1)],1)])],1)]},proxy:!0},{key:"body",fn:function(){return[o("div",{staticClass:"flex flex-col px-2 space-y-2"},[o("SmartItem",{attrs:{svg:"folder-plus",label:t.t("import.from_json")},nativeOn:{click:function(e){return t.openDialogChooseFileToImportFrom.apply(null,arguments)}}}),t._v(" "),o("input",{ref:"inputChooseFileToImportFrom",staticClass:"input",attrs:{type:"file",accept:"application/json"},on:{change:t.importFromJSON}}),t._v(" "),o("hr"),t._v(" "),o("SmartItem",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.t("action.download_file"),svg:"download",label:t.t("export.as_json")},nativeOn:{click:function(e){return t.exportJSON.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,3839700765)}):t._e()}),[],!1,null,null,null);e.default=u.exports;installComponents(u,{ButtonSecondary:o(86).default,SmartItem:o(102).default,SmartModal:o(91).default})}}]);