(window.webpackJsonp=window.webpackJsonp||[]).push([[80,105],{1994:function(t,e,s){"use strict";s.r(e);s(11),s(5);var r=s(3),a={};a.props={testResults:{type:Object,required:!0,expectResults:[]}},a.setup=function(t,e){var s=t;return{totalTests:Object(r.a)((function(){return s.testResults.expectResults.length})),failedTests:Object(r.a)((function(){return s.testResults.expectResults.filter((function(t){return"fail"===t.status})).length})),passedTests:Object(r.a)((function(){return s.testResults.expectResults.filter((function(t){return"pass"===t.status})).length}))}};var n=a,u=s(23),i=Object(u.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex items-center p-2"},[s("SmartProgressRing",{staticClass:"text-red-500",attrs:{radius:16,stroke:4,progress:t.failedTests/t.totalTests*100}}),t._v(" "),s("div",{staticClass:"ml-2"},[t.failedTests?s("span",{staticClass:"text-red-500"},[t._v("\n      "+t._s(t.failedTests)+" failing,\n    ")]):t._e(),t._v(" "),t.passedTests?s("span",{staticClass:"text-green-500"},[t._v("\n      "+t._s(t.passedTests)+" successful,\n    ")]):t._e(),t._v(" "),s("span",[t._v(" out of "+t._s(t.totalTests)+" tests. ")])])],1)}),[],!1,null,null,null);e.default=i.exports;installComponents(i,{SmartProgressRing:s(2003).default})},2003:function(t,e,s){"use strict";s.r(e);s(503);var r=s(3),a=Object(r.c)({props:{radius:{type:Number,default:12},progress:{type:Number,default:50},stroke:{type:Number,default:4}},data:function(){var t=this.radius-2*this.stroke;return{normalizedRadius:t,circumference:2*t*Math.PI}},computed:{strokeDashoffset:function(){return this.circumference-this.progress/100*this.circumference}}}),n=s(23),u=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{height:2*t.radius,width:2*t.radius}},[s("circle",{staticClass:"stroke-green-500",attrs:{"stroke-width":t.stroke,fill:"transparent",r:t.normalizedRadius,cx:t.radius,cy:t.radius}}),t._v(" "),s("circle",{style:{strokeDashoffset:t.strokeDashoffset},attrs:{"stroke-width":t.stroke,stroke:"currentColor",fill:"transparent",r:t.normalizedRadius,cx:t.radius,cy:t.radius,"stroke-dasharray":t.circumference+" "+t.circumference}})])}),[],!1,null,null,null);e.default=u.exports}}]);