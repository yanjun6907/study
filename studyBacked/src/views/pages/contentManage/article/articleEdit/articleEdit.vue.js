module.exports = {
data() {
    return {
      ruleForm:this.verify.ruleForm,
      rules:this.verify.rules,
      dialogImageUrl: '',
      dialogVisible: false,
      hideUploadArticle: false,
      limitCount:1,
      fileLists: [],
      editorOption:this.cont.editor,
      articleId:''
    }
  },
  created() {
    this.load. openFullScreen()
    this.articleId = this.$route.query.id
    if(this.articleId){
      this.getEdit(this.articleId)
    } 
    return false  
  },
  methods: {
    /* ------------------后台请求-------------------- */
    //获取文章
    async getEdit(id){
      const {data:res} = await this.$http.getArticleEdit(id)
      this.ruleForm = res.data
      this.fileLists = [{url:res.data.articleImage}]
      this.hideUploadArticle = true 
    },
    //文章详情保存
    async submitForm(formName) {
      if(this.articleId){
        const {data:res} = await this.$http.putArticleEdit(this.ruleForm)
        if(res.code==2000){
          this.$router.push('/article')
        }
      }else{
        const {data:res} = await this.$http.postArticleEdit(this.ruleForm)
        if(res.code==2000){
          this.$router.push('/article')
        }
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          return true
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.$router.push('/article')
    },
    //上传
    uploadFile(){

    },
    //删除
    handleRemove(file, fileList) {
      setTimeout(()=>{
        this.hideUploadArticle = fileList.length >= this.limitCount;
      },100)  
      this.fileLists = fileList;
      this.ruleForm.articleImage='';
    },
    //获取文件名和文件大小
    handlePreview(file, fileList) {
      this.hideUploadArticle = fileList.length >= this.limitCount;
      let that = this;
    if (file.raw.size > 1024 * 1024 * 5) {
      that.$message.error('上传文件大小不能超过 5MB!');
      return;
    }  
    },
    //限制文件个数
    fileExceed:function(files, fileList){
      this.$message.warning(`当前限制选择 1 个文件`)
    },
    //预览大图
    handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
    },
  }
}