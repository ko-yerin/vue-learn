<template>
	<div class="card col-4" style="">
		<div class="card-body">
			<span class="badge" :class="isBadgeClass">{{ isBadgeType }} </span>
			<h5 class="card-title mt-4">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	type: { type: String, default: 'news' },
	title: { type: String, required: true },
	contents: { type: String, required: true },
	obj: { type: Object, default: () => ({}) },
});

const isBadgeClass = computed(() => {
	return props.type === 'news' ? 'bg-secondary' : 'bg-black';
});

const isBadgeType = computed(() => {
	return props.type === 'news' ? '뉴스' : '공지사항';
});
</script>

<style></style>
