import QRCode from '@/build/QRCode.vue'
import RobotBuilder from '@/build/RobotBuilder.vue'
import HomePage from '@/home/HomePage.vue'
import PartInfo from '@/parts/partInfo.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

//прописываем , если омпонент не подлючился автоматически
// import HomePage from '@/home/HomePage.vue'

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'главная',
			component: HomePage,
		},
		{
			path: '/build',
			name: 'построй бота',
			component: RobotBuilder,
		},
		{
			path: '/qrcode',
			name: 'QR код',
			component: QRCode,
		},
		{
			path: '/parts/partType/:id',
			name: 'ЗАПЧАСТИ',
			component: PartInfo,
		},
	],
})
