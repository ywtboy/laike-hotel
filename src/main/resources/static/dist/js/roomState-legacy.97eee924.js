(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["roomState"],{"2e46":function(e,t,o){"use strict";var r=o("fb88"),n=o.n(r);n.a},3774:function(e,t,o){var r;function n(e){var o,r=0;for(o in e)r=(r<<5)-r+e.charCodeAt(o),r|=0;return t.colors[Math.abs(r)%t.colors.length]}function s(e){function o(){if(o.enabled){var e=o,n=+new Date,s=n-(r||n);e.diff=s,e.prev=r,e.curr=n,r=n;for(var a=new Array(arguments.length),i=0;i<a.length;i++)a[i]=arguments[i];a[0]=t.coerce(a[0]),"string"!==typeof a[0]&&a.unshift("%O");var c=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,function(o,r){if("%%"===o)return o;c++;var n=t.formatters[r];if("function"===typeof n){var s=a[c];o=n.call(e,s),a.splice(c,1),c--}return o}),t.formatArgs.call(e,a);var u=o.log||t.log||console.log.bind(console);u.apply(e,a)}}return o.namespace=e,o.enabled=t.enabled(e),o.useColors=t.useColors(),o.color=n(e),"function"===typeof t.init&&t.init(o),o}function a(e){t.save(e),t.names=[],t.skips=[];for(var o=("string"===typeof e?e:"").split(/[\s,]+/),r=o.length,n=0;n<r;n++)o[n]&&(e=o[n].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function i(){t.enable("")}function c(e){var o,r;for(o=0,r=t.skips.length;o<r;o++)if(t.skips[o].test(e))return!1;for(o=0,r=t.names.length;o<r;o++)if(t.names[o].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=s.debug=s["default"]=s,t.coerce=u,t.disable=i,t.enable=a,t.enabled=c,t.humanize=o("d826"),t.names=[],t.skips=[],t.formatters={}},"4a2f":function(e,t,o){"use strict";var r=o("b842"),n=o.n(r);n.a},"7bad":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Layout",{style:{height:e.appHeight-65+"px"}},[o("Layout",[o("Sider",[o("Menu",{staticStyle:{height:"100%"},attrs:{theme:"light",width:"auto"}},[o("div",[e._v("\n          总房数："+e._s(e.roomStates.length)),o("br"),e._v("\n          已租："+e._s(e.roomNum.rented)),o("br"),e._v("\n          空房："+e._s(e.roomNum.vacant)),o("br"),e._v("\n          脏房："+e._s(e.roomNum.dirty)),o("br"),e._v("\n          维修："+e._s(e.roomNum.repair)),o("br"),e._v("\n\n          入住率："+e._s(e.occupancy)),o("br")]),o("div",[o("Button",{attrs:{type:"primary",shape:"circle",size:"small"},on:{click:function(t){e.orderReserve.openIs=!0}}},[e._v("预 订")])],1)])],1),o("Content",[o("div",{staticClass:"rooms"},e._l(e.roomStates,function(t){return o("div",[o("Card",{staticClass:"room ",class:t.roomState},[o("div",{staticStyle:{height:"100%",width:"100%"},on:{contextmenu:function(o){return o.preventDefault(),e.openMenu(t,o)},dblclick:function(o){return e.dblclickHandle(t)}}},[o("p",{staticClass:"roomNo",attrs:{align:"left"}},[e._v(e._s(t.roomName)+"\n                "),"rented_hour"===t.roomState?o("Icon",{staticStyle:{float:"right"},attrs:{size:"24",type:"md-time"}}):e._e()],1),o("p",{staticClass:"roomType",attrs:{align:"left"}},[e._v(e._s(t.roomTypeName))]),o("p",{staticClass:"state",attrs:{align:"left"}},[e._v(e._s(t.roomStateName))])])])],1)}),0)])],1),o("ViewOrder",{attrs:{"open-is":e.viewOrder.openIs,"view-order-no":e.currentRoom.orderNo,"is-print":e.viewOrder.isPrint},on:{viewOrderClose:e.orderClose,"load-room-state":e.getRoomStateList}}),o("CheckIn",{attrs:{"open-is":e.checkIn.openIs,room:e.currentRoom,rooms:e.roomStates},on:{CheckInClose:function(t){return e.checkInClose(t)},"load-room-state":e.getRoomStateList}}),o("OrderReserve",{attrs:{"open-is":e.orderReserve.openIs},on:{"order-reserve-close":function(t){e.orderReserve.openIs=!1}}}),o("Modal",{attrs:{title:e.editRoomStateTitle,loading:e.stateLoad},on:{"on-ok":e.submitRoomState},model:{value:e.stateModal,callback:function(t){e.stateModal=t},expression:"stateModal"}},[o("RadioGroup",{model:{value:e.currentState,callback:function(t){e.currentState=t},expression:"currentState"}},e._l(e.states,function(t){return"rented"!==t.dicCommonCode?o("Radio",{key:t.dicCommonId,attrs:{label:t.dicCommonCode}},[e._v(e._s(t.dicCommonName))]):e._e()}),1)],1),o("Dropdown",{attrs:{trigger:"custom",visible:!1,transfer:!0,"transfer-class-name":"mymenu"},on:{"on-click":e.handleMenu}},[o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[o("DropdownItem",{attrs:{name:"checkIn",disabled:"vacant"!==e.currentRoom.roomState}},[e._v("入住")]),o("DropdownItem",{attrs:{name:"view",disabled:"rented"!==e.currentRoom.roomState}},[e._v("查看订单")]),o("DropdownItem",{attrs:{name:"lock",disabled:"vacant"!==e.currentRoom.roomState}},[e._v("锁房")]),o("Dropdown",{attrs:{placement:"right-start"}},[o("DropdownItem",{attrs:{divided:"",name:"state",disabled:"rented"===e.currentRoom.roomState}},[e._v("修改房态\n          "),o("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1),o("DropdownItem",{attrs:{divided:"",name:"close"}},[e._v("取消")])],1)],1)],1)},n=[],s=(o("ac6a"),o("cebc")),a=o("b96f"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Modal",{attrs:{width:"800",title:"入住登记","mask-closable":!1},on:{"on-visible-change":e.openOrClose},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[o("Form",[o("div",[o("Row",[o("Col",{attrs:{span:1}},[o("Icon",{attrs:{type:"md-person",size:"28"}})],1),o("Col",{attrs:{span:4}},[o("FormItem",[o("Input",{ref:"nameInput",staticStyle:{width:"120px"},attrs:{placeholder:"请输入姓名",icon:"ios-card"},model:{value:e.guest.guestName,callback:function(t){e.$set(e.guest,"guestName",t)},expression:"guest.guestName"}})],1)],1),o("Col",{attrs:{span:8}},[o("FormItem",[o("Input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入证件号"},on:{"on-change":function(t){return e.openGuestLog(e.guest.certificateNo)}},model:{value:e.guest.certificateNo,callback:function(t){e.$set(e.guest,"certificateNo",t)},expression:"guest.certificateNo"}},[o("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:e.guest.certificateType,callback:function(t){e.$set(e.guest,"certificateType",t)},expression:"guest.certificateType"}},[o("Option",{attrs:{value:"idcard"}},[e._v("身份证")]),o("Option",{attrs:{value:"other"}},[e._v("其它")])],1)],1)],1)],1),o("Col",{attrs:{span:5}},[o("FormItem",[o("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"手机号"},model:{value:e.guest.guestTel,callback:function(t){e.$set(e.guest,"guestTel",t)},expression:"guest.guestTel"}})],1)],1),o("Col",{attrs:{span:4}},[o("FormItem",[o("DatePicker",{attrs:{type:"date","start-date":new Date("1990-01-01"),placeholder:"选择生日"},model:{value:e.guest.guestBirthday,callback:function(t){e.$set(e.guest,"guestBirthday",t)},expression:"guest.guestBirthday"}})],1)],1)],1),o("Row",[o("Col",{attrs:{span:1}},[e._v(" ")]),o("Col",{attrs:{span:4}},[o("FormItem",[o("Select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择性别"},model:{value:e.guest.guestSex,callback:function(t){e.$set(e.guest,"guestSex",t)},expression:"guest.guestSex"}},[o("Option",{attrs:{value:"male"}},[e._v("男")]),o("Option",{attrs:{value:"female"}},[e._v("女")])],1)],1)],1),o("Col",{attrs:{span:4}},[o("FormItem",[o("Select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择民族"},model:{value:e.guest.guestNation,callback:function(t){e.$set(e.guest,"guestNation",t)},expression:"guest.guestNation"}},[o("Option",{attrs:{value:"汉"}},[e._v("汉")])],1)],1)],1),o("Col",{attrs:{span:10}},[o("FormItem",[o("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入地址"},model:{value:e.guest.guestAddress,callback:function(t){e.$set(e.guest,"guestAddress",t)},expression:"guest.guestAddress"}})],1)],1),o("Col",{attrs:{span:4}},[o("FormItem",[o("Button",{attrs:{type:"primary",size:"small",shape:"circle",icon:"ios-card",loading:e.readCardload},on:{click:e.readCard}},[e._v("读卡")])],1)],1)],1)],1),o("Divider",{staticClass:"myHr",attrs:{size:"default"}}),o("div",e._l(e.checkIn.orderRooms,function(t,r){return o("Row",{key:r},[o("Col",{attrs:{span:1}},[o("Icon",{attrs:{type:"md-home",size:"28"}})],1),o("Col",{attrs:{span:4}},[o("FormItem",[o("Select",{staticStyle:{width:"120px"},attrs:{filterable:""},on:{"on-change":function(t){return e.setRoomInfo(r)}},model:{value:t.roomNo,callback:function(o){e.$set(t,"roomNo",o)},expression:"item.roomNo"}},e._l(e.isRooms,function(t){return o("Option",{key:t.roomName,attrs:{disabled:e.isDisabled(t.roomNo),value:t.roomNo}},[e._v(e._s(t.roomName)+"-"+e._s(t.roomTypeName)+"\n              ")])}),1)],1)],1),o("Col",{attrs:{span:4}},[o("FormItem",[o("RadioGroup",{on:{"on-change":function(t){return e.setHourRoom(r,t)}},model:{value:t.orderTypeCode,callback:function(o){e.$set(t,"orderTypeCode",o)},expression:"item.orderTypeCode"}},[o("Radio",{attrs:{label:"daily"}},[e._v("日租")]),o("Radio",{attrs:{label:"hour_room"}},[e._v("钟点")])],1)],1)],1),o("Col",{attrs:{span:4}},[o("FormItem",[o("Input",{staticStyle:{width:"120px"},attrs:{prefix:"logo-yen",placeholder:"请输入房价",number:""},model:{value:t.roomPrice,callback:function(o){e.$set(t,"roomPrice",o)},expression:"item.roomPrice"}})],1)],1),o("Col",{attrs:{span:6}},[o("FormItem",[o("DatePicker",{staticStyle:{width:"75px"},attrs:{type:"date",placement:"bottom-end",placeholder:"时间",format:e.startFormat},model:{value:t.estimateInTime,callback:function(o){e.$set(t,"estimateInTime",o)},expression:"item.estimateInTime"}}),e._v("--\n            "),o("DatePicker",{staticStyle:{width:"75px"},attrs:{type:"date",placement:"bottom-end",placeholder:"时间",format:e.endFormat},model:{value:t.estimateOutTime,callback:function(o){e.$set(t,"estimateOutTime",o)},expression:"item.estimateOutTime"}})],1)],1),o("Col",{attrs:{span:3}},[o("FormItem",["daily"===t.orderTypeCode?o("InputNumber",{attrs:{max:100,min:1,formatter:function(e){return e+" 晚"},parser:function(e){return e.replace(" 晚","")}},on:{"on-change":function(t){return e.setOutTime(r,t)}},model:{value:e.defaultDay,callback:function(t){e.defaultDay=t},expression:"defaultDay"}}):e._e(),"hour_room"===t.orderTypeCode?o("InputNumber",{attrs:{max:3,min:3,readonly:"",formatter:function(e){return e+" 小时"},parser:function(e){return e.replace(" 小时","")}},on:{"on-change":function(t){return e.setOutTime(r,t)}},model:{value:e.defaultHour,callback:function(t){e.defaultHour=t},expression:"defaultHour"}}):e._e()],1)],1),o("Col",{attrs:{span:2}},[0===r?o("FormItem",[o("Button",{attrs:{type:"error",icon:"md-add",size:"small"},on:{click:e.handleRoomAdd}}),e._v(" \n            "),o("Button",{directives:[{name:"show",rawName:"v-show",value:e.checkIn.orderRooms.length>1,expression:"checkIn.orderRooms.length > 1"}],attrs:{type:"error",icon:"md-remove",size:"small"},on:{click:e.handleRoomRemove}})],1):e._e()],1)],1)}),1),o("Divider",{staticClass:"myHr",attrs:{size:"default"}}),o("div",[o("Row",[o("Col",{attrs:{span:1}},[o("Icon",{attrs:{type:"md-arrow-forward",size:"28"}})],1),o("Col",{attrs:{span:4}},[o("FormItem",[o("Select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择渠道"},on:{"on-change":e.channelChange},model:{value:e.checkIn.order.channelCode,callback:function(t){e.$set(e.checkIn.order,"channelCode",t)},expression:"checkIn.order.channelCode"}},e._l(e.channel,function(t,r){return o("Option",{key:r,attrs:{value:t.dicCommonCode}},[e._v("\n                "+e._s(t.dicCommonName))])}),1)],1)],1),o("Col",{attrs:{span:8}},[o("FormItem",[o("Select",{staticStyle:{width:"120px"},model:{value:e.checkIn.order.payTypeCode,callback:function(t){e.$set(e.checkIn.order,"payTypeCode",t)},expression:"checkIn.order.payTypeCode"}},[o("Option",{attrs:{value:"spot_pay"}},[e._v("现付")]),o("Option",{attrs:{value:"advance_pay"}},[e._v("预付")])],1)],1)],1)],1)],1),o("Divider",{staticClass:"myHr",attrs:{size:"default"}}),o("div",[o("PayDetail",{attrs:{"parent-is-open":e.isOpen},on:{"get-money":e.getMoney}})],1)],1),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("Button",{attrs:{size:"large"},on:{click:function(t){e.isOpen=!1}}},[e._v("取消")]),o("Button",{attrs:{type:"primary",size:"large",loading:e.checkInLoad},on:{click:e.submit}},[e._v("确定")])],1)],1)],1)},c=[],u=(o("7f7f"),o("5176")),l=o.n(u),d=o("52c1"),m=o("3f5d"),h=o("9ffe"),p=(o("f187"),o("f8b7")),f={name:"CheckIn",props:{openIs:Boolean,room:Object,rooms:Array},components:{PayDetail:m["default"],ViewOrder:a["a"]},data:function(){return{isOpen:!1,viewOrder:{openIs:!1,orderNo:""},checkInLoad:!1,checkOutHour:12,businessDayEndHour:6,checkIn:{reserved:!1,order:{guestName:"",guestTel:"",guestCertificateNo:"",orderTypeCode:"daily",channelCode:"",checkInTime:new Date,checkOutTime:new Date,payTypeCode:"spot_pay",orderComment:null,clientTypeCode:"web"},orderRooms:[{roomName:"",roomNo:"",roomTypeName:"",roomPrice:null,guestName:"",guestTel:"",guestCertificateNo:"",otherGuestCertificateNos:null,orderTypeCode:"daily",estimateInTime:new Date,estimateOutTime:null}],orderIncome:{incomeMoney:0,incomeTypeCode:"income",incomeComment:null,payDetails:[]},guests:[{guestName:null,guestTel:null,certificateType:"idcard",certificateNo:null,guestSex:null,guestNation:null,guestBirthday:null,guestAddress:null}]},guest:{guestName:null,guestTel:null,certificateType:"idcard",certificateNo:null,guestSex:null,guestNation:null,guestBirthday:null,guestAddress:null},readCardload:!1,startFormat:"MM-dd",endFormat:"MM-dd HH:mm",defaultDay:1,defaultHour:3}},computed:Object(s["a"])({isRooms:function(){return this.rooms.filter(function(e){return"vacant"===e.roomState})}},Object(d["e"])({inout:function(e){return e.dic.inout},channel:function(e){return e.dic.channel}}),Object(d["c"])(["codeToText"])),watch:{openIs:function(e){this.isOpen=e}},methods:{submit:function(){var e=this;if(this.checkInLoad=!0,this.checkIn.order.guestName=this.guest.guestName,this.checkIn.order.guestTel=this.guest.guestTel,this.checkIn.order.guestCertificateNo=this.guest.certificateNo,this.checkIn.order.checkInTime=this.checkIn.orderRooms[0].estimateInTime,this.checkIn.order.checkOutTime=this.checkIn.orderRooms[0].estimateOutTime,this.checkIn.order.orderTypeCode=this.checkIn.orderRooms[0].orderTypeCode,this.checkIn.guests[0]=this.guest,this.checkIn.orderRooms.forEach(function(t){t.guestName=e.guest.guestName,t.guestTel=e.guest.guestTel,t.guestCertificateNo=e.guest.certificateNo}),console.log(this.guest),console.log(this.checkIn),null==this.checkIn.order.channelCode||""===this.checkIn.order.channelCode)return this.$Message.error("请选择渠道"),this.checkInLoad=!1,!1;Object(p["b"])(this.checkIn).then(function(t){0===t.data.code?(console.log(t.data.data.order),e.viewOrder.orderNo=t.data.data.order.orderNo,e.isOpen=!1,e.$emit("load-room-state"),e.$Message.success("入住成功")):(e.$Message.error(t.data.code+"："+t.data.msg),e.checkInLoad=!1)})},openOrClose:function(e){var t=this;e?(this.checkIn.orderRooms[0].roomName=this.room.roomName,this.checkIn.orderRooms[0].roomNo=this.room.roomNo,this.checkIn.orderRooms[0].roomTypeName=this.room.roomTypeName,this.checkIn.orderRooms[0].estimateOutTime=this.getCheckOutTime(!1,1),this.checkIn.orderRooms[0].roomPrice=this.room.roomTypePrice,this.$nextTick(function(){t.$refs.nameInput.focus()})):(this.$emit("CheckInClose",this.viewOrder.orderNo),l()(this.$data,this.$options.data()),this.$Notice.close("guestLog"))},setRoomInfo:function(e){var t=this,o=this.rooms.filter(function(o){return o.roomNo===t.checkIn.orderRooms[e].roomNo});o&&o.length>0&&(this.checkIn.orderRooms[e].roomName=o[0].roomName,this.checkIn.orderRooms[e].roomTypeName=o[0].roomTypeName,this.checkIn.orderRooms[e].roomPrice=o[0].roomTypePrice)},handleRoomAdd:function(){this.checkIn.orderRooms.push({roomName:"",roomNo:"",roomTypeName:"",roomPrice:null,guestName:"",guestTel:"",guestCertificateNo:"",otherGuestCertificateNos:null,orderTypeCode:"daily",estimateInTime:new Date,estimateOutTime:this.getCheckOutTime(!1,1)})},handleRoomRemove:function(){this.checkIn.orderRooms.length>1&&this.checkIn.orderRooms.pop()},getMoney:function(e){this.checkIn.orderIncome=e},readCard:function(){var e=this;this.readCardload=!0,h["a"].read(function(t){console.log("retcode:",t.retcode),console.log("retmsg:",t.retmsg),console.log("errmsg:",t.errmsg),console.log("CardType:",t.CardType),e.openGuestLog(t.cardno),e.guest.guestName=t.name,e.guest.certificateNo=t.cardno,e.guest.guestBirthday=t.born,"男"==t.sex&&(e.guest.guestSex="male"),"女"==t.sex&&(e.guest.guestSex="female"),e.guest.guestNation=t.nation,e.guest.guestAddress=t.address,e.readCardload=!1})},setOutTime:function(e,t){console.log(this.checkIn.orderRooms[e].estimateInTime),this.checkIn.orderRooms[e].estimateOutTime=this.getCheckOutTime(!1,t)},setHourRoom:function(e,t){"hour_room"===t?(this.startFormat="HH:mm",this.endFormat="HH:mm",this.checkIn.orderRooms[e].roomPrice=60,this.checkIn.orderRooms[e].estimateOutTime=this.getCheckOutTime(!0,3)):(this.startFormat="MM-dd",this.endFormat="MM-dd HH:mm",this.setRoomInfo(e),this.checkIn.orderRooms[e].estimateOutTime=this.getCheckOutTime(!1,1)),console.log(this.checkIn.orderRooms[e].estimateInTime),console.log(this.checkIn.orderRooms[e].estimateOutTime)},isDisabled:function(e){var t=!1;return this.checkIn.orderRooms.forEach(function(o){e===o.roomNo&&(t=!0)}),t},channelChange:function(e){this.checkIn.order.payTypeCode="offline"===e?"spot_pay":"advance_pay"},openGuestLog:function(e){var t=this;console.log(e);var o={guestCertificateNo:e,sortBy:"gmtCreate",orderBy:"desc",page:1,limit:3};e&&Object(p["h"])(o).then(function(o){if(0===o.data.code){var r=o.data.data;t.$Notice.close("guestLog"),(null===r||r.length<=0)&&t.$Notice.info({name:"guestLog",duration:0,title:"此客人第一次入住！",desc:""}),r&&r.length>0&&t.$Notice.open({name:"guestLog",title:"客人 "+r[0].guestName+" 最近入住记录",duration:0,desc:e,render:function(e){return e("div",r.map(function(t){return e("p",{style:{paddingTop:"10px",fontWeight:"bold",fontSize:"14px"}},[t.roomName,"-"+t.roomTypeName+" ","daily"===t.orderTypeCode?"日租":"钟点"," "+t.roomPrice+"元 ",new Date(t.realInTime).toLocaleDateString()])}))}})}})},getCheckOutTime:function(e,t){var o=new Date;return e?o.setHours(o.getHours()+t):(o.getHours()>=this.businessDayEndHour&&(o.setDate(o.getDate()+t),console.log(t)),o.setHours(this.checkOutHour),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),o}}},g=f,v=(o("2e46"),o("2877")),y=Object(v["a"])(g,i,c,!1,null,null,null),I=y.exports,k=o("420d"),C=o("acb0"),w=window.innerHeight;window.onresize=function(){w=window.innerHeight};var b=w,N={name:"RoomState",components:{ViewOrder:a["a"],CheckIn:I,OrderReserve:function(){return o.e("orderReserve").then(o.bind(null,"eea4"))}},data:function(){return{hotelNo:"622723001",currentRoom:{},viewOrder:{openIs:!1,isPrint:!1},roomStates:[],stateModal:!1,stateLoad:!0,states:[],editRoomStateTitle:"修改房态",currentState:"",checkIn:{openIs:!1},autoHeight:b,orderReserve:{openIs:!1}}},computed:Object(s["a"])({roomNum:function(){var e={vacant:0,rented:0,dirty:0,repair:0};return this.roomStates.forEach(function(t){"vacant"===t.roomState&&e.vacant++,"rented"!==t.roomState&&"rented_hour"!==t.roomState||e.rented++,"dirty"===t.roomState&&e.dirty++,"repair"===t.roomState&&e.repair++}),e},occupancy:function(){return Math.round(this.roomNum.rented/this.roomStates.length*1e4)/100+"%"}},Object(d["e"])({appHeight:function(e){return e.webSet.appHeight},channel:function(e){return e.dic.channel}})),mounted:function(){this.getStateList("roomState"),this.getRoomStateList()},methods:Object(s["a"])({openMenu:function(e,t){this.currentRoom=e;var o=document.documentElement.clientHeight,r=document.documentElement.clientWidth,n=document.getElementsByClassName("mymenu")[0];n.style.display="";var s=n.offsetHeight,a=n.offsetWidth;console.log(s),o-t.clientY<200?n.style.top=t.clientY-s+"px":n.style.top=t.clientY+"px",r-t.clientX<103?n.style.left=r-a+"px":n.style.left=t.clientX+"px"},handleMenu:function(e){console.log(e),"checkIn"===e&&(this.checkIn.openIs=!0,this.closeMenu()),"reserve"===e&&(this.checkIn.openIs=!0,this.closeMenu()),"view"===e&&(this.viewOrder.openIs=!0,this.closeMenu()),"close"===e&&this.closeMenu(),"state"===e&&(this.editRoomStateTitle="修改房态--"+this.currentRoom.roomName,this.currentState=this.currentRoom.roomState,this.stateModal=!0,this.closeMenu())},dblclickHandle:function(e){this.currentRoom=e,"rented"!==e.roomState&&"rented_hour"!==e.roomState||(this.viewOrder.openIs=!0),"vacant"===e.roomState&&(this.checkIn.openIs=!0),"dirty"!==e.roomState&&"repair"!==e.roomState||(this.editRoomStateTitle="修改房态--"+this.currentRoom.roomName,this.currentState=this.currentRoom.roomState,this.stateModal=!0)},closeMenu:function(){var e=document.getElementsByClassName("mymenu")[0];e.style.display="none"},orderClose:function(){this.viewOrder.openIs=!1,this.viewOrder.isPrint=!1},checkInClose:function(e){this.checkIn.openIs=!1,e&&(this.currentRoom.orderNo=e,this.viewOrder.isPrint=!0,this.viewOrder.openIs=!0)},getRoomStateList:function(){var e=this;Object(k["b"])().then(function(t){0===t.data.code?(e.roomStates=t.data.data,e.setRoomStates(t.data.data)):e.$Message.error(t.data.code+"："+t.data.msg)})},getStateList:function(e){var t=this;Object(C["c"])(e).then(function(e){0===e.data.code?t.states=e.data.data:t.$Message.error(e.data.code+"："+e.data.msg)})},submitRoomState:function(){var e=this;Object(k["d"])(this.currentRoom.roomNo,this.currentState).then(function(t){0===t.data.code?(e.$Message.success(e.currentRoom.roomName+"："+t.data.msg),e.stateModal=!1,e.getRoomStateList()):e.$Message.error(t.data.code+"："+t.data.msg)})},viewRoomState:function(e){var t=this.states.filter(function(t){return t.dicCommonCode===e});return t.dicCommon}},Object(d["d"])({setRoomStates:"setRoomStates"}))},R=N,S=(o("4a2f"),Object(v["a"])(R,r,n,!1,null,null,null));t["default"]=S.exports},"9ffe":function(e,t,o){"use strict";var r=o("f187"),n=o.n(r);t["a"]={read:function(e){n()("http://localhost:8080/api/ReadMsg",{timeout:5e3},function(t,o){t?console.error("错了错了=",t.message):(e(o),console.log("成功了：",o))})}}},b842:function(e,t,o){},ce0f:function(e,t,o){(function(r){function n(){return!("undefined"===typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function s(e){var o=this.useColors;if(e[0]=(o?"%c":"")+this.namespace+(o?" %c":" ")+e[0]+(o?"%c ":" ")+"+"+t.humanize(this.diff),o){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var n=0,s=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(n++,"%c"===e&&(s=n))}),e.splice(s,0,r)}}function a(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function i(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(o){}}function c(){var e;try{e=t.storage.debug}catch(o){}return!e&&"undefined"!==typeof r&&"env"in r&&(e=Object({NODE_ENV:"production",VUE_APP_CLI_UI_URL:"",BASE_URL:"/"}).DEBUG),e}function u(){try{return window.localStorage}catch(e){}}t=e.exports=o("3774"),t.log=a,t.formatArgs=s,t.save=i,t.load=c,t.useColors=n,t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(c())}).call(this,o("4362"))},d826:function(e,t){var o=1e3,r=60*o,n=60*r,s=24*n,a=365.25*s;function i(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var i=parseFloat(t[1]),c=(t[2]||"ms").toLowerCase();switch(c){case"years":case"year":case"yrs":case"yr":case"y":return i*a;case"days":case"day":case"d":return i*s;case"hours":case"hour":case"hrs":case"hr":case"h":return i*n;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}}}function c(e){return e>=s?Math.round(e/s)+"d":e>=n?Math.round(e/n)+"h":e>=r?Math.round(e/r)+"m":e>=o?Math.round(e/o)+"s":e+"ms"}function u(e){return l(e,s,"day")||l(e,n,"hour")||l(e,r,"minute")||l(e,o,"second")||e+" ms"}function l(e,t,o){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+o:Math.ceil(e/t)+" "+o+"s"}e.exports=function(e,t){t=t||{};var o=typeof e;if("string"===o&&e.length>0)return i(e);if("number"===o&&!1===isNaN(e))return t.long?u(e):c(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},f187:function(e,t,o){var r=o("ce0f")("jsonp");e.exports=a;var n=0;function s(){}function a(e,t,o){"function"==typeof t&&(o=t,t={}),t||(t={});var a,i,c=t.prefix||"__jp",u=t.name||c+n++,l=t.param||"callback",d=null!=t.timeout?t.timeout:6e4,m=encodeURIComponent,h=document.getElementsByTagName("script")[0]||document.head;function p(){a.parentNode&&a.parentNode.removeChild(a),window[u]=s,i&&clearTimeout(i)}function f(){window[u]&&p()}return d&&(i=setTimeout(function(){p(),o&&o(new Error("Timeout"))},d)),window[u]=function(e){r("jsonp got",e),p(),o&&o(null,e)},e+=(~e.indexOf("?")?"&":"?")+l+"="+m(u),e=e.replace("?&","?"),r('jsonp req "%s"',e),a=document.createElement("script"),a.src=e,h.parentNode.insertBefore(a,h),f}},fb88:function(e,t,o){}}]);
//# sourceMappingURL=roomState-legacy.97eee924.js.map