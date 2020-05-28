(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["allotRoom"],{"145c":function(e,o,t){"use strict";t.r(o);var r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("Modal",{attrs:{width:"800",title:e.title,"mask-closable":!1},on:{"on-visible-change":e.openOrClose},model:{value:e.isOpen,callback:function(o){e.isOpen=o},expression:"isOpen"}},[t("Form",["allot"===e.isAllot?t("div",{staticClass:"allotRoom"},[t("Row",[t("Col",{attrs:{span:3}},[e._v("\n          "+e._s(e.orderReserve?e.orderReserve.roomTypeName:"")+"\n          ")]),t("Col",{attrs:{span:6}},[e._v("\n          预订房价： "+e._s(e.orderReserve?e.orderReserve.roomTypePrice:"")+" 元/间/晚\n          ")]),t("Col",{attrs:{span:4}},[e._v("\n          预订数量： "+e._s(e.orderReserve?e.orderReserve.reserveNum:"")+" 间\n          ")]),t("Col",{attrs:{span:4}},[e._v("\n          已分配： "+e._s(e.orderReserve?e.orderReserve.allottedNum:"")+" 间\n          ")])],1)],1):e._e(),t("Divider",{staticStyle:{"margin-top":"24","margin-bottom":"24px"}}),t("div",e._l(e.orderRooms,function(o,r){return t("Row",{key:r},[t("Col",{attrs:{span:1}},[t("Icon",{attrs:{type:"md-home",size:"28"}})],1),t("Col",{attrs:{span:4}},[t("FormItem",[t("Select",{staticStyle:{width:"120px"},attrs:{filterable:"",placeholder:"请选择房号",disabled:"allot"!==e.isAllot},on:{"on-change":function(o){return e.setRoomInfo(r)}},model:{value:o.roomNo,callback:function(t){e.$set(o,"roomNo",t)},expression:"item.roomNo"}},e._l(e.isRooms,function(o){return t("Option",{key:o.roomName,attrs:{disabled:e.isDisabled(o.roomNo),value:o.roomNo}},[e._v(e._s(o.roomName)+"-"+e._s(o.roomTypeName)+"\n              ")])}),1)],1)],1),t("Col",{attrs:{span:4}}),t("Col",{attrs:{span:4}},[t("FormItem",[t("Input",{staticStyle:{width:"120px"},attrs:{prefix:"logo-yen",placeholder:"请输入房价",number:"",clearable:""},model:{value:o.roomPrice,callback:function(t){e.$set(o,"roomPrice",t)},expression:"item.roomPrice"}})],1)],1),t("Col",{attrs:{span:6}},[t("FormItem",[t("DatePicker",{staticStyle:{width:"75px"},attrs:{type:"date",placement:"bottom-end",placeholder:"时间",format:e.startFormat,readonly:e.onlyRead},model:{value:o.estimateInTime,callback:function(t){e.$set(o,"estimateInTime",t)},expression:"item.estimateInTime"}}),e._v("--\n            "),t("DatePicker",{staticStyle:{width:"75px"},attrs:{type:"date",placement:"bottom-end",placeholder:"时间",format:e.endFormat,readonly:e.onlyRead},model:{value:o.estimateOutTime,callback:function(t){e.$set(o,"estimateOutTime",t)},expression:"item.estimateOutTime"}})],1)],1),t("Col",{attrs:{span:3}},[t("FormItem",["daily"===o.orderTypeCode?t("InputNumber",{attrs:{max:100,min:1,formatter:function(e){return e+" 晚"},parser:function(e){return e.replace(" 晚","")},readonly:e.onlyRead},model:{value:o.day,callback:function(t){e.$set(o,"day",t)},expression:"item.day"}}):e._e()],1)],1),t("Col",{attrs:{span:2}},[0===r?t("FormItem",[t("Button",{directives:[{name:"show",rawName:"v-show",value:e.orderRooms.length<e.roomNum,expression:"orderRooms.length < roomNum"}],attrs:{type:"error",icon:"md-add",size:"small"},on:{click:e.handleRoomAdd}}),e._v(" \n            "),t("Button",{directives:[{name:"show",rawName:"v-show",value:e.orderRooms.length>1,expression:"orderRooms.length > 1"}],attrs:{type:"error",icon:"md-remove",size:"small"},on:{click:e.handleRoomRemove}})],1):e._e()],1)],1)}),1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{size:"large"},on:{click:function(o){e.isOpen=!1}}},[e._v("取消")]),"allot"===e.isAllot?t("Button",{attrs:{type:"primary",size:"large",loading:e.allotRoomLoad},on:{click:e.submit}},[e._v("确定")]):e._e(),"checkIn"===e.isAllot?t("Button",{attrs:{type:"primary",size:"large",loading:e.allotRoomLoad},on:{click:e.submitCheckIn}},[e._v("确定")]):e._e()],1)],1)],1)},s=[],a=(t("ac6a"),t("be94")),i=t("52c1"),l=t("f8b7"),m={name:"AllotRoom",props:{openIs:Boolean,orderReserve:Object,order:Object,isAllot:String,checkInOrderRooms:Array},data(){return{isOpen:!1,title:"分配房间",allotRoomLoad:!1,orderRooms:[],startFormat:"MM-dd",endFormat:"MM-dd HH:mm",isRooms:null,onlyRead:!1,isOk:!1}},computed:Object(a["a"])({roomNum(){return"allot"===this.isAllot?this.orderReserve.reserveNum-this.orderReserve.allottedNum:0}},Object(i["e"])({roomStates:e=>e.room.roomStates}),Object(i["c"])(["getRoomsByType"])),watch:{openIs(e){this.isOpen=e}},mounted(){null===this.roomStates&&this.loadRoomStates()},methods:Object(a["a"])({openOrClose(e){if(e){if(this.isRooms=this.getRoomsByType(this.orderReserve?this.orderReserve.roomTypeId:null),"allot"===this.isAllot){this.title="分配房间",this.onlyRead=!0;for(let e=0;e<this.roomNum;e++)this.handleRoomAdd()}if("checkIn"===this.isAllot){this.title="办理入住",this.onlyRead=!0,console.log(this.checkInOrderRooms),this.checkInOrderRooms.forEach(e=>{let o=new Date(e.estimateInTime),t=new Date(e.estimateOutTime),r=t.getDate()-o.getDate();e.estimateInTime=o,e.estimateOutTime=t,e.day=r});let e=[];Object.assign(e,this.checkInOrderRooms),this.orderRooms=e}}else this.$emit("allot-room-close",this.isOk),Object.assign(this.$data,this.$options.data())},submit(){this.allotRoomLoad=!0;let e=!0;this.orderRooms.forEach(o=>{if(null===o.roomNo||""===o.roomNo)return e=!1,this.$Message.error("请选择房号"),!1}),console.log(this.orderRooms),e&&Object(l["a"])({orderRooms:this.orderRooms}).then(e=>{0===e.data.code?(this.isOk=!0,this.isOpen=!1,this.$Message.success("分配房间成功")):(this.$Message.error(e.data.code+"："+e.data.msg),this.allotRoomLoad=!1)})},submitCheckIn(){this.allotRoomLoad=!0;let e={order:this.order,orderRooms:this.orderRooms,reserved:!0};Object(l["b"])(e).then(e=>{0===e.data.code?(this.isOk=!0,this.isOpen=!1,this.$emit("load-room-state"),this.$Message.success("办理入住成功")):(this.$Message.error(e.data.code+"："+e.data.msg),this.allotRoomLoad=!1)})},isDisabled(e){let o=!1;return this.orderRooms.forEach(t=>{e===t.roomNo&&(o=!0)}),o},setRoomInfo(e){let o=this.isRooms.filter(o=>o.roomNo===this.orderRooms[e].roomNo);o&&o.length>0&&(this.orderRooms[e].roomName=o[0].roomName,this.orderRooms[e].roomTypeName=o[0].roomTypeName)},handleRoomAdd(){let e=new Date(this.orderReserve.estimateInTime),o=new Date(this.orderReserve.estimateOutTime),t=o.getDate()-e.getDate();this.orderRooms.push({roomName:"",roomNo:"",roomTypeName:"",roomPrice:this.orderReserve.roomTypePrice,guestName:this.order.guestName,guestTel:this.order.guestTel||null,guestCertificateNo:this.order.guestCertificateNo||null,otherGuestCertificateNos:null,orderTypeCode:"daily",estimateInTime:e,estimateOutTime:o,reserveId:this.orderReserve.reserveId,orderNo:this.orderReserve.orderNo,day:t})},handleRoomRemove(){this.orderRooms.length>1&&this.orderRooms.pop()}},Object(i["b"])(["loadRoomStates"]))},n=m,d=(t("1bb6"),t("2877")),c=Object(d["a"])(n,r,s,!1,null,null,null);o["default"]=c.exports},"1bb6":function(e,o,t){"use strict";var r=t("89be"),s=t.n(r);s.a},"89be":function(e,o,t){}}]);
//# sourceMappingURL=allotRoom.0a6f7e04.js.map