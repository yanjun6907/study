
module.exports = {
    data() {
        return {
            roles:[],
            pages:this.cont.pages,
            table:this.cont.manageTable,
            dialogFormVisible: false,
            form:this.verify.ruleForm6,
            rules:this.verify.rules6
        }
    },
    created() {
        this.reset()
        this.selectChange()
        this.load. openFullScreen()
    },
    methods: {
        /* ------------------------后台请求----------------------- */
        //获取列表
        async getList(){
            let page = `page=${this.pages.page}&size=${this.pages.size}`
            const {data:res} = await this.$http.getAccountList(page)
            // console.log(res)
            this.table = res.data.list
            this.tables = res.data.list
            this.pages.totalSize = res.data.totalSize
        },
        //条件查询
        async getSearch(){
            let page = `name=${this.form.name}&roleId=${this.form.roleId}`
            const {data:res} = await this.$http.getAccountSearch(page)
            console.log(res)
            this.table = res.data.list
            this.pages.totalSize = res.data.totalSize
        },
        //下拉框列表
        async selectChange(){
            const {data:res} = await this.$http.getAccountSelect()
            if(res.code==0){
            this.roles = res.data
            sessionStorage.setItem('roles',JSON.stringify(this.roles))
            }
        },
        //用户新增编辑
        saveEdit(ruleForm) { 
            this.$refs[ruleForm].validate((valid) => {
                if(valid){
                    this.$confirm('确定要保存吗?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning',
                        center: true
                    }).then(()=>{
                        if(this.form.id){
                            this.$http.putAccountEdit(this.form) 
                        }else {
                            this.$http.postAccountEdit(this.form)
                        }
                        this.getList()
                        this.$message({type:'success',message:'保存成功',center: true})
                        this.dialogFormVisible = false
                    }).catch(() => {
                            this.$message({
                            type: 'info',
                            message: '已取消保存'
                        })         
                    })
                }else {
                    this.$alert('请填写完整信息')
                }  
            })
        },
        //删除账户
        handleDelete(id) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                this.$http.deleteAccount(id).then(res=>{
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
        //重置
        reset(){
            for(let key in this.form){
              this.form[key]='';
            }
            this.getList()
        },
        //编辑查看
        async handleEdit(id){
            this.form.id = id;
            const {data:res} = await this.$http.getAccountEdit(id)
            this.form = res.data
            this.dialogFormVisible = true
            
        }, 
        //关闭弹窗重置选框
        showSetRightDialogClosed() {
            for(let key in this.form){
                this.form[key]='';
            }
        },
        /* ----------------分页功能 ----------------*/
        handleSizeChange(val) {
            this.pages.size = val
            this.getList()          
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.pages.page = val
            this.getList()
            console.log(`当前页: ${val}`);
        },     
    },
}

     

