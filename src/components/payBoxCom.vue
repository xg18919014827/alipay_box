<template>
	<div>
		<el-button type="primary" @click='showUp'>去支付</el-button>
		<pay-box :dialogShow='flag' @closeDialog='close'></pay-box>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				flag: false
			}
		},
		methods:{
			showUp(){
				this.flag = true;
			},
			close(val){
				this.flag = false;
			}
		}
	}
</script>

<style>
</style>
