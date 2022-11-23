import{_ as o,r,o as c,c as t,a as p,w as e,g as n,b as a}from"./app.54376a5f.js";const i={mounted(){onZUIReady(()=>{new zui.Toolbar("#toolbar",{items:[{text:"\u9996\u9875",icon:"icon-home",active:!0},{text:"\u52A8\u6001"},{text:"\u8BBA\u575B"},{type:"divider"},{text:"\u535A\u5BA2",icon:"icon-rss"},{text:"\u5173\u6CE8\u6211\u4EEC",icon:"icon-group"},{type:"space",flex:1},{type:"btn-group",items:[{text:"\u767B\u5F55",icon:"icon-user"},{text:"\u6CE8\u518C",icon:"icon-lock"}]}],onClickItem:s=>{console.log("> toolbar.onClickItem",s)}}),new zui.Toolbar("#dropdownToolbar",{items:[{text:"\u9996\u9875",icon:"icon-home",active:!0},{type:"dropdown",icon:"icon-rss",dropdown:{items:[{text:"\u67E5\u770B"},{text:"\u8BA2\u9605"},{text:"\u53D6\u6D88\u8BA2\u9605"}]}},{type:"divider"},{type:"dropdown",text:"\u5173\u4E8E\u6211\u4EEC",icon:"icon-group",dropdown:{items:[{text:"\u5173\u4E8E"},{text:"\u6211\u4EEC\u662F\u8C01"}]}}],onClickItem:s=>{console.log("> dropdownToolbar.onClickItem",s)}}),new zui.Toolbar("#iconToolbar",{items:[{icon:"icon-home",active:!0},{type:"divider"},{icon:"icon-rss"},{icon:"icon-group"}],onClickItem:s=>{console.log("> iconToolbar.onClickItem",s)}}),new zui.Toolbar("#btnTypeIconToolbar",{btnProps:{btnType:"secondary",size:"xs"},gap:1,items:[{icon:"icon-home"},{icon:"icon-rss"},{icon:"icon-group",btnType:"primary"}]})})}},f=JSON.parse('{"title":"\u5DE5\u5177\u680F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","link":"#\u57FA\u672C\u7528\u6CD5","children":[]},{"level":2,"title":"\u5B58\u5728\u4E0B\u62C9\u83DC\u5355","slug":"\u5B58\u5728\u4E0B\u62C9\u83DC\u5355","link":"#\u5B58\u5728\u4E0B\u62C9\u83DC\u5355","children":[]},{"level":2,"title":"\u4EC5\u56FE\u6807","slug":"\u4EC5\u56FE\u6807","link":"#\u4EC5\u56FE\u6807","children":[]},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[{"level":3,"title":"\u901A\u8FC7 npm","slug":"\u901A\u8FC7-npm","link":"#\u901A\u8FC7-npm","children":[]},{"level":3,"title":"\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61 zui","slug":"\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61-zui","link":"#\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61-zui","children":[]},{"level":3,"title":"\u4F7F\u7528 React \u7EC4\u4EF6","slug":"\u4F7F\u7528-react-\u7EC4\u4EF6","link":"#\u4F7F\u7528-react-\u7EC4\u4EF6","children":[]},{"level":3,"title":"\u4F7F\u7528 jQuery \u6269\u5C55","slug":"\u4F7F\u7528-jquery-\u6269\u5C55","link":"#\u4F7F\u7528-jquery-\u6269\u5C55","children":[]}]},{"level":2,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[{"level":3,"title":"wrap","slug":"wrap","link":"#wrap","children":[]},{"level":3,"title":"gap","slug":"gap","link":"#gap","children":[]},{"level":3,"title":"btnProps","slug":"btnprops","link":"#btnprops","children":[]},{"level":3,"title":"items","slug":"items","link":"#items","children":[]},{"level":3,"title":"itemRender","slug":"itemrender","link":"#itemrender","children":[]},{"level":3,"title":"beforeRender","slug":"beforerender","link":"#beforerender","children":[]},{"level":3,"title":"afterRender","slug":"afterrender","link":"#afterrender","children":[]},{"level":3,"title":"afterDestroy","slug":"afterdestroy","link":"#afterdestroy","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"ButtonProps","slug":"buttonprops","link":"#buttonprops","children":[]}]}],"relativePath":"lib/components/toolbar/index.md","lastUpdated":null}'),D=n('<h1 id="\u5DE5\u5177\u680F" tabindex="-1">\u5DE5\u5177\u680F <a class="header-anchor" href="#\u5DE5\u5177\u680F" aria-hidden="true">#</a></h1><p>\u57FA\u4E8E\u64CD\u4F5C\u83DC\u5355 <a href="/zui/3/lib/components/action-menu/index.html">\u64CD\u4F5C\u83DC\u5355</a> \u5B9E\u73B0\u7684\u7EC4\u4EF6\u3002</p><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h2>',3),y=a("div",{id:"toolbar"},null,-1),F=n(`<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">toolbar</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> zui.</span><span style="color:#D2A8FF;">Toolbar</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;#toolbar&#39;</span><span style="color:#C9D1D9;">, {</span></span>
<span class="line"><span style="color:#C9D1D9;">    items: [</span></span>
<span class="line"><span style="color:#C9D1D9;">        {text: </span><span style="color:#A5D6FF;">&#39;\u9996\u9875&#39;</span><span style="color:#C9D1D9;">, icon: </span><span style="color:#A5D6FF;">&#39;icon-home&#39;</span><span style="color:#C9D1D9;">, active: </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {text: </span><span style="color:#A5D6FF;">&#39;\u52A8\u6001&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {text: </span><span style="color:#A5D6FF;">&#39;\u8BBA\u575B&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {type: </span><span style="color:#A5D6FF;">&#39;divider&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {text: </span><span style="color:#A5D6FF;">&#39;\u535A\u5BA2&#39;</span><span style="color:#C9D1D9;">, icon: </span><span style="color:#A5D6FF;">&#39;icon-rss&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {text: </span><span style="color:#A5D6FF;">&#39;\u5173\u6CE8\u6211\u4EEC&#39;</span><span style="color:#C9D1D9;">, icon: </span><span style="color:#A5D6FF;">&#39;icon-group&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {type: </span><span style="color:#A5D6FF;">&#39;space&#39;</span><span style="color:#C9D1D9;">, flex: </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {</span></span>
<span class="line"><span style="color:#C9D1D9;">            type: </span><span style="color:#A5D6FF;">&#39;btn-group&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">            items: [</span></span>
<span class="line"><span style="color:#C9D1D9;">                {text: </span><span style="color:#A5D6FF;">&#39;\u767B\u5F55&#39;</span><span style="color:#C9D1D9;">, icon: </span><span style="color:#A5D6FF;">&#39;icon-user&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">                {text: </span><span style="color:#A5D6FF;">&#39;\u6CE8\u518C&#39;</span><span style="color:#C9D1D9;">, icon: </span><span style="color:#A5D6FF;">&#39;icon-lock&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">            ],</span></span>
<span class="line"><span style="color:#C9D1D9;">        },</span></span>
<span class="line"><span style="color:#C9D1D9;">    ],</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">onClickItem</span><span style="color:#C9D1D9;">: (</span><span style="color:#FFA657;">info</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;&gt; toolbar.onClickItem&#39;</span><span style="color:#C9D1D9;">, info);</span></span>
<span class="line"><span style="color:#C9D1D9;">    },</span></span>
<span class="line"><span style="color:#C9D1D9;">});</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;&gt; toolbar&#39;</span><span style="color:#C9D1D9;">, toolbar);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u5B58\u5728\u4E0B\u62C9\u83DC\u5355" tabindex="-1">\u5B58\u5728\u4E0B\u62C9\u83DC\u5355 <a class="header-anchor" href="#\u5B58\u5728\u4E0B\u62C9\u83DC\u5355" aria-hidden="true">#</a></h2>`,2),b=a("div",{id:"dropdownToolbar"},null,-1),d=n(`<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">dropdownToolbar</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> zui.</span><span style="color:#D2A8FF;">Toolbar</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;#dropdownToolbar&#39;</span><span style="color:#C9D1D9;">, {</span></span>
<span class="line"><span style="color:#C9D1D9;">    items: [</span></span>
<span class="line"><span style="color:#C9D1D9;">        {text: </span><span style="color:#A5D6FF;">&#39;\u9996\u9875&#39;</span><span style="color:#C9D1D9;">, icon: </span><span style="color:#A5D6FF;">&#39;icon-home&#39;</span><span style="color:#C9D1D9;">, active: </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {</span></span>
<span class="line"><span style="color:#C9D1D9;">            type: </span><span style="color:#A5D6FF;">&#39;dropdown&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">            icon: </span><span style="color:#A5D6FF;">&#39;icon-rss&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">            dropdown: {</span></span>
<span class="line"><span style="color:#C9D1D9;">                items: [</span></span>
<span class="line"><span style="color:#C9D1D9;">                    {text: </span><span style="color:#A5D6FF;">&#39;\u67E5\u770B&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">                    {text: </span><span style="color:#A5D6FF;">&#39;\u8BA2\u9605&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">                    {text: </span><span style="color:#A5D6FF;">&#39;\u53D6\u6D88\u8BA2\u9605&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">                ],</span></span>
<span class="line"><span style="color:#C9D1D9;">            },</span></span>
<span class="line"><span style="color:#C9D1D9;">        },</span></span>
<span class="line"><span style="color:#C9D1D9;">        {type: </span><span style="color:#A5D6FF;">&#39;divider&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {</span></span>
<span class="line"><span style="color:#C9D1D9;">            type: </span><span style="color:#A5D6FF;">&#39;dropdown&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">            text: </span><span style="color:#A5D6FF;">&#39;\u5173\u4E8E\u6211\u4EEC&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">            icon: </span><span style="color:#A5D6FF;">&#39;icon-group&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">            dropdown: {</span></span>
<span class="line"><span style="color:#C9D1D9;">                items: [</span></span>
<span class="line"><span style="color:#C9D1D9;">                    {text: </span><span style="color:#A5D6FF;">&#39;\u5173\u4E8E&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">                    {text: </span><span style="color:#A5D6FF;">&#39;\u6211\u4EEC\u662F\u8C01&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">                ],</span></span>
<span class="line"><span style="color:#C9D1D9;">            },</span></span>
<span class="line"><span style="color:#C9D1D9;">        },</span></span>
<span class="line"><span style="color:#C9D1D9;">    ],</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">onClickItem</span><span style="color:#C9D1D9;">: (</span><span style="color:#FFA657;">info</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;&gt; dropdownToolbar.onClickItem&#39;</span><span style="color:#C9D1D9;">, info);</span></span>
<span class="line"><span style="color:#C9D1D9;">    },</span></span>
<span class="line"><span style="color:#C9D1D9;">});</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;&gt; dropdownToolbar&#39;</span><span style="color:#C9D1D9;">, dropdownToolbar);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="\u4EC5\u56FE\u6807" tabindex="-1">\u4EC5\u56FE\u6807 <a class="header-anchor" href="#\u4EC5\u56FE\u6807" aria-hidden="true">#</a></h2>`,2),C=a("div",{id:"iconToolbar"},null,-1),u=a("div",{id:"btnTypeIconToolbar"},null,-1),m=n(`<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">iconToolbar</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> zui.</span><span style="color:#D2A8FF;">Toolbar</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;#iconToolbar&#39;</span><span style="color:#C9D1D9;">, {</span></span>
<span class="line"><span style="color:#C9D1D9;">    items: [</span></span>
<span class="line"><span style="color:#C9D1D9;">        {icon: </span><span style="color:#A5D6FF;">&#39;icon-home&#39;</span><span style="color:#C9D1D9;">, active: </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {type: </span><span style="color:#A5D6FF;">&#39;divider&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {icon: </span><span style="color:#A5D6FF;">&#39;icon-rss&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {icon: </span><span style="color:#A5D6FF;">&#39;icon-group&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">    ],</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">onClickItem</span><span style="color:#C9D1D9;">: (</span><span style="color:#FFA657;">info</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;&gt; iconToolbar.onClickItem&#39;</span><span style="color:#C9D1D9;">, info);</span></span>
<span class="line"><span style="color:#C9D1D9;">    },</span></span>
<span class="line"><span style="color:#C9D1D9;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">btnTypeIconToolbar</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> zui.</span><span style="color:#D2A8FF;">Toolbar</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;#btnTypeIconToolbar&#39;</span><span style="color:#C9D1D9;">, {</span></span>
<span class="line"><span style="color:#C9D1D9;">    btnProps: {btnType: </span><span style="color:#A5D6FF;">&#39;secondary&#39;</span><span style="color:#C9D1D9;">, size: </span><span style="color:#A5D6FF;">&#39;xs&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">    gap: </span><span style="color:#79C0FF;">2</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">    items: [</span></span>
<span class="line"><span style="color:#C9D1D9;">        {icon: </span><span style="color:#A5D6FF;">&#39;icon-home&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {icon: </span><span style="color:#A5D6FF;">&#39;icon-rss&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">        {icon: </span><span style="color:#A5D6FF;">&#39;icon-group&#39;</span><span style="color:#C9D1D9;">, btnType: </span><span style="color:#A5D6FF;">&#39;primary&#39;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">    ],</span></span>
<span class="line"><span style="color:#C9D1D9;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><h3 id="\u901A\u8FC7-npm" tabindex="-1">\u901A\u8FC7 npm <a class="header-anchor" href="#\u901A\u8FC7-npm" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> {Toolbar} </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;zui/toolbar&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">toolbar</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Toolbar</span><span style="color:#C9D1D9;">(element, options);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61-zui" tabindex="-1">\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61 <code>zui</code> <a class="header-anchor" href="#\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61-zui" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">toolbar</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> zui.</span><span style="color:#D2A8FF;">Toolbar</span><span style="color:#C9D1D9;">(element, options);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u4F7F\u7528-react-\u7EC4\u4EF6" tabindex="-1">\u4F7F\u7528 React \u7EC4\u4EF6 <a class="header-anchor" href="#\u4F7F\u7528-react-\u7EC4\u4EF6" aria-hidden="true">#</a></h3><div class="language-jsx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> {render} </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;react&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> {Toolbar} </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;zui/toolbar/main-react&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D2A8FF;">render</span><span style="color:#C9D1D9;">(element, &lt;</span><span style="color:#7EE787;">Toolbar</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">{...</span><span style="color:#C9D1D9;">options</span><span style="color:#FF7B72;">}</span><span style="color:#C9D1D9;"> /&gt;);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u4F7F\u7528-jquery-\u6269\u5C55" tabindex="-1">\u4F7F\u7528 jQuery \u6269\u5C55 <a class="header-anchor" href="#\u4F7F\u7528-jquery-\u6269\u5C55" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#D2A8FF;">$</span><span style="color:#C9D1D9;">(element).</span><span style="color:#D2A8FF;">toolbar</span><span style="color:#C9D1D9;">(options);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">toolbar</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">$</span><span style="color:#C9D1D9;">(element).</span><span style="color:#D2A8FF;">data</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;zui.toolbar&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h2><p>\u5728 <a href="/zui/3/lib/components/action-menu/index.html#\u9009\u9879">\u64CD\u4F5C\u83DC\u5355</a> \u9009\u9879\u57FA\u7840\u4E0A\u6DFB\u52A0\u65B0\u7684\u53C2\u6570\u9009\u9879\u3002</p><h3 id="wrap" tabindex="-1"><code>wrap</code> <a class="header-anchor" href="#wrap" aria-hidden="true">#</a></h3><p>\u9650\u5236\u5DE5\u5177\u680F\u6309\u94AE\u8FC7\u591A\u8D85\u51FA\u65F6\u662F\u5426\u6362\u884C\u3002</p><ul><li>\u7C7B\u578B\uFF1A<code>boolean</code>\uFF1B</li><li>\u5FC5\u9009\uFF1A\u5426\uFF1B</li><li>\u9ED8\u8BA4\u503C\uFF1A<code>false</code>\u3002</li></ul><h3 id="gap" tabindex="-1"><code>gap</code> <a class="header-anchor" href="#gap" aria-hidden="true">#</a></h3><p>\u81EA\u5B9A\u4E49\u5DE5\u5177\u680F\u6309\u94AE\u7684\u95F4\u8DDD\uFF0C\u4E0E <code>.toolbar</code> \u540C\u7EA7\u751F\u6210 <a href="/zui/3/utilities/flex/utilities/gap.html"><code>.gap-*</code></a> \u7684\u5DE5\u5177\u7C7B\u63A7\u5236\u6309\u94AE\u95F4\u8DDD\u3002</p><ul><li>\u7C7B\u578B\uFF1A<code>number | string</code></li><li>\u5FC5\u9009\uFF1A\u5426</li></ul><h3 id="btnprops" tabindex="-1"><code>btnProps</code> <a class="header-anchor" href="#btnprops" aria-hidden="true">#</a></h3><p>\u7EE7\u627F\u6309\u94AE\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF0C \u81EA\u5B9A\u4E49\u5DE5\u5177\u680F\u5355\u9879\u5C5E\u6027\u3002</p><ul><li>\u7C7B\u578B\uFF1A<code><a href="#buttonprops">ButtonProps</a></code></li><li>\u5FC5\u9009\uFF1A\u5426</li></ul><h3 id="items" tabindex="-1"><code>items</code> <a class="header-anchor" href="#items" aria-hidden="true">#</a></h3><p>\u57FA\u4E8E <a href="/zui/3/lib/components/action-menu/index.html#\u9009\u9879">\u64CD\u4F5C\u83DC\u5355</a> \u9009\u9879\u548C\u6309\u94AE\u9009\u9879\u3002</p><h4 id="btntype" tabindex="-1"><code>btnType</code> <a class="header-anchor" href="#btntype" aria-hidden="true">#</a></h4><p>\u8BBE\u7F6E\u5355\u4E2A\u5DE5\u5177\u680F\u5B50\u9879\u7684\u5C55\u793A\u7C7B\u578B\u3002</p><ul><li>\u7C7B\u578B\uFF1A<code>string</code>\uFF1B</li><li>\u5FC5\u9009\uFF1A\u5426\uFF1B</li><li>\u9ED8\u8BA4\uFF1A<code>ghost</code>\u3002</li></ul><h3 id="itemrender" tabindex="-1"><code>itemRender</code> <a class="header-anchor" href="#itemrender" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u7528\u4E8E\u5BF9\u7EC4\u4EF6\u6E32\u67D3\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002</p><h3 id="beforerender" tabindex="-1"><code>beforeRender</code> <a class="header-anchor" href="#beforerender" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u5728\u6E32\u67D3\u4E4B\u524D\u8C03\u7528\u3002</p><h3 id="afterrender" tabindex="-1"><code>afterRender</code> <a class="header-anchor" href="#afterrender" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u5728\u6E32\u67D3\u4E4B\u540E\u8C03\u7528\u3002</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><code>firstRender</code>\uFF1A\u5224\u65AD\u662F\u5426\u7B2C\u4E00\u6B21\u6E32\u67D3\uFF1B</li><li><code>menu</code>\uFF1A\u7EC4\u4EF6\u4FE1\u606F\u3002</li></ul><h3 id="afterdestroy" tabindex="-1"><code>afterDestroy</code> <a class="header-anchor" href="#afterdestroy" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u5728\u7EC4\u4EF6\u9500\u6BC1\u4E4B\u540E\u8C03\u7528\u3002</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="buttonprops" tabindex="-1"><code>ButtonProps</code> <a class="header-anchor" href="#buttonprops" aria-hidden="true">#</a></h3><p>\u7EE7\u627F\u6309\u94AE\u7684\u5C5E\u6027\u3002</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FF7B72;">type</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">ButtonProps</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">component</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">ComponentType</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">btnType</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">; </span><span style="color:#8B949E;">// primary, secondary ...</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">size</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;xs&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;sm&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;lg&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;xl&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">className</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">ClassNameLike</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">style</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">JSX</span><span style="color:#C9D1D9;">.</span><span style="color:#FFA657;">CSSProperties</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">children</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">ComponentChildren</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> (() </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">ComponentChildren</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">onClick</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">JSX</span><span style="color:#C9D1D9;">.</span><span style="color:#FFA657;">MouseEventHandler</span><span style="color:#C9D1D9;">&lt;</span><span style="color:#FFA657;">HTMLAnchorElement</span><span style="color:#C9D1D9;">&gt;;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">url</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">target</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">disabled</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">boolean</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">active</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">boolean</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">icon</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">VNode</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">text</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">ComponentChildren</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">square</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">boolean</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">trailingIcon</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">VNode</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">caret</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;up&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;down&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;left&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;right&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">boolean</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">hint</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">loading</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">boolean</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,40);function h(s,A,g,_,v,B){const l=r("Example");return c(),t("div",null,[D,p(l,null,{default:e(()=>[y]),_:1}),F,p(l,null,{default:e(()=>[b]),_:1}),d,p(l,{class:"col gap-2"},{default:e(()=>[C,u]),_:1}),m])}const T=o(i,[["render",h]]);export{f as __pageData,T as default};
