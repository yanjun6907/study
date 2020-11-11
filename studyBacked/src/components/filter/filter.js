import moment from 'moment'//时间戳格式化
   const filters = {
      times:function(dateStr,pattern='YYYY-MM-DD'){
         return moment(dateStr).format(pattern);
      },
      status: function(val) {
         if(val==0){
            return '正常'
         }
         else if(val==1) {
            return '冻结'
         }       
      },
      status2: function(val) {
         if(val==1){
            return '上架'
         }else if(val==0) {
            return '下架'
         }
         
      },
      status3: function(val) {
         if(val==1){
            return 'banner文章'
         }
         else if(val==0){
            return 'card文章'
         } 
      },
      status4: function(val) {
         if(val==1){
            return '语文'
         }
         else if(val==2){
            return '数学'
         }
         else if(val==3){
            return '英语'
         } 
         else if(val==4){
            return '物理'
         } 
         else if(val==5){
            return '化学'
         } 
         else if(val==6){
            return '生物'
         }  
      },
      status5: function(val) {
         if(val==7){
            return '初一'
         }
         else if(val==8){
            return '初二'
         }
         else if(val==9){
            return '初三'
         } 
         else if(val==10){
            return '高一'
         } 
         else if(val==11){
            return '高二'
         } 
         else if(val==12){
            return '高三'
         }  
      },
      status6: function(val) {
         if(val==1){
            return 'banner图'
         }
         else if(val==0){
            return 'card视频'
         } 
      },
      status7(val) {
         const roles = JSON.parse(sessionStorage.getItem('roles')) 
         var id;
         for (const i in roles) {
            if (val==roles[i].id) {
               id = roles[i].id
               return roles[i].name    
            }
         }
         if(val==''||val!=id){
            return '无'
         }
      },
      status8: function(val) {
         if(val==10||val==11||val==12){
            return '高中部'
         }
         else if(val==7||val==8||val==9){
            return '初中部'
         } 
      },
      status9: function(val) {
         if(val==1){
            return '精华'
         }else {
            return '——'
         }
        
      },
      status10: function(val) {
         if(val==1){
            return '置顶'
         }else {
            return '——'
         } 
      },
   }

export default filters