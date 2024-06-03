<template>
	<AppCard type="notice" title="제목" contents="내용"></AppCard>
	<AppCard type="news" title="title" contents="contents"></AppCard>
</template>

<script setup>
import AppCard from './AppCard.vue';
</script>

<style lang="scss" scoped></style>

<!-- <script>
import { computed } from 'vue';
export default {
	props: {
		type: {
			type: String,
			default: 'news',
			validator: value => {
				return ['news', 'notice'].includes(value);
			},
		},
		title: {
			type: String,
			required: true, //필수속성
		},
		contents: {
			type: String,
			required: true,
		},

		obj: {
			type: Object,
			default: () => {},
		},
	},
	setup(props) {
		const isBadgeClass = computed(() => {
			return props.type === 'news' ? 'bg-secondary' : 'bg-black';
		});

		const isBadgeType = computed(() => {
			return props.type === 'news' ? '뉴스' : '공지사항';
		});
		return { isBadgeClass, isBadgeType };
	},
};
</script> -->
