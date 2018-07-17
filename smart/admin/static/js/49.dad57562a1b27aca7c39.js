webpackJsonp([49],{"6WJK":function(t,e,i){var n=i("OWG2");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("c414605a",n,!0,{})},BM4Z:function(t,e,i){"use strict";function n(t){i("6WJK")}Object.defineProperty(e,"__esModule",{value:!0});var o=i("UgCr"),s={data:function(){return{listLoading:!0,products:[]}},mounted:function(){this.updateProducts()},methods:{isShow:function(t,e){if("new"==e.status||"rejected"==e.status){if("delete"==t||"edit"==t)return!0}else if("auditing"==e.status){if("detail"==t||"revoke"==t)return!0}else if("registered"==e.status||"failure"==e.status){if(!("detail"!=t&&"updateLUA"!=t&&"updateH5"!=t&&"updateIcon"!=t&&"revoke"!=t&&"reqRelease"!=t&&"updateFM"!=t||"updateLUA"==t&&"default"!=e.protocol))return!0}else if(("releasing"==e.status||"released"==e.status)&&"detail"==t)return!0;return!1},updateProducts:function(){var t=this;this.listLoading=!0,this.products=[],o.a.getAllProducts().then(function(e){t.products=e.data.result,t.listLoading=!1}).catch(function(e){t.listLoading=!1})},statusFormatter:function(t,e){return"new"==t.status?this.$t("product.new"):"auditing"==t.status?this.$t("product.auditing"):"rejected"==t.status?this.$t("product.rejected"):"registered"==t.status?this.$t("product.registered"):"releasing"==t.status?this.$t("product.releasing"):"failure"==t.status?this.$t("product.failure"):"released"==t.status?this.$t("product.released"):void 0},getTag:function(t){return"released"==t?"success":"releasing"==t||"auditing"==t?"warning":"rejected"==t||"failure"==t?"danger":""},handleEdit:function(t,e){this.$router.push({path:"/productApply",query:{id:this.products[t].id}})},handleDetail:function(t,e){this.$router.push({path:"/productDetail",query:{id:this.products[t].id}})},handleDelete:function(t,e){var i=this;this.$confirm(this.$t("common.toCancel"),this.$t("common.tip"),{type:"warning"}).then(function(){i.onDelete(t,e)}).catch(function(){})},onDelete:function(t,e){var i=this;this.listLoading=!0,o.a.revokeProduct(this.products[t].id).then(function(t){i.updateProducts()}).catch(function(t){i.listLoading=!1})},handleRevoke:function(t,e){this.handleDelete(t,e)},handleUpdateLua:function(t,e){this.$router.push({path:"/productUpdateLua",query:{id:this.products[t].id}})},handleUpdateH5:function(t,e){this.$router.push({path:"/productUpdateH5",query:{id:this.products[t].id}})},handleUpdateIcon:function(t,e){this.$router.push({path:"/productUpdateIcon",query:{id:this.products[t].id}})},handleUpdateFM:function(t,e){this.$router.push({path:"/productUpdateFM",query:{id:this.products[t].id}})},handleRelease:function(t,e){var i=this;this.$confirm(this.$t("common.toCommit"),this.$t("common.tip"),{type:"warning"}).then(function(){i.onRelease(t,e)}).catch(function(){})},onRelease:function(t,e){var i=this;this.listLoading=!0,o.a.releaseProduct(this.products[t].id).then(function(t){i.updateProducts()}).catch(function(t){})}}},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"tips"},[i("p",[t._v(t._s(t.$t("product.list")))])]),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.products,border:"",strip:"",size:"mini"}},[i("el-table-column",{attrs:{type:"index",width:"40"}}),t._v(" "),i("el-table-column",{attrs:{prop:"model",label:t.$t("product.promodel"),width:"100"}}),t._v(" "),i("el-table-column",{attrs:{prop:"species",label:t.$t("product.protype"),width:"150"}}),t._v(" "),i("el-table-column",{attrs:{prop:"status",label:t.$t("common.status"),formatter:t.statusFormatter},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:t.getTag(e.row.status)}},[t._v(t._s(t.statusFormatter({status:e.row.status})))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"updated",label:t.$t("common.modified"),width:"150"}}),t._v(" "),i("el-table-column",{attrs:{label:t.$t("common.operation"),width:"550"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button-group",[t.isShow("edit",e.row)?i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){t.handleEdit(e.$index,e.row)}}},[t._v(t._s(t.$t("common.edit")))]):t._e(),t._v(" "),t.isShow("detail",e.row)?i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){t.handleDetail(e.$index,e.row)}}},[t._v(t._s(t.$t("common.detail")))]):t._e(),t._v(" "),t.isShow("delete",e.row)?i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){t.handleDelete(e.$index,e.row)}}},[t._v(t._s(t.$t("common.delete")))]):t._e(),t._v(" "),t.isShow("updateLUA",e.row)?i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){t.handleUpdateLua(e.$index,e.row)}}},[t._v(t._s(t.$t("product.updateLUA")))]):t._e(),t._v(" "),t.isShow("updateH5",e.row)?i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){t.handleUpdateH5(e.$index,e.row)}}},[t._v(t._s(t.$t("product.updateH5")))]):t._e(),t._v(" "),t.isShow("updateIcon",e.row)?i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){t.handleUpdateIcon(e.$index,e.row)}}},[t._v(t._s(t.$t("application.appIcon")))]):t._e(),t._v(" "),t.isShow("updateFM",e.row)?i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){t.handleUpdateFM(e.$index,e.row)}}},[t._v(t._s(t.$t("product.updateFM")))]):t._e(),t._v(" "),t.isShow("revoke",e.row)?i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){t.handleRevoke(e.$index,e.row)}}},[t._v(t._s(t.$t("product.revoke")))]):t._e(),t._v(" "),t.isShow("reqRelease",e.row)?i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){t.handleRelease(e.$index,e.row)}}},[t._v(t._s(t.$t("product.reqRelease")))]):t._e()],1)]}}])})],1)],1)},r=[],u={render:a,staticRenderFns:r},d=u,c=i("VU/8"),l=n,p=c(s,d,!1,l,"data-v-2c95e87e",null);e.default=p.exports},OWG2:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,"\n.tips[data-v-2c95e87e] {\r\n    font-size: 1.2rem;\r\n    color: #314558;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\n}\r\n",""])}});