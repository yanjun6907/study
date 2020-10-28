module.exports = {
    data(){
        return {
            pages:this.cont.pages,
            input:this.cont.videoTable,
            input2:this.cont.videoSearch
        }
    },
    created() {
        this. reset()
        this.load. openFullScreen()
    },
    methods: {
        /* --------------后台请求---------------- */
        //条件查询
        getSearch(){
            this.pages.page = 1
            this.getList()
        },
        //获取列表
        async getList(){
            this.input.page=this.pages.page
            this.input.size=this.pages.size
            const {data:res} = await this.$http.postVideoList(this.input2)
            this.input = res.data.list
            this.pages.totalSize = res.data.totalSize;
            console.log(res)
        }, 
        /* ---------------列表按钮---------------- */
        //视频新增
        videoIncrease(){
            this.$router.push('/videoEdit')
        },
        //视频查看
        handleIncrease(id){
            this.$router.push({path: '/videoIncrease', query: {id}})
            console.log(id)
        },
        //视频编辑
        handleEdit(id){
            this.$router.push({path: '/videoEdit', query: {id}})
            console.log(id)
        },
        //删除
        handleDelete(id) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                this.$http.delVideo(id).then(res=>{
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
        //上下架
        handleStatus(id,status){
            let param =`id=${id}&status=${status=status==1?0:1}`;
            this.$confirm(`${status==1?'是否上架?':'是否下架?'}`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(()=>{
                this.$http.videoStatus(param).then(res=>{
                    console.log(res)
                    if(res.data.code==0){              
                        this.getList()
                        this.$message({type:'success',message:`${status==1?'已上架':'已下架'}`,center: true})
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
        //重置
        reset(){
            for(let key in this.input2){
                this.input2[key]='';
            }
            this.pages.page = 1
            this.pages.size = 10
            this.getList()
        },
        /* ----------------分页------------------ */
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
      }
}