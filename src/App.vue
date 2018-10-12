<template>
	<div class="content-container">
		<Row>
			<Container v-show="quote">
				<blockquote v-html="quote.content"></blockquote>
				<h2 v-show="quote">- {{ quote.title }}</h2>
			</Container>
		</Row>
		<Row>
			<TextButton label="Get Quote" v-on:get-quote="generateQuote" />
		</Row>
		<Credit />
	</div>
</template>

<script>
export default {
	data() {
		return {
			quote : ""
		}
	},
	methods : {
		async getRandomQuote() {
			var timestamp = new Date()
			var apiUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&" + timestamp
			let response = await fetch(apiUrl)
			return await response.json()
		},
		async generateQuote() {
			this.clear()
			var randomQuote = await this.getRandomQuote()
			if(randomQuote) {
				this.quote = randomQuote.shift()
			}
		},
		clear() {
			this.quote = ""
		}
	},
	mounted() {
		this.generateQuote()
	}
}
</script>

<style>
html {
	background-color: #3e3f3a;
	color: #ffffff;
	font-family: 'VT323';
}
body {
	margin: 0;
	padding: 0;
}
*, :after, :before {
	box-sizing: border-box;
}
.content-container {
	display: table;
	width: 70%;
	margin: 100px auto;
}
h2 {
	font-size: 20px;   
    font-weight: 100;
    text-transform: uppercase;
}
blockquote {
	font-size: 40px;
    font-weight: 100;
    text-transform: uppercase;
    text-shadow: 1px 1px 4px black;
	border-bottom: 1px solid rgba(255, 255, 255, .125);
}
</style>