import{_ as D,r as y,o as d,c as g,a as l,w as p,b as s,d as i,g as o}from"./app.4b8cbe96.js";const C={mounted(){onZUIReady(()=>{new zui.Pager("#pagerExample1",{items:[{type:"info",text:"\u5171 {recTotal} \u9879"},{type:"size-menu",text:"\u6BCF\u9875 {recPerPage} \u9879",dropdown:{placement:"top"}},{type:"link",page:"first",icon:"icon-double-angle-left",hint:"\u7B2C\u4E00\u9875"},{type:"link",page:"prev",icon:"icon-angle-left",hint:"\u4E0A\u4E00\u9875"},{type:"info",text:"{page}/{pageTotal}"},{type:"link",page:"next",icon:"icon-angle-right",hint:"\u4E0B\u4E00\u9875"},{type:"link",page:"last",icon:"icon-double-angle-right",hint:"\u6700\u540E\u4E00\u9875"},{type:"goto",text:"\u8DF3\u8F6C"}],page:2,recTotal:101,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}",onClickItem:n=>{console.log("> pagerExample1.onClickItem",n)}}),new zui.Pager("#pagerExample2",{items:[{type:"info",text:"\u5171 {recTotal} \u9879"},{type:"size-menu",text:"\u6BCF\u9875 {recPerPage} \u9879",dropdown:{placement:"top"}},{type:"link",page:"first",icon:"icon-double-angle-left",hint:"\u7B2C\u4E00\u9875"},{type:"link",page:"prev",icon:"icon-angle-left",hint:"\u4E0A\u4E00\u9875"},{type:"nav",count:6},{type:"link",page:"next",icon:"icon-angle-right",hint:"\u4E0B\u4E00\u9875"},{type:"link",page:"last",icon:"icon-double-angle-right",hint:"\u6700\u540E\u4E00\u9875"},{type:"goto",text:"\u8DF3\u8F6C"}],page:2,recTotal:51,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}"});const a={items:[{type:"link",page:"prev",icon:"icon-angle-left",hint:"\u4E0A\u4E00\u9875"},{type:"nav"},{type:"link",page:"next",icon:"icon-angle-right",hint:"\u4E0B\u4E00\u9875"}],page:2,recTotal:47,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}"};new zui.Pager("#pagerAllCount",{...a});const c=new zui.Pager("#pagerMaxCount",{items:[{type:"link",page:"prev",icon:"icon-angle-left",hint:"\u4E0A\u4E00\u9875"},{type:"nav",count:6},{type:"link",page:"next",icon:"icon-angle-right",hint:"\u4E0B\u4E00\u9875"}],page:1,recTotal:101,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}",onClickItem:n=>{var t;const r=(t=n.event.target.querySelector(".text"))==null?void 0:t.innerText;Number(r)&&c.render({page:Number(r)})}});new zui.Pager("#pagerGoto",{items:[{type:"link",page:"prev",icon:"icon-angle-left",hint:"\u4E0A\u4E00\u9875"},{type:"info",text:"{page}/{pageTotal}"},{type:"link",page:"next",icon:"icon-angle-right",hint:"\u4E0B\u4E00\u9875"},{type:"goto",text:"\u8DF3\u8F6C"}],page:1,recTotal:101,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}",onClickItem:n=>{console.log(n)}}),new zui.Pager("#pagerNav1",{btnProps:{btnType:"border"},...a}),new zui.Pager("#pagerNav2",{btnProps:{btnType:"primary-outline bg-white"},...a}),new zui.Pager("#pagerNav3",{btnProps:{btnType:"secondary-pale"},...a})})}},S=JSON.parse('{"title":"\u5206\u9875\u751F\u6210\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EFC\u5408\u7528\u6CD5","slug":"\u7EFC\u5408\u7528\u6CD5","link":"#\u7EFC\u5408\u7528\u6CD5","children":[]},{"level":2,"title":"\u7B80\u5355\u5206\u9875","slug":"\u7B80\u5355\u5206\u9875","link":"#\u7B80\u5355\u5206\u9875","children":[]},{"level":2,"title":"\u8DF3\u8F6C\u5230","slug":"\u8DF3\u8F6C\u5230","link":"#\u8DF3\u8F6C\u5230","children":[]},{"level":2,"title":"\u5916\u89C2","slug":"\u5916\u89C2","link":"#\u5916\u89C2","children":[]},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[{"level":3,"title":"\u901A\u8FC7npm","slug":"\u901A\u8FC7npm","link":"#\u901A\u8FC7npm","children":[]},{"level":3,"title":"\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61","slug":"\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61","link":"#\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61","children":[]},{"level":3,"title":"\u4F7F\u7528React \u7EC4\u4EF6","slug":"\u4F7F\u7528react-\u7EC4\u4EF6","link":"#\u4F7F\u7528react-\u7EC4\u4EF6","children":[]},{"level":3,"title":"\u4F7F\u7528Jquery \u6269\u5C55","slug":"\u4F7F\u7528jquery-\u6269\u5C55","link":"#\u4F7F\u7528jquery-\u6269\u5C55","children":[]}]},{"level":2,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[{"level":3,"title":"linkCreator","slug":"linkcreator","link":"#linkcreator","children":[]},{"level":3,"title":"page","slug":"page","link":"#page","children":[]},{"level":3,"title":"recTotal","slug":"rectotal","link":"#rectotal","children":[]},{"level":3,"title":"recPerPage","slug":"recperpage","link":"#recperpage","children":[]},{"level":3,"title":"pageTotal","slug":"pagetotal","link":"#pagetotal","children":[]},{"level":3,"title":"items","slug":"items","link":"#items","children":[]},{"level":3,"title":"onClickItem","slug":"onclickitem","link":"#onclickitem","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"PagerInfo","slug":"pagerinfo","link":"#pagerinfo","children":[]},{"level":3,"title":"PagerItemOptions","slug":"pageritemoptions","link":"#pageritemoptions","children":[]}]}],"relativePath":"lib/components/pager/js.md","lastUpdated":null}'),u=s("h1",{id:"\u5206\u9875\u751F\u6210\u5668",tabindex:"-1"},[i("\u5206\u9875\u751F\u6210\u5668 "),s("a",{class:"header-anchor",href:"#\u5206\u9875\u751F\u6210\u5668","aria-hidden":"true"},"#")],-1),F=s("p",null,"\u5F53\u6570\u636E\u91CF\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u5206\u9875\u751F\u6210\u5668\u52A8\u6001\u5206\u89E3\u6570\u636E\u3002",-1),b=s("h2",{id:"\u7EFC\u5408\u7528\u6CD5",tabindex:"-1"},[i("\u7EFC\u5408\u7528\u6CD5 "),s("a",{class:"header-anchor",href:"#\u7EFC\u5408\u7528\u6CD5","aria-hidden":"true"},"#")],-1),h=s("div",{id:"pagerExample1"},null,-1),m=s("div",{id:"pagerExample2"},null,-1),A=o("",2),P=s("div",{id:"pagerAllCount"},null,-1),f=s("p",null,"\u5927\u4E8E 6 \u9875\u65F6\u7684\u6548\u679C\uFF1A",-1),v=s("div",{id:"pagerMaxCount"},null,-1),_=o("",2),x=s("div",{id:"pagerGoto"},null,-1),k=o("",3),E=s("div",{id:"pagerNav1"},null,-1),T=s("div",{id:"pagerNav2"},null,-1),w=s("div",{id:"pagerNav3"},null,-1),B=o("",58);function z(a,c,n,r,t,I){const e=y("Example");return d(),g("div",null,[u,F,b,l(e,{class:"col gap-2"},{default:p(()=>[h,m]),_:1}),A,l(e,{class:"col gap-2"},{default:p(()=>[P,f,v]),_:1}),_,l(e,null,{default:p(()=>[x]),_:1}),k,l(e,{class:"col gap-2"},{default:p(()=>[E,T,w]),_:1}),B])}const q=D(C,[["render",z]]);export{S as __pageData,q as default};
