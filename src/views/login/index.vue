<template>
  <div class="layout">
  	<Layout>
      <div class="logo">
        <img src="../../assets/logo.png">
      </div>
  		<Content>
            <Form ref="loginInfo" 
                  :model="loginFrm" 
                  :rules="rule">
  		      <FormItem prop="name">
  		          <Input type="text" 
                       v-model="loginFrm.name" 
                       placeholder="请输入用户名">
  		              <Icon type="ios-person-outline" 
                          slot="prepend"></Icon>
  		          </Input>
  		      </FormItem>
  		      <FormItem prop="pwd">
  		          <Input type="password" 
                       v-model="loginFrm.pwd" 
                       placeholder="请输入密码">
  		              <Icon type="ios-locked-outline" 
                          slot="prepend"></Icon>
  		          </Input>
  		      </FormItem>
  		      <FormItem>
  		          <Button type="primary" 
                        :long='true'
                        @click="handleSubmit">
                        登录
                </Button>
  		      </FormItem>
  		  </Form>
  		</Content>
  	</Layout>
  </div>
</template>
<script >
  export default {
  	data() {
  	  return {
        loginFrm: {
          name: '',
          pwd: ''
        },
        rule: {
          name: [{
            require: true,
            message: '用户名不能为空',
            trigger: 'blur'
          }],
          pwd: [{
            require: true,
            message: '密码不能为空',
            trigger: 'blur'
          }]
        }
  	  }
  	},
  	methods: {
  	  handleSubmit() {
        this.$refs['loginInfo'].validate((valid) => {
          if (valid) {
          	this.axios({
          	  method: 'post',
          	  url: '/api/login',
              contentType: 'application/json;charset=utf-8',
          	  data: this.loginFrm
          	}).then(res => {
          	  if (res.code === 200) {
                this.$router.push('/home')
              }
          	})
          }
        })
  	  }
  	}
  }
</script>
<style type="text/css" scoped>
.layout{
  margin:0 auto;
  width: 400px;
  margin-top: 200px;
}
.ivu-layout-content{
  padding:0 20px 8px;
}
.logo{
  text-align: center;
  padding:20px 0;
}
.logo img{
  width:80px;
}
</style>