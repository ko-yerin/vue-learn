<template>
	<div>
		<div class="headerBg">
			<slot name="header">asdas</slot>
		</div>
		<div>
			<slot>asdsa</slot>
		</div>
		<div class="footerBg">
			<slot name="footer">asdsa</slot>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const headerMessage = ref('header 메시지');
		const footerMessage = ref('footer 메시지');
		return { headerMessage, footerMessage };
	},
};
</script>

<style scoped>
.headerBg {
	background-color: antiquewhite;
}
.footerBg {
	background-color: antiquewhite;
}
.fancy-main {
	background-color: blueviolet;
}
</style>
