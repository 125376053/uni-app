<template>
	<view>
		欢迎您回来----------------------
		{{userInfo.nickName}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			userInfo(){
				return this.$store.getters.userInfo
			}
		}
	}
</script>

<style>

</style>
