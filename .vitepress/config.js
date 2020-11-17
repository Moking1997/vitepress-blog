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
      [
        "link",
        { rel: "stylesheet", href: "https://unpkg.com/gitalk/dist/gitalk.css" },
      ],
      ["script", { src: "https://unpkg.com/gitalk/dist/gitalk.min.js" }],
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
      search: true,
      pages: await getPages(),
      author: "足生",
      nav: [
        { text: "首页", link: "/" },
        { text: "归档", link: "/docs" },
        { text: "分类", link: "/tags" },
      ],
    },
    dest: "public",
  };

  return config;
}
module.exports = getConfig();
