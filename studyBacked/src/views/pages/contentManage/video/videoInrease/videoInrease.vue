<template>
<div>
    <div class="mainIncrease">
        <div class="increaseTitle">视频查看</div>
        <el-form :model="ruleForm" disabled ref="ruleForm" label-width="80px" class="demo-ruleForm editForm">
            <div class="fristRow1">
                <el-form-item label="所属年级" prop="grade" class="fristRowLabel1">
                    <el-select v-model="ruleForm.grade" style="width: 150px;" placeholder="请选择">
                        <el-option v-for="item in cont.grade" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属科目" prop="subject" class="fristRowLabel1">
                    <el-select v-model="ruleForm.subject" style="width: 150px;" placeholder="请选择">
                        <el-option v-for="item in cont.subject" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="老师昵称" prop="teacherId" class="fristRowLabel1">
                    <el-input v-model="ruleForm.teacherId" style="width: 170px;"></el-input>
                </el-form-item>
                <div class="roleIcon">
                    <img v-if="imageUrl" :src="imageUrl">
                    <i v-else class="el-icon-picture"></i>
                </div>
            </div>
            <el-form-item label="标　　题" prop="title">
                <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="分　　类" prop="type">
                <el-select v-model="ruleForm.type" placeholder="请选择" style="width:100%;">
                    <el-option label="card视频" :value="0"></el-option>
                    <el-option label="banner图" :value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="封　　面" required prop="videoImage">
                <el-upload class="upload-demo" v-model="ruleForm.videoImage" :class="{hide:hideUploadVideo}" accept="image/*" ref="upload" :file-list="fileLists" action="#" :on-preview="handlePictureCardPreview" list-type="picture-card">
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="视频简介" prop="intro">
                <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="ruleForm.intro">
                </el-input>
            </el-form-item>
            <el-form-item label="视频链接" prop="videoUrl">
                <div class="upVideo">
                    <p style="margin: 10px">
                        <label>URL</label>
                        <el-input v-model="ruleForm.videoUrl" style="width: 90%;margin: 10px" clearable></el-input>
                    </p>
                    <div class=" demo1-video">
                        <video type="video/mp4" :disabled="false" id="myVideo" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" :src="ruleForm.videoUrl">
                        </video>
                    </div>
                </div>
            </el-form-item>
            <el-form-item label="正　　文" prop="content">
                <quill-editor disabled class="editor" ref="myTextEditor" :options="editorOption" v-model="ruleForm.content"></quill-editor>
            </el-form-item>
        </el-form>
        <div style="text-align:center">
            <el-button @click="resetForm('ruleForm')">返 回</el-button>
        </div>
    </div>
</div>
</template>

<script src='./videoInrease.vue.js'></script>

<style src='./videoInrease.vue.css'></style>
