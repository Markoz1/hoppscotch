(window.webpackJsonp=window.webpackJsonp||[]).push([[10,47,99],{1087:function(e,t,r){r(1101)},1101:function(e,t,r){"use strict";var o=r(24),n=r(27),a=r(43),l=r(41),c=r(108),i=r(57),d=r(305),u=r(81),s=r(158),v=r(306),m=r(511),p=r(59),f=r(105),b=p("replace"),g=RegExp.prototype,y=n.TypeError,h=l(v),k=l("".indexOf),x=l("".replace),O=l("".slice),j=Math.max,w=function(e,t,r){return r>e.length?-1:""===t?r:k(e,t,r)};o({target:"String",proto:!0},{replaceAll:function(e,t){var r,o,n,l,v,p,C,E,S,_=c(this),I=0,B=0,N="";if(null!=e){if((r=d(e))&&(o=u(c("flags"in g?e.flags:h(e))),!~k(o,"g")))throw y("`.replaceAll` does not allow non-global regexes");if(n=s(e,b))return a(n,e,_,t);if(f&&r)return x(u(_),e,t)}for(l=u(_),v=u(e),(p=i(t))||(t=u(t)),C=v.length,E=j(1,C),I=w(l,v,0);-1!==I;)S=p?u(t(v,I,l)):m(v,l,I,[],void 0,t),N+=O(l,B,I)+S,B=I+C,I=w(l,v,I+E);return B<l.length&&(N+=O(l,B)),N}})},2030:function(e,t,r){"use strict";r.r(t);r(93),r(99),r(80),r(62),r(10),r(98),r(100),r(73),r(12),r(11),r(15),r(8),r(14);var o=r(34),n=r(39),a=(r(503),r(5),r(132),r(63),r(13),r(56),r(115),r(180),r(239)),l=r.n(a),c=r(3),i=r(16),d=r(74),u=r(104),s=r(25);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw a}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var b={};b.props={show:{key:"show",required:!1,type:Boolean,default:!1},action:{key:"action",required:!1,type:String,default:"edit"},editingEnvironmentIndex:{key:"editingEnvironmentIndex",required:!1,type:[Number,String,null],default:null},envVars:{key:"envVars",required:!1,type:Function,default:function(){return[]}}},b.setup=function(e,t){var r=Object(s.d)(),o=Object(s.j)(),a=e,v=t.emit,f=Object(c.o)(null),b=Object(c.o)([{key:"",value:""}]),g=Object(c.o)("trash-2"),y=Object(s.g)(u.m,[]),h=Object(c.a)((function(){return"Global"===a.editingEnvironmentIndex?{name:"Global",variables:Object(u.l)()}:"new"===a.action?{name:"",variables:a.envVars()}:null!==a.editingEnvironmentIndex?Object(u.k)(a.editingEnvironmentIndex):null})),k=Object(s.g)(u.g,[])||a.envVars(),x=Object(c.a)((function(){var e,t=p(b.value);try{for(t.s();!(e=t.n()).done;){var r=e.value,o=Object(d.parseTemplateStringE)(r.value.toString(),b.value);if(i.isLeft(o))return console.error("error",o.left),!0}}catch(e){t.e(e)}finally{t.f()}return!1})),O=Object(c.a)((function(){return x?[]:"Global"===a.editingEnvironmentIndex?Object(n.a)(b.value.map((function(e){return m(m({},e),{},{source:f.value})}))):[].concat(Object(n.a)(b.value.map((function(e){return m(m({},e),{},{source:f.value})}))),Object(n.a)(y.value.map((function(e){return m(m({},e),{},{source:"Global"})}))))}));Object(c.y)((function(){return a.show}),(function(e){var t,r,o,n;e&&(f.value=null!==(r=null===(t=h.value)||void 0===t?void 0:t.name)&&void 0!==r?r:null,b.value=l()(null!==(n=null===(o=h.value)||void 0===o?void 0:o.variables)&&void 0!==n?n:[]))}));var j=function(){f.value=null,v("hide-modal")};return{t:r,name:f,vars:b,clearIcon:g,evnExpandError:x,liveEnvs:O,clearContent:function(){b.value=[],g.value="check",o.success("".concat(r("state.cleared"))),setTimeout((function(){return g.value="trash-2"}),1e3)},addEnvironmentVariable:function(){b.value.push({key:"",value:""})},removeEnvironmentVariable:function(e){b.value.splice(e,1)},saveEnvironment:function(){if(f.value){var e={name:f.value,variables:b.value};"new"===a.action?(Object(u.d)(f.value),Object(u.s)(k.value.length-1,e),Object(u.p)(k.value.length-1),o.success("".concat(r("environment.created")))):"Global"===a.editingEnvironmentIndex?(Object(u.r)(e.variables),o.success("".concat(r("environment.updated")))):null!==a.editingEnvironmentIndex&&(Object(u.s)(a.editingEnvironmentIndex,e),o.success("".concat(r("environment.updated")))),j()}else o.error("".concat(r("environment.invalid_name")))},hideModal:j}};var g=b,y=r(23),h=Object(y.a)(g,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("SmartModal",{attrs:{dialog:"",title:e.t("environment."+e.action)},on:{close:e.hideModal},scopedSlots:e._u([{key:"body",fn:function(){return[r("div",{staticClass:"flex flex-col px-2"},[r("div",{staticClass:"relative flex"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelEnvEdit",placeholder:" ",type:"text",autocomplete:"off",disabled:"Global"===e.editingEnvironmentIndex},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveEnvironment.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),r("label",{attrs:{for:"selectLabelEnvEdit"}},[e._v("\n          "+e._s(e.t("action.label"))+"\n        ")])]),e._v(" "),r("div",{staticClass:"flex items-center justify-between flex-1"},[r("label",{staticClass:"p-4",attrs:{for:"variableList"}},[e._v("\n          "+e._s(e.t("environment.variable_list"))+"\n        ")]),e._v(" "),r("div",{staticClass:"flex"},[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear_all"),svg:e.clearIcon},nativeOn:{click:function(t){return e.clearContent()}}}),e._v(" "),r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{svg:"plus",title:e.t("add.new")},nativeOn:{click:function(t){return e.addEnvironmentVariable.apply(null,arguments)}}})],1)]),e._v(" "),e.evnExpandError?r("div",{staticClass:"w-full px-4 py-2 mb-2 overflow-auto font-mono text-red-400 whitespace-normal rounded bg-primaryLight"},[e._v("\n        "+e._s(e.t("environment.nested_overflow"))+"\n      ")]):e._e(),e._v(" "),r("div",{staticClass:"border rounded divide-y divide-dividerLight border-divider"},[e._l(e.vars,(function(t,o){return r("div",{key:"variable-"+o,staticClass:"flex divide-x divide-dividerLight"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"variable.key"}],staticClass:"flex flex-1 px-4 py-2 bg-transparent",attrs:{placeholder:""+e.t("count.variable",{count:o+1}),name:"param"+o},domProps:{value:t.key},on:{input:function(r){r.target.composing||e.$set(t,"key",r.target.value)}}}),e._v(" "),r("SmartEnvInput",{attrs:{placeholder:""+e.t("count.value",{count:o+1}),envs:e.liveEnvs,name:"value"+o},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"variable.value"}}),e._v(" "),r("div",{staticClass:"flex"},[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{id:"variable",title:e.t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.removeEnvironmentVariable(o)}}})],1)],1)})),e._v(" "),0===e.vars.length?r("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[r("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/blockchain.svg",loading:"lazy",alt:""+e.t("empty.environments")}}),e._v(" "),r("span",{staticClass:"pb-4 text-center"},[e._v("\n            "+e._s(e.t("empty.environments"))+"\n          ")]),e._v(" "),r("ButtonSecondary",{staticClass:"mb-4",attrs:{label:""+e.t("add.new"),filled:""},nativeOn:{click:function(t){return e.addEnvironmentVariable.apply(null,arguments)}}})],1):e._e()],2)])]},proxy:!0},{key:"footer",fn:function(){return[r("span",[r("ButtonPrimary",{attrs:{label:""+e.t("action.save")},nativeOn:{click:function(t){return e.saveEnvironment.apply(null,arguments)}}}),e._v(" "),r("ButtonSecondary",{attrs:{label:""+e.t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,1157880366)}):e._e()}),[],!1,null,null,null);t.default=h.exports;installComponents(h,{ButtonSecondary:r(107).default,SmartEnvInput:r(966).default,ButtonPrimary:r(171).default,SmartModal:r(112).default})},962:function(e,t,r){"use strict";r.d(t,"b",(function(){return h})),r.d(t,"d",(function(){return k})),r.d(t,"a",(function(){return j})),r.d(t,"c",(function(){return w}));var o=r(39),n=(r(56),r(1237),r(13),r(907)),a=r(997),l=r(1238),c=r(912),i=r(1e3),d=r(940),u=r(1104),s=r(1006),v=r(1234),m=r(1239),p=r(1241),f=r(1001),b=r(1242),g=r(1240),y=r(1007),h=n.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"0.5em",paddingRight:"0.5em"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),k=n.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-sans)",color:"var(--secondary-dark-color)",backgroundColor:"transparent"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.2rem",paddingBottom:"0.2rem"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),x="var(--editor-name-color)",O="var(--editor-constant-color)",j=a.a.define([{tag:a.d.keyword,color:"var(--editor-keyword-color)"},{tag:[a.d.name,a.d.deleted,a.d.character,a.d.propertyName,a.d.macroName],color:x},{tag:[a.d.function(a.d.variableName),a.d.labelName],color:"var(--editor-variable-color)"},{tag:[a.d.color,a.d.constant(a.d.name),a.d.standard(a.d.name)],color:O},{tag:[a.d.definition(a.d.name),a.d.separator],color:"var(--editor-separator-color)"},{tag:[a.d.typeName,a.d.className,a.d.number,a.d.changed,a.d.annotation,a.d.modifier,a.d.self,a.d.namespace],color:"var(--editor-type-color)"},{tag:[a.d.operator,a.d.operatorKeyword,a.d.url,a.d.escape,a.d.regexp,a.d.link,a.d.special(a.d.string)],color:"var(--editor-operator-color)"},{tag:[a.d.meta,a.d.comment],color:"var(--editor-meta-color)"},{tag:a.d.strong,fontWeight:"bold"},{tag:a.d.emphasis,fontStyle:"italic"},{tag:a.d.strikethrough,textDecoration:"line-through"},{tag:a.d.link,color:"var(--editor-link-color)",textDecoration:"underline"},{tag:a.d.heading,fontWeight:"bold",color:x},{tag:[a.d.atom,a.d.bool,a.d.special(a.d.variableName)],color:O},{tag:[a.d.processingInstruction,a.d.string,a.d.inserted],color:"var(--editor-process-color)"},{tag:a.d.invalid,color:"var(--editor-invalid-color)"}]),w=[Object(u.d)(),Object(u.c)(),Object(n.l)(),Object(i.a)(),Object(l.a)({openText:"▾",closedText:"▸"}),Object(n.i)(),Object(n.j)(),c.g.allowMultipleSelections.of(!0),Object(d.p)(),a.b.fallback,Object(v.a)(),Object(m.a)(),Object(f.a)(),Object(g.b)(),Object(g.a)(),Object(n.k)(),Object(p.a)(),n.m.of([].concat(Object(o.a)(m.b),Object(o.a)(s.a),Object(o.a)(p.c),Object(o.a)(i.b),Object(o.a)(l.b),Object(o.a)(b.a),Object(o.a)(f.c),Object(o.a)(y.a))),Object(p.b)()]},963:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var o=r(173),n=r(174),a=(r(62),r(93),r(131),r(5),r(3)),l=r(912),c=r(998),i=r(907),d=r(16),u=r(74),s=r(104),v=/(<<\w+>>)/g,m=function(e){return Object(c.b)((function(t,r,o){for(var n,a,l,c,i=t.state.doc.lineAt(r),s=i.from,m=i.to,p=i.text,f=r,b=r;f>s&&/\w/.test(p[f-s-1]);)f--;for(;b<m&&/\w/.test(p[b-s]);)b++;if(f===r&&o<0||b===r&&o>0||!v.test(p.slice(f-s-2,b-s+2)))return null;var g=null!==(a=null===(n=e.find((function(e){return e.key===p.slice(f-s,b-s)})))||void 0===n?void 0:n.sourceEnv)&&void 0!==a?a:"choose an environment",y=null!==(c=null===(l=e.find((function(e){return e.key===p.slice(f-s,b-s)})))||void 0===l?void 0:l.value)&&void 0!==c?c:"not found",h=Object(u.parseTemplateStringE)(y,e),k=d.isLeft(h)?"error":h.right;return{pos:f,end:m,above:!0,arrow:!0,create:function(){var e=document.createElement("span"),t=document.createElement("xmp");return t.textContent=k,e.appendChild(document.createTextNode("".concat(g," "))),e.appendChild(t),e.className="tooltip-theme",{dom:e}}}}),{hoverTime:1})};var p=function(e){return new i.e({regexp:v,decoration:function(t){return function(e,t){var r=t.find((function(t){return t.key===e.slice(2,-2)}))?"bg-accentDark text-accentContrast hover:bg-accent":"bg-red-500 text-accentContrast hover:bg-red-600";return i.b.mark({class:"".concat("cursor-help transition rounded px-1 focus:outline-none mx-0.5 env-highlight"," ").concat(r)})}(t[0],e)}})},f=function(e){var t=p(e);return i.g.define((function(e){return{decorations:t.createDeco(e),update:function(e){this.decorations=t.updateDeco(e,this.decorations)}}}),{decorations:function(e){return e.decorations}})},b=function(){function e(t,r){var n=this;Object(o.a)(this,e),this.editorView=r,this.compartment=new l.e,this.envs=[],this.envs=Object(s.i)(),t(s.b,(function(e){var t;n.envs=e,null===(t=n.editorView.value)||void 0===t||t.dispatch({effects:n.compartment.reconfigure([m(n.envs),f(n.envs)])})}))}return Object(n.a)(e,[{key:"extension",get:function(){return this.compartment.of([m(this.envs),f(this.envs)])}}]),e}(),g=function(){function e(t,r){var n=this;Object(o.a)(this,e),this.editorView=r,this.compartment=new l.e,this.envs=[],Object(a.y)(t,(function(e){var t;n.envs=e,null===(t=n.editorView.value)||void 0===t||t.dispatch({effects:n.compartment.reconfigure([m(n.envs),f(n.envs)])})}),{immediate:!0})}return Object(n.a)(e,[{key:"extension",get:function(){return this.compartment.of([m(this.envs),f(this.envs)])}}]),e}()},966:function(e,t,r){"use strict";r.r(t);var o=r(39),n=r(173),a=r(174),l=(r(62),r(156),r(1087),r(172),r(1100),r(63),r(131),r(5),r(3)),c=r(907),i=r(912),d=r(239),u=r.n(d),s=r(998),v=r(1e3),m=r(962),p=r(963),f=r(25),b=r(104),g={};g.props={value:{key:"value",required:!1,type:String,default:""},placeholder:{key:"placeholder",required:!1,type:String,default:""},styles:{key:"styles",required:!1,type:String,default:""},envs:{key:"envs",required:!1,type:[Array,null],default:null},focus:{key:"focus",required:!1,type:Boolean,default:!1}},g.setup=function(e,t){var r=e,d=t.emit,g=Object(l.o)(r.value),y=Object(l.o)(),h=Object(l.o)(null);Object(l.y)((function(){return r.value}),(function(e){var t,r,o=e.replaceAll("\n",""),n=null===(t=y.value)||void 0===t?void 0:t.state.doc.toJSON().join(y.value.state.lineBreak);g.value===o&&e===n||(g.value=o,null===(r=y.value)||void 0===r||r.dispatch({filter:!1,changes:{from:0,to:y.value.state.doc.length,insert:o}}))}),{immediate:!0,flush:"sync"});var k=null,x=null,O=Object(f.g)(b.b,[]),j=Object(l.a)((function(){return r.envs?r.envs.map((function(e){return{key:e.key,value:e.value,sourceEnv:e.source}})):O.value})),w=new p.b(j,y),C=function(e){var t=[c.d.contentAttributes.of({"aria-label":r.placeholder}),m.d,Object(s.d)({position:"absolute"}),w,Object(c.o)(r.placeholder),c.d.domEventHandlers({paste:function(e){var t,r;k=e,x=null!==(r=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text"))&&void 0!==r?r:""},drop:function(e){e.preventDefault()}}),c.g.fromClass(function(){function e(){Object(n.a)(this,e)}return Object(a.a)(e,[{key:"update",value:function(e){if(e.docChanged){var t=u()(g.value);g.value=e.state.doc.toJSON().join(e.state.lineBreak);var r=u()(g.value).replaceAll("\n","");if(d("input",r),d("change",r),!!e.transactions.find((function(e){return e.isUserEvent("input.paste")}))&&k){var o=x;Object(l.g)((function(){d("paste",{pastedValue:o,prevValue:t})}))}else k=null,x=null}}}]),e}()),Object(v.a)(),c.m.of(Object(o.a)(v.b))];y.value=new c.d({parent:e,state:i.g.create({doc:r.value,extensions:t})})};return Object(l.j)((function(){h.value&&(y.value||C(h.value))})),Object(l.y)(h,(function(){var e;h.value?y.value||C(h.value):(null===(e=y.value)||void 0===e||e.destroy(),y.value=void 0)})),{emit:d,editor:h}};var y=g,h=r(23),k=Object(h.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center flex-1 flex-shrink-0 overflow-auto whitespace-nowrap hide-scrollbar"},[r("div",{ref:"editor",staticClass:"flex flex-1",class:e.styles,attrs:{placeholder:e.placeholder},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.emit("enter",t))},function(t){return e.emit("keydown",t)}],keyup:function(t){return e.emit("keyup",t)},click:function(t){return e.emit("click",t)}}})])}),[],!1,null,null,null);t.default=k.exports}}]);