<template>
<div>
  <div class="MainIncrease">
    <div class="IncreaseTitle">
      文章查看 <el-button size="mini" @click="submitForm()">返回</el-button>
    </div>
    <div class="main">
      <img :src="ruleForm.letterImage">
      <div class="mainContent">
        <h1>{{ruleForm.title}}</h1>
        <div class="mainAthor">
          <span>作者:{{ruleForm.author}}</span>
          <span>时间:{{ruleForm.createAt | times}}</span>
        </div>
        <p v-html="ruleForm.content">{{ruleForm.content}}</p>
        <img :src="ruleForm.letterImage" style="border: 10px dashed rgb(199, 199, 199);width:80%;margin-left:7%;">
      </div>
    </div>
  </div>
</div>
</template>

<script src="./articleIncrease.vue.js"></script>

<style src="./articleIncrease.vue.css"></style>
