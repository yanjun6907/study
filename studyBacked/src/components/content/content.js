
/* -----------------下拉框常量------------------- */
//编辑器
const editor = {
    modules:{
        toolbar:[
          ['bold', 'italic', 'underline', 'strike'],      
          ['blockquote', 'code-block'],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'script': 'sub'}, { 'script': 'super' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'align': [] }],            
        ]
    }
}
const teacher=[]
const subject = [

    {
        value: 1,
        label:'语文'
    },
    {
        value: 2,
        label:'数学'
    },
    {
        value: 3,
        label:'英语'
    },
    {
        value: 4,
        label:'物理'
    },
    {
        value: 5,
        label:'化学'
    },
    {
        value: 6,
        label:'生物'
    }
]
const videoType = [
 
    {
        value: 0,
        label: 'card视频'
    },
    {
        value: 1,
        label: 'banner图'
    }
]
const essence = [
    {
        value: 2,
        label: '普通'
    },
    {
        value: 1,
        label: '精华'
    }
]
const department = [

    {
        value: 2,
        label: '初中部'
    },
    {
        value: 1,
        label: '高中部'
    }
]
const grade = [

    {
        value: 7,
        label:'初一'
    },
    {
        value: 8,
        label:'初二'
    },
    {
        value: 9,
        label:'初三'
    },
    {
        value: 10,
        label:'高一'
    },
    {
        value: 11,
        label:'高二'
    },
    {
        value: 12,
        label:'高三'
    }
]
const Status = [
    {
        value: 1,
        label:'正常'
    },
    {
        value: 0,
        label:'冻结'
    }
]
const Status2 = [
 
    {
        value: 0,
        label:'上架'
    },
    {
        value: 1,
        label:'下架'
    }
]
const Type = [

    {
        value: 1,
        label: 'card文章'
    },
    {
        value: 0,
        label: 'banner文章'
    }
]
 
/* ------------分页参数--------------- */
const pages = {
    totalPage:null,
    totalSize:null,
    size:10,
    page:1
}

/* ------------用户管理------------- */

//用户列表
const userTable = [ 
    {
        id:'',
        gravatar:'',
        nickName:'',
        email:'',
        phone:'',
        bean:'',
        grade:'',
        location:'',
        status:''
    }
]
//用户查询
const userSreach = { 
    page:1,
    size:5,
    id:'',
    nickName:'',
    email:'',
    phone:'',
    bean:'',
    beanStart:'',
    beanEnd:'',
    grade:'',
    status:'',
    beanStatus:'',
}
//用户详情
const userData = { 
        id:'',
        head:'',
        nickName:'',
        email:'',
        phone:'',
        bean:'',
        grade:'',
    }

/*---------------------视频管理----------------- */

//视频列表
const videoTable = [
    {
        id:'',
        title:'',
        grade:'',
        type:'',
        subject:'',
        teacherName:'',
        favourite:'',
        like:'',
        status:'',
        updateAt:'',
        author:''
    }
]
//条件查询
const videoSearch = {
    page:1,
    size:10,
    title:'',
    grade:'',
    type:'',
    subject:'',
    teacherName:'',
    favouriteStart:'',
    favouriteEnd:'',
    likeStart:'',
    likeEnd:'',
    status:'',
}
//视频详情
const videoData = {
        id:'',
        teacherUrl:'',
        title:'',
        grade:'',
        type:'',
        subject:'',
        teacherName:'',
        intro:'',
        video:'',
        content:'',
    }

/*------------------ 文章管理------------------ */

//文章详情
const articleData = {
        id:'',
        title:'',
        articleImage:'',
        type:'',
        author:'',
        intro:'',
        content:''
    }
//文章列表   
const articleTable = [ 
    {
        id:'',
        title:'',
        type:'',
        author:'',
        intro:'',
        favourite:'',
        favouriteStart:'',
        favouriteEnd:'',
        like:'',
        likeStart:'',
        likeEnd:'',
        status:'',
        createAt:'',
    }  
]
//条件查询   
const articleSearch = {
        id:'',
        page:1,
        size:10,
        title:'',
        type:'',
        author:'',
        favourite:'',
        favouriteStart:'',
        favouriteEnd:'',
        like:'',
        likeStart:'',       
        likeEnd:'',
        status:'',
        createAt:'',
    }  

/*------------------ 公告管理------------------ */
//公告列表
const bulletinList = [
    {
        id:'',
        title:'',
        createBy:'',
        createAt:'',
        updateAt:'',
        status:''
    }
]
//公告搜索
const bulletinSreach = {
        title:'',
        page:'',
        size:''
    }

//新增公告
const bulletinData = {
        id:'',
        title:'',
        content:'',    
    }

/*------------------ 树洞管理------------------ */

//树叶列表
const treeHoleTable = [
    {
        id:'',
        content:'',
        like:'',
        dislike:'',
        hot:'',
        createAt:'',
        updateAt:'',
        createBy:'',
        updateBy:''   
    }
]
//条件查询
const treeHoleData = {
    id:'',
    page:1,
    size:10,
    createStart:'',
    createEnd:'',
    hotStart:'',
    hotEnd:'',
    likeStart:'',
    likeEnd:'',
    dislikeStart:'',
    dislikeEnd:''
}

/*------------------ 帖子管理------------------ */

//帖子列表
const leaveTable =[
    {
        id:'',
        content:'',
        nickName:'',
        grade:'',
        readNum:'',
        remarkNum:'',
        essence:'',
        top:'',
    }
]
//条件查询
const leaveSearch = {
    page:1,
    size:10,
    title:'',
    status:'',
    grade:'',
    nickName:'',
    createStart:'',
    createEnd:'',
    sortByRead:'',
    sortByReplay:''
}

//评论列表
const remarkTable = [
    {
        id:'',
        content:'',
        nickName:'',
    }
]

/*---------------- 账户管理------------------ */
 
//账号管理
const manageTable = [ 
    { 
        id:'',
        name:'',
        roleId:'',
    }
]
//账号编辑
const manageData = {  
        id:'',
        name:'',
        roleId:'',
        password:'',
        page:pages.page,
        size:pages.size
    }

/* -----------------角色管理------------------- */
//角色列表
const roleTable = [
    {
        id:'',
        name:'',
    }
]
//角色权限信息
const roleData = {
    name:'',
    permissionList:[
        {
            id:'',
            name:'',
            pid:'',
            permission:''
        }
    ]
}

/* -------------------模块管理------------------ */
//模块列表
const moduleTable = [
    {
        id:'',
        name:'',
        icon:'',
        url:'',
        pUrl:'',
        parentId:'',
        menuId:'',
    }
]
//模块编辑
const moduleData = {
    id:'',
    name:'',
    menuId:'',
    url:'',
    pUrl:'',
    parentId:'',
    icon:'',
}
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
    teacher,
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
    bulletinSreach
}