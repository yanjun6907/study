<template>
<div>
  <div class="meu-Top">
    <div style="display:flex;margin-left: 50px;">
      <label><label style=" letter-spacing: 14px;">昵</label>称: <el-input v-model="input.nickName" style="width: 200px;"></el-input></label>
      <label>
        <label style=" letter-spacing: 42px;">I</label>D:
        <el-input v-model="input.id" style="width: 200px"></el-input>
      </label>
      <label><label style=" letter-spacing: 14px;">年</label>级:
        <el-select v-model="input.grade" style="width: 200px;" placeholder="请选择">
          <el-option v-for="item in cont.grade" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </label>
    </div>
    <div style="display:flex;margin-left: 50px;">
      <label><label style=" letter-spacing: 14px;">手</label>机: <el-input v-model="input.phone" style="width: 200px;"></el-input></label>
      <label><label style=" letter-spacing: 28px;">邮</label>箱: <el-input v-model="input.email" style="width: 200px;"></el-input></label>
      <label><label style=" letter-spacing: 14px;">状</label>态:
        <el-select v-model="input.status" style="width: 200px;" placeholder="请选择">
          <el-option v-for="item in cont.Status" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </label>
    </div>
    <div style="display:flex;margin-left: 50px;">
      <label>逆袭豆: <el-input v-model="input.beanStart" type="number" style="width: 200px;" @change="load.inputEnd()"></el-input> — <el-input v-model="input.beanEnd" type="number" style="width: 200px;" @change="load.inputEnd()"></el-input></label>
      <div style="text-align: right;flex:1">
        <el-button size="mini" plain @click="resetData()">重置</el-button>
        <el-button size="mini" plain icon="el-icon-search" @click="getSearch()">查找</el-button>
      </div>
    </div>
    </label>
  </div>
  <div class="meuBottomList">
    <div class="lst-title">用户管理(用户总数:{{pages.totalSize}}人)</div>
    <el-table :data="table" @sort-change="beanStatus" border>
      <el-table-column label="序号" type="index" width="70" align="center">
      </el-table-column>
      <el-table-column label="ID" width="75" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="昵称" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.nickName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮箱" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="手机号" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="逆袭豆" width="100" align="center" sortable="custom">
        <template slot-scope="scope">
          <span>{{ scope.row.bean }}</span>
        </template>
      </el-table-column>
      <el-table-column label="年级" width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.grade | status5}}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.status | status }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="handleEdit(scope.row.id)">查看</el-button>
          <el-button size="mini" :style="scope.row.status==1?'color:red':''" type="text" @click="handleStatus(scope.row.id, scope.row.status)">{{scope.row.status==0?'冻结':'解冻'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 10px;text-align: center">
      <el-pagination :background="true" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pages.page" :page-sizes="[1,2,3,4,5,6,7,8,9,10, 20, 30, 40]" :page-size="pages.size" layout=" sizes, prev, pager, next, jumper" :total="pages.totalSize">
      </el-pagination>
    </div>
  </div>
  <!-- 新增编辑弹框 -->
  <el-dialog title="用户详情" :visible.sync="dialogFormVisible" center @close="showSetRightDialogClosed" width="60%">
    <div class="detail-menu">
      <div class="menu-lf">
        <el-table :data="input3" border style="width: 100%">
          <el-table-column prop="head" label="头像" align="center" width="120">
            <template slot-scope="scope">
              <img :src="scope.row.head" style="width: 100px;height: 100px">
            </template>
          </el-table-column>
          <el-table-column prop="nickName" label="昵称" align="center">
          </el-table-column>
          <el-table-column prop="id" label="ID" align="center" width="80">
          </el-table-column>
          <el-table-column prop="phone" label="手机号" align="center">
          </el-table-column>
          <el-table-column prop="email" label="邮箱" align="center">
          </el-table-column>
          <el-table-column prop="grade" label="年级" align="center" width="80">
            <template slot-scope="scope">
              <span>{{ scope.row.grade | status5}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="bean" label="逆袭豆" align="center" width="80">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </el-dialog>
  <!-- 新增编辑弹框 -->
</div>
</template>

<script src="./userList.vue.js"></script>

<style src="./userList.vue.css" scoped></style>
