<template>
<div>
  <div class="mainIncrease">
    <div class="increaseTitle">视频查看 <el-button size="mini" @click="resetForm()">返回</el-button>
    </div>
    <div class="main">
      <video :src="ruleForm.videoUrl" class="avatar video-avatar" controls="controls"></video>
      <div class="Content">
        <div class="Athor">
          <img :src="ruleForm.teacherImage" style=" width: 30px;height: 30px;margin-right: 10px;">
          <span>老师:{{ruleForm.teacherName}}</span>
          <span>时间:{{ruleForm.updateAt | times}}</span>
        </div>
        <p class="intro">{{ruleForm.intro}}</p>
        <p v-html="ruleForm.content">{{ruleForm.content}}</p>
        <img :src="ruleForm.videoImage" style="border: 10px dashed rgb(199, 199, 199);width:80%;margin-left:7%;">
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script src='./videoInrease.vue.js'></script>

<style src='./videoInrease.vue.css'></style>
