  module.exports={
    data() {
      return {
        input3:[],
        dialogFormVisible: false,
        pages:this.cont.pages,
        input2:this.cont.userData,
        input:this.cont.userSreach,
        table:this.cont.userTable,
      }
    },
    created() {
      this.resetData()
      this.load.openFullScreen()
    },
    methods: {
    /* --------------获取用户列表/条件查询--------------*/
      //列表
      async  getList(){ 
        this.input.page = this.pages.page
        this.input.size = this.pages.size
        const {data:e} = await this.$http.postUserList(this.input)
        this.table=e.data.list;
        this.pages.totalSize = e.data.totalSize;         
      },
      //查询
      getSearch(){
        this.pages.page = 1
        this.getList()
      },
      //逆袭豆状态
      beanStatus(column){        
        if(column.order==='descending'){
          this.input.beanStatus = 2
        }else{
          this.input.beanStatus = 1
        }
        this.getList()
      },
    /* -------------------操作按钮-------------------- */
      //获取详情
      async handleEdit(id) {
        const {data:e} = await this.$http.getUserEdit(id)
        if(e.code==1402){
          this.input3.push(e.data) 
        }
        setTimeout(() => {
          this.dialogFormVisible = true;
        }, 300);      
      },
      //冻结
      handleStatus(id, status) {
        status=status==1?0:1
        let param = `status=${status}&id=${id}`;
        this.$confirm(`${status==1?'确定要冻结吗?':'是否要解冻?'}`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(()=>{
        this.$http.putUser(param).then(e=>{
          // console.log(e)
          if (e.data.code == 1402) {
            this.getList();
          } 
        })
        this.$message({type:'success',message:`${status==1?'已冻结':'已解冻'}`,center: true})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: `${status==1?'已取消冻结':'已取消解冻'}`,
            center: true
          })         
        })     
      },
      //重置
      resetData(){
        for(let key in this.input){
          this.input[key]='';
        }
        this.pages.page = 1
        this.pages.size = 10
        this.getList()
      },
      //关闭弹窗重置选框
      showSetRightDialogClosed() {
        this.input3=[]
      },
      /*------------------ 分页功能 ------------------*/
      handleSizeChange(val) {
        this.pages.size=val
        this.getList()
      },
      handleCurrentChange(val) {
        this.pages.page=val
        this.getList()
      },
    }
  }