<template>
<div class="body">
  <el-aside width="180px" id="aside">
    <div id="navTitle">学渣管理系统</div>
    <el-menu mode="vertical" router class="el-menu-vertical-demo" :unique-opened="true" :collapse="collapse" background-color="rgba(0, 0, 0, 0)" text-color="#ccc" active-text-color="#000">
      <el-submenu :index="''+index" v-for="(item1,index) in Menus" :key="index">
        <template class="subTitle" slot="title"><i class="el-icon-s-operation"></i><span slot="title">{{item1.name}}</span></template>
        <el-menu-item :index="item2.url" v-for="(item2,index) in item1.children2" :key="index">{{item2.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container style="display:flex;">
    <el-header>
      <header class="header-nav">
        <el-row>
          <el-col :span="16" class='logo-container'>
            <div class="collapse-btn" @click="collapseChage">
              <i :class="collapse?'el-icon-s-unfold icon-btn':'el-icon-s-fold icon-btn'"></i>
            </div>
          </el-col>
          <el-col :span="7">
            <ul class="rgt">
              <li><a>{{roles}}</a></li>
              <li>
                <i class="el-icon-user"></i>
                <a>{{roleName}}</a>
              </li>
              <li>
                <a @click="goBack()" slot="reference">注销</a>
              </li>
            </ul>
          </el-col>
          <el-col :span="1" class="user">
            <div>
              <div class="btn-fullscreen" @click="handleFullScreen">
                <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                  <i class="el-icon-rank"></i>
                </el-tooltip>
              </div>
            </div>
          </el-col>
        </el-row>
      </header>
    </el-header>
    <el-main class="el-main">
      <router-view />
    </el-main>
  </el-container>
</div>
</template>

<script src='./home.vue.js'></script>

<style src='./home.vue.css'></style>
