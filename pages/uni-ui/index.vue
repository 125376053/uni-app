<template>
	<div>
		<uni-badge text="1"></uni-badge>
		<uni-badge text="2" type="purple" @click="bindClick"></uni-badge>
		<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
		<uni-list>
			<uni-list-item title="标题文字" show-arrow="false"></uni-list-item>
			<uni-list-item title="标题文字"></uni-list-item>
			<uni-list-item title="标题文字" show-badge="true" badge-text="12"></uni-list-item>
			<uni-list-item title="禁用状态" disabled="true" show-badge="true" badge-text="12"></uni-list-item>
		</uni-list>
	</div>
</template>

<script>
	import {
		uniBadge,
		uniList,
		uniListItem
	} from '@dcloudio/uni-ui'
	export default {
		components: {
			uniBadge,
			uniList,
			uniListItem
		}
	}
</script>

<style>

</style>
