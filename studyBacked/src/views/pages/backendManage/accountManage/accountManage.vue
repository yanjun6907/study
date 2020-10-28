<template>
<div class="manage">
  <div class="menu-top">
    <label style="flex:3">角色
      <el-select v-model="form.roleId" style="width: 180px;" placeholder="— ——请选择—— —" @click="selectChange()">
        <el-option v-for="item in roles" :key="item.id" :label="item.name" :value="item.id">
        </el-option>
      </el-select>
    </label>
    <label style="flex:3">用户名 <el-input v-model="form.name" style="width: 180px;"></el-input></label>
    <div style="flex:5;text-align:right;line-height:40px;">
      <el-button size="mini" plain @click="reset()">重置</el-button>
      <el-button size="mini" icon="el-icon-search" plain @click="getSearch()">查询</el-button>
    </div>
  </div>
  <div class="meu-bottom">
    <span class="list-title">
      用户列表
      <el-button @click="dialogFormVisible = true" size="mini" style="float:right;margin-top: 10px;">+新增</el-button>
    </span>
    <el-table :data="table" style="width: 100%;" border>
      <el-table-column label="ID" width="120" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="登录名" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角 色" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.roleId | status7 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操 作" width="200" align="center">
        <template slot-scope="scope">
          <el-button type="text" icon="el-icon-edit" size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button type="text" icon="el-icon-delete" size="mini" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 10px;text-align: center">
      <el-pagination :background="true" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pages.page" :page-sizes="[1,2,3,4,5,6,7,8,9,10, 20, 30, 40]" :page-size="pages.size" layout=" sizes, prev, pager, next, jumper" :total="pages.totalSize">
      </el-pagination>
    </div>
  </div>
  <!-- 新增编辑弹框 -->
  <el-dialog :title="form.id?'编辑账户':'新增账户'" :visible.sync="dialogFormVisible" center @close="showSetRightDialogClosed" width="60%">
    <el-form :model="form" :rules="rules" label-width="75px" class="demo-ruleForm editForm" ref="ruleForm">
      <el-form-item label="用 户 名 : " prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密　　码:" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="角　　色:" prop="roleId">
        <el-select v-model="form.roleId" style="width:100%" @click="selectChange()">
          <el-option v-for="item in roles" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button @click="reset()">重 置</el-button>
      <el-button type="primary" @click="saveEdit('ruleForm')" :disabled="form.roleId==''||form.password==''||form.name==''">确 定</el-button>
    </div>
  </el-dialog>
  <!-- 新增编辑弹框 -->
</div>
</template>

<script src="./accountManage.vue.js"></script>

<style src="./accountManage.vue.css" scoped></style>
