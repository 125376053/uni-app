<template>
	<view v-if="userInfo">
		<div class="top">
			<text>欢迎您回来{{ userInfo.nickName }}</text>
			<image class="avtar" :src="userInfo.avatarUrl"></image>
		</div>
		<view class="uni-padding-wrap">
			<view class="page-section">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
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
			<li @click="gotoPic">图片列表</li>
			<li @click="gotoAudio">音乐列表</li>
			<li @click="gotoVideo">电影列表</li>
		</ul>
		
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
			gotoVideo() {
				wx.navigateTo({
					url: '/pages/video/video'
				})
			},
			gotoAudio(){
				wx.navigateTo({
					url:'/pages/audio/audio'
				})
			},
			gotoPic(){
				uni.navigateTo({
					url:'/pages/photo/photo'
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

	.uni-common-mt video {
		width: 100%;
	}

	ul {
		padding: 10px;
	}

	li {
		height: 30px;
		line-height: 30px;
		border-bottom: 1px solid #ccc;
		font-size: 14px;
	}
</style>
