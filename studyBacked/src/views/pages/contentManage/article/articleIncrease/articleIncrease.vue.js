module.exports = {
    data() {
        return {
          ruleForm:this.cont.ruleForm,
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
        },
        //文章详情返回
        submitForm(){
            this.$router.push('/article')
        }   
      }
    }