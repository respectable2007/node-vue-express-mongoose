<template>
  <div>
  	<Layout>
  	  <Header>
  	  	<router-link to='/home' class="layout-logo">
  	  	  大数据分析平台
  	  	</router-link>
        <Dropdown class='layout-user'
                  @on-click>
          <a href="javascript:void(0)">
            个人中心
            <Icon type='arrow-down-b'></Icon>
          </a>
          <DropdownMenu slot='list' >
            <a href="javascript:void(0)" @click='handleOut'>退出</a>
          </DropdownMenu>
        </Dropdown>
  	  </Header>
  	  <Content>
        <router-view></router-view>
      </Content>
  	</Layout>
  </div>
</template>
<script >
  export default{
    methods: {
      handleOut() {
        this.$router.push('/')
      }
    }
  }
</script>
<style type="text/css" scoped>
  .ivu-layout-content{
    background: #fff;
  }
  .layout-user{
    float: right;
  }
  .layout-user a{
    color:#fff;
  }
  .layout-user .ivu-select-dropdown a{
    color:#000;
    display: block;
    padding-left:5px; 
  }
  .layout-user .ivu-select-dropdown a:hover{
    background: #efefef;
  }
</style>