<template>
<div>
  <div class="meu-top">
    <div style="display:flex">
      <label>时 间: <el-date-picker v-model="input.createStart" type="date" placeholder="开始日期" :picker-options="pickerOptions0" style="width: 200px;">
        </el-date-picker> ~
        <el-date-picker v-model="input.createEnd" type="date" placeholder="结束日期" :picker-options="pickerOptions1" style="width: 200px;">
        </el-date-picker>
      </label>
      <label style="justify-content: flex-end;">热 度:
        <el-input v-model="input.hotStart" type="number" style="width: 200px;" @change="load.inputEnd()"></el-input> ~ <el-input v-model="input.hotEnd" type="number" style="width: 200px;" @change="load.inputEnd()"></el-input>
      </label>
    </div>
    <div style="display:flex">
      <label>顶 数: <el-input v-model="input.likeStart" type="number" @change="load.inputEnd()" style="width: 200px;"></el-input> ~ <el-input v-model="input.likeEnd" type="number" style="width: 200px;" @change="load.inputEnd()"></el-input></label>
      <label style="justify-content: flex-end;">踩 数: <el-input v-model="input.dislikeStart" type="number" @change="load.inputEnd()" style="width: 200px;"></el-input> ~ <el-input v-model="input.dislikeEnd" type="number" style="width: 200px;" @change="load.inputEnd()"></el-input></label>
    </div>
    <div class="menu-but">
      <el-button size="mini" plain @click="reset()">重置</el-button>
      <el-button size="mini" icon="el-icon-search" plain @click="treeSearch()">查找</el-button>
    </div>
  </div>
  <div class="meu-bottom">
    <span class="list-title">
      树叶列表
    </span>
    <el-table :data="table" style="width: 100%" border>
      <el-table-column label="序号" type="index" width="80" align="center">
      </el-table-column>
      <el-table-column label="发布时间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.createAt|times }}</span>
        </template>
      </el-table-column>
      <el-table-column label="内容" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column label="顶数" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.like }}</span>
        </template>
      </el-table-column>
      <el-table-column label="踩数" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.dislike }}</span>
        </template>
      </el-table-column>
      <el-table-column label="热度" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.hot }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120" align="center">
        <template slot-scope="scope">
          <el-button type="text" style="color:red" size="mini" icon="el-icon-delete" @click="handleDelete(scope.row.id)">删除</el-button>
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

<script src='./treeHole.vue.js'></script>

<style src='./treeHole.vue.css' scoped></style>
