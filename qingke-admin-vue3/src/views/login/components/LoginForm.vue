<script setup lang="ts">
import { FormInstance } from "element-plus";
import { login } from "@/api/login.ts";
import { ref } from "vue";

const props = defineProps({
  loginUser: { type: Object, required: true },
  loginRules: { type: Object, required: true }
})
const loginForm = ref<FormInstance>()

const handleLogin = async (formEl: FormInstance | undefined) => {
  try {
    // 先校验表单
    await validateLoginForm(formEl)
    // 执行登录逻辑
    const res = await login(props.loginUser)
    if (res) {
      ElMessage({
        message: res.message,
        type: 'success'
      })
    }
  } catch (error) {
  }
}
const validateLoginForm = async (loginForm: FormInstance | undefined) => {
  try {
    await loginForm.validate()
  } catch (error) {
    throw error;
  }
}
</script>

<template>
  <el-form
      ref="loginForm"
      label-width="120px"
      class="loginForm sign-in-form"
      :model="loginUser"
      :rules="loginRules"
      status-icon
  >
    <el-form-item label="邮箱" prop="email">
      <el-input placeholder="输入邮箱" v-model="loginUser.email"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input placeholder="输入密码" type="password" v-model="loginUser.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="submit-btn" @click="handleLogin(loginForm)">登陆</el-button>
    </el-form-item>
    <div class="tiparea">
      <p>忘记密码？ <button>立即找回</button></p>
    </div>
  </el-form>
</template>

<style scoped>
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0 5px 10px #ccc;
}
.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p button {
  color: #409eff;
  background-color: #fff;
  border: inherit;
  cursor: pointer;
}
</style>