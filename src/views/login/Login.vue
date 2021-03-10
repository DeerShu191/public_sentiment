<template>
  <div>
    <particles> </particles>
    <div>
      <van-form @submit="onSubmit" class="card">
        <col />
        <span class="title-word">舆情通</span>
        <col />
        <input
          placeholder="请输入用户名"
          class="drag"
          type="text"
          v-model="username"
        />
        <col />
        <input
          placeholder="请输入密码"
          class="drag"
          type="text"
          v-model="password"
        />
        <col />
        <div class="submit">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
        <col/>
        <span class="register-text">尚未注册，前去注册</span>
      </van-form>
    </div>
  </div>
</template>

<script>
import Particles from "@/components/particles/index";
import { Button, Form, Field, Toast } from "vant";
export default {
  name: "Login",
  components: {
    VanButton: Button,
    VanForm: Form,
    VanField: Field,
    VanToast: Toast,
    Particles,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      if (this.username == "鹿蜀先生191" && this.password == "1996") {
        this.$router.push("/Home");
      } else {
        Toast("账号密码错误");
      }
    },
  },
};
</script>

<style scoped>
.title-word {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 600;
  color: rgb(53, 53, 53);
}
.drag {
  margin-top: 16px;
  border-radius: 20px;
  border: none;
  position: relative;
  background-color: #f0f6ff;
  width: 236px;
  height: 32px;
  line-height: 34px;
  text-align: center;
  font-size: 12px;
}
.submit {
  margin: 28px 12px 18px;
  height: 32px;
}
.card {
  position: relative;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  transition: 0.1s;
  width: 300px;
  border-radius: 8px;
  background-color: #ffffff;
  margin: 200px auto;
  padding: 32px 8px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.register-text{
  font-size: 12px;
  color: #c4c4c4;
}
</style>





