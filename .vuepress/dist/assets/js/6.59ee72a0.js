(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{352:function(t,i,e){"use strict";e.r(i);var n={name:"Valine",mounted:function(){var t=e(348);"undefined"!=typeof window&&(this.window=window,window.AV=e(349)),this.valine=new t,this.initValine()},watch:{$route:function(t,i){i.path!=t.path&&this.initValine()}},methods:{initValine:function(){var t=location.origin+location.pathname;document.getElementsByClassName("leancloud-visitors")[0].id=t,this.valine.init({el:"#vcomments",appId:"Kweg6vSK6SF9mBRSll6XrYK3-gzGzoHsz",appKey:"1hsrXzhjp502IVIGx0UEPFXU",notify:!1,verify:!1,path:t,visitor:!0,avatar:"mm",placeholder:"浮世三千, 吾爱有三"})}}},a=e(42),s=Object(a.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,i=this._self._c||t;return i("section",{staticStyle:{"border-top":"2px solid #eaecef","padding-top":"1rem","margin-top":"2rem"}},[i("div",[i("span",{staticClass:"leancloud-visitors",attrs:{"data-flag-title":"Your Article Title"}},[i("em",{staticClass:"post-meta-item-text"},[this._v("阅读量： ")]),this._v(" "),i("i",{staticClass:"leancloud-visitors-count"})])]),this._v(" "),i("h3",[i("a",{attrs:{href:"javascript:;"}}),this._v("\n    评 论：\n  ")]),this._v(" "),i("div",{attrs:{id:"vcomments"}})])}],!1,null,null,null);i.default=s.exports}}]);