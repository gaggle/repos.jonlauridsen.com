(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{508:function(e,t,r){__NEXT_REGISTER_PAGE("/",function(){return e.exports=r(509),{page:e.exports.default}})},509:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.IndexPage=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=r(128),o=r(108),l=r(160);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const c=({data:e,hasFetchedOnce:t,requestHistory:r})=>({hasInitialized:t,repos:e.repos,requestHistory:r}),i=(0,a.connect)(c)(({repos:e,hasInitialized:t})=>n.default.createElement(l.renderprops.RenderIfElse,{test:t,pass:()=>n.default.createElement(l.page.Masonry,null,Object.entries(e).map(([e,t],r)=>n.default.createElement(l.repocards.RepoCard,s({key:e,"data-index":r},t)))),fail:()=>n.default.createElement(l.page.Loading,null)}));class p extends n.Component{render(){return n.default.createElement(o.Container,null,n.default.createElement(i,null))}}t.IndexPage=p;var u=(0,a.connect)(c)(p);t.default=u}},[[508,1,0]]]);