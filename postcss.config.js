module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,   // 对应设计稿的宽度
      viewportHeight: 667,  // 对应设计稿的高度
      unitPrecision: 5,     // 指定`px`转换为视窗单位值的小数位数
      viewportUnit: 'vw',   // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: [], // 指定不转换为视窗单位的类，可以自定义
      minPixelValue: 1,     // 小于或等于`1px`不转换为视窗单位
      mediaQuery: false     // 允许在媒体查询中转换`px` 
    }
  }
}