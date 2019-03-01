<template>
	<view>
		<div class="top">
			<text>欢迎您回来{{ userInfo.nickName }}</text>
			<image class="avtar" :src="userInfo.avatarUrl"></image>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		computed: {
			userInfo() {
				return this.$store.getters.userInfo;
			}
		},
	}
</script>

<style>
	.top {
		height: 40px;
		line-height: 40px;
		display: flex;
		justify-content: center;
		align-content: center;
	}

	.avtar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: block;
		margin-left: 10px;
	}
</style>
