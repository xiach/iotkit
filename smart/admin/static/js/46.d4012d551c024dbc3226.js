webpackJsonp([46],{LkxX:function(t,r,e){"use strict";function o(t){e("mb0W")}Object.defineProperty(r,"__esModule",{value:!0});var a=e("UgCr"),i={data:function(){return{active:2,product:{},listLoading:!1,editForm:{tenant:this.$store.getters.tenant,protype:[" "],protypeTxt:"",networking:"WiFi",promodel:"",probrand:"",protocol:"default",probrief:""}}},computed:{steps:function(){var t=[];return t.push(this.$t("product.probase")),t.push(this.$t("product.proattr")),t.push(this.$t("product.procmt")),t}},mounted:function(){var t=this,r=this;this.listLoading=!0,a.a.getProduct(this.$route.query.id).then(function(e){t.listLoading=!1,r.product=e.data,r.product.capability.sort(function(t,r){return t.type[0]-r.type[0]}),r.editForm.protypeTxt=r.product.species,r.editForm.networking=r.product.networking,r.editForm.promodel=r.product.model,r.editForm.probrand=r.product.brand,r.editForm.protocol=r.product.protocol,r.editForm.probrief=r.product.brief}).catch(function(r){t.listLoading=!1})},methods:{valFormatter:function(t,r){return"switch"==t.type?this.$t("product.paramswitch"):"enum"==t.type?this.$t("product.paramenum"):"range"==t.type?this.$t("product.paramrange"):"string"==t.type?this.$t("product.paramstring"):"time"==t.type?this.$t("product.paramtime"):"fault"==t.type?this.$t("product.paramfault"):void 0},typeFormatter:function(t,r){return"standard"==t.kind?this.$t("product.paramStand"):"private"==t.kind?this.$t("product.paramPrivate"):void 0},dirFormatter:function(t,r){return"upstream"==t.direction?this.$t("product.paramUp"):"downstream"==t.direction?this.$t("product.paramDown"):"bidirectional"==t.direction?this.$t("product.paramBidir"):void 0},onBack:function(){this.$router.back(-1)},onCommit:function(){var t=this;a.a.commitProduct(this.$route.query.id).then(function(r){t.$router.push({path:"/productList"})}).catch(function(t){})}}},n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"tips"},[e("p",[t._v(t._s(t.$t("product.progress")))])]),t._v(" "),e("div",{staticClass:"steps"},[e("el-steps",{attrs:{active:t.active,"finish-status":"success","align-center":""}},[t._l(t.steps,function(t){return[e("el-step",{attrs:{title:t}})]})],2)],1),t._v(" "),e("div",{staticClass:"tips"},[e("p",[t._v(t._s(t.$t("product.basic")))])]),t._v(" "),e("div",{staticClass:"editForm"},[e("el-form",{ref:"editForm",attrs:{model:t.editForm,"label-width":"200px"}},[e("el-form-item",{attrs:{label:t.$t("contract.company"),prop:"tenant"}},[e("el-input",{attrs:{readonly:""},model:{value:t.editForm.tenant,callback:function(r){t.$set(t.editForm,"tenant",r)},expression:"editForm.tenant"}})],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("product.protype"),prop:"protypeTxt"}},[e("el-input",{attrs:{readonly:""},model:{value:t.editForm.protypeTxt,callback:function(r){t.$set(t.editForm,"protypeTxt",r)},expression:"editForm.protypeTxt"}})],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("product.promodel"),prop:"promodel"}},[e("el-input",{attrs:{readonly:""},model:{value:t.editForm.promodel,callback:function(r){t.$set(t.editForm,"promodel",r)},expression:"editForm.promodel"}})],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("product.probrand"),prop:"probrand"}},[e("el-input",{attrs:{readonly:""},model:{value:t.editForm.probrand,callback:function(r){t.$set(t.editForm,"probrand",r)},expression:"editForm.probrand"}})],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("product.protocol"),prop:"protocol"}},[e("el-input",{attrs:{readonly:""},model:{value:t.editForm.protocol,callback:function(r){t.$set(t.editForm,"protocol",r)},expression:"editForm.protocol"}})],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("product.networking"),prop:"networking"}},[e("el-input",{attrs:{readonly:""},model:{value:t.editForm.networking,callback:function(r){t.$set(t.editForm,"networking",r)},expression:"editForm.networking"}})],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("product.probrief"),prop:"probrief"}},[e("el-input",{attrs:{type:"textarea",readonly:""},model:{value:t.editForm.probrief,callback:function(r){t.$set(t.editForm,"probrief",r)},expression:"editForm.probrief"}})],1)],1)],1),t._v(" "),"default"==t.product.protocol?e("div",[e("div",{staticClass:"tips"},[e("p",[t._v(t._s(t.$t("product.func")))])]),t._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.product.capability,border:"",strip:""}},[e("el-table-column",{attrs:{type:"index",width:"40"}}),t._v(" "),e("el-table-column",{attrs:{prop:"kind",label:t.$t("product.paramType"),width:"100",formatter:t.typeFormatter}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:t.$t("product.paramName"),width:"100"}}),t._v(" "),e("el-table-column",{attrs:{prop:"key",label:t.$t("product.paramID"),width:"150"}}),t._v(" "),e("el-table-column",{attrs:{prop:"direction",label:t.$t("product.paramDir"),width:"100",formatter:t.dirFormatter}}),t._v(" "),e("el-table-column",{attrs:{prop:"type",label:t.$t("product.paramVal"),width:"100",formatter:t.valFormatter}}),t._v(" "),e("el-table-column",{attrs:{prop:"value",label:t.$t("product.paramDesc")}})],1)],1):t._e(),t._v(" "),e("div",{staticClass:"btn-commit"},[e("el-button",{attrs:{type:"primary"},on:{click:t.onBack}},[t._v(t._s(t.$t("common.last")))]),t._v(" "),e("el-button",{attrs:{type:"danger"},on:{click:t.onCommit}},[t._v(t._s(t.$t("common.commit")))])],1)])},p=[],l={render:n,staticRenderFns:p},d=l,s=e("VU/8"),c=o,m=s(i,d,!1,c,"data-v-3386974e",null);r.default=m.exports},Wa0L:function(t,r,e){r=t.exports=e("FZ+f")(!1),r.push([t.i,"\n.tips[data-v-3386974e] {\r\n    font-size: 1.2rem;\r\n    color: #314558;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\n}\n.steps[data-v-3386974e] {\r\n    width: 80%;\r\n    margin-left: 10%;\n}\n.btn-commit[data-v-3386974e] {\r\n    text-align: center;\n}\r\n",""])},mb0W:function(t,r,e){var o=e("Wa0L");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("5f43ecf2",o,!0,{})}});