webpackJsonp([21],{As31:function(t,n,e){n=t.exports=e("FZ+f")(!1),n.push([t.i,"\n.tips[data-v-7f492746] {\r\n    font-size: 1.2rem;\r\n    color: #314558;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\n}\r\n",""])},OToB:function(t,n,e){var o=e("As31");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("7bb905a9",o,!0,{})},XJpz:function(t,n,e){"use strict";function o(t){e("OToB")}Object.defineProperty(n,"__esModule",{value:!0});var i=e("nv77"),a={data:function(){return{listLoading:!0,tenants:[]}},mounted:function(){this.updateTenants()},methods:{tipLockOrUnlock:function(t){return t.is_active?this.$t("common.lock"):this.$t("common.unlock")},getTag:function(t){return 1==t?"success":"danger"},updateTenants:function(){var t=this;this.listLoading=!0,this.tenants=[],i.a.getAllTenants().then(function(n){t.tenants=n.data.result,t.listLoading=!1}).catch(function(n){t.listLoading=!1})},activeFormatter:function(t,n){return t.is_active?this.$t("common.no"):this.$t("common.yes")},handleLock:function(t,n){var e=this,o=null;o=n.is_active?this.$t("common.toLock"):this.$t("common.toUnlock"),this.$confirm(o,this.$t("common.tip"),{type:"warning"}).then(function(){e.onLock(t,n)}).catch(function(){})},onLock:function(t,n){var e=this;this.listLoading=!0,i.a.lockTenant(this.tenants[t].id,n.is_active?"yes":"no").then(function(t){e.$message.success(e.$t("common.tipSuccess")),e.updateTenants()}).catch(function(t){e.listLoading=!1})}}},s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"tips"},[e("p",[t._v(t._s(t.$t("route.tenantList")))])]),t._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tenants,border:"",strip:""}},[e("el-table-column",{attrs:{type:"index",width:"40"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company",label:t.$t("contract.company"),width:"300"}}),t._v(" "),e("el-table-column",{attrs:{prop:"phone",label:t.$t("tenant.phone")}}),t._v(" "),e("el-table-column",{attrs:{prop:"email",label:t.$t("tenant.email"),width:"250"}}),t._v(" "),e("el-table-column",{attrs:{prop:"is_active",label:t.$t("application.is_active"),formatter:t.activeFormatter,width:"100"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-tag",{attrs:{type:t.getTag(n.row.is_active)}},[t._v(t._s(t.activeFormatter({is_active:n.row.is_active})))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("common.operation"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button-group",[e("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){t.handleLock(n.$index,n.row)}}},[t._v(t._s(t.tipLockOrUnlock(n.row)))])],1)]}}])})],1)],1)},c=[],r={render:s,staticRenderFns:c},l=r,u=e("VU/8"),m=o,d=u(a,l,!1,m,"data-v-7f492746",null);n.default=d.exports}});