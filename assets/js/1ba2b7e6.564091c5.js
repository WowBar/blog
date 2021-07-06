(self.webpackChunkwowbar=self.webpackChunkwowbar||[]).push([[485],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,d=m["".concat(o,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8283:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],p={title:"\u5b9a\u4e49\u7c7b\u578b"},o="\u63a2\u7d22 TypeScript \u7c7b\u578b\u6ce8\u89e3 - \u5b9a\u4e49\u7c7b\u578b",s={unversionedId:"exploringts/defining-types",id:"exploringts/defining-types",isDocsHomePage:!1,title:"\u5b9a\u4e49\u7c7b\u578b",description:"Exploring TypeScript Type Annotations - Defining Types",source:"@site/docs/exploringts/03.defining-types.md",sourceDirName:"exploringts",slug:"/exploringts/defining-types",permalink:"/blog/docs/exploringts/defining-types",editUrl:"https://github.com/WowBar/blog/edit/master/docs/docs/exploringts/03.defining-types.md",version:"current",sidebarPosition:3,frontMatter:{title:"\u5b9a\u4e49\u7c7b\u578b"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/blog/docs/exploringts/data-types"},next:{title:"\u7c7b\u578b\u68c0\u67e5",permalink:"/blog/docs/exploringts/type-checking"}},c=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"1 \u63a5\u53e3",id:"1-\u63a5\u53e3",children:[{value:"\u5bf9\u8c61\u7ed3\u6784",id:"\u5bf9\u8c61\u7ed3\u6784",children:[]},{value:"\u7d22\u5f15\u7b7e\u540d",id:"\u7d22\u5f15\u7b7e\u540d",children:[]},{value:"\u8c03\u7528\u7b7e\u540d",id:"\u8c03\u7528\u7b7e\u540d",children:[]},{value:"\u63a5\u53e3\u4e0e\u7c7b",id:"\u63a5\u53e3\u4e0e\u7c7b",children:[]},{value:"\u6df7\u5408\u7c7b\u578b",id:"\u6df7\u5408\u7c7b\u578b",children:[]}]},{value:"2 \u7c7b\u578b\u522b\u540d",id:"2-\u7c7b\u578b\u522b\u540d",children:[]},{value:"3 \u6cdb\u578b",id:"3-\u6cdb\u578b",children:[{value:"\u6cdb\u578b\u53d8\u91cf",id:"\u6cdb\u578b\u53d8\u91cf",children:[]},{value:"\u6cdb\u578b\u7ea6\u675f",id:"\u6cdb\u578b\u7ea6\u675f",children:[]}]},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",children:[{value:"\u534f\u8bae",id:"\u534f\u8bae",children:[]},{value:"\u300a\u63a2\u7d22 TypeScript \u7c7b\u578b\u6ce8\u89e3\u300b",id:"\u300a\u63a2\u7d22-typescript-\u7c7b\u578b\u6ce8\u89e3\u300b",children:[]},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",children:[]}]}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u63a2\u7d22-typescript-\u7c7b\u578b\u6ce8\u89e3---\u5b9a\u4e49\u7c7b\u578b"},"\u63a2\u7d22 TypeScript \u7c7b\u578b\u6ce8\u89e3 - \u5b9a\u4e49\u7c7b\u578b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Exploring TypeScript Type Annotations - Defining Types"),(0,l.kt)("blockquote",{parentName:"blockquote"},(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7531 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog"},"WowBar")," \u56e2\u961f\u9996\u53d1\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog/issues/9"},"GitHub")),(0,l.kt)("blockquote",{parentName:"blockquote"},(0,l.kt)("p",{parentName:"blockquote"},"\u4f5c\u8005: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/zhilidali/"},"zhilidali"))))),(0,l.kt)("p",null,"\u6b22\u8fce\u6765\u5230 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/WowBar/blog/issues?q=label%3AExploringTS+sort%3Acreated-asc"},"\u300a\u63a2\u7d22 TypeScript \u7c7b\u578b\u6ce8\u89e3\u300b"))," \u7cfb\u5217\u6559\u7a0b\u3002\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog/issues/8"},"\u4e0a\u4e00\u7bc7"),"\u4ecb\u7ecd\u4e86 TypeScript \u7684\u539f\u751f\u6570\u636e\u7c7b\u578b\uff0c\u672c\u7bc7\u63a2\u7d22\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u7c7b\u578b (\u7ea6\u5b9a\u7c7b\u578b\u9996\u5b57\u6bcd\u5927\u5199)\uff0c\u6765\u63cf\u8ff0\u7a0b\u5e8f\u4e2d\u590d\u6742\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,l.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#1-%E6%8E%A5%E5%8F%A3"},"\u63a5\u53e3"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%AF%B9%E8%B1%A1%E7%BB%93%E6%9E%84"},"\u5bf9\u8c61\u7ed3\u6784")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%B4%A2%E5%BC%95%E7%AD%BE%E5%90%8D"},"\u7d22\u5f15\u7b7e\u540d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%B0%83%E7%94%A8%E7%AD%BE%E5%90%8D"},"\u8c03\u7528\u7b7e\u540d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%8E%A5%E5%8F%A3%E4%B8%8E%E7%B1%BB"},"\u63a5\u53e3\u4e0e\u7c7b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%B7%B7%E5%90%88%E7%B1%BB%E5%9E%8B"},"\u6df7\u5408\u7c7b\u578b")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#2-%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D"},"\u7c7b\u578b\u522b\u540d")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#3-%E6%B3%9B%E5%9E%8B"},"\u6cdb\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%B3%9B%E5%9E%8B%E5%8F%98%E9%87%8F"},"\u6cdb\u578b\u53d8\u91cf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%B3%9B%E5%9E%8B%E7%BA%A6%E6%9D%9F"},"\u6cdb\u578b\u7ea6\u675f"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%BB%93%E8%AF%AD"},"\u7ed3\u8bed"))),(0,l.kt)("h2",{id:"1-\u63a5\u53e3"},"1 \u63a5\u53e3"),(0,l.kt)("p",null,"\u63a5\u53e3\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"interface")," \u5173\u952e\u5b57\u5b9a\u4e49\uff0c\u5b9a\u4e49\u7684\u7c7b\u578b\u53ef\u4ee5\u7528\u6765\u63cf\u8ff0\u5bf9\u8c61\u3001\u6570\u7ec4\u3001\u51fd\u6570\u3001\u7c7b\u7b49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u5b9a\u4e49\u58f0\u660e\u4e00\u4e2a MyType \u7c7b\u578b\ninterface MyType {}\n")),(0,l.kt)("h3",{id:"\u5bf9\u8c61\u7ed3\u6784"},"\u5bf9\u8c61\u7ed3\u6784"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u57fa\u672c\u8bed\u6cd5"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"K: T")," \u63cf\u8ff0\u5bf9\u8c61\u7684\u5f62\u72b6(\u7ed3\u6784)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u5b9a\u4e49\u5c5e\u6027 a \u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u5c5e\u6027 b \u4e3a\u6570\u503c\u7c7b\u578b\ninterface MyType {\n    a: string;\n    b: number;\n}\n\n// \u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 MyType \u7c7b\u578b\nlet bar: MyType = { a: 'TS', b: 1 }; // Ok\nlet baz: MyType = { a: 1000, b: 1 }; // Error\nlet foo: MyType = { a: 'TS' }; // Error (\u7ed3\u6784\u4e0d\u4e00\u81f4)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53ef\u9009\u5c5e\u6027"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"K?: T")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface MyType {\n    a: string;\n    b?: number\n}\nlet foo: MyType = { a: 'TS' }; // Ok\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53ea\u8bfb\u5c5e\u6027"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"readonly K: T")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface MyType {\n    a: string;\n    readonly b: number;\n}\n\nlet bar: MyType = { a: 'TS', b: 1 };\nbar.a = 'TypeScript'; // Ok\nbar.b = 2; // Error\n")),(0,l.kt)("h3",{id:"\u7d22\u5f15\u7b7e\u540d"},"\u7d22\u5f15\u7b7e\u540d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\u7d22\u5f15\u7b7e\u540d String Index Signature"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u503c\u7d22\u5f15\u7b7e\u540d Number Index Signature")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32\u7d22\u5f15\u7b7e\u540d"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"[K: string]: T")," \u63cf\u8ff0\u4efb\u610f\u5c5e\u6027"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface MyType {\n    a: string;\n    [k: string]: string;\n}\n\nlet baz: MyType = { a: 'TS', b: 'foo' };\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6570\u503c\u7d22\u5f15\u7b7e\u540d"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"[K: number]: T")," \u63cf\u8ff0\u6570\u7ec4\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface MyType {\n    [index: number]: string\n}\n\nlet arr1: MyType = ['a', 'b', 'c']; // Ok\nlet arr2: MyType = ['a', 'b', 100]; // Error\n")),(0,l.kt)("h3",{id:"\u8c03\u7528\u7b7e\u540d"},"\u8c03\u7528\u7b7e\u540d"),(0,l.kt)("p",null,"\u8c03\u7528\u7b7e\u540d Call Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"(parameter: T): U")," \u63cf\u8ff0\u51fd\u6570 (\u53c2\u6570\u548c\u8fd4\u56de\u503c) \u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface FnType {\n    (a: number): boolean; // \u53c2\u6570 a \u4e3a number \u7c7b\u578b\uff0c\u8fd4\u56de boolean \u7c7b\u578b\n}\nlet fn: FnType = (n: number) => !n;\n")),(0,l.kt)("h3",{id:"\u63a5\u53e3\u4e0e\u7c7b"},"\u63a5\u53e3\u4e0e\u7c7b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7c7b\u5177\u6709\u5b9e\u4f8b\u4e0e\u9759\u6001\u4e24\u90e8\u5206\u6784\u6210\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"implements")," \u5b9e\u73b0\u63a5\u53e3\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"class Foo implements T {}")," \u63cf\u8ff0\u7c7b\u7684\u5b9e\u4f8b\u90e8\u5206"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Construct Signature")," \u6784\u9020\u5668\u7b7e\u540d =>",(0,l.kt)("inlineCode",{parentName:"li"},"new (): T")," \u63cf\u8ff0\u7c7b\u7684\u6784\u9020\u51fd\u6570")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u53ef\u901a\u8fc7 implements \u63cf\u8ff0\u7c7b\u7684\u5b9e\u4f8b\u90e8\u5206\ninterface ClassType {\n    foo: string;\n    setFoo(str: string): void;\n}\n// \u6784\u9020\u5668\u7b7e\u540d\u7528\u6765\u63cf\u8ff0\u6784\u9020\u51fd\u6570\ninterface ConstructorType {\n    new (n: number): any;\n}\n\nconst Foo: ConstructorType = class Foo implements ClassType {\n    foo: string = 'foo';\n    setFoo(str: string) {\n        this.foo = str;\n    }\n    constructor(n: number) { }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7c7b\u4f5c\u4e3a\u63a5\u53e3")),(0,l.kt)("p",null,"\u5728 TS \u4e2d\uff0c\u7c7b\u4e0d\u4ec5\u4f1a\u58f0\u660e\u7c7b\u7c7b\u53d8\u91cf\uff0c\u8fd8\u58f0\u660e\u4e86\u4e00\u4e2a\u7c7b\u578b\uff0c\u6240\u4ee5\u7c7b\u53ef\u4ee5\u4f5c\u4e3a\u63a5\u53e3\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class A {\n    x: number = 1;\n    foo(): number { return 1 }\n}\n\nconst a: A = new A(); // `: A` \u4f5c\u4e3a\u63a5\u53e3\u4f7f\u7528\na.x;\na.foo();\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u7ee7\u627f Interface Extending")),(0,l.kt)("p",null,"\u63a5\u53e3\u4e5f\u53ef\u4ee5\u5982\u540c JS \u7684\u7c7b\u4e00\u6837\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"extends")," \u5b9e\u73b0\u7ee7\u627f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Interface Extending Interfaces")," \u63a5\u53e3\u7ee7\u627f\u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Interface Extending Classes")," \u63a5\u53e3\u7ee7\u627f\u7c7b (\u7c7b\u53ef\u4ee5\u4f5c\u4e3a\u63a5\u53e3)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface Type1 { foo: string }\n// \u63a5\u53e3 Type2 \u7ee7\u627f\u63a5\u53e3 Type1\ninterface Type2 extends Type1 { bar: string }\nconst obj1: Type2 = {\n    foo: 'foo',\n    bar: 'bar',\n};\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class Baz {\n    baz: string;\n    constructor(str: string) {\n        this.baz = str;\n    }\n}\n// \u63a5\u53e3 Type3 \u7ee7\u627f\u7c7b Baz\ninterface Type3 extends Baz { qux: string }\nconst obj2: Type3 = {\n    baz: 'baz',\n    qux: 'qux',\n};\n")),(0,l.kt)("h3",{id:"\u6df7\u5408\u7c7b\u578b"},"\u6df7\u5408\u7c7b\u578b"),(0,l.kt)("p",null,"\u6df7\u5408\u7c7b\u578b Hybrid Type: \u6bd4\u5982 JS \u4e2d\u7684\u51fd\u6570\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u5bf9\u8c61\uff0c\u4e3a\u5176\u6dfb\u52a0\u5c5e\u6027"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface MyType {\n    (n: number): string;\n    a: number;\n}\n// \u51fd\u6570 foo \u672c\u8d28\u662f\u5bf9\u8c61\uff0c\u53ef\u6dfb\u52a0\u5c5e\u6027 a\nfunction foo(n: number): string { return '' }\nfoo.a = 123;\n\nlet bar: MyType = foo;\n")),(0,l.kt)("h2",{id:"2-\u7c7b\u578b\u522b\u540d"},"2 \u7c7b\u578b\u522b\u540d"),(0,l.kt)("p",null,"Type Alias \u7c7b\u578b\u522b\u540d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u5173\u952e\u5b57\uff0c\u521b\u5efa\u4e00\u4e2a\u5f15\u7528\u5176\u4ed6\u7c7b\u578b\u7684\u65b0\u540d\u5b57\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Str = string;\nlet s: Str = 'foo';\n\ntype Obj = {\n    a: number;\n}\nlet obj: Obj = { a: 1 };\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7c7b\u578b\u522b\u540d VS. \u63a5\u53e3")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u521b\u5efa\u7684\u540d\u5b57\u5f15\u7528\u5176\u5b83\u7c7b\u578b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u522b\u540d\u53ef\u4ee5\u547d\u540d\u539f\u59cb\u7c7b\u578b\u3001\u5143\u7ec4\u7b49")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"interface")," \u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684\u7c7b\u578b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u53ef\u4ee5\u7ee7\u627f"),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u53ef\u4ee5\u58f0\u660e\u5408\u5e76 (\u540e\u7eed\u7bc7\u5e45\u4f1a\u4ecb\u7ecd)")),(0,l.kt)("h2",{id:"3-\u6cdb\u578b"},"3 \u6cdb\u578b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Generic \u6cdb\u578b\u597d\u6bd4 JS \u4e2d\u7684\u51fd\u6570\uff0c\u4f7f\u7528\u5c16\u62ec\u53f7\u5305\u88f9\u7c7b\u578b\u53c2\u6570: ",(0,l.kt)("inlineCode",{parentName:"p"},"<T>"),"\u3002")),(0,l.kt)("h3",{id:"\u6cdb\u578b\u53d8\u91cf"},"\u6cdb\u578b\u53d8\u91cf"),(0,l.kt)("p",null,"\u6cdb\u578b\u53d8\u91cf Generic Type Variable: ",(0,l.kt)("inlineCode",{parentName:"p"},"<T, U...>")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Generic Function \u6cdb\u578b\u51fd\u6570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Generic Interface \u6cdb\u578b\u63a5\u53e3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Generic Class \u6cdb\u578b\u7c7b"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6cdb\u578b\u51fd\u6570")," \uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"<T>(): ReturnType")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u901a\u8fc7 <T> \u4f20\u9012\u7c7b\u578b\u53c2\u6570\uff0c\u4e0b\u9762\u793a\u4f8b\u7ea6\u675f\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7c7b\u578b\u4e00\u81f4\nfunction identity<T>(arg: T): T {\n    return arg;\n}\n\n// \u6cdb\u578b\u597d\u6bd4 JS \u4e2d\u7684\u51fd\u6570\uff0c\u4f7f\u7528\u65f6\u9700\u4f20\u5165\u7c7b\u578b\nlet foo = identity<string>('TS');\n// \u7531\u4e8eTS \u4f1a\u81ea\u52a8\u63a8\u65ad\u7c7b\u578b\uff0c\u53ef\u7701\u7565\u7c7b\u578b\u4f20\u53c2\nlet bar = identity('TS');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6cdb\u578b\u63a5\u53e3")," \uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"interface TypeName<T> {}")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u4f7f\u7528 interface \u63cf\u8ff0\u4e0a\u9762\u51fd\u6570\ninterface GenericInterface1 {\n    <T>(arg: T): T;\n}\n// \u53ef\u5c06\u6cdb\u578b\u53c2\u6570\u5f53\u4f5c\u6574\u4e2a\u63a5\u53e3\u7684\u53c2\u6570\ninterface GenericInterface2<T> {\n    (arg: T): T;\n}\n\nlet baz: GenericInterface2<string> = identity;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6cdb\u578b\u7c7b")," \uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"class className<T> {}")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u6cdb\u578b\u7c7b\u4e0e\u6cdb\u578b\u63a5\u53e3\u5dee\u4e0d\u591a\uff0c`<>`\u8ddf\u5728\u7c7b\u540d\u540e\u9762\nclass GenericClass<T> {\n    zeroValue: T;\n    add: (x: T, y: T) => T;\n}\nlet myGenericNumber = new GenericNumber<number>();\nmyGenericNumber.zeroValue = 0;\nmyGenericNumber.add = function(x, y) {\n    return x + y;\n};\n")),(0,l.kt)("h3",{id:"\u6cdb\u578b\u7ea6\u675f"},"\u6cdb\u578b\u7ea6\u675f"),(0,l.kt)("p",null,"\u5047\u8bbe\u4e00\u4e2a\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff0c\u8fd4\u56de\u53c2\u6570\u7684\u5c5e\u6027 foo\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function getFoo<T> (arg: T) {\n    return arg.foo; // Error: Property 'foo' does not exist on type 'T'\n}\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u6cdb\u578b\u53d8\u91cf\u5b9a\u4e49\uff0c\u7531\u4e8e\u4e8b\u5148\u4e0d\u77e5\u9053\u53c2\u6570\u7684\u7c7b\u578b\uff0c\u4f1a\u663e\u793a\u9519\u8bef\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u7ea6\u675f ",(0,l.kt)("inlineCode",{parentName:"p"},"<T extends U>"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface FooProp {\n    foo: number;\n}\n// \u6cdb\u578b `T` \u5fc5\u987b\u7b26\u5408\u63a5\u53e3 `FooProp`\uff0c\u5373\u5fc5\u987b\u5305\u542b `foo` \u5c5e\u6027\nfunction getFoo<T extends FooProp> (arg: T) {\n    return arg.foo;\n}\n\ngetFoo({ foo: 3 }); // Ok, getFoo<{ foo: number}>({ foo: 3})\ngetFoo({ foo: 'foo' }); // Error\n")),(0,l.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,l.kt)("p",null,"\u672c\u7bc7\u4ecb\u7ecd\u4e86\u5982\u4f55\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog/issues/11"},"\u4e0b\u7bc7"),"\u4ecb\u7ecd\u7c7b\u578b\u7684\u68c0\u67e5\u89c4\u5219\u3002"),(0,l.kt)("h3",{id:"\u534f\u8bae"},"\u534f\u8bae"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog/blob/master/LICENSE.md"},(0,l.kt)("img",{parentName:"a",src:"https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png",alt:"CC BY-NC-ND 4.0",title:"LICENSE"}))),(0,l.kt)("p",null,"\u672c\u4f5c\u54c1\u91c7\u7528",(0,l.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-nc-nd/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d-\u975e\u5546\u4e1a\u6027\u4f7f\u7528-\u7981\u6b62\u6f14\u7ece 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002"),(0,l.kt)("h3",{id:"\u300a\u63a2\u7d22-typescript-\u7c7b\u578b\u6ce8\u89e3\u300b"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/WowBar/blog/issues?q=label%3AExploringTS+sort%3Acreated-asc"},"\u300a\u63a2\u7d22 TypeScript \u7c7b\u578b\u6ce8\u89e3\u300b")),(0,l.kt)("ol",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/4"},"\u6269\u5c55\u7684 JavaScript")),(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/8"},"\u6570\u636e\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/9"},"\u81ea\u5b9a\u4e49\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/11"},"\u7c7b\u578b\u68c0\u67e5")),(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/13"},"\u9ad8\u7ea7\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/14"},"\u7c7b\u578b\u7f16\u7a0b"))),(0,l.kt)("h3",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,l.kt)("p",null,"Handbook: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript-Handbook"},"https://github.com/microsoft/TypeScript-Handbook")))}m.isMDXComponent=!0}}]);