<template>
	<div class="home">
		<div>
			<img class="robot" src="../assets/robot-home.png" />
		</div>
		<div><router-link to="/build">начни</router-link>собирать РОБОТА</div>
	</div>
</template>

<script setup></script>

<style scoped>
.home {
	text-align: center;
}
.robot {
	height: 300px;
}
</style>
