module.exports = {
    data() {
        return {
          ruleForm:this.cont.ruleForm3,
          rules:this.cont.rules3
        }
      },
      created() {
        this.load.keyDown()
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
                // console.log(res)
                if(res.data.code==0){
                  this.$message({message:'密码修改成功',center:true,type:'success'})
                  sessionStorage.removeItem('auth_token')
                  sessionStorage.removeItem('auth_name')
                  sessionStorage.removeItem('Rights')
                  this.cont.ruleForm2.name=''
                  this.cont.ruleForm2.password=''  
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