(window.webpackJsonp=window.webpackJsonp||[]).push([[65,95],{1881:function(e,t,n){var r=n(1987);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(118).default)("465ec2e2",r,!0,{sourceMap:!1})},1986:function(e,t,n){"use strict";n(1881)},1987:function(e,t,n){var r=n(117)(!1);r.push([e.i,".autocomplete-wrapper[data-v-3068c061] {\n  position: relative;\n  display: contents;\n}\n.autocomplete-wrapper input:focus+ul.suggestions[data-v-3068c061], .autocomplete-wrapper ul.suggestions[data-v-3068c061]:hover {\n  display: block;\n}\n.autocomplete-wrapper ul.suggestions[data-v-3068c061] {\n  display: none;\n  background-color: var(--popover-color);\n  position: absolute;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  left: 0px;\n  z-index: 50;\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0/0.1),0 4px 6px -4px rgb(0 0 0/0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);\n  -webkit-box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);\n  max-height: 11.5rem;\n  overflow-y: auto;\n  top: calc(100% - 4px);\n  border-radius: 0 0 8px 8px;\n}\n.autocomplete-wrapper ul.suggestions li[data-v-3068c061] {\n  width: 100%;\n  display: block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  color: var(--secondary-color);\n}\n.autocomplete-wrapper ul.suggestions li[data-v-3068c061]:last-child {\n  border-radius: 0 0 8px 8px;\n}\n.autocomplete-wrapper ul.suggestions li[data-v-3068c061]:hover, .autocomplete-wrapper ul.suggestions li.active[data-v-3068c061] {\n  background-color: var(--accent-dark-color);\n  color: var(--accent-contrast-color);\n  cursor: pointer;\n}",""]),e.exports=r},2001:function(e,t,n){"use strict";n.r(t);n(93),n(63),n(11),n(5),n(201),n(131);var r=n(3),o=Object(r.c)({props:{spellcheck:{type:Boolean,default:!0,required:!1},autocapitalize:{type:String,default:"off",required:!1},placeholder:{type:String,default:"",required:!1},source:{type:Array,required:!0},value:{type:String,default:"",required:!1},styles:{type:String,default:""}},data:function(){return{text:this.value,selectionStart:0,suggestionsOffsetLeft:0,currentSuggestionIndex:-1,suggestionsVisible:!1}},computed:{suggestions:function(){var e=this,t=this.text.substring(0,this.selectionStart);return this.source.filter((function(e){return e.toLowerCase().startsWith(t.toLowerCase())&&t.toLowerCase()!==e.toLowerCase()})).map((function(t){return t.substring(e.selectionStart)})).slice(0,10)}},watch:{text:function(){this.$emit("input",this.text)},value:function(e){this.text=e}},mounted:function(){this.updateSuggestions({target:this.$refs.acInput})},methods:{updateSuggestions:function(e){if(e.code&&"Escape"===e.code)return e.preventDefault(),this.suggestionsVisible=!1,void(this.currentSuggestionIndex=-1);this.selectionStart=this.$refs.acInput.selectionStart,this.suggestionsOffsetLeft=12*this.selectionStart,this.suggestionsVisible=!0},forceSuggestion:function(e){var t=this.text.substring(0,this.selectionStart);this.text=t+e,this.selectionStart=this.text.length,this.suggestionsVisible=!0,this.currentSuggestionIndex=-1},handleKeystroke:function(e){var t=this;switch(e.code){case"Enter":e.preventDefault(),this.currentSuggestionIndex>-1&&this.forceSuggestion(this.suggestions.find((function(e,n){return n===t.currentSuggestionIndex})));break;case"ArrowUp":e.preventDefault(),this.currentSuggestionIndex=this.currentSuggestionIndex-1>=0?this.currentSuggestionIndex-1:0;break;case"ArrowDown":e.preventDefault(),this.currentSuggestionIndex=this.currentSuggestionIndex<this.suggestions.length-1?this.currentSuggestionIndex+1:this.suggestions.length-1;break;case"Tab":var n=this.suggestions[this.currentSuggestionIndex>=0?this.currentSuggestionIndex:0];if(!n)return;e.preventDefault();var r=this.text.substring(0,this.selectionStart);this.text=r+n}}}}),a=(n(1986),n(23)),i=Object(a.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"autocomplete-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],ref:"acInput",class:e.styles,attrs:{type:"text",autocomplete:"off",placeholder:e.placeholder,spellcheck:e.spellcheck,autocapitalize:e.autocapitalize},domProps:{value:e.text},on:{input:[function(t){t.target.composing||(e.text=t.target.value)},e.updateSuggestions],keyup:e.updateSuggestions,click:e.updateSuggestions,keydown:e.handleKeystroke,change:function(t){return e.$emit("change",t)}}}),e._v(" "),e.suggestions.length>0&&e.suggestionsVisible?n("ul",{staticClass:"suggestions hide-scrollbar",style:{transform:"translate("+e.suggestionsOffsetLeft+"px, 0)"}},e._l(e.suggestions,(function(t,r){return n("li",{key:"suggestion-"+r,class:{active:e.currentSuggestionIndex===r},on:{click:function(n){return n.preventDefault(),e.forceSuggestion(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])})),0):e._e()])}),[],!1,null,"3068c061",null);t.default=i.exports},2010:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=["WWW-Authenticate","Authorization","Proxy-Authenticate","Proxy-Authorization","Age","Cache-Control","Clear-Site-Data","Expires","Pragma","Warning","Accept-CH","Accept-CH-Lifetime","Early-Data","Content-DPR","DPR","Device-Memory","Save-Data","Viewport-Width","Width","Last-Modified","ETag","If-Match","If-None-Match","If-Modified-Since","If-Unmodified-Since","Vary","Connection","Keep-Alive","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Expect","Max-Forwards","Cookie","Set-Cookie","Cookie2","Set-Cookie2","Access-Control-Allow-Origin","Access-Control-Allow-Credentials","Access-Control-Allow-Headers","Access-Control-Allow-Methods","Access-Control-Expose-Headers","Access-Control-Max-Age","Access-Control-Request-Headers","Access-Control-Request-Method","Origin","Service-Worker-Allowed","Timing-Allow-Origin","X-Permitted-Cross-Domain-Policies","DNT","Tk","Content-Disposition","Content-Length","Content-Type","Content-Encoding","Content-Language","Content-Location","Forwarded","X-Forwarded-For","X-Forwarded-Host","X-Forwarded-Proto","Via","Location","From","Host","Referer","Referrer-Policy","User-Agent","Allow","Server","Accept-Ranges","Range","If-Range","Content-Range","Cross-Origin-Opener-Policy","Cross-Origin-Resource-Policy","Content-Security-Policy","Content-Security-Policy-Report-Only","Expect-CT","Feature-Policy","Public-Key-Pins","Public-Key-Pins-Report-Only","Strict-Transport-Security","Upgrade-Insecure-Requests","X-Content-Type-Options","X-Download-Options","X-Frame-Options","X-Powered-By","X-XSS-Protection","Last-Event-ID","NEL","Ping-From","Ping-To","Report-To","Transfer-Encoding","TE","Trailer","Sec-WebSocket-Key","Sec-WebSocket-Extensions","Sec-WebSocket-Accept","Sec-WebSocket-Protocol","Sec-WebSocket-Version","Accept-Push-Policy","Accept-Signature","Alt-Svc","Date","Large-Allocation","Link","Push-Policy","Retry-After","Signature","Signed-Headers","Server-Timing","SourceMap","Upgrade","X-DNS-Prefetch-Control","X-Firefox-Spdy","X-Pingback","X-Requested-With","X-Robots-Tag","X-UA-Compatible"]},2284:function(e,t,n){"use strict";n.r(t);n(12),n(10),n(11),n(5),n(15),n(8),n(14);var r=n(34),o=(n(63),n(3)),a=n(303),i=n.n(a),s=n(74),c=n(1),l=n(60),u=n(16),d=n(54),p=n(87),g=n(504),v=n.n(g),f=n(1262),h=n.n(f),y=n(965),b=n(114),m=n(2010),x=n(25),w=n(1956),S=n(1002),k=n(1086);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var C={};C.setup=function(e,t){var n=Object(x.d)(),a=Object(x.j)(),g=Object(o.o)(0),f=Object(o.o)(!1),h=Object(o.o)(""),C=Object(o.o)(null),j=Object(o.o)(null);Object(y.a)(C,h,{extendedEditorConfig:{mode:"text/x-yaml",placeholder:"".concat(n("state.bulk_mode_placeholder"))},linter:w.a,completer:null,environmentHighlights:!0});var A=Object(x.h)(b.l,[],b.v),P=Object(o.o)([{id:g.value++,key:"",value:"",active:!0}]);Object(o.y)(P,(function(e){e.length>0&&""!==e[e.length-1].key&&P.value.push({id:g.value++,key:"",value:"",active:!0})})),Object(o.y)(A,(function(e){var t=Object(c.pipe)(P.value,p.filterMap(Object(c.flow)(d.fromPredicate((function(e){return""!==e.key})),d.map(Object(k.d)("id"))))),n=Object(c.pipe)(Object(s.parseRawKeyValueEntriesE)(h.value),u.map(Object(c.flow)(l.filter((function(e){return""!==e.key})),l.toArray)),u.getOrElse((function(){return[]})));i()(e,t)||(P.value=Object(c.pipe)(e,p.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:g.value++},e)})))),i()(e,n)||(h.value=Object(s.rawKeyValueEntriesToString)(e))}),{immediate:!0}),Object(o.y)(P,(function(e){var t=Object(c.pipe)(e,p.filterMap(Object(c.flow)(d.fromPredicate((function(e){return""!==e.key})),d.map(Object(k.d)("id")))));i()(A.value,t)||(A.value=v()(t))})),Object(o.y)(h,(function(e){var t=Object(c.pipe)(Object(s.parseRawKeyValueEntriesE)(e),u.map(Object(c.flow)(l.filter((function(e){return""!==e.key})),l.toArray)),u.getOrElse((function(){return[]})));i()(A.value,t)||(A.value=t)}));return{commonHeaders:m.a,t:n,bulkMode:f,bulkEditor:C,workingHeaders:P,addHeader:function(){P.value.push({id:g.value++,key:"",value:"",active:!0})},updateHeader:function(e,t){P.value=P.value.map((function(n,r){return r===e?t:n}))},deleteHeader:function(e){var t=v()(P.value);t.length>0&&e===t.length-1||(j.value&&(j.value.goAway(0),j.value=null),j.value=a.success("".concat(n("state.deleted")),{action:[{text:"".concat(n("action.undo")),onClick:function(e,n){P.value=t,n.goAway(0),j.value=null}}],onComplete:function(){j.value=null}})),P.value=Object(c.pipe)(P.value,p.deleteAt(e),d.getOrElseW((function(){return Object(S.a)("Working Headers Deletion Out of Bounds")})))},clearContent:function(){P.value=[{id:g.value++,key:"",value:"",active:!0}],h.value=""}}},C.components=Object.assign({draggable:h.a},C.components);var j=C,A=n(23),P=Object(A.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col flex-1"},[n("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileSecondaryStickyFold sm:top-upperSecondaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("request.header_list"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/headers",blank:"",title:e.t("app.wiki"),svg:"help-circle"}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear_all"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent()}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":e.bulkMode},attrs:{title:e.t("state.bulk_mode"),svg:"edit"},nativeOn:{click:function(t){e.bulkMode=!e.bulkMode}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("add.new"),svg:"plus",disabled:e.bulkMode},nativeOn:{click:function(t){return e.addHeader.apply(null,arguments)}}})],1)]),e._v(" "),e.bulkMode?n("div",{ref:"bulkEditor",staticClass:"flex flex-col flex-1"}):n("div",[n("draggable",{attrs:{animation:"250",handle:".draggable-handle",draggable:".draggable-content","ghost-class":"cursor-move","chosen-class":"bg-primaryLight","drag-class":"cursor-grabbing"},model:{value:e.workingHeaders,callback:function(t){e.workingHeaders=t},expression:"workingHeaders"}},e._l(e.workingHeaders,(function(t,r){var o;return n("div",{key:"header-"+t.id+"-"+r,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight draggable-content group"},[n("span",[n("ButtonSecondary",{staticClass:"cursor-auto text-primary hover:text-primary",class:{"draggable-handle group-hover:text-secondaryLight !cursor-grab":r!==(null===(o=e.workingHeaders)||void 0===o?void 0:o.length)-1},attrs:{svg:"grip-vertical",tabindex:"-1"}})],1),e._v(" "),n("SmartAutoComplete",{staticClass:"flex-1 !flex",attrs:{placeholder:""+e.t("count.header",{count:r+1}),source:e.commonHeaders,spellcheck:!1,value:t.key,autofocus:"",styles:"\n          bg-transparent\n          flex\n          flex-1\n          py-1\n          px-4\n          truncate\n        "},on:{input:function(n){return e.updateHeader(r,{id:t.id,key:n,value:t.value,active:t.active})}}}),e._v(" "),n("SmartEnvInput",{attrs:{placeholder:""+e.t("count.value",{count:r+1})},on:{change:function(n){return e.updateHeader(r,{id:t.id,key:t.key,value:n,active:t.active})}},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"header.value"}}),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.hasOwnProperty("active")?t.active?e.t("action.turn_off"):e.t("action.turn_on"):e.t("action.turn_off"),svg:t.hasOwnProperty("active")?t.active?"check-circle":"circle":"check-circle",color:"green"},nativeOn:{click:function(n){return e.updateHeader(r,{id:t.id,key:t.key,value:t.value,active:!t.active})}}})],1),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.deleteHeader(r)}}})],1)],1)})),0),e._v(" "),0===e.workingHeaders.length?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/add_category.svg",loading:"lazy",alt:""+e.t("empty.headers")}}),e._v(" "),n("span",{staticClass:"pb-4 text-center"},[e._v(e._s(e.t("empty.headers")))]),e._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{filled:"",label:""+e.t("add.new"),svg:"plus"},nativeOn:{click:function(t){return e.addHeader.apply(null,arguments)}}})],1):e._e()],1)])}),[],!1,null,null,null);t.default=P.exports;installComponents(P,{ButtonSecondary:n(107).default,SmartAutoComplete:n(2001).default,SmartEnvInput:n(966).default})}}]);