<template>
	<view>
		<button @click="getAdress">获取地址信息</button>
		<text>
			我的地址
			{{JSON.stringify(adress)}}
		</text>
	</view>
	
</template>

<script>
export default {
	data() {
		return {
			adress:''
		};
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
								that.adress = res.userName
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
									that.adress = res.userName
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
