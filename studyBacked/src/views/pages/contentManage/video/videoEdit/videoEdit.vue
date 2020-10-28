<template>
<div>
  <div class="mainIncrease">
    <div class="increaseTitle">{{userId?'视频编辑':'视频新增'}}</div>
    <el-form :model="ruleForm" :rules="ruleForm.type==0?rules:rules2" ref="ruleForm" label-width="80px" class="demo-ruleForm editForm">
      <div style="display: flex">
        <div class="fristRow">
          <el-form-item label="老师昵称:" prop="teacherName" class="fristRowLabel">
            <el-input v-model="ruleForm.teacherName" style="width: 100%;"></el-input>
          </el-form-item>
          <el-form-item label="标　　题:" prop="title">
            <el-input v-model="ruleForm.title" style="width: 100%;"></el-input>
          </el-form-item>
          <el-form-item label="所属年级:" prop="grade" class="fristRowLabel">
            <el-select v-model="ruleForm.grade" style="width: 100%;" placeholder="请选择">
              <el-option v-for="item in cont.grade" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属科目:" prop="subject" class="fristRowLabel">
            <el-select v-model="ruleForm.subject" style="width: 100%;" placeholder="请选择">
              <el-option v-for="item in cont.subject" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="分　　类:" prop="type">
            <el-select v-model="ruleForm.type" placeholder="请选择" style="width: 100%;">
              <el-option label="card视频" :value="0"></el-option>
              <el-option label="banner图" :value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="视频简介:" prop="intro">
            <el-input type="textarea" :rows="6" placeholder="请输入内容" maxlength="140" style="width: 100%;" show-word-limit v-model="ruleForm.intro">
            </el-input>
          </el-form-item>
        </div>
        <el-form-item label="头　　像:" prop="imageUrl" style="padding: 0 53px">
          <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
            <i v-else class="el-icon-upload avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </div>
      <el-form-item v-if="ruleForm.type==1" label="封　　面:" :required="ruleForm.type==1?true:false" prop="videoImage">
        <el-upload class="upload-demo" v-model="ruleForm.videoImage" :class="{hide:hideUploadVideo}" accept="image/*" ref="upload" :http-request="uploadFile" :file-list="fileLists" action="#" :on-change="handlePreview" :on-remove="handleRemove" :on-preview="handlePictureCardPreview" list-type="picture-card" :limit="1" :on-exceed="fileExceed" :auto-upload="true">
          <i class="el-icon-plus">
            <p>图片上传</p>
            <p>(上传文件在5M以内)</p>
          </i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="视频上传:" prop="videoUrl">
        <!-- <div class="upVideo">
          <p style="margin: 10px">
            <label>URL</label>
            <el-input v-model="ruleForm.videoUrl" style="width: 90%;margin: 10px" clearable></el-input>
          </p>
          <div v-if="ruleForm.videoUrl" class=" demo1-video">
            <video type="video/mp4" id="myVideo" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" :src="ruleForm.videoUrl">
            </video>
          </div>
        </div> -->
        <el-upload class="avatar-uploader" required action="上传地址" :data="{FoldPath:'上传目录',SecretKey:'安全验证'}" :on-progress="uploadVideoProcess" :on-success="handleVideoSuccess" :before-upload="beforeUploadVideo" :show-file-list="false">
          <video v-if="ruleForm.videoUrl !='' && !videoFlag" :src="ruleForm.videoUrl" class="avatar video-avatar" controls="controls">
            您的浏览器不支持视频播放
          </video>
          <i v-else-if="ruleForm.videoUrl =='' && !videoFlag" class="el-icon-upload2 avatar-uploader-icon"></i>
          <el-progress v-if="videoFlag == true" type="circle" :percentage="videoUploadPercent" style="margin-top:7px;"></el-progress>
        </el-upload>
      </el-form-item>
      <el-form-item label="正　　文:" prop="content">
        <quill-editor class="editor" ref="myTextEditor" :options="editorOption" v-model="ruleForm.content"></quill-editor>
      </el-form-item>
    </el-form>
    <div style="text-align:center">
      <el-button v-if="ruleForm.type==1" @click="resetForm('ruleForm')" type="success" :disabled="ruleForm.videoImage==''">保存</el-button>
      <el-button v-else-if="ruleForm.type==0" @click="resetForm('ruleForm')" type="success" :disabled="ruleForm.title==''||ruleForm.author==''||ruleForm.intro==''||ruleForm.content==''">保存</el-button>
      <el-button v-else type="success" @click="resetForm('ruleForm')" disabled>保存</el-button>
      <el-button>重置</el-button>
      <el-button @click="resetForm('ruleForm')">取消</el-button>
    </div>
  </div>
</div>
</template>

<script src="./videoEdit.vue.js"></script>

<style src="./videoEdit.vue.css"></style>
