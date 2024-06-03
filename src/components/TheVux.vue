<template>
	<div>
		<PostCreate @create-post="createPost1"></PostCreate>
		<div class="row" v-for="post in posts" :key="post.id">
			<AppCard
				:title="post.title"
				:contents="post.contents"
				:type="post.type"
			></AppCard>
		</div>
		<hr />
		<LabelInput @create-name="createName1"></LabelInput>
		<UserName
			v-model:firstName="firstName"
			v-model:lastName="lastName"
		></UserName>

		<hr />
	</div>
</template>

<script>
import { reactive, ref } from 'vue';
import AppCard from './AppCard.vue';
import PostCreate from './PostCreate1.vue';
import LabelInput from './LabelInput.vue';
import UserName from './UserName.vue';

export default {
	components: {
		AppCard,
		PostCreate,
		LabelInput,
		UserName,
	},

	setup() {
		const posts = reactive([
			{ id: 1, title: '제목1', contents: '내용1', type: 'news' },
			{ id: 2, title: '제목2', contents: '내용2', type: 'news' },
			{ id: 3, title: '제목3', contents: '내용3', type: 'notice' },
		]);

		const createPost1 = newTitle => {
			console.log('부모잘받았니', newTitle);
		};

		const createName1 = newName => {
			console.log('이름', newName);
		};

		const username = ref('');

		const firstName = ref('');
		const lastName = ref('');

		return { posts, createPost1, username, createName1, firstName, lastName };
	},
};
</script>

<style lang="scss" scoped></style>
