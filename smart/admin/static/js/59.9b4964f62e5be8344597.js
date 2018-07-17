webpackJsonp([59],{Qsu4:function(t,n,i){"use strict";function e(t){i("SFkw")}Object.defineProperty(n,"__esModule",{value:!0});var a=i("VHwi"),o={data:function(){return{listLoading:!0,apps:[]}},mounted:function(){this.updateApps()},methods:{tipLockOrUnlock:function(t){return t.is_active?this.$t("common.lock"):this.$t("common.unlock")},getTag:function(t){return 1==t?"success":"danger"},updateApps:function(){var t=this;this.listLoading=!0,this.apps=[],a.a.getAllApplications().then(function(n){t.apps=n.data.result,t.listLoading=!1}).catch(function(n){t.listLoading=!1})},typeFormatter:function(t,n){return"APP"==t.wxAppType?this.$t("application.APP"):this.$t("application.PUB")},activeFormatter:function(t,n){return t.is_active?this.$t("common.no"):this.$t("common.yes")},handleEdit:function(t,n){this.$router.push({path:"/appApply",query:{id:this.apps[t].appId}})},handleDetail:function(t,n){this.$router.push({path:"/appApply",query:{id:this.apps[t].appId}})},handleAPNs:function(t,n){this.$router.push({path:"/updateAPNs",query:{id:this.apps[t].appId}})},handleIcon:function(t,n){this.$router.push({path:"/updateIconAdv",query:{id:this.apps[t].appId,type:"icon"}})},handleAdv:function(t,n){this.$router.push({path:"/updateIconAdv",query:{id:this.apps[t].appId,type:"adv"}})},handleH5:function(t,n){this.$router.push({path:"/updateH5",query:{id:this.apps[t].appId}})},handleLock:function(t,n){var i=this,e=null;e=n.is_active?this.$t("common.toLock"):this.$t("common.toUnlock"),this.$confirm(e,this.$t("common.tip"),{type:"warning"}).then(function(){i.onLock(t,n)}).catch(function(){})},onLock:function(t,n){var i=this;this.listLoading=!0,a.a.lockApplication(this.apps[t].appId,n.is_active?"yes":"no").then(function(t){i.$message.success(i.$t("common.tipSuccess")),i.updateApps()}).catch(function(t){i.listLoading=!1})},handleRemove:function(t,n){var i=this;this.$confirm(this.$t("common.toDelete"),this.$t("common.tip"),{type:"warning"}).then(function(){i.onRemove(t,n)}).catch(function(){})},onRemove:function(t,n){var i=this;this.listLoading=!0,a.a.deleteApplication(this.apps[t].appId).then(function(t){i.$message.success(i.$t("common.tipSuccess")),i.updateApps()}).catch(function(t){i.listLoading=!1})}}},p=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("div",{staticClass:"tips"},[i("p",[t._v(t._s(t.$t("route.appList")))])]),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.apps,border:"",strip:""}},[i("el-table-column",{attrs:{type:"index",width:"40"}}),t._v(" "),i("el-table-column",{attrs:{prop:"appId",label:t.$t("application.appId"),width:"150"}}),t._v(" "),i("el-table-column",{attrs:{prop:"bundleId",label:t.$t("application.bundleId"),width:"200"}}),t._v(" "),i("el-table-column",{attrs:{prop:"nameCN",label:t.$t("application.nameCN"),width:"150"}}),t._v(" "),i("el-table-column",{attrs:{prop:"wxAppType",label:t.$t("application.wxAppType"),formatter:t.typeFormatter,width:"100"}}),t._v(" "),i("el-table-column",{attrs:{prop:"is_active",label:t.$t("application.is_active"),formatter:t.activeFormatter,width:"80"},scopedSlots:t._u([{key:"default",fn:function(n){return[i("el-tag",{attrs:{type:t.getTag(n.row.is_active)}},[t._v(t._s(t.activeFormatter({is_active:n.row.is_active})))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:t.$t("common.operation")},scopedSlots:t._u([{key:"default",fn:function(n){return[i("el-button-group",[i("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(i){t.handleLock(n.$index,n.row)}}},[t._v(t._s(t.tipLockOrUnlock(n.row)))]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){t.handleEdit(n.$index,n.row)}}},[t._v(t._s(t.$t("common.edit")))]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){t.handleRemove(n.$index,n.row)}}},[t._v(t._s(t.$t("common.delete")))]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){t.handleAdv(n.$index,n.row)}}},[t._v(t._s(t.$t("application.appAdv")))]),t._v(" "),"APP"==n.row.wxAppType?i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){t.handleAPNs(n.$index,n.row)}}},[t._v(t._s(t.$t("application.apnsCert")))]):t._e(),t._v(" "),"PUB"==n.row.wxAppType?i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){t.handleH5(n.$index,n.row)}}},[t._v(t._s(t.$t("application.appH5")))]):t._e()],1)]}}])})],1)],1)},s=[],c={render:p,staticRenderFns:s},r=c,l=i("VU/8"),u=e,d=l(o,r,!1,u,"data-v-1acc92d6",null);n.default=d.exports},SFkw:function(t,n,i){var e=i("g1Jl");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("403d59c2",e,!0,{})},g1Jl:function(t,n,i){n=t.exports=i("FZ+f")(!1),n.push([t.i,"\n.tips[data-v-1acc92d6] {\r\n    font-size: 1.2rem;\r\n    color: #314558;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\n}\r\n",""])}});