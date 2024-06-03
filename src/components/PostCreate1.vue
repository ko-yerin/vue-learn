<template>
	<div>ddd</div>
	<ckeditor
		:editor="editor"
		v-model="editorData"
		:config="editorConfig"
	></ckeditor>

	<div class="">
		<input
			class="text-black required wp-70"
			type="text"
			id="postcode"
			title="우편번호"
			required
			readonly
			v-model="postcode"
		/>
		<button class="btns wp-30" @click="execDaumPostcode()">주소검색</button>
	</div>
	<div ref="addressIframe"></div>
</template>

<script setup>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ref } from 'vue';

const addressIframe = ref('');
const editor = ClassicEditor;
const editorData = ref('');

const editorConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo',
			// Add other features as needed
		],
	},
};

const execDaumPostcode = () => {
	new daum.Postcode({
		// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
		oncomplete: data => {
			// 도로명 주소의 노출 규칙에 따라 주소를 표시
			// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여  분기한다.
			let roadAddr = data.roadAddress; // 도로명 주소 변수
			let extraRoadAddr = ''; // 참고 항목 변수

			// 법정동명이 있을 경우 추가한다. (법정리는 제외)
			// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
			if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
				extraRoadAddr += data.bname;
			}
			// 건물명이 있고, 공동주택일 경우 추가한다.
			if (data.buildingName !== '' && data.apartment === 'Y') {
				extraRoadAddr +=
					extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName;
			}
			// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
			if (extraRoadAddr !== '') {
				extraRoadAddr = ' (' + extraRoadAddr + ')';
			}
			// 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
			if (roadAddr !== '') {
				roadAddr += extraRoadAddr;
			}

			// 우편번호와 주소 정보를 해당 필드에 넣는다.
			postcode.value = data.zonecode;
			roadAddress.value = roadAddr;
			if (data && data.jibunAddress) {
				jibunAddress.value = data.jibunAddress; // 필요한 경우 extraAddress ref를 선언
			} else {
				jibunAddress.value = data.autoJibunAddress;
			}

			extraAddress.value = '';

			// 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
			if (roadAddr !== '') {
				if (extraRoadAddr) {
					extraAddress.value = extraRoadAddr;
				} else {
					extraAddress.value = '()';
				}
			} else {
				extraAddress.value = '';
			}
		},

		// width : '100%',
		heigt: '1000vh',
	}).embed(addressIframe.value);
};
</script>

<style lang="css" scoped>
.a {
	width: 100px;
	height: 1000px;
	background-color: aquamarine;
}
</style>
