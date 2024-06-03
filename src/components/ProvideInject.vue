<template>
	<div>
		<input ref="inputRef" type="text" value="hello World" />
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
	setup() {
		const inputRef = ref(null);

		onMounted(() => {
			console.log('inputRef.value.value', inputRef.value.value);
		});
		return { inputRef };
	},
};
</script>

<style lang="scss" scoped></style>
