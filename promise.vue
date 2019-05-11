<template>

</template>
<script>
	export default {
		data() {
			return: {

			}
		},
		created(){
			this.test(10).then((res)=>{
				console.log('我是异步成功的调用')
			}).catch((err)=>{
				console.log('我是异步失败的调用')
			});
		},
		methods: {
			//promise主要是为了解决多个异步回调难以解决的问题，例如：回调地狱
			function test(n) {
				return new Promise((resolve, reject) => {
					setTimeout(function() {
						if (n>10) {
							//异步执行成功
							resolve('我成功了');
						} else {
							//异步执行失败
							reject('我失败了'));
						}
					}, 2000)
				})
			}
		}

	}
</script>
