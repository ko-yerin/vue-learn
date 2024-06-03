<template>
	<div @click="excelDown">엑셀다운</div>

	<div v-for="(item, index) in arr" :key="index">
		<div>{{ item.name }}</div>
		<div>{{ item.phone }}</div>
		<input
			type="checkbox"
			v-model="item.ischecked"
			:disabled="item.ischecked"
		/>
	</div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
import * as xlsx from 'xlsx';
// xlsx 라이브러리를 구성 요소로 가져와 xlsx 개체를 통해
//내보낸 모든 기능에 액세스할 수 있도록 합니다.
//이는 Excel 파일을 생성하고 조작하는 데 필요합니다.

// const marketArr1 = ref([])

// onMounted(()=>{
// 	marketArr()
// })

// const marketArr = () => {
// 	const response = await API

// 	if(response.status === 200){
// 		marketArr1.value = response.data.data
// 	}
// }

const arr = reactive([
	{
		idx: 3,
		name: '가',
		phone: '111-1111-1111',
		ischecked: false,
	},
	{
		idx: 4,
		name: '나',
		phone: '222-2222-2222',
		ischecked: true,
	},
	{
		idx: 5,
		name: '다',
		phone: '333-3333-3333',
		ischecked: false,
	},
]);

const excelDown = async () => {
	//파일을 만든다
	const book = xlsx.utils.book_new();

	// api호출해서 데이터가져온다
	const marketData = await findFalseMarketData();

	// 가져온 데이터를 엑셀파일내에서 사용할 수 있는 워크시트 형식으로 변환
	// 데이터를 조작하는 방법중 json_to_sheet방식으로 변환
	const worksheet = xlsx.utils.json_to_sheet(marketData);

	// 엑셀 파일에 sheet 추가(엑셀파일, 시트데이터, 시트명)
	xlsx.utils.book_append_sheet(book, worksheet, 'MarketData');

	try {
		// 엑셀 다운로드 트리거, 파일이름
		xlsx.writeFile(book, 'marketData.xlsx');
		console.log('성공');

		await marketDataUpdate();

		alert('file download success');
	} catch (error) {
		console.log('error', error);
	}
};

let findFalse = [];

const findFalseMarketData = () => {
	//엑셀로 뽑은 ischecked값이 false인것만 뽑은 새로운 배열
	findFalse = arr.filter(item => item.ischecked === false);

	return findFalse;
};
const marketDataUpdate = async () => {
	//db수정을 위한 ischecked값이 false인 값의 idx로만 된 배열
	const idxsOfFalse = findFalse.map(item => item.idx);

	//db수정을 위한 http post요청 + idx배열
	// await updateDatabase(idxsOfFalse);

	//체크 on하기위해 실제배열값을 true로 변경시킴
	findFalse.forEach(item => {
		item.ischecked = true;
	});
};
</script>

<style lang="scss" scoped></style>
