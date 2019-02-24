<template>
	<view class="content">
        <!-- <image class="logo" src="../../static/logo.png"></image>
		<view @click="haha($event,'zhangsan')">
            <text class="title">{{title}}</text>
        </view> -->
		<button @click="img">选择照片</button>
		<image :src="urls" />
		<!-- <rich-text :nodes="strings"></rich-text> -->
		<!-- <scroll-view scroll-y style="height:300px;">
			<view>1</view>
			<view>1</view>
			<view>1</view>
			<view>1</view><view></view>
			<view>1</view>
			<view>1</view>
			<view>1</view><view></view>
			<view>1</view>
			<view>1</view>
			<view>1</view>
			<view>1</view>
			<view>1</view>
			<view>1</view>
			<view>1</view><view></view>
			<view>1</view>
			<view>1</view>
			<view>1</view><view></view>
			<view>1</view>
			<view>1</view>
			<view>1</view>
			<view>1</view>
			<view>1</view>
			<view>1</view>
			<view>1</view><view></view>
			<view>1</view>
			<view>1</view>
			<view>1</view><view></view>
			<view>1</view>
			<view>1</view>
			<view>1</view>
		</scroll-view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello123',
				urls:''
			}
		},
		onLoad() {

		},
		methods: {
			haha(e,name){
				console.log(e)
				console.log(name)
			},
			img(){
				uni.chooseImage({
					count:3,
					sizeType:[],
					success(res) {
						console.log(res)
// 						uni.previewImage({
// 							urls:res.tempFilePaths
// 						})
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
