module.exports = {
    data(){
        return {
            pages:this.cont.pages,
            input:this.cont.treeHoleData,
            table:this.cont.treeHoleTable,
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
        /* ------------后台请求----------- */
        //获取列表
        async getList(){
            this.input.page = this.pages.page
            this.input.size = this.pages.size
            const {data:res} = await this.$http.postTreeList(this.input)
            this.table = res.data.list;
            this.pages.totalSize = res.data.totalSize;
        },
        //列表查询
        treeSearch(){
            this.input.createStart = new Date(this.input.createStart).getTime() || ''
            this.input.createEnd = new Date(this.input.createEnd).getTime() + 86399999 || ''; 
            this.pages.page = 1
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
            for(let key in this.input){
              this.input[key]='';
            }
            this.pages.page = 1
            this.pages.size = 10
            this.getList()
          },
        /* -------------分页-------------- */
        handleSizeChange(val) {
            this.pages.size = val
            this.getList()
        },
        handleCurrentChange(val) {
            this.pages.page = val
            this.getList()
        }
      }
}