(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1087:function(o,r,e){e(1101)},1101:function(o,r,e){"use strict";var t=e(24),a=e(27),n=e(43),c=e(41),l=e(108),i=e(57),d=e(305),u=e(81),s=e(158),v=e(306),m=e(511),p=e(59),f=e(105),b=p("replace"),g=RegExp.prototype,h=a.TypeError,k=c(v),y=c("".indexOf),x=c("".replace),j=c("".slice),C=Math.max,O=function(o,r,e){return e>o.length?-1:""===r?e:y(o,r,e)};t({target:"String",proto:!0},{replaceAll:function(o,r){var e,t,a,c,v,p,w,B,E,N=l(this),S=0,L=0,A="";if(null!=o){if((e=d(o))&&(t=u(l("flags"in g?o.flags:k(o))),!~y(t,"g")))throw h("`.replaceAll` does not allow non-global regexes");if(a=s(o,b))return n(a,o,N,r);if(f&&e)return x(u(N),o,r)}for(c=u(N),v=u(o),(p=i(r))||(r=u(r)),w=v.length,B=C(1,w),S=O(c,v,0);-1!==S;)E=p?u(r(v,S,c)):m(v,c,S,[],void 0,r),A+=j(c,L,S)+E,L=S+w,S=O(c,v,S+B);return L<c.length&&(A+=j(c,L)),A}})},962:function(o,r,e){"use strict";e.d(r,"b",(function(){return k})),e.d(r,"d",(function(){return y})),e.d(r,"a",(function(){return C})),e.d(r,"c",(function(){return O}));var t=e(39),a=(e(56),e(1237),e(13),e(907)),n=e(997),c=e(1238),l=e(912),i=e(1e3),d=e(940),u=e(1104),s=e(1006),v=e(1234),m=e(1239),p=e(1241),f=e(1001),b=e(1242),g=e(1240),h=e(1007),k=a.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"0.5em",paddingRight:"0.5em"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),y=a.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-sans)",color:"var(--secondary-dark-color)",backgroundColor:"transparent"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.2rem",paddingBottom:"0.2rem"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),x="var(--editor-name-color)",j="var(--editor-constant-color)",C=n.a.define([{tag:n.d.keyword,color:"var(--editor-keyword-color)"},{tag:[n.d.name,n.d.deleted,n.d.character,n.d.propertyName,n.d.macroName],color:x},{tag:[n.d.function(n.d.variableName),n.d.labelName],color:"var(--editor-variable-color)"},{tag:[n.d.color,n.d.constant(n.d.name),n.d.standard(n.d.name)],color:j},{tag:[n.d.definition(n.d.name),n.d.separator],color:"var(--editor-separator-color)"},{tag:[n.d.typeName,n.d.className,n.d.number,n.d.changed,n.d.annotation,n.d.modifier,n.d.self,n.d.namespace],color:"var(--editor-type-color)"},{tag:[n.d.operator,n.d.operatorKeyword,n.d.url,n.d.escape,n.d.regexp,n.d.link,n.d.special(n.d.string)],color:"var(--editor-operator-color)"},{tag:[n.d.meta,n.d.comment],color:"var(--editor-meta-color)"},{tag:n.d.strong,fontWeight:"bold"},{tag:n.d.emphasis,fontStyle:"italic"},{tag:n.d.strikethrough,textDecoration:"line-through"},{tag:n.d.link,color:"var(--editor-link-color)",textDecoration:"underline"},{tag:n.d.heading,fontWeight:"bold",color:x},{tag:[n.d.atom,n.d.bool,n.d.special(n.d.variableName)],color:j},{tag:[n.d.processingInstruction,n.d.string,n.d.inserted],color:"var(--editor-process-color)"},{tag:n.d.invalid,color:"var(--editor-invalid-color)"}]),O=[Object(u.d)(),Object(u.c)(),Object(a.l)(),Object(i.a)(),Object(c.a)({openText:"▾",closedText:"▸"}),Object(a.i)(),Object(a.j)(),l.g.allowMultipleSelections.of(!0),Object(d.p)(),n.b.fallback,Object(v.a)(),Object(m.a)(),Object(f.a)(),Object(g.b)(),Object(g.a)(),Object(a.k)(),Object(p.a)(),a.m.of([].concat(Object(t.a)(m.b),Object(t.a)(s.a),Object(t.a)(p.c),Object(t.a)(i.b),Object(t.a)(c.b),Object(t.a)(b.a),Object(t.a)(f.c),Object(t.a)(h.a))),Object(p.b)()]},963:function(o,r,e){"use strict";e.d(r,"a",(function(){return b})),e.d(r,"b",(function(){return g}));var t=e(173),a=e(174),n=(e(62),e(93),e(131),e(5),e(3)),c=e(912),l=e(998),i=e(907),d=e(16),u=e(74),s=e(104),v=/(<<\w+>>)/g,m=function(o){return Object(l.b)((function(r,e,t){for(var a,n,c,l,i=r.state.doc.lineAt(e),s=i.from,m=i.to,p=i.text,f=e,b=e;f>s&&/\w/.test(p[f-s-1]);)f--;for(;b<m&&/\w/.test(p[b-s]);)b++;if(f===e&&t<0||b===e&&t>0||!v.test(p.slice(f-s-2,b-s+2)))return null;var g=null!==(n=null===(a=o.find((function(o){return o.key===p.slice(f-s,b-s)})))||void 0===a?void 0:a.sourceEnv)&&void 0!==n?n:"choose an environment",h=null!==(l=null===(c=o.find((function(o){return o.key===p.slice(f-s,b-s)})))||void 0===c?void 0:c.value)&&void 0!==l?l:"not found",k=Object(u.parseTemplateStringE)(h,o),y=d.isLeft(k)?"error":k.right;return{pos:f,end:m,above:!0,arrow:!0,create:function(){var o=document.createElement("span"),r=document.createElement("xmp");return r.textContent=y,o.appendChild(document.createTextNode("".concat(g," "))),o.appendChild(r),o.className="tooltip-theme",{dom:o}}}}),{hoverTime:1})};var p=function(o){return new i.e({regexp:v,decoration:function(r){return function(o,r){var e=r.find((function(r){return r.key===o.slice(2,-2)}))?"bg-accentDark text-accentContrast hover:bg-accent":"bg-red-500 text-accentContrast hover:bg-red-600";return i.b.mark({class:"".concat("cursor-help transition rounded px-1 focus:outline-none mx-0.5 env-highlight"," ").concat(e)})}(r[0],o)}})},f=function(o){var r=p(o);return i.g.define((function(o){return{decorations:r.createDeco(o),update:function(o){this.decorations=r.updateDeco(o,this.decorations)}}}),{decorations:function(o){return o.decorations}})},b=function(){function o(r,e){var a=this;Object(t.a)(this,o),this.editorView=e,this.compartment=new c.e,this.envs=[],this.envs=Object(s.i)(),r(s.b,(function(o){var r;a.envs=o,null===(r=a.editorView.value)||void 0===r||r.dispatch({effects:a.compartment.reconfigure([m(a.envs),f(a.envs)])})}))}return Object(a.a)(o,[{key:"extension",get:function(){return this.compartment.of([m(this.envs),f(this.envs)])}}]),o}(),g=function(){function o(r,e){var a=this;Object(t.a)(this,o),this.editorView=e,this.compartment=new c.e,this.envs=[],Object(n.y)(r,(function(o){var r;a.envs=o,null===(r=a.editorView.value)||void 0===r||r.dispatch({effects:a.compartment.reconfigure([m(a.envs),f(a.envs)])})}),{immediate:!0})}return Object(a.a)(o,[{key:"extension",get:function(){return this.compartment.of([m(this.envs),f(this.envs)])}}]),o}()},966:function(o,r,e){"use strict";e.r(r);var t=e(39),a=e(173),n=e(174),c=(e(62),e(156),e(1087),e(172),e(1100),e(63),e(131),e(5),e(3)),l=e(907),i=e(912),d=e(239),u=e.n(d),s=e(998),v=e(1e3),m=e(962),p=e(963),f=e(25),b=e(104),g={};g.props={value:{key:"value",required:!1,type:String,default:""},placeholder:{key:"placeholder",required:!1,type:String,default:""},styles:{key:"styles",required:!1,type:String,default:""},envs:{key:"envs",required:!1,type:[Array,null],default:null},focus:{key:"focus",required:!1,type:Boolean,default:!1}},g.setup=function(o,r){var e=o,d=r.emit,g=Object(c.o)(e.value),h=Object(c.o)(),k=Object(c.o)(null);Object(c.y)((function(){return e.value}),(function(o){var r,e,t=o.replaceAll("\n",""),a=null===(r=h.value)||void 0===r?void 0:r.state.doc.toJSON().join(h.value.state.lineBreak);g.value===t&&o===a||(g.value=t,null===(e=h.value)||void 0===e||e.dispatch({filter:!1,changes:{from:0,to:h.value.state.doc.length,insert:t}}))}),{immediate:!0,flush:"sync"});var y=null,x=null,j=Object(f.g)(b.b,[]),C=Object(c.a)((function(){return e.envs?e.envs.map((function(o){return{key:o.key,value:o.value,sourceEnv:o.source}})):j.value})),O=new p.b(C,h),w=function(o){var r=[l.d.contentAttributes.of({"aria-label":e.placeholder}),m.d,Object(s.d)({position:"absolute"}),O,Object(l.o)(e.placeholder),l.d.domEventHandlers({paste:function(o){var r,e;y=o,x=null!==(e=null===(r=o.clipboardData)||void 0===r?void 0:r.getData("text"))&&void 0!==e?e:""},drop:function(o){o.preventDefault()}}),l.g.fromClass(function(){function o(){Object(a.a)(this,o)}return Object(n.a)(o,[{key:"update",value:function(o){if(o.docChanged){var r=u()(g.value);g.value=o.state.doc.toJSON().join(o.state.lineBreak);var e=u()(g.value).replaceAll("\n","");if(d("input",e),d("change",e),!!o.transactions.find((function(o){return o.isUserEvent("input.paste")}))&&y){var t=x;Object(c.g)((function(){d("paste",{pastedValue:t,prevValue:r})}))}else y=null,x=null}}}]),o}()),Object(v.a)(),l.m.of(Object(t.a)(v.b))];h.value=new l.d({parent:o,state:i.g.create({doc:e.value,extensions:r})})};return Object(c.j)((function(){k.value&&(h.value||w(k.value))})),Object(c.y)(k,(function(){var o;k.value?h.value||w(k.value):(null===(o=h.value)||void 0===o||o.destroy(),h.value=void 0)})),{emit:d,editor:k}};var h=g,k=e(23),y=Object(k.a)(h,(function(){var o=this,r=o.$createElement,e=o._self._c||r;return e("div",{staticClass:"flex items-center flex-1 flex-shrink-0 overflow-auto whitespace-nowrap hide-scrollbar"},[e("div",{ref:"editor",staticClass:"flex flex-1",class:o.styles,attrs:{placeholder:o.placeholder},on:{keydown:[function(r){return!r.type.indexOf("key")&&o._k(r.keyCode,"enter",13,r.key,"Enter")?null:(r.preventDefault(),o.emit("enter",r))},function(r){return o.emit("keydown",r)}],keyup:function(r){return o.emit("keyup",r)},click:function(r){return o.emit("click",r)}}})])}),[],!1,null,null,null);r.default=y.exports}}]);