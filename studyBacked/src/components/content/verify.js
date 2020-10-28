
/*-------------- articleEdit 验证---------------- */
const ruleForm = {
    title: '',
    type: '',
    intro: '',
    author: '',
    content: '',
    articleImage:''
  }
const  rules = {
    title: [
      { required: true, message: '内容不为空', trigger: 'blur' },
      { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
    ],
    type: [
      { required: true, message: '请选择活动区域', trigger: 'blur' }
    ],
    intro: [
      {  required: true, message: '内容不为空', trigger: 'blur' },
      { min: 3, max: 28, message: '长度在 3 到 28 个字符', trigger: 'blur' }
    ],
    author: [
      {  required: true, message: '内容不为空', trigger: 'blur' },
      { min: 3, max: 14, message: '长度在 3 到 14 个字符', trigger: 'blur' }
    ],
    content: [
      { required: true, message: '内容不为空', trigger: 'change' },     
    ],
    articleImage: [
        { required: true, message: '内容不为空', trigger: 'change' },     
    ]
  }

/*------------------ 登录验证------------------ */
const ruleForm2 = {
  name: '',
  password: '',
}  
const rules2 = {
    name: [{required: true, message: '请输入账号', trigger: 'blur'}],
    password: [{required: true, message: '请输入密码', trigger: 'blur'}]
}

/* -------------------修改密码确认验证 -------------------*/
var checkAge = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('密码不能为空'));
  }else {
    callback()
  }
}
var validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    callback();
  }
}
var validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'));
  } else if (value !== ruleForm3.password) {
    callback(new Error('两次输入密码不一致!'));
  } else {
    callback();
  }
}
const ruleForm3 = {
  password: '',
  checkPassword: '',
  oldPassword: ''
}
const rules3 = {
  password: [
    { validator: validatePass, trigger: 'blur' },
    { min:6, max:20, message: '请输入大于6个字符不超过20个字符', trigger: 'blur' },
    {pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,message:'密码格式错误',trigger: 'blur'}
  ],
  checkPassword: [
    { validator: validatePass2, trigger: 'blur' },
    
  ],
  oldPassword: [
    { validator: checkAge, trigger: 'blur' },
  ]
}


/* ----------------------videoEdit 验证 --------------------------*/
const ruleForm4 = {
  id:'',
  teacherUrl:'',
  title:'',
  grade:'',
  type:'',
  subject:'',
  teacherName:'',
  intro:'',
  videoImage:'',
  videoUrl:'',
  content:'',
  imageUrl:''
}
const  rules4 = {
  title: [
    { required: true, message: '内容不为空', trigger: 'change' },
    { min: 3, max: 40, message: '长度在 3 到 40 个字符', trigger: 'change' }
  ],
  type: [
    { required: true, message: '请选择活动区域', trigger: 'change' }
  ],
  grade: [
    {  required: true, message: '内容不为空', trigger: 'change' },
  ],
  subject: [
    {  required: true, message: '内容不为空', trigger: 'bchange' },
  ],
  content: [
    { required: true, message: '内容不为空', trigger: 'change' },     
  ],
  teacherName: [
      { required: true, message: '内容不为空', trigger: 'change' },     
  ],
  imageUrl: [
    { required: true, message: '内容不为空', trigger: 'change' },     
],
  intro: [
    { required: true, message: '内容不为空', trigger: 'change' },
    { min: 0, max: 140, message: '长度在 0 到 140 个字符', trigger: 'change' }     
  ],
  videoUrl: [
    { required: true, message: '内容不为空', trigger: 'change' }, 
    {pattern:/^.*\.(mp|MP)4$/,message:'请输入MP4格式的视频',trigger: 'change'}    
  ]
}
const  rules5 = {
  title: [
    { required: false, message: '内容不为空', trigger: 'blur' },
    { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
  ],
  type: [
    { required: false, message: '请选择活动区域', trigger: 'blur' }
  ],
  grade: [
    {  required: false, message: '内容不为空', trigger: 'blur' },
  ],
  subject: [
    {  required: false, message: '内容不为空', trigger: 'blur' },
  ],
  content: [
    { required: false, message: '内容不为空', trigger: 'blur' },     
  ],
  teacherName: [
      { required: false, message: '内容不为空', trigger: 'blur' },     
  ],
  imageUrl: [
    { required: false, message: '内容不为空', trigger: 'blur' },     
],
  intro: [
    { required: false, message: '内容不为空', trigger: 'blur' },  
    { min: 0, max: 140, message: '长度在 0 到 140 个字符', trigger: 'blur' }     
  ],
  videoUrl: [
    { required: false, message: '内容不为空', trigger: 'blur' },  
    {pattern:/^.*\.(mp|MP)4$/,message:'请输入MP4格式的视频',trigger: 'blur'}     
  ]
}
const ruleForm6 = {
  id:'',
  name:'',
  roleId:'',
  password:'',
}

const rules6 = {
  name: [
    // { required: true, message: '内容不为空', trigger: 'blur' },  
    { min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'change' } ,
    {pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:'用户名格式错误',trigger: 'change'}      
  ],
  password: [
    // { required: true, message: '内容不为空', trigger: 'blur' }, 
    { min:6, max:20, message: '请输入大于6个字符不超过20个字符', trigger: 'change' }, 
    {pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,message:'密码格式错误',trigger: 'change'}    
  ],
}
  export default {
    ruleForm,
    rules,
    ruleForm2,
    rules2,
    ruleForm3,
    rules3,
    ruleForm4,
    rules4,
    rules5,
    ruleForm6,
    rules6
  }