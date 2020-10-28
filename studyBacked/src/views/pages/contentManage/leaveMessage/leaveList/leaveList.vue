<template>
<div>
  <div class="meu-top">
    <div style="display:flex">
      <label><label style=" letter-spacing: 28px;">标</label>题： <el-input v-model="input.title" style="width: 200px;"></el-input></label>
      <label><label style=" letter-spacing: 28px;">楼</label>主： <el-input v-model="input.nickName" style="width: 200px;"></el-input></label>
      <label style="flex:2;text-align:right">发布时间： <el-date-picker v-model="input.createStart" type="date" placeholder="开始日期" :picker-options="pickerOptions0" style="width: 200px;">
        </el-date-picker> —
        <el-date-picker v-model="input.createEnd" type="date" placeholder="结束日期" :picker-options="pickerOptions1" style="width: 200px;">
        </el-date-picker>
      </label>
    </div>
    <div style="display:flex">
      <label style="flex:1"><label style=" letter-spacing: 28px;">板</label>块：
        <el-select v-model="input.grade" style="width: 200px;" placeholder="请选择">
          <el-option v-for="item in cont.department" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </label>
      <label style="flex:3"><label style=" letter-spacing: 28px;">状</label>态：
        <el-select v-model="input.status" style="width: 200px;" placeholder="请选择">
          <el-option v-for="item in cont.essence" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </label>
    </div>
    <div class="menu-but">
      <el-button size="mini" plain @click="reset()">重置</el-button>
      <el-button size="mini" plain icon="el-icon-search" @click="getSearch()">查找</el-button>
    </div>
  </div>
  <div class="meu-bottom">
    <span class="list-title">
      树叶列表
    </span>
    <el-table :data="table" style="width: 100%" @sort-change="sortBy" border>
      <el-table-column label="ID" width="70" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标题" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.title">
            <el-popover width="200" v-if="scope.row.title.length > 14" placement="top" trigger="hover">
              <span>{{scope.row.title}}</span>
              <span slot="reference" style="curosr:pointer">{{scope.row.title.slice(0,8)+"..."}}</span>
            </el-popover>
            <div v-else>{{scope.row.title}}</div>
          </div>
          <div v-else>--</div>
        </template>
      </el-table-column>
      <el-table-column label="楼主" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.nickName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="发布时间" align="center" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime |times}}</span>
        </template>
      </el-table-column>
      <el-table-column label="板块" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.grade | status8 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="阅读量" width="100" align="center" sortable="custom">
        <template slot-scope="scope">
          <span>{{ scope.row.readNum }}</span>
        </template>
      </el-table-column>
      <el-table-column label="评论数" width="100" align="center" sortable="custom">
        <template slot-scope="scope">
          <span>{{ scope.row.remarkNum }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="120" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.essence | status9 }} {{ scope.row.top | status10 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="leaveEdit(scope.row.id)">查看</el-button>
          <el-button size="mini" type="text" :style="scope.row.essence==1?'color:red':''" @click="handleStatus(scope.row.id,scope.row.essence)">{{scope.row.essence==0?'加精':'普通'}}</el-button>
          <el-button size="mini" type="text" :style="scope.row.top==1?'color:red':''" @click="handleTop(scope.row.id,scope.row.top)">{{scope.row.top==0?'置顶':'取消'}}</el-button>
          <el-button size="mini" type="text" style="color:red" @click="handleDelete(scope.row.id)">删除</el-button>
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

<script src='./leaveList.vue.js'></script>

<style src='./leaveList.vue.css' scoped></style>
