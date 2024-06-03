<template>
	<div>
		<button @click="visible = !visible">Toggle Child</button>
		<LifeCycleChild v-if="visible"></LifeCycleChild>
	</div>
</template>

<script>
import { ref } from 'vue';
import LifeCycleChild from './LifeCycleChild.vue';

export default {
	components: {
		LifeCycleChild,
	},
	setup() {
		const visible = ref(false);

		return { visible };
	},
};
</script>

<style lang="scss" scoped></style>
