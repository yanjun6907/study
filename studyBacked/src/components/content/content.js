//编辑器
const editor = {modules:{toolbar:[['bold', 'italic', 'underline', 'strike'],['blockquote', 'code-block'],[{ 'header': 1 }, { 'header': 2 }],[{ 'script': 'sub'}, { 'script': 'super' }],[{ 'indent': '-1'}, { 'indent': '+1' }],[{ 'color': [] }, { 'background': [] }],[{ 'align': [] }],]}}
/* -----------------下拉框常量------------------- */
const subject = [{value: 1,label:'语文'},{value: 2,label:'数学'},{value: 3,label:'英语'},{value: 4,label:'物理'},{value: 5,label:'化学'},{value: 6,label:'生物'}]
const videoType = [{value: 0,label: 'card视频'},{value: 1,label: 'banner图'}]
const essence = [{value: 2,label: '普通'},{value: 1,label: '精华'}]
const department = [{value: 2,label: '初中部'},{value: 1,label: '高中部'}]
const grade = [{value: 7,label:'初一'},{value: 8,label:'初二'},{value: 9,label:'初三'},{value: 10,label:'高一'},{value: 11,label:'高二'},{value: 12,label:'高三'}]
const Status = [{value: 0,label:'正常'},{value: 1,label:'冻结'}]
const Status2 = [{value: 1,label:'上架'},{value: 0,label:'下架'}]
const Type = [{value: 0,label: 'card文章'},{value: 1,label: 'banner文章'}] 
/* ------------分页参数------------- */
const pages = {totalPage:null,totalSize:null,size:10,page:1}
/* ------------用户管理------------- */
//用户列表
const userTable = [{id:'',gravatar:'',nickName:'',email:'',phone:'',bean:'',grade:'',location:'',status:''}]
//用户查询
const userSreach = { page:1,size:5,id:'',nickName:'',email:'',phone:'',bean:'',beanStart:'',beanEnd:'',grade:'',status:'',beanStatus:''}
//用户详情
const userData = { id:'',head:'',nickName:'',email:'',phone:'',bean:'',grade:''}
/*-------------视频管理------------- */
//视频列表
const videoTable = [{id:'',title:'',grade:'',type:'',subject:'',teacherName:'',favourite:'',great:'',status:'',updateAt:''}]
//条件查询
const videoSearch = {page:1,size:10,title:'',grade:'',type:'',subject:'',teacherName:'',favouriteStart:'',favouriteEnd:'',greatStart:'',greatEnd:'',status:''}
//视频详情
const videoData = {id:'',teacherImage:'',title:'',grade:'',type:'',subject:'',teacherName:'',intro:'',video:'',content:'',}
/*------------------ 文章管理------------------ */
//文章详情
const articleData = {id:'',title:'',letterImage:'',type:'',author:'',content:'',updateAt:''}
//文章列表   
const articleTable = [ {id:'',title:'',type:'',author:'',favourite:'',favouriteStart:'',favouriteEnd:'',status:'',updateAt:''}]
//条件查询   
const articleSearch = {id:'',page:1,size:10,title:'',type:'',author:'',favouriteStart:'',favouriteEnd:'',greatStart:'',greatEnd:'',status:'',updateAt:''}  
/*------------------ 公告管理------------------ */
//公告列表
const bulletinList = [{id:'',title:'',createBy:'',createAt:'',updateAt:'',status:''}]
//公告搜索
const bulletinSreach = {title:'',page:'',size:''}
//新增公告
const bulletinData = {id:'',title:'',content:''}
/*------------------ 树洞管理------------------ */
//树叶列表
const treeHoleTable = [{id:'',content:'',like:'',dislike:'',hot:'',createAt:'',updateAt:'',createBy:'',updateBy:''}]
//条件查询
const treeHoleData = {id:'',page:1,size:10,createStart:'',createEnd:'',hotStart:'',hotEnd:'',likeStart:'',likeEnd:'',dislikeStart:'',dislikeEnd:''}
/*------------------ 帖子管理------------------ */
//帖子列表
const leaveTable =[{id:'',content:'',nickName:'',grade:'',readNum:'',remarkNum:'',essence:'',top:''}]
//条件查询
const leaveSearch = {page:1,size:10,title:'',status:'',grade:'',nickName:'',createStart:'',createEnd:''}
//评论列表
const remarkTable = [{id:'',content:'',nickName:''}]
/*---------------- 账户管理------------------ */
//账号管理
const manageTable = [ { id:'',name:'',roleId:''}]
//账号编辑
const manageData = {  id:'',name:'',roleId:'',password:'',page:pages.page,size:pages.size}
/* -----------------角色管理------------------- */
//角色列表
const roleTable = [{id:'',name:'',}]
//角色权限信息
const roleData = {name:'',permissionList:[{id:'',name:'',pid:'',permission:''}]}
/* -------------------模块管理------------------ */
//模块列表
const moduleTable = [{id:'',name:'',icon:'',url:'',pUrl:'',parentId:'',menuId:''}]
//模块编辑
const moduleData = {id:'',name:'',menuId:'',url:'',pUrl:'',parentId:'',icon:''}
/*-------------- articleEdit 验证---------------- */
const ruleForm = {title: '',type: '',author: '',content: '',letterImage:''}
const  rules = {title: [{ required: true, message: '内容不为空', trigger: 'blur' },{ min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }],type: [{ required: true, message: '请选择活动区域', trigger: 'blur' }],author: [{  required: true, message: '内容不为空', trigger: 'change' },{ min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'change' }],content: [{ required: true, message: '内容不为空', trigger: 'change' }],letterImage: [{ required: true, message: '内容不为空', trigger: 'change' },]}
/*------------------ 登录验证------------------ */
const ruleForm2 = {name: '',password: '',}  
const rules2 = {name: [{required: true, message: '请输入账号', trigger: 'blur'}],password: [{required: true, message: '请输入密码', trigger: 'blur'}]}
/* -------------------修改密码确认验证 -------------------*/
var checkAge = (rule, value, callback) => {if (!value) {return callback(new Error('密码不能为空'))}else {callback()}}
var validatePass = (rule, value, callback) => {if (value === '') {callback(new Error('请输入密码'))} else {callback()}}
var validatePass2 = (rule, value, callback) => {if (value === '') {callback(new Error('请再次输入密码'));} else if (value !== ruleForm3.password) {callback(new Error('两次输入密码不一致!'))} else {callback()}}
const ruleForm3 = {password: '',checkPassword: '',oldPassword: ''}
const rules3 = {password: [{ validator: validatePass, trigger: 'blur' },{ min:6, max:20, message: '请输入大于6个字符不超过20个字符', trigger: 'blur' },{pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,message:'密码格式错误',trigger: 'blur'}],checkPassword: [{ validator: validatePass2, trigger: 'blur' },],oldPassword: [{ validator: checkAge, trigger: 'blur' }]}
/* ----------------------videoEdit 验证 --------------------------*/
const ruleForm4 = {teacherImage:'',title:'',grade:'',type:'',subject:'',teacherName:'',intro:'',videoImage:'',videoUrl:'',content:''}
const  rules4 = {title: [{ required: true, message: '内容不为空', trigger: 'change' },{ min: 3, max: 40, message: '长度在 3 到 40 个字符', trigger: 'change' }],type: [{ required: true, message: '请选择活动区域', trigger: 'change'}],teacherImage: [{ required: true, message: '请选择活动区域', trigger: 'change' }],videoImage: [{  required: true, message: '内容不为空', trigger: 'change'},],grade: [{  required: true, message: '内容不为空', trigger: 'change'},],subject: [{  required: true, message: '内容不为空', trigger: 'bchange'},],content: [{ required: true, message: '内容不为空', trigger: 'change' }],teacherName: [{ required: true, message: '内容不为空', trigger: 'change'},{ min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'change' }],intro: [{ required: true, message: '内容不为空', trigger: 'change' },{ min: 0, max: 140, message: '长度在 0 到 140 个字符', trigger: 'change'}],videoUrl: [{ required: true, message: '内容不为空', trigger: 'change' }]}
const ruleForm6 = {id:'',name:'',roleId:'',password:''}
const rules6 = {name: [{ min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'change' } ,{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:'用户名格式错误',trigger: 'change'}],password: [{ min:6, max:20, message: '请输入大于6个字符不超过20个字符', trigger: 'change' }, {pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,message:'密码格式错误',trigger: 'change'}]}
export default {
    grade,
    Status,
    Status2,
    userTable,
    userData,
    userSreach,
    articleData,
    articleTable,
    articleSearch,
    roleTable,
    manageTable,
    manageData,
    videoTable,
    videoData,
    videoType,
    videoSearch,
    treeHoleTable,
    treeHoleData,
    leaveTable,
    leaveSearch,
    subject,
    essence,
    department,
    remarkTable,
    roleData,
    moduleTable,
    moduleData,
    Type,
    pages,
    editor,
    bulletinList,
    bulletinData,
    bulletinSreach,
    ruleForm,
    rules,
    ruleForm2,
    rules2,
    ruleForm3,
    rules3,
    ruleForm4,
    rules4,
    ruleForm6,
    rules6
}