const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3021"
      }
    }
  },
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
					@import "~@/assets/css/abstracts";
				`
			}
		}
	}
})
