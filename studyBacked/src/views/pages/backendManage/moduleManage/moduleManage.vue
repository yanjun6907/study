<template>
<div class="manage">
  <div class="meuBottom">
    <span class="listTitle">
      模块管理
      <el-button @click="dialogFormVisible = true" size="mini" style="float:right;margin-top: 12px;">+新增</el-button>
    </span>

    <el-table :data="table" style="width: 100%;" border>
      <el-table-column label="自增长ID" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="名 称" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="U R L" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.url }}</span>
        </template>
      </el-table-column>
      <el-table-column label="父URL" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.pUrl }}</span>
        </template>
      </el-table-column>
      <el-table-column label="父I D" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.parentId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Icon" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.icon}}</span>
        </template>
      </el-table-column>
      <el-table-column label="排 序" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.menuId}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操 作" width="180" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="text" icon="el-icon-edit" @click="handleEdit(scope.row.id)">编辑</el-button>
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
  <el-dialog :title="form.id?'编辑模块':'新增模块'" :visible.sync="dialogFormVisible" center @close="showSetRightDialogClosed">
    <el-form :model="form">
      <el-form-item label="名 称:" label-width="75px" required>
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="排 序:" label-width="75px">
        <el-input v-model="form.menuId" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="U R L:" label-width="75px">
        <el-input v-model="form.url" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="父URL:" label-width="75px">
        <el-input v-model="form.pUrl" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="父I D:" label-width="75px">
        <el-input v-model="form.parentId" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Icon :" label-width="75px">
        <el-input v-model="form.icon" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="saveEdit()" :disabled="form.name==''">确 定</el-button>
    </div>
  </el-dialog>
  <!-- 新增编辑弹框 -->
</div>
</template>

<script src="./moduleManage.vue.js"></script>

<style src="./moduleManage.vue.css"></style>
