(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1044:function(e,t,i){"use strict";var o=i(450);i.n(o).a},1070:function(e,t,i){"use strict";i.r(t);var o=i(244),a={demoResource:{resource:{api:{contentType:"form",prefix:"https://easy-mock.com/mock/5d4a8b0d51c7b6461eb9f898/ams-page-demo/",read:"read",update:"update",list:"getList",delete:"delete",create:"create"},fields:{id:{type:"text",label:"id",ctx:"view"},title:{type:"text",label:"标题"},content:{type:"textarea",label:"内容"},create_time:{type:"datetime",label:"创建时间",ctx:"view"},update_time:{type:"datetime",label:"更新时间",ctx:"view"}}}},demoBlock1:{resources:{demoResource:{api:{contentType:"form",prefix:"https://easy-mock.com/mock/5d4a8b0d51c7b6461eb9f898/ams-page-demo/",read:"read",update:"update",list:"getList",delete:"delete",create:"create"},fields:{id:{type:"text",label:"id",ctx:"view"},title:{type:"text",label:"标题"},content:{type:"textarea",label:"内容"},create_time:{type:"datetime",label:"创建时间",ctx:"view"},update_time:{type:"datetime",label:"更新时间",ctx:"view"}}}},blocks:{demoBlockList1:{pageSize:10,type:"list",ctx:"view",resource:"demoResource",events:{init:"@list"}}}},demoBlock2:{resources:{demoResource:{api:{contentType:"form",prefix:"https://easy-mock.com/mock/5d4a8b0d51c7b6461eb9f898/ams-page-demo/",read:"read",update:"update",list:"getList",delete:"delete",create:"create"},fields:{id:{type:"text",label:"id",ctx:"view"},title:{type:"text",label:"标题"},content:{type:"textarea",label:"内容"},create_time:{type:"datetime",label:"创建时间",ctx:"view"},update_time:{type:"datetime",label:"更新时间",ctx:"view"}}}},blocks:{demoBlockList2:{pageSize:10,type:"list",ctx:"view",resource:"demoResource",events:{init:"@list",removeItem:"@confirm:确认删除吗? @deleteAction @delete init"},actions:{deleteAction:function(e){var t=e.id;console.log("删除id：",t)}},sorts:{id:!0},operations:{id:{slot:"searchs",type:"field",field:"id",label:"id"},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list"},removeItem:{type:"button",props:{type:"danger",icon:"el-icon-delete",circle:!0}}}}}},demoBlock3:{resources:{demoResource:{api:{contentType:"form",prefix:"https://easy-mock.com/mock/5d4a8b0d51c7b6461eb9f898/ams-page-demo/",read:"read",update:"update",list:"getList",delete:"delete",create:"create"},fields:{id:{type:"text",label:"id",ctx:"view"},title:{type:"text",label:"标题"},content:{type:"textarea",label:"内容"},create_time:{type:"datetime",label:"创建时间",ctx:"view"},update_time:{type:"datetime",label:"更新时间",ctx:"view"}}}},style:{"z-index":2},blocks:{demoBlockList3:{pageSize:20,type:"list",ctx:"view",resource:"demoResource",events:{init:"@list",removeItem:"@confirm:确认删除吗? @deleteAction @delete init",editItem:"@adminEditDialog.show",addItem:"@adminAddDialog.show"},actions:{deleteAction:function(e){var t=e.id;console.log("删除id：",t)}},sorts:{id:!0},operations:{id:{slot:"searchs",type:"field",field:"id",label:"id"},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list"},addItem:{slot:"searchs",type:"button",label:"添加",props:{type:"primary"}},editItem:{type:"button",props:{type:"primary",icon:"el-icon-edit",circle:!0}},removeItem:{type:"button",props:{type:"danger",icon:"el-icon-delete",circle:!0}}}},adminEditDialog:{type:"dialog",data:{title:"编辑",visible:!1},events:{submit:"editDialogForm.submit"},style:{margin:"5% 5% 5% 15%"},actions:{},operations:{submit:{type:"button",label:"提交",props:{type:"primary"}},hide:{type:"button",label:"关闭"}},blocks:{editDialogForm:{type:"form",resource:"demoResource",ctx:"edit",events:{init:"@read",submit:"@validate @update adminListView.init @adminEditDialog.hide"}}}},adminAddDialog:{type:"dialog",data:{title:"添加",visible:!1},events:{submit:"addDialogForm.submit"},style:{margin:"5% 5% 5% 15%"},actions:{},operations:{submit:{type:"button",label:"提交",props:{type:"primary"}},hide:{type:"button",label:"关闭"}},blocks:{addDialogForm:{type:"form",fields:{id:!1,create_time:!1,update_time:!1},resource:"demoResource",ctx:"edit",events:{submit:"@validate @create adminListView.init @adminAddDialog.hide @clear"},actions:{clear:function(){this.data={}}}}}}}},demoBlock4:{resources:{demoResource:{api:{contentType:"form",prefix:"https://easy-mock.com/mock/5d4a8b0d51c7b6461eb9f898/ams-page-demo/",read:"read",update:"update",list:"getList",delete:"delete",create:"create"},fields:{id:{type:"text",label:"id",ctx:"view"},title:{type:"text",label:"标题"},content:{type:"textarea",label:"内容"},create_time:{type:"datetime",label:"创建时间",ctx:"view"},update_time:{type:"datetime",label:"更新时间",ctx:"view"}}}},style:{"z-index":2},blocks:{demoBlockRouter:{type:"router",ctx:"view",router:{defaultBreadcrumb:!1,routes:[{path:"",name:"首页",meta:{icon:"",hasMenu:!0,hidden:!1,noRedirect:!1},block:"demoBlockList4"}]},blocks:{demoBlockList4:{pageSize:20,type:"list",ctx:"view",resource:"demoResource",events:{init:"@list",removeItem:"@confirm:确认删除吗? @deleteAction @delete init",editItem:"@adminEditDialog.show",addItem:"@adminAddDialog.show"},actions:{deleteAction:function(e){var t=e.id;console.log("删除id：",t)}},sorts:{id:!0},operations:{id:{slot:"searchs",type:"field",field:"id",label:"id"},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list"},addItem:{slot:"searchs",type:"button",label:"添加",props:{type:"primary"}},editItem:{type:"button",props:{type:"primary",icon:"el-icon-edit",circle:!0}},removeItem:{type:"button",props:{type:"danger",icon:"el-icon-delete",circle:!0}}}},adminEditDialog:{type:"dialog",data:{title:"编辑",visible:!1},events:{submit:"editDialogForm.submit"},style:{margin:"5% 5% 5% 15%"},actions:{},operations:{submit:{type:"button",label:"提交",props:{type:"primary"}},hide:{type:"button",label:"关闭"}},blocks:{editDialogForm:{type:"form",resource:"demoResource",ctx:"edit",events:{init:"@read",submit:"@validate @update adminListView.init @adminEditDialog.hide"}}}},adminAddDialog:{type:"dialog",data:{title:"添加",visible:!1},events:{submit:"addDialogForm.submit"},style:{margin:"5% 5% 5% 15%"},actions:{},operations:{submit:{type:"button",label:"提交",props:{type:"primary"}},hide:{type:"button",label:"关闭"}},blocks:{addDialogForm:{type:"form",fields:{id:!1,create_time:!1,update_time:!1},resource:"demoResource",ctx:"edit",events:{submit:"@validate @create adminListView.init @adminAddDialog.hide @clear"},actions:{clear:function(){this.data={}}}}}}}}}}},d=i(261),s=i.n(d),l=i(258),c=i.n(l),r={mixins:[o.a],mounted:function(){ams.resource("demoResource",a.demoResource),ams.block("".concat(this.blockName),a[this.blockName]);var e=s()(a[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block("".concat(this.blockName),a[this.blockName]),this.init=!0)}},n=(i(1044),i(13)),m=Object(n.a)(r,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",{staticClass:"demo demo-card demo-spa",attrs:{shadow:"hover"}},[e.init?i("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),i("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[i("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),i("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[i("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n    ")])],1)},[],!1,null,null,null);t.default=m.exports},238:function(e,t,i){"use strict";var o=i(0),a=(i(245),i(243)),d=i.n(a),s=i(239),l=i(250),c=i(246),r=i.n(c),n=(i(247),i(248)),m=i.n(n),p=i(249),u=i.n(p);o.default.use(d.a),o.default.use(s.default),console.log("ams init config"),o.default.use(m.a),o.default.use(u.a),"undefined"!=typeof window&&(window.Vue=o.default),o.default.use(l.a,{languages:{javascript:r.a}}),s.default.config({resource:{api:{withCredentials:!1}}})},244:function(e,t,i){"use strict";i(238);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String},methods:{toggleDemoCofig:function(){this.showConfig=!this.showConfig}}}},450:function(e,t,i){}}]);