<template>
	<view>
		<button @click="startAudio">播放音乐</button>
		<view>
			音乐{{duration}}
		</view>
	</view>
</template>

<script>
	const innerAudioContext = uni.createInnerAudioContext();
	export default {
		data() {
			return {
				duration: ''
			};
		},
		onLoad() {

			innerAudioContext.onPlay(() => {
				console.log('开始播放');
			});
			innerAudioContext.onError((res) => {
				console.log(res.errMsg);
				console.log(res.errCode);
			});
			innerAudioContext.onEnded(() => {
				console.log('i am onEnded')
				//播放结束，销毁该实例
				innerAudioContext.destroy()
				console.log('已执行destory()')
			})
			
		},
		methods: {
			startAudio() {
				innerAudioContext.autoplay = true;
				innerAudioContext.src = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3';
				this.duration = innerAudioContext.duration
			}
		}
	}
</script>

<style>

</style>
