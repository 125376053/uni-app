<template>
	<div>
		<button
			class="testbutton"
			open-type="getUserInfo"
			@getuserinfo="getuserinfo"
			withCredentials="true"
		>
			获取用户信息
		</button>
		<view>
			<text>{{getUser.nickName || userInfor.nickName}}</text>
			<image :src="getUser.avatarUrl || userInfor.avatarUrl"></image>
		</view>
		
	</div>
</template>

<script>
export default {
	data(){
		return{
			userInfor:''
		}
	},
	computed:{
		getUser(){
			return this.$store.getters.userInfo
		}	
	},
	methods:{
		getuserinfo(e){
			console.log(e)
			this.userInfor = e.detail.userInfo
			this.bus.$emit('eventBus',123)
		}
	}
};
</script>

<style></style>
