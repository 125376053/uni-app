<script>
export default {
	data() {
		return {
			userInfo: ''
		};
	},
	onLaunch: function() {
		console.log('App Launch');
		var that =this;
		wx.getSetting({
			success(res) {
				if (res.authSetting['scope.userInfo']) {
					// 已经授权，可以直接调用 getUserInfo 获取头像昵称
					wx.getUserInfo({
						success(res) {
							console.log(res.userInfo);
							that.userInfo = res.userInfo
							that.$store.commit('userInfo',res.userInfo)
						}
					});
				}
			}
		});
		
		this.bus.$off()
		this.bus.$on('eventBus',(data)=>{
			console.log(data)
		})
		
		
	},
	onShow: function() {
		
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style></style>
