webpackJsonp([34],{"3brv":function(t,e,o){var i=o("C0p8");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("56d7580d",i,!0,{})},C0p8:function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,"\n.tips[data-v-53e7259f] {\r\n    font-size: 1.2rem;\r\n    color: #314558;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\n}\r\n",""])},tJFp:function(t,e,o){"use strict";function i(t){o("3brv")}Object.defineProperty(e,"__esModule",{value:!0});var n=o("Ffne"),s={data:function(){return{listLoading:!1,customers:[],editFormVisible:!1,editLoading:!1,editFormRules:{code:[{required:!0,message:this.$t("common.holderInput"),trigger:"blur"}],name:[{required:!0,message:this.$t("common.holderInput"),trigger:"blur"}]},editForm:{code:"",name:""}}},mounted:function(){this.updateCustomers()},methods:{updateCustomers:function(){var t=this;this.listLoading=!0,n.a.getCustomers().then(function(e){t.customers=e.data.result,t.listLoading=!1}).catch(function(e){t.listLoading=!1})},closeDlg:function(){this.editFormVisible=!1,this.editForm.code="",this.editForm.name=""},handleAdd:function(){this.editFormVisible=!0,this.editForm.code="",this.editForm.name=""},handleDelete:function(t,e){var o=this;this.$confirm(this.$t("common.toCancel"),this.$t("common.tip"),{type:"warning"}).then(function(){o.onDelete(t,e)}).catch(function(){})},onDelete:function(t,e){var o=this;this.listLoading=!0,n.a.deleteCustomer(this.customers[t].id).then(function(t){o.updateCustomers(),o.$message.success(o.$t("common.tipSuccess"))}).catch(function(t){o.listLoading=!1})},handleRecord:function(t,e){},editSubmit:function(t){var e=this,o=this.editForm;e.$refs[t].validate(function(t){t&&(e.editLoading=!0,n.a.createCustomer(o.code,o.name).then(function(t){e.editLoading=!1,e.editFormVisible=!1,e.updateCustomers(),e.$message.success(e.$t("common.tipSuccess"))}).catch(function(t){e.editLoading=!1,e.editFormVisible=!1}))})}}},a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"tips"},[o("p",[t._v(t._s(t.$t("route.customerMng")))])]),t._v(" "),o("el-button",{staticClass:"addparam",attrs:{type:"success"},on:{click:function(e){t.handleAdd()}}},[t._v(t._s(t.$t("manufacture.btnAddNewCus")))]),t._v(" "),t.editFormVisible?o("el-dialog",{attrs:{title:t.$t("manufacture.btnAddNewCus"),visible:t.editFormVisible,"close-on-click-modal":!1,"before-close":t.closeDlg}},[o("el-form",{ref:"editForm",attrs:{model:t.editForm,"label-width":"80px",rules:t.editFormRules}},[o("el-form-item",{attrs:{label:t.$t("manufacture.code"),prop:"code"}},[o("el-input",{attrs:{placeholder:t.$t("common.holderInput")},model:{value:t.editForm.code,callback:function(e){t.$set(t.editForm,"code",e)},expression:"editForm.code"}})],1),t._v(" "),o("el-form-item",{attrs:{label:t.$t("manufacture.name"),prop:"name"}},[o("el-input",{attrs:{placeholder:t.$t("common.holderInput")},model:{value:t.editForm.name,callback:function(e){t.$set(t.editForm,"name",e)},expression:"editForm.name"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:t.closeDlg}},[t._v(t._s(t.$t("common.cancel")))]),t._v(" "),o("el-button",{attrs:{type:"danger",loading:t.editLoading},on:{click:function(e){t.editSubmit("editForm")}}},[t._v(t._s(t.$t("common.commit")))])],1)],1):t._e(),t._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.customers,border:"",strip:""}},[o("el-table-column",{attrs:{type:"index",width:"40"}}),t._v(" "),o("el-table-column",{attrs:{prop:"code",label:t.$t("manufacture.code")}}),t._v(" "),o("el-table-column",{attrs:{prop:"name",label:t.$t("manufacture.name")}}),t._v(" "),o("el-table-column",{attrs:{label:t.$t("common.operation")},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button-group",[o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){t.handleDelete(e.$index,e.row)}}},[t._v(t._s(t.$t("common.delete")))])],1)]}}])})],1)],1)},r=[],l={render:a,staticRenderFns:r},c=l,d=o("VU/8"),m=i,u=d(s,c,!1,m,"data-v-53e7259f",null);e.default=u.exports}});