
import axios from 'axios'
import qs from 'qs'
//创建axios对象
const http = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 3 * 1000
})
//请求拦截器
http.interceptors.request.use(config => {
    // config.data = qs.stringify(config.data); //数据转化,也可以使用qs转换
    let token = window.sessionStorage.getItem("auth_token")
    if (token) {
      config.headers.userToken = token;  
      return config  
    }
    config.headers = {
      'Content-Type': 'application/json' //配置请求头
    }
    return config
  }, error => {
    Promise.reject(error)
  })

export default {
   /* ----------------动态导航----------------- */
    getNavList(){
      return http.get(`/api/a/m/common/nav/list`)
    },
  /* ----------------用户管理----------------- */
  //用户列表
    postUserList(params){
      return http.post(`/api/a/m/userManager/list`,qs.stringify(params))
    },
  //用户详情
    getUserEdit(params){
      return http.get(`/api/a/m/userManager/${params}`)
    }, 
  //用户冻结
    putUser(params){
      return http.put(`/api/a/m/userManager?${params}`)
    },
  /* ------------------ 文学部 ------------------- */
  //文章列表
    postArticleList(params){
      return http.post(`/api/a/m/article/list`,qs.stringify(params))
    },
  //文章新增
    postArticleEdit(params){
      return http.post(`/api/a/m/article`,qs.stringify(params))
    },
  //文章编辑
    putArticleEdit(params){
      return http.put(`/api/a/m/article`,qs.stringify(params))
    },
  //上下架
    articleStatus(params){
      return http.put(`/api/a/m/article/status?${params}`)
    },  
  //获取文章详情
    getArticleEdit(params){
      return http.get(`/api/a/m/article/${params}`)
    },
  //文章删除
    delArticle(params){
      return http.delete(`/api/a/m/article/${params}`)
    },

  /* -------------------影像部--------------------- */
  //视频列表
    postVideoList(params){
      return http.post(`/api/a/m/video/list`,qs.stringify(params))
    },
  //视频新增
    postVideoEdit(params){
      return http.post(`/api/a/m/video`,qs.stringify(params))
    },
  //视频编辑
    putVideoEdit(params){
      return http.put(`/api/a/m/video`,qs.stringify(params))
    },
  //上下架
    videoStatus(params){
      return http.put(`/api/a/m/video/status?${params}`)
    },  
  //获取视频详情
    getVideoEdit(params){
      return http.get(`/api/a/m/video/${params}`)
    },
  //视频删除
    delVideo(params){
      return http.delete(`/api/a/m/video/${params}`)
    },
  /* ------------------公告管理------------------- */
  //公告列表
    postNoticeList(params){
      return http.post(`/api/a/m/notice/list`,qs.stringify(params))
    },
  //公告详情
    getNoticeEdit(params){
      return http.get(`/api/a/m/notice/${params}`)
    },
  //公告新增
    postNoticeEdit(params){
      return http.post(`/api/a/m/notice`,qs.stringify(params))
    },
  //公告编辑
    putNoticeEdit(params){
      return http.put(`/api/a/m/notice`,qs.stringify(params))
    },
  //公告删除
    deleteNotice(params){
      return http.delete(`/api/a/m/notice/${params}`)
    },
  //上/下架
    putNotice(params){
      return http.put(`/api/a/m/notice/status?${params}`)
    },
  /* -------------------树洞管理------------------- */
  //树洞列表
    postTreeList(params){
      return http.post(`/api/a/m/hole/list`,qs.stringify(params))
    },
  //树洞删除
    deleteTree(params){
      return http.delete(`/api/a/m/hole/${params}`)
    },
  /* -------------------留言板------------------- */
  //留言列表
    postLeaveList(params){
      return http.post(`/api/a/m/topic/list`,qs.stringify(params))
    },
  //留言板详情
    getLeaveArticle(params){
      return http.get(`/api/a/m/topic/${params}`)
    },
  //评论列表
    postLeaveremark(params){
      return http.post(`/api/a/m/topic/remark/list?${params}`)
    },
  //留言板删除
    deleteLeave(params){
      return http.delete(`/api/a/m/topic/${params}`)
    },
  //评论删除
    deleteRemark(params){
      return http.delete(`/api/a/m/topic/remark/${params}`)
    },
  //留言板状态
    putLeaveEssence(params){
      return http.put(`/api/a/m/topic/essence?${params}`)
    }, 
    putLeaveTop(params){
      return http.put(`/api/a/m/topic/top?${params}`)
    }, 
  /* ------------------ 账号管理 ------------------- */  
  //账户列表
    getAccountList(params){
      return http.get(`/api/a/m/manager/list?${params}`)
    },
  //条件查询
    getAccountSearch(params){
      return http.get(`/api/a/m/manager/search?${params}`)
    },
  //查看详情
    getAccountEdit(params){
      return http.get(`/api/a/m/manager/${params}`)
    }, 
  //用户新增
    postAccountEdit(params){
      return http.post(`/api/a/m/manager`,qs.stringify(params))
    },
  //用户编辑
    putAccountEdit(params){
      return http.put(`/api/a/m/manager`,qs.stringify(params))
    },
  //获取下拉框数据
    getAccountSelect(){
      return http.get(`/api/a/m/common/role/list`)
    },
  //删除用户
    deleteAccount(params){
      return http.delete(`/api/a/m/manager/${params}`)
    },
  /* ------------------ 角色管理 ------------------- */
  //角色列表
    getRoleList(params){
      return http.get(`/api/a/m/role/list?${params}`)
    },
  //角色删除
    deleteRole(params){
      return http.delete(`/api/a/m/role/${params}`)
    },
  //获取详情
    getRoleEdit(params){
      return http.get(`/api/a/m/role/${params}`)
    },
  //角色新增
    postRoleEdit(params){
      return http.post(`/api/a/m/role?${params}`)
    },
  //角色编辑
    putRoleEdit(params){
      return http.put(`/api/a/m/role?${params}`)
    },
  //权限列表
    getRoleRight(){
      return http.get(`/api/a/m/common/permission/list`)
    },
  /* ------------------登录------------------ */
    postLogin(params){
      return http.post(`/api/a/admin/login?${params}`)
    },
  /* ----------------修改密码----------------- */
    postCheck(params){
      return http.post(`/api/a/m/password?${params}`)
    },
  /* --------------模块管理--------------- */
  //模块列表
    getModuleList(params){
      return http.get(`/api/a/m/module/list?${params}`)
    },
  //模块详情
    getModuleEdit(params){
      return http.get(`/api/a/m/module/${params}`)
    },
  //模块删除
    deleteModule(params){
      return http.delete(`/api/a/m/module/${params}`)
    },
  //模块新增
    postModuleEdit(params){
      return http.post(`/api/a/m/module`,params)
    },
  //模块编辑
    putModuleEdit(params){
      return http.put(`/api/a/m/module`,params)
    }  
    
}