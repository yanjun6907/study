module.exports = {
    data(){
        return {
            value1:'',
            value2:'',
            pages:this.cont.pages,
            input:this.cont.leaveSearch,
            table:this.cont.leaveTable,
            pickerOptions0: {
                disabledDate: (time) => {
                    if (this.input.createEnd != "") {
                        return time.getTime() > Date.now() || time.getTime() > this.input.createEnd;
                    } else {
                        return time.getTime() > Date.now();
                    }
                }
            },
            pickerOptions1: {
                disabledDate: (time) => {
                    return time.getTime() < this.input.createStart || time.getTime() > Date.now();
                }
            }
        }
    },
    created() {
        this.reset()
        this.load. openFullScreen()
    },
    methods: {
        /* ----------------后台请求---------------- */
        //获取列表
        async getList(){
            this.input.page=this.pages.page
            this.input.size=this.pages.size
            const {data:res} = await this.$http.postLeaveList(this.input)
            console.log(res.data)
            this.table = res.data.list
            this.pages.totalSize=res.data.totalSize
        },
        //条件查询
        getSearch(){
            this.input.createStart = new Date(this.input.createStart).getTime() || ''
            this.input.createEnd = new Date(this.input.createEnd).getTime() + 86399999 || ''; 
            this.pages.page = 1
            this.getList()
        },
        //重置
        reset(){
            for(let key in this.input){
                this.input[key]='';
            }
            this.pages.page = 1
            this.pages.size = 10
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
                this.$http.deleteLeave(id).then(res=>{
                    console.log(res.data)
                    if(res.data.code==1302){
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
        //排序
        sortBy(column){  
            if(column.column.label=="阅读量"){
                if(column.order==='descending'){
                    this.input.sortByRead = 2
                }else{
                    this.input.sortByRead = 1
                }
            }
            else if(column.column.label=="评论数"){
                if(column.order==='descending'){
                    this.input.sortByReplay = 2
                }else{
                    this.input.sortByReplay = 1
                }
            }     
            this.getList()
          },
        //加精--置顶
        handleStatus(id,essence){
                essence=essence==1?0:1
                let param = `id=${id}&essence=${essence}`
                this.$confirm(`${essence==1?'确定要加精吗?':'是否取消加精?'}`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    this.$http.putLeaveEssence(param).then(res=>{
                        console.log(res.data)
                        if(res.data.code==1302){
                            this.getList()
                            this.$message({type:'success',message:`${essence==1?'已加精':'已取消'}`,center: true})
                        } 
                    }) 
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: `${essence==1?'已取消加精操作':'已终止取消加精操作'}`,
                        center: true
                    });          
                });  
        },
        handleTop(id,top){
                top=top==1?0:1
                let param = `id=${id}&top=${top}`
                this.$confirm(`${top==1?'确定要置顶吗?':'是否取消置顶?'}`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    this.$http.putLeaveTop(param).then(res=>{
                        console.log(res.data)
                        if(res.data.code==1302){
                            this.getList()
                            this.$message({type:'success',message:`${top==1?'已置顶':'已取消'}`,center: true})
                        } 
                    }) 
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: `${top==1?'已取消置顶操作':'已终止取消置顶操作'}`,
                        center: true
                    });          
                });  
        },
        leaveEdit(id){
            console.log(id)
            this.$router.push({path:'/leaveEdit',query:{id}})
        },
        handleSizeChange(val) {
            this.pages.size = val
            this.getList()
            // console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.pages.page = val
            this.getList()
            // console.log(`当前页: ${val}`);
        }
      }
}