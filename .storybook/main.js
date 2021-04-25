module.exports = {
  //storybook就是stories的集合
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    // "../src/**/components/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    //设置链接
    "@storybook/addon-links",
    //主要插件集合：如 addon-actions 快速注册事件等
    "@storybook/addon-essentials"
  ]
}