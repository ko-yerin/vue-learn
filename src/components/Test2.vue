<template>
	<div v-for="(item, index) in arr" :key="index">
		<div>{{ item.name }}</div>
		<div>{{ item.phone }}</div>
		<input type="checkbox" v-model="item.ischecked" />
	</div>
</template>

<script setup>
import { ref } from 'vue';

const arr = ref([
	{
		idx: 3,
		name: '가',
		phone: '111-1111-1111',
		ischecked: false,
	},
	{
		idx: 4,
		name: '나',
		phone: '222-2222-2222',
		ischecked: true,
	},
	{
		idx: 5,
		name: '다',
		phone: '333-3333-3333',
		ischecked: false,
	},
]);

const getFalse = arr.value.filter(item => item.ischecked === false);
console.log('getFalse', getFalse);

getFalse.forEach(item => {
	item.ischecked = true;
});
</script>

<style lang="scss" scoped></style>
