(window.webpackJsonp=window.webpackJsonp||[]).push([[51,57],{1990:function(e,t,l){var n=l(2068);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,l(118).default)("4f874856",n,!0,{sourceMap:!1})},1995:function(e,t,l){"use strict";l.r(t);var n=l(3),i=l(967),s=Object(n.c)({props:{gqlType:null,jumpTypeCallback:Function},computed:{typeString:function(){return"".concat(this.gqlType)},isScalar:function(){return this.resolveRootType(this.gqlType)instanceof i.g}},methods:{jumpToType:function(){this.isScalar||this.jumpTypeCallback(this.gqlType)},resolveRootType:function(e){for(var t=e;null!=t.ofType;)t=t.ofType;return t}}}),a=l(23),c=Object(a.a)(s,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{class:e.isScalar?"text-secondaryLight":"cursor-pointer text-accent",on:{click:e.jumpToType}},[e._v("\n  "+e._s(e.typeString)+"\n")])}),[],!1,null,null,null);t.default=c.exports},2055:function(e,t,l){"use strict";l.r(t);l(56);var n=l(3),i=Object(n.c)({props:{gqlField:{type:Object,default:function(){}},jumpTypeCallback:{type:Function,default:function(){}},isHighlighted:{type:Boolean,default:!1}},computed:{fieldName:function(){return this.gqlField.name},fieldArgs:function(){return this.gqlField.args||[]}}}),s=(l(2067),l(23)),a=Object(s.a)(i,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"field-title",class:{"field-highlighted":e.isHighlighted}},[e._v("\n    "+e._s(e.fieldName)+"\n    "),e.fieldArgs.length>0?l("span",[e._v("\n      (\n      "),e._l(e.fieldArgs,(function(t,n){return l("span",{key:"field-"+n},[e._v("\n        "+e._s(t.name)+":\n        "),l("GraphqlTypeLink",{attrs:{"gql-type":t.type,"jump-type-callback":e.jumpTypeCallback}}),e._v(" "),n!==e.fieldArgs.length-1?l("span",[e._v(", ")]):e._e()],1)})),e._v("\n      ) ")],2):e._e(),e._v(":\n    "),l("GraphqlTypeLink",{attrs:{"gql-type":e.gqlField.type,"jump-type-callback":e.jumpTypeCallback}})],1),e._v(" "),e.gqlField.description?l("div",{staticClass:"py-2 text-secondaryLight field-desc"},[e._v("\n    "+e._s(e.gqlField.description)+"\n  ")]):e._e(),e._v(" "),e.gqlField.isDeprecated?l("div",{staticClass:"inline-block px-2 py-1 my-1 text-black bg-yellow-200 rounded field-deprecated"},[e._v("\n    "+e._s(e.$t("state.deprecated"))+"\n  ")]):e._e(),e._v(" "),e.fieldArgs.length>0?l("div",[l("h5",{staticClass:"my-2"},[e._v("Arguments:")]),e._v(" "),l("div",{staticClass:"pl-4 border-l-2 border-divider"},e._l(e.fieldArgs,(function(t,n){return l("div",{key:"field-"+n},[l("span",[e._v("\n          "+e._s(t.name)+":\n          "),l("GraphqlTypeLink",{attrs:{"gql-type":t.type,"jump-type-callback":e.jumpTypeCallback}})],1),e._v(" "),t.description?l("div",{staticClass:"py-2 text-secondaryLight field-desc"},[e._v("\n          "+e._s(t.description)+"\n        ")]):e._e()])})),0)]):e._e()])}),[],!1,null,"20ebb95f",null);t.default=a.exports;installComponents(a,{GraphqlTypeLink:l(1995).default})},2067:function(e,t,l){"use strict";l(1990)},2068:function(e,t,l){var n=l(117)(!1);n.push([e.i,".field-highlighted[data-v-20ebb95f] {\n  border-color: var(--accent-color);\n  border-bottom-width: 2px;\n}\n.field-title[data-v-20ebb95f] {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}",""]),e.exports=n}}]);