<template>
	<div>
		<FancyBtn> 게시글입니다 </FancyBtn>
	</div>
</template>

<script>
import { ref } from 'vue';
import FancyBtn from './FancyBtn.vue';
export default {
	components: {
		FancyBtn,
	},

	setup() {
		const slotArgs = ref('');

		const message = ref('부모컴포넌트 컨텐츠');

		return { slotArgs, message };
	},
};
</script>

<style scoped></style>
