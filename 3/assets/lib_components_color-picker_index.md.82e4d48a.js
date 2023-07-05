import{_ as p,H as c,o as t,c as r,J as o,E as n,C as s,a as e,V as l}from"./chunks/framework.d553856c.js";const E={mounted(){onZUIReady(()=>{new zui.ColorPicker("#color-picker-1",{heading:"选择颜色"}),new zui.ColorPicker("#color-picker-2",{heading:"选择颜色",colors:["#0079FF","#00DFA2","#F6FA70","#FF0060","#F2D8D8","#5C8984","#545B77","#374259"],defaultValue:"#374259"}),new zui.ColorPicker("#color-picker-3",{heading:"选择颜色",icon:"zentao",hint:"这是一个提示"}),new zui.ColorPicker("#color-picker-4",{heading:"选择颜色",syncText:"#sync-text",syncColor:"#sync-color",syncBackground:"#sync-background",syncBorder:"#sync-border"})})}},A=JSON.parse('{"title":"颜色选择器","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/color-picker/index.md","filePath":"lib/components/color-picker/index.md","lastUpdated":null}'),i=s("h1",{id:"颜色选择器",tabindex:"-1"},[e("颜色选择器 "),s("a",{class:"header-anchor",href:"#颜色选择器","aria-label":'Permalink to "颜色选择器"'},"​")],-1),y=s("p",null,"基于下拉选择器实现的颜色选择器。",-1),d=s("h2",{id:"基本使用",tabindex:"-1"},[e("基本使用 "),s("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1),u=s("p",null,"在选定元素上调用初始化函数即可使用颜色选择器。",-1),h=s("div",{id:"color-picker-1"},null,-1),F=l(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;color-picker-1&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">colorPicker</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ColorPicker</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#color-picker-1&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    heading: </span><span style="color:#9ECBFF;">&#39;选择颜色&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h2 id="自定义颜色" tabindex="-1">自定义颜色 <a class="header-anchor" href="#自定义颜色" aria-label="Permalink to &quot;自定义颜色&quot;">​</a></h2><p>通过设置 <code>colors</code> 属性自定义颜色列表。</p>`,4),_=s("div",{id:"color-picker-2"},null,-1),g=l(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;color-picker-2&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">colorPicker</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ColorPicker</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#color-picker-2&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    heading: </span><span style="color:#9ECBFF;">&#39;选择颜色&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    colors: [</span><span style="color:#9ECBFF;">&#39;#0079FF&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;#00DFA2&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;#F6FA70&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;#FF0060&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;#F2D8D8&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;#5C8984&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;#545B77&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;#374259&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    defaultValue: </span><span style="color:#9ECBFF;">&#39;#374259&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="自定义图标" tabindex="-1">自定义图标 <a class="header-anchor" href="#自定义图标" aria-label="Permalink to &quot;自定义图标&quot;">​</a></h2><p>通过设置 <code>icon</code> 属性自定义颜色显示图标。</p>`,4),C=s("div",{id:"color-picker-3"},null,-1),B=l(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;color-picker-3&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">colorPicker</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ColorPicker</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#color-picker-3&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    heading: </span><span style="color:#9ECBFF;">&#39;选择颜色&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&#39;zentao&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="同步颜色" tabindex="-1">同步颜色 <a class="header-anchor" href="#同步颜色" aria-label="Permalink to &quot;同步颜色&quot;">​</a></h2><p>通过为 <code>syncText</code>、<code>syncColor</code>、<code>syncBackground</code>、<code>syncBorder</code> 设置选择器可实现将当前选中的颜色信息同步到相应元素。</p>`,4),k=s("div",{id:"color-picker-4"},null,-1),b=s("div",{class:"flex h-8 items-center"},[e("颜色值："),s("span",{id:"sync-text"})],-1),v=s("div",{class:"row gap-2"},[s("div",{id:"sync-color",class:"center h-8 w-16"},"文字颜色"),s("div",{id:"sync-background",class:"center h-8 w-16"},"背景色"),s("div",{id:"sync-border",class:"center h-8 w-16 border"},"边框色")],-1),q=l('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;color-picker-4&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;flex h-8 items-center&quot;</span><span style="color:#E1E4E8;">&gt;颜色值：&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sync-text&quot;</span><span style="color:#E1E4E8;"> &gt;&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;row gap-2&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sync-color&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;center h-8 w-16&quot;</span><span style="color:#E1E4E8;">&gt;文字颜色&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sync-background&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;center h-8 w-16&quot;</span><span style="color:#E1E4E8;">&gt;背景色&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sync-border&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;center h-8 w-16 border&quot;</span><span style="color:#E1E4E8;">&gt;边框色&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">colorPicker</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ColorPicker</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#color-picker-4&#39;</span><span style="color:#E1E4E8;">, {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    heading: </span><span style="color:#9ECBFF;">&#39;选择颜色&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    syncText: </span><span style="color:#9ECBFF;">&#39;#sync-text&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    syncColor: </span><span style="color:#9ECBFF;">&#39;#sync-color&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    syncBackground: </span><span style="color:#9ECBFF;">&#39;#sync-background&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    syncBorder: </span><span style="color:#9ECBFF;">&#39;#sync-border&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><h3 id="heading-属性" tabindex="-1"><code>heading 属性</code> <a class="header-anchor" href="#heading-属性" aria-label="Permalink to &quot;`heading 属性`&quot;">​</a></h3><p>颜色面板标题。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="icon" tabindex="-1"><code>icon</code> <a class="header-anchor" href="#icon" aria-label="Permalink to &quot;`icon`&quot;">​</a></h3><p>图标。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="closebtn" tabindex="-1"><code>closeBtn</code> <a class="header-anchor" href="#closebtn" aria-label="Permalink to &quot;`closeBtn`&quot;">​</a></h3><p>颜色面板是否使用关闭按钮。</p><ul><li>类型：<code>boolean</code></li><li>必选：否</li><li>默认值：<code>true</code></li></ul><h3 id="synctext" tabindex="-1"><code>syncText</code> <a class="header-anchor" href="#synctext" aria-label="Permalink to &quot;`syncText`&quot;">​</a></h3><p>颜色值容器选择器。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="synccolor" tabindex="-1"><code>syncColor</code> <a class="header-anchor" href="#synccolor" aria-label="Permalink to &quot;`syncColor`&quot;">​</a></h3><p>文本色同步容器选择器。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="syncbackground" tabindex="-1"><code>syncBackground</code> <a class="header-anchor" href="#syncbackground" aria-label="Permalink to &quot;`syncBackground`&quot;">​</a></h3><p>背景色同步容器选择器。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="syncborder" tabindex="-1"><code>syncBorder</code> <a class="header-anchor" href="#syncborder" aria-label="Permalink to &quot;`syncBorder`&quot;">​</a></h3><p>边框色同步容器选择器。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul>',24);function m(x,P,D,T,f,S){const a=c("Example");return t(),r("div",null,[i,y,d,u,o(a,null,{default:n(()=>[h]),_:1}),F,o(a,null,{default:n(()=>[_]),_:1}),g,o(a,null,{default:n(()=>[C]),_:1}),B,o(a,null,{default:n(()=>[k,b,v]),_:1}),q])}const V=p(E,[["render",m]]);export{A as __pageData,V as default};
