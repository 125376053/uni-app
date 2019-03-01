<template>
	<view>
		<button @click="getPosition">获取位置</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			getPosition() {
				uni.authorize({
					scope: 'scope.userLocation',
					success() {
						// 可以直接从这里开始写
						uni.getLocation({
							type: 'gcj02', //返回可以用于uni.openLocation的经纬度
							success: function(res) {
								console.log(res)
								const latitude = res.latitude;
								const longitude = res.longitude;
								uni.openLocation({
									latitude: latitude,
									longitude: longitude,
									success: function() {
										console.log('success');
									}
								});
							}
						});
					}
				})
			}
		}
	}
</script>

<style>

</style>
