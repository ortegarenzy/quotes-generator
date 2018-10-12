<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<script>
export default {
    name: "Container"
}
</script>

<style scoped>
.container {
	position: relative;
	display: block;
	word-wrap: break-word;
	height: 410px;
	text-align: center;
}
@media (max-width: 768px) {
	.container {
		height: auto;
	}
}
</style>