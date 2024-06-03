<template>
	<div class="card">
		<div class="card-header">Deep Child Component</div>
		<div class="card-body">
			<p>message: {{ message }}</p>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';
export default {
	setup() {
		const { message, updateMessage } = inject('message');

		updateMessage('추가할거야');

		message.value = message.value + '또또 추가할거야';
		return { message };
	},
};
</script>
