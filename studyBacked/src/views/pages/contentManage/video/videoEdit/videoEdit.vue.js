
module.exports = {
    data() {
        return {
          token:sessionStorage.getItem('auth_token'),
          dialogFormVisible1: false,
          videoFlag: false,
          dialogVisible: false,
          hideUploadVideo: false,
          ruleForm:this.cont.ruleForm4,
          rules:this.cont.rules4,
          editorOption:this.cont.editor,
          userId:this.$route.query.id,
          videoUploadPercent: 0,
          dialogImageUrl: '',
          fileLists: [],
        }
      },
      created() {
        this.load. openFullScreen()
        if(this.userId){
          this.getEdit(this.userId)
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
          this.fileLists = [{url:res.data.videoImage}]
          this.hideUploadVideo = true 
        },
        //文章详情保存
        async submitForm(formName) {
          if(this.userId){
            const {data:res} = await this.$http.patchVideoEdit(this.userId,this.ruleForm)
            // console.log(res)
            if(res.code==0){
              this.$router.push('/video')
            }
          }else{
            const {data:res} = await this.$http.postVideoEdit(this.ruleForm)
            if(res.code==0){
              this.$router.push('/video')
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
        //取消
        goBack(formName){
          this.$refs[formName].resetFields();
          this.$router.push('/video')
        },
        //重置
        resetForm(formName) {
          this.$refs[formName].resetFields();
          this.fileLists = []
          setTimeout(() => {
            this.hideUploadVideo = false
          }, 100);  
        },
        /* --------------------头像or封面上传--------------------- */
        async T_uploadFile(file){
          const {data:res} = await this.$http.uploadFile(file.file)
          if (res.code == 0) {
            this.$message.success({message:`上传成功！`,center: true})
            setTimeout(()=>{
              this.ruleForm.teacherImage = res.data.url
            },500) 
          }else {
            this.$message.error({message:`上传失败！`,center: true})
          }
        },
        async V_uploadFile(file){
          this. hideUploadVideo = true
          const {data:res} = await this.$http.uploadFile(file.file)
          if (res.code == 0) {
            this.$message.success({message:`上传成功！`,center: true})
            setTimeout(()=>{
              this.ruleForm.videoImage = res.data.url
            },500) 
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
        handleRemove(file, fileList) {
          setTimeout(()=>{
            this.hideUploadVideo = false;
          },100)  
          this.fileLists = fileList;
          this.ruleForm.videoImage='';
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        /* ---------------------视频上传 ---------------------- */
        F_uploadFile(res,file){
          if(res.code == 0){
            this.ruleForm.videoUrl = res.data.url
          }       
        },
        beforeUploadVideo(file) {
          this.ruleForm.videoUrl = '' 
          var fileSize = file.size / 1024 / 1024 < 200;
          const videoSrc = window.URL.createObjectURL(file)
          const video = document.createElement('video')
          video.src = videoSrc
          let that = this
          if (['video/mp4'].indexOf(file.type) == -1) {
              this.$message.error("请上传正确的视频格式");
              this.videoFlag = false
              return false;
            
          }else {
            video.oncanplay = function() {
              console.log(file)
              if(this.videoWidth > 1080){
                that.$message.error("分辨率不得超过1080p");
                that.videoFlag = false
                return false;
              }
              else if(file.size*8/1024/this.duration > 6000){
                that.$message.error("视频码率不得超过6000kbps");
                that.videoFlag = false
                return false;
              }
              else if (!fileSize) {
                that.$message.error("视频大小不能超过200MB");
                that.videoFlag = false
                return false;
              }else {
                that.videoFlag = true
              }
            }
          }
        },
        uploadchange (file,fileList) {
          if (file.status === 'ready') {
            this.videoUploadPercent = 0
            const timer = setInterval(() => {
              if (this.videoUploadPercent >= 35) {
                clearInterval(timer)
                return
              }
              this.videoUploadPercent += 1
            }, 400)
            const timer2 = setInterval(() => {
              if (this.videoUploadPercent >= 75) {
                clearInterval(timer2)
                return
              }
              this.videoUploadPercent += 1
            }, 800)
            const timer3 = setInterval(() => {
              if (this.videoUploadPercent >= 99) {
                clearInterval(timer3)
                return
              }
              this.videoUploadPercent += 1
            }, 1200)
          }
          if (file.status === 'success') {
            this.videoUploadPercent = 100
            setTimeout(() => {
              this.videoFlag = false
            }, 1500);
          }
        },
        uploadEorror(){
           this.$message.error("视频上传失败,请联系客服！");
           this.hideUploadVideo = false
           this.remove()
        },
        remove(){
          this.$refs.uploader.abort()
          this.videoFlag = false
          this.ruleForm.videoUrl = ''
        }
      }
    }