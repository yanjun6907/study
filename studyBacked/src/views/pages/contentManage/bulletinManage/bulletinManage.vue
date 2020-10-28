<template>
<div class="manage">
  <div class="manage-top">
    <div class="topTitle">
      <label style="flex:1">公告标题: <el-input v-model="title" style="width: 350px;"></el-input></label>
      <div style="flex:1;text-align:right;line-height:40px;margin-right: 0;">
        <el-button size="mini" plain @click="showSetRightDialogClosed()">重置</el-button>
        <el-button size="mini" icon="el-icon-search" plain @click="getSearch()">查询</el-button>
      </div>
    </div>
  </div>
  <div class="meu-bottom">
    <span class="list-title">
      公告列表
      <el-button @click="dialogFormVisible = true" size="mini" style="float:right;margin-top: 10px;">+新增</el-button>
    </span>
    <el-table :data="table" style="width: 100%;" border>
      <el-table-column label="ID" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="公告标题" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建者" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.createBy }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.createAt|times }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.status|status2 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="handleEdit(scope.row.id)">查看</el-button>
          <el-button size="mini" type="text" @click="handleStatus(scope.row.id,scope.row.status)">{{scope.row.status==1?'下架':'上架'}}</el-button>
          <el-button size="mini" type="text" icon="el-icon-delete" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 10px;text-align: center">
      <el-pagination :background="true" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pages.page" :page-sizes="[1,2,3,4,5,6,7,8,9,10, 20, 30, 40]" :page-size="pages.size" layout=" sizes, prev, pager, next, jumper" :total="pages.totalSize">
      </el-pagination>
    </div>
  </div>
  <!-- 新增编辑弹框 -->
  <el-dialog :title="form.id?'编辑公告':'新增公告'" :visible.sync="dialogFormVisible" center @close="showSetRightDialogClosed">
    <el-form :model="form">
      <el-form-item label="标题:" label-width="45px">
        <el-input v-model="form.title" maxlength="14" show-word-limit placeholder="请输入公告标题"></el-input>
      </el-form-item>
      <el-form-item label="内容:" label-width="45px">
        <el-input v-model="form.content" type="textarea" maxlength="140" :autosize="{ minRows: 6}" show-word-limit placeholder="请输入公告内容"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button @click="showSetRightDialogClosed()">重 置</el-button>
      <el-button @click="saveEdit()" :disabled="form.title==''||form.content==''">保 存</el-button>
    </div>
  </el-dialog>
  <!-- 新增编辑弹框 -->
</div>
</template>

<script src="./bulletinManage.vue.js"></script>

<style src="./bulletinManage.vue.css" scoped></style>
