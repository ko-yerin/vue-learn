<template>
	<div>
		<label>
			이름
			<input v-model="username" type="text" />
		</label>
		<button @click="createName"></button>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['createName']);

const toggleLike = () => {
	emit('toggleLike');
};
</script>

<style lang="scss" scoped></style>
