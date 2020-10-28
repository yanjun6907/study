<template>
<div>
  <div class="meu-top">
    <div style="display:flex;margin: 15px;">
      <label>标 题: <el-input v-model="input2.title" style="width: 200px;"></el-input></label>
      <label>作 者: <el-input v-model="input2.author" style="width: 200px;"></el-input></label>
      <label style="flex:1;margin-right: 5px;">点 赞: <el-input onkeyup="value=value.replace(/[^\d]/g,'')" v-model="input2.likeStart" style="width: 150px;" @change="load.inputEnd()"></el-input> ~ <el-input onkeyup="value=value.replace(/[^\d]/g,'')" v-model=" input2.likeEnd" style="width: 150px;" @change="load.inputEnd()"></el-input></label>
    </div>
    <div style=" display:flex;margin: 15px;">
      <label>分 类:
        <el-select v-model="input2.type" style="width: 200px;" placeholder="请选择">
          <el-option v-for="item in cont.Type" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </label>
      <label>状 态:
        <el-select v-model="input2.status" style="width: 200px;" placeholder="请选择">
          <el-option v-for="item in cont.Status2" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </label>
      <label style="flex:1;margin-right: 5px;">收 藏: <el-input onkeyup="value=value.replace(/[^\d]/g,'')" v-model="input2.favouriteStart" style="width: 150px;" @change="load.inputEnd()"></el-input> ~ <el-input onkeyup="value=value.replace(/[^\d]/g,'')" v-model=" input2.favouriteEnd" style="width: 150px;" @change="load.inputEnd()"></el-input></label>
    </div>
    <div class=" menu-but">
      <el-button size="mini" plain @click="reset()">重置</el-button>
      <el-button size="mini" plain style="margin-right: 15px;" icon="el-icon-search" @click="articleSearch()">查找</el-button>
    </div>
  </div>
  <div class="meu-bottom">
    <span class="list-title">
      文章管理
      <el-button style="float:right;margin: 10px 0 0;" size="mini" @click="articleIncrease">+新增</el-button>
    </span>
    <el-table :data="input" style="width: 100%" border>
      <el-table-column label="I D" type="index" width="70" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标 题" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="封面" align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.articleImage" style="width:70px;height:80px;margin-top: 6px;" />
                </template>
            </el-table-column> -->
      <el-table-column label="作 者" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="时 间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.intro }}</span>
        </template>
      </el-table-column>
      <el-table-column label="分 类" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.type |status3 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="点 赞" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.like }}</span>
        </template>
      </el-table-column>
      <el-table-column label="收 藏" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.favourite }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状 态" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.status | status2 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操 作" width="230" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="handleIncrease(scope.row.id)">查看</el-button>
          <el-button size="mini" type="text" icon="el-icon-edit" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="text" @click="handleStatus(scope.row.id,scope.row.status)">{{scope.row.status==1?'下架':'上架'}}</el-button>
          <el-button type="text" size="mini" icon="el-icon-delete" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 10px;text-align: center">
      <el-pagination :background="true" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pages.page" :page-sizes="[1,2,3,4,5,6,7,8,9,10, 20, 30, 40]" :page-size.sync="pages.size" layout=" sizes, prev, pager, next, jumper" :total="pages.totalSize">
      </el-pagination>
    </div>
  </div>
</div>
</template>

<script src='./articleList.vue.js'></script>

<style src='./articleList.vue.css' scoped></style>
