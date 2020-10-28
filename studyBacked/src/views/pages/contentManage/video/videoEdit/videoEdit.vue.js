
module.exports = {
    data() {
        return {
          dialogFormVisible1: false,
          videoFlag: false,
          ruleForm:this.verify.ruleForm4,
          rules:this.verify.rules4,
          rules2:this.verify.rules5,
          dialogImageUrl: '',
          dialogVisible: false,
          hideUploadVideo: false,
          limitCount:1,
          fileLists: [],
          editorOption:this.cont.editor,
          userId:this.$route.query.id,

          videoFlag: false,
          //是否显示进度条
          videoUploadPercent: "",
          //进度条的进度，
          isShowUploadVideo: false,
          //显示上传按钮
          videoForm: {
              showVideoPath: ''
          }
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
          console.log(res)
          this.ruleForm = res.data
          this.fileLists = [{url:res.data.videoImage}]
          this.hideUploadVideo = true 
        },
        //文章详情保存
        async submitForm(formName) {
          if(this.userId){
            const {data:res} = await this.$http.putVideoEdit(this.ruleForm)
            if(res.code==2000){
              this.$router.push('/video')
            }
          }else{
            const {data:res} = await this.$http.postVideoEdit(this.ruleForm)
            if(res.code==2000){
              this.$router.push('/video')
            }
          }
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
          this.$router.push('/video')
        },
        //上传
        uploadFile(){
    
        },
        //删除
        handleRemove(file, fileList) {
          setTimeout(()=>{
          this.hideUploadVideo = fileList.length >= this.limitCount;
        },100)  
        this.fileLists = fileList;
        this.ruleForm.videoImage='';
        
        },
        //获取文件名和文件大小
        handlePreview(file, fileList) {
          this.hideUploadVideo = fileList.length >= this.limitCount;
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
        /* 上传头像 */
        handleAvatarSuccess(res, file) {
          this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;
          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        },
        
        /* ---------------------视频上传 ---------------------- */
         //上传前回调
         beforeUploadVideo(file) {
          var fileSize = file.size / 1024 / 1024 < 300;
          if (['video/mp4'].indexOf(file.type) == -1) {
              layer.msg("请上传正确的视频格式");
              return false;
          }
          if (!fileSize) {
              layer.msg("视频大小不能超过300MB");
              return false;
          }
          this.isShowUploadVideo = false;
        },
        //进度条
        uploadVideoProcess(event, file, fileList) {
          this.videoFlag = true;
          this.videoUploadPercent = file.percentage.toFixed(0) * 1;
        },
        //上传成功回调
        handleVideoSuccess(res, file) {
          this.isShowUploadVideo = true;
          this.videoFlag = false;
          this.videoUploadPercent = 0;
          
          //前台上传地址
          // if (file.status == 'success' ) {
          //    this.ruleForm.videoUrl = file.url;
          // } else {
          //     layer.msg("上传失败，请重新上传");
          // }

          //后台上传地址
          if (res.Code == 0) {
              this.ruleForm.videoUrl = res.Data;
          } else {
              layer.msg(res.Message);
          }
      }
      }
    }