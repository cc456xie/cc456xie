const moment = require('moment');
module.exports = {
    title: " ",
    description: " ",
    head: [
      [
        "link",
        {
          "rel": "icon",
          "href": "/head.jpg"
        }
      ],
      [
        "script",
        {},
        "\n              var _hmt = _hmt || [];\n              (function() {\n                  var hm = document.createElement(\"script\");\n                  hm.src = \"https://hm.baidu.com/hm.js?850788452cf34b7fc456bd7e8a437504\";\n                  var s = document.getElementsByTagName(\"script\")[0];\n                  s.parentNode.insertBefore(hm, s);\n              })();\n            "
      ]
    ],
    themeConfig: {
      repoLable:'github',
      docsDir:'docs',
      "nav": [
        {
          "text": "首页",
          "link": "/index"
        },
        {
          "text": "作品",
          "link": "/作品/"
        },
        {
          "text": "文章",
          "link": "/文章/"
        },
        {
          "text": "随笔",
          "link": "/随笔/"
        },
        {
          "text": "GitHub",
          "link": "https://github.com/cc456xie"
        }
      ],      
      lastUpdated: '最后更新 ',
      type: "blog",
      author: "cc456xie",
    },
    plugins: [
    ["vuepress-plugin-auto-sidebar", {}]
    ]
   
}