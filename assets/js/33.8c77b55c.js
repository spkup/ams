(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1076:function(t,e,o){"use strict";o.r(e);var n=o(244),i={defaultRouter:{type:"router",resources:{routerRes:{api:{prefix:"https://easy-mock.com/mock/5a0023effbbb09615044cb82/",read:"read"},fields:{testDate:{type:"date",label:"日期"},testSwitch:{type:"switch",label:"开关"}}}},router:{routes:[{path:"",name:"首页",block:"formEditAll",meta:{icon:"menu"}},{path:"/list",name:"列表页",block:"listComponent"}]},blocks:{formEditAll:{type:"form",resource:"routerRes",ctx:"edit",style:{width:"50%"},data:{testRadio:"c"},events:{init:"@read",submit:"@validate @update"},operations:{submit:{type:"button",event:"submit",label:"提交",props:{type:"primary"}}}},listComponent:{type:"component",options:{is:"div",text:"我是插进来的TEXT内容",html:"<h3>我是插进来的HTML内容</h3>"}}}},menuTopRouter:{type:"router",router:{routes:[{path:"",name:"首页",block:"listComponent",meta:{icon:"menu"}}]},blocks:{listComponent:{type:"component",options:{is:"div",text:"我是插进来的TEXT内容",html:"<h3>我是插进来的HTML内容</h3>"}},title1:{type:"component",options:{is:"h3",text:"AMS系统"},style:{color:"#fff","text-align":"center"},slot:"menuTop"}}},menuBottomRouter:{type:"router",router:{routes:[{path:"",name:"首页",block:"listComponent",meta:{icon:"menu"}},{path:"/menu1",name:"菜单一",meta:{icon:"user-solid"},children:[{name:"子菜单",path:"path1_0",block:"listComponent"}]},{path:"/menu2",name:"菜单二",block:"listComponent",meta:{icon:"star-on"}},{path:"/menu3",name:"菜单三",block:"listComponent",meta:{icon:"s-help"}}]},blocks:{listComponent:{type:"component",options:{is:"div",text:"我是插进来的TEXT内容",html:"<h3>我是插进来的HTML内容</h3>"}},menuBottomtext:{type:"component",options:{is:"div",text:"Copyright © 2008-2019 vip.com"},style:{color:"#aaa",padding:"10px","margin-top":"100px","font-size":"12px"},slot:"menuBottom"}}},navRouter:{type:"router",router:{routes:[{path:"",name:"首页",block:"listComponent",meta:{icon:"menu"}}]},blocks:{listComponent:{type:"component",options:{is:"div",text:"我是插进来的TEXT内容",html:"<h3>我是插进来的HTML内容</h3>"}},title1:{type:"component",options:{is:"h3",text:"AMS系统"},style:{color:"#fff","text-align":"center"},slot:"menuTop"},navRouterTitle:{type:"component",options:{is:"div"},operations:{feedback:{type:"button",label:"反馈",style:{"margin-top":"5px","margin-right":"15px"},props:{type:"text",icon:"el-icon-document",size:"large"}},help:{type:"button",label:"帮助",style:{"margin-top":"5px"},props:{type:"text",icon:"el-icon-question",size:"large"}}},actions:{feedback:function(){window.location.href="https://github.com/vipshop/ams/issues"},help:function(){window.location.href="https://github.com/vipshop/ams"}},slot:"nav"}}}},s=o(261),a=o.n(s),l=o(258),c=o.n(l),p={mixins:[n.a],mounted:function(){var t=a()(i[this.blockName]);this.configCode=c()(t,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,i[this.blockName]),this.init=!0)}},m=o(13),r=Object(m.a)(p,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[t.init?o("ams-block",{staticClass:"demo-card-preview",attrs:{name:t.blockName}}):t._e(),t._v(" "),o("div",{class:"demo-card-config "+(t.showConfig?"open":"")},[o("highlight-code",{attrs:{lang:"javascript"}},[t._v("\n            "+t._s(t.configCode)+"\n        ")])],1),t._v(" "),o("div",{staticClass:"demo-card-config-btn",on:{click:t.toggleDemoCofig}},[o("i",{class:"el-icon-caret-"+(t.showConfig?"top":"bottom")}),t._v("\n         "+t._s(t.showConfig?"隐藏":"显示")+"配置\n    ")])],1)},[],!1,null,null,null);e.default=r.exports},238:function(t,e,o){"use strict";var n=o(0),i=(o(245),o(243)),s=o.n(i),a=o(239),l=o(250),c=o(246),p=o.n(c),m=(o(247),o(248)),r=o.n(m),u=o(249),d=o.n(u);n.default.use(s.a),n.default.use(a.default),console.log("ams init config"),n.default.use(r.a),n.default.use(d.a),"undefined"!=typeof window&&(window.Vue=n.default),n.default.use(l.a,{languages:{javascript:p.a}}),a.default.config({resource:{api:{withCredentials:!1}}})},244:function(t,e,o){"use strict";o(238);e.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String},methods:{toggleDemoCofig:function(){this.showConfig=!this.showConfig}}}}}]);