webpackJsonp([4],{"1xCH":function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,"\n.tips[data-v-0c3f27d1] {\r\n    font-size: 1.2rem;\r\n    color: #314558;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\n}\r\n",""])},Yvcj:function(t,e,i){var o=i("1xCH");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("1c9f35e5",o,!0,{})},rRME:function(t,e,i){"use strict";function o(t){i("Yvcj")}Object.defineProperty(e,"__esModule",{value:!0});var s=i("UgCr"),a={data:function(){return{listLoading:!1,isChange:!1,msgId:"",valPlaceHolder:"",conditions:[],products:[],capabilities:[],messages:[],editFormVisible:!1,editLoading:!1,editFormRules:{value:[{required:!0,message:this.$t("common.holderInput"),trigger:"blur"}],msg:[{required:!0,message:this.$t("common.holderInput"),trigger:"blur"}],condition:[{required:!0,message:this.$t("common.holderSelect"),trigger:"change"}],type:[{required:!0,message:this.$t("common.holderSelect"),trigger:"change"}],capabilityId:[{required:!0,message:this.$t("common.holderSelect"),trigger:"change"}]},editForm:{capabilityId:"",condition:"",type:"",value:"",msg:""},productForm:{prodId:""},productFormRules:{prodId:[{required:!0,message:this.$t("message.productHolder"),trigger:"change"}]}}},computed:{title:function(){return this.isChange?this.$t("message.modifyMsgCfg"):this.$t("message.addMsgCfg")},types:function(){return[{key:"notice",label:this.$t("message.notice")},{key:"alarm",label:this.$t("message.alarm")}]}},mounted:function(){var t=this;this.products=[],s.a.getAllProducts().then(function(e){t.products=e.data.result}).catch(function(t){})},methods:{getTag:function(t){return"notice"==t?"success":"alarm"==t?"danger":void 0},getProductLabel:function(t){return t.model+"("+t.species+")"},getCapLabel:function(t){return t.name+"("+t.key+")"},updateMsgList:function(t){var e=this,i=this;this.listLoading=!0,s.a.getProduct(t).then(function(t){i.capabilities=[];var e=["switch","enum","range","fault"];t.data.capability.forEach(function(t){-1!=e.indexOf(t.type)&&i.capabilities.push(t)}),i.capabilities.sort(function(t,e){return t.type[0]-e.type[0]})}).catch(function(t){}),s.a.getAllMsgCfg(t).then(function(t){e.listLoading=!1,e.messages=t.data.result}).catch(function(t){e.listLoading=!1})},typeFormatter:function(t,e){return"notice"==t.type?this.$t("message.notice"):"alarm"==t.type?this.$t("message.alarm"):void 0},capFormatter:function(t,e){return t.capability.name+"("+t.capability.key+")"},valFormatter:function(t,e){var i=t.value.split(":"),o=void 0;if(2!=i.length||0==i[1].length)return"";if("gt"==i[0])o=this.$t("message.gt");else if("eq"==i[0])o=this.$t("message.eq");else if("lt"==i[0])o=this.$t("message.lt");else if("le"==i[0])o=this.$t("message.le");else{if("ge"!=i[0])return this.$t("common.valErr");o=this.$t("message.ge")}return o+i[1]},handleAdd:function(t){var e=this;e.$refs[t].validate(function(t){if(!t)return!1;e.isChange=!1,e.editFormVisible=!0,e.editForm.capabilityId="",e.editForm.type="",e.editForm.value="",e.editForm.msg=""})},handleEdit:function(t,e){var i=this.messages[t];this.isChange=!0,this.editFormVisible=!0,this.msgId=i.id,this.editForm.type=i.type,this.editForm.value=i.value,this.editForm.msg=i.msg},handleDelete:function(t,e){var i=this;this.$confirm(this.$t("common.toCancel"),this.$t("common.tip"),{type:"warning"}).then(function(){i.onDelete(t,e)}).catch(function(){})},onDelete:function(t,e){var i=this;this.listLoading=!0,s.a.deleteMsgCfg(this.productForm.prodId,this.messages[t].id).then(function(t){i.$message.success(i.$t("common.tipSuccess")),i.updateMsgList(i.productForm.prodId)}).catch(function(t){i.listLoading=!1,i.$message.error(i.$t("common.tipFailed"))})},closeDlg:function(){this.editFormVisible=!1,this.editForm.capabilityId="",this.editForm.type="",this.editForm.value="",this.editForm.msg=""},editSubmit:function(t){var e=this,i=null,o=this.editForm;e.$refs[t].validate(function(t){t&&(i=e.isChange?s.a.changeMsgCfg(e.productForm.prodId,e.msgId,o.type,o.condition+":"+o.value,o.msg):s.a.addMsgCfg(e.productForm.prodId,o.capabilityId,o.type,o.condition+":"+o.value,o.msg),e.editLoading=!0,i.then(function(t){e.editLoading=!1,e.editFormVisible=!1,e.updateMsgList(e.productForm.prodId),e.$message.success(e.$t("common.tipSuccess"))}).catch(function(t){e.editLoading=!1,e.editFormVisible=!1}))})}},watch:{"productForm.prodId":function(t,e){this.updateMsgList(t)},"editForm.capabilityId":function(t,e){var i=this;this.conditions=[],this.editForm.condition="",this.valPlaceHolder="",this.capabilities.forEach(function(e){e.id==t&&(i.valPlaceHolder=e.value,"switch"==e.type||"enum"==e.type||"fault"==e.type?i.conditions.push({key:"eq",label:i.$t("message.eq")}):"range"==e.type&&(i.conditions.push({key:"gt",label:i.$t("message.gt")}),i.conditions.push({key:"eq",label:i.$t("message.eq")}),i.conditions.push({key:"lt",label:i.$t("message.lt")})))})}}},l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"tips"},[i("p",[t._v(t._s(t.$t("route.productList")))])]),t._v(" "),i("el-form",{ref:"productForm",attrs:{model:t.productForm,"label-width":"100px",rules:t.productFormRules}},[i("el-form-item",{attrs:{label:t.$t("message.productHolder"),prop:"prodId"}},[i("el-select",{staticClass:"handle-select",model:{value:t.productForm.prodId,callback:function(e){t.$set(t.productForm,"prodId",e)},expression:"productForm.prodId"}},[t._l(t.products,function(e){return[i("el-option",{key:e.id,attrs:{label:t.getProductLabel(e),value:e.id}})]})],2)],1)],1),t._v(" "),i("div",{staticClass:"tips"},[i("p",[t._v(t._s(t.$t("route.msgcfg")))])]),t._v(" "),i("el-button",{staticClass:"addparam",attrs:{type:"success"},on:{click:function(e){t.handleAdd("productForm")}}},[t._v(t._s(t.$t("message.btnAddNew")))]),t._v(" "),t.editFormVisible?i("el-dialog",{attrs:{title:t.title,visible:t.editFormVisible,"close-on-click-modal":!1,"before-close":t.closeDlg}},[i("el-form",{ref:"editForm",attrs:{model:t.editForm,"label-width":"80px",rules:t.editFormRules}},[i("el-form-item",{attrs:{label:t.$t("message.param"),prop:"capabilityId"}},[i("el-select",{staticClass:"handle-select",attrs:{placeholder:t.$t("common.holderSelect")},model:{value:t.editForm.capabilityId,callback:function(e){t.$set(t.editForm,"capabilityId",e)},expression:"editForm.capabilityId"}},[t._l(t.capabilities,function(e){return[i("el-option",{key:e.id,attrs:{label:t.getCapLabel(e),value:e.id}})]})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("message.condition"),prop:"condition"}},[i("el-select",{staticClass:"handle-select",attrs:{placeholder:t.$t("common.holderSelect")},model:{value:t.editForm.condition,callback:function(e){t.$set(t.editForm,"condition",e)},expression:"editForm.condition"}},[t._l(t.conditions,function(t){return[i("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})]})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("message.value"),prop:"value"}},[i("el-input",{attrs:{placeholder:t.valPlaceHolder},model:{value:t.editForm.value,callback:function(e){t.$set(t.editForm,"value",e)},expression:"editForm.value"}})],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("message.msg"),prop:"msg"}},[i("el-input",{attrs:{placeholder:t.$t("common.holderInput")},model:{value:t.editForm.msg,callback:function(e){t.$set(t.editForm,"msg",e)},expression:"editForm.msg"}})],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("message.type"),prop:"type"}},[i("el-select",{staticClass:"handle-select",attrs:{placeholder:t.$t("common.holderSelect")},model:{value:t.editForm.type,callback:function(e){t.$set(t.editForm,"type",e)},expression:"editForm.type"}},[t._l(t.types,function(t){return[i("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})]})],2)],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.closeDlg}},[t._v(t._s(t.$t("common.cancel")))]),t._v(" "),i("el-button",{attrs:{type:"danger",loading:t.editLoading},on:{click:function(e){t.editSubmit("editForm")}}},[t._v(t._s(t.$t("common.commit")))])],1)],1):t._e(),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.messages,border:"",strip:"",size:"mini"}},[i("el-table-column",{attrs:{type:"index",width:"40"}}),t._v(" "),i("el-table-column",{attrs:{prop:"capability",label:t.$t("message.param"),width:"200",formatter:t.capFormatter}}),t._v(" "),i("el-table-column",{attrs:{prop:"value",label:t.$t("message.value"),width:"150",formatter:t.valFormatter}}),t._v(" "),i("el-table-column",{attrs:{prop:"msg",label:t.$t("message.msg")}}),t._v(" "),i("el-table-column",{attrs:{prop:"type",label:t.$t("message.type"),width:"150",formatter:t.typeFormatter},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:t.getTag(e.row.type)}},[t._v(t._s(t.typeFormatter({type:e.row.type})))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:t.$t("common.operation"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button-group",[i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){t.handleDelete(e.$index,e.row)}}},[t._v(t._s(t.$t("common.delete")))])],1)]}}])})],1)],1)},r=[],n={render:l,staticRenderFns:r},c=n,d=i("VU/8"),m=o,u=d(a,c,!1,m,"data-v-0c3f27d1",null);e.default=u.exports}});