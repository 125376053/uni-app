<template>
	<view>
		<button @click="getAdress">获取地址信息</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			getAdress() {
				wx.chooseAddress({
					success(res) {
						console.log(res.userName)
						console.log(res.postalCode)
						console.log(res.provinceName)
						console.log(res.cityName)
						console.log(res.countyName)
						console.log(res.detailInfo)
						console.log(res.nationalCode)
						console.log(res.telNumber)
					}
				})
			}
		}
	}
</script>

<style>

</style>
