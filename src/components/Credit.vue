<template>
<Row>
	<div class="credit">
		<Row><span>Random Quote Generator using Quotes on Design API v4</span></Row>
		<Row><span>Made with <i class="fa fa-heart"></i> by Renzy Ortega</span></Row>
		<Row>
			<a href="https://github.com/ortegarenzy" target="_blank" class="social-icon"><i class="fa fa-github"></i></a>
			<a href="https://www.linkedin.com/in/florentinoortega/" target="_blank" class="social-icon"><i class="fa fa-linkedin"></i></a>
		</Row>
	</div>
</Row>
</template>

<script>
export default {
	name : "Credit"
}
</script>

<style scoped>
.credit {
	padding-top: 50px;
	padding-bottom: 50px;
	text-align: center;
}
.credit .social-icon {
	padding: 0px 10px;
	font-size: 20px;
	text-decoration: none;
	color: #ffffff;
}
</style>