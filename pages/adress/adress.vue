<template>
	<view>
		<button v-if="" @click="getAdress">获取地址信息</button>
		<view>
			我的地址
			<view v-for="(item,index) in adress" :key="index">
				<view>{{item}}</view>
			</view>
		</view>
	</view>
	
</template>

<script>
export default {
	data() {
		return {
			adress:uni.getStorageSync('adress')||''
		};
	},
	onLoad() {
		console.log(123)
		console.log(this.adress)
	},
	methods: {
		getAdress() {
			var that = this;
			wx.getSetting({
				success(res) {
					console.log(res.authSetting['scope.address']);
					if (res.authSetting['scope.address']) {
						console.log('已授权地址')
						wx.chooseAddress({
							success(res) {
								console.log(res.userName);
								console.log(res.postalCode);
								console.log(res.provinceName);
								console.log(res.cityName);
								console.log(res.countyName);
								console.log(res.detailInfo);
								console.log(res.nationalCode);
								console.log(res.telNumber);
								uni.setStorageSync('adress',res)
								that.adress = res
							}
						});
					} else {
						if (res.authSetting['scope.address'] == false) {
							console.log('未授权地址');
							wx.openSetting({
								success(res) {
									console.log(res.authSetting);
								}
							});
						} else {
							console.log('初始化第一次获取地址');
							wx.chooseAddress({
								success(res) {
									console.log(res.userName);
									console.log(res.postalCode);
									console.log(res.provinceName);
									console.log(res.cityName);
									console.log(res.countyName);
									console.log(res.detailInfo);
									console.log(res.nationalCode);
									console.log(res.telNumber);
									uni.setStorageSync('adress',res)
									that.adress = res
								}
							});
						}
					}
				}
			});
		}
	}
};
</script>

<style></style>
