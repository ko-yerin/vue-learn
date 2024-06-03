import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import CKEditor from '@ckeditor/ckeditor5-vue';
import VueDaumPostcode from 'vue-daum-postcode';

const app = createApp(App);
app.use(CKEditor);
app.use(VueDaumPostcode);

app.provide('app-message', 'app message 입니다');
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
