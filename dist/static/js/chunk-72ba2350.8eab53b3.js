(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72ba2350"],{"2bb8":function(e,t,a){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,a,l){return t=t||"&",a=a||"=",null===e&&(e=void 0),"object"===typeof e?o(s(e),(function(s){var l=encodeURIComponent(r(s))+a;return n(e[s])?o(e[s],(function(e){return l+encodeURIComponent(r(e))})).join(t):l+encodeURIComponent(r(e[s]))})).join(t):l?encodeURIComponent(r(l))+a+encodeURIComponent(r(e)):""};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function o(e,t){if(e.map)return e.map(t);for(var a=[],r=0;r<e.length;r++)a.push(t(e[r],r));return a}var s=Object.keys||function(e){var t=[];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.push(a);return t}},"5ee4":function(e,t,a){"use strict";t.decode=t.parse=a("a2d3"),t.encode=t.stringify=a("2bb8")},a2d3:function(e,t,a){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,a,o){t=t||"&",a=a||"=";var s={};if("string"!==typeof e||0===e.length)return s;var l=/\+/g;e=e.split(t);var i=1e3;o&&"number"===typeof o.maxKeys&&(i=o.maxKeys);var u=e.length;i>0&&u>i&&(u=i);for(var c=0;c<u;++c){var d,p,f,b,m=e[c].replace(l,"%20"),v=m.indexOf(a);v>=0?(d=m.substr(0,v),p=m.substr(v+1)):(d=m,p=""),f=decodeURIComponent(d),b=decodeURIComponent(p),r(s,f)?n(s[f])?s[f].push(b):s[f]=[s[f],b]:s[f]=b}return s};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},e7ff:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-tabs",{on:{"tab-click":e.loadData},model:{value:e.params.status,callback:function(t){e.$set(e.params,"status",t)},expression:"params.status"}},[a("el-tab-pane",{attrs:{label:"全部",name:"全部"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"待派单",name:"待派单"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"待接单",name:"待接单"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"待服务",name:"待服务"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"待确认",name:"待确认"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"已完成",name:"已完成"}})],1),e._v(" "),a("el-table",{attrs:{data:e.orders.list}},[a("el-table-column",{attrs:{prop:"id",label:"编号"}}),e._v(" "),a("el-table-column",{attrs:{width:"200",prop:"orderTime",label:"下单时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("dateParse")(t.row.orderTime))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"total",label:"总价"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerId",label:"顾客ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"waiterId",label:"员工ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"addressId",label:"地址ID"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return["待派单"===t.row.status?a("a",{attrs:{href:""},on:{click:function(a){return a.preventDefault(),e.toSendOrderHandler(t.row)}}},[e._v("派单")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"hide-on-single-page":!0,layout:"prev, pager, next",total:e.orders.total},on:{"current-change":e.pageChageHandler}}),e._v(" "),a("el-dialog",{attrs:{title:"派单",visible:e.visible,width:"60%"},on:{"update:visible":function(t){e.visible=t}}},[a("div",[a("p",[a("strong",[e._v("订单编号：")]),e._v(" "+e._s(e.form.id)+" ")]),e._v(" "),a("p",[a("strong",[e._v("订单总价：")]),e._v(" "+e._s(e.form.total)+" ")]),e._v(" "),a("p",[a("strong",[e._v("下单时间：")]),e._v(" "+e._s(e.form.orderTime)+" ")]),e._v(" "),a("p",[a("strong",[e._v("服务员工：")]),e._v(" "),a("el-radio-group",{model:{value:e.waiterId,callback:function(t){e.waiterId=t},expression:"waiterId"}},e._l(e.employees,(function(t){return a("el-radio",{key:t.id,attrs:{border:"",size:"small",label:t.id}},[e._v(e._s(t.realname))])})),1)],1)]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:e.closeModalHandler}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.submitHandler}},[e._v("确 定")])],1)])],1)},n=[],o=a("b775"),s=a("5ee4"),l=a.n(s),i={filters:{dateParse:function(e){if(e){var t=new Date(e),a=t.getFullYear()+"-",r=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",n=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",o=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",s=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",l=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return a+r+n+o+s+l}return""}},methods:{pageChageHandler:function(e){this.params.page=e-1,this.loadData()},loadEmployees:function(){var e=this,t="http://223.4.183.62:5588/waiter/findAll";o["a"].get(t).then((function(t){e.employees=t.data}))},loadData:function(){var e=this,t="http://223.4.183.62:5588/order/queryPage";"全部"===this.params.status&&delete this.params.status,Object(o["a"])({url:t,method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:l.a.stringify(this.params)}).then((function(t){e.orders=t.data}))},submitHandler:function(){var e=this,t="http://223.4.183.62:5588/order/sendOrder";Object(o["a"])({url:t,method:"GET",params:{orderId:this.form.id,waiterId:this.waiterId}}).then((function(t){e.closeModalHandler(),e.loadData(),e.$message({type:"success",message:t.message})}))},toSendOrderHandler:function(e){this.form=e,this.visible=!0},closeModalHandler:function(){this.visible=!1}},data:function(){return{visible:!1,orders:{},form:{},params:{page:0,pageSize:10},employees:[],waiterId:null}},created:function(){this.loadData(),this.loadEmployees()}},u=i,c=a("5511"),d=Object(c["a"])(u,r,n,!1,null,"6b38dcfc",null);t["default"]=d.exports}}]);