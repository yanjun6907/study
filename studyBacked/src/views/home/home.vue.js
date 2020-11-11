
    export default {
        data() {
            return {
                roleName:sessionStorage.getItem('auth_name'),
                roles:'',
                fullscreen: false,
                collapse:false,
                showlrc: true,
                Menus: []//导航数据
            }
        },
        created(){     
            this.load.openFullScreen()
            this.getNav()
        },
        methods:{
            //动态导航   
            async getNav(){
                const {data:res} = await this.$http.getNavList()
                const {data:e} = await this.$http.getRoleRight()
                this.roles = e.data.roleName
                for(let i=0;i<e.data.permissionList.length;i++){
                    for (const key in res.data) { 
                        if(e.data.permissionList[i]==res.data[key].id){
                            this.Menus.unshift(res.data[key])    
                        }         
                    }
                }
                for(let i=0;i<e.data.permissionList.length;i++){
                    for (const k in this.Menus) { 
                        for (const x in this.Menus[k].children) { 
                            if(e.data.permissionList[i]==this.Menus[k].children[x].id) {    
                                this.Menus[k].children2.unshift(this.Menus[k].children[x]) 
                            }  
                        }  
                    } 
                }    
            },
            //注销
            goBack(){
                this.$confirm('是否要注销?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    sessionStorage.removeItem('auth_token')
                    sessionStorage.removeItem('auth_name')
                    this.cont.ruleForm2.name=''
                    this.cont.ruleForm2.password=''
                    this.$router.push('/')   
                    this.$message({type:'success',message:'注销成功',center: true}) 
                }).catch(() => {
                    this.$message({
                      type: 'info',
                      message: '已取消注销',
                      center: true
                    })         
                })   
            },
            //点击隐藏左侧菜单栏，
            collapseChage() {
                this.collapse = !this.collapse;
                if(this.collapse){
                    document.getElementById('aside').style.width=0+'px';
                }else {
                    setTimeout(() => {
                         document.getElementById('aside').style.width=180+'px';
                    }, 250);
                }       
            },
            //全屏显示
            handleFullScreen() {
                let ele = document.documentElement;
                if (this.fullscreen) {
                    if(document.exitFullScreen) {
                        document.exitFullScreen();
                    } else if(document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if(document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    } else if(element.msExitFullscreen) {
                        element.msExitFullscreen();
                    }
                } else {
                    if (ele.requestFullscreen) {
                        ele.requestFullscreen();
                    } else if (ele.mozRequestFullScreen) {
                        ele.mozRequestFullScreen();
                    } else if (ele.webkitRequestFullscreen) {
                        ele.webkitRequestFullscreen();
                    } else if (ele.msRequestFullscreen) {
                        ele.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;   
            }
        },
    }