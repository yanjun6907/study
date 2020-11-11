<template>
<div>
  <div class="meuBottom">
    <span class="listTitle">
      用户列表
      <el-button @click="showSetRightDialog()" size="mini" style="float:right;margin-top: 10px;">+新增</el-button>
    </span>
    <el-table :data="table" style="width: 100%;" border>
      <el-table-column label="ID" width="120" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色名" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="text" icon="el-icon-edit" @click="showSetRightDialog(scope.row.id)">编辑</el-button>
          <el-button size="mini" style="color:red" type="text" icon="el-icon-delete" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 10px;text-align: center">
      <el-pagination :background="true" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pages.page" :page-sizes="[1,2,3,4,5,6,7,8,9,10, 20, 30, 40]" :page-size="pages.size" layout=" sizes, prev, pager, next, jumper" :total="pages.totalSize">
      </el-pagination>
    </div>
  </div>
  <!-- 新增编辑弹框 -->
  <el-dialog :title="roleId?'编辑角色':'新增角色'" :visible.sync="dialogFormVisible" center @close="showSetRightDialogClosed">
    <div class="roleName">
      <el-form :model="input">
        <el-form-item label="角色名:" required>
          <el-input v-model="input.name" clearable style="width: 40%"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-tree :data="rightsList" :props="treeProps" node-key="id" show-checkbox default-expand-all :default-checked-keys="defKeys" ref="treeRef"></el-tree>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button @click="showSetRightDialogClosed()">重 置</el-button>
      <el-button type="primary" @click="handleEdit()" :disabled="input.name==''">确 定</el-button>
    </div>
  </el-dialog>
  <!-- 新增编辑弹框 -->
</div>
</template>

<script src="./roleManage.vue.js"></script>

<style src="./roleManage.vue.css" ></style>
