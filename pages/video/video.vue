<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view>
				<video
					id="myVideo"
					src="../../static/video/1.mp4"
					enable-danmu
					danmu-btn
					controls
				></video>
			</view>
		</view>
		<view style="text-align: center;">
			<text>这是剑灵的游戏1v1比赛视频</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.uni-common-mt {
		margin: 10px;
	}
.uni-common-mt video{
	width: 100%;
}
</style>
