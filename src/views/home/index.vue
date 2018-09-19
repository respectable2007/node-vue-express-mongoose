<template>
  <div>
  	<Layout>
  	  <Header>
  	  	<div class="layout-logo">
  	  	  大数据分析平台
  	  	</div>
  	  </Header>
  	  <Content>
  	  	<div v-for='item in menu'
  	  	     class="menu-container">
  	  		<a class="menu-item"
  	  		   href="javascript:void(0)"
  	  		   @click='handleLink(item)'>
  	  			<img :src="item.img">
  	  			<div>{{item.name}}</div>
  	  		</a>
  	  	</div>
  	  </Content>
  	</Layout>
  </div>
</template>
<script>
  import Public from '../../assets/logo.png'
  export default {
    name: 'home',
    data() {
      return {
      	menu: [{
      	  name: '广告监测',
      	  img: Public,
      	  path:'/layout/public'
      	}]
      }
    },
    methods: {
      handleLink(item) {
      	this.$router.push(item.path)
      }
    }
  }
</script>
<style type="text/css" scoped>
.ivu-layout-content{
  background: #fff;
}
.menu-container{
  width: 900px;
  margin: 50px auto;
}
.menu-item{
  display: inline-block;
  width: 25%;
  text-align: center;
}
.menu-item:hover{
  outline: 1px solid #efefef;
}
.menu-item img{
  width: 80%;
  margin-bottom: 10px;
}
</style>
