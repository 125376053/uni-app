<template>
	<view>
		<button @click="pic">请上传图片</button>
		<view v-if="preview">
			<image style="width: 100px; height: 100px;display: block;" :src="preview"></image>
		</view>
		<ul>
			<li v-for="(item,index) in list" :key="index">
				<image :src="item.filePath"></image>
				<text>{{item.localTime}}</text>
			</li>
		</ul>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				preview: '',
				list: []
			};
		},
		onLoad() {
			this.getLocalPic()
		},
		methods: {
			// 选择图片
			pic() {
				wx.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: (res) => {
						//this.preview = res.tempFilePaths
						console.log(JSON.stringify(res.tempFilePaths));
						this.savePic(res.tempFilePaths)
					}
				})
			},
			// 保存图片到本地 临时路径失效
			savePic(path) {
				uni.saveFile({
					tempFilePath: path[0],
					success: (res) => {
						var savedFilePath = res.savedFilePath;
						console.log(savedFilePath);
					}
				});
			},
			// 获取本地图片列表
			getLocalPic(){
				uni.getSavedFileList({
					success:(res)=> {
						console.log(res.fileList)
						this.list = res.fileList
						this.resetList()
					}
				});
			},
			// 重组list数据 方便模板渲染
			resetList(){
				this.list.forEach(item=>{
					item.localTime = this.getMyDate(new Date(item.createTime*1000))
				})
				console.log(this.list);
			}
		}
	}
</script>

<style>
	ul{
		display: flex;
		flex-wrap:wrap;
		justify-content: flex-start;
		align-items:flex-start;
		margin-top: 20px;
	}
	li{
		/* 放大 缩小 分配剩余空间*/
		height: 120px;
		width: 100px;
		text-align: center;
	}
	li image{
		width: 80px;
		height:80px;
	}
	li text{
		line-height: 40px;
		font-size: 12px;
	}
</style>
