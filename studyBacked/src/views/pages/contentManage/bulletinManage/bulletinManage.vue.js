
module.exports = {
    data() {
        return {
          pages:this.cont.pages,
          table:this.cont.bulletinList,
          dialogFormVisible: false,
          form:this.cont.bulletinData,
          input:this.cont.bulletinSreach,
        }
    },
    created() {
        this.getList()
        this.load. openFullScreen()
    },
    methods: {
        /* -------------后台请求---------------- */
        //获取列表
        async getList(){
            this.input.page=this.pages.page
            this.input.size=this.pages.size
            const {data:res} = await this.$http.postNoticeList(this.input)
            // console.log(res)
            this.table = res.data.list
            this.pages.totalSize = res.data.totalSize
        },
        //公告查找
        getSearch(){
            this.input.page = 1
            this.getList()
        }, 
        //获取详情 
        async handleEdit(id) {
            this.form.id = id
            const {data:res} = await this.$http.getNoticeEdit(id)
            // console.log(res)
            this.form = res.data
            this.dialogFormVisible = true
        },
        //新增或编辑
        async saveEdit(){
            const {data:res} = await this.$http.postNoticeEdit(this.form)
            if(res.code==0){
                this.$message({type:'success',message:`已保存`,center: true})
            }
            this.dialogFormVisible = false
        },
        //上/下架
        handleStatus(id,status){
            let param =`status=${status=status==1?0:1}`;
            this.$confirm(`${status==1?'是否上架?':'是否下架?'}`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(()=>{
                this.$http.putNotice(id,param).then(res=>{
                    // console.log(res)
                    if(res.data.code==0){              
                        this.getList()
                        this.$message({type:'success',message:`${status==1?'已上架':'已下架'}`,center: true})
                    }else if(res.data.code==2502){
                        this.$message({type:'warning',message:`请先下架`,center: true})
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
         //关闭弹窗重置选框
         showSetRightDialogClosed() {
            for(let key in this.form){
                this.form[key]='';
            }
            this.input.title = ''
            this.pages.page = 1
            this.pages.size =10
            this.getList()
        },
        /* -------------分页功能--------------- */
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

     

