(self.webpackChunkwowbar=self.webpackChunkwowbar||[]).push([[836],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=s(n),c=a,N=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return n?r.createElement(N,i(i({ref:t},u),{},{components:n})):r.createElement(N,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6676:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return k}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),i=["components"],o={title:"\u6570\u636e\u7c7b\u578b"},p="\u63a2\u7d22 TypeScript \u7c7b\u578b\u6ce8\u89e3 - \u6570\u636e\u7c7b\u578b",s={unversionedId:"exploringts/data-types",id:"exploringts/data-types",isDocsHomePage:!1,title:"\u6570\u636e\u7c7b\u578b",description:"Exploring TypeScript Type Annotations - Data Types",source:"@site/docs/exploringts/02.data-types.md",sourceDirName:"exploringts",slug:"/exploringts/data-types",permalink:"/docs/exploringts/data-types",editUrl:"https://github.com/WowBar/blog/edit/master/docs/docs/exploringts/02.data-types.md",version:"current",sidebarPosition:2,frontMatter:{title:"\u6570\u636e\u7c7b\u578b"},sidebar:"tutorialSidebar",previous:{title:"\u6269\u5c55\u7684 JavaScript",permalink:"/docs/exploringts/extended-javaScript"},next:{title:"\u5b9a\u4e49\u7c7b\u578b",permalink:"/docs/exploringts/defining-types"}},u=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"1 \u521d\u8bc6\u7c7b\u578b\u6ce8\u89e3",id:"1-\u521d\u8bc6\u7c7b\u578b\u6ce8\u89e3",children:[]},{value:"2 \u57fa\u7840\u7c7b\u578b",id:"2-\u57fa\u7840\u7c7b\u578b",children:[{value:"JS \u57fa\u7840\u7c7b\u578b",id:"js-\u57fa\u7840\u7c7b\u578b",children:[]},{value:"\u65b0\u589e\u57fa\u7840\u7c7b\u578b",id:"\u65b0\u589e\u57fa\u7840\u7c7b\u578b",children:[]},{value:"\u57fa\u7840\u7c7b\u578b\u517c\u5bb9",id:"\u57fa\u7840\u7c7b\u578b\u517c\u5bb9",children:[]}]},{value:"3 \u5f15\u7528\u7c7b\u578b",id:"3-\u5f15\u7528\u7c7b\u578b",children:[{value:"Object",id:"object",children:[]},{value:"Array",id:"array",children:[]},{value:"Tuple",id:"tuple",children:[]},{value:"Enum",id:"enum",children:[]},{value:"Date RegExp Error",id:"date-regexp-error",children:[]},{value:"Function",id:"function",children:[]},{value:"Class",id:"class",children:[]}]},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",children:[{value:"\u534f\u8bae",id:"\u534f\u8bae",children:[]},{value:"\u300a\u63a2\u7d22 TypeScript \u7c7b\u578b\u6ce8\u89e3\u300b",id:"\u300a\u63a2\u7d22-typescript-\u7c7b\u578b\u6ce8\u89e3\u300b",children:[]},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",children:[]}]}],m={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u63a2\u7d22-typescript-\u7c7b\u578b\u6ce8\u89e3---\u6570\u636e\u7c7b\u578b"},"\u63a2\u7d22 TypeScript \u7c7b\u578b\u6ce8\u89e3 - \u6570\u636e\u7c7b\u578b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Exploring TypeScript Type Annotations - Data Types"),(0,l.kt)("blockquote",{parentName:"blockquote"},(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7531 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog"},"WowBar")," \u56e2\u961f\u9996\u53d1\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog/issues/8"},"GitHub")),(0,l.kt)("blockquote",{parentName:"blockquote"},(0,l.kt)("p",{parentName:"blockquote"},"\u4f5c\u8005: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/zhilidali/"},"zhilidali"))))),(0,l.kt)("p",null,"\u6b22\u8fce\u6765\u5230 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/WowBar/blog/issues?q=label%3AExploringTS+sort%3Acreated-asc"},"\u300a\u63a2\u7d22 TypeScript \u7c7b\u578b\u6ce8\u89e3\u300b"))," \u7cfb\u5217\u6559\u7a0b\u3002\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog/issues/4"},"\u5f00\u7bc7"),"\u6211\u4eec\uff08\u91cd\u65b0\uff09\u8ba4\u8bc6\u4e86 TypeScript\uff0c\u672c\u7bc7\u63a2\u7d22 TypeScript \u7684\u539f\u751f\u6570\u636e\u7c7b\u578b\u3002"),(0,l.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#1-%E5%88%9D%E8%AF%86%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3"},"\u521d\u8bc6\u7c7b\u578b\u6ce8\u89e3")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#2-%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B"},"\u57fa\u7840\u7c7b\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#js-%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B"},"JS \u57fa\u7840\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%96%B0%E5%A2%9E%E5%9F%BA%E7%A1%80%E7%B1%BB"},"\u65b0\u589e\u57fa\u7840\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B%E5%85%BC%E5%AE%B9"},"\u57fa\u7840\u7c7b\u578b\u517c\u5bb9")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#3-%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B"},"\u5f15\u7528\u7c7b\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#object"},"object")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#array"},"Array")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tuple"},"Tuple")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enum"},"Enum")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#date-regexp-error"},"Date RegExp Error")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#function"},"Function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#class"},"Class"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%BB%93%E8%AF%AD"},"\u7ed3\u8bed"))),(0,l.kt)("h2",{id:"1-\u521d\u8bc6\u7c7b\u578b\u6ce8\u89e3"},"1 \u521d\u8bc6\u7c7b\u578b\u6ce8\u89e3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let bar: boolean = 'TS'; // Error: Type 'string' is not assignable to type 'boolean'.ts(2322)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Type Annotation \u7c7b\u578b\u6ce8\u89e3"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8bed\u6cd5")," \uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},": Type"),"\u3002\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},": boolean"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4f5c\u7528")," \uff1a\u7ea6\u5b9a\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b\u3002\u5982\u7ea6\u5b9a ",(0,l.kt)("inlineCode",{parentName:"li"},"bar")," \u4e3a\u5e03\u5c14\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u597d\u5904")," \uff1a",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u9759\u6001\u7f16\u8bd1\u65f6\u68c0\u67e5\u7c7b\u578b\u3002\u7c7b\u578b\u64cd\u4f5c\u4e0d\u5408\u7406\u65f6\uff0c\u7f16\u8bd1\u5668\u4f1a\u8b66\u544a\uff0c\u5982\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"Type 'string' is not assignable to type 'boolean'"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4f5c\u4e3a\u6587\u6863\u3002\u5728 VSCode \u4e2d\u5c06\u5149\u6807\u79fb\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"bar")," \u4e0a\u65f6\uff0c\u4f1a\u63d0\u793a ",(0,l.kt)("inlineCode",{parentName:"li"},"let bar: boolean"),"\u3002")))),(0,l.kt)("h2",{id:"2-\u57fa\u7840\u7c7b\u578b"},"2 \u57fa\u7840\u7c7b\u578b"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Primitive Type"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 JS \u57fa\u7840\u7c7b\u578b \uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"string"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"symbol"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," ",(0,l.kt)("inlineCode",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e\u57fa\u7840\u7c7b\u578b \uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"void"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"never")),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e\u7c7b\u578b \uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"any"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"unknow"))),(0,l.kt)("h3",{id:"js-\u57fa\u7840\u7c7b\u578b"},"JS \u57fa\u7840\u7c7b\u578b"),(0,l.kt)("p",null,"TypeScript \u652f\u6301 JavaScript \u7684\u57fa\u7840\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let tsBoo: boolean = false;\nlet tsNum: number = 0x10;\nlet tsStr: string = 'TS';\nlet tsSym: symbol = Symbol('TS');\nlet tsUnInit: undefined;\nlet tsEmpty: null = { foo: 'Foo' }; // Error\n")),(0,l.kt)("p",null,"TypeScript \u8fd8\u652f\u6301\u5b57\u9762\u91cf\u7c7b\u578b\uff0c\u53d8\u91cf\u53ea\u80fd\u521d\u59cb\u5316\u4e3a\u76f8\u5e94\u7684\u5b57\u9762\u91cf\u7c7b\u578b\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u5b57\u7b26\u4e32\u5b57\u9762\u91cf\nlet ts: 'TS';\n\n// \u6570\u503c\u5b57\u9762\u91cf\nlet one: 1 = 'TS'; // Error\n\n// \u5e03\u5c14\u5b57\u9762\u91cf\nlet truthy: true;\n")),(0,l.kt)("h3",{id:"\u65b0\u589e\u57fa\u7840\u7c7b\u578b"},"\u65b0\u589e\u57fa\u7840\u7c7b\u578b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"void")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")," \u6807\u8bc6\u51fd\u6570\u6ca1\u6709\u8fd4\u56de\u503c(\u5373\u8fd4\u56de undefined)\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function tsVoid(): void {\n    // \u6ca1\u6709\u8fd4\u56de\u503c\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"never")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"never")," \u6807\u8bc6\u51fd\u6570\u4e0d\u4f1a return\u3002\u5982\u629b\u51fa\u5f02\u5e38\u6216\u751f\u6210\u5668\u51fd\u6570\u5b58\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"while(true){}"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function tsNever1(): never {\n    throw new Error('Throw Exception or never return');\n}\nfunction *tsNever2(): never {\n    while(true) {\n        // ...\n    }\n}\n")),(0,l.kt)("h3",{id:"\u57fa\u7840\u7c7b\u578b\u517c\u5bb9"},"\u57fa\u7840\u7c7b\u578b\u517c\u5bb9"),(0,l.kt)("h4",{id:"undefined--null-\u517c\u5bb9\u6027"},"undefined && null \u517c\u5bb9\u6027"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"null")," \u4e3a\u5b50\u7c7b\u578b\uff0c\u53ef\u8d4b\u7ed9\u5176\u5b83\u7c7b\u578b\u3002\u5728 tsconfig.json \u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"strictNullChecks")," \u4e3a false \u65f6\uff0cundefined\u3001null \u53ef\u8d4b\u503c\u7ed9\u9664 ",(0,l.kt)("inlineCode",{parentName:"li"},"never")," \u5916\u7684\u4efb\u610f\u7c7b\u578b\u7684\u53d8\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"strictNullChecks")," \u4e3a true \u65f6\uff0cundefined \u53ea\u80fd\u8d4b\u503c\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"li"},"void"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"any")," \u7c7b\u578b\u7684\u53d8\u91cf\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let tsNum: number = undefined; // Error\uff0c\u5f53 strictNullChecks \u4e3a true \u65f6\nlet tsVoid: void = undefined; // Ok\n")),(0,l.kt)("h4",{id:"void-\u517c\u5bb9\u6027"},"void \u517c\u5bb9\u6027"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")," \u4f5c\u4e3a\u8fd4\u56de\u503c\u7c7b\u578b\u65f6\uff0c\u53ef\u7528\u5176\u5b83\u7c7b\u578b\u66ff\u6362\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let foo = function (): void { };\nlet bar = function (): number { return 1; }\n\nfoo = bar; // Ok\uff0cfoo \u7684\u7c7b\u578b\u517c\u5bb9 bar \u7684\u7c7b\u578b\nbar = foo; // Error\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"void VS. undefined"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"void")," \u7684\u5b50\u7c7b\u578b\u3002"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5728 JS \u4e2d\uff0cvoid \u4e3a\u64cd\u4f5c\u7b26\uff0c\u603b\u8fd4\u56de undefined; \u800c undefined \u5728\u5bbd\u677e\u6a21\u5f0f\u4e0b\uff0c\u53ef\u4f5c\u53d8\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 TS \u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"void")," \u4f5c\u4e3a\u8fd4\u56de\u503c\u7c7b\u578b\u65f6\uff0c\u53ef\u7528\u5176\u4ed6\u7c7b\u578b\u66ff\u6362\uff0c\u800c ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," \u4e0d\u884c\u3002"))),(0,l.kt)("h4",{id:"never-\u517c\u5bb9\u6027"},"never \u517c\u5bb9\u6027"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"never")," \u662f\u6240\u6709\u7c7b\u578b\u7684\u5b50\u7c7b\u578b, \u53ef\u8d4b\u7ed9\u4efb\u610f\u7c7b\u578b\u3002\u5728 tsconfig.json \u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"strictNullChecks")," \u4e3a false \u65f6\uff0c\u53ef\u76f4\u63a5\u8d4b\u7ed9\u4efb\u610f\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"strictNullChecks")," \u4e3a true \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"never")," \u9700\u5728\u8d4b\u503c\u540e\u624d\u80fd\u4f7f\u7528\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let foo = function (): never { throw 'never' }\n// number \u7c7b\u578b\nlet tsNum: number;\n// never \u7c7b\u578b\nlet tsNever1 = foo();\nlet tsNever2: never;\n\ntsNum = tsNever1; // OK\uff0cnever \u7c7b\u578b\u53ef\u8d4b\u503c\u7ed9 number \u7c7b\u578b\ntsNum = tsNever2; // Error\uff0c\u5f53`strictNullChecks` \u4e3a true \u65f6\n")),(0,l.kt)("h4",{id:"any-\u517c\u5bb9\u6027"},"any \u517c\u5bb9\u6027"),(0,l.kt)("p",null,"TS \u8fd8\u589e\u52a0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"any")," \u7c7b\u578b\uff0c\u5f53\u4e0d\u5e0c\u671b TS \u68c0\u67e5\u65f6\u4f7f\u7528\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4efb\u610f\u7c7b\u578b\u53ef\u4ee5\u8d4b\u503c\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"li"},"any")," \u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"any")," \u7c7b\u578b\u53ef\u4ee5\u8d4b\u503c\u7ed9\u5176\u5b83\u7c7b\u578b (",(0,l.kt)("inlineCode",{parentName:"li"},"never")," \u9664\u5916) \u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let tsAny: any = 'any value';\nlet tsNum: number = tsAny; // Ok\uff0cany \u7c7b\u578b\u53ef\u4ee5\u8d4b\u503c\u7ed9\u5176\u5b83\u7c7b\u578b\ntsAny = true; // Ok\uff0c\u4efb\u610f\u7c7b\u578b\u53ef\u4ee5\u8d4b\u503c\u7ed9 any \u7c7b\u578b\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4efb\u610f\u7c7b\u578b\u4e5f\u53ef\u4ee5\u8d4b\u503c\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b (\u4e00\u5207\u7686\u5bf9\u8c61)\uff0c\u4f46\u4f1a\u5bf9\u5176\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let foo: any = 1;\nlet bar: Object = 1;\nfoo.toFixed(); // OK\uff0c\u4e0d\u4f1a\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\nbar.toFixed(); // Error\n"))),(0,l.kt)("h4",{id:"unknow-\u517c\u5bb9\u6027"},"unknow \u517c\u5bb9\u6027"),(0,l.kt)("p",null,"TS \u589e\u52a0\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"unknow")," \u76f8\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"any")," \u7c7b\u578b\u66f4\u5b89\u5168\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4efb\u610f\u7c7b\u578b\u53ef\u4ee5\u8d4b\u503c\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"li"},"unknown")," \u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unknown")," \u7c7b\u578b\u4e0d\u53ef\u4ee5\u8d4b\u503c\u7ed9\u5176\u5b83\u7c7b\u578b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let unKnow: unknown;\n\nunKnow = 1; // Ok\nunKnow = 'TS'; // Ok\nunKnow.length; // Error\nlet foo: string = unKnow; // Error\n")),(0,l.kt)("h4",{id:"\u57fa\u672c\u5305\u88c5\u5bf9\u8c61\u517c\u5bb9\u6027"},"\u57fa\u672c\u5305\u88c5\u5bf9\u8c61\u517c\u5bb9\u6027"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"TS \u652f\u6301\u57fa\u672c\u5305\u88c5\u7c7b\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Number"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"String"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Symbol"),"\u3002\u57fa\u672c\u7c7b\u578b\u662f\u76f8\u5e94\u7684\u57fa\u672c\u5305\u88c5\u7c7b\u578b\u7684\u5b50\u7c7b\u578b\u3002"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u57fa\u672c\u5305\u88c5\u7c7b\u578b Boolean\nlet tsBool1: Boolean = new Boolean();\n// \u57fa\u672c\u7c7b\u578b\u4e3a\u57fa\u672c\u5305\u88c5\u7c7b\u578b\u7684\u5b50\u7c7b\u578b\nlet tsBool2: Boolean = false;\n"))),(0,l.kt)("h2",{id:"3-\u5f15\u7528\u7c7b\u578b"},"3 \u5f15\u7528\u7c7b\u578b"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Reference Type"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Object\u3001Array\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"RegExp"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"Error"),"\u3001Function\u3001Class \u7b49\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e ",(0,l.kt)("inlineCode",{parentName:"li"},"tuple"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"enum")," \u7c7b\u578b")),(0,l.kt)("h3",{id:"object"},"Object"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{ prop: T }")," \u63cf\u8ff0\u5bf9\u8c61\u7c7b\u578b\u7684\u7ed3\u6784 (\u8be6\u89e3\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog/issues/9"},"\u4e0b\u7bc7"),")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let obj: { a: number } = { a: 1 };\nobj.a = 2; // OK\nobj.b; // Error\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8: ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," \u63cf\u8ff0\u7684\u5bf9\u8c61\u7c7b\u578b\u7c7b\u4f3c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"{}"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let obj1: {} = { a: 1 };\nlet obj2: object = { a: 1 };\nobj1.a; // Error: Property 'a' does not exist on type '{}'\nobj2.a; // Error: Property 'a' does not exist on type 'object'\n")),(0,l.kt)("h3",{id:"array"},"Array"),(0,l.kt)("p",null,"\u4e09\u79cd\u5b9a\u4e49\u65b9\u5f0f(\u540e\u4e24\u79cd\u8be6\u89e3\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog/issues/9"},"\u4e0b\u7bc7"),"):"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},"\u7c7b\u578b\u540e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"em"},"[]")),"\uff0c\u5373 ",(0,l.kt)("inlineCode",{parentName:"li"},"T[]")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},"Array Generic \u6570\u7ec4\u6cdb\u578b")," \uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Array<T>")," ",(0,l.kt)("inlineCode",{parentName:"li"},"ReadonlyArray<T>")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},"Number Index Signature \u6570\u503c\u7d22\u5f15\u7b7e\u540d")," : \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"interface")," \u5b9a\u4e49\u7c7b\u578b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let tsArr1: string[] = ['foo'];\n\n// \u6570\u7ec4\u6cdb\u578b\nlet tsArr2: Array<string> = ['foo'];\nlet readonlyArr: ReadonlyArray<string> = ['foo']; // \u53ea\u8bfb\u6570\u7ec4\n\n// \u6570\u503c\u7d22\u5f15\u7b7e\u540d\ninterface IdxType { [index: number]: string }\nlet tsArr3: IdxType = ['foo'];\n")),(0,l.kt)("h3",{id:"tuple"},"Tuple"),(0,l.kt)("p",null,"\u5143\u7ec4\uff1a\u5df2\u77e5\u56fa\u5b9a\u5143\u7d20\u53ca\u7c7b\u578b\u7684\u6570\u7ec4(\u6570\u7ec4\u5b57\u9762\u91cf\u7c7b\u578b)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let tsTuple: [string, number] = ['foo', 1];\n\ntsTuple[0] = 1; // Error\ntsTuple[2]; // Error\uff0c\u8bbf\u95ee\u7d22\u5f15\u4e4b\u5916\u7684\u5143\u7d20\u65f6\u4f1a\u663e\u793a\u9519\u8bef\n")),(0,l.kt)("h3",{id:"enum"},"Enum"),(0,l.kt)("p",null,"\u679a\u4e3e: \u5b9a\u4e49\u4e00\u7ec4\u547d\u540d\u5e38\u91cf(\u679a\u4e3e\u6210\u5458\u53ea\u8bfb)"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},"Numeric enums \u6570\u503c\u679a\u4e3e")," : \u53ef\u5b9a\u4e49\u521d\u59cb\u503c(\u9ed8\u8ba4\u4e3a 0)\uff0c\u540e\u9762\u6839\u636e\u521d\u59cb\u503c\u9012\u589e\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'enum NumericEnum { Foo = 2, Bar, Baz };\n/* \u7f16\u8bd1\u5668\u53cd\u5411\u6620\u5c04\u4e3a\nvar NumericEnum;\n(function (NumericEnum) {\n    NumericEnum[NumericEnum["Foo"] = 2] = "Foo";\n    NumericEnum[NumericEnum["Bar"] = 3] = "Bar";\n    NumericEnum[NumericEnum["Baz"] = 4] = "Baz";\n})(NumericEnum || (NumericEnum = {}));\n*/\nlet num: NumericEnum = NumericEnum.Bar; // 3\nlet str: string = NumericEnum[3]; // Bar\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},"String enums \u5b57\u7b26\u4e32\u679a\u4e3e"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'enum StringEnum { No = \'NO\', Yes = \'YES\' }\n/*\nvar StringEnum;\n(function (StringEnum) {\n    StringEnum["No"] = "NO";\n    StringEnum["Yes"] = "YES";\n})(StringEnum || (StringEnum = {}));\n*/\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},"Heterogeneous enums \u5f02\u6784\u679a\u4e3e"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'enum HeterogeneousEnum { No = 0, Yes = "YES" }\n/*\nvar HeterogeneousEnum;\n(function (HeterogeneousEnum) {\n    HeterogeneousEnum[HeterogeneousEnum["No"] = 0] = "No";\n    HeterogeneousEnum["Yes"] = "YES";\n})(HeterogeneousEnum || (HeterogeneousEnum = {}));\n*/\n')),(0,l.kt)("h3",{id:"date-regexp-error"},"Date RegExp Error"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let date: Date = new Date();\nlet reg: RegExp = /\\.ts$/;\nlet err: Error = new Error('error');\n")),(0,l.kt)("h3",{id:"function"},"Function"),(0,l.kt)("p",null,"\u63cf\u8ff0\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"(paramter: T): U")," \u63cf\u8ff0\u51fd\u6570\u5b9a\u4e49"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},": (paramter: T) => U")," \u63cf\u8ff0\u51fd\u6570\u53d8\u91cf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u5b9a\u4e49\u51fd\u6570\u58f0\u660e\nfunction fn1(s: string): string {\n    return s;\n}\n// \u5b9a\u4e49\u7bad\u5934\u51fd\u6570\u8868\u8fbe\u5f0f\nlet fn2 = (s: string): string => s;\n\n// \u51fd\u6570\u53d8\u91cf fn\nlet fn3: (str: string) => string = fn2;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required parameters \u5fc5\u9009\u53c2\u6570")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"foo: T")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"optional parameters \u53ef\u9009\u53c2\u6570")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"foo?: T")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"default parameters \u9ed8\u8ba4\u53c2\u6570")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"foo: T = value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"rest parameter \u5269\u4f59\u53c2\u6570")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"...rest: T[]"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let fn = (\n    s: string, // \u5fc5\u9009\u53c2\u6570\n    b: string = '', // \u9ed8\u8ba4\u53c2\u6570\n    c?: string, // \u53ef\u9009\u53c2\u6570\uff1b\u4f4d\u4e8e\u5fc5\u9009\u53c2\u6570\u540e\u9762\n    ...d: string[] // \u5269\u4f59\u53c2\u6570\uff1b\u4f4d\u4e8e\u53c2\u6570\u6700\u540e\n): string => s;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u91cd\u8f7d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// Overload\nfunction reverse(x: number): number;\nfunction reverse(x: string): string;\nfunction reverse(x: number | string): number | string {\n    if (typeof x === 'number') {\n        return Number(x.toString().split('').reverse().join(''));\n    } else if (typeof x === 'string') {\n        return x.split('').reverse().join('');\n    }\n}\n")),(0,l.kt)("h3",{id:"class"},"Class"),(0,l.kt)("p",null,"TypeScript \u4fdd\u7559\u4e86 ES6 \u7684\u8bed\u6cd5\uff0c\u4ee5\u4e0b\u662f\u5206\u522b\u7528 ES6 \u548c TS \u8bed\u6cd5\u5b9e\u73b0\u7684\u7c7b\u7684\u521b\u5efa\u548c\u7ee7\u627f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// ES6 \u8bed\u6cd5\nclass A {\n    constructor(msg) {\n        this.foo = msg;\n    }\n    getFoo() {\n        return this.foo;\n    }\n}\n\nclass B extends A {\n    constructor(msg) {\n        super(msg);\n    }\n    getFoo() {\n        return 'b' + super.getFoo();\n    }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// TS \u8bed\u6cd5\nclass A {\n    foo: string\n    constructor(msg: string) {\n        this.foo = msg;\n    }\n    getFoo() {\n        return this.foo;\n    }\n}\n\nclass B extends A {\n    constructor(msg: string) {\n        super(msg);\n    }\n    getFoo() {\n        return 'b' + super.getFoo();\n    }\n}\n")),(0,l.kt)("p",null,"TS \u5728 ES6 \u57fa\u7840\u4e0a\u5bf9 class \u589e\u6dfb\u4e86\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u4e09\u79cd\u8bbf\u95ee\u4fee\u9970\u7b26:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"public")," \u5728 TS \u4e2d\uff0c\u6210\u5458\u9ed8\u8ba4\u4e3a\u516c\u6709\u6210\u5458\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"private")," \u79c1\u6709\u6210\u5458\u53ea\u80fd\u5728\u7c7b\u4e2d\u8bbf\u95ee\uff0c\u4e0d\u80fd\u5728\u7c7b\u7684\u5916\u90e8\u8bbf\u95ee\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"protected")," \u53d7\u4fdd\u62a4\u7684\u6210\u5458\u53ea\u80fd\u5728\u7c7b\u548c\u5b50\u7c7b\u4e2d\u8bbf\u95ee\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class A {\n    public foo: string; // foo: string;\n    private bar: string;\n    protected baz: string;\n    constructor(msg: string) {\n        this.foo = msg;\n        this.bar = msg;\n        this.baz = msg;\n    }\n    getFoo() {\n        return this.foo;\n    }\n}\nclass B extends A {\n    constructor(msg: string) {\n        super(msg);\n        this.foo; // Ok\n        this.bar; // Error: Property 'bar' is private and only accessible within class 'A'.\n        this.baz; // Ok\n    }\n    getFoo() {\n        return super.getFoo() + 'b';\n    }\n}\n\nconst b = new B('str');\nb.foo; // Ok\nb.bar; // Error: Property 'bar' is private and only accessible within class 'A'.\nb.baz; // Error: Property 'baz' is protected and only accessible within class 'A' and its subclasses\n")),(0,l.kt)("p",null,"\u62bd\u8c61\u7c7b: \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"abstract")," \u5b9a\u4e49\u62bd\u8c61\u7c7b\u548c\u62bd\u8c61\u7c7b\u4e2d\u7684\u62bd\u8c61\u65b9\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u7c7b\u4e0d\u5141\u8bb8\u88ab\u5b9e\u4f8b\u5316\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u7c7b\u4e2d\u7684\u62bd\u8c61\u65b9\u6cd5\u4e0d\u5305\u542b\u5177\u4f53\u5b9e\u73b0\u4e14\u5fc5\u987b\u88ab\u5728\u6d3e\u751f\u7c7b\u4e2d\u5b9e\u73b0\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"abstract class A {\n    foo: string;\n    constructor(msg: string) {\n        this.foo = msg;\n    }\n    // \u62bd\u8c61\u65b9\u6cd5\u4e0d\u5305\u542b\u5177\u4f53\u5b9e\u73b0\n    abstract getFoo(): string;\n}\n\nclass B extends A {\n    // \u5fc5\u987b\u88ab\u5728\u6d3e\u751f\u7c7b\u4e2d\u5b9e\u73b0\u62bd\u8c61\u65b9\u6cd5\n    getFoo() {\n        return this.foo;\n    }\n}\n")),(0,l.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,l.kt)("p",null,"\u672c\u7bc7\u4ecb\u7ecd\u4e86 TS \u7684\u539f\u751f\u6570\u636e\u7c7b\u578b\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog/issues/9"},"\u4e0b\u4e00\u7bc7"),"\u4ecb\u7ecd\u5982\u4f55\u81ea\u5b9a\u4e49\u7c7b\u578b\u3002"),(0,l.kt)("h3",{id:"\u534f\u8bae"},"\u534f\u8bae"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog/blob/master/LICENSE.md"},(0,l.kt)("img",{parentName:"a",src:"https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png",alt:"CC BY-NC-ND 4.0",title:"LICENSE"}))),(0,l.kt)("p",null,"\u672c\u4f5c\u54c1\u91c7\u7528",(0,l.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-nc-nd/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d-\u975e\u5546\u4e1a\u6027\u4f7f\u7528-\u7981\u6b62\u6f14\u7ece 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002"),(0,l.kt)("h3",{id:"\u300a\u63a2\u7d22-typescript-\u7c7b\u578b\u6ce8\u89e3\u300b"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/WowBar/blog/issues?q=label%3AExploringTS+sort%3Acreated-asc"},"\u300a\u63a2\u7d22 TypeScript \u7c7b\u578b\u6ce8\u89e3\u300b")),(0,l.kt)("ol",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/4"},"\u6269\u5c55\u7684 JavaScript")),(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/8"},"\u6570\u636e\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/9"},"\u81ea\u5b9a\u4e49\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/11"},"\u7c7b\u578b\u68c0\u67e5")),(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/13"},"\u9ad8\u7ea7\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/14"},"\u7c7b\u578b\u7f16\u7a0b"))),(0,l.kt)("h3",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,l.kt)("p",null,"Handbook: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript-Handbook"},"https://github.com/microsoft/TypeScript-Handbook")))}k.isMDXComponent=!0}}]);