<template>
	<view>
		<button v-if="!adress" @click="getAdress">获取地址信息</button>
		<view>
			我的地址
			<view v-for="(item,index) in adress" :key="index">
				<view>{{item}}</view>
			</view>
		</view>
		<!-- 750设计稿 元素为100宽-->
		<view style="width:100rpx;height:100rpx;background: red;">100宽</view>
		<button @click="pay">发起支付</button>

		<button @click="fapiao">发票</button>
		<view>
			我的发票信息
			<view v-for="(item,index) in fp" :key="index">
				<view>{{item}}</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				adress: uni.getStorageSync('adress') || '',
				fp:""
			};
		},
		onLoad() {
			console.log(123)
			console.log(this.adress)
		},
		methods: {
			fapiao() {
				var that = this;
				uni.chooseInvoiceTitle({
					success(res) {
						console.log(res.type);
						console.log(res.title);
						console.log(res.taxNumber);
						console.log(res.companyAddress);
						console.log(res.telephone);
						console.log(res.bankName);
						console.log(res.bankAccount);
						that.fp = res
					}
				})
			},
			pay() {
				uni.requestPayment({
					provider: 'wxpay',
					timeStamp: String(Date.now()),
					nonceStr: 'A1B2C3D4E5',
					package: 'prepay_id=wx20180101abcdefg',
					signType: 'MD5',
					paySign: '',
					success: function(res) {
						console.log('success:' + JSON.stringify(res));
					},
					fail: function(err) {
						console.log('fail:' + JSON.stringify(err));
					}
				});
			},
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
									uni.setStorageSync('adress', res)
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
										uni.setStorageSync('adress', res)
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
