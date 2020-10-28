
module.exports = {
    data(){
        return {
            checked: false,
            ruleForm2:this.verify.ruleForm2,
            rules2:this.verify.rules2
        }
    },
    created() {
        this.load.keyDown()
    },
    methods: {
        //登录请求
        handleSubmit(){
            this.$refs.ruleForm2.validate((valid) => {
                if(valid){
                    let user = `name=${this.ruleForm2.name}&password=${this.ruleForm2.password}`
                    this.$http.postLogin(user).then(res=>{
                        console.log(res)
                        if(res.data.code==0){
                            sessionStorage.setItem('auth_token',res.data.data.token)
                            sessionStorage.setItem('auth_name',this.ruleForm2.name)
                            this.$message({message:'登录成功',center:true,type:'success'})
                            this.$router.push('/home')
                        }else{
                            this.$alert(res.data.message)
                        }
                    })
                }
            })
        }
    }
}