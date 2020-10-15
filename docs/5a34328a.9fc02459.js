(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(286)),i={title:"State"},s={unversionedId:"state",id:"state",isDocsHomePage:!1,title:"State",description:"How you manage your Q app's state depends on your app's requirements. In most cases, an app's data is best stored in a database or data store of some kind. But sometimes it's convenient to store run-time information in your app's memory, especially during prototyping when you're trying to iterate quickly and refine ideas.",source:"@site/docs/state.md",slug:"/state",permalink:"/qd/docs/state",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/state.md",version:"current",sidebar:"someSidebar",previous:{title:"Event Arguments",permalink:"/qd/docs/arguments"},next:{title:"Routing",permalink:"/qd/docs/routing"}},p=[],c={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"How you manage your Q app's state depends on your app's requirements. In most cases, an app's data is best stored in a database or data store of some kind. But sometimes it's convenient to store run-time information in your app's memory, especially during prototyping when you're trying to iterate quickly and refine ideas."),Object(o.b)("p",null,"In a Q app, you can store run-time information at three levels:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"App-level:")," Information shared across all users."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"User-level:")," Information private to a user, but shared across all browser tabs."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Client-level:")," Information private to a browser tab.")),Object(o.b)("p",null,"In real world apps, the decision on whether to store information at the client, user, or app level depends on the problem you're trying to solve. For example, if you were building an online store, you'd probably want to store product inventory at the app level and shopping carts at the user level. Most other kinds of information - search results, past orders, or product details - are best stored at the client-level (searching for products in one tab and having search results appear in another tab would drive even your most loyal customers up the wall)."),Object(o.b)("p",null,"In other words, your Q app is multi-user by default, but how your app manages data at the app-level, at the user-level, and at the client-level is up to you."),Object(o.b)("p",null,"The Q app runtime context ",Object(o.b)("inlineCode",{parentName:"p"},"q")," (of type ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"api/server#q"}),"Q"),") carries ",Object(o.b)("inlineCode",{parentName:"p"},"q.app"),", ",Object(o.b)("inlineCode",{parentName:"p"},"q.user"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"q.client"),", three dictionary-like objects for storing information at the app-level, user-level, and client-level, respectively. "),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"q.app"),", ",Object(o.b)("inlineCode",{parentName:"p"},"q.user"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"q.client")," are all ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"api/core#Expando"}),"Expando")," instances, which means they behave both like dictionaries and objects: ",Object(o.b)("inlineCode",{parentName:"p"},"q.client['foo']")," is the same as ",Object(o.b)("inlineCode",{parentName:"p"},"q.client.foo"),". ",Object(o.b)("inlineCode",{parentName:"p"},"q.client.foo")," is easier to read."))),Object(o.b)("p",null,"In most non-trivial apps, you'll find yourself frequently copying values from ",Object(o.b)("inlineCode",{parentName:"p"},"q.args")," into ",Object(o.b)("inlineCode",{parentName:"p"},"q.client")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"q.user"),", depending on the problem you're solving). If this gets too repetitive for your taste, use ",Object(o.b)("inlineCode",{parentName:"p"},"copy_expando()")," to copy everything in ",Object(o.b)("inlineCode",{parentName:"p"},"q.args")," to ",Object(o.b)("inlineCode",{parentName:"p"},"q.client")," at the beginning of your ",Object(o.b)("inlineCode",{parentName:"p"},"listen()")," handler:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py",metastring:"{4}","{4}":!0}),"from h2o_q import Q, listen, copy_expando\n\nasync def serve(q: Q):\n    copy_expando(q.args, q.client)\n    # Do something else...\n\nlisten('/foo', serve)\n")))}l.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);