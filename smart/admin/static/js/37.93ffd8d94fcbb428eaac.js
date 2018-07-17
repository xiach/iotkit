webpackJsonp([37],{GYGF:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,"\n.tips[data-v-4538eefd] {\r\n    font-size: 1.2rem;\r\n    color: #314558;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\n}\r\n",""])},dx84:function(t,e,i){var r=i("GYGF");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i("rjj0")("115994c3",r,!0,{})},ycn5:function(t,e,i){"use strict";function r(t){i("dx84")}Object.defineProperty(e,"__esModule",{value:!0});var o=i("UgCr"),a={data:function(){var t=this,e=function(e,i,r){var o=parseInt(i);o<10||o>86400?r(new Error(t.$t("storage.intervalHolder"))):r()},i=function(e,i,r){var o=parseInt(i);o<200||o>1e4?r(new Error(t.$t("storage.maximumHolder"))):r()};return{listLoading:!1,isChange:!1,hId:"",products:[],capabilities:[],records:[],editFormVisible:!1,editLoading:!1,editFormRules:{interval:[{required:!0,message:this.$t("common.holderInput"),trigger:"blur"},{validator:e,trigger:"blur"}],maximum:[{required:!0,message:this.$t("common.holderInput"),trigger:"blur"},{validator:i,trigger:"blur"}],capabilityId:[{required:!0,message:this.$t("common.holderSelect"),trigger:"change"}]},editForm:{capabilityId:"",interval:"3600",maximum:"1000"},productForm:{prodId:""},productFormRules:{prodId:[{required:!0,message:this.$t("message.productHolder"),trigger:"change"}]}}},computed:{title:function(){return this.isChange?this.$t("message.modifyMsgCfg"):this.$t("message.addMsgCfg")},types:function(){return[{key:"notice",label:this.$t("message.notice")},{key:"alarm",label:this.$t("message.alarm")}]}},mounted:function(){var t=this;this.products=[],o.a.getAllProducts().then(function(e){t.products=e.data.result}).catch(function(t){})},methods:{getProductLabel:function(t){return t.model+"("+t.species+")"},getCapLabel:function(t){return t.name+"("+t.key+")"},updateHistoryList:function(t){var e=this,i=this;this.listLoading=!0,o.a.getAllHistoryCfg(t).then(function(r){e.listLoading=!1,e.records=r.data.result,o.a.getProduct(t).then(function(t){i.capabilities=[];var e=["switch","enum","range","fault"];t.data.capability.forEach(function(t){-1!=e.indexOf(t.type)&&i.capabilities.push(t)}),i.capabilities.sort(function(t,e){return t.type[0]-e.type[0]})}).catch(function(t){})}).catch(function(t){e.listLoading=!1})},capFormatter:function(t,e){return t.capability.name+"("+t.capability.key+")"},handleAdd:function(t){var e=this;e.$refs[t].validate(function(t){if(!t)return!1;e.isChange=!1,e.editFormVisible=!0,e.editForm.capabilityId=""})},handleEdit:function(t,e){var i=this.records[t];this.isChange=!0,this.editFormVisible=!0,this.hId=i.id,this.editForm.capabilityId=i.capability.id,this.editForm.interval=i.interval,this.editForm.maximum=i.maximum},handleDelete:function(t,e){var i=this;this.$confirm(this.$t("common.toDelete"),this.$t("common.tip"),{type:"warning"}).then(function(){i.onDelete(t,e)}).catch(function(){})},onDelete:function(t,e){var i=this;this.listLoading=!0,o.a.deleteHistoryCfg(this.productForm.prodId,this.records[t].id).then(function(t){i.$message.success(i.$t("common.tipSuccess")),i.updateHistoryList(i.productForm.prodId)}).catch(function(t){i.listLoading=!1,i.$message.success(i.$t("common.tipFailed"))})},closeDlg:function(){this.editFormVisible=!1,this.editForm.capabilityId=""},editSubmit:function(t){var e=this,i=null,r=this.editForm;e.$refs[t].validate(function(t){t&&(i=e.isChange?o.a.changeHistoryCfg(e.productForm.prodId,e.hId,r.interval,r.maximum):o.a.addHistoryCfg(e.productForm.prodId,r.capabilityId,r.interval,r.maximum),e.editLoading=!0,i.then(function(t){e.editLoading=!1,e.editFormVisible=!1,e.updateHistoryList(e.productForm.prodId),e.$message.success(e.$t("common.tipSuccess"))}).catch(function(t){e.editLoading=!1,e.editFormVisible=!1}))})}},watch:{"productForm.prodId":function(t,e){this.updateHistoryList(t)}}},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"tips"},[i("p",[t._v(t._s(t.$t("route.productList")))])]),t._v(" "),i("el-form",{ref:"productForm",attrs:{model:t.productForm,"label-width":"100px",rules:t.productFormRules}},[i("el-form-item",{attrs:{label:t.$t("message.productHolder"),prop:"prodId"}},[i("el-select",{staticClass:"handle-select",model:{value:t.productForm.prodId,callback:function(e){t.$set(t.productForm,"prodId",e)},expression:"productForm.prodId"}},[t._l(t.products,function(e){return[i("el-option",{key:e.id,attrs:{label:t.getProductLabel(e),value:e.id}})]})],2)],1)],1),t._v(" "),i("div",{staticClass:"tips"},[i("p",[t._v(t._s(t.$t("route.history")))])]),t._v(" "),i("el-button",{staticClass:"addparam",attrs:{type:"success"},on:{click:function(e){t.handleAdd("productForm")}}},[t._v(t._s(t.$t("storage.btnAddNew")))]),t._v(" "),t.editFormVisible?i("el-dialog",{attrs:{title:t.title,visible:t.editFormVisible,"close-on-click-modal":!1,"before-close":t.closeDlg}},[i("el-form",{ref:"editForm",attrs:{model:t.editForm,"label-width":"150px",rules:t.editFormRules}},[i("el-form-item",{attrs:{label:t.$t("storage.param"),prop:"capabilityId"}},[i("el-select",{staticClass:"handle-select",attrs:{placeholder:t.$t("common.holderSelect"),disabled:t.isChange},model:{value:t.editForm.capabilityId,callback:function(e){t.$set(t.editForm,"capabilityId",e)},expression:"editForm.capabilityId"}},[t._l(t.capabilities,function(e){return[i("el-option",{key:e.id,attrs:{label:t.getCapLabel(e),value:e.id}})]})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("storage.interval"),prop:"interval"}},[i("el-input",{attrs:{placeholder:t.$t("storage.intervalHolder"),readonly:""},model:{value:t.editForm.interval,callback:function(e){t.$set(t.editForm,"interval",e)},expression:"editForm.interval"}})],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("storage.maximum"),prop:"maximum"}},[i("el-input",{attrs:{placeholder:t.$t("storage.maximumHolder"),readonly:""},model:{value:t.editForm.maximum,callback:function(e){t.$set(t.editForm,"maximum",e)},expression:"editForm.maximum"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.closeDlg}},[t._v(t._s(t.$t("common.cancel")))]),t._v(" "),i("el-button",{attrs:{type:"danger",loading:t.editLoading},on:{click:function(e){t.editSubmit("editForm")}}},[t._v(t._s(t.$t("common.commit")))])],1)],1):t._e(),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.records,border:"",strip:""}},[i("el-table-column",{attrs:{type:"index",width:"40"}}),t._v(" "),i("el-table-column",{attrs:{prop:"capability",label:t.$t("storage.param"),formatter:t.capFormatter}}),t._v(" "),i("el-table-column",{attrs:{prop:"interval",label:t.$t("storage.interval")}}),t._v(" "),i("el-table-column",{attrs:{prop:"maximum",label:t.$t("storage.maximum")}}),t._v(" "),i("el-table-column",{attrs:{label:t.$t("common.operation"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button-group",[i("el-button",{attrs:{type:"danger"},on:{click:function(i){t.handleDelete(e.$index,e.row)}}},[t._v(t._s(t.$t("common.delete")))])],1)]}}])})],1)],1)},l=[],n={render:s,staticRenderFns:l},d=n,c=i("VU/8"),m=r,u=c(a,d,!1,m,"data-v-4538eefd",null);e.default=u.exports}});