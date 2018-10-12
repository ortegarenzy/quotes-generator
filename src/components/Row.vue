<template>
<div class="row"><slot></slot></div>
</template>

<script>
export default {
	name : "Row"
}
</script>

<style scoped>
.row {
	margin-left: -15px;
    margin-right: -15px;
	margin-bottom: 15px;
}
</style>