(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{4180:function(e,t,i){"use strict";var o=i("644a"),c=i.n(o);c.a},5176:function(e,t,i){e.exports=i("51b6")},"51b6":function(e,t,i){i("a3c3"),e.exports=i("584a").Object.assign},"644a":function(e,t,i){},9306:function(e,t,i){"use strict";var o=i("c3a1"),c=i("9aa9"),a=i("355d"),n=i("241e"),l=i("335c"),d=Object.assign;e.exports=!d||i("294c")(function(){var e={},t={},i=Symbol(),o="abcdefghijklmnopqrst";return e[i]=7,o.split("").forEach(function(e){t[e]=e}),7!=d({},e)[i]||Object.keys(d({},t)).join("")!=o})?function(e,t){var i=n(e),d=arguments.length,s=1,r=c.f,m=a.f;while(d>s){var p,u=l(arguments[s++]),y=r?o(u).concat(r(u)):o(u),T=y.length,h=0;while(T>h)m.call(u,p=y[h++])&&(i[p]=u[p])}return i}:d},a3c3:function(e,t,i){var o=i("63b6");o(o.S+o.F,"Object",{assign:i("9306")})},d824:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout"},[i("Layout",{style:{height:"100%"}},[i("Header",[e._v("Header")]),i("Layout",{staticStyle:{height:"100%"}},[i("Sider",{style:{background:"#fff"},attrs:{"hide-trigger":""}},[i("Menu",{style:{height:"100%"},attrs:{theme:"light",width:"auto"}},[i("MenuItem",{attrs:{name:"1"}},[e._v("\n                        酒店管理\n                    ")]),i("MenuItem",{attrs:{name:"2"}},[e._v("\n                        字典管理\n                    ")]),i("MenuItem",{attrs:{name:"3"}},[e._v("\n                        资源权限管理\n                    ")])],1)],1),i("Layout",[i("Content",{style:{padding:"24px",minHeight:"280px",background:"#fff"}},[i("Tabs",{attrs:{type:"card",closable:""},on:{"on-tab-remove":e.handleTabRemove}},[e.tab0?i("TabPane",{attrs:{label:"酒店管理"}},[i("Button",{on:{click:e.test}},[e._v("试试")]),i("Table",{attrs:{columns:e.columns1,data:e.hotels}})],1):e._e(),e.tab1?i("TabPane",{attrs:{label:"字典管理"}},[i("DicCommon")],1):e._e(),e.tab2?i("TabPane",{attrs:{label:"标签三"}},[e._v("标签三的内容")]):e._e()],1)],1)],1)],1),i("Footer",[e._v("Footer")])],1)],1)},c=[],a=i("7f43"),n=i.n(a),l=function(){return n.a.request({url:"/api/hotel",method:"get"})},d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticStyle:{"margin-bottom":"5px"}},[i("Row",[i("Col",{attrs:{span:"20"}},[i("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"}},[e._v("查询")])],1),i("Col",{attrs:{span:"4",align:"right"}},[i("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(t){e.typeModal=!0,e.typeTitle="添加字典分类"}}},[e._v("\n        添加分类\n      ")]),i("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(t){e.dicModal=!0,e.dicTitle="添加字典"}}},[e._v("\n        添加字典\n      ")])],1)],1)],1),i("div",{staticStyle:{height:"500px"}},[i("Table",{attrs:{columns:e.colDic,data:e.dics,stripe:"",loading:!1,height:"400"},scopedSlots:e._u([{key:"action",fn:function(t){var o=t.row;return[i("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(t){return e.openDicEditModal(o)}}},[e._v("修改")]),i("Button",{attrs:{type:"error",size:"small"}},[e._v("删除")])]}}])})],1),i("div",[i("Table",{attrs:{columns:e.colType,data:e.dicTypes,stripe:"",loading:!1,height:"500"},scopedSlots:e._u([{key:"action",fn:function(t){var o=t.row;return[i("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(t){return e.openTypeEditModal(o)}}},[e._v("修改")]),i("Button",{attrs:{type:"error",size:"small"}},[e._v("删除")])]}}])})],1),i("Modal",{attrs:{title:e.typeTitle},on:{"on-visible-change":function(t){return e.resetForm("formDicType",t)}},model:{value:e.typeModal,callback:function(t){e.typeModal=t},expression:"typeModal"}},[i("Form",{ref:"formDicType",attrs:{model:e.dicType,"label-width":80,rules:e.ruleDicType}},[i("FormItem",{attrs:{label:"分类代码",prop:"dicTypeCode"}},[i("Input",{attrs:{placeholder:"请输入分类代码"},model:{value:e.dicType.dicTypeCode,callback:function(t){e.$set(e.dicType,"dicTypeCode",t)},expression:"dicType.dicTypeCode"}})],1),i("FormItem",{attrs:{label:"分类名称",prop:"dicTypeName"}},[i("Input",{attrs:{placeholder:"请输入分类名称"},model:{value:e.dicType.dicTypeName,callback:function(t){e.$set(e.dicType,"dicTypeName",t)},expression:"dicType.dicTypeName"}})],1),i("FormItem",{attrs:{label:"分类类型",prop:"dicTypeClass"}},[i("Select",{model:{value:e.dicType.dicTypeClass,callback:function(t){e.$set(e.dicType,"dicTypeClass",t)},expression:"dicType.dicTypeClass"}},[i("Option",{attrs:{value:"common"}},[e._v("公共")]),i("Option",{attrs:{value:"hotel"}},[e._v("hotel")])],1)],1)],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{size:"large"},on:{click:function(t){e.typeModal=!1}}},[e._v("取消")]),i("Button",{attrs:{type:"primary",size:"large",loading:e.loadDicType},on:{click:e.submitDicType}},[e._v("确定")])],1)],1),i("Modal",{attrs:{title:e.dicTitle},on:{"on-visible-change":function(t){return e.resetForm("formDicCommon",t)}},model:{value:e.dicModal,callback:function(t){e.dicModal=t},expression:"dicModal"}},[i("Form",{ref:"formDicCommon",attrs:{model:e.dic,"label-width":80,rules:e.ruleDicCommon}},[i("FormItem",{attrs:{label:"选择类型",prop:"dicTypeId"}},[i("Select",{model:{value:e.dic.dicTypeId,callback:function(t){e.$set(e.dic,"dicTypeId",t)},expression:"dic.dicTypeId"}},e._l(e.selectDicTypes,function(t){return i("Option",{key:t.dicTypeId,attrs:{value:t.dicTypeId}},[e._v(e._s(t.dicTypeName))])}),1)],1),i("FormItem",{attrs:{label:"代码",prop:"dicCommonCode"}},[i("Input",{attrs:{placeholder:"请输入代码"},model:{value:e.dic.dicCommonCode,callback:function(t){e.$set(e.dic,"dicCommonCode",t)},expression:"dic.dicCommonCode"}})],1),i("FormItem",{attrs:{label:"名称",prop:"dicCommonName"}},[i("Input",{attrs:{placeholder:"请输入名称"},model:{value:e.dic.dicCommonName,callback:function(t){e.$set(e.dic,"dicCommonName",t)},expression:"dic.dicCommonName"}})],1),i("FormItem",{attrs:{label:"父节点"}},[i("Input",{attrs:{placeholder:"请输入父节点"},model:{value:e.dic.parentId,callback:function(t){e.$set(e.dic,"parentId",t)},expression:"dic.parentId"}})],1),i("FormItem",{attrs:{label:"层级"}},[i("Input",{attrs:{placeholder:"请输入层级"},model:{value:e.dic.dicLevel,callback:function(t){e.$set(e.dic,"dicLevel",t)},expression:"dic.dicLevel"}})],1),i("FormItem",{attrs:{label:"排序"}},[i("Input",{attrs:{placeholder:"请输入排序序号"},model:{value:e.dic.sortNo,callback:function(t){e.$set(e.dic,"sortNo",t)},expression:"dic.sortNo"}})],1)],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{size:"large"},on:{click:function(t){e.dicModal=!1}}},[e._v("取消")]),i("Button",{attrs:{type:"primary",size:"large",loading:e.loadDicCommon},on:{click:e.submitDicCommon}},[e._v("确定")])],1)],1)],1)},s=[],r=i("5176"),m=i.n(r),p=(i("cadf"),i("551c"),i("f751"),i("097d"),{colDic:[{type:"index",title:"序号",width:60},{title:"名称",key:"dicCommonName"},{title:"代码",key:"dicCommonCode"},{title:"类型",key:"dicTypeName"},{title:"父节点",key:"parentId"},{title:"层级",key:"dicLevel"},{title:"排序",key:"sortNo"},{title:"创建时间",key:"gmtCreate"},{title:"修改时间",key:"gmtModified"},{title:"操作",slot:"action",width:150,align:"center"}],colType:[{type:"index",title:"序号",width:60},{title:"名称",key:"dicTypeName"},{title:"代码",key:"dicTypeCode"},{title:"类型",key:"dicTypeClass"},{title:"创建时间",key:"gmtCreate"},{title:"修改时间",key:"gmtModified"},{title:"操作",slot:"action",width:150,align:"center"}]}),u=i("acb0"),y={name:"DicCommon",data:function(){return{typeModal:!1,dicModal:!1,dics:[],dicTypes:[],colDic:p.colDic,colType:p.colType,dic:{dicCommonId:null,dicCommonCode:"",dicCommonName:"",dicTypeId:"",parentId:"",dicLevel:"",sortNo:""},dicType:{dicTypeId:null,dicTypeName:"",dicTypeCode:"",dicTypeClass:""},ruleDicType:{dicTypeName:[{required:!0,message:"请输入字典类型名称",trigger:"blur"}],dicTypeCode:[{required:!0,message:"请输入字典类型代码",trigger:"blur"}],dicTypeClass:[{required:!0,message:"请输入字典类型分类",trigger:"blur"}]},ruleDicCommon:{dicCommonName:[{required:!0,message:"请输入字典名称",trigger:"blur"}],dicCommonCode:[{required:!0,message:"请输入字典代码",trigger:"blur"}],dicTypeId:[{required:!0,type:"number",message:"请输入字典类型",trigger:"blur"}]},loadDicType:!1,loadDicCommon:!1,typeTitle:"添加字典分类",dicTitle:"添加字典"}},computed:{selectDicTypes:function(){return this.dicTypes.filter(function(e){return"common"==e.dicTypeClass})}},methods:{submitDicType:function(){var e=this;console.log(this.dicType),this.$refs["formDicType"].validate(function(t){if(t){e.loadDicType=!0,console.log("通过");var i="post";null!==e.dicType.dicTypeId&&(i="patch"),Object(u["b"])(e.dicType,i).then(function(t){0==t.data.code&&(e.$Message.success(t.data.msg),e.typeModal=!1,e.getDicTypeList())})}else e.$Message.error("请输入"),e.loadDicType=!1})},submitDicCommon:function(){var e=this;console.log(this.dic),this.$refs["formDicCommon"].validate(function(t){if(t){e.loadDicCommon=!0,console.log("通过");var i="post";null!==e.dic.dicCommonId&&(i="patch"),Object(u["a"])(e.dic,i).then(function(t){0===t.data.code&&(e.$Message.success(t.data.msg),e.dicModal=!1,e.getDicCommonList())})}else console.log(e.dic),e.$Message.error("请输入"),e.loadDicCommon=!1})},getDicTypeList:function(){var e=this;Object(u["e"])(null).then(function(t){e.dicTypes=t.data.data})},getDicCommonList:function(){var e=this,t={dicTypeId:null,parentId:null,dicLevel:null,deleted:!1};Object(u["d"])(t).then(function(t){e.dics=t.data.data})},openTypeEditModal:function(e){this.typeTitle="修改字典分类",this.typeModal=!0,this.dicType.dicTypeId=e.dicTypeId,this.dicType.dicTypeName=e.dicTypeName,this.dicType.dicTypeCode=e.dicTypeCode,this.dicType.dicTypeClass=e.dicTypeClass},openDicEditModal:function(e){this.dicTitle="修改字典",this.dicModal=!0,this.dic.dicCommonId=e.dicCommonId,this.dic.dicCommonCode=e.dicCommonCode,this.dic.dicCommonName=e.dicCommonName,this.dic.dicTypeId=e.dicTypeId,this.dic.parentId=e.parentId,this.dic.dicLevel=e.dicLevel,this.dic.sortNo=e.sortNo},resetForm:function(e,t){t||(console.log("重置"),m()(this.$data.dicType,this.$options.data().dicType),m()(this.$data.dic,this.$options.data().dic),this.loadDicType=!1,this.loadDicCommon=!1)}},mounted:function(){this.getDicTypeList(),this.getDicCommonList()}},T=y,h=i("2877"),f=Object(h["a"])(T,d,s,!1,null,"088cc7f6",null),g=f.exports,b={name:"Admin",data:function(){return{tab0:!0,tab1:!0,tab2:!0,hotels:[],columns1:[{title:"酒店名称",key:"hotelName"},{title:"酒店编号",key:"hotelNo"},{title:"地址",key:"address"},{title:"热线",key:"hotline"}]}},methods:{test:function(){var e=this;console.log(l),l().then(function(t){e.hotels=t.data.data,console.log(t.data)})},handleTabRemove:function(e){this["tab"+e]=!1}},components:{DicCommon:g}},v=b,C=(i("4180"),Object(h["a"])(v,o,c,!1,null,"0406067e",null));t["default"]=C.exports}}]);
//# sourceMappingURL=admin-legacy.0bd10f69.js.map