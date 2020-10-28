<template>
<div>
  <div class="meu-top">
    <span class="list-title">
      查看帖子
    </span>
    <div class="mainContent">
      <p>{{readTopic.title}}</p>
      <div class="userInfo">
        <img :src="readUser.head" style="width:50px;height:50px">
        <div class="userName">
          <div style="font-size: 17px;">{{readUser.nickName}}</div>
          <div style="font-size: 12px;color:gray;">{{readUser.createAt|times}}</div>
        </div>
      </div>
      <p style="border:none;font-size: 14px;line-height: 20px;">{{readTopic.content}}</p>
      <div class="image"><img :src="readTopic.img"></div>
    </div>
  </div>
  <div class="meu-bottom">
    <span class="list-title">
      全部评论({{pages.totalSize}})
    </span>
    <el-table :data="table" style="width: 100%;" border>
      <el-table-column label="序号" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.$index+1}}楼</span>
        </template>
      </el-table-column>
      <el-table-column label="评论者" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.nickName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="评论" align="center" width="300" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{ scope.row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="text" icon="el-icon-delete" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 10px;text-align: center">
      <el-pagination :background="true" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pages.page" :page-sizes="[1,2,3,4,5,6,7,8,9,10, 20, 30, 40]" :page-size="pages.size" layout=" sizes, prev, pager, next, jumper" :total="pages.totalSize">
      </el-pagination>
    </div>
  </div>
</div>
</template>

<script src="./leaveEdit.vue.js"></script>

<style src="./leaveEdit.vue.css"></style>
