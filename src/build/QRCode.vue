<template>
	<div class="">
		<h2>QR-код для портфолио</h2>
		<canvas ref="canvas"></canvas>
		<p>Отсканируйте QR-код, чтобы открыть сайт</p>
		<button class="visit-btn" @click="visitSite()">перейти по QR-коду</button>
	</div>
</template>

<script>
import QRCode from 'qrcode'
export default {
	name: 'QR код',
	data() {
		return {
			url: 'https://github.com/Igor1II1/Robot', //ссылка на ресурс укда переходим
		}
	},
	mounted() {
		const canvas = this.$refs.canvas
		if (canvas) {
			//защита от ошибок
			QRCode.toCanvas(canvas, this.url, { width: 180 }, error => {
				if (error) console.error(error)
			})
		}
	},
	methods: {
		visitSite() {
			window.open(this.url, '_blank')
		},
	},
}
</script>

<style scoped>
.qr-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 24px;
	font-family: sans-serif;
}
.qr-wrapper h2 {
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom: 8px;
}
.qr-wrapper p {
	font-size: 0.9rem;
	color: #584848;
	margin-bottom: 8px;
}
canvas {
	border: 1px solid #ccc;
	border-radius: 6px;
	padding: 4px;
	background: white;
}
.visit-btn {
	margin: 12px;
	padding: 8px 16px;
	background-color: rgb(99, 99, 161);
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: background 0.3s ease;
}
.visit-btn:hover {
	background-color: blue;
}
</style>
