(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9028ce0"],{"2bb8":function(e,t,n){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,s){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"===typeof e?a(l(e),(function(l){var s=encodeURIComponent(r(l))+n;return o(e[l])?a(e[l],(function(e){return s+encodeURIComponent(r(e))})).join(t):s+encodeURIComponent(r(e[l]))})).join(t):s?encodeURIComponent(r(s))+n+encodeURIComponent(r(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function a(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var l=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},"45c4":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n    顾客管理\n    "),n("br"),n("br"),e._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.toAddHandler}},[e._v("添加")]),e._v(" "),n("el-button",{attrs:{type:"danger",size:"small"}},[e._v("批量删除")]),e._v(" "),n("br"),e._v(" "),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.customers,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{label:"编号",prop:"id"}}),e._v(" "),n("el-table-column",{attrs:{label:"用户名",prop:"username"}}),e._v(" "),n("el-table-column",{attrs:{label:"姓名",prop:"realname"}}),e._v(" "),n("el-table-column",{attrs:{label:"性别",prop:"gender"}}),e._v(" "),n("el-table-column",{attrs:{label:"联系方式",width:"120",prop:"telephone"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("a",{attrs:{href:""},on:{click:function(n){return n.preventDefault(),e.toDeleteHandler(t.row.id)}}},[n("i",{staticClass:"el-icon-delete"})]),e._v(" "),n("a",{attrs:{href:""},on:{click:function(n){return n.preventDefault(),e.toUpdateHandler(t.row)}}},[n("i",{staticClass:"el-icon-edit"})])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{title:e.title,visible:e.visible,width:"60%"},on:{"update:visible":function(t){e.visible=t}}},[n("el-form",{attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"真实姓名"}},[n("el-input",{model:{value:e.form.realname,callback:function(t){e.$set(e.form,"realname",t)},expression:"form.realname"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"性别"}},[n("el-radio-group",{model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender",t)},expression:"form.gender"}},[n("el-radio-button",{attrs:{label:"男"}}),e._v(" "),n("el-radio-button",{attrs:{label:"女"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"手机号"}},[n("el-input",{attrs:{type:"number"},model:{value:e.form.telephone,callback:function(t){e.$set(e.form,"telephone",t)},expression:"form.telephone"}})],1)],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:e.closeModalHandler}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.submitHandler}},[e._v("确 定")])],1)],1)],1)},o=[],a=n("b775"),l=n("5ee4"),s=n.n(l),i={methods:{handleSelectionChange:function(e){this.multipleSelection=e},loadData:function(){var e=this,t="http://223.4.183.62:5588/customer/findAll";a["a"].get(t).then((function(t){e.customers=t.data}))},toAddHandler:function(){this.title="录入顾客信息",this.form={type:"customer"},this.visible=!0},toUpdateHandler:function(e){this.title="修改顾客信息",this.form=e,this.visible=!0},toDeleteHandler:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n="http://223.4.183.62:5588/customer/deleteById?id="+e;a["a"].get(n).then((function(e){t.loadData(),t.$message({type:"success",message:"删除成功!"})}))}))},submitHandler:function(){var e=this,t="http://223.4.183.62:5588/customer/saveOrUpdate";Object(a["a"])({url:t,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:s.a.stringify(this.form)}).then((function(t){e.closeModalHandler(),e.loadData(),e.$message({type:"success",message:t.message})}))},closeModalHandler:function(){this.visible=!1}},data:function(){return{title:"",visible:!1,customers:[],form:{type:"customer"}}},created:function(){this.loadData()}},c=i,u=n("5511"),p=Object(u["a"])(c,r,o,!1,null,"0a9389c2",null);t["default"]=p.exports},"5ee4":function(e,t,n){"use strict";t.decode=t.parse=n("a2d3"),t.encode=t.stringify=n("2bb8")},a2d3:function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,a){t=t||"&",n=n||"=";var l={};if("string"!==typeof e||0===e.length)return l;var s=/\+/g;e=e.split(t);var i=1e3;a&&"number"===typeof a.maxKeys&&(i=a.maxKeys);var c=e.length;i>0&&c>i&&(c=i);for(var u=0;u<c;++u){var p,d,f,m,b=e[u].replace(s,"%20"),v=b.indexOf(n);v>=0?(p=b.substr(0,v),d=b.substr(v+1)):(p=b,d=""),f=decodeURIComponent(p),m=decodeURIComponent(d),r(l,f)?o(l[f])?l[f].push(m):l[f]=[l[f],m]:l[f]=m}return l};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}}}]);