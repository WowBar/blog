(self.webpackChunkwowbar=self.webpackChunkwowbar||[]).push([[132],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,b=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(b,i(i({ref:t},s),{},{components:n})):a.createElement(b,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1230:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={title:"\u7c7b\u578b\u68c0\u67e5"},p="\u63a2\u7d22 TypeScript \u7c7b\u578b\u6ce8\u89e3 - \u7c7b\u578b\u68c0\u67e5",u={unversionedId:"exploringts/type-checking",id:"exploringts/type-checking",isDocsHomePage:!1,title:"\u7c7b\u578b\u68c0\u67e5",description:"Exploring TypeScript Type Annotations - Type Checking",source:"@site/docs/exploringts/04.type-checking.md",sourceDirName:"exploringts",slug:"/exploringts/type-checking",permalink:"/blog/docs/exploringts/type-checking",editUrl:"https://github.com/WowBar/blog/edit/master/docs/exploringts/04.type-checking.md",version:"current",sidebarPosition:4,frontMatter:{title:"\u7c7b\u578b\u68c0\u67e5"},sidebar:"tutorialSidebar",previous:{title:"\u5b9a\u4e49\u7c7b\u578b",permalink:"/blog/docs/exploringts/defining-types"},next:{title:"\u9ad8\u7ea7\u7c7b\u578b",permalink:"/blog/docs/exploringts/advance-types"}},s=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u7c7b\u578b\u63a8\u65ad",id:"\u7c7b\u578b\u63a8\u65ad",children:[{value:"\u57fa\u672c\u7c7b\u578b\u63a8\u65ad",id:"\u57fa\u672c\u7c7b\u578b\u63a8\u65ad",children:[]},{value:"\u6700\u4f73\u901a\u7528\u7c7b\u578b",id:"\u6700\u4f73\u901a\u7528\u7c7b\u578b",children:[]},{value:"\u4e0a\u4e0b\u6587\u7c7b\u578b",id:"\u4e0a\u4e0b\u6587\u7c7b\u578b",children:[]}]},{value:"\u7c7b\u578b\u65ad\u8a00",id:"\u7c7b\u578b\u65ad\u8a00",children:[]},{value:"\u7c7b\u578b\u517c\u5bb9",id:"\u7c7b\u578b\u517c\u5bb9",children:[{value:"\u57fa\u672c\u7c7b\u578b\u517c\u5bb9",id:"\u57fa\u672c\u7c7b\u578b\u517c\u5bb9",children:[]},{value:"\u6210\u5458\u7ed3\u6784\u517c\u5bb9",id:"\u6210\u5458\u7ed3\u6784\u517c\u5bb9",children:[]},{value:"\u51fd\u6570\u53c2\u6570\u4e2a\u6570\u517c\u5bb9",id:"\u51fd\u6570\u53c2\u6570\u4e2a\u6570\u517c\u5bb9",children:[]}]},{value:"\u7c7b\u578b\u4fdd\u62a4",id:"\u7c7b\u578b\u4fdd\u62a4",children:[{value:"\u5e38\u8bc6\u522b\u4e3a\u7c7b\u578b\u4fdd\u62a4\u7684\u64cd\u4f5c\u7b26",id:"\u5e38\u8bc6\u522b\u4e3a\u7c7b\u578b\u4fdd\u62a4\u7684\u64cd\u4f5c\u7b26",children:[]},{value:"\u7c7b\u578b\u8c13\u8bcd",id:"\u7c7b\u578b\u8c13\u8bcd",children:[]},{value:"\u53ef\u8bc6\u522b\u4e3a\u7c7b\u578b\u4fdd\u62a4\u7684\u5173\u952e\u5b57",id:"\u53ef\u8bc6\u522b\u4e3a\u7c7b\u578b\u4fdd\u62a4\u7684\u5173\u952e\u5b57",children:[]}]},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",children:[{value:"\u534f\u8bae",id:"\u534f\u8bae",children:[]},{value:"\u300a\u63a2\u7d22 TypeScript \u7c7b\u578b\u6ce8\u89e3\u300b",id:"\u300a\u63a2\u7d22-typescript-\u7c7b\u578b\u6ce8\u89e3\u300b",children:[]},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",children:[]}]}],c={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u63a2\u7d22-typescript-\u7c7b\u578b\u6ce8\u89e3---\u7c7b\u578b\u68c0\u67e5"},"\u63a2\u7d22 TypeScript \u7c7b\u578b\u6ce8\u89e3 - \u7c7b\u578b\u68c0\u67e5"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Exploring TypeScript Type Annotations - Type Checking"),(0,l.kt)("blockquote",{parentName:"blockquote"},(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7531 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog"},"WowBar")," \u56e2\u961f\u9996\u53d1\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog/issues/11"},"GitHub")),(0,l.kt)("blockquote",{parentName:"blockquote"},(0,l.kt)("p",{parentName:"blockquote"},"\u4f5c\u8005: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/zhilidali/"},"zhilidali"))))),(0,l.kt)("p",null,"\u6b22\u8fce\u6765\u5230 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/WowBar/blog/issues?q=label%3AExploringTS+sort%3Acreated-asc"},"\u300a\u63a2\u7d22 TypeScript \u7c7b\u578b\u6ce8\u89e3\u300b"))," \u7cfb\u5217\u6559\u7a0b\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog/issues/9"},"\u4e0a\u4e00\u7bc7"),"\u4ecb\u7ecd\u4e86\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\n\u672c\u7bc7\u6df1\u5165\u63a2\u7d22 TypeScript \u7f16\u8bd1\u5668\u7684\u9759\u6001\u7c7b\u578b\u68c0\u67e5\u673a\u5236\u3002"),(0,l.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%B1%BB%E5%9E%8B%E6%8E%A8%E6%96%AD"},"\u7c7b\u578b\u63a8\u65ad"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E6%8E%A8%E6%96%AD"},"\u57fa\u672c\u7c7b\u578b\u63a8\u65ad")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%9C%80%E4%BD%B3%E9%80%9A%E7%94%A8%E7%B1%BB%E5%9E%8B"},"\u6700\u4f73\u901a\u7528\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%B8%8A%E4%B8%8B%E6%96%87%E7%B1%BB%E5%9E%8B"},"\u4e0a\u4e0b\u6587\u7c7b\u578b")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%B1%BB%E5%9E%8B%E6%96%AD%E8%A8%80"},"\u7c7b\u578b\u65ad\u8a00")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%B1%BB%E5%9E%8B%E5%85%BC%E5%AE%B9"},"\u7c7b\u578b\u517c\u5bb9"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E5%85%BC%E5%AE%B9"},"\u57fa\u672c\u7c7b\u578b\u517c\u5bb9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%88%90%E5%91%98%E7%BB%93%E6%9E%84%E5%85%BC%E5%AE%B9"},"\u6210\u5458\u7ed3\u6784\u517c\u5bb9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E6%95%B0%E9%87%8F%E5%85%BC%E5%AE%B9"},"\u51fd\u6570\u53c2\u6570\u6570\u91cf\u517c\u5bb9")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%B1%BB%E5%9E%8B%E4%BF%9D%E6%8A%A4"},"\u7c7b\u578b\u4fdd\u62a4"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%BB%93%E8%AF%AD"},"\u7ed3\u8bed"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6b63\u6587")),(0,l.kt)("p",null,"\u5f53\u6570\u636e\u7c7b\u578b\u64cd\u4f5c\u4e0d\u5408\u7406\u65f6\uff0c\u7f16\u8bd1\u5668\u9759\u6001\u7f16\u8bd1\u65f6\u4f1a\u63d0\u793a\u9519\u8bef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let obj = { a: 1 };\n// A. \u7f16\u8bd1\u5668\u63a8\u65ad\u51fa obj \u7684\u7c7b\u578b: let obj: { a: number; }\n\n// B. \u7f16\u8bd1\u5668\u68c0\u67e5\u6570\u636e\u7684\u4f7f\u7528\u662f\u5426\u5408\u7406\uff0c\u4e0d\u5408\u7406\u65f6\u4f1a\u629b\u51fa Error\nobj.b; // Error: \u5c5e\u6027 b \u4e0d\u5b58\u5728\nobj.a = '2'; // Error\uff1a'2' \u4e0d\u80fd\u8d4b\u503c\u7ed9 number \u7c7b\u578b\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7f16\u8bd1\u5668\u5bf9\u7c7b\u578b\u6ce8\u89e3\u7684\u9759\u6001\u68c0\u67e5\uff0c\u53ef\u4ee5\u521d\u6b65\u4e86\u89e3\u5230\u7c7b\u578b\u68c0\u67e5\u7684\u673a\u5236\uff1a\u7f16\u8bd1\u5668\u4f1a\u9002\u5f53\u7684\u63a8\u65ad\u6570\u636e\u7684\u7c7b\u578b\uff0c\u4ee5\u53ca\u68c0\u67e5\u7c7b\u578b\u7684\u4f7f\u7528\u662f\u5426\u5408\u7406\uff0c\u4e0b\u9762\u6211\u4eec\u5bf9\u7c7b\u578b\u68c0\u67e5\u673a\u5236\u8fdb\u4e00\u6b65\u63a2\u7d22\u3002"),(0,l.kt)("h2",{id:"\u7c7b\u578b\u63a8\u65ad"},"\u7c7b\u578b\u63a8\u65ad"),(0,l.kt)("p",null,"Type Inference \u7c7b\u578b\u63a8\u65ad\uff1a\u5f53\u6ca1\u6709\u663e\u5f0f\u6307\u5b9a\u7c7b\u578b\u6ce8\u89e3\u65f6\uff0c\u7f16\u8bd1\u5668\u4f1a\u63a8\u65ad\u51fa\u4e00\u4e2a\u7c7b\u578b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Basic Type Inference \u57fa\u672c\u7c7b\u578b\u63a8\u65ad")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Best Common Type \u6700\u4f73\u901a\u7528\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Contextual Typing \u4e0a\u4e0b\u6587\u7c7b\u578b"))),(0,l.kt)("h3",{id:"\u57fa\u672c\u7c7b\u578b\u63a8\u65ad"},"\u57fa\u672c\u7c7b\u578b\u63a8\u65ad"),(0,l.kt)("p",null,"\u5728\u5b9a\u4e49\u53d8\u91cf\u3001\u8bbe\u7f6e\u51fd\u6570\u53c2\u6570\u9ed8\u8ba4\u503c\u3001\u51fd\u6570\u8fd4\u56de\u503c\u65f6\uff0c\u7f16\u8bd1\u5668\u90fd\u4f1a\u81ea\u52a8\u8fdb\u884c\u7c7b\u578b\u63a8\u65ad\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u5728\u53d8\u91cf\u521d\u59cb\u5316\u65f6\u63a8\u65ad\nlet foo;\n// let foo: any\nlet bar = 'ts';\n// let bar: string\n\n// \u63a8\u65ad\u51fd\u6570\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7c7b\u578b\nlet a = (x = 1) => {}\n// let a: (x?: number) => void\n")),(0,l.kt)("p",null,"\u7c7b\u578b\u63a8\u65ad\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u53ef\u4ee5\u4fdd\u6301\u4ee3\u7801\u7b80\u6d01\u6613\u8bfb\uff0c\u4f46\u6709\u65f6\u5e76\u4e0d\u603b\u662f\u5982\u6b64"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let foo;\nlet f = foo;\n// let f: undefined\n\nlet b: string | number = 'TS';\nlet baz = b;\n// let baz: string\n")),(0,l.kt)("h3",{id:"\u6700\u4f73\u901a\u7528\u7c7b\u578b"},"\u6700\u4f73\u901a\u7528\u7c7b\u578b"),(0,l.kt)("p",null,"\u4ece\u591a\u4e2a\u8868\u8fbe\u5f0f\u7684\u7c7b\u578b\u63a8\u65ad\u51fa\u6700\u4f73\u901a\u7528\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let foo = ['ts', 1];\n// let foo: (string | number)[]\n// string | number \u4e3a\u8054\u5408\u7c7b\u578b\uff0c\u63cf\u8ff0\u6570\u636e\u53ef\u4ee5\u662f\u5176\u4e2d\u7684\u4e00\u79cd\u7c7b\u578b\n")),(0,l.kt)("h3",{id:"\u4e0a\u4e0b\u6587\u7c7b\u578b"},"\u4e0a\u4e0b\u6587\u7c7b\u578b"),(0,l.kt)("p",null,"\u7531\u4e0a\u4e0b\u6587\u63a8\u65ad\u51fa\u8868\u8fbe\u5f0f\u7684\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let add: (a: number, b: number) => number;\n\nadd = function(x, y) {\n    // \u7531 add \u53ef\u63a8\u65ad\u51fa x\u3001y \u4ee5\u53ca\u8fd4\u56de\u503c\u7684\u7c7b\u578b\n    return x + y;\n};\n// add = function(x: number, y: number): number {\n//  return x + y;\n// };\n")),(0,l.kt)("h2",{id:"\u7c7b\u578b\u65ad\u8a00"},"\u7c7b\u578b\u65ad\u8a00"),(0,l.kt)("p",null,"Type Assertion \u7c7b\u578b\u65ad\u8a00\u53ef\u4ee5\u8ba9\u4f60\u544a\u8bc9\u7f16\u8bd1\u5668\u5f53\u524d\u6570\u636e\u7684\u7c7b\u578b\uff0c\u6709\u4e24\u79cd\u8bed\u6cd5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c16\u62ec\u53f7\u8bed\u6cd5: ",(0,l.kt)("inlineCode",{parentName:"li"},"<T>value")),(0,l.kt)("li",{parentName:"ul"},"as \u8bed\u6cd5: ",(0,l.kt)("inlineCode",{parentName:"li"},"value as T")," (jsx \u4e2d\u53ea\u80fd\u7528 as \u8bed\u6cd5)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface Foo {\n    foo: number;\n}\nlet a = {};\n// let a: {}\nlet b = {} as Foo;\n// let b: Foo; \u7c7b\u578b\u65ad\u8a00\u544a\u8bc9\u7f16\u8bd1\u5668 b \u7684\u7c7b\u578b\u4e3a Foo\n\na.foo; // Error\n(a as Foo).foo; // Ok\nb.foo; // Ok\n")),(0,l.kt)("h2",{id:"\u7c7b\u578b\u517c\u5bb9"},"\u7c7b\u578b\u517c\u5bb9"),(0,l.kt)("p",null,"\u5982\u679c\u7c7b\u578b Y \u53ef\u4ee5\u8d4b\u503c\u7ed9\u7c7b\u578b X\uff0c\u5373 X = Y\uff0c\u90a3\u4e48\u6211\u4eec\u8bf4\uff0c\u76ee\u6807\u7c7b\u578b X \u517c\u5bb9\u6e90\u7c7b\u578b Y\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface TypeA {\n    a: string;\n}\ninterface TypeB {\n    a: string;\n}\n\nlet foo: TypeA = {a: 'ts'}\n// \u57fa\u4e8e\u7ed3\u6784\u7c7b\u578b\uff0c\u6240\u4ee5 foo \u53ef\u8d4b\u503c\u7ed9 bar\uff0c\u5373 TypeB \u517c\u5bb9 TypeA\nlet bar: TypeB = foo;\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"TS \u57fa\u4e8e\u7ed3\u6784\u5b50\u7c7b\u578b\u8bbe\u8ba1 (\u56e0\u4e3a JS \u4e2d\u5e7f\u6cdb\u7684\u4f7f\u7528\u533f\u540d\u5bf9\u8c61\uff0c\u4f8b\u5982\u51fd\u6570\u8868\u8fbe\u5f0f\u548c\u5bf9\u8c61\u5b57\u9762\u91cf)\uff0c\u4e0e\u540d\u4e49\u7c7b\u578b\u5f62\u6210\u5bf9\u6bd4\u3002\n\u5982\u4e0a\u56e0\u4e3a TypeA \u4e0e TypeB \u7ed3\u6784\u76f8\u540c (\u5c5e\u6027\u53ca\u5176\u7c7b\u578b)\uff0c\u6240\u4ee5\u5728\u7ed3\u6784\u7c7b\u578b\u7cfb\u7edf\u4e2d\uff0c\u5b83\u4eec\u662f\u517c\u5bb9\u7684\u3002\n\u800c\u5728\u540d\u4e49\u7c7b\u578b\u7cfb\u7edf\u4e2d\uff0c\u7c7b\u578b\u7684\u517c\u5bb9\u6027\u6216\u7b49\u4ef7\u6027\u662f\u57fa\u4e8e\u58f0\u660e\u548c\u540d\u79f0\u6765\u51b3\u5b9a\u7684\u3002")),(0,l.kt)("h3",{id:"\u57fa\u672c\u7c7b\u578b\u517c\u5bb9"},"\u57fa\u672c\u7c7b\u578b\u517c\u5bb9"),(0,l.kt)("p",null,"\u4e4b\u524d\u201c\u6570\u636e\u7c7b\u578b\u201d\u7bc7\u5e45\u4e2d\u5df2\u6709\u4ecb\u7ecd\uff0c\u8be6\u60c5\u8bf7",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog/issues/8"},"\u70b9\u51fb\u6b64\u5904")," \u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// `string` \u517c\u5bb9 `null`; `null` \u662f `string` \u7684\u5b50\u7c7b\u578b\nlet str: string = null;\n")),(0,l.kt)("h3",{id:"\u6210\u5458\u7ed3\u6784\u517c\u5bb9"},"\u6210\u5458\u7ed3\u6784\u517c\u5bb9"),(0,l.kt)("p",null,"\u5fc5\u9009\u6210\u5458\u5c11\u7684\u517c\u5bb9\u6210\u5458\u591a\u7684\uff0c\u5373\u6e90\u7c7b\u578b\u81f3\u5c11\u5177\u6709\u4e0e\u76ee\u6807\u7c7b\u578b\u76f8\u540c\u7684\u6210\u5458"),(0,l.kt)("h4",{id:"\u57fa\u672c\u7ed3\u6784\u517c\u5bb9"},"\u57fa\u672c\u7ed3\u6784\u517c\u5bb9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let foo: { a: string } = { a: 'a' };\nlet bar: { a: string, b: string } = { a: 'a', b: 'b' };\n\nfoo = bar; // OK, \u5c11\u517c\u5bb9\u591a\nbar = foo; // Error\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u51fd\u6570\u8fd4\u56de\u503c\nlet foo = () => ({ a: 'a' });\nlet bar = () => ({ a: 'a', b: 'b' });\n\nfoo = bar; // Ok\uff0c \u5c11\u517c\u5bb9\u591a\nbar = foo; // Error\n")),(0,l.kt)("h4",{id:"\u7c7b\u517c\u5bb9"},"\u7c7b\u517c\u5bb9"),(0,l.kt)("p",null,"\u7c7b\u7684\u5b9e\u4f8b\u6210\u5458\u5c11\u7684\u517c\u5bb9\u6210\u5458\u591a\u7684 (\u6bd4\u8f83\u4e24\u4e2a\u7c7b\u7684\u5bf9\u8c61\u65f6\uff0c\u9759\u6001\u6210\u5458\u4e0d\u6bd4\u8f83)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class A {\n    foo: number = 1\n}\nclass B {\n    foo: number = 2\n    bar: number = 3\n}\nclass C extends A {\n    baz: number = 4;\n}\n\nlet a = new A();\nlet b = new B();\nlet c = new C();\n\na = b; // Ok, \u5c11\u517c\u5bb9\u591a\nb = a; // Error\n\nc = a; // Error\na = c; // Ok, \u5c11\u517c\u5bb9\u591a\n")),(0,l.kt)("h4",{id:"\u679a\u4e3e\u517c\u5bb9"},"\u679a\u4e3e\u517c\u5bb9"),(0,l.kt)("p",null,"\u679a\u4e3e\u7c7b\u578b\u4e0e\u6570\u503c\u7c7b\u578b\u76f8\u4e92\u517c\u5bb9\uff0c\u679a\u4e3e\u4e4b\u95f4\u4e0d\u517c\u5bb9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"enum E { A, B }\nenum F { X, Y }\n\n// \u679a\u4e3e\u7c7b\u578b\u4e0e\u6570\u503c\u7c7b\u578b\u76f8\u4e92\u517c\u5bb9\nlet foo: E = 123; // OK, \u679a\u4e3e\u7c7b\u578b\u517c\u5bb9\u6570\u503c\u7c7b\u578b\nlet bar: number = E.A; // OK, \u6570\u503c\u7c7b\u578b\u517c\u5bb9\u679a\u4e3e\u7c7b\u578b\n// \u679a\u4e3e\u4e4b\u95f4\u4e0d\u517c\u5bb9\nlet baz = E.A;\nbaz = F.X; // Error\n")),(0,l.kt)("h4",{id:"\u6cdb\u578b\u517c\u5bb9"},"\u6cdb\u578b\u517c\u5bb9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u7c7b\u578b\u6210\u5458\u90fd\u4e3a\u7a7a\uff0c\u76f8\u4e92\u517c\u5bb9\ninterface Empty<T> {}\nlet x: Empty<number> = {};\nlet y: Empty<string> = {};\n\nx = y; // OK\ny = x; // OK\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u6210\u5458\u7c7b\u578b\u4e0d\u540c\uff0c\u6240\u4ee5\u76f8\u4e92\u4e0d\u517c\u5bb9\ninterface NotEmpty<T> {\n    data: T;\n}\nlet x: NotEmpty<number> = { data: 1 };\nlet y: NotEmpty<string> = { data: '1' };\n\nx = y; // Error\ny = x; // Error\n")),(0,l.kt)("h3",{id:"\u51fd\u6570\u53c2\u6570\u4e2a\u6570\u517c\u5bb9"},"\u51fd\u6570\u53c2\u6570\u4e2a\u6570\u517c\u5bb9"),(0,l.kt)("p",null,"\u591a\u517c\u5bb9\u5c11"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570\u591a\u7684\u517c\u5bb9\u53c2\u6570\u5c11\u7684 (\u4e3b\u8981\u662f\u56e0\u4e3a JS \u4e2d\u7ecf\u5e38\u53ef\u4ee5\u5ffd\u7565\u591a\u4f59\u7684\u53c2\u6570\uff0c\u6bd4\u5982 Array#map)\uff0c"),(0,l.kt)("li",{parentName:"ul"},"\u5f53 strictFunctionTypes \u4e3a true \u65f6\uff0c\u53c2\u6570\u5c11\u7684\u4e0d\u80fd\u517c\u5bb9\u53c2\u6570\u591a\u7684")),(0,l.kt)("p",null,"\u5fc5\u9009\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let foo = (a: number) => a;\nlet bar = (a: number, b: number) => a + b;\n\nfoo = bar; // Error, \u5f53 strictFunctionTypes \u4e3a true \u65f6\nbar = foo; // OK, \u591a\u517c\u5bb9\u5c11\n")),(0,l.kt)("p",null,"\u5fc5\u9009\u53c2\u6570\u3001\u53ef\u9009\u53c2\u6570\u3001\u5269\u4f59\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let a = (p1: number, p2: number) => { }\nlet b = (p1?: number, p2?: number) => { }\nlet c = (...args: number[]) => {}\n\na = b; // Ok\na = c; // Ok\n\nb = a; // Error, \u5f53 strictFunctionTypes \u4e3a true \u65f6\nb = c; // Error, \u5f53 strictFunctionTypes \u4e3a true \u65f6\n\nc = a; // Ok\nc = b; // Ok\n")),(0,l.kt)("p",null,"\u547d\u540d\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let foo = (p: { a: number }) => p.a;\nlet bar = (p: { a: number; b: number }) => p.a;\n\nfoo = bar; // Error when strictFunctionTypes is true\nbar = foo; // OK\n")),(0,l.kt)("h2",{id:"\u7c7b\u578b\u4fdd\u62a4"},"\u7c7b\u578b\u4fdd\u62a4"),(0,l.kt)("p",null,"\u8bb8\u591a\u8868\u8fbe\u5f0f\u53ef\u4ee5\u786e\u4fdd\u5728\u67d0\u4e2a\u4f5c\u7528\u57df\u4e2d\u8fd0\u884c\u65f6\uff0c\u6570\u636e\u6709\u7740\u66f4\u7cbe\u786e\u7684\u7c7b\u578b\uff0c\u79f0\u4e3a\u7c7b\u578b\u4fdd\u62a4\u3002"),(0,l.kt)("h3",{id:"\u5e38\u8bc6\u522b\u4e3a\u7c7b\u578b\u4fdd\u62a4\u7684\u64cd\u4f5c\u7b26"},"\u5e38\u8bc6\u522b\u4e3a\u7c7b\u578b\u4fdd\u62a4\u7684\u64cd\u4f5c\u7b26"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76f8\u7b49\u8fd0\u7b97\u7b26: ",(0,l.kt)("inlineCode",{parentName:"li"},"===")," ",(0,l.kt)("inlineCode",{parentName:"li"},"!==")),(0,l.kt)("li",{parentName:"ul"},"\u903b\u8f91\u8fd0\u7b97\u7b26: ",(0,l.kt)("inlineCode",{parentName:"li"},"||")),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u65ad\u8a00\u8fd0\u7b97\u7b26: ",(0,l.kt)("inlineCode",{parentName:"li"},"!")," \u53bb\u9664 null \u548c undefined")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function getLength(arg: string | null): number {\n    arg.length; // Error\uff0c\u7f16\u8bd1\u5668\u68c0\u67e5\u5230 arg \u7684\u7c7b\u578b\u4e3a string \u6216 null\uff0c\u6240\u4ee5\u4e0d\u80fd\u8bbf\u95ee length \u5c5e\u6027\n    if (arg === null) {\n        return 0; // \u7f16\u8bd1\u5668\u53ef\u4ee5\u63a8\u65ad\u51fa\uff0c\u5728\u8fd9\u4e2a if \u5b50\u53e5\u4e2d\uff0carg \u7684\u7c7b\u578b\u662f null\n    }\n    return arg.length; // \u7f16\u8bd1\u5668\u53ef\u4ee5\u63a8\u65ad\u51fa\uff0c\u6b64\u5904 arg \u7684\u7c7b\u578b\u662f string\n}\n")),(0,l.kt)("h3",{id:"\u7c7b\u578b\u8c13\u8bcd"},"\u7c7b\u578b\u8c13\u8bcd"),(0,l.kt)("p",null,"\u51fd\u6570\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u4e3a\u7c7b\u578b\u8c13\u8bcd ",(0,l.kt)("inlineCode",{parentName:"p"},"parameterName is Type"),", \u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"parameterName")," \u4e3a\u51fd\u6570\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// arg is string \u662f\u7c7b\u578b\u8c13\u8bcd\nfunction isString(arg: any): arg is string {\n    return typeof arg === 'string';\n}\nfunction f(foo: string | string[]) {\n    if (isString(foo)) {\n        foo.toUpperCase(); // OK\n    } else if (Array.isArray(foo)) {\n        foo.map(it => it.toUpperCase()); // OK\n    }\n}\n")),(0,l.kt)("h3",{id:"\u53ef\u8bc6\u522b\u4e3a\u7c7b\u578b\u4fdd\u62a4\u7684\u5173\u952e\u5b57"},"\u53ef\u8bc6\u522b\u4e3a\u7c7b\u578b\u4fdd\u62a4\u7684\u5173\u952e\u5b57"),(0,l.kt)("p",null,"\u5982\u4e0b\u4e09\u4e2a JS \u5173\u952e\u5b57\u53ef\u4ee5\u5e2e\u52a9 TS \u8fdb\u4e00\u6b65\u8bc6\u522b\u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"typeof"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"type v === typename")," \u5176\u4e2d typename \u4e3a boolean, number, string, symbol \u65f6\uff0cTS \u624d\u4f1a\u8bc6\u522b\u4e3a\u7c7b\u578b\u4fdd\u62a4\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"instanceof")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"in"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function f(foo: string | string[]) {\n    foo.toUpperCase(); // Error\n    foo.map(it => it.toUpperCase());\n    foo.toFixed(); // Error\n\n    if (typeof foo === 'string') {\n        foo.toUpperCase(); // OK\n    } else if (foo instanceof Array) {\n        foo.map(it => it.toUpperCase()); // OK\n    }\n}\nfunction b(bar: { a: string } | { b: string }) {\n    bar.a; // Error\n    bar.b; // Error\n\n    if ('a' in bar) {\n        bar.a; // Ok\n    } else {\n        bar.b; // Ok\n    }\n}\n")),(0,l.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,l.kt)("p",null,"\u672c\u7bc7\u901a\u8fc7\u7c7b\u578b\u68c0\u67e5\u673a\u5236\u63a2\u7d22\u4e86\u7c7b\u578b\u68c0\u67e5\u7684\u89c4\u5219\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog/issues/13"},"\u4e0b\u7bc7"),"\u901a\u8fc7\u5c06\u63a2\u7d22 TypeScript \u7684\u9ad8\u7ea7\u7c7b\u578b\u3002"),(0,l.kt)("h3",{id:"\u534f\u8bae"},"\u534f\u8bae"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/WowBar/blog/blob/master/LICENSE.md"},(0,l.kt)("img",{parentName:"a",src:"https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png",alt:"CC BY-NC-ND 4.0",title:"LICENSE"}))),(0,l.kt)("p",null,"\u672c\u4f5c\u54c1\u91c7\u7528",(0,l.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-nc-nd/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d-\u975e\u5546\u4e1a\u6027\u4f7f\u7528-\u7981\u6b62\u6f14\u7ece 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002"),(0,l.kt)("h3",{id:"\u300a\u63a2\u7d22-typescript-\u7c7b\u578b\u6ce8\u89e3\u300b"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/WowBar/blog/issues?q=label%3AExploringTS+sort%3Acreated-asc"},"\u300a\u63a2\u7d22 TypeScript \u7c7b\u578b\u6ce8\u89e3\u300b")),(0,l.kt)("ol",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/4"},"\u6269\u5c55\u7684 JavaScript")),(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/8"},"\u6570\u636e\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/9"},"\u81ea\u5b9a\u4e49\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/11"},"\u7c7b\u578b\u68c0\u67e5")),(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/13"},"\u9ad8\u7ea7\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ol",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WowBar/blog/issues/14"},"\u7c7b\u578b\u7f16\u7a0b"))),(0,l.kt)("h3",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,l.kt)("p",null,"Handbook: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript-Handbook"},"https://github.com/microsoft/TypeScript-Handbook")))}m.isMDXComponent=!0}}]);