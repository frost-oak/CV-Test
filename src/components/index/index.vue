<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span='8'>
          <img
            src="../../assets/logo.png"
            alt=""
          >
        </el-col>
        <el-col :span='8'>
          <h1>这里是首页主界面</h1>
        </el-col>
        <el-col
          :span='8'
          class="col_r"
        >
          如果想要退出请点击这里噢！ <a
            @click.prevent='logout'
            href="#"
          >退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :router='true'
          :default-active="handlePath()"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
           <el-submenu index="1">
            <template #title>
              <i class="el-icon-location"></i>
              <span>用户信息</span>
            </template>
            <el-menu-item index='home'>还是用户信息</el-menu-item>
          </el-submenu>
        </el-menu>
        
        <el-menu
          :router='true'
          :default-active="handlePath()"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
           <el-submenu index="2">
            <template #title>
              <i class="el-icon-location"></i>
              <span>错误信息</span>
            </template>
            <el-menu-item index='error'>还是错误信息</el-menu-item>
          </el-submenu>
        </el-menu>

        <el-menu
          :router='true'
          :default-active="handlePath()"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
           <el-submenu index="3">
            <template #title>
              <i class="el-icon-location"></i>
              <span>占个位置</span>
            </template>
            <el-menu-item index='/login'>回到登录页</el-menu-item>
          </el-submenu>
        </el-menu>
        
      </el-aside>
      <!-- 主体 -->
      <el-main>
        <!-- 预留一个出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {

    }
  },
  methods: {
    // 退出功能 用promise处理返回的异常
    async logout () {
      //1. 提示 + 返回
      try {
        await this.$confirm('此操作将退出该账户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })

        //1.清除token
        localStorage.removeItem('token')

        //2. 编程式导航回去
        this.$router.back()

        //3. 提示
        this.$message({
          message: '退出成功',
          type: 'success',
          duration: 800
        })

      } catch (error) {
        this.$message({
          message: '退出取消',
          type: 'info',
          duration: 800
        })

      }
    },
    handlePath () {
      let path = this.$route.path
      let arr = path.split('/')
      return arr[2]
    }
  },
}
</script>

<style scoped lang='less'>
.el-container {
  height: 100%;
}

/* 头部 */
.el-header {
  background: #b3c1cd;
  padding: 0;
  h1 {
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 26px;
  }

  .col_r {
    line-height: 60px;
    text-align: right;
    padding-right: 30px;
    a {
      color: #daa520;
    }
  }
}

.el-aside {
  background: #545c64;
}

.el-main {
  background: #eaeef1;
}

img {
  margin-left: 60px;
  height: 60px;
  width: 60px;
}
</style>

