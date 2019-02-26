<template>
	<div class="shouquan">
		<button
			class="testbutton"
			open-type="getUserInfo"
			@getuserinfo="getuserinfo"
			withCredentials="true"
			size="default"
		>
			获取用户信息
		</button>
		<!-- <view>
			<text>{{getUser.nickName || userInfor.nickName}}</text>
			<image :src="getUser.avatarUrl || userInfor.avatarUrl"></image>
		</view> -->
		
	</div>
</template>

<script>
export default {
	data(){
		return{
			userInfor:''
		}
	},
	onReady() {
		uni.setNavigationBarTitle({
			title: '登录'
		});
	},
	computed:{
		getUser(){
			return this.$store.getters.userInfo
		}	
	},
	methods:{
		getuserinfo(e){
			console.log(e)
			if(e.detail.userInfo){
				console.log('已授权')
				uni.showToast({
					title: '已授权',
					duration: 2000,
				});
				setTimeout(()=>{
					wx.redirectTo({
						url: '/pages/index/index'
					})
				},2000)
				this.userInfor = e.detail.userInfo
				this.$store.commit('userInfo',e.detail.userInfo)
				this.bus.$emit('eventBus',123)
			}else{
				console.log('未授权')
				uni.showToast({
					title: '未授权',
					duration: 2000
				});
			}
		}
	}
};
</script>

<style>
	.shouquan{
		width: 100%;
		background: url(../../static/image/smak.png);
		background-size: contain;
		position: absolute;
		left:0;
		right:0;
		bottom:0;
		top:0;
	}
	.shouquan button{
		position: absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%)
	}
</style>
