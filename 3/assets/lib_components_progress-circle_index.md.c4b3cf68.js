import{_ as p,H as e,o as t,c,J as n,E as l,V as s,C as o}from"./chunks/framework.d553856c.js";const P=JSON.parse('{"title":"环形进度条","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/progress-circle/index.md","filePath":"lib/components/progress-circle/index.md","lastUpdated":null}'),r={name:"lib/components/progress-circle/index.md"},E=s('<h1 id="环形进度条" tabindex="-1">环形进度条 <a class="header-anchor" href="#环形进度条" aria-label="Permalink to &quot;环形进度条&quot;">​</a></h1><p>环形进度条生成器允许通过 JS 动态创建一个环形进度条。</p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><h3 id="简单使用" tabindex="-1">简单使用 <a class="header-anchor" href="#简单使用" aria-label="Permalink to &quot;简单使用&quot;">​</a></h3>',4),i=o("div",{"data-zui":"ProgressCircle"},null,-1),y=s(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;progressCircleExample&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">progressCircle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">ProgressCircle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#progressCircleExample&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="指定参数" tabindex="-1">指定参数 <a class="header-anchor" href="#指定参数" aria-label="Permalink to &quot;指定参数&quot;">​</a></h3>`,2),d=o("div",{"data-zui":"ProgressCircle","data-percent":"75","data-size":"128","data-circle-color":"var(--color-success-500)"},null,-1),_=s(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;progressCircleExample&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">progressCircle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">ProgressCircle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#progressCircleExample&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    percent: </span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    size: </span><span style="color:#79B8FF;">128</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    circleColor: </span><span style="color:#9ECBFF;">&#39;var(--color-success-500)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="通过-data-zui-初始化" tabindex="-1">通过 <code>[data-zui]</code> 初始化 <a class="header-anchor" href="#通过-data-zui-初始化" aria-label="Permalink to &quot;通过 \`[data-zui]\` 初始化&quot;">​</a></h3>`,2),F=o("div",{"data-zui":"ProgressCircle","data-percent":"80","data-size":"64"},null,-1),u=s(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data-zui</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ProgressCircle&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data-percent</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;80&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data-size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;64&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ProgressCircleOptions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** 百分比。 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">percent</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** 环形进度条的尺寸（长和宽相等）。 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">size</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** 环形部分的宽度，如果指定为小于 1 的数，则按 size 的比例取值。 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">circleWidth</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** 环形部分的背景色。 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">circleBg</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** 环形部分的前景色。 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">circleColor</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** 是否在中间区域显示百分比文本，或者直接指定要显示的文本。 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">text</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div>`,3);function h(g,C,B,m,b,A){const a=e("Example");return t(),c("div",null,[E,n(a,null,{default:l(()=>[i]),_:1}),y,n(a,null,{default:l(()=>[d]),_:1}),_,n(a,null,{default:l(()=>[F]),_:1}),u])}const q=p(r,[["render",h]]);export{P as __pageData,q as default};
