webpackJsonp([63],{B8WK:function(t,e,a){var r=a("zmQC");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("44df3237",r,!0,{})},vUC7:function(t,e,a){"use strict";function r(t){a("B8WK")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("fZjL"),i=a.n(o),s=a("UgCr"),n={data:function(){return{listLoading:!0,products:[],productId:"",editFormVisible:!1,editLoading:!1,editFormRules:{start:[{required:!0,message:this.$t("common.holderInput"),trigger:"blur"},{min:12,max:12,message:"长度为12 个字符",trigger:"blur"}],end:[{required:!0,message:this.$t("common.holderInput"),trigger:"blur"},{min:12,max:12,message:"长度为12 个字符",trigger:"blur"}],mode:[{required:!0,message:this.$t("common.holderSelect"),trigger:"change"}],type:[{required:!0,message:this.$t("common.holderSelect"),trigger:"change"}]},editForm:{type:"",mode:"",start:"",end:""}}},computed:{types:function(){return[{key:"auto",label:this.$t("aftersale.typeAuto")},{key:"manual",label:this.$t("aftersale.typeManual")}]},modes:function(){return[{key:"all",label:this.$t("aftersale.modeAll")},{key:"batch",label:this.$t("aftersale.modeBatch")}]}},mounted:function(){this.updateProducts()},methods:{updateProducts:function(){var t=this;this.listLoading=!0,this.products=[],s.a.getAllProducts().then(function(e){t.products=e.data.result,t.products.forEach(function(t){if(0!=t.upgrade_cmd.length){var e=JSON.parse(t.upgrade_cmd);i()(e).forEach(function(a){t[a]=e[a]})}}),t.listLoading=!1}).catch(function(e){t.listLoading=!1})},updatedFormatter:function(t,e){return 3==t.version.length?t.firmware_updated:""},getMode:function(t){return"batch"==t?this.$t("aftersale.modeBatch"):this.$t("aftersale.modeAll")},getType:function(t){return"auto"==t?this.$t("aftersale.typeAuto"):this.$t("aftersale.typeManual")},getTag:function(t){return""==t?"success":"danger"},statusFormatter:function(t,e){return 0==t.upgrade_cmd.length?this.$t("aftersale.noupgrade"):this.$t("aftersale.inprogress")},handleUpdateFM:function(t,e){this.$router.push({path:"/productUpdateFM",query:{id:this.products[t].id}})},handleStart:function(t,e){this.editFormVisible=!0,this.editForm.start="",this.editForm.end="",this.editForm.mode="",this.editForm.type="",this.productId=this.products[t].id},handleCancel:function(t,e){var a=this;this.$confirm(this.$t("common.toDelete"),this.$t("common.tip"),{type:"warning"}).then(function(){a.onDelete(t,e)}).catch(function(){})},onDelete:function(t,e){var a=this;this.listLoading=!0,s.a.cancelOTA(this.products[t].id).then(function(t){a.$message.success(a.$t("common.tipSuccess")),a.updateProducts()}).catch(function(t){a.listLoading=!1})},closeDlg:function(){this.editFormVisible=!1,this.editForm.start="",this.editForm.end="",this.editForm.mode="",this.editForm.type=""},editSubmit:function(t){var e=this,a=this;a.$refs[t].validate(function(t){t&&(a.editLoading=!0,s.a.startOTA(e.productId,e.editForm).then(function(t){a.editLoading=!1,a.editFormVisible=!1,a.updateProducts(),e.$message.success(e.$t("common.tipSuccess"))}).catch(function(t){a.editLoading=!1,a.editFormVisible=!1}))})}},watch:{"editForm.mode":function(t,e){"batch"==t?(this.editForm.start="",this.editForm.end=""):(this.editForm.start=" ",this.editForm.end=" ")}}},l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"tips"},[a("p",[t._v(t._s(t.$t("route.ota")))])]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.products,border:"",strip:"",size:"mini"}},[a("el-table-column",{attrs:{type:"expand",width:"40"},scopedSlots:t._u([{key:"default",fn:function(e){return[0!=e.row.upgrade_cmd.length?a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:t.$t("aftersale.ver")}},[a("span",[t._v(t._s(e.row.ver))])]),t._v(" "),a("el-form-item",{attrs:{label:t.$t("aftersale.type")}},[a("span",[t._v(t._s(t.getType(e.row.type)))])]),t._v(" "),a("el-form-item",{attrs:{label:t.$t("aftersale.mode")}},[a("span",[t._v(t._s(t.getMode(e.row.mode)))])]),t._v(" "),0!=e.row.start.length?a("el-form-item",{attrs:{label:t.$t("aftersale.start")}},[a("span",[t._v(t._s(e.row.start))])]):t._e(),t._v(" "),0!=e.row.end.length?a("el-form-item",{attrs:{label:t.$t("aftersale.end")}},[a("span",[t._v(t._s(e.row.end))])]):t._e()],1):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{type:"index",width:"40"}}),t._v(" "),a("el-table-column",{attrs:{prop:"model",label:t.$t("product.promodel"),width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"species",label:t.$t("product.protype"),width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"version",label:t.$t("aftersale.version"),width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"firmware_updated",label:t.$t("common.modified"),formatter:t.updatedFormatter}}),t._v(" "),a("el-table-column",{attrs:{prop:"upgrade_cmd",label:t.$t("aftersale.status"),formatter:t.statusFormatter},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t.getTag(e.row.upgrade_cmd)}},[t._v(t._s(t.statusFormatter(e.row)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("common.operation")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button-group",[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){t.handleUpdateFM(e.$index,e.row)}}},[t._v(t._s(t.$t("product.updateFM")))]),t._v(" "),0==e.row.upgrade_cmd.length?a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){t.handleStart(e.$index,e.row)}}},[t._v(t._s(t.$t("aftersale.btnStart")))]):t._e(),t._v(" "),0!=e.row.upgrade_cmd.length?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleCancel(e.$index,e.row)}}},[t._v(t._s(t.$t("aftersale.btnCancel")))]):t._e()],1)]}}])})],1),t._v(" "),t.editFormVisible?a("el-dialog",{attrs:{title:t.$t("aftersale.btnStart"),visible:t.editFormVisible,"close-on-click-modal":!1,"before-close":t.closeDlg}},[a("el-form",{ref:"editForm",attrs:{model:t.editForm,"label-width":"160px",rules:t.editFormRules}},[a("el-form-item",{attrs:{label:t.$t("aftersale.type"),prop:"type"}},[a("el-select",{staticClass:"handle-select",attrs:{placeholder:t.$t("common.holderSelect")},model:{value:t.editForm.type,callback:function(e){t.$set(t.editForm,"type",e)},expression:"editForm.type"}},[t._l(t.types,function(t){return[a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})]})],2)],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("aftersale.mode"),prop:"mode"}},[a("el-select",{staticClass:"handle-select",attrs:{placeholder:t.$t("common.holderSelect")},model:{value:t.editForm.mode,callback:function(e){t.$set(t.editForm,"mode",e)},expression:"editForm.mode"}},[t._l(t.modes,function(t){return[a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})]})],2)],1),t._v(" "),"batch"==t.editForm.mode?a("el-form-item",{attrs:{label:t.$t("aftersale.start"),prop:"start"}},[a("el-input",{model:{value:t.editForm.start,callback:function(e){t.$set(t.editForm,"start",e)},expression:"editForm.start"}})],1):t._e(),t._v(" "),"batch"==t.editForm.mode?a("el-form-item",{attrs:{label:t.$t("aftersale.end"),prop:"end"}},[a("el-input",{model:{value:t.editForm.end,callback:function(e){t.$set(t.editForm,"end",e)},expression:"editForm.end"}})],1):t._e()],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.closeDlg}},[t._v(t._s(t.$t("common.cancel")))]),t._v(" "),a("el-button",{attrs:{type:"danger",loading:t.editLoading},on:{click:function(e){t.editSubmit("editForm")}}},[t._v(t._s(t.$t("common.commit")))])],1)],1):t._e()],1)},d=[],c={render:l,staticRenderFns:d},m=c,u=a("VU/8"),p=r,f=u(n,m,!1,p,"data-v-14aec49a",null);e.default=f.exports},zmQC:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.tips[data-v-14aec49a] {\r\n    font-size: 1.2rem;\r\n    color: #314558;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\n}\n.demo-table-expand[data-v-14aec49a] {\r\n    font-size: 0;\n}\n.demo-table-expand label[data-v-14aec49a] {\r\n    width: 90px;\n}\n.demo-table-expand .el-form-item[data-v-14aec49a] {\r\n    margin-left: 30%;\r\n    margin-bottom: 0;\r\n    width: 100%;\r\n    color: #99a9bf !important;\n}\r\n",""])}});