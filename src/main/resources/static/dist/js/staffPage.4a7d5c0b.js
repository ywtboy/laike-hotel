(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["staffPage"],{ce06:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{padding:"10px"}},[s("div",[s("Row",[s("Col",{attrs:{span:18}},[e._v(" ")]),s("Col",{attrs:{span:6,align:"right"}},[s("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"info"},on:{click:function(t){e.staffModal=!0}}},[e._v("\n        添加员工\n      ")])],1)],1)],1),s("div",[s("Table",{attrs:{columns:e.staffCol,data:e.staffs,stripe:"",loading:!1},scopedSlots:e._u([{key:"role",fn:function(t){var a=t.row;return e._l(a.roles,function(t,a){return s("a",{key:a},[e._v("\n            "+e._s(e._f("rolesFilter")(t,e.rolesList))+"\n        ")])})}},{key:"action",fn:function(t){t.row;return[s("Button",{attrs:{type:"error",size:"small"}},[e._v("锁定")])]}}])})],1),s("Modal",{attrs:{width:"400","mask-closable":!1,title:"添加员工"},on:{"on-visible-change":function(t){return e.openOrClose(t)}},model:{value:e.staffModal,callback:function(t){e.staffModal=t},expression:"staffModal"}},[s("Form",{ref:"staffForm",attrs:{model:e.staff,rules:e.staffRule}},[s("FormItem",{attrs:{prop:"realName"}},[s("Input",{attrs:{size:"large",placeholder:"真实姓名"},model:{value:e.staff.realName,callback:function(t){e.$set(e.staff,"realName",t)},expression:"staff.realName"}})],1),s("FormItem",{attrs:{prop:"mobileNum"}},[s("Input",{attrs:{size:"large",placeholder:"手机号"},model:{value:e.staff.mobileNum,callback:function(t){e.$set(e.staff,"mobileNum",t)},expression:"staff.mobileNum"}})],1),s("FormItem",{attrs:{prop:"userSex"}},[s("RadioGroup",{attrs:{size:"large"},model:{value:e.staff.userSex,callback:function(t){e.$set(e.staff,"userSex",t)},expression:"staff.userSex"}},[s("Radio",{attrs:{label:"male"}},[e._v("男")]),s("Radio",{attrs:{label:"female"}},[e._v("女")])],1)],1),s("FormItem",{attrs:{prop:"roles"}},[s("Select",{attrs:{multiple:"",placeholder:"选择权限角色",size:"large"},model:{value:e.staff.roles,callback:function(t){e.$set(e.staff,"roles",t)},expression:"staff.roles"}},e._l(e.rolesList,function(t){return s("Option",{key:t.role,attrs:{value:t.id}},[e._v(e._s(t.roleName))])}),1)],1),s("FormItem",{attrs:{prop:"userPwd"}},[s("Input",{attrs:{size:"large",type:"password",prefix:"md-lock",placeholder:"请本人输入新密码"},model:{value:e.staff.userPwd,callback:function(t){e.$set(e.staff,"userPwd",t)},expression:"staff.userPwd"}})],1),s("FormItem",{attrs:{prop:"userPwd2"}},[s("Input",{attrs:{size:"large",type:"password",prefix:"md-lock",placeholder:"请再次输入新密码"},model:{value:e.staff.userPwd2,callback:function(t){e.$set(e.staff,"userPwd2",t)},expression:"staff.userPwd2"}})],1)],1),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Button",{attrs:{size:"large"},on:{click:function(t){e.staffModal=!1}}},[e._v("取消")]),s("Button",{attrs:{type:"primary",size:"large",loading:e.staffLoad},on:{click:e.staffSubmit}},[e._v("确定")])],1)],1)],1)},r=[],o=s("7f43"),l=s.n(o);const i="/api/permission",f=()=>{return l.a.get(i+"/hotelRole")},n="/api/user",d=e=>{return l.a.post(n,e)},u=()=>{return l.a.get(n)};var m={name:"StaffPage",filters:{rolesFilter(e,t){let s=t.filter(t=>parseInt(e)==t.id);return s&&0!==s.length?s[0].roleName:""}},data(){const e=(e,t,s)=>{""===t?s(new Error("请输入密码")):(""!==this.staff.userPwd2&&this.$refs.staffForm.validateField("userPwd2"),s())},t=(e,t,s)=>{""===t?s(new Error("请再次输入密码")):t!==this.staff.userPwd?s(new Error("两次密码不一样")):s()};return{staffs:[],staff:{realName:"",mobileNum:"",userSex:"",userPwd:"",userPwd2:"",roles:[]},staffModal:!1,rolesList:[],staffLoad:!1,staffRule:{realName:[{required:!0,message:"请输入真实姓名"}],mobileNum:[{required:!0,message:"请输入手机号"}],userSex:[{required:!0,message:"请选择性别"}],userPwd:[{validator:e}],userPwd2:[{validator:t}],roles:[{required:!0,message:"请选择角色"}]},staffCol:[{type:"index",title:"序号",width:60},{title:"姓名",key:"realName",width:150},{title:"手机号",key:"mobileNum",width:150},{title:"角色",slot:"role",width:250},{title:"操作",slot:"action",align:"center"}]}},mounted(){this.getRoles(),this.getUserList()},methods:{openOrClose(e){},staffSubmit(){this.$refs.staffForm.validate(e=>{e&&(this.staffLoad=!0,d(this.staff).then(e=>{0===e.data.code?(this.staffModal=!1,this.staffLoad=!1,this.$Message.secuss("员工添加成功"),this.getUserList()):(this.$Message.error(e.data.code+"："+e.data.msg),this.staffLoad=!1)}))})},getUserList(){u().then(e=>{0===e.data.code?this.staffs=e.data.data:this.$Message.error(e.data.code+"："+e.data.msg)})},getRoles(){f().then(e=>{0===e.data.code?this.rolesList=e.data.data:this.$Message.error(e.data.code+"："+e.data.msg)})}}},c=m,p=s("2877"),h=Object(p["a"])(c,a,r,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=staffPage.4a7d5c0b.js.map