module.exports = {
data() {
    return {
      ruleForm:this.cont.ruleForm,
      editorOption:this.cont.editor,
      rules:this.cont.rules,  
      dialogVisible: false,
      hideUploadArticle: false,
      dialogImageUrl: '',
      fileLists: [],
      articleId:''
    }
  },
  created() {
    this.ruleForm.type = 0
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
      this.fileLists = [{url:res.data.letterImage}]
      this.hideUploadArticle = true 
    },
    //文章详情保存
    async submitForm(formName) {
      if(this.articleId){
        const {data:res} = await this.$http.patchArticleEdit(this.articleId,this.ruleForm)
        if(res.code==3202){
          setTimeout(() => {
            this.$router.push('/article')
          }, 1500)
        }
      }else{
        const {data:res} = await this.$http.postArticleEdit(this.ruleForm)
        // console.log(res)
        if(res.code==3202){
          setTimeout(() => {
            this.$router.push('/article')
          }, 1500)
        }
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message.success({message:`保存成功！`,center: true})
          return true
        } else {
          this.$message.warning({message:`内容填写不完整！`,center: true})
          return false
        }
      });
    },
    //清空
    resetForm(formName){
      this.$refs[formName].resetFields()
      this.fileLists = []
      setTimeout(() => {
        this.hideUploadArticle = false
      }, 100);  
    },
    //取消
    goBack(formName) {
      this.resetForm(formName)
      this.$router.push('/article')
    },
   /*-------------上传---------------*/
    async uploadFile(file){
      this.hideUploadArticle = true
      const {data:res} = await this.$http.uploadFile(file.file)
      if (res.code == 0) {
        setTimeout(()=>{
          this.ruleForm.letterImage = res.data.url
          this.$message.success({message:`上传成功！`,center: true})
        },100) 
      }else {
        this.$message.error({message:`上传失败！`,center: true})
      }
    },
    beforeExcelUpload(file) {
      if (file.size > 1024 * 1024 * 0.4) {
        this.$message.error({ message: "图片大小不超过400KB!", center:'true'})
        return false
      }
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleRemove(file, fileList) {
      setTimeout(()=>{
        this.hideUploadArticle = false
      },100)  
      this.fileLists = fileList
      this.ruleForm.letterImage=''
    },
    uploadEorror(){
      this.$message.error("视频上传失败,请联系客服！");
      this.hideUploadVideo = false
   },
  }
}