<template>
<button type="submit" class="btn" v-on:click="$emit('get-quote')">
	{{ label }}
</button>
</template>

<script>
export default {
	name : "TextButton",
	props : [ "label" ]
}
</script>

<style scoped>
.btn {
    display: block;
	margin: 0 auto;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    transition: all .15s ease-in-out;
    border-radius: 0;
	cursor: pointer;
	user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 18px;
    line-height: 1.5;
	background-color: #f3f3f3;
    border-color: #f3f3f3;
	color: #000000;
	text-transform: uppercase;
	font-family: 'VT323';
	width: 30%;
	border-radius: 0.25rem;
}
</style>