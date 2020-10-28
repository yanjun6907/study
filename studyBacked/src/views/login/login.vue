<template>
<div>
  <div class="login-container">

    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-page">
      <el-form-item>
        <div class="round"></div>
        <p class="title">学渣后台登录</p>
      </el-form-item>
      <el-form-item prop="name">
        <el-input type="text" v-model="ruleForm2.name" placeholder="用户名" prefix-icon="el-icon-user" clearable></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm2.password" placeholder="密码" prefix-icon="el-icon-unlock" clearable></el-input>
      </el-form-item>
      <!-- <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox> -->
      <el-form-item style="width:100%">
        <el-button class="btn" id="login" type="primary" @click="handleSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script src='./login.vue.js'></script>

<style src='./login.vue.css'></style>
