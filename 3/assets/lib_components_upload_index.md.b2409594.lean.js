import{_ as c,H as i,o as d,c as r,J as l,E as s,C as a,a as p,V as o}from"./chunks/framework.d553856c.js";const E={mounted(){onZUIReady(()=>{new zui.Upload("#example1",{name:"files1"}),new zui.Upload("#example2",{name:"files2",multiple:!1}),new zui.Upload("#example3",{name:"files3",multiple:!0,limitCount:5,exceededCountHint:"超出上传文件数量限制"}),new zui.Upload("#example4",{name:"files4",multiple:!0,limitSize:"50MB",exceededSizeHint:"超出上传文件大小限制"}),new zui.Upload("#example5",{name:"files5",renameBtn:!1,deleteBtn:!1}),new zui.Upload("#example6",{name:"files6",useIconBtn:!1}),new zui.Upload("#example7",{name:"files7",draggable:!0,tip:"可点击添加或拖拽上传，不超过50M"});const n=new File(["file1"],"file1.txt",{type:"text/plain"}),t=new File(["file2"],"file2.txt",{type:"text/plain"});new zui.Upload("#example8",{name:"files8",defaultFileList:[n,t]})})}},D=JSON.parse('{"title":"上传文件","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/upload/index.md","filePath":"lib/components/upload/index.md","lastUpdated":null}'),u=a("h1",{id:"上传文件",tabindex:"-1"},[p("上传文件 "),a("a",{class:"header-anchor",href:"#上传文件","aria-label":'Permalink to "上传文件"'},"​")],-1),h=a("p",null,"用于表单上传文件。",-1),y=a("h2",{id:"使用方法",tabindex:"-1"},[p("使用方法 "),a("a",{class:"header-anchor",href:"#使用方法","aria-label":'Permalink to "使用方法"'},"​")],-1),m=a("p",null,"手动在 Html 元素上调用初始化函数并通过配置指定表单字段名即可使用上传文件组件，默认已开启多文件上传、重命名和删除功能。",-1),_=a("div",{id:"example1"},null,-1),b=o("",4),F=a("div",{id:"example2"},null,-1),f=o("",3),x=a("div",{id:"example3"},null,-1),q=o("",3),g=a("div",{id:"example4"},null,-1),C=o("",4),B=a("div",{id:"example5"},null,-1),k=o("",3),P=a("div",{id:"example6"},null,-1),T=o("",3),S=a("div",{id:"example7"},null,-1),v=o("",3),w=a("div",{id:"example8"},null,-1),z=o("",101);function I(n,t,A,V,U,j){const e=i("Example");return d(),r("div",null,[u,h,y,m,l(e,null,{default:s(()=>[_]),_:1}),b,l(e,null,{default:s(()=>[F]),_:1}),f,l(e,null,{default:s(()=>[x]),_:1}),q,l(e,null,{default:s(()=>[g]),_:1}),C,l(e,null,{default:s(()=>[B]),_:1}),k,l(e,null,{default:s(()=>[P]),_:1}),T,l(e,null,{default:s(()=>[S]),_:1}),v,l(e,null,{default:s(()=>[w]),_:1}),z])}const H=c(E,[["render",I]]);export{D as __pageData,H as default};
