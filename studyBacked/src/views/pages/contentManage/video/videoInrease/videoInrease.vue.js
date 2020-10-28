module.exports = {
 
}
module.exports = {
    data() {
        return {
          imageUrl: '',
          ruleForm:this.verify.ruleForm4,
          dialogImageUrl: '',
          dialogVisible: false,
          hideUploadVideo: false,
          fileLists: [],
          editorOption:this.cont.editor
        }
      },
      beforeMount() {
        this.load. openFullScreen()
        let id = this.$route.query.id
        if(id){
          this.getEdit(id)
        } 
        return false  
      },
      methods: {
        /* ------------------后台请求-------------------- */
        //获取文章
        async getEdit(id){
          const {data:res} = await this.$http.getVideoEdit(id)
          console.log(res)
          this.ruleForm = res.data
          this.fileLists = [{url:res.data.videoImage}]
          this.hideUploadVideo = true 
        },
        //返回
        resetForm(formName) {
          this.$refs[formName].resetFields();
          this.$router.push('/video')
        },
        //预览大图
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
 
      }
    }