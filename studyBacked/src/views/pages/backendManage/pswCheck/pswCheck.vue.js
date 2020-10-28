module.exports = {
    data() {
        return {
          ruleForm:this.verify.ruleForm3,
          rules:this.verify.rules3
        }
      },
      created() {
        this.load. openFullScreen()
        this.ruleForm.oldPassword=''
        this.ruleForm.password=''
        this.ruleForm.checkPassword=''
      },
      methods: {
        submitForm(ruleForm) {
            this.$refs[ruleForm].validate((valid) => {
                if(valid){
                  let page = `oldPassword=${this.ruleForm.oldPassword}&password=${this.ruleForm.password}`
                  this.$http.postCheck(page).then(res=>{
                    console.log(res)
                    if(res.data.code==0){
                      this.$message(res.data.message)
                      sessionStorage.removeItem('auth_token')
                      sessionStorage.removeItem('auth_name')
                      sessionStorage.removeItem('Rights')
                      this.verify.ruleForm2.name=''
                      this.verify.ruleForm2.password=''  
                      this.$router.push('/')
                    }else{
                      this.$alert(res.data.message)
                    }
                  })  
                }else {
                  this.$alert('请填写完整信息')
                }
            })
        }
      }
    
}