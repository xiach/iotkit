webpackJsonp([65],{BXKQ:function(t,e,i){"use strict";function a(t){i("nRXX")}Object.defineProperty(e,"__esModule",{value:!0});var r=i("UgCr"),o={data:function(){return{capabilities:[],active:1,listLoading:!1,isChange:!1,attrId:"",editFormVisible:!1,editLoading:!1,editFormRules:{name:[{required:!0,message:this.$t("common.holderInput"),trigger:"blur"}],key:[{required:!0,message:this.$t("common.holderInput"),trigger:"blur"}],value:[{required:!0,message:this.$t("common.holderInput"),trigger:"blur"}],direction:[{required:!0,message:this.$t("common.holderSelect"),trigger:"change"}],type:[{required:!0,message:this.$t("common.holderSelect"),trigger:"change"}]},editForm:{name:"",key:"",direction:"",type:"",value:""}}},computed:{steps:function(){var t=[];return t.push(this.$t("product.probase")),t.push(this.$t("product.proattr")),t.push(this.$t("product.procmt")),t},title:function(){return this.isChange?this.$t("product.modifyParam"):this.$t("product.addPriParam")},directions:function(){return[{key:"upstream",label:this.$t("product.paramUp")},{key:"downstream",label:this.$t("product.paramDown")},{key:"bidirectional",label:this.$t("product.paramBidir")}]},types:function(){return[{key:"switch",label:this.$t("product.paramswitch")},{key:"enum",label:this.$t("product.paramenum")},{key:"range",label:this.$t("product.paramrange")},{key:"string",label:this.$t("product.paramstring")},{key:"time",label:this.$t("product.paramtime")},{key:"fault",label:this.$t("product.paramfault")}]}},mounted:function(){this.updateCapability()},watch:{"editForm.type":function(t,e){console.log("oldVal-"+e+", val-"+t),""===e&&this.isChange||(this.editForm.value="switch"==t?this.$t("product.switchHolder"):"string"==t||"time"==t?" ":"range"==t?"~":"")}},methods:{updateCapability:function(){var t=this,e=this;this.listLoading=!0,r.a.getProduct(e.$route.query.id).then(function(i){t.listLoading=!1,e.capabilities=i.data.capability,e.capabilities.sort(function(t,e){return t.type[0]-e.type[0]})}).catch(function(e){t.listLoading=!1})},valFormatter:function(t,e){return"switch"==t.type?this.$t("product.paramswitch"):"enum"==t.type?this.$t("product.paramenum"):"range"==t.type?this.$t("product.paramrange"):"string"==t.type?this.$t("product.paramstring"):"time"==t.type?this.$t("product.paramtime"):"fault"==t.type?this.$t("product.paramfault"):void 0},typeFormatter:function(t,e){return"standard"==t.kind?this.$t("product.paramStand"):"private"==t.kind?this.$t("product.paramPrivate"):void 0},dirFormatter:function(t,e){return"upstream"==t.direction?this.$t("product.paramUp"):"downstream"==t.direction?this.$t("product.paramDown"):"bidirectional"==t.direction?this.$t("product.paramBidir"):void 0},handleAdd:function(){this.editFormVisible=!0,this.isChange=!1,this.editForm.name="",this.editForm.key="",this.editForm.direction="",this.editForm.type="",this.editForm.value=""},handleEdit:function(t,e){var i=this.capabilities[t];this.isChange=!0,this.editFormVisible=!0,this.attrId=i.id,this.editForm.name=i.name,this.editForm.key=i.key,this.editForm.direction=i.direction,this.editForm.type=i.type,this.editForm.value=i.value},handleDelete:function(t,e){var i=this;this.$confirm(this.$t("common.toDelete"),this.$t("common.tip"),{type:"warning"}).then(function(){i.onDelete(t,e)}).catch(function(){})},onDelete:function(t,e){var i=this;this.listLoading=!0,r.a.deleteCapability(this.capabilities[t].id).then(function(t){i.$message.success(i.$t("common.tipSuccess")),i.updateCapability()}).catch(function(t){i.listLoading=!1})},editSubmit:function(t){var e=this,i=this,a=null,o=this.editForm;i.$refs[t].validate(function(t){t&&(a=i.isChange?r.a.changeCapability(i.attrId,o.key,o.name,o.type,o.direction,o.value):r.a.addCapability(i.$route.query.id,o.key,o.name,o.type,o.direction,o.value),i.editLoading=!0,a.then(function(t){i.editLoading=!1,i.editFormVisible=!1,i.updateCapability(),e.$message.success(e.$t("common.tipSuccess"))}).catch(function(t){i.editLoading=!1,i.editFormVisible=!1}))})},closeDlg:function(){this.editFormVisible=!1,this.editForm.name="",this.editForm.key="",this.editForm.direction="",this.editForm.type="",this.editForm.value=""},onBack:function(){this.$router.back(-1)},onNext:function(){this.$router.push({path:"/productCommit",query:{id:this.$route.query.id}})}}},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"tips"},[i("p",[t._v(t._s(t.$t("product.progress")))])]),t._v(" "),i("div",{staticClass:"steps"},[i("el-steps",{attrs:{active:t.active,"finish-status":"success","align-center":""}},[t._l(t.steps,function(t){return[i("el-step",{attrs:{title:t}})]})],2)],1),t._v(" "),i("div",{staticClass:"tips"},[i("p",[t._v(t._s(t.$t("product.func")))])]),t._v(" "),i("el-button",{staticClass:"addparam",attrs:{type:"success"},on:{click:t.handleAdd}},[t._v(t._s(t.$t("product.addPriParam")))]),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.capabilities,border:"",strip:""}},[i("el-table-column",{attrs:{type:"index",width:"40"}}),t._v(" "),i("el-table-column",{attrs:{prop:"kind",label:t.$t("product.paramType"),width:"100",formatter:t.typeFormatter}}),t._v(" "),i("el-table-column",{attrs:{prop:"name",label:t.$t("product.paramName"),width:"100"}}),t._v(" "),i("el-table-column",{attrs:{prop:"key",label:t.$t("product.paramID"),width:"150"}}),t._v(" "),i("el-table-column",{attrs:{prop:"direction",label:t.$t("product.paramDir"),width:"100",formatter:t.dirFormatter}}),t._v(" "),i("el-table-column",{attrs:{prop:"type",label:t.$t("product.paramVal"),width:"100",formatter:t.valFormatter}}),t._v(" "),i("el-table-column",{attrs:{prop:"value",label:t.$t("product.paramDesc")}}),t._v(" "),i("el-table-column",{attrs:{label:t.$t("common.operation"),width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button-group",[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){t.handleEdit(e.$index,e.row)}}},[t._v(t._s(t.$t("common.edit")))]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){t.handleDelete(e.$index,e.row)}}},[t._v(t._s(t.$t("common.delete")))])],1)]}}])})],1),t._v(" "),t.editFormVisible?i("el-dialog",{attrs:{title:t.title,visible:t.editFormVisible,"close-on-click-modal":!1,"before-close":t.closeDlg}},[i("el-form",{ref:"editForm",attrs:{model:t.editForm,"label-width":"80px",rules:t.editFormRules}},[i("el-form-item",{attrs:{label:t.$t("product.paramName"),prop:"name"}},[i("el-input",{attrs:{readonly:t.isChange},model:{value:t.editForm.name,callback:function(e){t.$set(t.editForm,"name",e)},expression:"editForm.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("product.paramID"),prop:"key"}},[i("el-input",{attrs:{readonly:t.isChange},model:{value:t.editForm.key,callback:function(e){t.$set(t.editForm,"key",e)},expression:"editForm.key"}})],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("product.paramDir"),prop:"direction"}},[i("el-select",{staticClass:"handle-select",attrs:{placeholder:t.$t("common.holderSelect")},model:{value:t.editForm.direction,callback:function(e){t.$set(t.editForm,"direction",e)},expression:"editForm.direction"}},[t._l(t.directions,function(t){return[i("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})]})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("product.paramVal"),prop:"type"}},[i("el-select",{staticClass:"handle-select",attrs:{placeholder:t.$t("common.holderSelect")},model:{value:t.editForm.type,callback:function(e){t.$set(t.editForm,"type",e)},expression:"editForm.type"}},[t._l(t.types,function(t){return[i("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})]})],2)],1),t._v(" "),"string"!=t.editForm.type&&"time"!=t.editForm.type?i("el-form-item",{attrs:{label:t.$t("product.paramDesc"),prop:"value"}},[i("el-input",{attrs:{readonly:"switch"==t.editForm.type},model:{value:t.editForm.value,callback:function(e){t.$set(t.editForm,"value",e)},expression:"editForm.value"}}),t._v(" "),i("span",{staticClass:"notes"},[t._v(t._s(t.$t("product.noteVal")))])],1):t._e()],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.closeDlg}},[t._v(t._s(t.$t("common.cancel")))]),t._v(" "),i("el-button",{attrs:{type:"danger",loading:t.editLoading},on:{click:function(e){t.editSubmit("editForm")}}},[t._v(t._s(t.$t("common.commit")))])],1)],1):t._e(),t._v(" "),i("div",{staticClass:"btn-commit"},[i("el-button",{attrs:{type:"primary"},on:{click:t.onBack}},[t._v(t._s(t.$t("common.last")))]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.onNext}},[t._v(t._s(t.$t("common.next")))])],1)],1)},s=[],l={render:n,staticRenderFns:s},d=l,c=i("VU/8"),m=a,p=c(o,d,!1,m,"data-v-130da7bd",null);e.default=p.exports},nRXX:function(t,e,i){var a=i("xl1y");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("8cf9511a",a,!0,{})},xl1y:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,"\n.tips[data-v-130da7bd] {\r\n    font-size: 1.2rem;\r\n    color: #314558;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\n}\n.steps[data-v-130da7bd] {\r\n    width: 80%;\r\n    margin-left: 10%;\n}\n.btn-commit[data-v-130da7bd] {\r\n    text-align: center;\n}\n.addparam[data-v-130da7bd] {\r\n    margin-bottom: 1rem;\n}\n.notes[data-v-130da7bd] {\r\n    color: #999;\n}\r\n",""])}});