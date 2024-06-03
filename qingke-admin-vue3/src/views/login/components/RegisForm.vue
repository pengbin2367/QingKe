<script setup lang="ts">
import { checkCode, register, sendCode } from "@/api/login.ts";
import { FormInstance } from "element-plus";
import { ref } from "vue";

const props = defineProps({
  regisUser: { type: Object, required: true },
  regisRules: { type: Object, required: true }
})
const regisForm = ref<FormInstance>()

const handleGetCode = async () => {
  const res = await sendCode()
  if (res) {
    ElMessage({
      message: res.message,
      type: 'success'
    })
  }
}
const handleRegister = async (formEl: FormInstance | undefined) => {
  await validateRegisForm(formEl)
  const res = await register(props.regisUser)
  if (res) {
    ElMessage({
      message: res.message,
      type: 'success'
    })
  }
}
const validateRegisForm = async (regisForm: FormInstance | undefined) => {
  await regisForm.validate()
  await checkCode(props.regisUser.validCode)
}
</script>

<template>
  <el-form
      ref="regisForm"
      label-width="120px"
      class="registerForm sign-up-form"
      :model="regisUser"
      :rules="regisRules"
      status-icon
  >
    <el-form-item label="用户名" prop="username">
      <el-input placeholder="输入用户名" v-model="regisUser.username"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input placeholder="输入邮箱" v-model="regisUser.email"></el-input>
    </el-form-item>
    <el-form-item prop="validCode">
      <div class="flex-container">
        <el-button type="primary" plain @click="handleGetCode">发送验证码</el-button>
        <el-input placeholder="验证码" v-model="regisUser.validCode"></el-input>
      </div>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input placeholder="输入密码" type="password" v-model="regisUser.password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="repPassword">
      <el-input placeholder="再次输入密码" type="password" v-model="regisUser.repPassword"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="submit-btn" @click="handleRegister(regisForm)">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.flex-container {
  display: flex;
  align-items: center;
}
.flex-container .el-button {
  margin-right: 10px;
}
</style>