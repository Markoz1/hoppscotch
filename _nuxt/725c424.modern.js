(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1012:function(t,e,n){"use strict";n.r(e);var a=n(17),l={props:{show:{key:"show",required:!0,type:null}},setup:(t,e)=>{var n=Object(a.d)(),l=e.emit;return{t:n,saveApiChange:()=>{l("save-change")},discardApiChange:()=>{l("discard-change")},hideModal:()=>{l("hide-modal")}}}},o=l,r=n(16),i=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("SmartModal",{attrs:{dialog:"",title:t.$t("modal.confirm"),"aria-modal":"true"},on:{close:t.hideModal},scopedSlots:t._u([{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2"},[n("label",[t._v("\n        "+t._s(t.t("confirm.request_change"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("span",[n("ButtonPrimary",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{label:t.t("action.save")},nativeOn:{click:function(e){return t.saveApiChange.apply(null,arguments)}}}),t._v(" "),n("ButtonSecondary",{attrs:{label:t.t("action.dont_save")},nativeOn:{click:function(e){return t.discardApiChange.apply(null,arguments)}}})],1),t._v(" "),n("ButtonSecondary",{attrs:{label:t.t("action.cancel")},nativeOn:{click:function(e){return t.hideModal.apply(null,arguments)}}})]},proxy:!0}],null,!1,4101210097)}):t._e()}),[],!1,null,null,null);e.default=i.exports;installComponents(i,{ButtonPrimary:n(141).default,ButtonSecondary:n(86).default,SmartModal:n(91).default})}}]);