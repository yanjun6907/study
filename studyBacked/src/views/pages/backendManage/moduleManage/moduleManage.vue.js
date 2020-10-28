
module.exports = {
    data() {
        return {
            pages:this.cont.pages,
            dialogFormVisible: false,
            form: this.cont.moduleData,
            table:this.cont.moduleTable
        }
    },
    created() {
        this.showSetRightDialogClosed()
        this.load. openFullScreen()
    },
    methods: {
        /* --------------后台请求---------------- */
        //获取列表
        async getList(){
            let page = `page=${this.pages.page}&size=${this.pages.size}`
            const {data:res} = await this.$http.getModuleList(page)
            // console.log(res)
            this.table = res.data.list
            this.pages.totalSize = res.data.totalSize
        },
        //模块详情
        async handleEdit(id) {
            this.form.id = id
            this.dialogFormVisible = true
            const {data:res} = await this.$http.getModuleEdit(id)
            this.form = res.data
        },
        //新增编辑保存
        saveEdit(){
            this.$confirm('确定要保存吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(()=>{
                if(this.form.id){
                    this.$http.putModuleEdit(this.form) 
                }else {
                    this.$http.postModuleEdit(this.form)
                }
                this.getList()
                this.$message({type:'success',message:'保存成功',center: true})
                this.dialogFormVisible = false
            }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消保存'
                });          
            });
        },
        //关闭弹窗重置选框
        showSetRightDialogClosed() {
            for(let key in this.form){
                this.form[key]='';
            }
            this.getList()
        },
        //删除
        handleDelete(id) { 
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                this.$http.deleteModule(id).then(res=>{
                    console.log(res)
                    if(res.data.code==0){
                        this.getList()
                        this.$message({type:'success',message:'删除成功',center: true})
                    } 
                }) 
            }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });          
            });   
        },
        /* ---------------分页功能 ----------------*/
        handleSizeChange(val) {
            this.pages.size = val
            this.getList()          
            // console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.pages.page = val
            this.getList()
            // console.log(`当前页: ${val}`);
        },
    },
}

     

