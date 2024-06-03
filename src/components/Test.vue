<template>
	<circle-progress
		:is-gradient="true"
		:gradient="{
			angle: 90,
			startColor: '#ff0000',
			stopColor: '#ffff00',
		}"
	/>
</template>

<script setup>
import 'vue3-circle-progress/dist/circle-progress.css';
import CircleProgress from 'vue3-circle-progress';
</script>

<style lang="scss" scoped></style>
