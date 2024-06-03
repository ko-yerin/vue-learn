<template>
	<div>
		<ul>
			<li v-for="fruit in arr" :key="fruit" ref="itemRefs">{{ fruit }}</li>
		</ul>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
	setup() {
		const arr = ref(['사과', '딸기', '포도']);
		const itemRefs = ref([]);

		onMounted(() => {
			console.log('123', itemRefs.value);
			itemRefs.value.forEach(item => console.log('item', item));
			itemRefs.value.forEach(item =>
				console.log('textContent', item.textContent),
			);
		});

		return { arr, itemRefs };
	},
};
</script>

<style lang="scss" scoped></style>
