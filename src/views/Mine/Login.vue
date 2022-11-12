<template>
  <div>
    <!-- 头部横幅 -->
    <div class="loginTop">
      <span @click="fanFun">&lt;</span>
      <p>猫眼电影</p>
      <div></div>
    </div>
    <!-- 登录 -->
    <div class="loginBox">
      <!-- 账号输入框 -->
      <div class="log1">
        <input
          v-model="account"
          type="number"
          placeholder="请输入账号"
          oninput="if(value.length>11) value=value.slice(0,11)"
        />
      </div>
      <!-- 密码输入框 -->
      <div class="log2">
        <input v-model="password" type="password" placeholder="请输入密码" />
      </div>
      <!-- 登录按钮 -->
      <div class="logbtn" v-if="pwdlogin == false" @click="loginFun">登录</div>
      <div class="logbtnReady" v-if="pwdlogin == true" @click="loginFun">
        登录
      </div>
      <!-- 底部用户协议 -->
      <div class="argeement">
        <input type="checkbox" v-model="bbcc" />
        我已阅读并同意
        <span>《猫眼用户服务协议》</span>
        <span>《隐私政策》</span>
        <div>
          客服电话：
          <span>1010-5335</span>
        </div>
      </div>
      <div class="prompt-text">未注册的手机号将自动生成新账号</div>
    </div>
  </div>
</template>
  
<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      account: "", // 账号
      password: "", // 密码
      pwdlogin: false,
      bbcc: false,
    };
  },
  methods: {
    fanFun() {
      this.$router.go(-1);
    },
    pwdBtnloginFun() {
      // 侦听密码框是否输入值,检验密码强度>6
      if (this.account.length != 0 && this.password.length >= 6) {
        // 将按钮高亮
        this.pwdlogin = true;
      } else {
        this.pwdlogin = false;
      }
    },
    // 登录方法
    loginFun() {
      if (this.account.length != 0 && this.password.length >= 6) {
        // 判断是否同意协议
        if (this.bbcc == true) {
          Toast({ message: "登陆成功", position: "bottom" });
          // 登陆成功存入userId
          localStorage.setItem("userId", 88888888);
          setTimeout(() => {
            this.$router.push("/mine");
          }, 1500); // 延迟1.5s
        } else {
          // 未勾选用户协议
          Toast({ message: "请先阅读并勾选用户协议", position: "bottom" });
        }
      } else if (this.account.length != 0 && this.password.length == "") {
        // 未输入密码
        Toast({ message: "请输入密码", position: "bottom" });
      } else if (this.account.length == "" && this.password.length == "") {
        // 未输入账号、密码
        Toast({ message: "请输入账号密码", position: "bottom" });
      } else {
        // 密码长度 <6
        Toast({
          message: "为了您的账户安全请输入大于6位的密码",
          position: "bottom",
        });
      }
    },
  },
  watch: {
    account: function () {
      //   console.log("Account Change!");
    },
    password: function () {
      this.pwdBtnloginFun();
    },
  },
};
</script>
  
<style lang="less" scoped>
.loginTop {
  background: #e54847;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 18px;
  padding: 14px;
  span {
    font-family: "宋体";
  }
}
.loginBox {
  padding: 16px;
  .log1 {
    margin-top: 32px;
    padding: 12px 0;
    border-bottom: 1px solid #e5e5e5;
    input {
      font-family: sans-serif;
      font-size: 15px;
      border: 0;
      width: 100%;
      outline: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    input::-webkit-input-placeholder {
      color: #d6d6d6;
      font-size: 15px;
    }
    // input:focus {
    //   color: #d6d6d6;
    // }
  }
  .log2 {
    margin-top: 16px;
    padding: 12px 0;
    border-bottom: 1px solid #e5e5e5;
    input {
      font-family: sans-serif;
      width: 100%;
      border: 0;
      outline: none;
    }
    input::-webkit-input-placeholder {
      color: #d6d6d6;
      font-size: 15px;
    }
    // input:focus {
    //   color: #d6d6d6;
    // }
  }
  .logbtn {
    background: #e5e5e5;
    color: #999;
    text-align: center;
    font-size: 14px;
    width: 100%;
    margin-top: 14px;
    padding: 12px 0;
    border-radius: 24px;
  }
  .logbtnReady {
    background: #df2d2d;
    color: #fff;
    text-align: center;
    font-size: 14px;
    width: 100%;
    margin-top: 14px;
    padding: 12px 0;
    border-radius: 24px;
  }
  .argeement {
    font-size: 12px;
    color: #7f7f7f;
    margin-top: 30px;
    input {
      display: inline-block;
      border-radius: 50%;
    }
    span {
      color: #df2d2d;
      display: inline-block;
    }
    div {
      text-align: center;
    }
  }
  .prompt-text {
    padding-top: 20px;
    text-align: center;
    font-size: 12px;
    color: #999999;
  }
}
</style>