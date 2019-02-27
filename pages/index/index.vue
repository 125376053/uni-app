<template>
	<view v-if="userInfo">
		<div class="top">
			<text>欢迎您回来{{ userInfo.nickName }}</text>
			<image class="avtar" :src="userInfo.avatarUrl"></image>
		</div>
		<view class="uni-padding-wrap">
			<view class="page-section">
				<view class="page-section-spacing">
					<swiper
						class="swiper"
						:indicator-dots="indicatorDots"
						:autoplay="autoplay"
						:interval="interval"
						:duration="duration"
					>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/image/go2.jpg"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/image/go3.jpg"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<ul>
			<li title="我的列表">我的列表</li>
			<li title="新闻列表">新闻列表</li>
			<li @click="gotoVideo" title="电影列表">电影列表</li>
		</ul>
		<view class="uni-padding-wrap uni-common-mt">
			<view>
				<video
					id="myVideo"
					src="http://125.39.54.27/vwecam.gtimg.com/1009_c8ff19ead79e46cbb30f664b6a8569c5.f20.mp4?sha=03CA8F336D1A4ECBCFC77A52D42B7C2021B9C23C&ptype=http&vkey=FC98FF384323BA1C056E81C81FA968AB427107F7F4DE372FE0CAA181B1830B163FD4EF5F95390F3F1E5AE39385DAC05588390B5A3442C061&sdtfrom=v1000&owner=0&ocid=479466156&ocid=424744364&ocid=203017226"
					enable-danmu
					danmu-btn
					controls
				></video>
			</view>
		</view>
	</view>
</template>

<script>
// import { uniList, uniListItem } from '@dcloudio/uni-ui';
export default {
	components: {
		//uniList,
		//uniListItem
	},
	data() {
		return {
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500
		};
	},
	computed: {
		userInfo() {
			return this.$store.getters.userInfo;
		}
	},
	methods: {
		gotoVideo(){
			wx.redirectTo({
				url: '/pages/video/video'
			})
		}
	},
	watch: {
		userInfo(a) {
			console.log(a);
			if (a) {
				uni.setNavigationBarTitle({
					title: '首页'
				});
			}
		}
	},
	onLoad() {
		console.log(123);
		uni.showLoading({
			title: '加载中'
		});
		setTimeout(() => {
			uni.hideLoading();
		}, 2000);
	},
	onReady() {}
};
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
.uni-padding-wrap {
	margin: 10px;
}
.swiper {
	height: 169px;
}
.swiper-item image {
	width: 100%;
	height: 169px;
}
.uni-common-mt video{
	width: 100%;
}

ul{
	padding: 10px;
}
li{
	height: 30px;
	line-height: 30px;
	border-bottom: 1px solid #ccc;
	font-size:14px;
}
</style>
