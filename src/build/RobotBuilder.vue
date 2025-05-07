<template>
	<div>
		<button class="add-to-cart" @click="addToCart()">В КОРЗИНУ!</button>
		<div class="top-row">
			<div class="top part">
				<div class="robot-name">
					{{ selectedRobot.head.title }}
					<span v-if="selectedRobot.head.onSale" class="sale"> SALE! </span>
				</div>
				<img @click="showPartInfo" :src="selectedRobot.head.src" title="head" />
				<button @click="selectPreviosHead()" class="prev-selector">
					&#9668;
				</button>
				<button @click="selectNextHead()" class="next-selector">&#9658;</button>
			</div>
		</div>
		<div class="middle-row">
			<div class="left part">
				<img :src="selectedRobot.leftArm.src" title="left arm" />
				<button @click="selectPreviosLeftArm()" class="prev-selector">
					&#9650;
				</button>
				<button @click="selectNextLeftArm()" class="next-selector">
					&#9660;
				</button>
			</div>
			<div class="center part">
				<img :src="selectedRobot.torso.src" title="torso" />
				<button @click="selectPreviosTorsos()" class="prev-selector">
					&#9650;
				</button>
				<button @click="selectNextTorsos()" class="next-selector">
					&#9660;
				</button>
			</div>
			<div class="right part">
				<img :src="selectedRobot.rightArm.src" title="right arm" />
				<button @click="selectPreviosRightArm()" class="prev-selector">
					&#9650;
				</button>
				<button @click="selectNextRightArm()" class="next-selector">
					&#9660;
				</button>
			</div>
		</div>
		<div class="bottom-row">
			<div class="bottom part">
				<img :src="selectedRobot.base.src" title="base" />
				<button @click="selectPreviosBase()" class="prev-selector">
					&#9668;
				</button>
				<button @click="selectNextBase()" class="next-selector">&#9658;</button>
			</div>
		</div>
		<div>
			<h2>КОРЗИНА</h2>
			<table>
				<thead>
					<tr>
						<th>РОБОТ</th>
						<th class="cost">ЦЕНА</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="robot in cart">
						<td>{{ robot.head.title }}</td>
						<td class="cost">{{ robot.cost }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import availableParts from '../data/parts'

function getPreviosValidIndex(index, length) {
	const decIndex = index - 1
	return decIndex < 0 ? length - 1 : decIndex
}
function getNextValidIndex(index, length) {
	const incIndex = index + 1
	return incIndex > length - 1 ? 0 : incIndex
}

export default {
	name: 'RobotBuilder',
	data() {
		return {
			availableParts,
			cart: [],
			selectedHeadIndex: 0,
			selectedBaseIndex: 0,
			selectedTorsoIndex: 0,
			selectedLeftArmIndex: 0,
			selectedRightArmIndex: 0,
		}
	},
	computed: {
		selectedRobot() {
			return {
				head: availableParts.heads[this.selectedHeadIndex],
				leftArm: availableParts.arms[this.selectedLeftArmIndex],
				torso: availableParts.torsos[this.selectedTorsoIndex],
				rightArm: availableParts.arms[this.selectedRightArmIndex],
				base: availableParts.bases[this.selectedBaseIndex],
			}
		},
	},
	methods: {
		showPartInfo() {
			this.$router.push({
				name: 'ЗАПЧАСТИ',
				params: {
					id: selectedPart.id,
					paertType: selectedPart.type,
				},
			})
		},
		addToCart() {
			const robot = this.selectedRobot
			const cost =
				robot.head.cost +
				robot.leftArm.cost +
				robot.torso.cost +
				robot.rightArm.cost +
				robot.base.cost
			this.cart.push(Object.assign(robot, { cost }))
		},
		selectNextHead() {
			this.selectedHeadIndex = getNextValidIndex(
				this.selectedHeadIndex,
				availableParts.heads.length
			)
		},
		selectPreviosHead() {
			this.selectedHeadIndex = getPreviosValidIndex(
				this.selectedHeadIndex,
				availableParts.heads.length
			)
		},
		selectNextBase() {
			this.selectedBaseIndex = getNextValidIndex(
				this.selectedBaseIndex,
				availableParts.bases.length
			)
		},
		selectPreviosBase() {
			this.selectedBaseIndex = getPreviosValidIndex(
				this.selectedBaseIndex,
				availableParts.bases.length
			)
		},
		selectNextTorsos() {
			this.selectedTorsoIndex = getNextValidIndex(
				this.selectedTorsoIndex,
				availableParts.torsos.length
			)
		},
		selectPreviosTorsos() {
			this.selectedTorsoIndex = getPreviosValidIndex(
				this.selectedTorsoIndex,
				availableParts.torsos.length
			)
		},
		selectNextLeftArm() {
			this.selectedLeftArmIndex = getNextValidIndex(
				this.selectedLeftArmIndex,
				availableParts.arms.length
			)
		},
		selectPreviosLeftArm() {
			this.selectedLeftArmIndex = getPreviosValidIndex(
				this.selectedLeftArmIndex,
				availableParts.arms.length
			)
		},
		selectNextRightArm() {
			this.selectedRightArmIndex = getNextValidIndex(
				this.selectedRightArmIndex,
				availableParts.arms.length
			)
		},
		selectPreviosRightArm() {
			this.selectedRightArmIndex = getPreviosValidIndex(
				this.selectedRightArmIndex,
				availableParts.arms.length
			)
		},
	},
}
</script>

<style>
.part {
	position: relative;
	width: 165px;
	height: 165px;
	border: 3px solid #aaa;
}
.part {
	img {
		width: 165px;
	}
}
.top-row {
	display: flex;
	justify-content: space-around;
}
.middle-row {
	display: flex;
	justify-content: center;
}
.bottom-row {
	display: flex;
	justify-content: space-around;
	border-top: none;
}
.head {
	border-bottom: none;
}
.left {
	border-right: none;
}
.right {
	border-left: none;
}
.left img {
	transform: rotate(-90deg);
}
.right img {
	transform: rotate(90deg);
}
.bottom {
	border-top: none;
}
.prev-selector {
	position: absolute;
	z-index: 1;
	top: -3px;
	left: -28px;
	width: 25px;
	height: 171px;
}
.next-selector {
	position: absolute;
	z-index: 1;
	top: -3px;
	right: -28px;
	width: 25px;
	height: 171px;
}
.center .prev-selector,
.center .next-selector {
	opacity: 0.8;
}
.left .prev-selector {
	top: -28px;
	left: -3px;
	width: 144px;
	height: 25px;
}
.left .next-selector {
	top: auto;
	bottom: -28px;
	left: -3px;
	width: 144px;
	height: 25px;
}
.right .prev-selector {
	top: -28px;
	left: 24px;
	width: 144px;
	height: 25px;
}
.right .next-selector {
	top: auto;
	bottom: -28px;
	left: 24px;
	width: 144px;
	height: 25px;
}
.right .next-selector {
	right: -3px;
}
.robot-name {
	position: absolute;
	top: -25px;
	text-align: center;
	width: 100%;
}
.sale {
	color: red;
}

td,
th {
	text-align: left;
	padding: 5px;
	padding-right: 20px;
}
.cost {
	text-align: right;
}
</style>
