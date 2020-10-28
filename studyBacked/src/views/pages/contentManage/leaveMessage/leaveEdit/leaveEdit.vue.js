module.exports = {
    data(){
        return {
            table:this.cont.remarkTable,
            pages:this.cont.pages,
            readTopic:{},
            readUser:{},
        }
    },
    created() {         
        this.load. openFullScreen()
        let id = this.$route.query.id
        if(id){
          this.getEdit(id)
          this.getList(id) 
        } 
        return false  
      },
    methods: {
        /* ------------------后台请求-------------------- */
        //获取详情
        async getEdit(id){
            const {data:res} = await this.$http.getLeaveArticle(id)
            console.log(res)
            this.readTopic = res.data.topic
            this.readUser = res.data.user
        },
        //获取列表
        async getList(id){
            let pages = `id=${id}&page=${this.pages.page}&size=${this.pages.size}`
            const {data:res} = await this.$http.postLeaveremark(pages)
            console.log(res)
            this.table = res.data.list
            this.pages.totalSize=res.data.totalSize
        },
        //删除
        handleDelete(id) {
            console.log(id)
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                this.$http.deleteRemark(id).then(res=>{
                    console.log(res.data)
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
        /* ----------------分页功能------------------ */
        handleSizeChange(val) {
            let id = this.$route.query.id
            this.pages.size = val
            this.getList(id)
            // console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            let id = this.$route.query.id
            this.pages.pages = val
            this.getList(id)
            // console.log(`当前页: ${val}`);
        },
    },
}
