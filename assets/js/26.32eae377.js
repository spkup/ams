(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1069:function(o,t,e){"use strict";e.r(t);var n=e(244),i={defaultComponent:{type:"component",options:{is:"img"},style:{width:"200px",height:"200px"},props:{src:"//b.appsimg.com/upload/vivaadmin/2018/11/07/69/1541579376290922128.png"}},divComponent:{type:"component",options:{is:"div",text:"我是插进来的TEXT内容",html:"<h3>我是插进来的HTML内容</h3>"}},divElComponent:{type:"component",options:{is:"div"},style:{padding:"100px"},operations:{test:{type:"button",label:"提交"}},actions:{test:function(){this.$message("你点击了提交按钮")}},blocks:{testBlockComponent:{type:"component",options:{is:"el-rate"},props:{value:4}}}}},s=e(261),a=e.n(s),c=e(258),l=e.n(c),d={mixins:[n.a],mounted:function(){var o=a()(i[this.blockName]);this.configCode=l()(o,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,i[this.blockName]),this.init=!0)}},p=e(13),m=Object(p.a)(d,function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[o.init?e("ams-block",{staticClass:"demo-card-preview",attrs:{name:o.blockName}}):o._e(),o._v(" "),e("div",{class:"demo-card-config "+(o.showConfig?"open":"")},[e("highlight-code",{attrs:{lang:"javascript"}},[o._v("\n            "+o._s(o.configCode)+"\n        ")])],1),o._v(" "),e("div",{staticClass:"demo-card-config-btn",on:{click:o.toggleDemoCofig}},[e("i",{class:"el-icon-caret-"+(o.showConfig?"top":"bottom")}),o._v("\n         "+o._s(o.showConfig?"隐藏":"显示")+"配置\n    ")])],1)},[],!1,null,null,null);t.default=m.exports},238:function(o,t,e){"use strict";var n=e(0),i=(e(245),e(243)),s=e.n(i),a=e(239),c=e(250),l=e(246),d=e.n(l),p=(e(247),e(248)),m=e.n(p),r=e(249),u=e.n(r);n.default.use(s.a),n.default.use(a.default),console.log("ams init config"),n.default.use(m.a),n.default.use(u.a),"undefined"!=typeof window&&(window.Vue=n.default),n.default.use(c.a,{languages:{javascript:d.a}}),a.default.config({resource:{api:{withCredentials:!1}}})},244:function(o,t,e){"use strict";e(238);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String},methods:{toggleDemoCofig:function(){this.showConfig=!this.showConfig}}}}}]);