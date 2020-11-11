module.exports = {
    data(){
        return {
            pages:this.cont.pages,
            input:this.cont.articleTable,
            input2:this.cont.articleSearch 
        }
    },
    created() {
        this.reset()
        this.load. openFullScreen()
    },
    methods: {
        /* --------------后台请求-------------- */
        //条件查询
        articleSearch(){
            this.input2.page = 1
            this.getList()
        },
        //获取列表
        async getList(){
            this.input2.page=this.pages.page 
            this.input2.size=this.pages.size
            const {data:res} = await this.$http.postArticleList(this.input2)
            this.input = res.data.list
            this.pages.totalSize = res.data.totalSize;
            // console.log(res)
        }, 
        /* --------------列表按钮--------------- */
        //文章新增
        articleIncrease(){
            this.$router.push('/articleEdit')
        },
        //文章查看
        handleIncrease(id){
            this.$router.push({path: '/articleIncrease', query: {id}})
        },
        //文章编辑
        handleEdit(id){
            this.$router.push({path: '/articleEdit', query: {id}})
        },
        //上下架
        handleStatus(id,status){
            let param =`status=${status=status==1?0:1}`;
            this.$confirm(`${status==1?'是否上架?':'是否下架?'}`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(()=>{
                this.$http.articleStatus(id,param).then(res=>{
                    // console.log(res)
                    if(res.data.code==3202){              
                        this.getList()
                        this.$message({type:'success',message:`${status==1?'已上架':'已下架'}`,center: true})
                    }else if(res.data.code==3203) {
                        this.$message({type:'warning',message:`已有8张banner文章上架,操作失败`,center: true})
                    } 
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: `${status==1?'已取消上架':'已取消下架'}`,
                    center: true
                })         
            })               
        },
        //删除
        handleDelete(id) { 
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                this.$http.delArticle(id).then(res=>{
                    // console.log(res.data)
                    if(res.data.code==3202){
                        this.pages.page = 1
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
            for(let key in this.input2){
                this.input2[key]='';
            }
            this.pages.page = 1
            this.pages.size = 10
            this.getList()
          },
        /* ----------------分页---------------- */
        handleSizeChange(val) {
            this.pages.size=val;
            this.getList();
            // console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.pages.page=val;
            this.getList()
            // console.log(`当前页: ${val}`);
        }
      }
}