<template>
<div>
  <div class="mainCheck">
    <div class="increaseTitle">修改密码</div>
    <div class="mainCenter">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm ruleWidth">
        <el-form-item label="输入旧密码:" prop="oldPassword">
          <el-input type="password" v-model="ruleForm.oldPassword" clearable></el-input>
        </el-form-item>
        <el-form-item label="设置新密码:" prop="password">
          <el-input type="password" v-model="ruleForm.password" clearable></el-input>
        </el-form-item>
        <el-form-item label="确认新密码:" prop="checkPassword">
          <el-input type="password" v-model="ruleForm.checkPassword" clearable></el-input>
        </el-form-item>
        <el-form-item style="text-align:center">
          <el-button type="success" @click="submitForm('ruleForm')" :disabled="ruleForm.oldPassword==''||ruleForm.password==''||ruleForm.checkPassword==''">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</div>
</template>

<script src="./pswCheck.vue.js"></script>

<style src="./pswCheck.vue.css"></style>
