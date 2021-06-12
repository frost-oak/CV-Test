<template>
  <el-row
    type='flex'
    justify="center"
    align="middle"
  >
    <el-col :span='8'>
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
      >
        <el-form-item
          label="用户名"
          prop="username"
        >
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <!-- 下面是两个按钮 -->
        <el-form-item>
          <!--
        primary  蓝色
        success  绿色
        danger   红色
        -->
          <el-button
            type='success'
            @click='startLogin'
          >登录</el-button>
          <el-button @click='resetForm'>重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      // 表单数据对象
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      // 校验规则
      rules: {
        // 校验用户名
        username: [
          // 校验是否需要输入内容
          { required: true, message: '请输入用户名', trigger: 'blur' },
          // 校验格式
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        // 校验密码
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    // 开始登录
    startLogin () {
      this.$refs.loginForm.validate(async (valid) => {
        if (!valid) {
          return;
        }
        if (this.$refs.loginForm.model.username == 'admin' & this.$refs.loginForm.model.password == 'admin') {       
          // 1. 提示
          this.$message({
            message: '登录成功',
            type: 'success',
            duration: 800
          })
          //2. 跳转到home首页
          localStorage.setItem('token', 'ImToken')
          this.$router.push('/index/home')
        } else {
          this.$message({
            message: '用户名或密码错误',
            type: 'error',
            duration: 800
          })
          localStorage.setItem('token', 'ImToken')
          this.$router.push('/index/error')
        }
      });
    },
    // 重置表单 把数据恢复到之前
    resetForm () {
      this.$refs.loginForm.resetFields();
    }
  }
}
</script>

<style scoped>

.el-row {
  height: 100%;
  background: #2d434c;
}

.el-col {
  background: #fff;
  padding: 20px 30px;
  border-radius: 15px;
}

h1 {
  color: green;
}
</style>
