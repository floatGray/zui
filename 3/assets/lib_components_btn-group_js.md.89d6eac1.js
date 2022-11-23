import{_ as l,r as o,o as t,c as p,a as c,w as r,b as n,d,g as i}from"./app.54376a5f.js";const D={mounted(){onZUIReady(()=>{const a=new zui.BtnGroup("#btnGroup",{items:[{text:"\u590D\u5236",icon:"icon-copy"},{text:"\u7C98\u8D34",icon:"icon-paste"},{text:"\u526A\u5207"},{type:"heading",text:"\u66F4\u591A\u64CD\u4F5C",caret:!0,children:[{text:"\u590D\u5236",icon:"icon-copy"}]},{text:"\u5BFC\u5165",icon:"icon-upload-alt"},{text:"\u5BFC\u51FA",icon:"icon-download-alt"},{text:"\u4FDD\u5B58",icon:"icon-save",onClick:s=>console.log("> btnGroupItem.clicked",s)}],onClickItem:s=>{console.log("> btnGroup.onClickItem",s)}});console.log("> btnGroup",a),new zui.BtnGroup("#iconBtnGroup",{size:"lg",items:[{icon:"icon-copy"},{icon:"icon-paste"},{icon:"icon-upload-alt"},{icon:"icon-download-alt"},{icon:"icon-save",onClick:s=>console.log("> btnGroupItem.clicked",s)}]})})}},x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","link":"#\u57FA\u672C\u7528\u6CD5","children":[]},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[{"level":3,"title":"\u901A\u8FC7 npm","slug":"\u901A\u8FC7-npm","link":"#\u901A\u8FC7-npm","children":[]},{"level":3,"title":"\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61 zui","slug":"\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61-zui","link":"#\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61-zui","children":[]},{"level":3,"title":"\u4F7F\u7528 React \u7EC4\u4EF6","slug":"\u4F7F\u7528-react-\u7EC4\u4EF6","link":"#\u4F7F\u7528-react-\u7EC4\u4EF6","children":[]},{"level":3,"title":"\u4F7F\u7528 jQuery \u6269\u5C55","slug":"\u4F7F\u7528-jquery-\u6269\u5C55","link":"#\u4F7F\u7528-jquery-\u6269\u5C55","children":[]}]},{"level":2,"title":"\u6784\u9020\u65B9\u6CD5","slug":"\u6784\u9020\u65B9\u6CD5","link":"#\u6784\u9020\u65B9\u6CD5","children":[]},{"level":2,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[{"level":3,"title":"className","slug":"classname","link":"#classname","children":[]},{"level":3,"title":"items","slug":"items","link":"#items","children":[]},{"level":3,"title":"size","slug":"size","link":"#size","children":[]},{"level":3,"title":"type","slug":"type","link":"#type","children":[]},{"level":3,"title":"itemRender","slug":"itemrender","link":"#itemrender","children":[]},{"level":3,"title":"beforeRender","slug":"beforerender","link":"#beforerender","children":[]},{"level":3,"title":"afterRender","slug":"afterrender","link":"#afterrender","children":[]},{"level":3,"title":"afterDestroy","slug":"afterdestroy","link":"#afterdestroy","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"ButtonProps","slug":"buttonprops","link":"#buttonprops","children":[]}]}],"relativePath":"lib/components/btn-group/js.md","lastUpdated":null}'),y=n("p",null,"script# \u6309\u94AE\u7EC4\u751F\u6210\u5668",-1),u=n("h2",{id:"\u57FA\u672C\u7528\u6CD5",tabindex:"-1"},[d("\u57FA\u672C\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true"},"#")],-1),b=n("div",{id:"btnGroup"},null,-1),F=n("div",{id:"iconBtnGroup"},null,-1),C=i(`<div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">id</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;btnGroup&quot;</span><span style="color:#C9D1D9;">&gt;&lt;/</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">id</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;iconBtnGroup&quot;</span><span style="color:#C9D1D9;">&gt;&lt;/</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">btnGroup</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">BtnGroup</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;#btnGroup&#39;</span><span style="color:#C9D1D9;">, {</span></span>
<span class="line"><span style="color:#C9D1D9;">    items: [</span></span>
<span class="line"><span style="color:#C9D1D9;">        {text: </span><span style="color:#A5D6FF;">&#39;\u590D\u5236&#39;</span><span style="color:#C9D1D9;">, icon: </span><span style="color:#A5D6FF;">&#39;icon-copy&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {text: </span><span style="color:#A5D6FF;">&#39;\u7C98\u8D34&#39;</span><span style="color:#C9D1D9;">, icon: </span><span style="color:#A5D6FF;">&#39;icon-paste&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {text: </span><span style="color:#A5D6FF;">&#39;\u526A\u5207&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {type: </span><span style="color:#A5D6FF;">&#39;heading&#39;</span><span style="color:#C9D1D9;">, text: </span><span style="color:#A5D6FF;">&#39;\u66F4\u591A\u64CD\u4F5C&#39;</span><span style="color:#C9D1D9;">, caret: </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {text: </span><span style="color:#A5D6FF;">&#39;\u5BFC\u5165&#39;</span><span style="color:#C9D1D9;">, icon: </span><span style="color:#A5D6FF;">&#39;icon-upload-alt&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {text: </span><span style="color:#A5D6FF;">&#39;\u5BFC\u51FA&#39;</span><span style="color:#C9D1D9;">, icon: </span><span style="color:#A5D6FF;">&#39;icon-download-alt&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {text: </span><span style="color:#A5D6FF;">&#39;\u4FDD\u5B58&#39;</span><span style="color:#C9D1D9;">, icon: </span><span style="color:#A5D6FF;">&#39;icon-save&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#D2A8FF;">onClick</span><span style="color:#C9D1D9;">: (</span><span style="color:#FFA657;">event</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;&gt; btnGroupItem.clicked&#39;</span><span style="color:#C9D1D9;">, event)},</span></span>
<span class="line"><span style="color:#C9D1D9;">    ],</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">onClickItem</span><span style="color:#C9D1D9;">: (</span><span style="color:#FFA657;">info</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;&gt; btnGroup.onClickItem&#39;</span><span style="color:#C9D1D9;">, info);</span></span>
<span class="line"><span style="color:#C9D1D9;">    },</span></span>
<span class="line"><span style="color:#C9D1D9;">});</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;&gt; btnGroup&#39;</span><span style="color:#C9D1D9;">, btnGroup);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">btnGroup</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">BtnGroup</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;#iconBtnGroup&#39;</span><span style="color:#C9D1D9;">, {</span></span>
<span class="line"><span style="color:#C9D1D9;">    size: </span><span style="color:#A5D6FF;">&#39;lg&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">    items: [</span></span>
<span class="line"><span style="color:#C9D1D9;">        {icon: </span><span style="color:#A5D6FF;">&#39;icon-copy&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {icon: </span><span style="color:#A5D6FF;">&#39;icon-paste&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {type: </span><span style="color:#A5D6FF;">&#39;heading&#39;</span><span style="color:#C9D1D9;">, caret: </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {icon: </span><span style="color:#A5D6FF;">&#39;icon-upload-alt&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {icon: </span><span style="color:#A5D6FF;">&#39;icon-download-alt&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {icon: </span><span style="color:#A5D6FF;">&#39;icon-save&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#D2A8FF;">onClick</span><span style="color:#C9D1D9;">: (</span><span style="color:#FFA657;">event</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;&gt; btnGroupItem.clicked&#39;</span><span style="color:#C9D1D9;">, event)},</span></span>
<span class="line"><span style="color:#C9D1D9;">    ],</span></span>
<span class="line"><span style="color:#C9D1D9;">});</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><h3 id="\u901A\u8FC7-npm" tabindex="-1">\u901A\u8FC7 npm <a class="header-anchor" href="#\u901A\u8FC7-npm" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> {BtnGroup} </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;zui/btn-group&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">btnGroup</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">BtnGroup</span><span style="color:#C9D1D9;">(element, options);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61-zui" tabindex="-1">\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61 <code>zui</code> <a class="header-anchor" href="#\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61-zui" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">btnGroup</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> zui.</span><span style="color:#D2A8FF;">BtnGroup</span><span style="color:#C9D1D9;">(element, options);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u4F7F\u7528-react-\u7EC4\u4EF6" tabindex="-1">\u4F7F\u7528 React \u7EC4\u4EF6 <a class="header-anchor" href="#\u4F7F\u7528-react-\u7EC4\u4EF6" aria-hidden="true">#</a></h3><div class="language-jsx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> {render} </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;react&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> {BtnGroup} </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;zui/btn-group/main-react&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF;">render</span><span style="color:#C9D1D9;">(element, &lt;</span><span style="color:#7EE787;">BtnGroup</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">{...</span><span style="color:#C9D1D9;">options</span><span style="color:#FF7B72;">}</span><span style="color:#C9D1D9;"> /&gt;);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u4F7F\u7528-jquery-\u6269\u5C55" tabindex="-1">\u4F7F\u7528 jQuery \u6269\u5C55 <a class="header-anchor" href="#\u4F7F\u7528-jquery-\u6269\u5C55" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#D2A8FF;">$</span><span style="color:#C9D1D9;">(element).</span><span style="color:#D2A8FF;">btnGroup</span><span style="color:#C9D1D9;">(options);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">btnGroup</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">$</span><span style="color:#C9D1D9;">(element).</span><span style="color:#D2A8FF;">data</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;zui.btngroup&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u6784\u9020\u65B9\u6CD5" tabindex="-1">\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u6784\u9020\u65B9\u6CD5" aria-hidden="true">#</a></h2><p><strong>\u5B9A\u4E49\uFF1A</strong></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#D2A8FF;">constructor</span><span style="color:#C9D1D9;">(element: HTMLElement </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> string, options: BtnGroupOptions);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><code>element</code>\uFF1A\u6307\u5B9A\u7528\u4E8E\u521B\u5EFA\u6309\u94AE\u7EC4\u7684\u5BB9\u5668\u5143\u7D20\uFF0C\u6216\u8005\u901A\u8FC7\u5B57\u7B26\u4E32\u6307\u5B9A\u7528\u4E8E\u67E5\u627E\u5BB9\u5668\u5143\u7D20\u7684\u9009\u62E9\u5668</li><li><code>options</code>\uFF1A\u6307\u5B9A\u9009\u9879</li></ul><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">BtnGroup</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;#btnGroup&#39;</span><span style="color:#C9D1D9;">, {</span></span>
<span class="line"><span style="color:#C9D1D9;">    items: [</span></span>
<span class="line"><span style="color:#C9D1D9;">        {text: </span><span style="color:#A5D6FF;">&#39;\u590D\u5236&#39;</span><span style="color:#C9D1D9;">, icon: </span><span style="color:#A5D6FF;">&#39;icon-copy&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {text: </span><span style="color:#A5D6FF;">&#39;\u7C98\u8D34&#39;</span><span style="color:#C9D1D9;">, icon: </span><span style="color:#A5D6FF;">&#39;icon-paste&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {text: </span><span style="color:#A5D6FF;">&#39;\u526A\u5207&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">    ],</span></span>
<span class="line"><span style="color:#C9D1D9;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h2><h3 id="classname" tabindex="-1"><code>className</code> <a class="header-anchor" href="#classname" aria-hidden="true">#</a></h3><p>\u7C7B\u540D\u3002</p><ul><li>\u7C7B\u578B\uFF1A<code>string</code></li><li>\u5FC5\u9009\uFF1A\u5426</li></ul><h3 id="items" tabindex="-1"><code>items</code> <a class="header-anchor" href="#items" aria-hidden="true">#</a></h3><ul><li>\u7C7B\u578B\uFF1A<code><a href="#buttonprops">ButtonProps</a></code></li><li>\u5FC5\u9009\uFF1A\u662F</li></ul><h3 id="size" tabindex="-1"><code>size</code> <a class="header-anchor" href="#size" aria-hidden="true">#</a></h3><p>\u6309\u94AE\u5C3A\u5BF8\u3002</p><ul><li>\u7C7B\u578B\uFF1A<code>string</code></li><li>\u53EF\u9009\u9879\uFF1A <code>xs | sm | lg | xl</code></li><li>\u5FC5\u9009\uFF1A\u5426</li></ul><h3 id="type" tabindex="-1"><code>type</code> <a class="header-anchor" href="#type" aria-hidden="true">#</a></h3><p>\u6309\u94AE\u7EC4\u7C7B\u578B\u3002</p><ul><li>\u7C7B\u578B\uFF1A<code>string</code></li><li>\u5FC5\u9009\uFF1A\u5426</li></ul><h3 id="itemrender" tabindex="-1"><code>itemRender</code> <a class="header-anchor" href="#itemrender" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u7528\u4E8E\u5BF9\u7EC4\u4EF6\u6E32\u67D3\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002</p><h3 id="beforerender" tabindex="-1"><code>beforeRender</code> <a class="header-anchor" href="#beforerender" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u5728\u6E32\u67D3\u4E4B\u524D\u8C03\u7528\u3002</p><h3 id="afterrender" tabindex="-1"><code>afterRender</code> <a class="header-anchor" href="#afterrender" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u5728\u6E32\u67D3\u4E4B\u540E\u8C03\u7528\u3002</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><code>firstRender</code>\uFF1A\u5224\u65AD\u662F\u5426\u7B2C\u4E00\u6B21\u6E32\u67D3\uFF1B</li><li><code>menu</code>\uFF1A\u7EC4\u4EF6\u4FE1\u606F\u3002</li></ul><h3 id="afterdestroy" tabindex="-1"><code>afterDestroy</code> <a class="header-anchor" href="#afterdestroy" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u5728\u7EC4\u4EF6\u9500\u6BC1\u4E4B\u540E\u8C03\u7528\u3002</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="buttonprops" tabindex="-1"><code>ButtonProps</code> <a class="header-anchor" href="#buttonprops" aria-hidden="true">#</a></h3><p>\u7EE7\u627F\u6309\u94AE\u7684\u5C5E\u6027\u3002</p><p>\u5177\u4F53\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u5C5E\u6027\u540D\u79F0</th><th>\u5C5E\u6027\u542B\u4E49</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u9879</th></tr></thead><tbody><tr><td><code>text</code></td><td>\u540D\u79F0</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>size</code></td><td>\u5C3A\u5BF8</td><td><code>string</code></td><td>-</td><td><code>xs / sm / lg / xl</code></td></tr><tr><td><code>icon</code></td><td>\u6309\u94AE\u5DE6\u4FA7\u56FE\u6807</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>trailingIcon</code></td><td>\u53F3\u4FA7\u56FE\u6807</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>url</code></td><td>\u8DF3\u8F6C\u94FE\u63A5\u5730\u5740</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>className</code></td><td>\u8BBE\u7F6E <code>a</code> \u6807\u7B7E\u7C7B\u540D</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>style</code></td><td>\u8BBE\u7F6E <code>a</code> \u6807\u7B7E\u6837\u5F0F</td><td><code>object</code></td><td>-</td><td>-</td></tr><tr><td><code>component</code></td><td>DOM \u5143\u7D20\u540D\u79F0</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>target</code></td><td>\u5728\u4F55\u5904\u6253\u5F00\u94FE\u63A5\u5730\u5740</td><td><code>string</code></td><td><code>_self</code></td><td><code> _self / _black / _top / _parent</code></td></tr><tr><td><code>type</code></td><td>\u6309\u94AE\u7C7B\u578B</td><td><code>string</code></td><td><code>item</code></td><td><code>item / divider \uFF08\u5206\u5272\u7EBF\uFF09/ heading / custom</code></td></tr><tr><td><code>disabled</code></td><td>\u6309\u94AE\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>active</code></td><td>\u6309\u94AE\u6FC0\u6D3B\u72B6\u6001</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>children</code></td><td>\u5B50\u7EC4\u4EF6</td><td><code>array</code></td><td>-</td><td>-</td></tr><tr><td><code>onClick</code></td><td>\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6</td><td><code>function</code></td><td>-</td><td>-</td></tr><tr><td><code>square</code></td><td>\u6309\u94AE\u662F\u5426\u5C55\u793A\u4E3A\u65B9\u5F62</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td></tr><tr><td><code>hint</code></td><td>\u6309\u94AE\u9F20\u6807\u60AC\u6D6E\u63D0\u793A\u6587\u6848</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>caret</code></td><td>\u7BAD\u5934\u5C55\u793A</td><td><code>string / boolean</code></td><td>-</td><td><code>up / down / left / right / boolean</code></td></tr><tr><td><code>loading</code></td><td>\u6309\u94AE\u52A0\u8F7D\u72B6\u6001</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr></tbody></table>`,44);function h(a,s,m,g,v,A){const e=o("Example");return t(),p("div",null,[y,u,c(e,{class:"col gap-2"},{default:r(()=>[b,F]),_:1}),C])}const B=l(D,[["render",h]]);export{x as __pageData,B as default};
