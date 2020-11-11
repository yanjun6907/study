module.exports = {
 
}
module.exports = {
    data() {
        return {
          ruleForm:this.cont.ruleForm4,
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
        /* ------------------后台请求-------------------- */
        //获取文章
        async getEdit(id){
          const {data:res} = await this.$http.getVideoEdit(id)
          // console.log(res)
          this.ruleForm = res.data
        },
        //返回
        resetForm() {
          this.$router.push('/video')
        }
      }
    }