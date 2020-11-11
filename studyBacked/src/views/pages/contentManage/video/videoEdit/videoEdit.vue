<template>
<div>
  <div class="mainIncrease">
    <div class="increaseTitle">{{userId?'视频编辑':'视频新增'}}</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="85px" class=" editForm">
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
          <el-form-item label="视频上传:" prop="videoUrl">
            <div style="display:flex;margin-bottom:10px">
              <el-upload class="video-uploader" ref="uploader" v-model="ruleForm.videoUrl" action="/api/a/m/common/upload" :headers="{'userToken':token}" :on-error="uploadEorror" :on-change="uploadchange" :on-success="F_uploadFile" :before-upload="beforeUploadVideo" :show-file-list="false">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
              <el-button style="margin-left: 25px;" size="small" type="danger" icon="el-icon-delete" circle @click="remove"></el-button>
            </div>
            <el-progress v-if='videoFlag' :percentage="videoUploadPercent" style="margin:10px auto"></el-progress>
            <video v-if='ruleForm.videoUrl' :src="ruleForm.videoUrl" class="avatar video-avatar" controls="controls" id="video">
              您的浏览器不支持视频播放
            </video>
          </el-form-item>
        </div>
        <div style=";display:flex;flex-direction: column;flex:4;">
          <el-form-item label="头　　像:" prop="teacherImage" style="padding: 0 60px">
            <el-upload class="avatar-uploader" v-model="ruleForm.teacherImage" action="#" :show-file-list="false" :on-error="uploadEorror" :before-upload="beforeExcelUpload" :http-request="T_uploadFile">
              <img v-if="ruleForm.teacherImage" :src="ruleForm.teacherImage" class="avatar">
              <i class="el-icon-upload"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="封　　面:" prop="videoImage" style="margin: 66px 60px">
            <el-upload class="upload-demo" v-model="ruleForm.videoImage" :class="{hide:hideUploadVideo}" accept="image/*" :on-error="uploadEorror" :before-upload="beforeExcelUpload" :http-request="V_uploadFile" :file-list="fileLists" action="#" :on-remove="handleRemove" :on-preview="handlePictureCardPreview" list-type="picture-card" :limit="1">
              <i class="el-icon-upload"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl">
            </el-dialog>
          </el-form-item>
        </div>
      </div>
      <el-form-item label="正　　文:" prop="content">
        <quill-editor class="editor" ref="myTextEditor" :options="editorOption" v-model="ruleForm.content"></quill-editor>
      </el-form-item>
    </el-form>
    <div style="text-align:center">
      <el-button @click="submitForm('ruleForm')" type="success" :disabled="ruleForm.grade==''||ruleForm.subject==''||ruleForm.type==null||ruleForm.videoUrl==''||ruleForm.videoImage==''||ruleForm.title==''||ruleForm.intro==''||ruleForm.teacherName==''||ruleForm.teacherImage==''||ruleForm.content==''">保存</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
      <el-button @click="goBack('ruleForm')">取消</el-button>
    </div>
  </div>
</div>
</template>

<script src="./videoEdit.vue.js"></script>

<style src="./videoEdit.vue.css"></style>
