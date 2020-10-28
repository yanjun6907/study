module.exports = {
    data() {
        return {
          ruleForm:this.verify.ruleForm,
          dialogImageUrl:'',
          dialogVisible: false,
          hideUploadArticle: false,
          fileLists: [],
          editorOption:this.cont.editor
        }
      },
      created() {
        this.load. openFullScreen()
        let id = this.$route.query.id
        if(id){
          this.getEdit(id)
        } 
        return false  
      },
      methods: {
        //获取文章
        async getEdit(id){
          const {data:res} = await this.$http.getArticleEdit(id)
          this.ruleForm = res.data
          this.fileLists = [{url:res.data.articleImage}]
          this.hideUploadArticle = true 
        },
        //文章详情返回
        submitForm(){
            this.$router.push('/article')
        },
        //预览大图
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
      }
    }