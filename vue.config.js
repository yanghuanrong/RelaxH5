const path = require('path')

module.exports = {
	// 修改 pages 入口
	pages: {
		index: {
			entry: 'client/main.js', // 入口
			template: 'public/index.html', // 模板
			filename: 'index.html' // 输出文件
		}
	},
	// 扩展 webpack 配置
	chainWebpack: config => {
		// @ 默认指向 src 目录，这里要改成 client
		config.resolve.alias
			.set('@', path.resolve('client'))
	}
}