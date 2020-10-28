<template>
<div>
    <div class="MainIncrease">
        <div class="IncreaseTitle">
            文章查看</div>
        <el-form disabled :model="ruleForm" label-width="50px" class="demo-ruleForm editForm">
            <el-form-item label="标题" prop="title">
                <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="分类" prop="type">
                <el-select v-model="ruleForm.type" placeholder="请选择活动区域" style="width:100%;">
                    <el-option label="card文章" :value="1"></el-option>
                    <el-option label="banner文章" :value="0"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="封面" prop="image">
                <el-upload class="upload-demo" v-model="ruleForm.articleImage" :class="{hide:hideUploadArticle}" accept="image/*" ref="upload" :file-list="fileLists" action="#" :on-preview="handlePictureCardPreview" list-type="picture-card">
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="作者" prop="author">
                <el-input v-model="ruleForm.author"></el-input>
            </el-form-item>
            <el-form-item label="摘要" prop="intro">
                <el-input v-model="ruleForm.intro"></el-input>
            </el-form-item>
            <el-form-item label="正文" prop="content">
                <quill-editor disabled class="editor" ref="myTextEditor" :options="editorOption" v-model="ruleForm.content"></quill-editor>
            </el-form-item>
        </el-form>
        <div style="text-align:center">
            <el-button type="success" @click="submitForm()">返回</el-button>
        </div>

    </div>
</div>
</template>

<script src="./articleIncrease.vue.js"></script>

<style src="./articleIncrease.vue.css"></style>
