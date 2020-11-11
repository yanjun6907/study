<template>
<div>
  <div class="meu-top">
    <div style="display:flex;margin: 15px;">
      <label>标 题: <el-input v-model="input2.title" style="width: 200px;"></el-input></label>
      <label>分 类:
        <el-select v-model="input2.type" style="width: 200px;" placeholder="请选择">
          <el-option v-for="item in cont.videoType" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </label>
      <label>点 赞:
        <el-input v-model="input2.greatStart" type="number" style="width: 150px;" @change="load.inputEnd()"></el-input> ~ <el-input v-model="input2.greatEnd" type="number" style="width: 150px;" @change="load.inputEnd()"></el-input>
      </label>

    </div>
    <div style="display:flex;margin: 15px;">
      <label>科 目:
        <el-select v-model="input2.subject" style="width: 200px;" placeholder="请选择">
          <el-option v-for="item in cont.subject" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </label>
      <label>老 师: <el-input v-model="input2.teacherName" style="width: 200px;"></el-input>
      </label>
      <label>收 藏:
        <el-input v-model="input2.favouriteStart" type="number" style="width: 150px;" @change="load.inputEnd()"></el-input> ~ <el-input v-model="input2.favouriteEnd" type="number" style="width: 150px;" @change="load.inputEnd()"></el-input>
      </label>

    </div>
    <div style="display:flex;margin: 15px;">
      <label>年 级:
        <el-select v-model="input2.grade" style="width: 200px;" placeholder="请选择">
          <el-option v-for="item in cont.grade" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </label>
      <label>状 态:
        <el-select v-model="input2.status" style="width: 200px;" placeholder="请选择">
          <el-option v-for="item in cont.Status2" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </label>
      <div class="menu-but">
        <el-button size="mini" plain @click="reset()">重置</el-button>
        <el-button size="mini" style="margin-right: -15px;" plain icon="el-icon-search" @click="getSearch()">查找</el-button>
      </div>
    </div>
  </div>
  <div class="menuBottom">
    <span class="list-title">
      视频管理
      <el-button style="float:right;margin: 10px 0;" size="mini" @click="videoIncrease">+新增</el-button>
    </span>
    <el-table :data="input" style="width: 100%" border>
      <el-table-column label="I D" type="index" width="70" align="center">
      </el-table-column>
      <el-table-column label="标题" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.title">
            <el-popover width="200" v-if="scope.row.title.length > 14" placement="top" trigger="hover">
              <span>{{scope.row.title}}</span>
              <span slot="reference" style="curosr:pointer">{{scope.row.title.slice(0,14)+"..."}}</span>
            </el-popover>
            <div v-else>{{scope.row.title}}</div>
          </div>
          <div v-else>--</div>
        </template>
      </el-table-column>
      <el-table-column label="老师" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.teacherName">
            <el-popover v-if="scope.row.teacherName.length > 5" placement="top" trigger="hover">
              <span>{{scope.row.teacherName}}</span>
              <span slot="reference" style="curosr:pointer">{{scope.row.teacherName.slice(0,5)+"..."}}</span>
            </el-popover>
            <div v-else>{{scope.row.teacherName}}</div>
          </div>
          <div v-else>--</div>
        </template>
      </el-table-column>
      <el-table-column label="分类" align="center" width="90">
        <template slot-scope="scope">
          <span>{{ scope.row.type |status6 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="年级" align="center" width="90">
        <template slot-scope="scope">
          <span>{{ scope.row.grade |status5 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="科目" align="center" width="90">
        <template slot-scope="scope">
          <span>{{ scope.row.subject |status4 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="收藏" width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.favourite }}</span>
        </template>
      </el-table-column>
      <el-table-column label="点赞" width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.great }}</span>
        </template>
      </el-table-column>
      <el-table-column label="时间" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.updateAt | times}}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="70" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.status | status2 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120" align="center">
        <template slot-scope="scope">
          <el-button size="mini" style="margin-left:10px;" type="text" @click="handleIncrease(scope.row.id)">查看</el-button>
          <el-button size="mini" type="text" icon="el-icon-edit" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button size="mini" :style="scope.row.status==1?'color:red':''" type="text" @click="handleStatus(scope.row.id,scope.row.status)">{{scope.row.status==1?'下架':'上架'}}</el-button>
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

<script src='./videoList.vue.js'></script>

<style src='./videoList.vue.css'></style>
