webpackJsonp([31],{KTEi:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.tips[data-v-5f583f4f] {\r\n    font-size: 1.2rem;\r\n    color: #314558;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\n}\n.handle-box[data-v-5f583f4f]{\r\n    margin-bottom: 20px;\n}\n.handle-select[data-v-5f583f4f]{\r\n    width: 250px;\n}\n.echarts-pie[data-v-5f583f4f] {\r\n    width: 400px;\r\n    height: 300px;\r\n    margin-bottom: 100px;\n}\n.echarts-map[data-v-5f583f4f] {\r\n    width: 700px;\r\n    height: 600px;\r\n    margin-bottom: 100px;\n}\n.box-card[data-v-5f583f4f] {\r\n    width: 50%;\r\n    text-align: center;\n}\n.count[data-v-5f583f4f] {\r\n    font-size: 36px;\r\n    color: #d9534f;\n}\r\n",""])},TOxU:function(t,e,a){var s=a("KTEi");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("7ee42f57",s,!0,{})},o2sb:function(t,e,a){"use strict";function s(t){a("TOxU")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("nv77"),n=a("xV2B"),c=a("UgCr"),r=a("XhSL"),o=(a("Vb+l"),a("nUSl"),a("Bhwq"),a("80cc"),a("Oq2I"),a("miEh"),{components:{IEcharts:r.a},data:function(){var t=function(t,e,a){return isNaN(t.value)?"":t.name+": "+t.value};return{listLoading:!1,tenants:[],tenantId:"all",cntDev:"",cntPro:"",cntCity:"",total:0,pageSize:20,products:[],prodId:"all",provinces:[],cities:[],pie:{title:{text:this.$t("statistics.tipProvince"),left:"center"},tooltip:{trigger:"item",formatter:"{b}: {c} <br/>总占比: {d}%"},series:[{type:"pie",radius:["30%","70%"],center:["50%","50%"],data:[]}]},map:{title:{text:this.$t("statistics.tipGis"),left:"center"},tooltip:{trigger:"item",formatter:t},visualMap:{min:0,max:2500,left:"left",top:"bottom",text:["高","低"],calculable:!0},toolbox:{show:!0,orient:"vertical",left:"right",top:"center",feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},series:[{type:"map",mapType:"china",roam:!1,data:[]}]}}},mounted:function(){var t=this;this.products=[],c.a.getAllProducts().then(function(e){t.products=e.data.result,t.products.unshift({id:"all"})}).catch(function(t){}),i.a.getAllTenants().then(function(e){t.tenants=e.data.result,t.tenants.unshift({id:"all"})}).catch(function(t){})},methods:{getProductLabel:function(t){return"all"==t.id?this.$t("statistics.allProducts"):t.model+"("+t.species+")"},getTenantLabel:function(t){return"all"==t.id?this.$t("statistics.allTenants"):t.company},handleCurrentChange:function(t){},handleSearch:function(){var t=this,e=this,a={category:"gis",species:"province"};"all"!=this.tenantId&&(a.tenantId=this.tenantId),"all"!=this.prodId&&(a.productId=this.prodId),this.listLoading=!0,this.provinces=[],this.cities=[],this.cntDev="",this.cntPro="",this.cntCity="",this.total=0,this.pie.series[0].data=[],this.map.series[0].data=[],n.a.getDeviceStatistics(a).then(function(s){e.$message.success(e.$t("common.tipSuccess")),t.provinces=s.data.result,t.cntDev=s.data.count,t.cntPro=s.data.province;var i=[];t.pie.series[0].data=[],t.provinces.forEach(function(t){i.push({value:t.count,name:t.province})}),i.length>10?t.pie.series[0].data=i.slice(0,10):t.pie.series[0].data=i,i.length>0&&(t.map.visualMap.max=t.provinces[0].count),i=[],t.map.series[0].data=[],t.provinces.forEach(function(t){i.push({value:t.count,name:t.province})}),i.length>50?t.map.series[0].data=i.slice(0,50):t.map.series[0].data=i,a.species="city",n.a.getDeviceStatistics(a).then(function(e){t.cities=e.data.result,t.cntCity=e.data.city,t.total=t.cities.length,t.listLoading=!1}).catch(function(e){t.listLoading=!1})}).catch(function(e){t.listLoading=!1})}},watch:{tenantId:function(t,e){var a=this;this.products=[],this.prodId="all",c.a.getAllProducts("all"==t?"":t).then(function(t){a.products=t.data.result,a.products.unshift({id:"all"})}).catch(function(t){})}}}),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"tips"},[a("p",[t._v(t._s(t.$t("route.gisinfo")))])]),t._v(" "),a("div",{staticClass:"handle-box"},[a("el-select",{staticClass:"handle-select",model:{value:t.tenantId,callback:function(e){t.tenantId=e},expression:"tenantId"}},[t._l(t.tenants,function(e){return[a("el-option",{key:e.id,attrs:{label:t.getTenantLabel(e),value:e.id}})]})],2),t._v(" "),a("el-select",{staticClass:"handle-select",model:{value:t.prodId,callback:function(e){t.prodId=e},expression:"prodId"}},[t._l(t.products,function(e){return[a("el-option",{key:e.id,attrs:{label:t.getProductLabel(e),value:e.id}})]})],2),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",loading:t.listLoading},on:{click:t.handleSearch}},[t._v(t._s(t.$t("common.search")))])],1),t._v(" "),a("h5",{staticStyle:{color:"#797979"}},[t._v("从2016-10-01开始，根据已配网且上报数据的设备分析其地理分布，数据仅供参考。")]),t._v(" "),a("div",{staticClass:"tips"},[a("p",[t._v(t._s(t.$t("statistics.tipCount")))])]),t._v(" "),a("el-card",{staticClass:"box-card tips",attrs:{shadow:"always"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:8}},[t._v(t._s(t.$t("statistics.count")))]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v(t._s(t.$t("statistics.province")))]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v(t._s(t.$t("statistics.city")))])],1),t._v(" "),a("el-row",{staticClass:"count",attrs:{gutter:24}},[a("el-col",{attrs:{span:8}},[t._v(t._s(t.cntDev))]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v(t._s(t.cntPro))]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v(t._s(t.cntCity))])],1)],1),t._v(" "),t.provinces.length>0?a("div",{staticClass:"echarts-pie"},[a("IEcharts",{attrs:{option:t.pie}})],1):t._e(),t._v(" "),t.provinces.length>0?a("div",{staticClass:"echarts-map"},[a("IEcharts",{attrs:{option:t.map}})],1):t._e(),t._v(" "),a("div",{staticClass:"tips"},[a("p",[t._v(t._s(t.$t("statistics.tipCity")))])]),t._v(" "),t.total>0?a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next",total:t.total,"page-size":t.pageSize},on:{"current-change":t.handleCurrentChange}}):t._e(),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.cities,border:"",strip:""}},[a("el-table-column",{attrs:{type:"index",width:"40"}}),t._v(" "),a("el-table-column",{attrs:{prop:"province",label:t.$t("statistics.province")}}),t._v(" "),a("el-table-column",{attrs:{prop:"city",label:t.$t("statistics.city")}}),t._v(" "),a("el-table-column",{attrs:{prop:"count",label:t.$t("statistics.count")}})],1)],1)},d=[],p={render:l,staticRenderFns:d},u=p,v=a("VU/8"),h=s,f=v(o,u,!1,h,"data-v-5f583f4f",null);e.default=f.exports}});