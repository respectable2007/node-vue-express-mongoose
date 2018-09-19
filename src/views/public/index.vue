<template>
  <div>
  	<Table :columns='columns'
  	       :data='data'>
  	</Table>
  </div>
</template>
<script >
  export default{
  	data() {
  	  return {
  	  	columns: [
  	    {
	        title: '用户名',
	        key: 'name'
	    },
	    {
	        title: '密码',
	        key: 'pwd'
	    }],
	   data: [
	   // {
	   // 	name: '徐凤年',
	   // 	age: '18',
    //     address: '北凉王府'
	   // },
	   // {
	   // 	name: '姜泥',
	   // 	age: '16',
	   // 	address: '西楚皇宫'
	   // },
    //    {
    //    	name: '洪洗象',
    //    	age: '20',
    //    	address: '武当山'
    //    },
    //    {
    //    	name:'齐仙侠',
    //    	age: '20',
    //    	address: '龙虎山'
    //    },
    //    {
    //    	name: '赵楷',
    //    	age: '18',
    //    	address: '离阳皇宫'
    //    },
    //    {
    //    	name: '南北',
    //    	age: '14',
    //    	address: '两禅寺'
    //    }
       ]
  	  }
  	},
  	methods: {
      getList() {
      	this.axios({
      	  url: '/api/users',
      	  method: 'get'
      	}).then(res => {
      	  if (res.code === 200) {
      	  	this.data = res.data
      	  }
      	})
      }
  	},
  	created() {
  	  this.getList()
  	}
  }
</script>