webpackJsonp([17],{C3oD:function(t,e,a){"use strict";function c(t){a("xa5k")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("UgCr"),n={data:function(){return{listLoading:!0,total:0,pageSize:20,is_search:!1,products:[],select_cate:"",select_word:""}},mounted:function(){this.updateProducts()},methods:{tipLockOrUnlock:function(t){return t.is_active?this.$t("common.lock"):this.$t("common.unlock")},getTag:function(t){return 1==t?"success":"danger"},updateProducts:function(t){var e=this;void 0===t&&(t=1);var a=null;this.listLoading=!0,this.products=[],a=this.is_search&&this.select_cate&&this.select_word?o.a.searchProducts(this.select_cate,this.select_word,t,this.pageSize):o.a.getAllProducts("",t,this.pageSize),a.then(function(t){e.products=t.data.result,e.total=t.data.total,e.pageSize=t.data.pageSize,e.listLoading=!1}).catch(function(t){e.listLoading=!1,e.total=0})},activeFormatter:function(t,e){return t.is_active?this.$t("common.no"):this.$t("common.yes")},handleCurrentChange:function(t){this.updateProducts(t)},handleSearch:function(){this.is_search=!0,this.updateProducts()},handleLock:function(t,e){var a=this,c=null;c=e.is_active?this.$t("common.toLock"):this.$t("common.toUnlock"),this.$confirm(c,this.$t("common.tip"),{type:"warning"}).then(function(){a.onLock(t,e)}).catch(function(){})},onLock:function(t,e){var a=this;this.listLoading=!0,o.a.lockProduct(this.products[t].id,e.is_active?"yes":"no").then(function(t){a.$message.success(a.$t("common.tipSuccess")),a.updateProducts()}).catch(function(t){a.listLoading=!1})}},watch:{select_cate:function(t,e){this.select_word=""}}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"tips"},[a("p",[t._v(t._s(t.$t("access.productList")))])]),t._v(" "),a("div",{staticClass:"handle-box"},[a("el-select",{staticClass:"handle-select mr10",attrs:{clearable:"",placeholder:"请选择"},model:{value:t.select_cate,callback:function(e){t.select_cate=e},expression:"select_cate"}},[a("el-option",{key:"1",attrs:{label:t.$t("product.promodel"),value:"model"}}),t._v(" "),a("el-option",{key:"2",attrs:{label:t.$t("contract.company"),value:"tenant"}}),t._v(" "),a("el-option",{key:"3",attrs:{label:t.$t("product.protype"),value:"species"}})],1),t._v(" "),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleSearch}},[t._v("搜索")])],1),t._v(" "),t.total>0?a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next",total:t.total,"page-size":t.pageSize},on:{"current-change":t.handleCurrentChange}}):t._e(),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.products,border:"",strip:""}},[a("el-table-column",{attrs:{type:"index",width:"40"}}),t._v(" "),a("el-table-column",{attrs:{prop:"model",label:t.$t("product.promodel")}}),t._v(" "),a("el-table-column",{attrs:{prop:"species",label:t.$t("product.protype")}}),t._v(" "),a("el-table-column",{attrs:{prop:"tenant",label:t.$t("contract.company"),width:"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"is_active",label:t.$t("application.is_active"),formatter:t.activeFormatter,width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t.getTag(e.row.is_active)}},[t._v(t._s(t.activeFormatter({is_active:e.row.is_active})))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("common.operation"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button-group",[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleLock(e.$index,e.row)}}},[t._v(t._s(t.tipLockOrUnlock(e.row)))])],1)]}}])})],1)],1)},s=[],l={render:i,staticRenderFns:s},r=l,d=a("VU/8"),u=c,p=d(n,r,!1,u,"data-v-ccc1c564",null);e.default=p.exports},rUMB:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.tips[data-v-ccc1c564] {\r\n    font-size: 1.2rem;\r\n    color: #314558;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\n}\n.handle-box[data-v-ccc1c564]{\r\n    margin-bottom: 20px;\n}\n.handle-select[data-v-ccc1c564]{\r\n    width: 120px;\n}\n.handle-input[data-v-ccc1c564]{\r\n    width: 300px;\r\n    display: inline-block;\n}\r\n",""])},xa5k:function(t,e,a){var c=a("rUMB");"string"==typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);a("rjj0")("41a06322",c,!0,{})}});