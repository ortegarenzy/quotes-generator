var path = require('path')
var webpack = require("webpack")

module.exports= {
	entry : "./src/app.js",
	output : {
		path: path.resolve(__dirname, './dist'),
    	publicPath: 'dist/',
		filename : "build.js"
	},
	module : {
		rules : [
			{
				test : /\.vue$/,
				loader : "vue-loader"
			}
		]
	}
}
