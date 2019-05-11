
<template>
	<div class="pay_box">
		<div class="modelBox" v-if="dialogShow">
			<div class="payDialog">
				<div class="head">请输入支付密码</div>
				<div class="password">
					<input v-model='inputPass' id='input' ref='myInput' type='text' autofocus="autofocus" maxlength='6' class='inputPass' />
					<form>
						<input v-model='myPassword.myPassword1' type='password' maxlength='1' readonly="readonly" />
						<input v-model='myPassword.myPassword2' type='password' maxlength='1' readonly="readonly" />
						<input v-model='myPassword.myPassword3' type='password' maxlength='1' readonly="readonly" />
						<input v-model='myPassword.myPassword4' type='password' maxlength='1' readonly="readonly" />
						<input v-model='myPassword.myPassword5' type='password' maxlength='1' readonly="readonly" />
						<input v-model='myPassword.myPassword6' type='password' maxlength='1' readonly="readonly" />
					</form>
					<div class="tip" v-if="psdWrong">
						支付密码错误，请输入6位数字支付密码
					</div>
				</div>
				<div class="footer">
					<el-button type="primary" @click='cancel'>取 消</el-button>
					<el-button type="primary" @click='confirm'>确 定</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			dialogShow:{
				type: Boolean
			}
		},
		data() {
			return {
				inputPass: '',
				unbindForm: {
					pay_pass: ''
				},
				myPassword: {
					myPassword1: '',
					myPassword2: '',
					myPassword3: '',
					myPassword4: '',
					myPassword5: '',
					myPassword6: ''
				},
				psdWrong: false,

				unbind_rules: {
					pay_pass: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}]
				},
				options: [],
				pass: ''
			}
		},
		created() {
			// this.showUp();
		},
		watch: {
			inputPass() {
				this.show();
				var patt = /^[0-9]*$/g;
				this.psdWrong = !patt.test(this.inputPass);//表单校验，输入错误时给出提示
			},
			dialogShow(){//确保每次打开窗口聚焦到输入框
				this.showUp();
			}
		},
		methods: {
			show() {//用户输入显示
				var myInputPass = this.inputPass;
				var arr = myInputPass.split('');
				var obj = this.myPassword;
				var index = 0;
				for (var i in obj) {
					obj[i] = arr[index];
					index++
				}
			},
			cancel() {
				this.inputPass = '';
				this.$emit('closeDialog',false)
			},
			confirm() {
				alert('输入的密码是：'+this.inputPass);
				this.inputPass = '';
				this.$emit('closeDialog',false);
			},
			showUp() {
				//保证焦点始终在表单上
				this.$nextTick(() => {
					this.$refs.myInput.focus();
				})
				document.addEventListener("mousedown", (e) => {
					if (e.target.id !== "input") {
						e.preventDefault()
					}
				}, false);
			}
		}
	}
</script>

<style>
	.pay_box {
		position: relative;
	}
	/* 支付对话框 */
	.pay_box .modelBox {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		overflow: auto;
		margin: 0;
		background-color: rgba(0, 0, 0, .3);
	}

	.pay_box .payDialog {
		background-color: #fff;
		border: 1px solid #ccc;
		position: absolute;
		width: 480px;
		height: auto;
		top: 30%;
		left: 37.5%;
		z-index: 999;
	}

	.pay_box .payDialog .inputPass {
		position: absolute;
		z-index: -999;
		right: 25%;
		top: 40%;
		border: transparent;
	}
	.pay_box .payDialog .inputPass:focus{
		outline:none;
	}

	.pay_box .payDialog form {
		margin-left: 10%;
		width: 76%;
		display: flex;
		height: 48px;
		justify-content: space-between;
	}

	.pay_box .payDialog form>input {
		width: 48px;
		height: 48px;
		text-align: center;
		
	}

	.pay_box .head,
	.pay_box .password,
	.pay_box .footer {
		padding: 20px 40px;
		text-align: center;
	}


	.pay_box .password>form>input {
		font-size: 30px;
	}

	.pay_box .tip {
		color: darkorange;
		font-size: smaller;
	}
</style>
