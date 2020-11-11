import { Loading} from 'element-ui'
import input from '../content/content.js'
export default {
    //键盘事件
    keyDown(){
      document.onkeydown=function(e){
          var key=window.event.keyCode;
          if(key==13){
              document.getElementById('login').click();
          } 
      }
    },
    /*---------- 全局Loading ---------*/
    openFullScreen() {
      const loading = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.5)'
    });
    setTimeout(() => {
        loading.close();
      }, 800);
    },
    /* input框比大小 */
    inputEnd(){
      /* ------------逆袭豆----------- */
      let a = input.userSreach.beanStart;
      let b = input.userSreach.beanEnd;
      if(a!=''&&b!='') {
        if(a>b){
          input.userSreach.beanEnd = a
          input.userSreach.beanStart = b
        }
      } 
      /* --------热度------- */
      let c = input.treeHoleData.hotStart;
      let d = input.treeHoleData.hotEnd;
      if(c!=''&&d!='') {
        if(c>d){
          input.treeHoleData.hotEnd =c
          input.treeHoleData.hotStart =d
        }
      } 
      /* --------顶数------- */
      let e = input.treeHoleData.likeStart;
      let f = input.treeHoleData.likeEnd;
      if(e!=''&&f!='') {
        if(e>f){
          input.treeHoleData.likeEnd =e
          input.treeHoleData.likeStart =f
        }
      } 
      /* --------踩数------- */
      let g = input.treeHoleData.dislikeStart;
      let h = input.treeHoleData.dislikeEnd;
      if(g!=''&&h!='') {
        if(g>h){
          input.treeHoleData.dislikeEnd =g
          input.treeHoleData.dislikeStart =h
        }
      } 
      /* --------点赞数------- */
      let i = input.articleSearch.greatStart;
      let j = input.articleSearch.greatEnd;
      if(i!=''&&j!='') {
        if(i>j){
          input.articleSearch.greatEnd =i
          input.articleSearch.greatStart =j
        }
      }
      /* --------收藏数------- */
      let k = input.articleSearch.favouriteStart;
      let l = input.articleSearch.favouriteEnd;
      if(k!=''&&l!='') {
        if(k>l){
          input.articleSearch.favouriteEnd =k
          input.articleSearch.favouriteStart =l
        }
      }
      /* --------点赞数------- */
      let m = input.videoSearch.greatStart;
      let n = input.videoSearch.greatEnd;
      if(m!=''&&n!='') {
        if(m>n){
          input.videoSearch.greatEnd =m
          input.videoSearch.greatStart =n
        }
      }
      /* --------收藏数------- */
      let o = input.videoSearch.favouriteStart;
      let p = input.videoSearch.favouriteEnd;
      if(o!=''&&p!='') {
        if(o>p){
          input.videoSearch.favouriteEnd =o
          input.videoSearch.favouriteStart =p
        }
      }
    },
}