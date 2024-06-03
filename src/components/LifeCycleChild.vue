<template>
	<div>LifeCycleChild</div>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue';

export default {
	setup() {
		onBeforeMount(() => {
			console.log('[Child] onBeforeMount');
		});

		onMounted(() => {
			console.log('[Child] onMounted');
		});

		onBeforeUnmount(() => {
			console.log('[Child] onBeforeUnmount');
		});
		onUnmounted(() => {
			console.log('[Child] onUnmounted');
		});

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
