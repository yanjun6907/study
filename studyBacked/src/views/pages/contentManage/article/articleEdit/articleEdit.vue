<template>
<div>
  <div class="MainIncrease">
    <div class="IncreaseTitle">
      {{articleId?'视频新增':'文章新增'}}
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="60px" class=" editForm">
      <el-form-item label="标题:" prop="title">
        <el-input v-model="ruleForm.title" style="width:50%;"></el-input>
      </el-form-item>
      <el-form-item label="作者:" prop="author">
        <el-input v-model="ruleForm.author" style="width:50%;"></el-input>
      </el-form-item>
      <el-form-item label="分类:" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择活动区域" style="width:50%;">
          <el-option label="card文章" :value="0"></el-option>
          <el-option label="banner文章" :value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="封面:" required prop="letterImage">
        <el-upload class="upload-demo" v-model="ruleForm.letterImage" :before-upload="beforeExcelUpload" :class="{hide:hideUploadArticle}" accept="image/*" :on-error="uploadEorror" :http-request="uploadFile" :file-list="fileLists" action="#" :on-remove="handleRemove" :on-preview="handlePictureCardPreview" list-type="picture-card" :limit="1">
          <i class="el-icon-upload"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="内容:" prop="content">
        <quill-editor class="editor" ref="myTextEditor" :options="editorOption" v-model="ruleForm.content"></quill-editor>
      </el-form-item>
    </el-form>
    <div style="text-align:center">
      <el-button type="success" @click="submitForm('ruleForm')" :disabled="ruleForm.title==''||ruleForm.letterImage==''||ruleForm.author==''||ruleForm.content==''">保存</el-button>
      <el-button style="marign:0 10px;" @click="resetForm('ruleForm')">重置</el-button>
      <el-button @click="goBack('ruleForm')">取消</el-button>
    </div>
  </div>
</div>
</template>

<script src="./articleEdit.vue.js"></script>

<style src="./articleEdit.vue.css"></style>
