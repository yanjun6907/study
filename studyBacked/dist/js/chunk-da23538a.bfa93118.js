(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da23538a"],{"125c":function(t,e,i){"use strict";i.r(e);var a=i("fe49"),s=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"3b40":function(t,e,i){"use strict";var a=i("4d47"),s=i.n(a);s.a},"4d47":function(t,e,i){},"91f0":function(t,e,i){"use strict";i.r(e);var a=i("a001"),s=i("125c");for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("3b40");var l=i("2877"),o=Object(l["a"])(s["default"],a["a"],a["b"],!1,null,"cc0e2f16",null);e["default"]=o.exports},a001:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return s}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"manage"},[i("div",{staticClass:"manage-top"},[i("div",{staticClass:"topTitle"},[i("label",{staticStyle:{flex:"1"}},[t._v("公告标题: "),i("el-input",{staticStyle:{width:"350px"},model:{value:t.input.title,callback:function(e){t.$set(t.input,"title",e)},expression:"input.title"}})],1),i("div",{staticStyle:{flex:"1","text-align":"right","line-height":"40px","margin-right":"0"}},[i("el-button",{attrs:{size:"mini",plain:""},on:{click:function(e){return t.showSetRightDialogClosed()}}},[t._v("重置")]),i("el-button",{attrs:{size:"mini",icon:"el-icon-search",plain:""},on:{click:function(e){return t.getSearch()}}},[t._v("查询")])],1)])]),i("div",{staticClass:"meu-bottom"},[i("span",{staticClass:"list-title"},[t._v(" 公告列表 "),i("el-button",{staticStyle:{float:"right","margin-top":"10px"},attrs:{size:"mini"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("+新增")])],1),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.table,border:""}},[i("el-table-column",{attrs:{label:"ID",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.id))])]}}])}),i("el-table-column",{attrs:{label:"公告标题",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.title))])]}}])}),i("el-table-column",{attrs:{label:"创建者",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.createBy))])]}}])}),i("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(t._f("times")(e.row.createAt)))])]}}])}),i("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(t._f("status2")(e.row.status)))])]}}])}),i("el-table-column",{attrs:{label:"操作",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(i){return t.handleEdit(e.row.id)}}},[t._v("查看")]),i("el-button",{style:0==e.row.status?"color:red":"",attrs:{size:"mini",type:"text"},on:{click:function(i){return t.handleStatus(e.row.id,e.row.status)}}},[t._v(t._s(1==e.row.status?"下架":"上架"))])]}}])})],1),i("div",{staticStyle:{margin:"10px","text-align":"center"}},[i("el-pagination",{attrs:{background:!0,"current-page":t.pages.page,"page-sizes":[1,2,3,4,5,6,7,8,9,10,20,30,40],"page-size":t.pages.size,layout:" sizes, prev, pager, next, jumper",total:t.pages.totalSize},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),i("el-dialog",{attrs:{title:t.form.id?"查看公告":"新增公告",visible:t.dialogFormVisible,center:""},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.showSetRightDialogClosed}},[i("el-form",{attrs:{model:t.form}},[i("el-form-item",{attrs:{label:"标题:","label-width":"45px"}},[i("el-input",{attrs:{disabled:""!==t.form.id,maxlength:"14","show-word-limit":"",placeholder:"请输入公告标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),i("el-form-item",{attrs:{label:"内容:","label-width":"45px"}},[i("el-input",{attrs:{disabled:""!==t.form.id,type:"textarea",maxlength:"140",autosize:{minRows:6},"show-word-limit":"",placeholder:"请输入公告内容"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.form.id?"返回":"取 消"))]),""==t.form.id?i("el-button",{on:{click:function(e){return t.showSetRightDialogClosed()}}},[t._v("重 置")]):t._e(),""==t.form.id?i("el-button",{attrs:{disabled:""==t.form.title||""==t.form.content},on:{click:function(e){return t.saveEdit()}}},[t._v("保 存")]):t._e()],1)],1)],1)},s=[]},fe49:function(t,e){t.exports={data(){return{pages:this.cont.pages,table:this.cont.bulletinList,dialogFormVisible:!1,form:this.cont.bulletinData,input:this.cont.bulletinSreach}},created(){this.getList(),this.load.openFullScreen()},methods:{async getList(){this.input.page=this.pages.page,this.input.size=this.pages.size;const{data:t}=await this.$http.postNoticeList(this.input);this.table=t.data.list,this.pages.totalSize=t.data.totalSize},getSearch(){this.input.page=1,this.getList()},async handleEdit(t){this.form.id=t;const{data:e}=await this.$http.getNoticeEdit(t);this.form=e.data,this.dialogFormVisible=!0},async saveEdit(){const{data:t}=await this.$http.postNoticeEdit(this.form);0==t.code&&this.$message({type:"success",message:"已保存",center:!0}),this.dialogFormVisible=!1},handleStatus(t,e){let i="status="+(e=1==e?0:1);this.$confirm(""+(1==e?"是否上架?":"是否下架?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(()=>{this.$http.putNotice(t,i).then(t=>{0==t.data.code?(this.getList(),this.$message({type:"success",message:""+(1==e?"已上架":"已下架"),center:!0})):2502==t.data.code&&this.$message({type:"warning",message:"请先下架",center:!0})})}).catch(()=>{this.$message({type:"info",message:""+(1==e?"已取消上架":"已取消下架"),center:!0})})},showSetRightDialogClosed(){for(let t in this.form)this.form[t]="";this.input.title="",this.pages.page=1,this.pages.size=10,this.getList()},handleSizeChange(t){this.pages.size=t,this.getList()},handleCurrentChange(t){this.pages.page=t,this.getList()}}}}}]);
//# sourceMappingURL=chunk-da23538a.bfa93118.js.map