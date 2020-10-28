module.exports = {
    data(){
        return {
            pages:this.cont.pages,
            table:this.cont.roleTable,
            input:this.cont.roleData,
            dialogFormVisible: false,         
            rightsList: [] ,// 角色所有权限数据
            defKeys: [] ,// 默认选中的节点ID值数组
            roleId: '', // 当前角色id
            treeProps: {
                label: 'name',
                children: 'children'
            }
        }
    },
    created() {
        this.getList()
        this.load. openFullScreen()
    },
    methods: {
        /* -----------------------后台请求------------------------ */
        //角色管理
        async getList(){
            let page = `page=${this.pages.page}&size=${this.pages.size}`
            const {data:res} = await this.$http.getRoleList(page)
            console.log(res)
            if(res.code==0){
                this.table = res.data.list
                this.pages.totalSize = res.data.totalSize
            }    
        },
        //获取详情
        async showSetRightDialog(id) {
            this.roleId = id // 获取角色id
            const {data:res} = await this.$http.getNavList()
            this.rightsList = res.data
            if(this.roleId){ 
                let keys = []  
                const {data:e} = await this.$http.getRoleEdit(this.roleId)
                for(const i in e.data.permissionList){
                    for (const key in res.data) {
                        for (const k in res.data[key].children) {
                            if(e.data.permissionList[i]==res.data[key].children[k].id){
                                keys.push(res.data[key].children[k].id)
                            }
                        }     
                    }   
                }
                this.input.name = e.data.name
                this.defKeys = keys
            }  
            setTimeout(() => {
                this.dialogFormVisible = true
            }, 500);         
        },
        //详情新增编辑
        handleEdit() {
            const keys = [
                ...this.$refs.treeRef.getCheckedKeys(),
                ...this.$refs.treeRef.getHalfCheckedKeys()
            ]
            const rights = keys.join(',')
            console.log(rights)
            let key = `id=${this.roleId}&name=${this.input.name}&permissionList=${rights}`
            this.$confirm('确定要保存吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(()=>{
                if(this.roleId){
                    this.$http.putRoleEdit(key)
                }else {
                    this.$http.postRoleEdit(key)
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
        },
        //角色删除
        async handleDelete(id) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                this.$http.deleteRole(id).then(res=>{
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
        // 监听 分配权限对话框的关闭事件
        showSetRightDialogClosed() {
            this.defKeys = []
            this.$refs.treeRef.setCheckedKeys([]); 
            this.input.name = ''
        },
        /*--------------- 分页功能------------------- */
        handleSizeChange(val) { 
            this.pages.size = val; 
            this.getList()        
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.pages.page = val;
            this.getList()
            console.log(`当前页: ${val}`);
        },
     
    },
}

