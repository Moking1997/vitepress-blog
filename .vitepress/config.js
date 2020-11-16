const path = require("path");
const getPages = require("./utils/pages");

//const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
async function getConfig() {
  const config = {
    head: [
      [
        "meta",
        {
          name: "viewport",
          content:
            "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
        },
      ],
      ["meta", { name: "keywords", content: "足生的个人博客" }],
      ["link", { rel: "icon", href: "/favicon.ico" }],
      ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
      [
        "script",
        { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
      ],
    ],
    title: "足生",
    description: "足生的个人博客",
    markdown: {
      // 代码显示行号
      lineNumbers: true,
    },
    enhanceAppFiles: path.resolve(__dirname, "./enhanceApp.ts"),
    //theme:'reform',
    themeConfig: {
      pages: await getPages(),
      author: "足生",
      nav: [
        { text: "首页", link: "/" },
        { text: "归档", link: "/docs" },
      ],
    },
    dest: "public",
  };

  return config;
}
module.exports = getConfig();
